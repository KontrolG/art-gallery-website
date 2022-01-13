import { CallToActionLink } from "@/components/common/widget/call-to-action-link";
import { DESCRIPTION, TITLE } from "@/constants/data";
import { HOME_MOBILE_IMAGES_PATH, LOCATION_PATH } from "@/constants/paths";
import React from "react";

function Hero({ className }) {
  return (
    <div id="hero" className={className}>
      <div className="h-[307px]">
        <img
          src={HOME_MOBILE_IMAGES_PATH + "/image-hero.jpg"}
          alt="Woman in art gallery"
          className="w-full h-full object-cover"
          width={750}
          height={480}
        />
      </div>
      <div className="mt-10">
        <section className="container">
          <h1 className="text-[4.75rem]">{TITLE}</h1>
          <p className="text-2xl leading-[1.5] mt-11">{DESCRIPTION}</p>
          <CallToActionLink href={LOCATION_PATH} className="mt-12 text-3xl">
            Our location
          </CallToActionLink>
        </section>
      </div>
    </div>
  );
}

export { Hero };
