// app/layout-metadata.js
import { generateMetadata as generateSEOMetadata, servicesSEO, generateStructuredData } from "./utils/seo";

export function generateDynamicMetadata(pathname) {
  // Handle service-specific routes
  if (pathname === "/dunebuggy") {
    return generateSEOMetadata(servicesSEO.dunebuggy);
  }
  
  if (pathname === "/quadbike") {
    return generateSEOMetadata(servicesSEO.quadbike);
  }
  
  if (pathname === "/desertadventure") {
    return generateSEOMetadata(servicesSEO.desertadventure);
  }
  
  // Default homepage metadata
  return generateSEOMetadata({});
}

export function generateDynamicStructuredData(pathname) {
  const baseServices = [
    { name: "Dune Buggy Rental", description: "Premium dune buggy adventures in Dubai desert" },
    { name: "Quad Bike Tours", description: "Guided ATV tours through desert landscapes" },
    { name: "Desert Safari", description: "Complete desert adventure packages with entertainment" }
  ];

  // Add breadcrumbs for service pages
  const breadcrumbs = [];
  
  if (pathname !== "/") {
    breadcrumbs.push({ name: "Home", path: "/" });
    
    if (pathname === "/dunebuggy") {
      breadcrumbs.push({ name: "Dune Buggy Rental", path: "/dunebuggy" });
    } else if (pathname === "/quadbike") {
      breadcrumbs.push({ name: "Quad Bike Tours", path: "/quadbike" });
    } else if (pathname === "/desertadventure") {
      breadcrumbs.push({ name: "Desert Safari", path: "/desertadventure" });
    }
  }

  return generateStructuredData({
    services: baseServices,
    breadcrumbs: breadcrumbs
  });
}