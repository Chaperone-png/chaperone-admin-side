/**
 * Static SEO metadata for different pages of the website.
 * This ensures consistent and optimized metadata across the site.
 */

export const SEO_DATA = {
  home: {
    title:
      "Chaperone: Online Plant Store in Delhi - Expert Mali & Plant Daycare Service",
    description:
      "Chaperone is your go-to online plant store in Delhi! Browse indoor plants, pots, get mali services, and expert plant daycare with safe home delivery.",
    keywords: `plants,
      online plant shopping,
      indoor plants,
      outdoor plants,
      gardening,
      houseplants,
      best-selling plants,
      new arrivals plants ,
      plant nursery`,
    metadataBase: new URL("https://www.chaperoneco.com"),
    canonical: "https://www.chaperoneco.com",
    author: "Chaperone Plants",
    openGraph: {
      title:
        "Chaperone: Online Plant Store in Delhi - Expert Mali & Plant Daycare Service",
      description:
        "Chaperone is your go-to online plant store in Delhi! Browse indoor plants, pots, get mali services, and expert plant daycare with safe home delivery.",
      url: "https://www.chaperoneco.com",
      type: "website",
      images: [
        {
          url: "https://www.chaperoneco.com/images/home-banner.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Home Banner",
        },
        {
          url: "https://www.chaperoneco.com/images/maali-book.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Maali Booking",
        },
        {
          url: "https://www.chaperoneco.com/images/day-care-book.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Day Care Booking",
        },
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Chaperone Plants",
      url: "https://www.chaperoneco.com",
      logo: "https://www.chaperoneco.com/logo.png",
      sameAs: [
        "https://www.instagram.com/chaperoneplants/",
        "https://www.linkedin.com/company/chaperone-plants/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 99582 87272",
        contactType: "Customer Service",
        areaServed: "Delhi",
        availableLanguage: ["English"],
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  },

  maali_service: {
    title: "Expert Maali Service and Gardening Care",
    subtitle: "Bring Enchantment to Your Garden with Chaperone's Skilled Malis",
    description:
      "Looking for mali services in Delhi-NCR? Chaperone's expert gardeners offers plant daycare, plant maintenance & landscaping services to keep your garden thriving.",
    keywords:
      "gardening, maali, gardening services, book maali, garden care, landscaping, plant care",
    canonical: "https://www.chaperoneco.com/services/maali-service",
    openGraph: {
      title: "Expert Maali Service and Gardening Care",
      description:
        "Looking for maali Services in Delhi? Our expert gardener provides professional plant care, maintenance, and landscaping services to keep your garden thriving.",
      url: "https://www.chaperoneco.com/services/maali-service",
      type: "website",
      images: [
        {
          url: "https://www.chaperoneco.com/images/home-banner.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Home Banner",
        },
        {
          url: "https://www.chaperoneco.com/images/maali-book.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Maali Booking",
        },
        {
          url: "https://www.chaperoneco.com/images/day-care-book.png",
          width: 1200,
          height: 630,
          alt: "Chaperone Plants Day Care Booking",
        },
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Chaperone Plants",
      url: "https://www.chaperoneco.com/services/maali-service",
      logo: "https://www.chaperoneco.com/logo.png",
      sameAs: [
        "https://www.instagram.com/chaperoneplants/",
        "https://www.linkedin.com/company/chaperone-plants/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 99582 87272",
        contactType: "Customer Service",
        areaServed: "Delhi",
        availableLanguage: ["English"],
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  },
};
