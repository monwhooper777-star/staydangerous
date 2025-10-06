"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
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
    setLoading(true); setOk(null); setErr(null);

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      // confetti pop
      const rect = btnRef.current?.getBoundingClientRect();
      if (rect) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
        });
      }

      setOk("You're on the list!"); setEmail("");
      onSuccess?.();
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input name="hp" className="hidden" />
      <div className="grid gap-1">
        <label className="text-sm">Email</label>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
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

/** Optional: popup wrapper for your Intro V1 button */
export function WaitlistDialog({
  triggerText = "FREE Trial",
  source = "intro_v1_free_trial",
}: { triggerText?: string; source?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <WaitlistForm source={source} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export default WaitlistForm;
