
import { getprojects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "next-sanity";
import Link from 'next/link';


/**
 * @typedef {Object} Project
 * @property {string} _id
 * @property {Date} _createdAt
 * @property {string} name
 * @property {string} slug
 * @property {string} image
 * @property {string} url
 * @property {PortableTextBlock[]} content
 * @property {Array<string>} languages
 * @property {string} githubLink
 */

/**
 * Fetch and render a list of projects.
 * @returns {JSX.Element} The portfolio page.
 */
const portfolio = async () => {
  /** @type {Project[]} */
  const projects = await getprojects();

  return (
   <>
   {/* Portfolio Section Scaling and Borders */}
   <div className="w-full px-4 sm:px-12 md:px-24 lg:px-36 xl:px-56 2xl:px-96 flex flex-col items-center h-fit mb-16">
    {/* Section title and underline */}
   	<h2 className="font-barlow text-4xl 2xl:text-5xl text-black mb-2">Portfolio</h2>
			<div className="w-24 2xl:w-32 h-1 bg-black flex flex-auto mb-14"/>

        {/* projects display section container */}
      	<div className="w-full p-0 m-0 flex flex-col items-center">
          {/* fetch and display projects, first div is each projects container */}
         	{projects.map((project) => (
            	<div key={project._id} className="w-full min-h-80 flex flex-row bg-white text-black mb-20 shadow-lg rounded-md">
            	{/* projects image */}
              <div className="md:block hidden w-1/3 overflow-hidden pr-5 ">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-l-md"
                  />
                )}
              </div>
              {/* Projects Information */}
              <div className="flex flex-col w-full items-center text-center py-10 p-5 md:pr-10 md:items-start md:w-2/3 md:text-left">
                {/* Project Name */}
                <h2 className="font-barlow text-2xl mb-5 2xl:text-4xl">{project.name}</h2>
                {/* Project Information */}
                <div className="font-montserrat mb-3 text-sm 2xl:text-xl"><PortableText value={project.content} /></div>
                {/* Github Link to see source code of project */}
                <Link href={project.githubLink} target="_blank" className="mb-3 mt-auto bg-slate-600 rounded-md text-white w-fit py-1 px-3 flex items-center">
                  {/* Github thumbnail image on view code button */}
                  <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22px" height="22px" className="mr-2"> {/* Added width, height, and mr-2 for spacing */}
                    <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z" />
                  </svg>
                  <span className="font-montserrat 2xl:text-xl">View Code </span>
                </Link>
                {/* Languages and technology used in each project */}
                <div className="flex flex-wrap mt-auto">
                  {project.languages.map((language) => (
                    <div className="border-2 rounded-md border-slate-600 mr-4 mb-2 py-1 px-2 font-montserrat 2xl:text-xl" key={language}>{language}</div>
                  ))}
                </div>
              </div>
         		</div>
         	))}
      	</div>
   </div>
   </>
  );
};

export default portfolio;
