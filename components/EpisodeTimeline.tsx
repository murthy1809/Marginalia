import type { EpisodeSummary } from "@/lib/fixtures";

type Props = {
  items: EpisodeSummary[];
};

export default function EpisodeTimeline({ items }: Props) {
  const seasons = groupBySeason(items);

  return (
    <section>
      <header className="mb-4">
        <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
          Episode timeline
        </h2>
        <p className="text-[13px] text-[var(--color-ink-muted)] mt-1 max-w-[760px]">
          Episode-by-episode recall through Season 4. Season 4 is open by
          default because it is the freshest boundary before Season 5.
        </p>
      </header>

      <div className="space-y-3">
        {seasons.map(({ season, episodes }) => (
          <details
            key={season}
            open={season === 4}
            className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]"
          >
            <summary className="cursor-pointer select-none px-4 py-3 text-[14px] font-medium text-[var(--color-ink)]">
              Season {season}{" "}
              <span className="text-[12px] font-normal text-[var(--color-ink-faint)]">
                ({episodes.length} episodes)
              </span>
            </summary>

            <div className="border-t border-[var(--color-line)] divide-y divide-[var(--color-line)]">
              {episodes.map((episode) => (
                <article
                  key={episode.code}
                  className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-3 px-4 py-3"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
                      {episode.code}
                    </div>
                    <div className="mt-1 text-[13px] font-medium text-[var(--color-ink)]">
                      {episode.title}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[13px] leading-6 text-[var(--color-ink)]">
                      {episode.summary}
                    </p>
                    <p className="text-[12px] leading-5 text-[var(--color-ink-muted)]">
                      <span className="font-medium text-[var(--color-ink)]">
                        Why it matters:
                      </span>{" "}
                      {episode.whyItMatters}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function groupBySeason(items: EpisodeSummary[]) {
  const grouped = new Map<number, EpisodeSummary[]>();
  for (const item of items) {
    if (!grouped.has(item.season)) grouped.set(item.season, []);
    grouped.get(item.season)!.push(item);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => a - b)
    .map(([season, episodes]) => ({
      season,
      episodes: episodes.slice().sort((a, b) => a.episode - b.episode),
    }));
}
