import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import {
  HOME_DESKTOP_IMAGES_PATH,
  HOME_MOBILE_IMAGES_PATH,
  HOME_TABLET_IMAGES_PATH,
  LOCATION_PATH
} from "@/constants/paths";

function ComeAndBeInspired({ className }) {
  return (
    <div id="come-and-be-inspired" className={className}>
      <div className="container md:flex">
        <div className="h-[612px] md:h-[722px] xl:h-[800px] md:flex-[60%] lg:flex-[44%]">
          <img
            src={HOME_MOBILE_IMAGES_PATH + "/image-grid-2.jpg"}
            alt="Gallery of art"
            className="md:hidden w-full h-full object-cover"
            width={686}
            height={960}
          />
          <img
            src={HOME_TABLET_IMAGES_PATH + "/image-grid-2.jpg"}
            alt="Gallery of art"
            className="hidden md:inline lg:hidden w-full h-full object-cover"
            width={769}
            height={1440}
          />
          <img
            src={HOME_DESKTOP_IMAGES_PATH + "/image-grid-2.jpg"}
            alt="Gallery of art"
            className="hidden lg:inline w-full h-full object-cover"
            width={1270}
            height={1440}
          />
        </div>
        <div className="mt-5 md:mt-0 md:ml-3 lg:ml-7 md:flex-[40%] lg:flex-[31%]">
          <div className="h-[254px] md:h-[312px] xl:h-[351px]">
            <img
              src={HOME_MOBILE_IMAGES_PATH + "/image-grid-3.jpg"}
              alt="Gallery of art"
              className="md:hidden w-full h-full object-cover"
              width={686}
              height={400}
            />
            <img
              src={HOME_TABLET_IMAGES_PATH + "/image-grid-3.jpg"}
              alt="Gallery of art"
              className="hidden md:inline lg:hidden w-full h-full object-cover"
              width={560}
              height={626}
            />
            <img
              src={HOME_DESKTOP_IMAGES_PATH + "/image-grid-3.jpg"}
              alt="Gallery of art"
              className="hidden lg:inline w-full h-full object-cover"
              width={890}
              height={626}
            />
          </div>
          <section className="mt-5 md:mt-3 lg:mt-7 bg-black py-[60px] md:py-4 px-[30px] xl:px-12 md:px-7 md:h-[398px] lg:h-[382px] xl:h-[421px] md:flex flex-col justify-center">
            <h2 className="text-[3.75rem] md:text-[3rem] xl:text-[3.75rem] text-white">
              COME & BE INSPIRED
            </h2>
            <p className="text-2xl md:text-lg xl:text-2xl leading-[1.5] mt-11 md:mt-8 text-white-darken lg:max-w-[15.5em]">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
            <CallToActionLink
              href={LOCATION_PATH}
              className="mt-12 md:mt-5 xl:mt-7 text-3xl md:text-base text-white"
              variant="alternative"
            >
              Visit us
            </CallToActionLink>
          </section>
        </div>
      </div>
    </div>
  );
}

export { ComeAndBeInspired };
