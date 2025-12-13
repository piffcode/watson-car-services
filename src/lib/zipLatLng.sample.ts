/**
 * Lightweight ZIP -> lat/lng sample dataset (NOT complete).
 * Default service-area checker uses ZIP-based distance estimate.
 *
 * TODO (recommended):
 * - Replace this with a more complete dataset (CSV/JSON) or a small internal lookup service.
 * - Or integrate real geocoding (Google Maps, Mapbox, Nominatim) with rate limiting + caching.
 */
export const ZIP_LAT_LNG: Record<string, { lat: number; lng: number }> = {
  // Newark, NJ
  "07102": { lat: 40.7357, lng: -74.1724 },

  // Nearby NJ
  "07302": { lat: 40.7216, lng: -74.0476 }, // Jersey City
  "07030": { lat: 40.7440, lng: -74.0324 }, // Hoboken
  "07201": { lat: 40.6640, lng: -74.2107 }, // Elizabeth

  // NYC examples (for radius tests)
  "10001": { lat: 40.7506, lng: -73.9972 }, // Manhattan
  "11201": { lat: 40.6958, lng: -73.9890 }, // Brooklyn

  // Farther examples
  "08540": { lat: 40.3573, lng: -74.6497 }, // Princeton
  "08608": { lat: 40.2204, lng: -74.7643 }  // Trenton
};
