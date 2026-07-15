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
    slug: "cigarvault",
    name: "CigarVault",
    description: "Cigar collection and humidor tracking app. React Native + Next.js monorepo, Postgres backend.",
    repoUrl: "https://github.com/YOURUSERNAME/cigarvault",
    tags: ["React Native", "Next.js", "Postgres"],
    featured: true,
  },
  // add the rest
];