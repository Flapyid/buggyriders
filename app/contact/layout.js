import { generateMetadata as generateSEOMetadata, pagesSEO, generateStructuredData } from "../utils/seo";

export const metadata = generateSEOMetadata(pagesSEO.contact);

export default function ContactLayout({ children }) {
  const structuredData = generateStructuredData({
    type: "ContactPage", 
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" }
    ]
  });

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