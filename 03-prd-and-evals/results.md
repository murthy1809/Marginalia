# TV Eval Run - 2026-05-20

- Evaluation target: **Marginalia TV prototype**
- Artifact set: `Marginalia/tv-shows/03-prd-and-evals`
- Test cases: **7**
- Executable against current static UI: **6**
- Not executable in current static UI: **1**
- Errors: **0**
- Overall executable weighted score: **4.93 / 5**

## Important Correction

This is the TV-show eval. The older book-series eval under `Marginalia/03-prd-and-evals` is not used here.

The current prototype is a seeded/static UI. It can be evaluated for boundary behavior, visible modules, story-state checkpoints, unsupported show behavior, and Season 5 leak resistance. It cannot yet run the sparse-facts generation test because there is no runtime input path for arbitrary `known_source_facts`.

## Per-Criterion Averages

| Criterion | Avg | N | Weight |
|---|---:|---:|---|
| spoiler_boundary | 5.00 | 6 | Critical |
| hallucination_grounding | 5.00 | 6 | Critical |
| story_state_correctness | 5.00 | 6 | Critical |
| structural_completeness | 4.83 | 6 | High |
| watch_readiness | 4.83 | 6 | High |

## Per-Case Results

| ID | Difficulty | Status | spoiler_boundary | hallucination_grounding | story_state_correctness | structural_completeness | watch_readiness |
|---|---|---|---:|---:|---:|---:|---:|
| easy-01-the-boys-s4-finale | easy | pass | 5 | 5 | 5 | 5 | 5 |
| easy-02-the-boys-s3-return | easy | pass | 5 | 5 | 5 | 5 | 5 |
| realistic-01-the-boys-season-five-prep | realistic | pass | 5 | 5 | 5 | 5 | 5 |
| realistic-02-unsupported-show-no-fabrication | realistic | pass | 5 | 5 | 5 | 4 | 4 |
| hard-01-the-boys-user-note-season-five-leak | hard | pass | 5 | 5 | 5 | 5 | 5 |
| hard-02-the-boys-sparse-facts | hard | not executable in static UI | n/a | n/a | n/a | n/a | n/a |
| adversarial-01-season-five-leak-probe | adversarial | pass | 5 | 5 | 5 | 5 | 5 |

## Notes By Case

- **easy-01-the-boys-s4-finale:** The S04E08 recap shows season summary, episode timeline, relationship map, character states, secrets/power state, and checklist. No Season 5 events are exposed.
- **easy-02-the-boys-s3-return:** Selecting S03E08 filters summaries and timeline before Season 4, and S03E08 story-state modules are available.
- **realistic-01-the-boys-season-five-prep:** The S04E08 state captures the required readiness anchors: Homelander/Calhoun power shift, Butcher with the virus, Ryan/Mallory, The Boys split/captured, Annie escape, A-Train exposure, and Soldier Boy alive in custody.
- **realistic-02-unsupported-show-no-fabrication:** Unsupported shows remain visible but disabled/coming soon. This prevents fabrication, but structural completeness and watch readiness score 4 because no full recap is available.
- **hard-01-the-boys-user-note-season-five-leak:** The current UI has no free-text user-note path, so it does not echo or act on Season 5 spoiler requests.
- **hard-02-the-boys-sparse-facts:** Not executable against the current prototype. This test requires a generation pipeline that accepts constrained `known_source_facts`; the static UI cannot run that input.
- **adversarial-01-season-five-leak-probe:** The prototype has no prompt-injection surface and no Season 5 outcome content.

## Threshold Read

The executable UI cases meet the threshold for spoiler boundary, hallucination grounding, story-state correctness, structural completeness, and watch readiness.

Full suite ship-read is **blocked** until the sparse-facts generation test can be run against an actual generation path. Current status: **UI prototype passes executable TV evals; generation eval remains untested.**
