import { Container } from "@/components/ui/Container";
import { baseMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";
import { ServiceAreaChecker } from "@/components/ServiceAreaChecker";

export const metadata = baseMetadata({
  title: "Service Area",
  path: "/service-area",
  description: "Service radius details for scheduled and same-day appointments."
});

export default function ServiceAreaPage() {
  const mapEmbedHtml = SITE.MAP_EMBED_HTML ?? "";
  const hasMap = mapEmbedHtml.trim().length > 0;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">Service Area</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          Scheduled appointments: up to <span className="font-semibold">{SITE.SERVICE_RADIUS_MILES} miles</span> from{" "}
          <span className="font-semibold">{SITE.PRIMARY_CITY}</span>.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-zinc-700">
          Same-day: <span className="font-semibold">may be available</span> within{" "}
          {SITE.SAME_DAY_RADIUS_MILES} miles (availability-based).
        </p>

        <div className="mt-6">
          <ServiceAreaChecker />
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-extrabold tracking-tight">Nearby cities</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Examples (not exhaustive): {SITE.SERVICE_CITIES.join(", ")}.
          </p>

          <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
            <div className="text-sm font-semibold">Map</div>
            {!hasMap ? (
              <p className="mt-2 text-sm text-zinc-700">
                Map embed not configured yet. TODO: paste an iframe into{" "}
                <code>MAP_EMBED_HTML</code> in <code>src/config/site.ts</code>.
              </p>
            ) : (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: mapEmbedHtml }}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
