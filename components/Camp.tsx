"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

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
          <div className="flex -space-x-4">
            {/* {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="person"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            ))} */}
          </div>
          <p className="text-base font-semibold">{peopleJoined}</p>
          <button className="bg-green-600 px-6 py-2 rounded-md">
            <Link href={`/packages/${slug}`} className="text-white">
              Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <>
      <section className="2xl:max-container relative flex flex-col py-10  lg:py-20 xl:">
        <div className="flex justify-start mb-12 px-6 lg:px-12">
          <div
            ref={quoteRef}
            className="relative bg-green-600 backdrop-blur-xl rounded-3xl xl:rounded-5xl p-8 xl:p-16 text-white shadow-xl overflow-hidden w-full max-w-2xl xl:max-w-3xl">
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
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Caravan Camp"
            subtitle="Travel in comfort"
            peopleJoined="50+ Joined"
            slug="caravan-package"
          />
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Umiam Lake Camp"
            subtitle="Umiam, Meghalaya"
            peopleJoined="50+ Joined"
            slug="umiam-lake-camp"
          />
          {/* <CampSite
            backgroundImage="bg-bg-img-2"
            title="Syntung Falls"
            subtitle="Somewhere in the Wilderness"
            peopleJoined="50+ Joined"
            slug="mountain-view-camp"
          />
          <CampSite
            backgroundImage="bg-bg-img-3"
            title="Nohkalikai Falls"
            subtitle="Above the Clouds"
            peopleJoined="50+ Joined"
            slug="hilltop-escape"
          />
          <CampSite
            backgroundImage="bg-bg-img-4"
            title="Jungle Retreat"
            subtitle="Deep in the Forest"
            peopleJoined="50+ Joined"
            slug="jungle-retreat"
          /> */}
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

export default Camp;
