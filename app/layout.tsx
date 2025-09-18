import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

// Best practice: Set a base URL for all relative paths in metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ladsontourshillong.com"), // IMPORTANT: Change to your real domain

  // Use a title template for consistent branding across pages
  title: {
    default: "Lads On Tours | Adventure Travel & Tours in Shillong, Meghalaya", // A strong, keyword-rich default title
    template: `%s | Lads On Tours Shillong`, // E.g., "Living Root Bridge Trek | Lads On Tours Shillong"
  },

  // A more compelling and keyword-rich description
  description:
    "Explore the breathtaking beauty of Meghalaya with Lads On Tours, Shillong's premier adventure travel experts. We specialize in curated trekking, camping, caving, and road trip packages. Book your Northeast India adventure today!",

  // Add more specific keywords
  keywords: [
    "Shillong travel",
    "Meghalaya tours",
    "Northeast India adventure",
    "trekking in Meghalaya",
    "camping Shillong",
    "living root bridges",
    "Cherrapunji tours",
    "Dawki river",
    "adventure travel India",
    "Lads On Tours",
  ],

  // SEO best practice: Define the canonical URL
  alternates: {
    canonical: "/",
  },

  // Control how search engine bots crawl your site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (for Facebook, LinkedIn, etc.) - optimized for clarity and engagement
  openGraph: {
    title: "Lads On Tours | Adventure Travel in Shillong & Meghalaya",
    description:
      "Discover unforgettable adventures in Northeast India. We offer expert-guided trekking, camping, and road trips.",
    url: "https://www.ladsontourshillong.com", // Should be the canonical URL
    siteName: "Lads On Tours Shillong",
    images: [
      {
        url: "/og-image.png", // Must be an absolute path from the domain root
        width: 1200,
        height: 630,
        alt: "A stunning view of the Meghalaya landscape with the Lads On Tours logo",
      },
    ],
    locale: "en_IN", // Changed to India English
    type: "website",
  },

  // Twitter Card - optimized for clicks
  twitter: {
    card: "summary_large_image",
    title: "Lads On Tours Shillong | Your Meghalaya Adventure Awaits!",
    description:
      "Ready for an epic journey? Explore trekking, camping, and unique road trips in Northeast India with us.",
    site: "@ladsontours", // Your Twitter handle
    creator: "@creatorhandle", // The creator's handle (optional but good)
    images: ["/og-image.png"], // Must be an absolute path
  },

  // For PWA and mobile devices
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for Local Business SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Lads On Tours Shillong",
    description:
      "Your trusted travel agency in Shillong for adventure tours, trekking, camping, and road trips across Meghalaya and Northeast India.",
    url: "https://www.ladsontourshillong.com",
    logo: "https://www.ladsontourshillong.com/ladsontourlogo.png", // Use absolute URL
    telephone: "+91-YOUR-PHONE-NUMBER", // Add your phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Shillong",
      addressRegion: "Meghalaya",
      postalCode: "793001", // Example Shillong Pincode
      addressCountry: "IN",
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00", // Example hours
    sameAs: [
      // Add links to your social media profiles
      "https://www.facebook.com/your-profile",
      "https://www.instagram.com/your-profile",
      "https://twitter.com/ladsontours",
    ],
    priceRange: "$$", // Optional: Use $, $$, $$$, or $$$$
  };

  return (
    <html lang="en">
      {/* Next.js automatically adds charset and viewport meta tags. 
        You don't need to add them manually.
        The `keywords` meta tag is also handled by the Metadata object.
      */}
      <head>
        <link rel="icon" href="/ladsontourlogo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Add JSON-LD Structured Data to the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
