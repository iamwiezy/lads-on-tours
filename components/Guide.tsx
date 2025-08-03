"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Guide = () => {
  // Control multiple animations
  const iconControls = useAnimation();
  const headingControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();
  const cardControls = useAnimation();

  // Refs for each block
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  const iconInView = useInView(iconRef, { margin: "-20% 0% -20% 0%" });
  const headingInView = useInView(headingRef, { margin: "-20% 0% -20% 0%" });
  const paragraphInView = useInView(paragraphRef, {
    margin: "-20% 0% -20% 0%",
  });
  const imageInView = useInView(imageRef, { margin: "-20% 0% -20% 0%" });
  const cardInView = useInView(cardRef, { margin: "-20% 0% -20% 0%" });

  // Reversible animation logic
  useEffect(() => {
    iconInView ? iconControls.start("visible") : iconControls.start("hidden");
    headingInView
      ? headingControls.start("visible")
      : headingControls.start("hidden");
    paragraphInView
      ? paragraphControls.start("visible")
      : paragraphControls.start("hidden");
    imageInView
      ? imageControls.start("visible")
      : imageControls.start("hidden");
    cardInView ? cardControls.start("visible") : cardControls.start("hidden");
  }, [iconInView, headingInView, paragraphInView, imageInView, cardInView]);

  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <motion.div
          ref={iconRef}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={iconControls}
          transition={{ duration: 0.5 }}>
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
            We are here for you
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <motion.h2
            ref={headingRef}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={headingControls}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </motion.h2>

          <motion.p
            ref={paragraphRef}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={paragraphControls}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="regular-16 text-gray-30 xl:max-w-[520px]">
            With Lads on Tours, you'll never feel lost exploring Meghalaya.
            Whether you're off-grid in the hills or deep in a forest trail, our
            guides and offline support have you covered. Bring your friends and
            experience the wild — through misty valleys, hidden waterfalls, and
            all the way to the mountain tops.
          </motion.p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <motion.div
          ref={imageRef}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={imageControls}
          transition={{ duration: 0.7 }}
          className="w-full">
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2xl:rounded-5xl"
          />
        </motion.div>

        <motion.div
          ref={cardRef}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={cardControls}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
