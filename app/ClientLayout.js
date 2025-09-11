"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./navbar/Header";
import WhatWeInclude from "./pages/WhatWeInclude";
import DesertRidesSection from "./pages/DesertRidesSection";
import ServicesSection from "./pages/ServiceSection";
import SafetySection from "./pages/SafetySection";
import TestimonialPage from "./pages/Testimonial";
import Footer from "./pages/Footer";
import { addLeadIfAllowed } from "./utils/leadService";
import Gallery from "./pages/Gallery";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // 🔑 Redirect logged-in users to dashboard if on /admin
    const user = sessionStorage.getItem("user");
    if (user && pathname === "/admin") {
      router.push("/admin/dashboard");
    }
  }, [pathname, router]);

  useEffect(() => {
    // 🔥 Add leads from every page visit
    if (pathname) {
      addLeadIfAllowed(pathname);
    }
  }, [pathname]);

  const isAdminPage = pathname?.startsWith("/admin");
  const isLoginPage = pathname?.startsWith("/login");

  // pages where we hide extra sections
  const excludedPages = ["/contact", "/blog", "/gallery"];
  const isExcludedPage = excludedPages.some((page) =>
    pathname?.startsWith(page)
  );

  const hideLayout = isAdminPage || isLoginPage;

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && !isExcludedPage && (
        <>
          <WhatWeInclude />
          <DesertRidesSection />
          <ServicesSection />
          <SafetySection />
          <Gallery />
          <TestimonialPage />
          <Footer />
        </>
      )}
      {!hideLayout && isExcludedPage && <Footer />}

      {/* ✅ Floating Buttons */}
      {!hideLayout && (
        <div className="fixed bottom-5 left-5 flex flex-col gap-4 z-50">

           {/* Call Button */}
          <a
            href="tel:+971XXXXXXXXX" // change to your phone number
            className="flex items-center justify-center mb-3  w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
          {/* WhatsApp with pulsing effect */}
          <a
            href="https://wa.me/971XXXXXXXXX" // change to your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg"
          >
            {/* Radiation animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <FaWhatsapp className="relative z-10 text-2xl" />
          </a>

         
        </div>
      )}
    </>
  );
}
