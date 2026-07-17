export type AboutLink = { label: string; href: string };

// Seeded from your own boot-header bio. Personalize the paragraphs and focus
// list — these are a starting point, not fixed.
export const about = {
  role: "Developer — tooling, automation, systems",
  paragraphs: [
    "Building things I want to exist. Mostly dev tooling and automation.",
    "I like practical, self-contained tools with an honest, privacy-respecting bent — from county housing analytics to game-economy math — and I care about getting the numbers right and showing my work.",
  ],
  focus: [
    "Developer tooling & automation",
    "Data sourcing, verification & pipelines",
    "Honest, no-dark-pattern software",
    "Offline-first, no-build web apps",
  ],
  links: [
    { label: "github", href: "https://github.com/BubbaFireFox" },
    { label: "email", href: "mailto:kirkpatton3@gmail.com" },
  ] as AboutLink[],
};
