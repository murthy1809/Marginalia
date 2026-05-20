import type { CharacterStatus } from "@/lib/fixtures";
import CharacterStatusCard from "./CharacterStatusCard";

export default function CharacterStatusList({
  items,
}: {
  items: CharacterStatus[];
}) {
  return (
    <section>
      <header className="mb-4">
        <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
          Character state
        </h2>
        <p className="text-[13px] text-[var(--color-ink-muted)] mt-1">
          What changed, what each person wants, and what could break next.
          Everything is bounded at your watched-through episode.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <CharacterStatusCard key={item.name} status={item} />
        ))}
      </div>
    </section>
  );
}
