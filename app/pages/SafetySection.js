"use client";
import { useState } from "react";
import Image from "next/image";
import buggyImg from "../../assets/images/global/safety-comes-first-thumbnail.webp"; // replace with your actual image path

export default function SafetySection() {
  const [expanded, setExpanded] = useState(false);

  const shortText = `
  Our dune buggy rental in Dubai offers buggies equipped with state-of-the-art safety features, such as 4-point race harnesses, doors, and full roll cages, to ensure your safety during desert excursions. We provide thoroughly cleaned and sterilised protective gear to all riders. In addition to the safety measures, we also offer snacks, drinks, and sandboarding, all while our expert guides lead you through the stunning desert terrain.
  `;

  const fullText = `
  Wearing the appropriate safety gear is the most important thing you must do to keep safe while operating a dune buggy. The safety equipment comprises a helmet, protective eyewear, gloves, and boots or shoes with sturdy soles.

  Wearing gloves and sturdy shoes can help you maintain control of the vehicle and prevent injuries to your hands and feet and a helmet can shield your head and eyes from impact and debris. At Buggy Riders, we prioritise your safety over everything else, which is why we make sure to provide you with clean, sterilised safety gear.

  At our dune buggy rental in Dubai, our expert drivers and guides will collect you from your hotel or preferred location and transport you to the desert site. Once there, a seasoned driver and guide will assist you in boarding your desert buggy. After the adventure comes to an end, our experienced driver and guide will transport you back to your hotel or selected location. Rest assured that your journey will be smooth and comfortable from start to finish with our knowledgeable team.
  `;

  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 py-12 px-6 md:px-16">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={buggyImg}
          alt="Buggy Ride Safety"
          className="rounded-2xl w-full h-md object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-[#0c1a3d]">
        <h2 className="text-3xl md:text-5xl font-black">
          Safety Comes <span className="text-orange-600">FIRST</span>
        </h2>

        <p className="mt-6 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {shortText}
          {expanded && `\n${fullText}`}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 font-semibold text-orange-600 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </section>
  );
}
