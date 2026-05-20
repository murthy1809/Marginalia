"use client";

import { useEffect, useState } from "react";

type Props = {
  recapSlug: string;
  questions: string[];
};

const STORAGE_PREFIX = "marginalia.readyChecklist.v1.";

export default function OpenQuestions({ recapSlug, questions }: Props) {
  const storageKey = STORAGE_PREFIX + recapSlug;
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      const url = new URL(window.location.href);
      const fresh = url.searchParams.get("fresh");
      if (fresh === "1") {
        window.localStorage.removeItem(storageKey);
        setChecked({});
        setHydrated(true);
        return;
      }
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw) as Record<string, boolean>;
          const next: Record<number, boolean> = {};
          for (const [k, v] of Object.entries(parsed)) {
            next[Number(k)] = !!v;
          }
          setChecked(next);
        }
      } catch {
        // Local storage is optional in the demo.
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [storageKey]);

  function toggle(i: number) {
    setChecked((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Local storage is optional in the demo.
      }
      return next;
    });
  }

  return (
    <section>
      <header className="mb-4">
        <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
          Ready-to-watch checklist
        </h2>
        <p className="text-[13px] text-[var(--color-ink-muted)] mt-1">
          Check off the story questions you can now hold in your head before
          pressing play.
        </p>
      </header>
      <ul className="space-y-2">
        {questions.map((q, i) => {
          const isChecked = !!checked[i];
          return (
            <li key={i}>
              <label
                className="flex gap-3 items-start cursor-pointer group"
                aria-checked={isChecked}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  disabled={!hydrated}
                  className="mt-1 h-4 w-4 accent-[var(--color-accent)] rounded border-[var(--color-line-strong)]"
                />
                <span
                  className={`text-[15px] leading-7 ${
                    isChecked
                      ? "text-[var(--color-ink-faint)] line-through"
                      : "text-[var(--color-ink)]"
                  }`}
                >
                  {q}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
