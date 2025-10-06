"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarBadge() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center space-x-1.5 rounded-full border border-border bg-background/50 px-3 py-1 shadow-sm backdrop-blur-sm">
        <div className="flex -space-x-2">
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage
              src="jhen.png"
              alt="Jhene Aiko"
            />
            <AvatarFallback>AH</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage
              src="/big.png"
              alt="Big Sean"
            />
            <AvatarFallback>TR</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage
              src="/mojka.png"
              alt="Mojka"
            />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage
              src="/tom.png"
              alt="Tom Brady"
            />
            <AvatarFallback>GC</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage
              src="step.png"
              alt="Steph Curry"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        <p className="ml-2 text-xs text-muted-foreground">
          Trusted by{" "}
          <span className="font-semibold text-foreground">
            experts &amp; notable figures
          </span>
        </p>
      </div>
    </div>
  );
}
