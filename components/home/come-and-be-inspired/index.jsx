import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import { HOME_MOBILE_IMAGES_PATH, LOCATION_PATH } from "@/constants/paths";
import React from "react";

function ComeAndBeInspired({ className }) {
  return (
    <div id="come-and-be-inspired" className={className}>
      <div className="container">
        <div className="h-[612px]">
          <img
            src={HOME_MOBILE_IMAGES_PATH + "/image-grid-2.jpg"}
            alt="Gallery of art"
            className="w-full h-full object-cover"
            width={686}
            height={960}
          />
        </div>
        <div className="h-[254px] mt-5">
          <img
            src={HOME_MOBILE_IMAGES_PATH + "/image-grid-3.jpg"}
            alt="Gallery of art"
            className="w-full h-full object-cover"
            width={686}
            height={400}
          />
        </div>
        <section className="mt-5 bg-black py-[60px] px-[30px]">
          <h2 className="text-[3.75rem] text-white">COME & BE INSPIRED</h2>
          <p className="text-2xl leading-[1.5] mt-11 text-white-darken">
            We're excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
          <CallToActionLink
            href={LOCATION_PATH}
            className="mt-12 text-3xl text-white"
            variant="alternative"
          >
            Visit us
          </CallToActionLink>
        </section>
      </div>
    </div>
  );
}

export { ComeAndBeInspired };
