"use client";

import { EDGE_META, EDGE_TYPES, type EdgeType } from "@/lib/fixtures";

type Props = {
  visibleTypes: Set<EdgeType>;
  onToggle: (type: EdgeType) => void;
};

export default function EdgeLegend({ visibleTypes, onToggle }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] mr-1">
        Edge types
      </span>
      {EDGE_TYPES.map((type) => {
        const meta = EDGE_META[type];
        const active = visibleTypes.has(type);
        return (
          <button
            key={type}
            type="button"
            onClick={() => onToggle(type)}
            title={`${meta.description} — click to ${
              active ? "hide" : "show"
            }`}
            aria-pressed={active}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] transition-opacity ${
              active
                ? "border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-ink)]"
                : "border-[var(--color-line)] bg-transparent text-[var(--color-ink-faint)] line-through"
            }`}
          >
            <span
              aria-hidden
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: meta.color }}
            />
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}
