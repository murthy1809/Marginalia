type Props = {
  watchedThrough: string;
  series: string;
  spoilerBoundary: string;
};

export default function BoundaryBanner({
  watchedThrough,
  series,
  spoilerBoundary,
}: Props) {
  return (
    <div
      className="sticky top-0 z-30 border-b border-[var(--color-line-strong)] bg-[var(--color-accent-soft)]"
      role="status"
      aria-live="polite"
    >
      <div className="px-6 py-2.5 flex items-center gap-3">
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
        />
        <span className="serif text-[15px] tracking-tight text-[var(--color-ink)]">
          Showing what is known through{" "}
          <em className="not-italic font-semibold">{watchedThrough}</em>.
        </span>
        <span className="ml-auto text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] hidden md:inline">
          {series} - {spoilerBoundary}
        </span>
      </div>
    </div>
  );
}
