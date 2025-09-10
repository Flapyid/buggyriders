"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

// Import your hero image
import heroBg from "../../assets/images/about/about-page-header-bg-image.webp";
import Gallery from "../pages/Gallery";

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">  

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white">
          Gallery
        </h1>
      </section>
      <Gallery/>
    </div>
  );
}
