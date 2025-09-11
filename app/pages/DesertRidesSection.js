"use client";
import Image from "next/image";
import roadwheel from "../../assets/images/global/road-wheel.svg";
import desertcar from "../../assets/images/global/desert-ride-lg-banner.webp";
import play from "../../assets/images/icons/play-btn.svg";

export default function DesertRidesSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16 relative overflow-hidden">
      {/* Top Row: Title + Content */}
      <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Title */}
        <div className="flex-1 flex flex-col z-10 justify-center mt-6 md:mt-12">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            Feel The Thrill Of
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 leading-tight mt-2">
            DESERT <br /> RIDES
          </h1>
        </div>

        {/* Background Wheel Trail */}
        <Image
          src={roadwheel}
          alt="roadwheel"
          width={300}
          height={300}
          className="absolute left-[10%] sm:left-[20%] top-[70%] sm:top-[65%] max-w-[180px] sm:max-w-[240px] md:max-w-[300px] -z-0 opacity-40 pointer-events-none"
        />

        {/* Right Paragraph */}
        <div className="flex-1 text-gray-700 z-10 text-sm sm:text-base leading-relaxed">
          <p className="mb-4 mt-4 sm:mt-6">
            Experience the captivating allure of the desert like never before
            with Buggy Riders' dune buggy rental in Dubai. Embarking on a dune
            buggy tour is the perfect means to uncover the authentic essence of
            the Dubai desert. Whether you're a resident or a tourist, a dune
            buggy excursion through the desert is an absolute must, and Buggy
            Riders provides an excellent opportunity to do so. Take advantage of
            Buggy Riders' exceptional dune buggy rides to venture into the Dubai
            desert and relish the adventure.
          </p>
          <p>
            Indulge in the excitement and exhilaration of the desert adventures,
            which are sure to be the highlight of your day. These thrilling
            experiences enable you to unleash your inner adventurer as you race
            across the expansive desert terrain. Discover the breathtaking beauty
            of the Dubai desert in a unique and unforgettable way. Opt for Buggy
            Riders' dune buggy rental services to elevate your Dubai trip to new
            heights. We offer a variety of dune buggies ranging from 1-seaters
            to 4-seaters, giving you the freedom to choose the one that best
            suits your needs.
          </p>
        </div>
      </div>

      {/* Desert Car Image with Play Button */}
      <div className="mt-10 md:mt-14 flex justify-center px-4 md:px-12 lg:px-20">
        <div className="relative w-full max-w-6xl">
          {/* Background image */}
          <Image
            src={desertcar}
            alt="desertcar"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* Play button with animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 group">
              {/* Animated ring */}
              <div className="absolute w-full h-full rounded-full border-2 border-orange-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Play Button */}
              <button className="relative z-10 flex items-center justify-center">
                <span className="bg-transparent hover:bg-transparent rounded-full p-4 sm:p-5 transition transform group-hover:scale-110">
                  <Image
                    src={play}
                    alt="play"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
