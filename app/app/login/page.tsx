"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ME } from "@/lib/fixtures";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const t = window.setTimeout(() => {
      router.replace("/app/bookshelf");
    }, 700);
    return () => window.clearTimeout(t);
  }, [router]);

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] text-white flex items-center justify-center text-[12px] font-semibold serif">
              M
            </div>
            <span className="serif text-[18px] font-semibold tracking-tight text-[var(--color-ink)]">
              Marginalia
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_24px_48px_-32px_rgba(23,24,28,0.28)]">
          <h1 className="serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
            Continue as Murthy
          </h1>
          <p className="mt-1 text-[13px] text-[var(--color-ink-muted)]">
            Demo mode - auto-signing you in as {ME.name}. Your watchlist is
            pre-seeded with The Boys and a few long-series follow-ups.
          </p>

          <div className="mt-5 space-y-2">
            <button
              type="button"
              disabled
              title="Demo mode - not wired up"
              className="w-full text-[13px] bg-[var(--color-bg)] text-[var(--color-ink-faint)] border border-[var(--color-line)] rounded-md px-3 py-2.5 cursor-not-allowed"
            >
              Continue with Google
            </button>
            <button
              type="button"
              disabled
              title="Demo mode - not wired up"
              className="w-full text-[13px] bg-[var(--color-bg)] text-[var(--color-ink-faint)] border border-[var(--color-line)] rounded-md px-3 py-2.5 cursor-not-allowed"
            >
              Continue with email
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-[var(--color-line)]">
            <button
              type="button"
              onClick={() => router.replace("/app/bookshelf")}
              className="w-full text-[13px] bg-[var(--color-accent)] text-white rounded-md px-3 py-2.5 hover:bg-[var(--color-accent-hover)]"
            >
              Continue as Murthy
            </button>
            <p className="mt-3 text-[11px] text-center text-[var(--color-ink-faint)]">
              Redirecting to your watchlist in a moment...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
