import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font mb-4 text-center font-medium text-white"
            style={{ fontSize: '60px' }}
          >
            Hello, I am{" "}
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-white mb-4 font-medium lg:inline-block"
            style={{ fontSize: '40px' }}
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-white leading-relaxed"
              style={{ fontSize: '30px' }}
            >
              {item}
            </p>
          ))}
          
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
