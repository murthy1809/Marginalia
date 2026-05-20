# Marginalia TV - Spoiler-Safe Story-State Recap PRD

**Author:** Murthy
**Date:** 2026-05-19
**Status:** Prototype spec
**MVP show:** *The Boys*
**Boundary:** watched through Season 4 finale; preparing for Season 5
**Business goal:** Learning / portfolio proof; explore a new problem space, test AI-assisted prototyping, and demonstrate product management thinking from research to prototype to eval.

---

## 1. Problem Statement

Viewers returning to serialized TV shows after long gaps lose both the plot path and the current story state - what happened, how the story got here, relationships, allegiances, secrets, unresolved threats, and why the next episode matters - and existing recap options either require too much rewatching or risk spoilers from later episodes. User research shows viewers saying they "don't really remember" prior seasons, expect to "miss some stuff," and often fall back to YouTube recaps, last-episode rewatches, full-season rewatches, or wiki pages. This prototype tests whether an episode-bounded recap for *The Boys* can restore both narrative memory and story state so a viewer can start Season 5 confidently without revealing Season 5 spoilers.

---

## 2. Research Summary

- Long gaps are now common enough to create a memory problem. The Ringer documents two- and three-year breaks between seasons and notes that short "previously on" montages often do not cut it after long breaks.
- Viewers describe confidence loss, not just forgetfulness. One viewer said, "I want to watch but I know I'll miss some stuff since I don't remember season 3."
- Current workarounds are fragmented. Research examples include viewers watching YouTube recaps, rewatching the last episode, or rewatching a whole season before a new season.
- Spoiler anxiety is a separate pain. Users cite spoiler risk from search, Reddit, podcasts, streamer UI thumbnails, auto-play clips, wiki pages, and platform metadata.
- Competitors validate demand but narrow the opening. Prime Video X-Ray Recaps, Prime Video Video Recaps, Recap-TV, BrieflySeries, and SeriesSync all claim some version of AI or spoiler-aware recaps.
- Competitor critiques show trust failure modes. Reddit users complain Prime X-Ray can reveal future relationship metadata, AI video recaps can get facts wrong, and generic ChatGPT TV recaps "always get it wrong."
- *The Boys* is a strong MVP candidate because its returning-viewer state is not just "what happened"; it is a volatile map of who controls political power, who has betrayed whom, who is captured, who is radicalized, and what threat remains unresolved before the final season.

**Product Design Takeaway:** The job is not "generate a TV recap"; the job is to restore enough plot memory and current story state that the viewer feels ready to press play despite memory decay and spoiler risk.

---

## 3. Users and Use Cases

**Primary user:** Streaming viewers returning to *The Boys* after a long gap before Season 5. They remember the tone and premise but not the exact state of Homelander's power, Butcher's condition, Ryan's allegiance, Neuman's fate, Soldier Boy's status, or which members of The Boys are free/captured.

**JTBD segment:** Viewers returning to a serialized TV show after a long gap are trying to reconstruct the current story state before watching the next episode without rewatching prior episodes or seeing spoilers from later episodes.

**Prioritization rationale:** *The Boys* wins on familiarity, topicality, and story-state complexity. It is mainstream enough for portfolio readers to understand, but complex enough that a relationship/status map has visible value over a prose recap.

**Secondary beneficiaries:**

- Viewers who stopped mid-season and want to resume from a specific episode.
- Fans who watched *Gen V* and *The Boys* out of order and want boundary-safe state.
- Couples or friends who remember different details.
- Viewers who avoid Reddit, YouTube thumbnails, and fan wikis because Season 5 spoilers are active.

**Explicit exclusions:**

- First-time viewers.
- Viewers seeking comic-book spoilers or source-material comparisons.
- Viewers seeking theories, speculation, or Season 5 discussion.
- A general TV tracker or fandom wiki replacement.

---

## 4. User Journey with Ins and Outs

