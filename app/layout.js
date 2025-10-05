import { Geist } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "./utils/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra-petch",
});

export const metadata = {
  ...generateSEOMetadata({}),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'JAJ_86t2o4K-24ITXihdJZk3IfYItrUBt4HHaaX-Afg', // Google Search Console site verification
    bing: 'BEE8F7E9E0C5200D1C32E229E574B2A2', // Bing Webmaster Tools verification
  },
  alternates: {
    canonical: 'https://buggyriders.com',
  },
};

export default function RootLayout({ children }) {
  const structuredData = generateStructuredData({
    services: [
      { name: "Dune Buggy Rental", description: "Premium dune buggy adventures in Dubai desert" },
      { name: "Quad Bike Tours", description: "Guided ATV tours through desert landscapes" },
      { name: "Desert Safari", description: "Complete desert adventure packages with entertainment" }
    ]
  });

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={montserrat.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
