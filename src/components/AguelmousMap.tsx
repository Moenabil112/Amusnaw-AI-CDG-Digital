import { useEffect, useState } from "react";
import { MapPin, Layers, Loader2 } from "lucide-react";
import {
  CONTROLLED_GEOJSON_URL,
  PUBLIC_GEOJSON_URL,
  hasBoundaryPolygon,
  loadGeoJson,
  type GeoFeatureCollection,
  type GeoPosition,
} from "../data/aguelmousGeo";
import { aguelmous } from "../data/aguelmous";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

const W = 600;
const H = 380;
const PAD = 56;

/** Collect every [lng,lat] position from a FeatureCollection. */
function collectPositions(fc: GeoFeatureCollection): GeoPosition[] {
  const out: GeoPosition[] = [];
  const walk = (c: unknown) => {
    if (
      Array.isArray(c) &&
      c.length === 2 &&
      typeof c[0] === "number" &&
      typeof c[1] === "number"
    ) {
      out.push(c as GeoPosition);
    } else if (Array.isArray(c)) {
      c.forEach(walk);
    }
  };
  fc.features.forEach((f) => walk(f.geometry.coordinates));
  return out;
}

/** Build a lng/lat → SVG projector; centers degenerate (single-point) data. */
function makeProjector(pts: GeoPosition[]) {
  const lngs = pts.map((p) => p[0]);
  const lats = pts.map((p) => p[1]);
  const minX = Math.min(...lngs);
  const maxX = Math.max(...lngs);
  const minY = Math.min(...lats);
  const maxY = Math.max(...lats);
  const spanX = maxX - minX;
  const spanY = maxY - minY;

  if (spanX < 1e-9 && spanY < 1e-9) {
    // single point / coincident → place at centre
    return (_p: GeoPosition): [number, number] => [W / 2, H / 2];
  }
  const scale = Math.min(
    (W - PAD * 2) / (spanX || spanY),
    (H - PAD * 2) / (spanY || spanX),
  );
  const ox = (W - spanX * scale) / 2;
  const oy = (H - spanY * scale) / 2;
  return ([lng, lat]: GeoPosition): [number, number] => [
    ox + (lng - minX) * scale,
    H - (oy + (lat - minY) * scale), // invert Y (lat grows upward)
  ];
}

/**
 * Public-lite map. Renders the GeoJSON marker/context layer shipped in
 * /public/geo. No tile dependency (offline-safe, no coordinate leakage). The
 * shipped layer contains no boundary polygon, so the footer surfaces that.
 */
