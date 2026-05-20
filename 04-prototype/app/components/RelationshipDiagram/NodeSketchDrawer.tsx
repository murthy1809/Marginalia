"use client";

import { useEffect } from "react";
import {
  EDGE_META,
  type CharacterStatus,
  type GraphEdge,
  type GraphNode,
} from "@/lib/fixtures";

type Props = {
  open: boolean;
  node: GraphNode | null;
  status: CharacterStatus | null;
  edges: GraphEdge[];
  nodeLookup: Record<string, GraphNode>;
  onClose: () => void;
};

export default function NodeSketchDrawer({
  open,
  node,
  status,
  edges,
  nodeLookup,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !node) return null;

  const incidentEdges = edges.filter(
    (e) => e.from === node.id || e.to === node.id
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label={`Character: ${node.name}`}
        className="fixed top-0 right-0 h-screen w-[440px] max-w-[92vw] bg-[var(--color-surface)] border-l border-[var(--color-line-strong)] z-50 shadow-xl flex flex-col"
      >
        <div className="h-14 px-5 flex items-center gap-3 border-b border-[var(--color-line)]">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
            Character
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto h-8 w-8 rounded-md text-[var(--color-ink-faint)] hover:bg-[var(--color-line)] hover:text-[var(--color-ink)] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          <div>
            <h2 className="serif text-[28px] leading-tight font-semibold tracking-tight text-[var(--color-ink)]">
              {node.name}
            </h2>
          </div>

          <p className="text-[15px] leading-7 text-[var(--color-ink)]">
            {node.sketch}
          </p>

          {status && (
            <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-[13px] border-t border-[var(--color-line)] pt-4">
              <dt className="text-[var(--color-ink-faint)]">State</dt>
              <dd className="text-[var(--color-ink)]">{status.state}</dd>

              <dt className="text-[var(--color-ink-faint)]">Motivation</dt>
              <dd className="text-[var(--color-ink)]">{status.motivation}</dd>

              <dt className="text-[var(--color-ink-faint)]">Risk</dt>
              <dd className="text-[var(--color-ink)]">{status.risk}</dd>
            </dl>
          )}

          {incidentEdges.length > 0 && (
            <section className="border-t border-[var(--color-line)] pt-4">
              <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] mb-2">
                Connections
              </div>
              <ul className="space-y-2">
                {incidentEdges.map((edge, i) => {
                  const otherId = edge.from === node.id ? edge.to : edge.from;
                  const other = nodeLookup[otherId];
                  const meta = EDGE_META[edge.type];
                  return (
                    <li
                      key={`${edge.from}-${edge.to}-${edge.type}-${i}`}
                      className="text-[13px] leading-6"
                    >
                      <span
                        className="inline-block align-middle w-2.5 h-2.5 rounded-full mr-2"
                        style={{ background: meta.color }}
                        aria-hidden
                      />
                      <span className="text-[var(--color-ink)] font-medium">
                        {other?.name ?? otherId}
                      </span>
                      <span className="text-[var(--color-ink-faint)]">
                        {" "}
                        — {meta.label.toLowerCase()}
                      </span>
                      <div className="ml-[18px] text-[var(--color-ink-muted)]">
                        {edge.label}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>

        <div className="px-5 py-3 border-t border-[var(--color-line)] flex items-center">
          <span className="ml-auto text-[11px] text-[var(--color-ink-faint)]">
            Esc to close
          </span>
        </div>
      </aside>
    </>
  );
}
