"use client";

import { useRef, useLayoutEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  slug: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  slug,
}: CampProps) => {
  return (
    <div
      className={`camp-site relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden ${backgroundImage}`}>
      <div className="absolute inset-0 bg-black/40  z-0 rounded-3xl" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-10 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-green-50 p-3 rounded-full">
            <Image src="/folded-map.svg" alt="map" width={24} height={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-sm opacity-85">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-base font-semibold">{peopleJoined}</p>
          <button className="bg-green-600 px-6 py-2 rounded-md">
            <Link href={`/packages/${slug}`} className="text-white">
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allPackages: CampProps[] = [
    {
      backgroundImage: "bg-bg-img-1",
      title: "Caravan Package",
      subtitle: "Travel in comfort",
      peopleJoined: "50+ Joined",
      slug: "caravan-package",
    },
    {
      backgroundImage: "bg-bg-img-2",
      title: "Umiam Camping Tour",
      subtitle: "Umiam, Meghalaya",
      peopleJoined: "50+ Joined",
      slug: "umiam-lake-camp",
    },
    // {
    //   backgroundImage: "bg-bg-img-2",
    //   title: "Syntung Falls",
    //   subtitle: "Somewhere in the Wilderness",
    //   peopleJoined: "30+ Joined",
    //   slug: "mountain-view-camp",
    // },
    // {
    //   backgroundImage: "bg-bg-img-3",
    //   title: "Hilltop Escape",
    //   subtitle: "Above the Clouds",
    //   peopleJoined: "20+ Joined",
    //   slug: "hilltop-escape",
    // },
    // {
    //   backgroundImage: "bg-bg-img-4",
    //   title: "Jungle Retreat",
    //   subtitle: "Deep in the Forest",
    //   peopleJoined: "40+ Joined",
    //   slug: "jungle-retreat",
    // },
    // {
    //   backgroundImage: "bg-bg-img-2",
    //   title: "Riverbank Camp",
    //   subtitle: "Next to the Stream",
    //   peopleJoined: "60+ Joined",
    //   slug: "riverbank-camp",
    // },
    // {
    //   backgroundImage: "bg-bg-img-2",
    //   title: "Desert Mirage",
    //   subtitle: "Hidden Oasis",
    //   peopleJoined: "35+ Joined",
    //   slug: "desert-mirage",
    // },
  ];

  const filteredPackages = useMemo(() => {
    return allPackages.filter((pkg) =>
      pkg.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allPackages]);

  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPackages.slice(start, start + itemsPerPage);
  }, [filteredPackages, currentPage]);

  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".camp-site") as HTMLElement[];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [paginatedPackages]);

  return (
    <>
      <section className="2xl:max-container relative flex flex-col py-10 lg:py-20">
        {/* <div className="flex justify-start mb-12 px-6 lg:px-12">
          <div
            ref={quoteRef}
            className="relative bg-green-600 backdrop-blur-xl rounded-3xl p-8 xl:p-16 text-white shadow-xl overflow-hidden w-full max-w-2xl xl:max-w-3xl">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-light leading-tight">
              <strong className="font-bold">Feeling Lost</strong> and Not
              Knowing The Way?
            </h2>
            <p className="mt-5 text-sm xl:text-base text-white/90">
              Take a look at our packages and find the perfect adventure for
              you.
              <br />
              Join our community of explorers and start your journey today!
            </p>
            <Image
              src="/quote.svg"
              alt="quote"
              width={150}
              height={150}
              className="absolute right-4 bottom-4 opacity-40"
            />
          </div>
        </div> */}

        <div className="px-6 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset page on search
            }}
            placeholder="Search packages..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {paginatedPackages.map((pkg, index) => (
            <CampSite key={index} {...pkg} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center">
        <Button
          type="button"
          title="Start Booking"
          variant="btn_green"
          link="/packages"
        />
      </div>
    </>
  );
};

export default Page;
