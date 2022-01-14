import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import { TitleText } from "@/components/common/widget/title-text";
import { DESCRIPTION } from "@/constants/data";
import {
  HOME_DESKTOP_IMAGES_PATH,
  HOME_MOBILE_IMAGES_PATH,
  HOME_TABLET_IMAGES_PATH,
  LOCATION_PATH
} from "@/constants/paths";

function Hero({ className }) {
  return (
    <div id="hero" className={className}>
      <div className="hidden lg:block w-[31.25vw] h-[800px] bg-[#eaeaea] absolute top-0 left-0 mix-blend-difference z-10"></div>
      <div className="h-[307px] md:h-[695px] lg:h-[800px] md:w-[434px] lg:w-[37.6388889vw] md:absolute lg:left-[31.25vw]">
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
          className="hidden md:inline lg:hidden h-full w-full object-cover"
          width={874}
          height={1400}
        />
        <img
          src={HOME_DESKTOP_IMAGES_PATH + "/image-hero.jpg"}
          alt="Woman in art gallery"
          className="hidden lg:inline h-full w-full object-cover"
          width={1080}
          height={1600}
        />
      </div>
      <div className="mt-10 md:mt-0 md:h-[695px] lg:h-[800px] md:relative md:container md:flex items-center justify-end lg:block">
        <section className="container md:not-container md:max-w-[335px] lg:max-w-full lg:flex justify-between lg:pt-48">
          <header>
            <h1 className="text-[4.75rem] md:text-[4.375rem] lg:text-[5.25rem] xl:text-[6.25rem]">
              <TitleText />
            </h1>
          </header>
          <div className="mt-11 lg:mt-0">
            <p className="text-2xl md:text-lg lg:text-2xl leading-[1.5] lg:max-w-[16em]">
              {DESCRIPTION}
            </p>
            <CallToActionLink
              href={LOCATION_PATH}
              className="mt-12 lg:mt-[4.5rem] text-3xl md:text-xl"
            >
              Our location
            </CallToActionLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export { Hero };
