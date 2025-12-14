import { SITE } from "@/config/site";
import { milesBetween } from "./distance";
import { ZIP_LAT_LNG } from "./zipLatLng.sample";

export type ServiceAreaResult =
  | {
      ok: true;
      miles: number;
      sameDayLikely: boolean;
      mode: "zip-estimate";
      zip: string;
    }
  | {
      ok: false;
      reason:
        | "invalid-input"
        | "zip-not-found"
        | "outside-radius";
      mode: "zip-estimate";
      zip?: string;
      miles?: number;
    };

export function extractZip(input: string): string | null {
  const m = input.match(/\b(\d{5})(?:-\d{4})?\b/);
  const zip = m?.[1];
  return zip ?? null;
}

export function checkServiceArea(input: string): ServiceAreaResult {
  const zip = extractZip(input.trim());
  if (!zip) {
    return { ok: false, reason: "invalid-input", mode: "zip-estimate" };
  }

  const coords = ZIP_LAT_LNG[zip];
  if (!coords) {
    return { ok: false, reason: "zip-not-found", mode: "zip-estimate", zip };
  }

  const miles = milesBetween(SITE.ORIGIN_LAT_LNG, coords);

  if (miles <= SITE.SERVICE_RADIUS_MILES) {
    return {
      ok: true,
      miles,
      sameDayLikely: miles <= SITE.SAME_DAY_RADIUS_MILES,
      mode: "zip-estimate",
      zip
    };
  }

  return {
    ok: false,
    reason: "outside-radius",
    mode: "zip-estimate",
    zip,
    miles
  };
}
