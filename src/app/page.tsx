import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-24">
      <header className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">Kirk</h1>
        <p className="mt-3 max-w-xl text-neutral-400">
          Developer tooling, automation systems, and whatever else I&apos;m curious about. Below is what I&apos;ve been building.
        </p>
        <nav className="mt-6 flex gap-5 text-sm text-neutral-400">
          <a href="https://github.com/BubbaFireFox" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-neutral-100 hover:underline">
            GitHub
          </a>
          <a href="mailto:kirkpatton3@gmail.com" className="underline-offset-4 hover:text-neutral-100 hover:underline">
            Email
          </a>
        </nav>
      </header>

      <section>
        <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-neutral-500">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {ordered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-neutral-900 pt-8 text-xs text-neutral-600">
        Built with Next.js. Deployed on Vercel.
      </footer>
    </main>
  );
}