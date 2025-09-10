// app/layout.js
import { Geist } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Header from "./navbar/Header";
import { Montserrat } from "next/font/google";
import WhatWeInclude from "./pages/WhatWeInclude";
import DesertRidesSection from "./pages/DesertRidesSection";
import ServicesSection from "./pages/ServiceSection";
import SafetySection from "./pages/SafetySection";
import Gallery from "./pages/Gallery";
import TestimonialPage from "./pages/Testimonial";
import Footer from "./pages/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose the weights you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-chakra-petch',
});

export const metadata = {
  title: "Buggy Riders ",
  description: "Dune Buggy Rental in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Header className={chakraPetch.className} />
        {children}
        <WhatWeInclude />
        <DesertRidesSection />
        <ServicesSection />
        <SafetySection />
        <Gallery />
        <TestimonialPage />
        <Footer />
      </body>
    </html>
  );
}