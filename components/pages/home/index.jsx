import { Hero } from "@/components/home/hero";
import { PageLayout } from "@/components/layouts/page-layout";

function HomePageLayout() {
  return (
    <PageLayout showHeader={false}>
      <main>
        <Hero />
      </main>
    </PageLayout>
  );
}

export { HomePageLayout };
