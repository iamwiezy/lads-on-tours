import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import { SERVICES } from "@/constants/services";
import { PRICING_PLANS } from "@/constants/pricing";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-500 py-10 text-center h-[30vh] m-6 rounded-lg">
        <h1 className="text-4xl font-bold text-white">Services</h1>
        <p className="text-sm mt-2 text-white">Home &gt; Services</p>
      </div>

      {/* Mission */}
      <section className="text-center py-12">
        <p className="text-green-500 font-semibold">Our Services</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Our Mission Is To Make Your{" "}
          <span className="bg-green-500 px-2">Travel</span> Better
        </h2>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 mb-16">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      {/* Pricing */}
      {/* <section className="text-center mb-8">
        <p className="text-lime-500 font-semibold">Pricing Plan</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          We Make IT Simple, Faster, And Less Expensive
        </h2>
      </section> */}

      {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 pb-20">
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </section> */}
    </div>
  );
};

export default ServicesPage;
