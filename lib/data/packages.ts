// lib/data/packages.ts
export interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  slug: string;
  images: string[];
}

export const allPackages: CampProps[] = [
  {
    backgroundImage: "bg-bg-img-1",
    title: "Dawki Camp",
    subtitle: "Shillong, India",
    peopleJoined: "50+ Joined",
    slug: "putuk-truno-camp",
    images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Syntung Falls",
    subtitle: "Somewhere in the Wilderness",
    peopleJoined: "30+ Joined",
    slug: "mountain-view-camp",
      images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Nohkalikai Falls",
    subtitle: "Above the Clouds",
    peopleJoined: "20+ Joined",
    slug: "hilltop-escape",
      images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Jungle Retreat",
    subtitle: "Deep in the Forest",
    peopleJoined: "40+ Joined",
    slug: "jungle-retreat",
      images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Riverbank Camp",
    subtitle: "Next to the Stream",
    peopleJoined: "60+ Joined",
    slug: "riverbank-camp",
      images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
  {
    backgroundImage: "bg-bg-img-2",
    title: "Desert Mirage",
    subtitle: "Hidden Oasis",
    peopleJoined: "35+ Joined",
    slug: "desert-mirage",
      images: [
    "/shillong-1.jpg",
    "/shillong-2.jpg",
    "/shillong-3.jpg",
    ],
  },
];
