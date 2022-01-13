import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import { TitleText } from "@/components/common/widget/title-text";
import { DESCRIPTION } from "@/constants/data";
import {
  HOME_MOBILE_IMAGES_PATH,
  HOME_TABLET_IMAGES_PATH,
  LOCATION_PATH
} from "@/constants/paths";

function Hero({ className }) {
  return (
    <div id="hero" className={className}>
      <div className="h-[307px] md:h-[695px] md:w-[434px] md:absolute">
        <img
          src={HOME_MOBILE_IMAGES_PATH + "/image-hero.jpg"}
          alt="Woman in art gallery"
          className="md:hidden w-full h-full md:w-[434px] object-cover"
          width={750}
          height={480}
        />
        <img
          src={HOME_TABLET_IMAGES_PATH + "/image-hero.jpg"}
          alt="Woman in art gallery"
          className="hidden md:inline h-full w-full object-cover"
          width={750}
          height={480}
        />
      </div>
      <div className="mt-10 md:mt-0 md:h-[695px] md:relative md:container md:flex items-center justify-end">
        <section className="container md:not-container md:max-w-[335px]">
          <h1 className="text-[4.75rem] md:text-[4.375rem]">
            <TitleText />
          </h1>
          <p className="text-2xl md:text-lg leading-[1.5] mt-11">
            {DESCRIPTION}
          </p>
          <CallToActionLink
            href={LOCATION_PATH}
            className="mt-12 text-3xl md:text-xl"
          >
            Our location
          </CallToActionLink>
        </section>
      </div>
    </div>
  );
}

export { Hero };