1. **Landing.** In: a viewer sees a portfolio/demo link and recognizes the pain of returning to *The Boys*. Obstacle: they need to trust this is spoiler-safe, not another generic recap. Out: clicks "Try a spoiler-safe recap."
2. **Show and boundary selection.** In: user wants to resume *The Boys*. Obstacle: they may remember "I finished Season 4" but not every event. Out: selects `The Boys`, last watched `S04E08 - Season Four Finale`, and next episode `S05E01`.
3. **Watchlist dashboard.** In: one-click demo profile with several in-progress shows. Obstacle: user needs a clear entry point, not a blank state. Out: clicks "Catch me up before Season 5" on The Boys card.
4. **Bounded recap.** In: user expects only facts known through Season 4. Obstacle: they need both "what happened" and "where everyone stands now" faster than a rewatch. Out: scans the season summary, opens the episode timeline, expands a character, checks a ready-to-watch item, or clicks "I'm ready for Season 5."
5. **Exit feedback.** In: user has consumed the recap. Obstacle: the product needs quality feedback on trust, spoilers, and wrong details. Out: answers four questions: spoiler leak, wrong relationship/status, made-up detail, ready to watch.

---

## 5. Goals and Non-Goals

**Goal statement:** Marginalia TV helps returning viewers reconstruct spoiler-safe story state at an exact episode boundary while giving Murthy a portfolio-quality prototype that demonstrates research, product design, AI quality evaluation, and tradeoff thinking.

**Goals:**

- 80%+ of demo users who start The Boys recap reach the ready-to-watch section.
- 70%+ of demo users report they feel ready to start Season 5 after the recap.
- 90%+ of users rate the recap spoiler-safe in exit feedback.
- <= 3% of story-state artifacts are reported as wrong, invented, or boundary-breaking in pilot feedback.
- Produce a portfolio artifact that clearly demonstrates Goal -> JTBD -> Pain -> Options -> MVP -> Metrics.

**Non-Goals:**

- Not a generic AI TV recap generator. MVP supports a seeded *The Boys* return scenario first.
- Not a streaming tracker. No broad watch history, Trakt sync, or TV Time replacement in v1.
- Not a wiki. No open-ended character lookup or future episode navigation.
- Not a video recap product. No clips, trailers, or generated video in MVP.
- Not a theory/speculation surface. No predictions, comic comparisons, or Season 5 discussion.

---

## 6. Functional Requirements

**Solution Options**

| Option | Obstacle attacked | Why it might work | Tradeoff | Verdict |
|---|---|---|---|---|
| Season recap brief | Rewatching is expensive | Familiar, fast, easy to generate | Competes directly with YouTube, Recap-TV, and streamer recaps; weak on story-state recall if used alone | Include as orientation layer |
| Episode timeline | Viewers forget how the story got from A to B | Helps users recover plot sequence without opening wikis or rewatching full seasons | Can become too long if every episode is expanded by default | Include, collapsed by season |
| Episode-bounded story-state map | Viewers forget power structure, allegiances, captures, betrayals, and open threats | Differentiates from prose summaries and maps directly to the research pain | Harder to make accurate; wrong statuses destroy trust | Chosen as differentiator |
| Watch-history tracker + recap feed | Users may not remember where they stopped | Could integrate with Trakt/TV Time later | Expands scope into tracking before proving recap value | Later |

