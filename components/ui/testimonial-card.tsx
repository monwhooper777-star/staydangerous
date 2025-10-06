// components/ui/testimonial-card.tsx
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialAuthor {
  name: string;
  handle?: string;
  image?: string;
  role?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const initials =
    author.name.split(" ").map(p => p[0]).slice(0,2).join("").toUpperCase();

  const body = (
    <Card className={cn("w-[280px] sm:w-[360px] rounded-xl bg-card/60 border-border/50", className)}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          {author.image ? (
            <Image src={author.image} alt={author.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          ) : (
            <div className="h-10 w-10 rounded-full bg-muted grid place-items-center text-xs font-semibold">
              {initials}
            </div>
          )}
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{author.name}</div>
            {(author.handle || author.role) && (
              <div className="truncate text-xs text-muted-foreground">
                {author.handle}{author.handle && author.role ? " • " : ""}{author.role}
              </div>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );

  return href ? <Link href={href} className="shrink-0">{body}</Link> : <div className="shrink-0">{body}</div>;
}
