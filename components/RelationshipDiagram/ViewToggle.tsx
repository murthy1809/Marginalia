"use client";

type View = "graph" | "table";

type Props = {
  view: View;
  onChange: (v: View) => void;
};

export default function ViewToggle({ view, onChange }: Props) {
  const base =
    "px-3 py-1.5 text-[12px] font-medium transition-colors";
  return (
    <div
      className="inline-flex items-center rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] overflow-hidden"
      role="group"
      aria-label="Diagram view"
    >
      <button
        type="button"
        onClick={() => onChange("graph")}
        className={`${base} ${
          view === "graph"
            ? "bg-[var(--color-ink)] text-[var(--color-surface)]"
            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        }`}
      >
        Diagram
      </button>
      <button
        type="button"
        onClick={() => onChange("table")}
        className={`${base} border-l border-[var(--color-line-strong)] ${
          view === "table"
            ? "bg-[var(--color-ink)] text-[var(--color-surface)]"
            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        }`}
      >
        Table
      </button>
    </div>
  );
}

export type { View };
