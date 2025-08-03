"use client";

import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  easeInOut,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./Button";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const starVariants: {
  hidden: TargetAndTransition;
  visible: (i: number) => TargetAndTransition;
} = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const starsRef = useRef(null);

  const leftInView = useInView(leftRef, { margin: "-20% 0% -20% 0%" });
  const rightInView = useInView(rightRef, { margin: "-20% 0% -20% 0%" });
  const starsInView = useInView(starsRef, { margin: "-20% 0% -20% 0%" });

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const starControls = useAnimation();

  useEffect(() => {
    leftControls.start(leftInView ? "visible" : "hidden");
    rightControls.start(rightInView ? "visible" : "hidden");
    starControls.start(starsInView ? "visible" : "hidden");
  }, [leftInView, rightInView, starsInView]);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Background Map */}
      <div className="hero-map" />

      {/* Right Section (Logo Box) */}
      <motion.div
        ref={rightRef}
        variants={fadeRight}
        initial="hidden"
        animate={rightControls}
        className="relative flex flex-1 items-start justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative z-20 flex w-[360px] flex-col gap-5 rounded-3xl bg-white/30 px-7 py-8 backdrop-blur-lg shadow-2xl border border-white/20">
          <Image
            src="/ladsontourlogo.png"
            alt="map thumbnail"
            width={300}
            height={120}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="regular-16 text-gray-20">Based in Meghalaya</p>
              <Image src="/close.svg" alt="close" width={20} height={20} />
            </div>
            <p className="bold-16 text-green-600">
              Where travel meets destination
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Left Section (Text) */}
      <motion.div
        ref={leftRef}
        variants={fadeLeft}
        initial="hidden"
        animate={leftControls}
        className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-86 uppercase text-green-600">
          Lads on Tours
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] text-justify">
          Lads on Tours is a travel collective based in Meghalaya that offers
          more than just trips — we create experiences. Whether you're exploring
          the misty hills of Sohra, chasing waterfalls in Jaintia, or diving
          into the vibrant culture of the Khasi and Garo people, our local
          guides ensure you see the real Meghalaya. From full travel planning
          and curated itineraries to offbeat trails and homestay bookings, we’ve
          got your back. Perfect for backpackers, friend groups, solo travelers,
          and anyone seeking an authentic Northeast adventure — Lads on Tours
          brings you closer to nature, culture, and community.
        </p>

        {/* Stars and Review */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2" ref={starsRef}>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={starControls}
                  variants={starVariants}>
                  <Image src="/star.svg" alt="star" width={24} height={24} />
                </motion.div>
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Start Travelling"
            variant="btn_green"
            link="/packages"
          />
          <Button
            type="button"
            title="Where to?"
            icon="/play.svg"
            variant="btn_white_text"
            link="/explore"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
