import { generateMetadata as generateSEOMetadata, defaultSEO } from "./utils/seo";
import HomeClient from "./HomeClient";

export const metadata = generateSEOMetadata({
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  path: "/"
});

export default function Home() {
  return <HomeClient />;
}
