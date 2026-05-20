import type { EpisodeSummary, SeasonSummary } from "@/lib/fixtures";

type Props = {
  items: SeasonSummary[];
  allEpisodes: EpisodeSummary[];
  visibleEpisodes: EpisodeSummary[];
  boundary: {
    season: number;
    episode: number;
  };
  sourceNote: string;
};

export default function StorySummary({
  items,
  allEpisodes,
  visibleEpisodes,
  boundary = { season: 4, episode: 8 },
  sourceNote,
}: Props) {
  const summaries = buildVisibleSummaries(
    items,
    allEpisodes,
    visibleEpisodes,
    boundary
  );

  return (
    <section>
      <header className="mb-4">
        <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
          Previously on The Boys
        </h2>
        <p className="text-[13px] text-[var(--color-ink-muted)] mt-1 max-w-[760px]">
          A bounded season-by-season plot refresh before the relationship and
          power-state view.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {summaries.map((season) => (
          <article
            key={season.season}
            className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4"
          >
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
              Season {season.season}
            </div>
            <h3 className="serif mt-1 text-[20px] font-semibold tracking-tight text-[var(--color-ink)]">
              {season.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {season.bullets.map((item) => (
                <li
                  key={item}
                  className="text-[13px] leading-6 text-[var(--color-ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-3 text-[11px] leading-5 text-[var(--color-ink-faint)]">
        {sourceNote}
      </p>
    </section>
  );
}

function buildVisibleSummaries(
  items: SeasonSummary[],
  allEpisodes: EpisodeSummary[],
  visibleEpisodes: EpisodeSummary[],
  boundary: { season: number; episode: number }
): SeasonSummary[] {
  return items
    .filter((item) => item.season <= boundary.season)
    .map((item) => {
      if (item.season < boundary.season) return item;

      const seasonEpisodes = visibleEpisodes.filter(
        (episode) => episode.season === item.season
      );
      const fullSeasonEpisodeCount = allEpisodes.filter(
        (episode) => episode.season === item.season
      ).length;
      const isFullSeededSeason = boundary.episode === fullSeasonEpisodeCount;

      if (isFullSeededSeason) return item;

      return {
        season: item.season,
        title: `Season ${item.season} - through ${formatEpisodeCode(
          item.season,
          boundary.episode
        )}`,
        bullets: seasonEpisodes.map(
          (episode) => `${episode.code}: ${episode.summary}`
        ),
      };
    });
}

function formatEpisodeCode(season: number, episode: number) {
  return `S${String(season).padStart(2, "0")}E${String(episode).padStart(
    2,
    "0"
  )}`;
}
