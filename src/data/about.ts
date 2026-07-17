export type AboutLink = { label: string; href: string };

export const about = {
  role: "Developer — tooling, automation, systems",
  education: "Computer Science senior @ UNC Charlotte · focus in Cybersecurity",
  paragraphs: [
    "I'm a college senior at UNC Charlotte studying Computer Science with a focus in Cybersecurity.",
    "My programming philosophy is simple: build the things I'd actually implement into my own life, or that solve a problem of mine. If it wouldn't earn a place in my day-to-day, I don't build it.",
  ],
  focus: [
    "Developer tooling & automation",
    "Cybersecurity",
    "Data sourcing, verification & pipelines",
    "Honest, no-dark-pattern software",
    "Offline-first, no-build web apps",
  ],
  links: [
    { label: "github", href: "https://github.com/BubbaFireFox" },
    { label: "email", href: "mailto:kirkpatton3@gmail.com" },
  ] as AboutLink[],
};
