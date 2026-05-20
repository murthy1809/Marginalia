"use client";

import { notFound } from "next/navigation";
import { use, useMemo, useState } from "react";
import BoundaryBanner from "@/components/BoundaryBanner";
import BoundarySelector from "@/components/BoundarySelector";
import CharacterStatusList from "@/components/CharacterStatusList";
import EpisodeTimeline from "@/components/EpisodeTimeline";
import ExitModal from "@/components/ExitModal";
import OpenQuestions from "@/components/OpenQuestions";
import RelationshipDiagram from "@/components/RelationshipDiagram";
import SecretsTable from "@/components/SecretsTable";
import StorySummary from "@/components/StorySummary";
import { getRecap } from "@/lib/fixtures";

type Props = {
  params: Promise<{ seriesSlug: string }>;
};

export default function RecapPage({ params }: Props) {
  const { seriesSlug } = use(params);
  const recap = getRecap(seriesSlug);

  const [boundary, setBoundary] = useState({ season: 4, episode: 8 });
  const [exitOpen, setExitOpen] = useState(false);

  if (!recap) {
    notFound();
  }

  const visibleEpisodes = useMemo(
    () =>
      recap.episodeSummaries.filter(
        (episode) =>
          episode.season < boundary.season ||
          (episode.season === boundary.season &&
            episode.episode <= boundary.episode)
      ),
    [recap.episodeSummaries, boundary]
  );

  const selectedEpisode =
    recap.episodeSummaries.find(
      (episode) =>
        episode.season === boundary.season &&
        episode.episode === boundary.episode
    ) ?? recap.episodeSummaries[recap.episodeSummaries.length - 1];

  const nextEpisode = findNextEpisode(recap.episodeSummaries, boundary);
  const selectedStoryState = recap.storyStates[selectedEpisode.code];

  return (
    <>
      <BoundaryBanner
        watchedThrough={`${selectedEpisode.code} - ${selectedEpisode.title}`}
        series={recap.series}
        spoilerBoundary={
          nextEpisode
            ? `Nothing from ${nextEpisode.code} or later.`
            : recap.spoilerBoundary
        }
      />

      <article className="px-6 py-8 max-w-[1100px] mx-auto space-y-12">
        <header className="space-y-2">
          <div className="text-[12px] uppercase tracking-wider text-[var(--color-ink-faint)]">
            {recap.series} - {recap.platform}
          </div>
          <h1 className="serif text-[40px] sm:text-[44px] leading-[1.05] font-semibold tracking-tight text-[var(--color-ink)]">
            Catch up before{" "}
            <em className="not-italic">{nextEpisode?.code ?? "the next watch"}</em>
          </h1>
          <p className="text-[15px] leading-7 text-[var(--color-ink-muted)] max-w-[700px]">
            A plot refresh, episode timeline, relationship map, character state
            cards, and the exact secrets worth remembering before you press
            play. Bounded at{" "}
            <em>
              {selectedEpisode.code} - {selectedEpisode.title}
            </em>
            .
          </p>
        </header>

        <BoundarySelector
          episodes={recap.episodeSummaries}
          value={boundary}
          onChange={setBoundary}
        />

        <StorySummary
          items={recap.seasonSummaries}
          allEpisodes={recap.episodeSummaries}
          visibleEpisodes={visibleEpisodes}
          boundary={boundary}
          sourceNote={recap.sourceNote}
        />

        <EpisodeTimeline items={visibleEpisodes} />

        {selectedStoryState ? (
          <>
            <RelationshipDiagram
              nodes={selectedStoryState.nodes}
              edges={selectedStoryState.edges}
              characterStatus={selectedStoryState.characterStatus}
            />

            <CharacterStatusList items={selectedStoryState.characterStatus} />

            <SecretsTable items={selectedStoryState.secrets} />

            <OpenQuestions
              recapSlug={`${recap.slug}.${selectedStoryState.boundaryCode}`}
              questions={selectedStoryState.openQuestions}
            />
          </>
        ) : (
          <section className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            <h2 className="serif text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
              Story-state modules paused for this boundary
            </h2>
            <p className="mt-2 text-[14px] leading-7 text-[var(--color-ink-muted)] max-w-[760px]">
              The prototype can filter plot summaries and episode history for
              any selected episode. The relationship map, character states,
              secrets, and checklist are available for selected demo checkpoints
              only.
            </p>
          </section>
        )}

        <footer className="border-t border-[var(--color-line)] pt-6 flex flex-wrap items-center gap-3">
          <p className="text-[14px] text-[var(--color-ink-muted)]">
            Ready for{" "}
            <em className="not-italic font-medium">
              {nextEpisode?.code ?? "your next watch"}
            </em>
            ?
          </p>
          <button
            type="button"
            onClick={() => setExitOpen(true)}
            className="ml-auto inline-flex items-center gap-2 text-[14px] bg-[var(--color-accent)] text-white rounded-md px-4 py-2.5 hover:bg-[var(--color-accent-hover)]"
          >
            I&apos;m ready, take me to {nextEpisode?.code ?? "the next watch"}
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
          </button>
        </footer>
      </article>

      <ExitModal
        open={exitOpen}
        recapSlug={recap.slug}
        onClose={() => setExitOpen(false)}
      />
    </>
  );
}

function findNextEpisode(
  episodes: { season: number; episode: number; code: string }[],
  boundary: { season: number; episode: number }
) {
  return episodes.find(
    (episode) =>
      episode.season > boundary.season ||
      (episode.season === boundary.season && episode.episode > boundary.episode)
  );
}
