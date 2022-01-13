import { HOME_MOBILE_IMAGES_PATH, LOCATION_PATH } from "@/constants/paths";
import React from "react";

function YourDay({ className }) {
  return (
    <div id="your-day" className={className}>
      <div className="container">
        <div className="h-[412px]">
          <img
            src={HOME_MOBILE_IMAGES_PATH + "/image-grid-1.jpg"}
            alt="Gallery of art"
            className="w-full h-full object-cover"
            width={686}
            height={640}
          />
        </div>
        <section className="mt-10">
          <h2 className="text-[3.75rem]">
            Your day <br /> at the gallery
          </h2>
          <p className="text-2xl leading-[1.5] mt-11">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </section>
      </div>
    </div>
  );
}

export { YourDay };
