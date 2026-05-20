"use client";

import Link from "next/link";
import type { BookshelfRow } from "@/lib/fixtures";

export default function BookshelfCard({ row }: { row: BookshelfRow }) {
  const ctaLabel = `Catch me up before ${row.upNext}`;

  const card =
    "rounded-xl border bg-[var(--color-surface)] p-5 flex flex-col gap-3 transition-shadow";
  const tone = row.highlighted
    ? "border-[var(--color-accent)] shadow-[0_8px_24px_-16px_rgba(139,58,42,0.4)]"
    : "border-[var(--color-line)] hover:border-[var(--color-line-strong)]";

  return (
    <article className={`${card} ${tone}`}>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
            {row.author}
          </div>
          <h3 className="serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)] leading-snug">
            {row.series}
          </h3>
        </div>
        {row.highlighted && (
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-accent)] text-white whitespace-nowrap">
            Recap ready
          </span>
        )}
      </div>

      <dl className="grid grid-cols-[88px_1fr] gap-y-1 text-[13px]">
        <dt className="text-[var(--color-ink-faint)]">Watched</dt>
        <dd className="text-[var(--color-ink)]">
          {row.booksRead.map((b, i) => (
            <span key={b}>
              <em className="not-italic">{b}</em>
              {i < row.booksRead.length - 1 && (
                <span className="text-[var(--color-ink-faint)]">, </span>
              )}
            </span>
          ))}
        </dd>

        <dt className="text-[var(--color-ink-faint)]">Up next</dt>
        <dd className="text-[var(--color-ink)]">
          <em className="not-italic font-medium">{row.upNext}</em>
        </dd>

        <dt className="text-[var(--color-ink-faint)]">Gap</dt>
        <dd className="text-[var(--color-ink-muted)]">{row.lastReadLabel}</dd>
      </dl>

      <div className="mt-auto pt-2">
        {row.recapAvailable ? (
          <Link
            href={`/app/recap/${row.slug}`}
            className="inline-flex items-center gap-2 text-[13px] bg-[var(--color-accent)] text-white rounded-md px-3 py-2 hover:bg-[var(--color-accent-hover)]"
          >
            {ctaLabel}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <button
            type="button"
            disabled
            title="Demo: The Boys only"
            className="inline-flex items-center gap-2 text-[13px] bg-[var(--color-line)] text-[var(--color-ink-faint)] rounded-md px-3 py-2 cursor-not-allowed"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </article>
  );
}
