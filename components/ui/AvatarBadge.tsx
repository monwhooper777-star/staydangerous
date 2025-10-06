"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarBadge() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center space-x-1.5 rounded-full border border-border bg-background/50 px-3 py-1 shadow-sm backdrop-blur-sm">
        <div className="flex -space-x-2">
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Andrew Huberman" />
            <AvatarFallback>AH</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage src="https://randomuser.me/api/portraits/men/48.jpg" alt="Tony Robbins" />
            <AvatarFallback>TR</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Rhonda Patrick" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage src="https://randomuser.me/api/portraits/men/36.jpg" alt="Grant Cardone" />
            <AvatarFallback>GC</AvatarFallback>
          </Avatar>
          <Avatar className="h-6 w-6 ring-2 ring-background">
            <AvatarImage src="https://randomuser.me/api/portraits/men/59.jpg" alt="Dr. Joe Dispenza" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <p className="ml-2 text-xs text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">experts & educators</span>
        </p>
      </div>
    </div>
  );
}
