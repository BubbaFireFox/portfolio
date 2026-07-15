import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-[var(--line)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--amber)]">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[var(--fg)]">
          <span className="text-[var(--dim)]">drwxr-xr-x </span>
          <span className="text-[var(--amber)] group-hover:underline">{project.name}/</span>
        </h3>
        {project.featured && (
          <span className="shrink-0 text-xs text-[var(--green)]">★ pinned</span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--fg)]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--dim)]">
        {project.tags.map((tag) => (
          <span key={tag}>#{tag.toLowerCase().replace(/\s+/g, "-")}</span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--green)] underline-offset-4 hover:underline">./source</a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--green)] underline-offset-4 hover:underline">./live</a>
        )}
      </div>
    </article>
  );
}