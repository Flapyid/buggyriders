// app/utils/seo.js

const baseUrl = "https://buggyriders.ae"; // Canonical production domain
const siteName = "Buggy Riders Dubai";
const businessName = "Buggy Riders";

export const defaultSEO = {
  title: "Buggy Riders Dubai - Premier Dune Buggy Rental & Desert Adventures",
  description: "Experience the ultimate desert adventure with Buggy Riders Dubai. Premium dune buggy rentals, quad bike tours, and thrilling desert safaris in Dubai's stunning desert landscape.",
  keywords: "dune buggy dubai, desert safari dubai, quad bike rental dubai, desert adventure tours, dubai desert activities, buggy rental uae",
  author: "Buggy Riders Dubai",
  language: "en",
  robots: "index, follow",
  canonical: baseUrl
};

export function generateMetadata({ 
  title, 
  description, 
  keywords, 
  path = "/", 
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false
}) {
  const fullTitle = title ? `${title} | ${siteName}` : defaultSEO.title;
  const fullDescription = description || defaultSEO.description;
  const fullKeywords = keywords ? `${keywords}, ${defaultSEO.keywords}` : defaultSEO.keywords;
  const canonicalUrl = `${baseUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: [{ name: defaultSEO.author }],
    robots: noIndex ? "noindex, nofollow" : defaultSEO.robots,
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: siteName,
      type: type,
      locale: 'en_AE',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
      creator: '@buggyriders_ae', // Update with actual Twitter handle
    },

    // Additional meta tags
    other: {
      'language': defaultSEO.language,
      'geo.region': 'AE-DU',
      'geo.placename': 'Dubai',
      'geo.position': '25.276987;55.296249', // Dubai coordinates
      'ICBM': '25.276987, 55.296249',
    }
  };

  // Add article-specific metadata for blog posts
  if (type === 'article' && publishedTime) {
    metadata.openGraph.publishedTime = publishedTime;
    if (modifiedTime) {
      metadata.openGraph.modifiedTime = modifiedTime;
    }
  }

  return metadata;
}

export function generateStructuredData({
  type = "Organization",
  name = businessName,
  description = defaultSEO.description,
  url = baseUrl,
  image = `${baseUrl}/logo.jpg`,
  telephone = "+971588826558", // From phone.js
  address = {
    streetAddress: "Dubai Desert",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE"
  },
  services = [],
  breadcrumbs = []
}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.276987",
      "longitude": "55.296249"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "priceRange": "$$"
  };

  // Add services if provided
  if (services.length > 0) {
    baseStructuredData.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Desert Adventure Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    };
  }

  // Add breadcrumbs if provided
  if (breadcrumbs.length > 0) {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${baseUrl}${crumb.path}`
      }))
    };
    
    return [baseStructuredData, breadcrumbData];
  }

  return baseStructuredData;
}

export const servicesSEO = {
  dunebuggy: {
    title: "Dune Buggy Rental Dubai - Extreme Desert Adventures",
    description: "Experience the thrill of dune buggy racing in Dubai's golden desert. Professional guided tours, top-quality vehicles, and unforgettable desert adventures await.",
    keywords: "dune buggy rental dubai, desert buggy tours, dubai dune buggy experience, off-road desert adventure",
    path: "/dunebuggy"
  },
  quadbike: {
    title: "Quad Bike Rental Dubai - Desert ATV Adventures", 
    description: "Explore Dubai's stunning desert landscape on powerful quad bikes. Safe, guided ATV tours with professional instruction for all skill levels.",
    keywords: "quad bike rental dubai, atv tours dubai, desert quad biking, dubai off-road adventures",
    path: "/quadbike"
  },
  desertadventure: {
    title: "Desert Safari Dubai - Complete Adventure Packages",
    description: "Discover the magic of Dubai's desert with comprehensive safari packages including dune bashing, camel rides, cultural experiences, and traditional entertainment.",
    keywords: "desert safari dubai, dubai desert tours, desert adventure packages, dune bashing dubai",
    path: "/desertadventure"
  }
};

export const pagesSEO = {
  about: {
    title: "About Buggy Riders Dubai - Your Desert Adventure Experts",
    description: "Learn about Buggy Riders Dubai, the leading desert adventure company offering premium dune buggy rentals, quad bike tours, and desert safaris since 2015.",
    keywords: "about buggy riders dubai, desert adventure company, dubai tourism company",
    path: "/about"
  },
  contact: {
    title: "Contact Buggy Riders Dubai - Book Your Desert Adventure",
    description: "Get in touch with Buggy Riders Dubai to book your ultimate desert adventure. Contact us for dune buggy rentals, quad bike tours, and desert safari bookings.",
    keywords: "contact buggy riders dubai, book desert adventure, dubai desert tours booking",
    path: "/contact"
  },
  gallery: {
    title: "Gallery - Buggy Riders Dubai Desert Adventures",
    description: "Explore stunning photos from our desert adventures in Dubai. See the excitement and beauty of our dune buggy tours, quad bike adventures, and desert safaris.",
    keywords: "buggy riders gallery, dubai desert photos, dune buggy pictures, desert adventure images",
    path: "/gallery"
  },
  blog: {
    title: "Desert Adventure Blog - Tips & Guides by Buggy Riders Dubai",
    description: "Discover expert tips, guides, and insights about desert adventures in Dubai. Learn about dune buggy tours, desert safety, and the best desert experiences.",
    keywords: "dubai desert blog, desert adventure tips, dune buggy guides, desert safari advice",
    path: "/blog"
  }
};