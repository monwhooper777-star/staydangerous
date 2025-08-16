// components/landing/client-section.tsx
"use client";

import RadialOrbitalTimeline from "@/components/radial-orbit";
import { Calendar, Code, FileText, User, Clock, Zap } from "lucide-react";

const timelineData = [
  { id: 1, title: "Planning",    date: "Jan 2024",  content: "", category: "Planning", icon: Calendar, relatedIds: [2], status: "completed",  energy: 100 },
  { id: 2, title: "Design",      date: "Feb 2024",  content: "", category: "Design",   icon: FileText, relatedIds: [3], status: "in-progress", energy: 80  },
  { id: 3, title: "Development", date: "Mar 2024",  content: "", category: "Build",    icon: Code,     relatedIds: [4], status: "pending",     energy: 60  },
  { id: 4, title: "Testing",     date: "Apr 2024",  content: "", category: "QA",       icon: User,     relatedIds: [5], status: "pending",     energy: 50  },
  { id: 5, title: "Release",     date: "May 2024",  content: "", category: "Ship",     icon: Zap,      relatedIds: [],  status: "pending",     energy: 40  },
];

export default function ClientSection() {
  return (
    <section id="clients" className="py-16">
      <div className="container mx-auto">
        <RadialOrbitalTimeline
          timelineData={timelineData}
          centerSrc="/Kenneth.png"   // image in /public
          centerAlt="Monwhooper"
          centerSize={120}
        />
      </div>
    </section>
  );
}
