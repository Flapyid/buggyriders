"use client";
import { useState } from "react";
import { FaBars, FaPhone, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import aboutImg from "../../assets/images/about/about-page-header-bg-image.webp";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* Hero Section */}
<section
  className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${aboutImg.src})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text */}
  <h1 className="relative text-5xl md:text-6xl font-bold text-white px-6 py-2">
    About Us
  </h1>
</section>


      {/* About Section */}
      <section className="px-6 md:px-40 py-12 bg-white text-gray-800">
        <p className="mb-6 text-lg">
          We at Buggy Riders are dedicated to assisting you in making the right
          decision, regardless of your situation or requirements. Conquer the
          Arabian sand dunes on one of our many desert quad bike rides while
          taking in some absolutely magnificent sights and take your friends and
          loved ones on an adventure of a lifetime with the best buggy ride
          rental service in Dubai. Brace yourself for rides you will never
          forget while buckling up on our powerful quad bikes and dune buggies.
          We make it our primary aim to offer the best possible touring
          experience, and we work nonstop to achieve this goal.
        </p>
        <p className="text-lg">
          We provide a number of exhilarating off-road sports, such as Buggy
          Rides, Quad Biking, and Desert Safari. Each tour is created to satisfy
          the needs of both groups and families looking for an adrenaline rush.
          We also have a wide selection of brand-new buggies and quads, giving
          consumers a special and secure experience.
        </p>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4">
        <a
          href="tel:+971000000000"
          className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl shadow-lg"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/971000000000"
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-lg"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
