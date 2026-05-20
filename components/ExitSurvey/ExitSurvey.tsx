"use client";

import { useState } from "react";
import Question, { type Answer } from "./Question";

const QUESTIONS = [
  "Did anything in the recap feel made up?",
  "Did any relationship or power-state detail look wrong?",
  "Did anything feel like a spoiler from Season 5?",
  "Would you have started the next episode without this recap?",
] as const;

type Props = {
  recapSlug: string;
  onSubmitted: () => void;
  onSkip: () => void;
};

export default function ExitSurvey({ recapSlug, onSubmitted, onSkip }: Props) {
  const [answers, setAnswers] = useState<Answer[]>(["", "", "", ""]);
  const [submitting, setSubmitting] = useState(false);

  function setAnswer(i: number, a: Answer) {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = a;
      return next;
    });
  }

  const canSubmit = answers.every((a) => a !== "");

  function submit() {
    if (!canSubmit) return;
    setSubmitting(true);
    const record = {
      ts: new Date().toISOString(),
      recap: recapSlug,
      made_up: answers[0],
      detail_wrong: answers[1],
      spoiler_leak: answers[2],
      would_have_watched: answers[3],
    };
    try {
      const prev = JSON.parse(
        localStorage.getItem("marginalia.feedback.v1") ?? "[]"
      );
      prev.push(record);
      localStorage.setItem("marginalia.feedback.v1", JSON.stringify(prev));
    } catch {
      // Local storage is optional in the demo.
    }
    console.log("[Marginalia demo] feedback submitted", record);
    onSubmitted();
  }

  return (
    <div
      role="dialog"
      aria-label="Reaction to the recap"
      className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-line-strong)] shadow-xl w-[560px] max-w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-6 pt-5 pb-4 border-b border-[var(--color-line)]">
        <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
          Quick reaction
        </div>
        <h2 className="mt-0.5 serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
          Four answers before you press play.
        </h2>
      </div>

      <div className="px-6 py-5 space-y-5">
        {QUESTIONS.map((prompt, i) => (
          <Question
            key={prompt}
            index={i + 1}
            prompt={prompt}
            value={answers[i]}
            onChange={(a) => setAnswer(i, a)}
          />
        ))}
      </div>

      <div className="px-6 py-3 border-t border-[var(--color-line)] flex items-center gap-2">
        <span className="text-[11px] text-[var(--color-ink-faint)]">
          Saved locally for the demo.
        </span>
        <button
          type="button"
          onClick={onSkip}
          className="ml-auto text-[12px] text-[var(--color-ink-muted)] px-3 py-1.5 rounded hover:bg-[var(--color-line)]"
        >
          Skip
        </button>
        <button
          type="button"
          disabled={!canSubmit || submitting}
          onClick={submit}
          className="text-[12px] bg-[var(--color-accent)] text-white px-3 py-1.5 rounded hover:bg-[var(--color-accent-hover)] disabled:bg-[var(--color-ink-faint)] disabled:cursor-not-allowed"
        >
          Send feedback
        </button>
      </div>
    </div>
  );
}
