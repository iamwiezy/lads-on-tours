// lib/data/packages.ts
export interface ItineraryDay {
  date: string;      // e.g. "Day 1"
  location: string;  // e.g. "Shillong to Cherrapunji"
}

export interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  slug: string;
  images: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  description: string;
  category: string;
  tripDetails: string;
    // 🆕 New fields
  itinerary: ItineraryDay[];   // updated
  inclusions: string[];
  exclusions: string[];
}

export const allPackages: CampProps[] = [
 {
  backgroundImage: "bg-bg-img-1",
  title: "Caravan Package",
  subtitle: "Meghalaya",
  peopleJoined: "",
  slug: "caravan-package",
  images: [
    "/packagesCaravan-10.JPEG",
    "/packagesCaravan-1.JPEG",
    "/packagesCaravan-2.JPEG",
    "/packagesCaravan-4.JPEG",
    "/packagesCaravan-5.JPEG",
    "/packagesCaravan-9.JPEG",
  ],
  price: 18500,
  originalPrice: 20000,
  rating: 4.6,
  reviewsCount: 55,
  description:
    "Packages Caravan 6 days 5 nights, र 18,500/- per person for 4 upto 6 pax people per trip",
  category: "Camp",
  tripDetails:
    "Experience Meghalaya like never before with our Caravan Trip. Travel at your own pace through rolling hills, misty valleys, waterfalls and hidden village all from the comfort of a moving home. Whether it’s camping under the stars waking up to scenic views or exploring offbeat lo	cations our caravans let you blend adventure with relaxation for a truly unforgettable journey.",

  // 🆕 Added fields
  itinerary: [
  { date: "Day 1",  location: "Shillong → Mawphanlur" },
  { date: "Day 2",  location: "Markham Mawkyrwat" },
  { date: "Day 3", location: "Mawkyrwat → Mawsynram" },
  { date: "Day 4",  location: "Mawsynram (Activities)" },
  { date: "Day 5",  location: "Mawsynram (Activities)" },
  { date: "Day 6", location: "Shillong" },
],

  inclusions: [
    "Comfortable caravan accommodation for the duration of the trip",
    "Transportation between destinations in the caravan",
    "Adventure activities like kayaking & river canyoning",
    "Sightseeing of key attractions mentioned in the itinerary",
    "Life jackets, helmets, or safety gear for adventure activities",
    "Entry fees to tourist spots"
  ],
  exclusions: [
    "Meals are not included in the package; however, the guide will assist in visiting local eateries or shops.",
    "Activities or experiences not mentioned in the itinerary are not included in the package."
  ],
 },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Umiam Camping Tour",
    subtitle: "Meghalaya",
    peopleJoined: "50+ Joined",
    slug: "umiam-lake-camp",
    images: ["/umiam-1.jpg", "/umiam-2.jpg", "/umiam-3.jpg" ],
    price: 18500,
    originalPrice: 20000,
    rating: 4.6,
    reviewsCount: 55,
    description:
      "Umiam Lake Camp 6 days 5 nights = 18500 per person for 4 upto 6 pax per trip",
    category: "Camp",
    tripDetails:
      "Umiam Lake Camp 6 days 5 nights = 18500 per person for 4 upto 6 pax per trip",
    // 🆕 Added fields
  itinerary: [
  { date: "Day 1", location: "Shillong local sightseeing" },
  { date: "Day 2", location: "Shillong → Cherrapunji" },
  { date: "Day 3", location: "Cherrapunji → Mawlynnong" },
  { date: "Day 4", location: "Mawlynnong → Dawki" },
  { date: "Day 5",  location: "Dawki → Jowai" },
  { date: "Day 6", location: "Jowai → Shillong (Departure)" },
],
  inclusions: [
    "Accommodation in Caravan",
    "Meals (Breakfast & Dinner)",
    "Driver & Fuel charges",
    "Basic medical kit",
    "Campfire experience",
  ],
  exclusions: [
    "Airfare/Train tickets",
    "Lunch & personal expenses",
    "Adventure activity fees",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ],
    },
  {
    backgroundImage: "bg-bg-img-3",
    title: "Living Root Bridge Tour",
    subtitle: "Meghalaya",
    peopleJoined: "50+ Joined",
    slug: "living-root-bridge-tour",
    images: ["/livingRootBridge.png","/waterfall_1.png", "/waterfall_2.png", "/waterfall_3.png" ],
    price: 18500,
    originalPrice: 20000,
    rating: 4.6,
    reviewsCount: 55,
    description: 'In Meghalaya, the Living Root Bridges are centuries-old wonders grown from the roots of rubber trees by the Khasi and Jaintia communities. These natural pathways, from the famous Double Decker in Nongriat to hidden village bridges, showcase a rare blend of tradition and nature. A must-see for adventurers and nature lovers alike.',
    category: "Camp",
    tripDetails:
            "Enter a world where nature and tradition intertwine in extraordinary harmony. Unique to Meghalaya the Living Root Bridges are stunning examples of bioengineering crafted by the Khasi and Jaintia communities who skilfully guided the roots of rubber trees to grow into natural, living pathways across rivers and streams. Your journey will take you through lush green forests and sparkling streams leading to these centuries-old wonders many still serving as daily crossings for local villagers. From the iconic Double Decker Bridge in Nongriat to hidden gems nestled in remote villages each bridge offers a rare glimpse into Meghalaya’s cultural heritage and natural beauty.An experience designed for adventurers, explorers and nature lovers this is your chance to witness one of the world’s most remarkable and sustainable creations.",

    // 🆕 Added fields
  itinerary: [
  // { date: "Day 1", location: "Shillong local sightseeing" },
],
  inclusions: [
    "Accommodation in Caravan",
    "Meals (Breakfast & Dinner)",
    "Driver & Fuel charges",
    "Basic medical kit",
    "Campfire experience",
  ],
  exclusions: [
    "Airfare/Train tickets",
    "Lunch & personal expenses",
    "Adventure activity fees",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ],
    },
];
