/**
 * Geospatial data for the Aguelmous demonstrator.
 *
 * IMPORTANT: No verified GeoJSON for permit PR3538746 is present in the repo
 * or the source package. We do NOT invent license boundaries. `aguelmousGeoJson`
 * is therefore `null`, and the map renders a region-context placeholder marked
 * "GeoJSON layer pending controlled data import".
 *
 * To activate the real layer later: drop the controlled GeoJSON
 * FeatureCollection here (or import it from /public) and assign it below. The
 * <AguelmousMap> component already projects any Polygon/MultiPolygon/Point
 * geometry into its SVG viewbox — no component change required.
 */

export type GeoPosition = [number, number];

export type GeoGeometry =
  | { type: "Polygon"; coordinates: GeoPosition[][] }
  | { type: "MultiPolygon"; coordinates: GeoPosition[][][] }
  | { type: "Point"; coordinates: GeoPosition }
  | { type: "LineString"; coordinates: GeoPosition[] };

export type GeoFeature = {
  type: "Feature";
  properties?: Record<string, unknown>;
  geometry: GeoGeometry;
};

export type GeoFeatureCollection = {
  type: "FeatureCollection";
  features: GeoFeature[];
};

/** Controlled permit/area layer — pending data import. */
export const aguelmousGeoJson: GeoFeatureCollection | null = null;

/** True when a real GeoJSON layer is available to render. */
export const hasGeoJson = aguelmousGeoJson !== null;
