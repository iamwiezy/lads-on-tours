import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lads On Tours Shillong | Adventure Travel Experts",
  description:
    "Discover unforgettable adventures with Lads On Tours — your trusted travel agency for trekking, camping, road trips, and more.",
  openGraph: {
    title: "Lads On Tours Shillong | Adventure Travel Experts",
    description:
      "Plan your next big adventure with Lads On Tours. Explore our curated travel packages for thrill-seekers and nature lovers.",
    url: "https://www.ladsontourshillong.com", // change to your real domain
    siteName: "Lads On Tours",
    images: [
      {
        url: "/og-image.png", // Optional: add an OG image
        width: 1200,
        height: 630,
        alt: "Lads On Tours Shillong - Adventure Travel Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lads On Tours | Adventure Travel Experts",
    description:
      "Join the Lads On Tours community and embark on adventures you'll never forget.",
    site: "@ladsontours", // update if you have a Twitter handle
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/ladsontourlogo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="keywords"
          content="Adventure Travel, Trekking, Camping, Road Trips, Lads On Tours, Travel Agency India"
        />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
