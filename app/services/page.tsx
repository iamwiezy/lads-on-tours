"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import { SERVICES } from "@/constants/services";
import { PRICING_PLANS } from "@/constants/pricing";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 py-16 px-6 text-center h-[35vh] m-6 rounded-2xl shadow-lg overflow-hidden">
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Services
          </h1>
          <div className="w-16 h-1 bg-white/80 rounded-full mt-3 mb-4"></div>
          <p className="text-base text-white/90">Home &gt; Services</p>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-12">
        <p className="text-green-500 font-semibold">Our Services</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Our Mission Is To Make Your{" "}
          <span className="bg-green-500 px-2 text-white">Travel</span> Better
        </h2>
      </motion.section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 mb-16">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </section>

      {/* Pricing Plan (Optional - uncomment if needed) */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="text-lime-500 font-semibold">Pricing Plan</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          We Make IT Simple, Faster, And Less Expensive
        </h2>
      </motion.section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 pb-20">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </section> */}
    </div>
  );
};

export default ServicesPage;
