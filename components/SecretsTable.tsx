import type { SecretFact } from "@/lib/fixtures";

type Props = {
  items: SecretFact[];
};

export default function SecretsTable({ items }: Props) {
  return (
    <section>
      <header className="mb-4">
        <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
          Secrets and power state
        </h2>
        <p className="text-[13px] text-[var(--color-ink-muted)] mt-1">
          The facts most likely to matter next, separated from future-season
          speculation.
        </p>
      </header>

      <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)] border-b border-[var(--color-line)]">
              <th className="px-4 py-2.5 font-medium w-[180px]">Topic</th>
              <th className="px-4 py-2.5 font-medium">What to remember</th>
              <th className="px-4 py-2.5 font-medium">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.topic}
                className="border-b border-[var(--color-line)] last:border-b-0"
              >
                <td className="px-4 py-3 font-medium text-[var(--color-ink)] align-top">
                  {item.topic}
                </td>
                <td className="px-4 py-3 text-[var(--color-ink)] leading-6 align-top">
                  {item.whatToRemember}
                </td>
                <td className="px-4 py-3 text-[var(--color-ink-muted)] leading-6 align-top">
                  {item.whyItMatters}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
