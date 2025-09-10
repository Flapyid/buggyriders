"use client";
import Image from "next/image";
import homebg from "../assets/images/home/header-banner.webp";
import OurRides from "./components/ourrides";
import DesertAdventure from "./pages/DesertAdventure";
import sectionimg from "../assets/images/home/EXTREME-DESERT-TOURS.webp";
import { usePathname } from "next/navigation"; 

export default function Home() {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

// 
const title ="Experience the Desert with our Dune Buggy Rental Service in Dubai"
  return (
    <>
      <div
        className="relative w-full min-h-screen flex justify-center items-center px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, #FA822C, transparent), url(${homebg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center max-w-4xl mx-auto py-12 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black drop-shadow-lg leading-tight text-text1">
            Unleash Your Inner Adventurer
            <span className="block">with our Buggy Rental Service in</span>
            <span className="block">Dubai</span>
          </h1>

          <button
            className="mt-8 px-8 py-3 bg-white text-text1 font-semibold text-lg rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            value="Book Dune Buggy Rides"
          >
            BOOK DUNE NOW
          </button>
        </div>
      </div>

      {/* Example: showing pathname */}
      <div className="text-center py-4 text-gray-600">
        Current Path: {pathname}
      </div>

      <OurRides />
      <DesertAdventure />
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-25 md:pl-30 py-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start relative z-10">
          <Image src={sectionimg} alt="Polaris Buggy" width={600} height={800} />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-orange-600">
            EXTREME DESERT TOURS
          </h2>
          <p className="mt-6 text-[#0c1a3d] text-base md:text-lg leading-snug">
            We at Buggy Riders have put together a selection of thrilling desert
            activities to satisfy the desires of every thrill-seeker...
          </p>
          <p className="mt-10">
            Dubai’s desert offers a variety of activities to enjoy against the
            stunning backdrop of endless dunes and starry nights...
          </p>
        </div>
      </section>
    </>
  );
}
