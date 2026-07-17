export type Project = {
  slug: string;
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mecklenburg-housing-analyzer",
    name: "Mecklenburg Housing Analyzer",
    description:
      "Charlotte-Mecklenburg housing trends & owner-pattern analyzer: county parcel/deed ingestion, owner-identity resolution, and aggregate turnover forecasting behind a mask-by-default, aggregate-first privacy posture. Python/FastAPI/PostGIS pipeline + Next.js dashboard.",
    repoUrl: "https://github.com/BubbaFireFox/mecklenburg-housing-analyzer",
    tags: ["Python", "FastAPI", "PostGIS", "Next.js", "GeoSpatial"],
    featured: true,
  },
  {
    slug: "hypixel-rng-meter-planner",
    name: "Hypixel RNG Meter Planner",
    description:
      "Single-file, offline web app that does the RNG-meter math for Hypixel SkyBlock: enter the rare drops you want and it computes what to put your meter on, in what order, and which drops you'll collect by farming — minimizing total runs. Authoritative required-XP for all 484 drops across 23 sources, published base rates, an honest “is it even worth it?” verdict, and a vanilla-JS engine with inline unit tests. No build step, no dependencies, no server.",
    repoUrl: "https://github.com/BubbaFireFox/hypixel-rng-meter-planner",
    liveUrl: "https://bubbafirefox.github.io/hypixel-rng-meter-planner/",
    tags: ["Vanilla JS", "Single-file", "Offline-first", "Game Tools"],
    featured: true,
  },
  // add the rest
];