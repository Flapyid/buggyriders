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
    </>
  );
}
