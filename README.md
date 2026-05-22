# Marginalia TV

Marginalia TV is a spoiler-safe story-state recap prototype for viewers returning to serialized TV shows after long gaps.

**Live demo:** [prototypemarginalia.netlify.app/app/recap/the-boys-s4-finale](https://prototypemarginalia.netlify.app/app/recap/the-boys-s4-finale)

**Executive Summary:** [Executive Summary](https://prototypemarginalia.netlify.app/marginalia-tv-executive-summary.html)

## Product Bet

Viewers do not only forget what happened. They lose the current story state: who has power, who knows the secret, who betrayed whom, who is captured, and what unresolved thread matters before the next episode.

Most recap products summarize plot. Marginalia TV tests a sharper product idea:

> Help viewers know exactly what they are allowed to know before the next episode.

## What The Prototype Shows

The current demo is seeded around *The Boys* after `S04E08`, before `S05E01`.

It includes:

- Episode-bounded spoiler banner
- Season recap and episode timeline
- Relationship/status map
- Character status cards
- Secrets and power-state table
- Ready-to-watch checklist
- Exit survey for spoiler leaks, wrong details, fabricated details, and readiness

## Why This Exists

Streaming gaps are long enough that viewers often return after months or years away. Current workarounds are fragmented:

- Rewatching full seasons takes too long.
- YouTube recaps are useful but cannot guarantee a viewer-specific spoiler boundary.
- Wikis contain rich information but leak future states through search snippets, sidebars, infoboxes, and links.
- Generic AI recaps can be wrong, which makes users question their own memory.

Marginalia TV focuses on story-state restoration instead of generic summarization.

## Product Artifacts

- [Executive summary HTML](https://prototypemarginalia.netlify.app/marginalia-tv-executive-summary.html)
- [Portfolio case study](05-product-design-story/portfolio-case-study.md)
- [Product design framing](05-product-design-story/product-design-framing.md)
- [Prototype walkthrough](05-product-design-story/prototype-walkthrough.md)
- [Decision log](05-product-design-story/decision-log.md)
- [Metrics and eval readout](05-product-design-story/metrics-and-eval-readout.md)

## Research And Evaluation

- [User research synthesis](01-research/tv-recap-user-research.md)
- [Competitive analysis](02-competitive-analysis/tv-recap-competitive-analysis.md)
- [PRD](03-prd-and-evals/marginalia-tv-prd.md)
- [Generated eval results](03-prd-and-evals/results.generated.md)
- [Rubric](03-prd-and-evals/rubric.json)
- [Test cases](03-prd-and-evals/test-cases.json)

Generated-output eval result:

- Overall score: **4.49 / 5**
- Spoiler boundary: **5.00 / 5**
- Hallucination grounding: **4.71 / 5**
- Story-state correctness: **4.71 / 5**
- Watch readiness: **3.86 / 5**

The eval showed the model could stay spoiler-safe, but sparse source facts reduced completeness. The next product move is not to make the model more confident. It is to improve the data strategy: structured, episode-bounded facts with coverage gates before generation.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS/Tailwind-style utility classes
- Static seeded data for the prototype

The deployable Next.js app lives at the repository root so Netlify/Vercel can auto-detect and build it. Product artifacts remain in the numbered folders.

## Run Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## What This Demonstrates

This project is a PM portfolio artifact showing:

- User research synthesis
- Competitive positioning
- PRD writing
- Prototype scoping
- AI product evaluation
- Tradeoff and non-goal definition
- Executive storytelling
- Data-quality strategy for grounded AI outputs

## Disclaimer

This is an unofficial product portfolio prototype. Marginalia TV is not affiliated with Amazon, Prime Video, Sony, *The Boys*, or any referenced show/IP. All referenced media properties belong to their respective owners.
