"use client";
import Typewriter from "./typewriter";
import EmailLink from "./emailLink";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Hero Section Scaling and Borders */}
      <div className="w-full px-4 sm:px-12 md:px-24 lg:px-36 xl:px-56 2xl:px-96">
        <div className="w-full h-fit flex flex-row">
          {/* Introduction Left Section (name + written into) */}
          <div className="w-full h-fit pt-0 pb-20 px-0 flex justify-left flex-col mb-2 text-black lg:py-20 lg:w-3/4">
            {/* Image shown only for small screens */}
            <div className="md:hidden block w-1/2 items-center aspect-square overflow-hidden rounded-full mx-auto">
              <img
                src="OJBprofileImage.jpg"
                alt="ProfileImage"
                className="object-cover"
              />
            </div>
            {/* Written into + "Typewriter" for typing effect */}
            <h1 className="font-barlow text-xl py-2 2xl:text-2xl">Hi I'm</h1>
            <h2 className="font-barlow text-7xl p-0 2xl:text-8xl">Oliver Bradbury</h2>
            <h3 className="font-montserrat text-3xl pt-3 2xl:text-4xl">A Software Engineering Graduate</h3>
            <p className="font-montserrat pt-5 text-lg min-h-28 2xl:text-xl 2xl:pr-52">
              <Typewriter
                text="Recently graduated, seeking opportunities to broaden my horizons in the field of Business Analysis. I’m particularly intrested in roles where I can contribute to meaningful projects and continue learning from industry professionals."
                speed={14}
              />
            </p>
          </div>
          {/* Introduction Right Section (image) -> width must correspond with left intro section*/}
          <div className="hidden md:block w-1/4 h-full items-center aspect-square overflow-hidden rounded-full mx-auto">
            <img
              src="OJBprofileImage.jpg"
              alt="ProfileImage"
              className="object-cover"
            />
          </div>
        </div>

        {/* Terminal Section */}
        <div className="w-full h-fit m-auto shadow-2xl">
          {/* Top bar */}
          <div className="flex align items-start px-2 bg-light-gry h-fit w-full rounded-t-md 2xl:pt-1">
            <div className="px-1">
              <span className="bg-red-700 inline-block items-center w-3 h-3 p-px1 rounded-full 2xl:w-4 2xl:h-4"></span>
            </div>

            <div className="px-1">
              <span className="bg-yellow-500 inline-block items-center w-3 h-3 p-px1 rounded-full 2xl:w-4 2xl:h-4"></span>
            </div>

            <div className="px-1">
              <span className="bg-green-500 inline-block items-center w-3 h-3 p-px1 rounded-full 2xl:w-4 2xl:h-4"></span>
            </div>
          </div>
          {/* Written area inside terminal */}
          <div className="bg-slate-700 text-white font-sans rounded-b-md p-3 2xl:text-2xl">
            <p>&gt; .\CurrentLocation</p>
            <p className="text-orange-400 pl-1">["London / Essex"]</p>
            <br />
            <p>&gt; .\ContactInfo</p>
            <span className="text-orange-400 pl-1">
              ["
              <Link
                href="https://github.com/OliJB"
                className="text-cyan-400"
                target="_blank"
              >
                Github
              </Link>
              ",&nbsp; "{" "}
              <Link
                href="https://www.linkedin.com/in/oliver-bradbury-88623224a/"
                className="text-cyan-400"
                target="_blank"
              >
                Linkedin
              </Link>
              ",&nbsp;&nbsp;"
              <span className="cursor-pointer text-cyan-400">
                <EmailLink email="oliver.bradbury@icloud.com" />
              </span>
              "]
              <ToastContainer />
            </span>
            <br />
            <p>&gt; .\Interests</p>
            <p className="text-orange-400 pl-1">
              ["Hiking", "Muay Thai", "Mountain Biking"]
            </p>
            <br />
            <p>&gt; .\Education</p>
            <p className="text-orange-400 pl-1">
              ["Bsc Software Engineering - Nottingham Trent University"]
            </p>
            <br />
            <p>&gt; .\Skills</p>
            <p className="text-orange-400 pl-1">
              ["Java", "Python", "C++"", "React", "Git", "UML", "Power BI"]
            </p>
            <br />
            <p>
              &gt; <span className="blinking-cursor-white">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
