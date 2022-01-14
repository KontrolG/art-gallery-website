import {
  HOME_DESKTOP_IMAGES_PATH,
  HOME_MOBILE_IMAGES_PATH,
  HOME_TABLET_IMAGES_PATH
} from "@/constants/paths";

function YourDay({ className }) {
  return (
    <div id="your-day" className={className}>
      <div className="container md:flex flex-row-reverse">
        <div className="h-[412px] md:h-[398px] lg:h-[400px] md:w-[398px] lg:w-[475px] xl:w-[632px] flex-shrink-0 lg:ml-auto">
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
            className="hidden md:inline lg:hidden w-full h-full object-cover"
            width={796}
            height={800}
          />
          <img
            src={HOME_DESKTOP_IMAGES_PATH + "/image-grid-1.jpg"}
            alt="Gallery of art"
            className="hidden lg:inline w-full h-full object-cover"
            width={1270}
            height={800}
          />
        </div>
        <section className="mt-10 md:mt-9 lg:mt-0 md:mr-9 md:flex-shrink self-center">
          <h2 className="text-[3.75rem] md:text-[3.375rem] xl:text-[4rem]">
            Your day <br className="lg:hidden" /> at{" "}
            <br className="hidden lg:inline" /> the gallery
          </h2>
          <p className="text-2xl md:text-lg xl:text-2xl leading-[1.5] mt-11 md:max-w-[12em] lg:max-w-[15em]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </section>
      </div>
    </div>
  );
}

export { YourDay };
