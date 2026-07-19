export const blogCategories = [
  "Solar Design",
  "Electrical Engineering",
  "Structural Engineering",
  "PVsyst & Software",
  "Regulations & Compliance",
  "Project Case Studies",
  "Industry Updates",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  date: string;
  readingTime: string;
  image: string;
};

/** Update this array to add or edit blog articles. */
export const blogArticles: BlogArticle[] = [
  {
    slug: "dc-ac-ratio-selection",
    title: "How to Select the Correct DC/AC Ratio for Solar Projects",
    summary:
      "A practical overview of DC/AC ratio selection for rooftop and ground-mount plants, balancing inverter loading, clipping risk and annual energy yield.",
    category: "Solar Design",
    date: "2026-03-12",
    readingTime: "6 min read",
    image: "/assets/hero/hero-01.jpg",
  },
  {
    slug: "voltage-drop-solar-cables",
    title: "Understanding Voltage Drop in Solar AC and DC Cables",
    summary:
      "Key principles for estimating voltage drop in DC string cables and AC feeders, and why cable sizing decisions affect plant performance and losses.",
    category: "Electrical Engineering",
    date: "2026-02-28",
    readingTime: "7 min read",
    image: "/assets/hero/hero-04.jpg",
  },
  {
    slug: "tilt-pitch-optimization-ground-mount",
    title: "Tilt and Pitch Optimization for Ground-Mount Solar Plants",
    summary:
      "How tilt angle and inter-row pitch influence irradiance capture, shading, land use and constructability in utility-scale layouts.",
    category: "Solar Design",
    date: "2026-02-10",
    readingTime: "8 min read",
    image: "/assets/hero/hero-02.jpg",
  },
  {
    slug: "inverter-capacity-underperformance",
    title: "Why a Solar Plant May Not Reach Full Inverter Capacity",
    summary:
      "Common engineering and site factors that limit AC output, including DC/AC ratio, temperature derating, soiling, shading and grid constraints.",
    category: "PVsyst & Software",
    date: "2026-01-22",
    readingTime: "5 min read",
    image: "/assets/hero/hero-06.jpg",
  },
  {
    slug: "almm-dcr-module-compliance",
    title: "ALMM, DCR and Module Compliance Explained",
    summary:
      "A clear summary of ALMM and DCR considerations for Indian solar projects, and what engineering teams should verify during procurement planning.",
    category: "Regulations & Compliance",
    date: "2026-01-08",
    readingTime: "6 min read",
    image: "/assets/hero/hero-03.jpg",
  },
  {
    slug: "common-rooftop-engineering-mistakes",
    title: "Common Engineering Mistakes in Rooftop Solar Projects",
    summary:
      "Frequent design and coordination issues in C&I rooftop projects—from walkways and setbacks to cable routing, MMS assumptions and installation access.",
    category: "Project Case Studies",
    date: "2025-12-18",
    readingTime: "7 min read",
    image: "/assets/hero/hero-05.jpg",
  },
];
