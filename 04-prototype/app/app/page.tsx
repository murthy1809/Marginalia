import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex-1 flex flex-col">
      <nav className="h-14 px-6 flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] text-white flex items-center justify-center text-[12px] font-semibold serif">
            M
          </div>
          <span className="serif text-[16px] font-semibold tracking-tight text-[var(--color-ink)]">
            Marginalia
          </span>
        </div>

        <div className="hidden md:flex items-center gap-5 text-[13px] text-[var(--color-ink-muted)] ml-6">
          <button type="button" className="hover:text-[var(--color-ink)]" title="Demo mode">
            Product
          </button>
          <button type="button" className="hover:text-[var(--color-ink)]" title="Demo mode">
            Shows
          </button>
          <button type="button" className="hover:text-[var(--color-ink)]" title="Demo mode">
            Notes
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            title="Sign in - demo mode"
            className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] px-3 py-1.5"
          >
            Sign in
          </button>
          <Link
            href="/app/login"
            className="text-[13px] bg-[var(--color-ink)] text-[var(--color-surface)] rounded-md px-3 py-1.5 hover:bg-[var(--color-accent-hover)]"
          >
            Try recap
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center px-6">
        <div className="max-w-[780px] w-full text-center pt-16 pb-8">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--color-ink-muted)] bg-[var(--color-surface)] border border-[var(--color-line)] rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Spoiler-safe - for viewers returning after a long gap
          </div>

          <h1 className="serif mt-6 text-[44px] sm:text-[56px] leading-[1.04] font-semibold tracking-tight text-[var(--color-ink)]">
            Pick up a long TV series without stepping on spoilers.
          </h1>

          <p className="mt-5 text-[16px] sm:text-[17px] leading-7 text-[var(--color-ink-muted)] max-w-[640px] mx-auto">
            Marginalia rebuilds the story state at the episode you last watched:
            relationships, secrets, character motivations, and open questions.
            No trailers, leaks, wiki rabbit holes, or future-season reveals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/app/login"
              className="inline-flex items-center gap-2 text-[14px] bg-[var(--color-accent)] text-white rounded-md px-4 py-2.5 hover:bg-[var(--color-accent-hover)]"
            >
              Try with The Boys
              <svg
                width="14"
                height="14"
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
            <button
              type="button"
              title="Demo mode"
              className="text-[14px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] px-4 py-2.5"
            >
              View research notes
            </button>
          </div>

          <div className="mt-4 text-[11px] text-[var(--color-ink-faint)]">
            Demo seat - drops you into a watchlist with The Boys ready and
            three additional shows staged as future coverage.
          </div>
        </div>

        <div className="w-full max-w-[880px] mb-14">
          <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_24px_48px_-32px_rgba(23,24,28,0.28)] overflow-hidden">
            <div className="h-9 border-b border-[var(--color-line)] flex items-center gap-1.5 px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-line-strong)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-line-strong)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-line-strong)]" />
              <span className="ml-3 text-[11px] text-[var(--color-ink-faint)]">
                marginalia.app / recap / the-boys-s4-finale
              </span>
            </div>
            <div className="px-5 py-2.5 border-b border-[var(--color-line-strong)] bg-[var(--color-accent-soft)] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span className="serif text-[14px] text-[var(--color-ink)]">
                Showing what is known through{" "}
                <em className="not-italic font-semibold">
                  S04E08 - Season Four Finale
                </em>
                .
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-0">
              <div className="p-6 text-left border-b md:border-b-0 md:border-r border-[var(--color-line)]">
                <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] mb-1">
                  Story-state recap
                </div>
                <div className="serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
                  Map the players before S05E01
                </div>
                <p className="mt-2 text-[13px] leading-6 text-[var(--color-ink-muted)]">
                  See Butcher, Homelander, Ryan, Neuman, Sage, A-Train, and the
                  team in one bounded map. Filter by ally, enemy, family,
                  control, betrayal, or threat.
                </p>
              </div>
              <div className="p-6 text-left">
                <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] mb-1">
                  Spoiler guardrail
                </div>
                <div className="serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
                  Future facts stay out
                </div>
                <p className="mt-2 text-[13px] leading-6 text-[var(--color-ink-muted)]">
                  The prototype treats trailers, leaks, casting news, and
                  post-finale speculation as out of bounds, then asks for
                  feedback before sending you back to the show.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 py-6 border-t border-[var(--color-line)] text-[11px] text-[var(--color-ink-faint)] flex items-center gap-3">
        <span>Marginalia - prototype for portfolio / PM workshop</span>
        <span className="ml-auto">Week 2 - Spoiler-safe TV recap</span>
      </footer>
    </div>
  );
}
