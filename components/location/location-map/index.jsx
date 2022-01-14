import {
  LOCATION_DESKTOP_IMAGES_PATH,
  LOCATION_MOBILE_IMAGES_PATH,
  LOCATION_TABLET_IMAGES_PATH
} from "@/constants/paths";

function LocationMap({ className }) {
  return (
    <div id="location-map" className={className}>
      <img
        src={LOCATION_MOBILE_IMAGES_PATH + "/image-map.png"}
        alt="Location Map"
        className="md:hidden w-full object-cover"
        width={750}
        height={1100}
      />
      <img
        src={LOCATION_TABLET_IMAGES_PATH + "/image-map.png"}
        alt="Location Map"
        className="hidden md:inline lg:hidden w-full object-cover"
        width={1536}
        height={1200}
      />
      <img
        src={LOCATION_DESKTOP_IMAGES_PATH + "/image-map.png"}
        alt="Location Map"
        className="hidden lg:inline w-full object-cover"
        width={2880}
        height={1200}
      />
    </div>
  );
}

export { LocationMap };
