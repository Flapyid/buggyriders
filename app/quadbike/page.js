import { generateMetadata as generateSEOMetadata, servicesSEO, generateStructuredData } from "../utils/seo";
import HomePage from "../page";

export const metadata = generateSEOMetadata(servicesSEO.quadbike);

export default function QuadBikePage() {
  const structuredData = [
    generateStructuredData({
      type: "Service",
      name: "Quad Bike Rental Dubai", 
      description: "Explore Dubai's stunning desert landscape on powerful quad bikes. Safe, guided ATV tours with professional instruction for all skill levels.",
      services: [
        { name: "Quad Bike Tours", description: "Guided ATV tours through desert landscapes" }
      ],
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Quad Bike Tours", path: "/quadbike" }
      ]
    }),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Quad Bike Rental Dubai",
      "description": "Explore Dubai's stunning desert landscape on powerful quad bikes with guided ATV tours",
      "brand": {
        "@type": "Brand",
        "name": "Buggy Riders Dubai"
      },
      "category": "Desert Adventure Tours",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "$$",
        "priceCurrency": "AED"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <HomePage />
    </>
  );
}