"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const fadeInOutVariant = (axis = "y", distance = 80) => ({
  hidden: { [axis]: distance, opacity: 0 },
  visible: { [axis]: 0, opacity: 1 },
});

const Features = () => {
  const phoneRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  const phoneControls = useAnimation();
  const headingControls = useAnimation();
  const listControls = useAnimation();

  const phoneInView = useInView(phoneRef, { margin: "-20% 0% -20% 0%" });
  const headingInView = useInView(headingRef, { margin: "-20% 0% -20% 0%" });
  const listInView = useInView(listRef, { margin: "-20% 0% -20% 0%" });

  useEffect(() => {
    phoneControls.start(phoneInView ? "visible" : "hidden");
    headingControls.start(headingInView ? "visible" : "hidden");
    listControls.start(listInView ? "visible" : "hidden");
  }, [phoneInView, headingInView, listInView]);

  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* Phone Image */}
        <motion.div
          ref={phoneRef}
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
          animate={phoneControls}
          variants={{
            visible: { x: 20, opacity: 1, scale: 1 },
            hidden: { x: -100, opacity: 0, scale: 0.95 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/feature.png"
            alt="phone"
            width={600}
            height={1000}
            className="feature-phone"
          />
        </motion.div>

        {/* Right Content */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          {/* Heading */}
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={fadeInOutVariant("y", -80)}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Why Choose Us?</h2>
          </motion.div>

          {/* Feature List */}
          <motion.ul
            ref={listRef}
            initial="hidden"
            animate={listControls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
              hidden: {},
            }}
            className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <motion.li
                key={feature.title}
                variants={fadeInOutVariant("y", 60)}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex w-full flex-1 flex-col items-start">
                <div className="rounded-full p-4 lg:p-7 bg-green-50">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                  />
                </div>
                <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                  {feature.title}
                </h2>
                <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                  {feature.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
