import { generateMetadata as generateSEOMetadata, pagesSEO, generateStructuredData } from "../utils/seo";

export const metadata = generateSEOMetadata(pagesSEO.gallery);

export default function GalleryLayout({ children }) {
  const structuredData = [
    generateStructuredData({
      type: "ImageGallery",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" }
      ]
    }),
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery", 
      "name": "Buggy Riders Dubai Desert Adventure Gallery",
      "description": "Stunning photos from our desert adventures in Dubai featuring dune buggy tours, quad bike adventures, and desert safaris.",
      "url": "https://buggyriders.ae/gallery",
      "image": "https://buggyriders.ae/gallery/1.webp"
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
      {children}
    </>
  );
}