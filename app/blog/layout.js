import { generateMetadata as generateSEOMetadata, pagesSEO, generateStructuredData } from "../utils/seo";

export const metadata = generateSEOMetadata(pagesSEO.blog);

export default function BlogLayout({ children }) {
  const structuredData = generateStructuredData({
    type: "Blog",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" }
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