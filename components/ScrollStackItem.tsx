"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
}

const ScrollStackItem = ({ children, index }: ScrollStackItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animate through the full scroll range
  });

  // Animate scale and opacity as it scrolls into view
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
      }}
      className={`scroll-stack-card relative w-full min-h-[70vh] mb-[-30vh] p-12 rounded-[40px] bg-white shadow-[0_0_40px_rgba(0,0,0,0.15)] z-[${
        10 - index
      }]`}>
      {children}
    </motion.div>
  );
};

export default ScrollStackItem;
