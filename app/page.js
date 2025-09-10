"use client";
import Image from "next/image";
import homebg from "../assets/images/home/header-banner.webp";
import OurRides from "./components/ourrides";
import DesertAdventure from "./pages/DesertAdventure";
import sectionimg from "../assets/images/home/EXTREME-DESERT-TOURS.webp";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const pathname = usePathname();
  const [title, setTitle] = useState("Unleash Your Inner Adventurer with our Buggy Rental Service in Dubai");
  const [buttonText, setButtonText] = useState("BOOK DUNE NOW");

  useEffect(() => {
    // Set content based on pathname
    if (pathname === "/dunebuggy") {
      setTitle("Experience the Desert with our Dune Buggy Rental Service in Dubai");
      setButtonText("Book Dune Buggy Rides Now");
    }
    if (pathname === "/") {
      setTitle("Unleash Your Inner Adventurer with our Buggy Rental Service in Dubai");
      setButtonText("BOOK DUNE NOW");
    }
  }, [pathname]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex justify-center items-center px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(250, 130, 44, 0.85), rgba(0, 0, 0, 0.3)), url(${homebg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center max-w-4xl mx-auto py-12 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white drop-shadow-md leading-tight mb-6">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <button
            className="mt-8 px-10 uppercase py-4 bg-white text-orange-600 font-bold text-xl rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50"
            aria-label="Book dune buggy rides"
          >
            {buttonText}
          </button>
        </div>

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Pathname indicator - remove in production */}

      <OurRides />

      {pathname === "/" && (
        <>
          <DesertAdventure />

          {/* Extreme Desert Tours Section */}
          <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-16 bg-gray-50">
            {/* Left Image */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <Image
                  src={sectionimg}
                  alt="Polaris Buggy in desert adventure"
                  width={600}
                  height={800}
                  placeholder="blur"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full md:pl-10 lg:pl-16">
              <h2 className="text-3xl md:text-4xl font-black text-orange-600 mb-6">
                EXTREME DESERT TOURS
              </h2>
              <div className="space-y-4 text-gray-800">
                <p className="text-lg leading-relaxed">
                  We at Buggy Riders have put together a selection of thrilling desert
                  activities to satisfy the desires of every thrill-seeker...
                </p>
                <p className="text-lg leading-relaxed">
                  Dubai's desert offers a variety of activities to enjoy against the
                  stunning backdrop of endless dunes and starry nights...
                </p>
              </div>
              <button className="mt-8 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300">
                Explore Our Tours
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}