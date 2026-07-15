import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-neutral-600">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium text-neutral-100">{project.name}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded bg-neutral-900 px-2 py-1 text-xs text-neutral-500">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4 text-sm">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline-offset-4 hover:text-neutral-100 hover:underline">
          Source
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline-offset-4 hover:text-neutral-100 hover:underline">
            Live
          </a>
        )}
      </div>
    </article>
  );
}