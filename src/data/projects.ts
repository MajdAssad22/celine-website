import hygeia from "@/assets/hygeia.png";
import storyAndStoneBanner from "@/assets/story-and-stone/story-and-stone-banner.jpeg";
import storyAndStoneThumbnail from "@/assets/story-and-stone/story-and-stone-thumbnail.png";
import ventusphere from "@/assets/ventusphere.png";

export const projects = [
  {
    id: "1",
    slug: "stone-and-story",
    title: "Stone & Story",
    category: "Interior",
    points: ["Culture - History", "Conservation", "Archeology", "Community"],
    concepts: ["Community", "Daily Use", "Archeology"],
    thumbnail: storyAndStoneThumbnail,
    banner: storyAndStoneBanner,
  },
  {
    id: "2",
    slug: "hygeia",
    title: "Hygeia",
    category: "Interior",
    points: [
      "Futuristic design",
      "Modularity",
      "Emotional well-being",
      "Hygienic environment",
    ],
    thumbnail: hygeia,
  },
  {
    id: "3",
    slug: "ventusphere",
    title: "Ventusphere",
    category: "Interior",
    points: ["Natural ventilation", "Clients"],
    thumbnail: ventusphere,
  },
];