1. The app lets the user select a show, last watched season/episode, and next episode they plan to watch.
2. The MVP ships with a pre-seeded demo profile and four shows: *The Boys*, *House of the Dragon*, *Attack on Titan*, and *Stranger Things*. Only *The Boys* has a fully authored recap in v1.
3. The Boys recap is bounded at `S04E08 - Season Four Finale`; the next episode is `S05E01`.
4. The recap screen includes a boundary selector with season and last-watched episode. Changing the boundary updates the banner, next episode label, season summary, and episode timeline.
5. A persistent boundary banner appears at the top of the recap: `Showing what is known through [selected episode]. Nothing from [next episode] or later.`
6. The boundary selector does not expose future episode titles in dropdown options. It uses episode codes for selection, then displays titles only for episodes at or before the selected boundary.
7. The recap contains six ordered modules: Previously on / Season Summary, Episode Timeline, Story-State Map, Character Status, Secrets and Who Knows Them, Ready-to-Watch Checklist.
8. The Previously on / Season Summary module includes one compact summary block per completed season. For a partial season boundary, it only summarizes episodes through the selected episode.
9. The Episode Timeline module includes episodes from Season 1 through the selected boundary, grouped by season, with the boundary season open by default.
10. Each episode timeline item includes season/episode code, episode title, a paraphrased plot summary, and a "why it matters" memory anchor.
11. Season and episode summaries are paraphrased from bounded source pages such as The Boys Wiki season and episode pages. The app shows a source note, but does not expose wiki navigation or future-season links in the user experience.
12. The Story-State Map contains at least 8 named characters and at least 10 typed relationships. Edge types include `ally`, `enemy`, `family`, `romantic`, `control`, `betrayal`, `threat`, and `unknown`.
13. Every relationship edge includes a short "established by" label naming the in-scope season or finale event that supports it.
14. The Character Status module lists at least 8 characters with fields: state, motivation, knowledge, and risk.
15. The Secrets/Power State module lists at least 6 facts with fields: what is known, who knows it, who is affected, and where it was established.
16. The Ready-to-Watch Checklist lists 6-8 memory anchors a viewer should have before pressing play on Season 5.
17. Prototype limitation: dynamic filtering is supported for summaries and episode timeline. Story-State Map, Character Status, Secrets, and Ready-to-Watch Checklist are shown for selected authored checkpoints: every season finale (`S01E08`, `S02E08`, `S03E08`, `S04E08`) plus one mid-season checkpoint (`S02E05`). Unsupported boundaries show a "paused for demo" explanation.
18. The app excludes every event, character status, relationship, image, thumbnail, label, episode title, or concept first established after the selected boundary.
19. The app avoids meta-spoiler language such as "not yet," "later," "will become," "Season 5 reveals," or "still to be explained."
20. The exit feedback modal asks four questions: Did anything feel spoiled? Did any relationship/status feel wrong? Did anything feel made up? Do you feel ready to watch the next episode?
21. The prototype renders instantly with no loading skeletons or empty states.
22. For unsupported shows, cards are visible but marked "recap coming soon" rather than generating weak placeholder content.

---

## 7. Riskiest Assumption

> My product only works if the AI can consistently produce episode-bounded recap artifacts - including season summaries, episode timelines, relationship/power maps, character statuses, secrets/who-knows-what tables, and ready-to-watch checklists - that reveal nothing from later episodes, fabricate no events or relationships, and accurately represent both what happened and who controls, threatens, knows, or depends on whom as of the user's stopping point.

Failure modes:

- **Boundary failure:** Any Season 5 fact, image, relationship, status, episode title, or future framing appears in the Season 4 recap.
- **Fabrication failure:** The recap invents a character, relationship, secret, event, motivation, capture, or unresolved threat not established by the watched episodes.
- **Story-state correctness failure:** The recap names a real Season 4 fact but assigns it to the wrong character, wrong knowledge holder, wrong relationship type, or wrong level of certainty.
- **Narrative recall failure:** The season or episode summaries are too thin, too linear, or too vague to answer "what actually happened?"

---

## 8. Eval Plan

The eval plan mirrors the four files in this folder: `rubric.json`, `test-cases.json`, `thresholds.json`, and `product-prompt.md`.

**Rubric:** Five criteria:

1. `spoiler_boundary` - Critical. No content beyond the declared episode boundary.
2. `hallucination_grounding` - Critical. No invented events, characters, secrets, statuses, or motivations.
3. `story_state_correctness` - Critical. Relationship map, statuses, and secrets/power table correctly represent who controls, threatens, knows, or depends on whom at the boundary.
4. `structural_completeness` - High. Output includes boundary banner, season summary, episode timeline, story-state map, character status, secrets/power table, and ready-to-watch checklist.
5. `watch_readiness` - High. Output helps a viewer press play by being concise, scannable, and focused on actionable memory anchors.

**Test cases:** Seven cases across easy, realistic, hard, and adversarial scenarios. The primary case is *The Boys* through `S04E08`. Other cases test Season 3 return, unsupported shows, sparse facts, and adversarial attempts to inject Season 5 facts.

