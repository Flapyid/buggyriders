"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { servicesSEO } from "../utils/seo";

export default function DynamicSEO() {
  const pathname = usePathname();

  useEffect(() => {
    // Update meta tags based on pathname for client-side routing
    let seoData = null;
    
    if (pathname === "/dunebuggy") {
      seoData = servicesSEO.dunebuggy;
    } else if (pathname === "/quadbike") {
      seoData = servicesSEO.quadbike;
    } else if (pathname === "/desertadventure") {
      seoData = servicesSEO.desertadventure;
    }

    if (seoData) {
      // Update document title
      document.title = `${seoData.title} | Buggy Riders Dubai`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.keywords);
      }

      // Update canonical URL
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://buggyriders.ae${seoData.path}`);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${seoData.title} | Buggy Riders Dubai`);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoData.description);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://buggyriders.ae${seoData.path}`);
      }
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}