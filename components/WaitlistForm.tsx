"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  source?: string;            // e.g. "intro_v1_free_trial"
  onSuccess?: () => void;     // close modal, etc.
  placeholder?: string;
  buttonText?: string;
};

export function WaitlistForm({
  source = "intro_v1_free_trial",
  onSuccess,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
}: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: "Friend",
          consent: true,
          source,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({} as any));
        throw new Error((data as any).error || "Submission failed");
      }

      // 🎉 confetti (lazy import to keep bundle light & avoid TS type install)
      const { default: confetti } = await import("canvas-confetti");
      const rect = btnRef.current?.getBoundingClientRect();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: rect
          ? {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight,
            }
          : { y: 0.6 },
      });

      setOk("You're on the list!");
      setEmail("");
      onSuccess?.();
    } catch (e: any) {
      setErr(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      {/* Honeypot for basic spam prevention */}
      <input name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-1">
        <label className="text-sm">Email</label>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          autoComplete="email"
        />
      </div>

      <Button ref={btnRef} disabled={loading} type="submit" className="h-11">
        {loading ? "Submitting..." : buttonText}
      </Button>

      {ok && <p className="text-sm text-emerald-500">{ok}</p>}
      {err && <p className="text-sm text-red-500">{err}</p>}
    </form>
  );
}

/** Popup wrapper — now accepts either triggerText or custom children as the trigger */
export function WaitlistDialog({
  triggerText = "FREE Trial",
  source = "intro_v1_free_trial",
  children,
}: {
  triggerText?: string;
  source?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? children : <Button size="lg">{triggerText}</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <WaitlistForm source={source} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export default WaitlistForm;
