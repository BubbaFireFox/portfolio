"use client";

import { useEffect, useState } from "react";

const LINES = [
  "kirkp@portfolio:~$ whoami",
  "developer — tooling, automation, systems",
  "kirkp@portfolio:~$ cat about.txt",
  "Building things I want to exist. Mostly dev tooling and automation.",
];

export default function Boot() {
  const [shown, setShown] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(LINES);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, LINES[i]]);
      i += 1;
      if (i >= LINES.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 450);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {shown.map((line, idx) => {
        const isPrompt = line.startsWith("kirkp@");
        return (
          <p key={idx} className={isPrompt ? "text-[var(--amber)]" : "text-[var(--fg)]"}>
            {line}
          </p>
        );
      })}
      {done && (
        <p className="text-[var(--amber)]">
          kirkp@portfolio:~$ <span className="blink">▋</span>
        </p>
      )}
    </div>
  );
}