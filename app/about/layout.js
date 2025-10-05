import { generateMetadata as generateSEOMetadata, pagesSEO, generateStructuredData } from "../utils/seo";

export const metadata = generateSEOMetadata(pagesSEO.about);

export default function AboutLayout({ children }) {
  const structuredData = generateStructuredData({
    type: "AboutPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" }
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