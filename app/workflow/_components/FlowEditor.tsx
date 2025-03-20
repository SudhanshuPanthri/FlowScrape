"use client";

import { Workflow } from "@prisma/client";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from "react";

const FlowEditor = ({ workflow }: { workflow: Workflow }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onNodesChange = (changes: any) => {
    setNodes((nds: any) => changes(nds));
  };

  const onEdgesChange = (changes: any) => {
    setEdges((eds: any) => changes(eds));
  };

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls position="top-left" />
      </ReactFlow>
      <h1>hello</h1>
    </main>
  );
};

export default FlowEditor;
