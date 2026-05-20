"use client";

import { useMemo, useState } from "react";
import {
  EDGE_TYPES,
  type CharacterStatus,
  type EdgeType,
  type GraphEdge,
  type GraphNode,
} from "@/lib/fixtures";
import EdgeLegend from "./EdgeLegend";
import ForceGraph from "./ForceGraph";
import NodeSketchDrawer from "./NodeSketchDrawer";
import TabularFallback from "./TabularFallback";
import ViewToggle, { type View } from "./ViewToggle";

type Props = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  characterStatus: CharacterStatus[];
};

export default function RelationshipDiagram({
  nodes,
  edges,
  characterStatus,
}: Props) {
  const [view, setView] = useState<View>("graph");
  const [visibleTypes, setVisibleTypes] = useState<Set<EdgeType>>(
    () => new Set(EDGE_TYPES)
  );
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  const nodeLookup = useMemo(() => {
    const m: Record<string, GraphNode> = {};
    for (const n of nodes) m[n.id] = n;
    return m;
  }, [nodes]);

  const statusByName = useMemo(() => {
    const m: Record<string, CharacterStatus> = {};
    for (const s of characterStatus) {
      m[normalize(s.name)] = s;
    }
    return m;
  }, [characterStatus]);

  function toggleType(t: EdgeType) {
    setVisibleTypes((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  function statusForNode(node: GraphNode): CharacterStatus | null {
    const direct = statusByName[normalize(node.name)];
    if (direct) return direct;
    // Allow shared status entries like "Oromis & Glaedr".
    for (const s of characterStatus) {
      if (s.name.toLowerCase().includes(node.name.toLowerCase())) return s;
    }
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <EdgeLegend visibleTypes={visibleTypes} onToggle={toggleType} />
        <ViewToggle view={view} onChange={setView} />
      </div>

      {view === "graph" ? (
        <ForceGraph
          nodes={nodes}
          edges={edges}
          visibleTypes={visibleTypes}
          onSelectNode={setSelectedNode}
        />
      ) : (
        <TabularFallback
          nodes={nodes}
          edges={edges}
          visibleTypes={visibleTypes}
          onSelectNode={setSelectedNode}
        />
      )}

      <p className="text-[12px] text-[var(--color-ink-faint)]">
        Click a name to open its spoiler-safe sketch · click an edge type above
        to filter
      </p>

      <NodeSketchDrawer
        open={!!selectedNode}
        node={selectedNode}
        status={selectedNode ? statusForNode(selectedNode) : null}
        edges={edges}
        nodeLookup={nodeLookup}
        onClose={() => setSelectedNode(null)}
      />
    </section>
  );
}

function normalize(s: string): string {
  return s.trim().toLowerCase();
}
