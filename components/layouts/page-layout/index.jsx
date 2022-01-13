import { Header } from "../header";
import Maybe from "@/components/common/helpers/maybe";
import { Footer } from "../footer";

function PageLayout({ children, showHeader = true, showFooter = true }) {
  return (
    <>
      <Maybe it={showHeader}>
        <Header />
      </Maybe>
      {children}
      <Maybe it={showFooter}>
        <Footer />
      </Maybe>
    </>
  );
}

export { PageLayout };
