// lib/data/packages.ts

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
}

export const allPackages: CampProps[] = [
  {
    backgroundImage: "bg-bg-img-1",
    title: "Caravan Package",
    subtitle: "Meghalaya",
    peopleJoined: "50+ Joined",
    slug: "caravan-package",
    images: ["/packagesCaravan-10.JPEG","/packagesCaravan-1.JPEG", "/packagesCaravan-2.JPEG", "/packagesCaravan-4.JPEG", "/packagesCaravan-5.JPEG", "/packagesCaravan-9.JPEG", ],
    price: 18500,
    originalPrice: 20000,
    rating: 4.6,
    reviewsCount: 55,
    description:
      "Packages Caravan6days 5 nights = 18500 per person for 4 upto 6 pax per trip",
    category: "Camp",
    tripDetails:
      "Packages Caravan 6 days 5 nights = 18500 per person for 4 upto 6 pax per trip",
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
