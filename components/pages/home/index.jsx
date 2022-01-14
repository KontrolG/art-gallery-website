import { ComeAndBeInspired } from "@/components/home/come-and-be-inspired";
import { Hero } from "@/components/home/hero";
import { YourDay } from "@/components/home/your-day";
import { PageLayout } from "@/components/layouts/page-layout";

function HomePageLayout() {
  return (
    <PageLayout showHeader={false}>
      <main>
        <Hero />
        <YourDay className="pt-40 md:pt-[8.375rem] lg:pt-[11.25rem] pb-8 md:pb-3 lg:pb-7" />
        <ComeAndBeInspired className="pb-40 md:pb-[120px]" />
      </main>
    </PageLayout>
  );
}

export { HomePageLayout };
