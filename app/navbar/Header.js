"use client"; // <-- Required for hooks

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navicon from "../../assets/images/icons/navicon.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ detect current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to check active path
  const isActive = (path) =>
    pathname === path ? "text-orange-600" : "hover:text-orange-600";

  return (
    <div id="header" className="bg-transparent">
      <header className="fixed top-0 left-0 right-0 z-50 ms-20 me-20">
        <nav className="relative flex items-center justify-between border-b border-gray-300 bg-white">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://buggyriders.com/images/logo.svg"
              alt="Buggy Adventures"
              width={150}
              height={50}
            />
          </Link>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none p-2 rounded-md transition duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0D172B]">
                <Menu size={24} color="#FFF" />
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="headertags hidden md:flex flex-grow justify-end space-x-8 text-lg text-[#0D172B] uppercase">
            <Link
              href="/dunebuggy"
              className={`${isActive("/dunebuggy")} transition duration-300`}
            >
              Dune Buggy
            </Link>
            <Link
              href="/quadbike"
              className={`${isActive("/quadbike")} transition duration-300`}
            >
              Quad Bike
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

          <div
            className="p-3 ms-2 h-full"
            style={{ backgroundColor: "#111C3A" }}
          >
            <Image src={navicon} alt="Buggy Adventures" />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0D172B] text-white transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none p-2 text-white"
              >
                ✕
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col space-y-4 text-xl font-semibold">
              <Link
                href="/dunebuggy"
                onClick={toggleMobileMenu}
                className={`${isActive(
                  "/dunebuggy"
                )} hover:text-yellow-400 transition duration-300`}
              >
                Dune Buggy
              </Link>
              <Link
                href="/quadbike"
                onClick={toggleMobileMenu}
                className={`${isActive(
                  "/quadbike"
                )} hover:text-yellow-400 transition duration-300`}
              >
                Quad Bike
              </Link>
              <Link
                href="/desertadventure"
                onClick={toggleMobileMenu}
                className={`${isActive(
                  "/desertadventure"
                )} hover:text-yellow-400 transition duration-300`}
              >
                Desert Adventure
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMobileMenu}
                className={`${isActive(
                  "/gallery"
                )} hover:text-yellow-400 transition duration-300`}
              >
                Gallery
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;