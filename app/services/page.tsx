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
        className="bg-green-500 py-10 text-center h-[30vh] m-6 rounded-lg">
        <h1 className="text-4xl font-bold text-white">Services</h1>
        <p className="text-sm mt-2 text-white">Home &gt; Services</p>
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
          <span className="bg-green-500 px-2">Travel</span> Better
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
