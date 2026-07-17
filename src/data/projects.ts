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
    slug: "cigarvault",
    name: "CigarVault",
    description: "Cigar collection and humidor tracking app. React Native + Next.js monorepo, Postgres backend.",
    repoUrl: "https://github.com/YOURUSERNAME/cigarvault",
    tags: ["React Native", "Next.js", "Postgres"],
    featured: true,
  },
  // add the rest
];