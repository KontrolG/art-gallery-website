import classes from "classnames";

function OurLocation({ className }) {
  return (
    <div id="our-location" className={classes("bg-black", className)}>
      <div className="container md:flex md:space-x-[4.25rem]">
        <header className="md:mr-auto">
          <h1 className="text-white text-[3.4375rem] lg:text-[4.375rem]">
            Our <br /> location
          </h1>
        </header>
        <section className="mt-12 md:mt-0">
          <h2 className="text-emphasis text-[2rem] lg:text-4xl leading-none">
            99 King Street
          </h2>
          <p className="text-white mt-5 text-lg lg:text-[1.375rem]">
            Newport
            <br />
            RI 02840
            <br />
            United States of America
            <br />
          </p>
          <p className="text-white mt-5 text-lg lg:text-[1.375rem] lg:max-w-[25em]">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </section>
      </div>
    </div>
  );
}

export { OurLocation };
