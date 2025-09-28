// components/ErrorBoundary.tsx
"use client";
import React from "react";

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; msg?: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err: any) {
    return { hasError: true, msg: String(err?.message ?? err) };
  }
  componentDidCatch(err: any, info: any) {
    console.error("Client error:", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-md border border-white/20 bg-black/70 p-4 text-sm text-white">
          <p className="font-medium">Something went wrong rendering this section.</p>
          <pre className="mt-2 max-w-full overflow-auto whitespace-pre-wrap opacity-70">
            {this.state.msg}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
