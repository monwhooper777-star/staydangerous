"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const base =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium";

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-foreground/10 text-foreground",
  secondary: "border-transparent bg-muted text-muted-foreground",
  outline: "border-border text-foreground",
  destructive: "border-transparent bg-red-500/10 text-red-600 dark:text-red-400",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <div className={cn(base, variants[variant], className)} {...props} />;
}

export default Badge;
