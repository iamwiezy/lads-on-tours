// app/contactPage/page.tsx
"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Handle actual submission here
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-8xl leading-none font-bold tracking-tight uppercase text-green-600">
            Sub
            <br />
            scr
            <br />
            ibe.
          </h1>
          <p className="text-sm max-w-sm">
            If you want to keep in touch/up-to-date on various releases, updates
            etc... might recommend signing up to a newsletter. I'm not sure how
            often I'll get around to sending them out, but I'll make sure
            they’re only meaningful/worth your while.
          </p>

          <div className="text-xs">
            <p className="font-semibold mb-1">What it is:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>New releases</li>
              <li>Free/exclusive content</li>
              <li>Beta testing</li>
              <li>Discounts/promos</li>
              <li>Updates</li>
            </ul>
            <p className="font-semibold mt-4 mb-1">What it isn’t:</p>
            <ul className="list-disc pl-4 space-y-1 line-through">
              <li>Spam</li>
              <li>Airing of grievances</li>
              <li>Conspiracy theories</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col gap-8 mt-12 lg:mt-0">
          <div>
            <label className="text-xs uppercase font-semibold">
              Who are you?
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="[ Your name ]"
              className="w-full text-3xl font-medium bg-transparent border-b border-black focus:outline-none py-2 mt-2 placeholder:text-black"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase font-semibold">
              How do I reach you?
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="[ Your email ]"
              className="w-full text-3xl font-medium bg-transparent border-b border-black focus:outline-none py-2 mt-2 placeholder:text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="text-3xl self-start mt-2 hover:scale-105 transition-transform">
            [ ↗ ]
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
