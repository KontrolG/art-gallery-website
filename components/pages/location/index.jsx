import { PageLayout } from "@/components/layouts/page-layout";
import { LocationMap } from "@/components/location/location-map";
import { OurLocation } from "@/components/location/our-location";

function LocationPageLayout() {
  return (
    <PageLayout footerVariant="alternative">
      <main>
        <LocationMap />
        <OurLocation className="py-12 lg:py-[5.5rem]" />
      </main>
    </PageLayout>
  );
}

export { LocationPageLayout };
