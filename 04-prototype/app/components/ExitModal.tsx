"use client";

import { useCallback, useEffect, useState } from "react";
import ExitSurvey from "./ExitSurvey/ExitSurvey";

type Props = {
  open: boolean;
  recapSlug: string;
  onClose: () => void;
};

export default function ExitModal({ open, recapSlug, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const close = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4"
      onClick={close}
    >
      {submitted ? (
        <div
          role="dialog"
          aria-label="Thank you"
          className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-line-strong)] shadow-xl w-[460px] max-w-full p-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
            Got it. You are ready to press play.
          </h2>
          <p className="mt-2 text-[14px] text-[var(--color-ink-muted)]">
            Your reaction is saved locally for this demo. Close to return to
            the recap.
          </p>
          <button
            type="button"
            onClick={close}
            className="mt-6 text-[13px] bg-[var(--color-ink)] text-[var(--color-surface)] px-4 py-2 rounded hover:bg-[var(--color-accent-hover)]"
          >
            Close
          </button>
        </div>
      ) : (
        <ExitSurvey
          recapSlug={recapSlug}
          onSubmitted={() => setSubmitted(true)}
          onSkip={close}
        />
      )}
    </div>
  );
}
