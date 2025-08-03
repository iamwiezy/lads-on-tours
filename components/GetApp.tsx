"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import ProfileCard from "./ProfileCard";

const GetApp = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  const cardControls = useAnimation();
  const textControls = useAnimation();

  const cardInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });
  const textInView = useInView(textRef, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    } else {
      cardControls.start("hidden");
    }

    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [cardInView, textInView]);

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app gap-12 flex flex-col lg:flex-row items-start">
        {/* Animate ProfileCard */}
        <motion.div
          ref={cardRef}
          initial="hidden"
          animate={cardControls}
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 50 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}>
          <ProfileCard />
        </motion.div>

        {/* Animate Text */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-40">
            Founded By: <br />
            <span className="text-2xl">Banjop Iawphniaw</span>
          </h2>

          <p>
            Banjop lawphniaw worked as a driver and then as a guide with
            Campfire Trails. He has paddled the Ganga and Alaknanda rivers in
            North India as well as the Kolodyne in Mizoram and has been central
            to explorations in Meghalaya. He was the first Khasi kayaker to
            learn to roll and regularly takes friends and family out paddling.
            When hired by kayakers to shuttle them, he would arrive hours
            earlier to catch some free river time, often without informing
            co-drivers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetApp;
