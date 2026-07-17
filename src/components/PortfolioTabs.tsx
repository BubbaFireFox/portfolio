"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { about } from "@/data/about";

type TabId = "skills" | "projects" | "about";

const TABS: { id: TabId; label: string; cmd: string }[] = [
  { id: "skills", label: "skills", cmd: "cat skills.txt" },
  { id: "projects", label: "projects", cmd: "ls -la ./projects" },
  { id: "about", label: "about", cmd: "cat about.md" },
];

const tagify = (s: string) => "#" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function PortfolioTabs() {
  const [tab, setTab] = useState<TabId>("projects");
  const active = TABS.find((t) => t.id === tab)!;
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

  return (
    <section>
      <nav role="tablist" aria-label="Sections" className="mb-5 flex gap-1 border-b border-[var(--line)]">
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setTab(t.id)}
              className={
                "-mb-px border-b-2 px-3 py-2 text-sm transition-colors " +
                (on
                  ? "border-[var(--amber)] text-[var(--amber)]"
                  : "border-transparent text-[var(--dim)] hover:text-[var(--fg)]")
              }
            >
              ./{t.label}
            </button>
          );
        })}
      </nav>

      <h2 className="mb-5 text-sm">
        <span className="text-[var(--amber)]">kirkp@portfolio:~$</span>{" "}
        <span className="text-[var(--dim)]">{active.cmd}</span>
      </h2>

      <div key={tab} role="tabpanel" className="fade-up">
        {tab === "projects" && (
          <div className="grid gap-3">
            {ordered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {tab === "skills" && (
          <div className="grid gap-3">
            {skillGroups.map((group) => (
              <article key={group.label} className="border border-[var(--line)] bg-[var(--panel)] p-5">
                <h3 className="text-sm text-[var(--amber)]">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--dim)]">
                  {group.items.map((item) => (
                    <span key={item}>{tagify(item)}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "about" && (
          <article className="border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="text-sm text-[var(--amber)]">{about.role}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mt-3 text-sm leading-relaxed text-[var(--fg)]">
                {p}
              </p>
            ))}
            <h3 className="mt-6 text-xs text-[var(--dim)]">focus</h3>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--dim)]">
              {about.focus.map((f) => (
                <span key={f}>{tagify(f)}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              {about.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--green)] underline-offset-4 hover:underline"
                >
                  ./{l.label}
                </a>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
