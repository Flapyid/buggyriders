"use client";

import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { PHNumber } from "../phone";
import buggyfavicon from '../../assets/images/logo.svg';

export default function Footer() {
  const pathname = usePathname();

  // Pages where we HIDE the orange background form
  const excludedPages = ["/gallery", "/blog", "/contact"];
  const hideOrangeForm = excludedPages.some((page) =>
    pathname?.startsWith(page)
  );

  return (
    <footer className="mt-40">
      {/* Call to Action (Orange Form) */}
      {!hideOrangeForm && (
        <div className="relative z-10 bg-[#df6618] text-white rounded-md w-[95%] sm:max-w-6xl sm:w-full shadow-md px-4 sm:px-6 py-6 text-center mx-auto -mt-16">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold uppercase mb-4">
            READY TO BOOK YOUR ADVENTURE TOUR WITH BUGGY RIDERS
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4">
            Off-road Guided Dirtbike, Dune Buggy, Quad Bike, Desert Adventure Tours in Dubai!
          </p>

          {/* Form */}
          <form
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;

    const message = `Hello, my name is ${name}. I would like to request a call back. 
Here are my details:
📧 Email: ${email}
📞 Phone: ${phone}`;

    window.open(
      `https://wa.me/${PHNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10"
>
            <div className="flex flex-col text-left">
              <label className="text-xs sm:text-sm font-medium text-white mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-3 py-4 rounded-md text-black text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs sm:text-sm font-medium text-white mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-4 rounded-md text-black text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs sm:text-sm font-medium text-white mb-1">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="px-3 py-4 rounded-md text-black text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                required
              />
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="bg-[#111c3a] hover:bg-[#182957] px-3 py-4 rounded-md text-white font-semibold text-sm w-full"
              >
                REQUEST CALL BACK
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer Content */}
      <div className="px-10 -mt-20 sm:px-6 pt-10 sm:pt-20 pb-12 bg-[#f9f9f9]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mt-20 mx-20">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={buggyfavicon}
              alt="Buggy Riders"
              className="mx-auto md:mx-0 w-36 sm:w-44"
            />
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-3 uppercase text-gray-800">ABOUT</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-orange-600">Who We Are</a></li>
              <li><a href="/gallery" className="hover:text-orange-600">Gallery</a></li>
              <li><a href="/blog" className="hover:text-orange-600">Our Blogs</a></li>
              <li><a href="/contact" className="hover:text-orange-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3 uppercase text-gray-800">SERVICES</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/dunebuggy" className="hover:text-orange-600">Dune Buggy Tours</a></li>
              <li><a href="/quadbike" className="hover:text-orange-600">Quad Bike Tours</a></li>
              <li><a href="/desertadventure" className="hover:text-orange-600">Desert Safari</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-3 uppercase text-gray-800">FOLLOW US ON</h3>
            <div className="flex justify-center md:justify-start gap-3 ">
              <a target="_blank" href="https://facebook.com/buggyriders" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:bg-white hover:text-[#3b5998] border-2 hover:border-[#3b5998] transition-all duration-300"><FaFacebookF className="w-4 h-4" /></a>
              <a target="_blank" href="https://x.com/buggyriders1" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:bg-white hover:text-[#1da1f2] border-2 hover:border-[#1da1f2] transition-all duration-300"><FaTwitter className="w-3 h-3" /></a>
              <a target="_blank" href="https://www.linkedin.com/company/buggy-riders/about" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:bg-white hover:text-[#1da1f2] border-2 hover:border-[#1da1f2] transition-all duration-300"><FaLinkedinIn className="w-4 h-4" /></a>
              
              <a target="_blank" href="https://instagram.com/buggyridersuae" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e1306c] text-white hover:bg-white hover:text-[#e1306c] border-2 hover:border-[#e1306c] transition-all duration-300"><FaInstagram className="w-4 h-4" /></a>
              <a target="_blank" href="https://pinterest.com/buggyriders" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bd081c] text-white hover:bg-white hover:text-[#bd081c] border-2 hover:border-[#bd081c] transition-all duration-300"><FaPinterestP className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-xs text-center px-4 py-3">
        <div className="mb-2">
          <a href="#" className="hover:underline hover:text-orange-400 mx-2">
            Privacy Policy
          </a>
          |
          <a href="#" className="hover:underline hover:text-orange-400 mx-2">
            Terms & Conditions
          </a>
        </div>
  <p>© Copyright 2025.</p>
  <p className="mt-1">Designed by <a href="https://flapyid.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">flapyid.com</a></p>
      </div>
    </footer>
  );
}
