"use client";

import { ME } from "@/lib/fixtures";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props) {
  return (
    <header className="h-14 border-b border-[var(--color-line)] flex items-center gap-4 px-6 bg-[var(--color-bg)] sticky top-0 z-20">
      <div className="min-w-0">
        {title && (
          <div className="serif text-[15px] font-semibold tracking-tight truncate text-[var(--color-ink)]">
            {title}
          </div>
        )}
        {subtitle && (
          <div className="text-[12px] text-[var(--color-ink-faint)] truncate">
            {subtitle}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button
          type="button"
          title="Search - demo mode"
          aria-label="Search"
          className="h-8 w-8 rounded-md text-[var(--color-ink-faint)] hover:bg-[var(--color-line)] hover:text-[var(--color-ink-muted)] flex items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>

        <div className="ml-2 flex items-center gap-2 pl-3 border-l border-[var(--color-line)]">
          <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-semibold flex items-center justify-center">
            {ME.initials}
          </div>
          <div className="text-[12px] leading-tight">
            <div className="font-medium text-[var(--color-ink)]">{ME.name}</div>
            <div className="text-[var(--color-ink-faint)]">demo seat</div>
          </div>
        </div>
      </div>
    </header>
  );
}
