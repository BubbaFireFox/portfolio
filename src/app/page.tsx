import Boot from "@/components/Boot";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <header className="mb-14 border border-[var(--line)] bg-[var(--panel)] p-6">
        <Boot />
      </header>

      <section className="fade-up">
        <h2 className="mb-5 text-sm text-[var(--fg)]">
          <span className="text-[var(--amber)]">kirkp@portfolio:~$</span>{" "}
          <span className="text-[var(--dim)]">ls -la ./projects</span>
        </h2>
        <div className="grid gap-3">
          {ordered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <footer className="mt-14 flex gap-5 text-sm">
        <a href="https://github.com/BubbaFireFox" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">github</a>
        <a href="mailto:kirkpatton3@gmail.com" className="text-[var(--green)] hover:underline">email</a>
      </footer>
    </main>
  );
}