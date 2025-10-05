import { generateMetadata as generateSEOMetadata, servicesSEO, generateStructuredData } from "../utils/seo";
import HomePage from "../page";

export const metadata = generateSEOMetadata(servicesSEO.dunebuggy);

export default function DuneBuggyPage() {
  const structuredData = [
    generateStructuredData({
      type: "Service",
      name: "Dune Buggy Rental Dubai",
      description: "Experience the thrill of dune buggy racing in Dubai's golden desert. Professional guided tours, top-quality vehicles, and unforgettable desert adventures await.",
      services: [
        { name: "Dune Buggy Rental", description: "Premium dune buggy adventures in Dubai desert" }
      ],
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Dune Buggy Rental", path: "/dunebuggy" }
      ]
    }),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Dune Buggy Rental Dubai",
      "description": "Experience extreme desert adventures with our premium dune buggy rental service in Dubai",
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