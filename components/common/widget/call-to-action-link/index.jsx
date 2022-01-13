import { Link } from "@/components/common/routing/link";
import { SHARED_IMAGES_PATH } from "@/constants/paths";
import classes from "classnames";

function CallToActionLink({ className, href, children, linkProps }) {
  return (
    <Link
      className={classes("inline-flex group text-white", className)}
      {...linkProps}
      href={href}
    >
      <div className="bg-black py-[1em] px-[1.5em] uppercase font-serif flex-centered group-hover:bg-emphasis transition-colors">
        {children}
      </div>
      <div className="p-[1em] bg-emphasis flex-centered group-hover:bg-black transition-colors">
        <img
          className="h-[1em] w-auto"
          src={SHARED_IMAGES_PATH + "/icon-arrow-right.svg"}
          alt="Arrow right"
        />
      </div>
    </Link>
  );
}

export { CallToActionLink };
