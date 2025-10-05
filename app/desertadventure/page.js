import { generateMetadata as generateSEOMetadata, servicesSEO, generateStructuredData } from "../utils/seo";
import HomePage from "../page";

export const metadata = generateSEOMetadata(servicesSEO.desertadventure);

export default function DesertAdventurePage() {
  const structuredData = [
    generateStructuredData({
      type: "Service",
      name: "Desert Safari Dubai",
      description: "Discover the magic of Dubai's desert with comprehensive safari packages including dune bashing, camel rides, cultural experiences, and traditional entertainment.",
      services: [
        { name: "Desert Safari", description: "Complete desert adventure packages with entertainment" }
      ],
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Desert Safari", path: "/desertadventure" }
      ]
    }),
    {
      "@context": "https://schema.org",
      "@type": "Product", 
      "name": "Desert Safari Dubai",
      "description": "Experience comprehensive desert safari packages with dune bashing, camel rides, and traditional entertainment",
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