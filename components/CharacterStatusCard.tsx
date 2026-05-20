import type { CharacterStatus } from "@/lib/fixtures";

export default function CharacterStatusCard({
  status,
}: {
  status: CharacterStatus;
}) {
  return (
    <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
      <h3 className="serif text-[18px] font-semibold text-[var(--color-ink)] tracking-tight">
        {status.name}
      </h3>
      <dl className="mt-2 grid grid-cols-[92px_1fr] gap-y-1.5 text-[13px] leading-6">
        <dt className="text-[var(--color-ink-faint)]">State</dt>
        <dd className="text-[var(--color-ink)]">{status.state}</dd>

        <dt className="text-[var(--color-ink-faint)]">Motivation</dt>
        <dd className="text-[var(--color-ink)]">{status.motivation}</dd>

        <dt className="text-[var(--color-ink-faint)]">Risk</dt>
        <dd className="text-[var(--color-ink)]">{status.risk}</dd>
      </dl>
    </div>
  );
}
