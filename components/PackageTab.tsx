"use client";

import { useState } from "react";
import { CampProps } from "@/lib/data/packages";

export default function PackageTabs({ pkg }: { pkg: CampProps }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = ["description", "itinerary", "inclusions", "exclusions"];

  return (
    <div className="mt-12">
      {/* Tabs Header */}
      <div className="flex gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-sm md:text-base font-semibold transition-colors duration-200 capitalize
              ${
                activeTab === tab
                  ? "text-green-700"
                  : "text-gray-500 hover:text-gray-800"
              }`}>
            {tab}
            {/* Active indicator line */}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-green-700">
              Trip Details
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {pkg.tripDetails}
            </p>
          </div>
        )}

        {activeTab === "itinerary" && (
          <div className="backdrop-blur-md bg-white/60  p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5 text-green-600 tracking-wide uppercase">
              Itinerary
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm md:text-base text-gray-800 dark:text-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-green-900/60 to-green-900/40 text-left">
                    <th className="p-4 font-semibold tracking-wide uppercase text-xs md:text-sm">
                      Date
                    </th>
                    <th className="p-4 font-semibold tracking-wide uppercase text-xs md:text-sm">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.itinerary.map((day, i) => (
                    <tr
                      key={i}
                      className={`transition duration-300 ${
                        i % 2 === 0 ? "bg-white text-black" : "bg-green-900 "
                      }  `}>
                      <td className="p-4 font-medium">{day.date}</td>
                      <td className="p-4">{day.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "inclusions" && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-green-700">
              Inclusions
            </h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-gray-700 space-y-2">
              {pkg.inclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "exclusions" && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-green-700">
              Exclusions
            </h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-gray-700 space-y-2">
              {pkg.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