export default function AguelmousMap() {
  const tt = useT();
  const [fc, setFc] = useState<GeoFeatureCollection | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let alive = true;
    loadGeoJson(PUBLIC_GEOJSON_URL)
      .then((data) => {
        if (!alive) return;
        setFc(data);
        setState("ready");
      })
      .catch(() => alive && setState("error"));
    return () => {
      alive = false;
    };
  }, []);

  const pts = fc ? collectPositions(fc) : [];
  const project = makeProjector(pts.length ? pts : [[0, 0]]);

  return (
    <div className="panel relative overflow-hidden">
      <div className="absolute start-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-graphite-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sand backdrop-blur">
        <Layers className="h-3 w-3" /> {aguelmous.region}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block aspect-[600/380] w-full bg-grid-faint [background-size:28px_28px]"
        role="img"
        aria-label={`${aguelmous.displayName} — ${aguelmous.region}`}
      >
        <defs>
          <radialGradient id="aguelGlow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="rgba(184,115,51,0.18)" />
            <stop offset="100%" stopColor="rgba(184,115,51,0)" />
          </radialGradient>
        </defs>
        <rect width={W} height={H} fill="url(#aguelGlow)" />

        {/* decorative region/terrain context backdrop (not a boundary) */}
        <ContextBackdrop />

        {/* GeoJSON-driven features */}
        {state === "ready" &&
          fc &&
          fc.features.map((f, i) => {
            const g = f.geometry;
            if (g.type === "Point") {
              const [cx, cy] = project(g.coordinates);
              return <Marker key={f.id ?? i} cx={cx} cy={cy} />;
            }
            if (g.type === "LineString") {
              return (
                <path
                  key={f.id ?? i}
                  d={"M" + g.coordinates.map((c) => project(c).join(",")).join("L")}
                  fill="none"
                  stroke="#3C7D8C"
                  strokeWidth={1.5}
                  strokeDasharray="5 5"
                />
              );
            }
            if (g.type === "Polygon" || g.type === "MultiPolygon") {
              const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
              return polys.map((poly, j) => (
                <path
                  key={`${i}-${j}`}
                  d={poly
                    .map(
                      (ring) =>
                        "M" + ring.map((c) => project(c).join(",")).join("L") + "Z",
                    )
                    .join(" ")}
                  fill="rgba(184,115,51,0.18)"
                  stroke="#C9A46A"
                  strokeWidth={1.5}
                />
              ));
            }
            return null;
          })}
      </svg>

      {/* Status footer — driven by the loaded GeoJSON, never placeholder text */}
      <div className="space-y-1 border-t border-white/10 px-4 py-2.5 text-[11px] text-ivory/50">
        {state === "loading" && (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-3 w-3 animate-spin" /> {tt(S.aguelmous.mapLoading)}
          </span>
        )}
        {state === "error" && (
          <span className="text-copper/80">{tt(S.aguelmous.mapError)}</span>
        )}
        {state === "ready" && fc && (
          <>
            <span className="inline-flex items-center gap-2 font-medium text-ivory/65">
              <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-datablue" />
              {tt(S.aguelmous.publicLayer)}
            </span>
            {!hasBoundaryPolygon(fc) && (
              <p className="text-ivory/40">{tt(S.aguelmous.boundaryNote)}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Marker({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle r="26" fill="rgba(184,115,51,0.12)">
        <animate
          attributeName="r"
          values="18;30;18"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="6" fill="#B87333" stroke="#F3EFE7" strokeWidth="1.5" />
    </g>
  );
}

/** Abstract contour relief + fault hint — decorative context, not a boundary. */
function ContextBackdrop() {
  return (
    <g opacity={0.7} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M40,${120 + i * 34} C170,${80 + i * 30} 360,${180 + i * 26} 560,${
            110 + i * 32
          }`}
          fill="none"
          stroke="rgba(201,164,106,0.14)"
          strokeWidth={1.25}
        />
      ))}
    </g>
  );
}

/**
 * Controlled / NDA reference geometry (center, Laggida pivot, reference line).
 * Loaded only when the detail drawer is opened.
 */
export function ControlledReferenceMap() {
  const tt = useT();
  const [fc, setFc] = useState<GeoFeatureCollection | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let alive = true;
    loadGeoJson(CONTROLLED_GEOJSON_URL)
      .then((data) => {
        if (!alive) return;
        setFc(data);
        setState("ready");
      })
      .catch(() => alive && setState("error"));
    return () => {
      alive = false;
    };
  }, []);

  if (state === "loading")
    return (
      <p className="inline-flex items-center gap-2 py-2 text-xs text-ivory/50">
        <Loader2 className="h-3 w-3 animate-spin" /> {tt(S.aguelmous.mapLoading)}
      </p>
    );
  if (state === "error" || !fc)
    return <p className="py-2 text-xs text-copper/80">{tt(S.aguelmous.mapError)}</p>;

  const pts = collectPositions(fc);
  const project = makeProjector(pts);
  const cw = 360;
  const ch = 200;
  // re-scale projector output (computed for WxH) into the smaller drawer view
  const sx = cw / W;
  const sy = ch / H;

  const roleLabel = (role: unknown) =>
    role === "documented_permit_center"
      ? tt(S.aguelmous.ctrlCenter)
      : role === "documented_pivot_reference"
        ? tt(S.aguelmous.ctrlPivot)
        : "";

  return (
    <div>
      <svg
        viewBox={`0 0 ${cw} ${ch}`}
        className="block w-full rounded-md border border-white/10 bg-grid-faint [background-size:22px_22px]"
        role="img"
        aria-label={tt(S.aguelmous.ctrlTitle)}
      >
        {fc.features.map((f, i) => {
          const g = f.geometry;
          if (g.type === "LineString") {
            return (
              <path
                key={f.id ?? i}
                d={
                  "M" +
                  g.coordinates
                    .map((c) => {
                      const [x, y] = project(c);
                      return `${x * sx},${y * sy}`;
                    })
                    .join("L")
                }
                fill="none"
                stroke="#3C7D8C"
                strokeWidth={1.25}
                strokeDasharray="4 4"
              />
            );
          }
          if (g.type === "Point") {
            const [x, y] = project(g.coordinates);
            const isCenter =
              f.properties?.pointRole === "documented_permit_center";
            return (
              <g key={f.id ?? i} transform={`translate(${x * sx},${y * sy})`}>
                <circle
                  r={isCenter ? 5 : 4}
                  fill={isCenter ? "#B87333" : "#C9A46A"}
                  stroke="#0b0b0b"
                  strokeWidth="1"
                />
                <text
                  x={8}
                  y={4}
                  className="fill-ivory/70"
                  style={{ fontSize: 9 }}
                >
                  {roleLabel(f.properties?.pointRole)}
                </text>
              </g>
            );
          }
          return null;
        })}
      </svg>
      <p className="mt-2 text-[11px] leading-relaxed text-ivory/50">
        {tt(S.aguelmous.ctrlNote)}
      </p>
    </div>
  );
}

export { MapPin };
