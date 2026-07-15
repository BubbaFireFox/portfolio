"use client";

import { useEffect, useState } from "react";

const LINES = [
  "kirkp@portfolio:~$ whoami",
  "developer — tooling, automation, systems",
  "kirkp@portfolio:~$ cat about.txt",
  "Building things I want to exist. Mostly dev tooling and automation.",
];

export default function Boot() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(LINES.length);
      setDone(true);
      return;
    }
    const id = setInterval(() => {
      setCount((c) => {
        const next = c + 1;
        if (next >= LINES.length) {
          clearInterval(id);
          setDone(true);
        }
        return next;
      });
    }, 450);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {LINES.slice(0, count).map((line, idx) => {
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