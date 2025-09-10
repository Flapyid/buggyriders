"use client"; // <-- Required for hooks

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import navicon from "../../assets/images/icons/navicon.svg";
import Link from "next/link";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div id="header" className="bg-transparent bg">
            <header className="fixed top-0 left-0 right-0 z-50 ms-20 me-20">
                <nav className="relative flex items-center justify-between border-b border-gray-300 bg-white">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="https://buggyriders.com/images/logo.svg"
                            alt="Buggy Adventures"
                            width={150}
                            height={50}
                        />
                        <span className="text-2xl font-bold text-gray-800 no-underline">
                            {/* Optional text */}
                        </span>
                    </Link>

                    {/* Hamburger Menu for Mobile */}
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

                    {/* Desktop Navigation Links */}
                    <div className="headertags hidden md:flex flex-grow justify-end space-x-8 text-lg text-[#0D172B] uppercase">
                        <Link href="/dunebuggy" className="hover:text-blue-600 transition duration-300">
                            Dune Buggy
                        </Link>

                        <Link href="/" as="/quadbike" className="hover:text-blue-600 transition duration-300">
                            Quad Bike
                        </Link>
                        <Link
                            href="/"
                            as="/desertadventure"
                            className="hover:text-blue-600 transition duration-300"
                        >
                            Desert Adventure
                        </Link>
                        <Link href="/" as="/gallery" className="hover:text-blue-600 transition duration-300">
                            Gallery
                        </Link>
                    </div>

                    <div className="p-3 ms-2 h-full" style={{ backgroundColor: "#111C3A" }}>
                        <Image src={navicon} alt="Buggy Adventures" />
                    </div>
                </nav>

                {/* Mobile Menu Panel */}
                <div
                    className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0D172B] text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button
                                onClick={toggleMobileMenu}
                                className="focus:outline-none p-2 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* ✅ Mobile Links using Next.js Link */}
                        <nav className="flex flex-col space-y-4 text-xl font-semibold">
                            <Link
                                href="/"
                                as="/dunebuggy"
                                onClick={toggleMobileMenu}
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Dune Buggy
                            </Link>
                            <Link
                                href="/"
                                as="/quadbike"
                                onClick={toggleMobileMenu}
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Quad Bike
                            </Link>
                            <Link
                                href="/"
                                as="/desertadventure"
                                onClick={toggleMobileMenu}
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Desert Adventure
                            </Link>
                            <Link
                                href="/"
                                as="/gallery"
                                onClick={toggleMobileMenu}
                                className="hover:text-yellow-400 transition duration-300"
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
