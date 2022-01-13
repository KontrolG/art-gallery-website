import {
  HOME_MOBILE_IMAGES_PATH,
  HOME_TABLET_IMAGES_PATH
} from "@/constants/paths";

function YourDay({ className }) {
  return (
    <div id="your-day" className={className}>
      <div className="container md:flex flex-row-reverse">
        <div className="h-[412px] md:h-[398px] md:w-[398px] flex-shrink-0">
          <img
            src={HOME_MOBILE_IMAGES_PATH + "/image-grid-1.jpg"}
            alt="Gallery of art"
            className="md:hidden w-full h-full object-cover"
            width={686}
            height={640}
          />
          <img
            src={HOME_TABLET_IMAGES_PATH + "/image-grid-1.jpg"}
            alt="Gallery of art"
            className="hidden md:inline w-full h-full object-cover"
            width={686}
            height={640}
          />
        </div>
        <section className="mt-10 md:mt-9 md:mr-9 md:flex-shrink">
          <h2 className="text-[3.75rem] md:text-[3.375rem]">
            Your day <br /> at the gallery
          </h2>
          <p className="text-2xl md:text-lg leading-[1.5] mt-11">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </section>
      </div>
    </div>
  );
}

export { YourDay };
