# Marginalia TV - Product Design Framing

## Goal

Test whether a spoiler-safe recap plus character/state map can help viewers restart serialized TV shows after a long gap with less rewatching, lower spoiler risk, and higher confidence before pressing play.

## Primary JTBD

Viewers returning to a serialized TV show after months or years are trying to remember relationships, unresolved threads, and character state before watching the next episode without rewatching prior episodes or accidentally seeing spoilers from later episodes.

## Primary Segment

Streaming viewers who watch 3-6 prestige or genre shows per year, pause between seasons, and forget enough context that they hesitate before starting the next season.

## Core Obstacles

1. **Before watching:** The viewer cannot remember the prior season clearly enough to feel ready.
2. **During search:** Google, YouTube thumbnails, Reddit, and fandom wikis can reveal future episode/season spoilers.
3. **During recap consumption:** Episode summaries are too linear; they do not quickly restore relationships, secrets, allegiances, and unresolved threads.
4. **At restart:** The viewer still has to connect recap details to the next episode's opening scenes.

## Core Insight

The pain is not only "I forgot the plot." It is "I no longer know the current story state." For serialized shows, readiness depends on remembering who has power, who knows the secret, who betrayed whom, who is captured, and which unresolved thread matters next.

## Solution Options

| Option | Obstacle attacked | Why it might work | Tradeoff | Verdict |
|---|---|---|---|---|
| Season recap brief | Fast memory refresh | Familiar, easy to produce, low interaction cost | Competes directly with existing recap articles/videos | Baseline |
| Character relationship and secret map | Mental model restoration | Differentiates from prose recaps; helps with complex serialized shows | Harder to make accurate and spoiler-bounded | Chosen for MVP |
| Scene-level "previously on" builder | Precision right before next episode | Strong utility for episode-level restarts | Requires deeper episode data and more complex rights/corpus handling | Later |

## MVP

Seed one show and one high-value return point: *The Boys* after `S04E08`, before `S05E01`. The viewer selects the last episode watched, then sees:

- A persistent boundary banner: `Showing what is known through S04E08`.
- A bounded season recap and episode timeline.
- A character relationship/status map with filterable edge types.
- A "secrets and power state" section.
- A short recap of unresolved threads.
- A ready-to-watch checklist.
- An exit survey asking if anything felt spoiled, wrong, fabricated, or useful.

The prototype also shows unsupported shows as "recap coming soon" rather than generating weak placeholder content. That is an intentional trust decision.

## North Star

Spoiler-safe recap completions that lead to the viewer starting the next episode.

## Input Metrics

- Activation: % of users who select a show and last-watched episode.
- Completion: % who reach the ready-to-watch state.
- Interaction: % who click a character, secret, or unresolved thread.
- Continuation intent: % who click "I'm ready for the next episode."

## Guardrail Metrics

- Reported spoiler leak rate.
- Reported wrong relationship/status rate.
- Reported fabricated event/character rate.
- Drop-off before completion.

## Key Product Bet

The product wins only if it is more useful than a generic recap because it restores the viewer's mental model, not just the plot sequence.

## Evaluation Readout

The static UI prototype passed the executable TV eval cases with a **4.93 / 5** weighted score. Boundary, hallucination grounding, and story-state correctness all scored **5.00 / 5** on executable cases.

The generated recap eval landed in **iterate** at **4.49 / 5**. It stayed spoiler-safe across all seven cases, but sparse or unsupported source facts reduced structural completeness and watch readiness. Product implication: the next unlock is better bounded data coverage, not a more confident model.

## LinkedIn Hook

I am rebuilding Marginalia from books to TV shows to test a sharper product-design bet: viewers do not just need a recap of what happened; they need a spoiler-safe reconstruction of the story state at the exact episode where they stopped.
