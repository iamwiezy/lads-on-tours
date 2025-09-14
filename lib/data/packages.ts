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
];
