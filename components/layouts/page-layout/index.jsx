import { Header } from "../header";
import Maybe from "@/components/common/helpers/maybe";
import { Footer } from "../footer";

function PageLayout({
  children,
  showHeader = true,
  showFooter = true,
  footerVariant = "default"
}) {
  return (
    <>
      <Maybe it={showHeader}>
        <Header />
      </Maybe>
      {children}
      <Maybe it={showFooter}>
        <Footer variant={footerVariant} />
      </Maybe>
    </>
  );
}

export { PageLayout };
