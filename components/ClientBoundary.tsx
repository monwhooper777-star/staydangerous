// components/ClientBoundary.tsx
"use client";
import React from "react";

export default class ClientBoundary extends React.Component<
  { children: React.ReactNode },
  { error: any }
> {
  state = { error: null as any };

  static getDerivedStateFromError(error: any) {
    return { error };
  }
  componentDidCatch(error: any, info: any) {
    console.error("Client boundary:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <pre className="m-4 rounded-md border border-red-500/30 bg-red-950/20 p-3 text-xs text-red-300 overflow-auto">
{String(this.state.error)}
        </pre>
      );
    }
    return this.props.children;
  }
}
