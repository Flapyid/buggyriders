"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import hexagon from "../../assets/images/icons/hexagon.svg";

// Import feature images
import snacksImg from "../../assets/images/icons/Snacks.svg";
import guideImg from "../../assets/images/icons/experienced-tour-guides.svg";
import fleetImg from "../../assets/images/icons/maintained-fleet.svg";
import supportImg from "../../assets/images/icons/support.svg";
import helmetImg from "../../assets/images/icons/helmet.svg";

// Original features
const features = [
  { img: snacksImg, text: "Snacks" },
  { img: guideImg, text: "Experienced Tour Guides" },
  { img: fleetImg, text: "Best Maintained Fleet" },
  { img: snacksImg, text: "Refreshments" },
  { img: supportImg, text: "Support For All Tours" },
  { img: helmetImg, text: "Helmet, Goggles & Gloves" },
  { img: guideImg, text: "Safety First" },
];

// Duplicate features for smooth looping
const allFeatures = [...features, ...features];

export default function WhatWeInclude() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-orange-600">
          WHAT WE INCLUDE
        </h2>
        <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
          ALL OUR DUNE BUGGY DUBAI TOURS INCLUDE:
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000, // wait 2s before sliding
          disableOnInteraction: false,
        }}
        speed={800} // transition speed
        loop={true}
        spaceBetween={20} // Reduced space for mobile
        breakpoints={{
          // Extra small devices (320px and up)
          320: { 
            slidesPerView: 2,
            spaceBetween: 16
          },
          // Small devices (480px and up)
          480: { 
            slidesPerView: 2,
            spaceBetween: 20
          },
          // Medium devices (640px and up)
          640: { 
            slidesPerView: 3,
            spaceBetween: 24
          },
          // Tablet devices (768px and up)
          768: { 
            slidesPerView: 4,
            spaceBetween: 28
          },
          // Large devices (1024px and up)
          1024: { 
            slidesPerView: 5,
            spaceBetween: 30
          },
          // Extra large devices (1280px and up)
          1280: { 
            slidesPerView: 7,
            spaceBetween: 32
          },
        }}
        className="px-2 sm:px-4" // Add horizontal padding for better mobile appearance
      >
        {allFeatures.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6">
              {/* Hexagon with feature image inside */}
              <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 sm:mb-3 md:mb-4">
                <img 
                  src={hexagon.src} 
                  alt="hexagon" 
                  className="w-full h-full" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
                  <img
                    src={item.img.src}
                    alt={item.text}
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
              </div>
              <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-800 leading-tight px-1">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}