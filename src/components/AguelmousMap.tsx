import { MapPin, Layers } from "lucide-react";
import {
  aguelmousGeoJson,
  hasGeoJson,
  type GeoFeatureCollection,
  type GeoPosition,
} from "../data/aguelmousGeo";
import { aguelmous } from "../data/aguelmous";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

const W = 600;
const H = 380;
const PAD = 36;

/** Collect all [lng,lat] positions from a FeatureCollection for bbox/projection. */
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

/**
 * Lightweight SVG-based GeoJSON renderer. No external map/tile dependency —
 * which keeps the controlled window offline-safe and avoids leaking precise
 * coordinates. When no GeoJSON is present it renders an abstract region-context
 * motif (NOT a real boundary) plus a "pending" badge.
 */
export default function AguelmousMap() {
  const tt = useT();

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

        {hasGeoJson && aguelmousGeoJson ? (
          <GeoLayer fc={aguelmousGeoJson} />
        ) : (
          <ContextMotif />
        )}
      </svg>

      {/* Pending / status footer */}
      <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 text-[11px] text-ivory/45">
        <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-copper" />
        {hasGeoJson ? tt(S.aguelmous.regionContext) : tt(S.aguelmous.mapPending)}
      </div>
    </div>
  );
}

/** Project + draw a real GeoJSON layer when data is supplied. */
function GeoLayer({ fc }: { fc: GeoFeatureCollection }) {
  const pts = collectPositions(fc);
  if (pts.length === 0) return <ContextMotif />;

  const lngs = pts.map((p) => p[0]);
  const lats = pts.map((p) => p[1]);
  const minX = Math.min(...lngs);
  const maxX = Math.max(...lngs);
  const minY = Math.min(...lats);
  const maxY = Math.max(...lats);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  const scale = Math.min((W - PAD * 2) / spanX, (H - PAD * 2) / spanY);
  const ox = (W - spanX * scale) / 2;
  const oy = (H - spanY * scale) / 2;
  const project = ([lng, lat]: GeoPosition): [number, number] => [
    ox + (lng - minX) * scale,
    // invert Y: latitude grows upward
    H - (oy + (lat - minY) * scale),
  ];

  return (
    <g>
      {fc.features.map((f, i) => {
        const g = f.geometry;
        if (g.type === "Polygon" || g.type === "MultiPolygon") {
          const polys =
            g.type === "Polygon" ? [g.coordinates] : g.coordinates;
          return polys.map((poly, j) => (
            <path
              key={`${i}-${j}`}
              d={
                poly
                  .map(
                    (ring) =>
                      "M" +
                      ring
                        .map((c) => project(c).join(","))
                        .join("L") +
                      "Z",
                  )
                  .join(" ")
              }
              fill="rgba(184,115,51,0.18)"
              stroke="#C9A46A"
              strokeWidth={1.5}
            />
          ));
        }
        if (g.type === "LineString") {
          return (
            <path
              key={i}
              d={"M" + g.coordinates.map((c) => project(c).join(",")).join("L")}
              fill="none"
              stroke="#3C7D8C"
              strokeWidth={1.5}
            />
          );
        }
        const [cx, cy] = project(g.coordinates);
        return <circle key={i} cx={cx} cy={cy} r={4} fill="#B87333" />;
      })}
    </g>
  );
}

/**
 * Abstract region-context motif used while controlled GeoJSON is pending.
 * Decorative contour lines + a single location marker — deliberately NOT a
 * permit boundary or real coordinates.
 */
function ContextMotif() {
  return (
    <g opacity={0.85}>
      {/* stylised contour relief (abstract, not a boundary) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M40,${120 + i * 34} C170,${80 + i * 30} 360,${
            180 + i * 26
          } 560,${110 + i * 32}`}
          fill="none"
          stroke="rgba(201,164,106,0.16)"
          strokeWidth={1.25}
        />
      ))}
      {/* fault-corridor hint line */}
      <path
        d="M110,300 L300,150 L470,210"
        fill="none"
        stroke="rgba(60,125,140,0.45)"
        strokeWidth={1.5}
        strokeDasharray="5 5"
      />
      {/* region marker (context only) */}
      <g transform="translate(300,170)">
        <circle r="26" fill="rgba(184,115,51,0.12)">
          <animate
            attributeName="r"
            values="20;30;20"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="6" fill="#B87333" stroke="#F3EFE7" strokeWidth="1.5" />
      </g>
    </g>
  );
}

/** Re-export the icon so the section can show a pin in its narrative. */
export { MapPin };
