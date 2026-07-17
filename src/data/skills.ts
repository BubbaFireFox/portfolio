export type SkillGroup = {
  label: string;
  items: string[];
};

// Inferred from the projects on this site — edit freely to match how you'd
// describe yourself.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & UI",
    items: ["Next.js", "React", "React Native", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "PostGIS", "Geospatial pipelines", "REST APIs", "GitHub Pages"],
  },
  {
    label: "How I build",
    items: [
      "Single-file / no-build apps",
      "Offline-first",
      "Test-driven engines",
      "Automation & tooling",
      "Data sourcing & verification",
    ],
  },
];
