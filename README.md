# Marginalia TV

Marginalia TV is a re-scope of the original book-series recap prototype for serialized TV shows.

The product question:

Can a spoiler-safe recap and relationship/status map help viewers return to a TV show after a long gap, without rewatching full seasons or accidentally seeing spoilers from later episodes?

## Why TV Instead of Books

TV is likely a better prototype surface than books because:

- Episode and season metadata is easier to structure.
- Public recaps, cast lists, and episode summaries are more available.
- Viewers commonly pause shows between seasons or after streaming gaps.
- The spoiler boundary can be precise: season, episode, or timestamp.
- The prototype can use real recognizable shows without needing full book-corpus access.

The tradeoff: TV has more existing recap competition, so the differentiator has to be sharper than "summarize what happened."

## Working Product Design Spine

`Goal -> User/JTBD -> Pain/Obstacles -> Ideas -> Pick -> MVP -> Metrics`

## Initial JTBD

Viewers returning to a serialized TV show after months or years are trying to remember the character relationships, unresolved plot threads, and current state of the story before watching the next episode, without rewatching prior episodes or seeing spoilers from later episodes.

## Initial Differentiator

Most TV recap content is episode-by-episode prose. Marginalia TV should focus on restoring the viewer's mental model:

- Who is aligned with whom?
- Who betrayed whom?
- Who knows which secret?
- What unresolved threads matter before the next episode?
- What should I remember, bounded exactly to where I stopped?

## First Candidate Shows

Good prototype candidates need serialized plots, relationship complexity, and common return-after-gap behavior:

- `Severance`
- `House of the Dragon`
- `The Last of Us`
- `The Boys`
- `Stranger Things`
- `Attack on Titan`
- `The Bear` if focusing more on character/emotional continuity than plot mechanics

## First Workstream

1. Run competitive analysis on TV recap / episode guide / fandom wiki / streaming recap experiences.
2. Pick one show and one return point for the MVP.
3. Rewrite the PRD around episode-bounded spoiler safety.
4. Rebuild the prototype with TV-specific data, flows, and metrics.
