import React from "react";
import AboutData from "../data/about";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black"
            style={{marginTop: "20px"}}
          >
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Why hire me ?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={AboutData.image}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
