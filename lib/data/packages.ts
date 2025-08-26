// lib/data/packages.ts
export interface ItineraryDay {
  date: string;      // e.g. "Day 1"
  distance: string;  // e.g. "120 km"
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
    "Packages Caravan 6 days 5 nights = 18500 per person for 4 upto 6 max people per trip",
  category: "Camp",
  tripDetails:
    "Experience Meghalaya like never before with our Caravan Trip. Travel at your own pace through rolling hills, misty valleys, waterfalls and hidden village all from the comfort of a moving home. Whether it’s camping under the stars waking up to scenic views or exploring offbeat lo	cations our caravans let you blend adventure with relaxation for a truly unforgettable journey.",

  // 🆕 Added fields
  itinerary: [
  { date: "Day 1", distance: "2hr 15mins (68.2km) | 1hr 16min (41.5km)", location: "•	Travel from Umiam to West Khasi Hills District •	Explore The Iconic Boulder “U Kyllang Rock” •	Head Towards Mawphanlur •	Explore the Valleys of Mawphanlur •	Overnight Stay" },
  { date: "Day 2", distance: "1hr 52mins (64km)", location: "•	Travel from Mawphanlur to Markham Village •	Explore the Green Valley, Markham •	Journey to Mawkyrwat •	Visit the Monoliths •	Visit Mawranglang View point •	Overnight " },
  { date: "Day 3", distance: "1hr 56mins (54.8)", location: "•	Hike to Iew Luri Lura•	Explore Umdikain Waterfall •	Discover the Split Rock •	Evening walk through the village •	Overnight Stay " },
  { date: "Day 4", distance: "3hr 13mins (98.2km)", location: "•	River canyoning activity followed by kayaking •	Travel to Cherrapunji •	Overnight Stay  " },
  { date: "Day 5", distance: "3hr 4mins (89.4km)", location: "•	Visit Janailar & Lyngksiar Waterfalls•	Visit Nohkalikai Waterfall •	Explore Arwah Cave •	Overnight Stay " },
  { date: "Day 6", distance: "2hr 45mins (75.4km)", location: "•	Descend 3,000 steps•	Explore the Double Decker Living Root Bridge •	Ascend 3,000 steps back •	Return to Umiam •	Overnight stay in Umiam" },
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
    title: "Umiam Lake Camp",
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
  { date: "Day 1", distance: "120 km", location: "Shillong local sightseeing" },
  { date: "Day 2", distance: "65 km", location: "Shillong → Cherrapunji" },
  { date: "Day 3", distance: "85 km", location: "Cherrapunji → Mawlynnong" },
  { date: "Day 4", distance: "90 km", location: "Mawlynnong → Dawki" },
  { date: "Day 5", distance: "110 km", location: "Dawki → Jowai" },
  { date: "Day 6", distance: "150 km", location: "Jowai → Shillong (Departure)" },
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
  
  // {
  //   backgroundImage: "bg-bg-img-2",
  //   title: "Syntung Falls",
  //   subtitle: "Somewhere in the Wilderness",
  //   peopleJoined: "30+ Joined",
  //   slug: "mountain-view-camp",
  //   images: ["/shillong-1.jpg", "/shillong-2.jpg", "/shillong-3.jpg"],
  //   price: 7000,
  //   originalPrice: 12000,
  //   rating: 4.3,
  //   reviewsCount: 40,
  //   description:
  //     "Camp near the hidden waterfalls of Syntung, surrounded by raw forest beauty and serenity.",
  //   category: "Nature",
  //   tripDetails:
  //     "Day 1: Setup at campsite, evening bonfire.\nDay 2: Guided trek to waterfalls and swimming.\nDay 3: Return after local breakfast.",
  // },
  // {
  //   backgroundImage: "bg-bg-img-2",
  //   title: "Nohkalikai Falls",
  //   subtitle: "Above the Clouds",
  //   peopleJoined: "20+ Joined",
  //   slug: "hilltop-escape",
  //   images: ["/shillong-1.jpg", "/shillong-2.jpg", "/shillong-3.jpg"],
  //   price: 9500,
  //   originalPrice: 18000,
  //   rating: 4.8,
  //   reviewsCount: 65,
  //   description:
  //     "Witness India’s tallest plunge waterfall and camp in the chilly highlands with breathtaking views.",
  //   category: "Adventure",
  //   tripDetails:
  //     "Day 1: Drive to base camp, evening trek to viewpoint.\nDay 2: Full day hike around Nohkalikai and picnic.\nDay 3: Return with memories.",
  // },
  // {
  //   backgroundImage: "bg-bg-img-2",
  //   title: "Jungle Retreat",
  //   subtitle: "Deep in the Forest",
  //   peopleJoined: "40+ Joined",
  //   slug: "jungle-retreat",
  //   images: ["/shillong-1.jpg", "/shillong-2.jpg", "/shillong-3.jpg"],
  //   price: 6000,
  //   originalPrice: 11000,
  //   rating: 4.1,
  //   reviewsCount: 28,
  //   description:
  //     "Experience raw jungle life with a retreat that brings you close to nature. Includes night safaris and forest bathing.",
  //   category: "Wildlife",
  //   tripDetails:
  //     "Day 1: Jungle walk and setup.\nDay 2: Nature trail and wildlife watch.\nDay 3: Meditation and return.",
  // },
  // {
  //   backgroundImage: "bg-bg-img-2",
  //   title: "Riverbank Camp",
  //   subtitle: "Next to the Stream",
  //   peopleJoined: "60+ Joined",
  //   slug: "riverbank-camp",
  //   images: ["/shillong-1.jpg", "/shillong-2.jpg", "/shillong-3.jpg"],
  //   price: 7500,
  //   originalPrice: 13000,
  //   rating: 4.4,
  //   reviewsCount: 50,
  //   description:
  //     "Relax beside the peaceful stream with a fully-equipped riverside camp, ideal for couples and families.",
  //   category: "Relaxation",
  //   tripDetails:
  //     "Day 1: Campfire and riverside dinner.\nDay 2: Fishing, swimming, and kayaking.\nDay 3: Chill morning and departure.",
  // },
  // {
  //   backgroundImage: "bg-bg-img-2",
  //   title: "Desert Mirage",
  //   subtitle: "Hidden Oasis",
  //   peopleJoined: "35+ Joined",
  //   slug: "desert-mirage",
  //   images: ["/shillong-1.jpg", "/shillong-2.jpg", "/shillong-3.jpg"],
  //   price: 10000,
  //   originalPrice: 16000,
  //   rating: 4.7,
  //   reviewsCount: 47,
  //   description:
  //     "A rare desert experience in Northeast India – camp in a dry riverbed oasis with golden sunsets and starlit skies.",
  //   category: "Unique",
  //   tripDetails:
  //     "Day 1: Arrival at the oasis and camp setup.\nDay 2: Camel trail and sand hiking.\nDay 3: Sunset photos and wrap-up.",
  // },
];
