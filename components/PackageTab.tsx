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
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-6 text-green-700 tracking-wide">
              Itinerary
            </h3>
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-green-100/60 text-left text-gray-800">
                  <th className="p-4 border border-gray-200 font-medium">
                    Date
                  </th>
                  <th className="p-4 border border-gray-200 font-medium">
                    Distance
                  </th>
                  <th className="p-4 border border-gray-200 font-medium">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {pkg.itinerary.map((day, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 rounded-xl">
                    {" "}
                    <td className="p-4 border border-gray-200 font-semibold text-gray-900">
                      {day.date}
                    </td>
                    <td className="p-4 border border-gray-200 text-gray-700 whitespace-nowrap">
                      {day.distance}
                    </td>
                    <td className="p-4 border border-gray-200 text-gray-700">
                      <ul className="space-y-1 list-disc list-inside">
                        {day.location.split("•").map(
                          (point, idx) =>
                            point.trim() && (
                              <li key={idx} className="leading-relaxed">
                                {point.trim()}
                              </li>
                            )
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
