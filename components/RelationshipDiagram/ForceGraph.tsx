"use client";

import { useMemo, useState } from "react";
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

const VIEW_W = 800;
const VIEW_H = 500;

type RenderedEdge = GraphEdge & {
  curveOffset: number; // perpendicular pixel offset; 0 = straight line
  index: number;
};

/**
 * Rendered edges, with parallel-edge offsets resolved for any pair that has
 * more than one edge between the same two nodes (e.g. Eragon ↔ Murtagh which
 * carries both `kin` and `enemy`).
 */
function withCurveOffsets(edges: GraphEdge[]): RenderedEdge[] {
  const grouped = new Map<string, GraphEdge[]>();
  for (const e of edges) {
    const key = [e.from, e.to].sort().join("|");
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(e);
  }
  const out: RenderedEdge[] = [];
  for (const group of grouped.values()) {
    if (group.length === 1) {
      out.push({ ...group[0], curveOffset: 0, index: 0 });
      continue;
    }
    // Distribute offsets symmetrically: e.g. 2 edges → -22, +22; 3 edges → -28, 0, +28
    const step = 22;
    const start = -((group.length - 1) * step) / 2;
    group.forEach((edge, i) => {
      out.push({ ...edge, curveOffset: start + i * step, index: i });
    });
  }
  return out;
}

export default function ForceGraph({
  nodes,
  edges,
  visibleTypes,
  onSelectNode,
}: Props) {
  const [hoveredEdgeKey, setHoveredEdgeKey] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodeMap = useMemo(() => {
    const m: Record<string, GraphNode> = {};
    for (const n of nodes) m[n.id] = n;
    return m;
  }, [nodes]);

  const renderedEdges = useMemo(() => withCurveOffsets(edges), [edges]);

  function edgeKey(e: RenderedEdge) {
    return `${e.from}-${e.to}-${e.type}-${e.index}`;
  }

  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto block"
        role="img"
        aria-label="Relationship diagram"
      >
        {/* edges (under nodes) */}
        <g>
          {renderedEdges.map((edge) => {
            const a = nodeMap[edge.from];
            const b = nodeMap[edge.to];
            if (!a || !b) return null;
            const visible = visibleTypes.has(edge.type);
            const meta = EDGE_META[edge.type];
            const key = edgeKey(edge);
            const hovered = hoveredEdgeKey === key;

            // Midpoint and perpendicular for label + curve control point
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            const px = -dy / len; // perpendicular unit vector
            const py = dx / len;

            const cx = mx + px * edge.curveOffset;
            const cy = my + py * edge.curveOffset;
            const labelX = mx + px * (edge.curveOffset * 1.5 + 14);
            const labelY = my + py * (edge.curveOffset * 1.5 + 14);

            const d =
              edge.curveOffset === 0
                ? `M ${a.x} ${a.y} L ${b.x} ${b.y}`
                : `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;

            return (
              <g
                key={key}
                opacity={visible ? 1 : 0.08}
                onMouseEnter={() => setHoveredEdgeKey(key)}
                onMouseLeave={() => setHoveredEdgeKey((k) => (k === key ? null : k))}
                style={{ pointerEvents: visible ? "auto" : "none" }}
              >
                {/* invisible wide hit-target */}
                <path
                  d={d}
                  stroke="transparent"
                  strokeWidth={16}
                  fill="none"
                />
                <path
                  d={d}
                  stroke={meta.color}
                  strokeWidth={hovered ? 3 : 2}
                  fill="none"
                  strokeLinecap="round"
                />
                {hovered && (
                  <g pointerEvents="none">
                    <rect
                      x={labelX - estimateTextWidth(edge.label) / 2 - 8}
                      y={labelY - 11}
                      width={estimateTextWidth(edge.label) + 16}
                      height={22}
                      rx={4}
                      fill="var(--color-surface)"
                      stroke="var(--color-line-strong)"
                      strokeWidth={1}
                    />
                    <text
                      x={labelX}
                      y={labelY + 4}
                      textAnchor="middle"
                      fontSize={11}
                      fill="var(--color-ink)"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* nodes (over edges) */}
        <g>
          {nodes.map((n) => {
            const isHovered = hoveredNode === n.id;
            return (
              <g
                key={n.id}
                transform={`translate(${n.x}, ${n.y})`}
                onMouseEnter={() => setHoveredNode(n.id)}
                onMouseLeave={() =>
                  setHoveredNode((s) => (s === n.id ? null : s))
                }
                onClick={() => onSelectNode(n)}
                style={{ cursor: "pointer" }}
                role="button"
                aria-label={`Open ${n.name}`}
              >
                <circle
                  r={isHovered ? 10 : 8}
                  fill="var(--color-surface)"
                  stroke="var(--color-ink)"
                  strokeWidth={isHovered ? 2.5 : 2}
                />
                {/* label background for legibility on the parchment bg */}
                <rect
                  x={-estimateTextWidth(n.name) / 2 - 6}
                  y={14}
                  width={estimateTextWidth(n.name) + 12}
                  height={20}
                  rx={4}
                  fill="var(--color-surface)"
                  fillOpacity={0.92}
                />
                <text
                  y={29}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={isHovered ? 600 : 500}
                  fill="var(--color-ink)"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {n.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

// Rough character-width estimate for inline label backgrounds; SVG has no
// metrics until render, so we estimate with ~6.5px per character at fontSize 11–13.
function estimateTextWidth(text: string): number {
  return Math.max(20, text.length * 6.5);
}
