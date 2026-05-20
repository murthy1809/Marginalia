# Marginalia TV - Portfolio Case Study

## Outcome

Built a working TV recap prototype that scored **4.93 / 5** on executable static UI evals for spoiler boundary, hallucination grounding, story-state correctness, structural completeness, and watch readiness. The companion generated-output eval scored **4.49 / 5**, exposing the next product risk: sparse source facts reduce usefulness even when the model stays spoiler-safe.

## Problem

Streaming viewers often return to serialized shows after months or years away. They remember the premise and tone, but not the current story state: who holds power, who knows which secret, who betrayed whom, who is captured, and what unresolved thread matters before the next episode.

The default workarounds are flawed:

- Rewatching full seasons takes too long.
- YouTube recaps are convenient but risky because titles, thumbnails, comments, and recommendations can spoil later episodes.
- Wikis and search results contain rich detail but expose future character states, relationships, images, sidebars, and episode links.
- Generic AI recaps can be wrong, and a wrong recap makes users question their own memory.

## Product Insight

The user job is not "summarize a show." The job is:

> Help me know exactly what I am allowed to know before the next episode.

That shifted the design from plot summary to episode-bounded story-state restoration.

## Approach

I started with the original Marginalia book-series recap concept, then rescoped it to TV because TV has clearer episode boundaries, easier metadata structure, and more common return-after-gap behavior. The competitive analysis showed that "AI recap" was already crowded, with Prime Video X-Ray Recaps, Recap-TV, BrieflySeries, and SeriesSync all claiming some version of spoiler-aware catch-up.

The differentiator became story-state depth:

- Character relationship and allegiance map
- Secrets and who knows them
- Character status and motivation
- Episode-bounded season and episode summaries
- Ready-to-watch checklist
- Explicit spoiler boundary and feedback loop

## MVP

The MVP uses *The Boys* as the fully seeded demo, with the primary return point set after `S04E08` and before `S05E01`.

The prototype includes:

- A one-click demo login.
- A pre-populated bookshelf with *The Boys* marked as recap-ready.
- Unsupported show cards marked as coming soon instead of fabricating placeholder recaps.
- A boundary selector for season and last-watched episode.
- A persistent banner explaining what is known through the selected boundary.
- A season summary and episode timeline that filter to the selected boundary.
- A relationship map with graph/table views and typed edge filters.
- Character status cards covering state, motivation, knowledge, and risk.
- A secrets/power-state table.
- A ready-to-watch checklist.
- An exit survey that asks about spoiler leaks, wrong statuses, made-up details, and readiness.

## Tradeoffs

I chose manual boundary selection over watch-history sync because it proves the core recall job without taking on Trakt, TV Time, or streaming-account integration risk.

I chose structured text and diagrams over video because trust and inspectability matter more than entertainment value for this prototype. Users can scan claims, see the boundary, and report wrong details.

I chose a seeded/static prototype over live generation because the highest-risk behavior is not whether the UI can render. It is whether the system can stay bounded, grounded, and useful. The static prototype proves the desired experience; the generated eval isolates the harder data and prompting problem.

## Results

Static UI eval:

- Overall executable weighted score: **4.93 / 5**
- Spoiler boundary: **5.00 / 5**
- Hallucination grounding: **5.00 / 5**
- Story-state correctness: **5.00 / 5**
- Structural completeness: **4.83 / 5**
- Watch readiness: **4.83 / 5**

Generated-output eval:

- Overall equal-weight score: **4.49 / 5**
- Spoiler boundary: **5.00 / 5**
- Hallucination grounding: **4.71 / 5**
- Story-state correctness: **4.71 / 5**
- Structural completeness: **4.14 / 5**
- Watch readiness: **3.86 / 5**

## Learning

The prototype supports the product direction, but the generated eval makes the real next step clear: do not make the model more confident. Improve the data strategy.

The next version should require minimum fact coverage before generating full modules, add richer bounded relationship facts, expand allowed edge types to match the product model, and keep an honest insufficient-facts fallback for unsupported shows.

## Future Strategy

The data strategy should turn open-source recap material into a structured, boundary-aware knowledge base. The issue is not that open-source data is unusable. The issue is that open-source data is organized around canon, episodes, search relevance, or fandom navigation, while Marginalia needs data organized around what the viewer is allowed to know at a specific episode boundary.

The next version should improve data quality in four steps:

1. **Use multiple open-source inputs with clear roles.** Episode summaries can provide plot sequence, wiki episode pages can provide character actions and consequences, fan recaps can highlight memory anchors, and official blurbs can provide high-level framing. These sources should inform the system, but their spoiler-prone navigation, sidebars, thumbnails, and future links should never become the user experience.
2. **Convert pages into structured facts.** Instead of giving the model whole pages and asking for a recap, extract facts into categories such as `plot_event`, `character_status`, `relationship`, `secret`, `knowledge_holder`, `power_shift`, `unresolved_thread`, and `ready_to_watch_anchor`.
3. **Tag every fact with a boundary.** Each fact should include show, season, episode, source, confidence, and when the viewer is allowed to know it. Secrets also need character-level knowledge tagging: who knows it, who does not, and why it matters.
4. **Gate generation by coverage.** Before generating full modules, the system should check whether it has enough facts for each artifact: major plot events, character states, relationship edges, secrets/power-state facts, unresolved threads, and ready-to-watch anchors. If coverage is weak, the product should downgrade to a short safe recap or say it does not have enough verified facts yet.

This creates the long-term moat: not "more AI recap," but a trusted data layer that can answer, "What can this viewer safely know right now?"
