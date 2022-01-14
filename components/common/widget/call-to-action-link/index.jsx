import { Link } from "@/components/common/routing/link";
import { SHARED_IMAGES_PATH } from "@/constants/paths";
import classes from "classnames";

function CallToActionLink({
  className,
  href,
  children,
  linkProps,
  variant,
  direction = "right"
}) {
  return (
    <Link
      className={classes("inline-flex group text-white", className)}
      {...linkProps}
      href={href}
    >
      <div
        className={classes(
          "p-[1em] flex-centered transition-colors",
          variant === "alternative"
            ? "bg-black group-hover:bg-emphasis"
            : "bg-emphasis group-hover:bg-black",
          direction === "left" ? "block" : "hidden"
        )}
      >
        <img
          className="h-[1em] w-auto"
          src={SHARED_IMAGES_PATH + "/icon-arrow-left.svg"}
          alt="Arrow left"
        />
      </div>
      <div
        className={classes(
          " py-[1em] px-[1.5em] uppercase font-serif flex-centered transition-colors",
          variant === "alternative"
            ? "bg-emphasis group-hover:bg-black"
            : "bg-black group-hover:bg-emphasis"
        )}
      >
        {children}
      </div>
      <div
        className={classes(
          "p-[1em] flex-centered transition-colors",
          variant === "alternative"
            ? "bg-black group-hover:bg-emphasis"
            : "bg-emphasis group-hover:bg-black",
          direction !== "left" ? "block" : "hidden"
        )}
      >
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
