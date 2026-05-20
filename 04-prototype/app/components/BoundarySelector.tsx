import type { EpisodeSummary } from "@/lib/fixtures";

type Boundary = {
  season: number;
  episode: number;
};

type Props = {
  episodes: EpisodeSummary[];
  value: Boundary;
  onChange: (value: Boundary) => void;
};

export default function BoundarySelector({ episodes, value, onChange }: Props) {
  const seasons = Array.from(new Set(episodes.map((episode) => episode.season)));
  const seasonEpisodes = episodes.filter(
    (episode) => episode.season === value.season
  );

  return (
    <section className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <h2 className="serif text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
            Set your spoiler boundary
          </h2>
          <p className="mt-1 text-[13px] leading-6 text-[var(--color-ink-muted)]">
            Choose the last episode you watched. The summaries below only show
            content through that episode.
          </p>
        </div>

        <label className="grid gap-1 text-[12px] text-[var(--color-ink-muted)]">
          Season
          <select
            value={value.season}
            onChange={(event) => {
              const nextSeason = Number(event.target.value);
              const firstEpisode =
                episodes.find((episode) => episode.season === nextSeason)
                  ?.episode ?? 1;
              onChange({ season: nextSeason, episode: firstEpisode });
            }}
            className="min-w-[130px] rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface-raised)] px-3 py-2 text-[13px] text-[var(--color-ink)]"
          >
            {seasons.map((season) => (
              <option key={season} value={season}>
                Season {season}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-[12px] text-[var(--color-ink-muted)]">
          Last watched
          <select
            value={value.episode}
            onChange={(event) =>
              onChange({ ...value, episode: Number(event.target.value) })
            }
            className="min-w-[230px] rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface-raised)] px-3 py-2 text-[13px] text-[var(--color-ink)]"
          >
            {seasonEpisodes.map((episode) => (
              <option key={episode.code} value={episode.episode}>
                {episode.code}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
