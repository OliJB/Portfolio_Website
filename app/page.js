import Portfolio from "../components/portfolio";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import React from "react";

export default function Home() {
  return (
    <>
    {/*  */}
      <main id="top-section" className="flex flex-col min-h-screen min-w-full pt-32">

        {/* Hero section */}
        <div className="w-full h-0"/>
        <Hero/>

        {/* Portfolio Section */}
        <div id="portfolio-section" className="w-full h-20"/>
        <Portfolio/>

        {/* Contact Section */}
        <div id="contact-section" className="w-full h-0"/>
        <Contact/>

      </main>
    </>
  );
}
