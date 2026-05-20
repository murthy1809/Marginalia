# Generated Recap Eval Run - 2026-05-20

- Evaluation target: **AI-generated recap outputs**
- Generator: **Codex using `product-prompt.md`**
- Judge: **Codex rubric review**
- Artifact set: `Marginalia/tv-shows/03-prd-and-evals`
- Test cases: **7**
- Errors: **0**
- Overall equal-weight score: **4.49 / 5**

## Method

For each TV test case, the generator used only:

- `show`
- `last_watched`
- `next_episode`
- `user_note`
- `known_source_facts`

The generator did not use the ground-truth fields as input. The outputs were then judged against `rubric.json` and `thresholds.json`.

This is different from the static prototype eval. The static prototype eval checks the authored UI. This generated eval checks whether the prompt can produce bounded recap artifacts from supplied facts.

## Per-Criterion Averages

| Criterion | Avg | N | Weight |
|---|---:|---:|---|
| spoiler_boundary | 5.00 | 7 | Critical |
| hallucination_grounding | 4.71 | 7 | Critical |
| story_state_correctness | 4.71 | 7 | Critical |
| structural_completeness | 4.14 | 7 | High |
| watch_readiness | 3.86 | 7 | High |

## Per-Case Results

| ID | Difficulty | Status | spoiler_boundary | hallucination_grounding | story_state_correctness | structural_completeness | watch_readiness |
|---|---|---|---:|---:|---:|---:|---:|
| easy-01-the-boys-s4-finale | easy | pass | 5 | 4 | 4 | 5 | 5 |
| easy-02-the-boys-s3-return | easy | pass | 5 | 4 | 4 | 5 | 5 |
| realistic-01-the-boys-season-five-prep | realistic | pass | 5 | 5 | 5 | 5 | 5 |
| realistic-02-unsupported-show-no-fabrication | realistic | pass-with-limited-value | 5 | 5 | 5 | 2 | 1 |
| hard-01-the-boys-user-note-season-five-leak | hard | pass | 5 | 5 | 5 | 5 | 5 |
| hard-02-the-boys-sparse-facts | hard | partial | 5 | 5 | 5 | 2 | 2 |
| adversarial-01-season-five-leak-probe | adversarial | pass | 5 | 5 | 5 | 5 | 4 |

## Findings

1. **Spoiler boundary passed across all seven cases.** The adversarial prompt asking for Season 5 outcomes was ignored.
2. **The generated outputs are more conservative than the static prototype.** When facts are missing, the output says so instead of fabricating a full recap.
3. **Structural completeness drops when source facts are absent or sparse.** The House of the Dragon case correctly stops after the boundary line, but that means it cannot satisfy the full recap structure.
4. **Sparse facts expose the real product risk.** The model can stay spoiler-safe and grounded, but it cannot produce a rich power map from four facts without either becoming thin or inventing.
5. **Some relationship labels are lossy.** The product prompt's allowed edge types do not include `control`, `betrayal`, or `threat`, so some generated map edges use `unknown` or broad `conflict`. That hurts story-state precision even when the facts are safe.

## Root-Cause Notes

- **easy-01-the-boys-s4-finale:** Scored 4 on grounding and story-state correctness because the output says Soldier Boy is "connected to Homelander" and uses a family edge without the supplied facts explicitly saying biological father in this case. The static app knows that, but this generated case's allowed facts do not.
- **easy-02-the-boys-s3-return:** Scored 4 on grounding and story-state correctness because the output infers a few power-state relationships, such as Neuman's relation to Homelander's public rise, from nearby facts rather than explicit supplied facts.
- **realistic-02-unsupported-show-no-fabrication:** Correctly refuses to fabricate, but structural completeness and watch readiness are low because the user receives no usable recap.
- **hard-02-the-boys-sparse-facts:** Correctly stays bounded, but the result is too thin to satisfy a "full power map" request.
- **adversarial-01-season-five-leak-probe:** Passes the spoiler test, but watch readiness scores 4 because it does not fully answer captured team member status beyond "split or captured."

## Threshold Read

This run lands in **iterate**, not ship.

Why:

- `spoiler_boundary` passes at 5/5 on 100% of cases.
- `hallucination_grounding` and `story_state_correctness` average above 3.5, but not all cases score 5/5.
- `watch_readiness` average is **3.86**, which falls into the iterate band.

## Product Implication

The prompt is good at refusing spoilers and avoiding fabrication. The weak spot is completeness under sparse or unsupported data. The next product move is not "make the model more confident"; it is to improve the data strategy:

- require minimum fact coverage before generating full modules,
- add richer bounded facts for relationship labels,
- expand allowed edge types to match the PRD (`control`, `betrayal`, `threat`),
- keep the "insufficient facts" fallback for unsupported shows.
