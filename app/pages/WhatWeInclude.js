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
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
          WHAT WE INCLUDE
        </h2>
        <p className="text-gray-700 mt-2">
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
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 3 },  // mobile
          768: { slidesPerView: 5 },  // tablet
          1024: { slidesPerView: 7 }, // laptop/desktop
        }}
      >
        {allFeatures.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-6">
              {/* Hexagon with feature image inside */}
              <div className="relative w-32 h-32 mb-4">
                <img src={hexagon.src} alt="hexagon" className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={item.img.src}
                    alt={item.text}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <p className="text-sm md:text-base font-medium text-gray-800">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}