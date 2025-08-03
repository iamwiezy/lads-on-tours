import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lads On Tours",
  description: "The Go-To Travel Agency for Adventurers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ladsontourlogo.png" sizes="any" />
        {/* If you use a PNG favicon */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <title>Lads On Tours</title>
        <meta
          name="description"
          content="The Go-To Travel Agency for Adventurers"
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
