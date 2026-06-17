/**
 * Geospatial data for the Aguelmous demonstrator.
 *
 * The controlled GeoJSON pack is shipped in `public/geo/` and loaded at runtime:
 *   - public-lite layer  → visible map (generalized marker + context)
 *   - controlled layer   → detail drawer / NDA mode (center, pivot, ref line)
 *
 * Boundary note: neither file contains a legal license boundary polygon (the
 * pack provides generalized point/line context only). We therefore do NOT
 * invent boundaries — the public map shows the GeoJSON-driven marker/context
 * layer, and the UI states this explicitly.
 */

export type GeoPosition = [number, number];

export type GeoGeometry =
  | { type: "Polygon"; coordinates: GeoPosition[][] }
  | { type: "MultiPolygon"; coordinates: GeoPosition[][][] }
  | { type: "Point"; coordinates: GeoPosition }
  | { type: "LineString"; coordinates: GeoPosition[] };

export type GeoFeature = {
  type: "Feature";
  id?: string;
  properties?: Record<string, unknown>;
  geometry: GeoGeometry;
};

export type GeoFeatureCollection = {
  type: "FeatureCollection";
  name?: string;
  metadata?: Record<string, unknown>;
  features: GeoFeature[];
};

/** Static asset URLs (served from /public/geo). */
export const PUBLIC_GEOJSON_URL =
  "/geo/aguelmous_smart_fault_demonstrator_public.geojson";
export const CONTROLLED_GEOJSON_URL =
  "/geo/aguelmous_pr3538746_controlled_reference.geojson";

/**
 * Whether a legal boundary polygon is available in the shipped layers.
 * The pack provides point/line context only, so this is false and the UI
 * surfaces the "public-lite marker/context layer used" note.
 */
export function hasBoundaryPolygon(fc: GeoFeatureCollection | null): boolean {
  if (!fc) return false;
  return fc.features.some(
    (f) =>
      f.geometry.type === "Polygon" || f.geometry.type === "MultiPolygon",
  );
}

/** Fetch + parse a GeoJSON FeatureCollection by URL. */
export async function loadGeoJson(
  url: string,
): Promise<GeoFeatureCollection> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load GeoJSON: ${res.status}`);
  return (await res.json()) as GeoFeatureCollection;
}
