// Hygeia import
import hygeia from "@/assets/hygeia/hygeia-thumbnail.png";

// Store & Story imports
import storyAndStoneThumbnail from "@/assets/story-and-stone/story-and-stone-thumbnail.png";
import storyAndStoneRender1 from "@/assets/story-and-stone/renders/story-and-stone-render-1.jpeg";
import storyAndStoneRender2 from "@/assets/story-and-stone/renders/story-and-stone-render-2.jpeg";
import storyAndStoneRender3 from "@/assets/story-and-stone/renders/story-and-stone-render-3.jpeg";
import storyAndStoneRender4 from "@/assets/story-and-stone/renders/story-and-stone-render-4.jpeg";
import storyAndStoneMaterial1 from "@/assets/story-and-stone/materials/story-and-stone-material-1.png";
import storyAndStoneMaterial2 from "@/assets/story-and-stone/materials/story-and-stone-material-2.png";
import storyAndStoneMaterial3 from "@/assets/story-and-stone/materials/story-and-stone-material-3.png";
import storyAndStoneMaterial4 from "@/assets/story-and-stone/materials/story-and-stone-material-4.png";
import storyAndStoneDesign1 from "@/assets/story-and-stone/designs/story-and-stone-design-1.jpeg";
import storyAndStoneDesign2 from "@/assets/story-and-stone/designs/story-and-stone-design-2.jpeg";
import storyAndStoneDesign3 from "@/assets/story-and-stone/designs/story-and-stone-design-3.jpeg";
import storyAndStoneDesign4 from "@/assets/story-and-stone/designs/story-and-stone-design-4.jpeg";
import storyAndStoneDesign5 from "@/assets/story-and-stone/designs/story-and-stone-design-5.jpeg";
import storyAndStoneDesign6 from "@/assets/story-and-stone/designs/story-and-stone-design-6.jpeg";
import storyAndStoneDesign7 from "@/assets/story-and-stone/designs/story-and-stone-design-7.jpeg";
import storyAndStoneDesign8 from "@/assets/story-and-stone/designs/story-and-stone-design-8.jpeg";
import storyAndStoneDesign9 from "@/assets/story-and-stone/designs/story-and-stone-design-9.jpeg";
import storyAndStoneDesign10 from "@/assets/story-and-stone/designs/story-and-stone-design-10.jpeg";
import storyAndStoneDesign11 from "@/assets/story-and-stone/designs/story-and-stone-design-11.jpeg";
import storyAndStoneDesign12 from "@/assets/story-and-stone/designs/story-and-stone-design-12.jpeg";
import storyAndStoneDesign13 from "@/assets/story-and-stone/designs/story-and-stone-design-13.jpeg";
import storyAndStoneDesign14 from "@/assets/story-and-stone/designs/story-and-stone-design-14.jpeg";
import storyAndStoneDesign15 from "@/assets/story-and-stone/designs/story-and-stone-design-15.jpeg";
import storyAndStoneDesign16 from "@/assets/story-and-stone/designs/story-and-stone-design-16.jpeg";
import storyAndStoneDesign17 from "@/assets/story-and-stone/designs/story-and-stone-design-17.jpeg";
import storyAndStoneDesign18 from "@/assets/story-and-stone/designs/story-and-stone-design-18.jpeg";

// Ventusphere import
import ventusphereThumbnail from "@/assets/ventusphere/ventusphere-thumbnail.png";
import ventusphereBanner from "@/assets/ventusphere/ventusphere-banner.jpeg";
import ventusphereReneder1 from "@/assets/ventusphere/renders/ventusphere-render-1.png";

export const projects = [
  {
    id: "1",
    slug: "stone-and-story",
    title: "Stone & Story",
    category: "Interior",
    awardWinning: false,
    points: ["Culture - History", "Conservation", "Archeology", "Community"],
    concepts: [
      "Community",
      "Daily Use",
      "Archeology",
      "Cultural Center",
      "Heritage",
    ],
    thumbnail: storyAndStoneThumbnail,
    banner: storyAndStoneRender1,
    renders: [
      storyAndStoneRender1,
      storyAndStoneRender2,
      storyAndStoneRender3,
      storyAndStoneRender4,
    ],
    materials: [
      storyAndStoneMaterial1,
      storyAndStoneMaterial2,
      storyAndStoneMaterial3,
      storyAndStoneMaterial4,
    ],
    designs: [
      storyAndStoneDesign1,
      storyAndStoneDesign2,
      storyAndStoneDesign3,
      storyAndStoneDesign4,
      storyAndStoneDesign5,
      storyAndStoneDesign6,
      storyAndStoneDesign7,
      storyAndStoneDesign8,
      storyAndStoneDesign9,
      storyAndStoneDesign10,
      storyAndStoneDesign11,
      storyAndStoneDesign12,
      storyAndStoneDesign13,
      storyAndStoneDesign14,
      storyAndStoneDesign15,
      storyAndStoneDesign16,
      storyAndStoneDesign17,
      storyAndStoneDesign18,
    ],
  },
  {
    id: "2",
    slug: "hygeia",
    title: "Hygeia",
    category: "Interior",
    awardWinning: true,
    points: [
      "Futuristic design",
      "Modularity",
      "Emotional well-being",
      "Hygienic environment",
    ],
    concepts: [
      "Community",
      "Daily Use",
      "Archeology",
      "Cultural Center",
      "Heritage",
    ],
    thumbnail: hygeia,
  },
  {
    id: "3",
    slug: "ventusphere",
    title: "Ventusphere",
    category: "Interior",
    awardWinning: false,
    points: ["Natural ventilation", "Raw materials", "Client focused"],
    concepts: ["Natural ventilation", "Raw materials", "Client focused"],
    thumbnail: ventusphereThumbnail,
    banner: ventusphereBanner,
  },
];
