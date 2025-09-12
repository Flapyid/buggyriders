"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navicon from "../../assets/images/icons/navicon.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path) =>
    pathname === path ? "text-orange-600" : "hover:text-orange-600";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header" className="bg-transparent">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "ms-0 me-0" : "ms-4 me-4 md:ms-20 md:me-20"
        }`}
      >
        <nav
          className={`relative flex items-center justify-between border-b border-gray-300 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-white"
          }`}
        >
          {/* ✅ Logo with ms-5 on scroll */}
          <Link
            href="/"
            className={`flex items-center space-x-2 transition-all duration-300 ${
              scrolled ? "ms-5" : ""
            }`}
          >
            <Image
              src="https://buggyriders.com/images/logo.svg"
              alt="Buggy Adventures"
              width={130}
              height={45}
              className="md:w-[150px] md:h-[50px] w-[120px] h-[40px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="headertags hidden md:flex flex-grow justify-end space-x-8 text-lg text-[#0D172B] uppercase">
            <Link
              href="/dunebuggy"
              className={`${isActive("/dunebuggy")} transition duration-300`}
            >
              Dune Buggy Tours
            </Link>
            <Link
              href="/quadbike"
              className={`${isActive("/quadbike")} transition duration-300`}
            >
              Quad Bike Tours
            </Link>
            <Link
              href="/desertadventure"
              className={`${isActive("/desertadventure")} transition duration-300`}
            >
              Desert Adventure
            </Link>
            <Link
              href="/gallery"
              className={`${isActive("/gallery")} transition duration-300`}
            >
              Gallery
            </Link>
          </div>

          {/* ✅ Navicon with me-5 on scroll */}
          <div
            className={`cursor-pointer flex items-center justify-center ms-5 bg-[#111C3A] md:p-3 p-2 transition-all duration-300 ${
              scrolled ? "me-5" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <Image
              src={navicon}
              alt="Menu"
              className="md:w-8 md:h-8 w-7 h-7"
            />
          </div>
        </nav>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Menu Sheet */}
        <div
          className={`fixed top-0 left-0 h-screen bg-white text-[#0D172B] transform transition-transform duration-300 ease-in-out z-50 
          w-full md:w-[400px] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none p-2 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-6 text-lg font-medium flex-grow uppercase">
              <Link
                href="/dunebuggy"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Dune Buggy Tours
              </Link>
              <Link
                href="/quadbike"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Quad Bike Tours
              </Link>
              <Link
                href="/desertadventure"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Desert Adventure
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                onClick={toggleMobileMenu}
                className="pb-2 border-b border-gray-400/40"
              >
                Blog
              </Link>
            </nav>

            {/* Social Icons */}
            {/* <div className="flex justify-center gap-6 mt-10">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3b5998] text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E1306C] text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white"
              >
                <FaTwitter />
              </a>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