**Grading method:** Closed-book judging. Each test case carries verified ground-truth fields in `input_data`: `ground_truth_summary`, `ground_truth_relationships`, `ground_truth_secrets`, `ground_truth_character_status`, `ground_truth_ready_to_watch`, `boundary_facts_in_scope`, and `boundary_facts_out_of_scope`. The product prompt instructs the product model to ignore those fields; they exist only for the judge.

**Thresholds:**

- Ship if spoiler boundary is 5/5 on 100% of cases, hallucination and story-state correctness are 5/5 on 95%+ of cases, and structural completeness/watch readiness average at least 4.0.
- Iterate if there are 1-2 non-adversarial boundary misses, or if hallucination/story-state correctness 5/5 rates fall between 80-94%.
- Pivot if any adversarial boundary case fails, spoiler boundary fails on 3+ cases, or story-state correctness average falls below 3.5.

---

## 9. Success Metrics and Open Questions

**North Star metric:** Spoiler-safe recap completions that lead to the viewer clicking "I'm ready for Season 5."

**Input metrics:**

- Activation: % of visitors who select a show and last-watched episode.
- Recap start: % of activated users who open a story-state recap.
- Completion: % who reach the ready-to-watch section.
- Interaction: % who open an episode season group, click a character, relationship edge, secret, or checklist item.
- Continuation intent: % who click "I'm ready for Season 5."

**Guardrail metrics:**

- Reported spoiler leak rate.
- Reported wrong relationship/status rate.
- Reported fabricated detail rate.
- Drop-off before episode timeline interaction.
- Drop-off before story-state map interaction.
- Feedback mentions of confusion after reading the recap.

**30 / 60 / 90 day prototype metrics:**

- **30 days:** 10+ target users or peers review the prototype; 70%+ say the story-state format is more useful than a generic written recap.
- **60 days:** 2-3 shows are manually seeded enough to test whether the format generalizes beyond *The Boys*.
- **90 days:** LinkedIn/portfolio post generates at least 5 meaningful product conversations or hiring-network responses, validating the portfolio goal.

**Open questions:**

1. Is the strongest entry point "new season is out" or "resume a show I abandoned"?
2. Does MVP need video clips, or can text + diagram prove the value first?
3. What is the defensible data strategy for grounded recaps: public episode metadata, licensed summaries, user-provided notes, or manually curated prototype fixtures?
4. How much provenance is necessary before users trust story-state claims?
5. Should later versions integrate with Trakt/TV Time/watch history, or keep manual boundary selection?
6. How should the system handle spinoffs like *Gen V* that affect the main show's continuity?

---

## 10. Design Reference and Prototype Fidelity

**Reference products:**

- **Prime Video X-Ray** - borrow the contextual "where am I in the story?" intent, but avoid overlays that reveal future metadata.
- **Trakt** - borrow dense watch-progress language and clear season/episode hierarchy.
- **Linear** - borrow calm information density, quiet tables, and precise interaction states.
- **Notion** - borrow readable structured blocks for status, secrets, and checklists.

**Pointers:** `design-refs/README.md` carries the borrow list, avoid list, and screenshot manifest.

**Avoid list:**

- Purple primary buttons, gradient backgrounds, emoji-heavy states, shadcn defaults, "Acme Corp" nav text, Lorem ipsum, "Show 1 / Character A" placeholders.
- Future-season thumbnails, promotional imagery, trailers, or episode titles beyond the selected boundary.
- Generic "AI magic" badges or sparkle icons.
- Fake loading skeletons or empty states in the demo.

**Seeded-data spec:** `fixtures.md` defines four seeded shows, one active demo persona, one fully authored recap through `S04E08`, and selected story-state checkpoints. The Boys data includes 4 season summaries, 32 episode summaries through Season 4, full season-finale checkpoints for `S01E08`, `S02E08`, `S03E08`, and `S04E08`, plus a mid-season `S02E05` checkpoint with relationship map, character states, secrets/power-state facts, and ready-to-watch checklist items.

**UI-state rules:**

- One-click demo login.
- Dashboard is pre-populated.
- Unsupported show cards are visibly disabled or marked "recap coming soon."
- Recap screen always shows the boundary banner.
- Exit feedback is required for the demo loop but can be skipped.
