'use client';
import Typewriter from "./typewriter";
import EmailLink from "./emailLink";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';


const Hero = () => {

    return (
      <>
      <div className="w-full px-4 sm:px-12 md:px-24 lg:px-36 xl:px-56">
      <div className="w-full h-fit flex flex-row">


        <div className='w-full h-fit pt-0 pb-20 px-0 flex justify-left flex-col mb-2 text-black lg:py-20 lg:w-3/4'>

        <div className="md:hidden block w-1/2 items-center aspect-square overflow-hidden rounded-full mx-auto">
          <img
            src="ojb-placeholder-image.jpg"
            alt="Placeholder"
            className="object-cover"
          />
        </div>

          <h1 className="font-barlow text-xl py-2">Hi I'm</h1>
          <h2 className='font-barlow text-7xl p-0'>Oliver Bradbury</h2>
          <h3 className="font-montserrat text-3xl pt-3">A Software Engineer</h3>
          <p className='font-montserrat pt-5 text-lg min-h-28'>
          <Typewriter text= "Recently graduated, seeking opportunities to broaden my horizons in the field of software engineering. I’m particularly intrested in roles where I can contribute to meaningful projects, continue learning from industry professionals" speed={15} /> 
          </p>
        </div>

        <div className="hidden md:block w-1/4 h-full items-center aspect-square overflow-hidden rounded-full mx-auto">
          <img
            src="ojb-placeholder-image.jpg"
            alt="Placeholder"
            className="object-cover"
          />
        </div>


      </div>

        <div className='w-full h-fit m-auto shadow-2xl'> 
          <div className='flex align items-start px-2 bg-light-gry h-fit w-full rounded-t-md'>
            <div className='px-1'>
              <span className='bg-red-700 inline-block items-center w-3 h-3 p-px1 rounded-full'></span>
            </div>

            <div className='px-1'>
              <span className='bg-yellow-500 inline-block items-center w-3 h-3 p-px1 rounded-full'></span>
            </div>

            <div className='px-1'>
              <span className='bg-green-500 inline-block items-center w-3 h-3 p-px1 rounded-full'></span>
            </div>
          </div>
        
          <div className='bg-slate-700 text-white font-sans rounded-b-md p-3'>
            <p>&gt; Oli.CurrentLocation</p>
            <p className='text-orange-400 pl-1'>["London / Essex"]</p>
            <br/>
            <p>&gt; Oli.ContactInfo</p>
            <span className='text-orange-400 pl-1'>
            ["<Link href="https://github.com/OliJB" className="text-cyan-400" target="_blank">Github</Link>",&nbsp;
            " <Link href="https://www.linkedin.com/in/oliver-bradbury-88623224a/" className="text-cyan-400" target="_blank">Linkedin</Link>",&nbsp;&nbsp;" 
              <span className="cursor-pointer text-cyan-400"><EmailLink email="oliver.bradbury@icloud.com" /></span>"]
              <ToastContainer />
            </span>
            <br/>
            <p>&gt; Oli.Interests</p>
            <p className='text-orange-400 pl-1'>["Hiking", "Muay Thai", "Mountain Biking"]</p>
            <br/>
            <p>&gt; Oli.Education</p>
            <p className='text-orange-400 pl-1'>["Bsc Software Engineering - Nottingham Trent University"]</p>
            <br/>
            <p>&gt; Oli.Skills</p>
            <p className='text-orange-400 pl-1'>["Java", "Python", "C++"", "Js", "React", "Tailwind", "Git"]</p>
            <br/>
            <p>&gt; <span className="blinking-cursor-white">&nbsp;</span></p>
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Hero;