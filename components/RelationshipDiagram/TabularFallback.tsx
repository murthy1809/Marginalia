"use client";

import {
  EDGE_META,
  type EdgeType,
  type GraphEdge,
  type GraphNode,
} from "@/lib/fixtures";

type Props = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  visibleTypes: Set<EdgeType>;
  onSelectNode: (node: GraphNode) => void;
};

export default function TabularFallback({
  nodes,
  edges,
  visibleTypes,
  onSelectNode,
}: Props) {
  const lookup: Record<string, GraphNode> = {};
  for (const n of nodes) lookup[n.id] = n;

  const visible = edges.filter((e) => visibleTypes.has(e.type));

  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] border-b border-[var(--color-line)]">
            <th className="px-4 py-2.5 font-medium">From</th>
            <th className="px-4 py-2.5 font-medium w-[110px]">Type</th>
            <th className="px-4 py-2.5 font-medium">To</th>
            <th className="px-4 py-2.5 font-medium">Basis</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((edge, i) => {
            const meta = EDGE_META[edge.type];
            const a = lookup[edge.from];
            const b = lookup[edge.to];
            return (
              <tr
                key={`${edge.from}-${edge.to}-${edge.type}-${i}`}
                className="border-b border-[var(--color-line)] last:border-b-0 hover:bg-[var(--color-bg)]"
              >
                <td className="px-4 py-2.5">
                  <button
                    type="button"
                    onClick={() => a && onSelectNode(a)}
                    className="text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:underline underline-offset-2"
                  >
                    {a?.name ?? edge.from}
                  </button>
                </td>
                <td className="px-4 py-2.5">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden
                      className="w-2 h-2 rounded-full"
                      style={{ background: meta.color }}
                    />
                    <span className="text-[var(--color-ink-muted)]">
                      {meta.label.toLowerCase()}
                    </span>
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <button
                    type="button"
                    onClick={() => b && onSelectNode(b)}
                    className="text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:underline underline-offset-2"
                  >
                    {b?.name ?? edge.to}
                  </button>
                </td>
                <td className="px-4 py-2.5 text-[var(--color-ink-muted)]">
                  {edge.label}
                </td>
              </tr>
            );
          })}
          {visible.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="px-4 py-6 text-center text-[var(--color-ink-faint)]"
              >
                No relationships in the current filter — re-enable an edge type
                in the legend above.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
