import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import { HOME_PATH } from "@/constants/paths";

function Header() {
  return (
    <header className="container z-10 relative">
      <CallToActionLink
        href={HOME_PATH}
        direction="left"
        className="text-sm md:text-xl absolute"
      >
        Back to home
      </CallToActionLink>
    </header>
  );
}

export { Header };
