import { ComeAndBeInspired } from "@/components/home/come-and-be-inspired";
import { Hero } from "@/components/home/hero";
import { YourDay } from "@/components/home/your-day";
import { PageLayout } from "@/components/layouts/page-layout";

function HomePageLayout() {
  return (
    <PageLayout showHeader={false}>
      <main>
        <Hero />
        <YourDay className="pt-40 pb-8" />
        <ComeAndBeInspired className="pb-40" />
      </main>
    </PageLayout>
  );
}

export { HomePageLayout };
