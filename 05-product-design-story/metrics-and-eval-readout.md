# Metrics and Eval Readout

## North Star

Spoiler-safe recap completions that lead to the viewer clicking `I'm ready for Season 5`.

## Input Metrics

| Metric | What It Tests | Why It Matters |
|---|---|---|
| Activation | % of visitors who select a show and last-watched episode | Whether the user understands the entry point |
| Recap start | % of activated users who open a story-state recap | Whether the bookshelf and CTA convert |
| Completion | % who reach the ready-to-watch section | Whether the recap is scannable enough to finish |
| Interaction | % who use timeline, relationship filters, character cards, secrets, or checklist | Whether structured story-state artifacts add value |
| Continuation intent | % who click `I'm ready for Season 5` | Whether the product drives the actual job outcome |

## Guardrail Metrics

| Metric | Failure Mode |
|---|---|
| Reported spoiler leak rate | Future facts, titles, labels, images, or implications appear inside the boundary |
| Reported wrong relationship/status rate | The relationship map or character state is inaccurate |
| Reported fabricated detail rate | The recap invents an event, motivation, relationship, or secret |
| Drop-off before story-state map | The differentiator is too late, unclear, or not useful |
| Feedback mentions of confusion | The recap fails to increase confidence |

## Static UI Eval

The current authored/static prototype can be evaluated for visible modules, boundary behavior, seeded story-state accuracy, unsupported show handling, and Season 5 leak resistance.

| Criterion | Score |
|---|---:|
| Spoiler boundary | 5.00 / 5 |
| Hallucination grounding | 5.00 / 5 |
| Story-state correctness | 5.00 / 5 |
| Structural completeness | 4.83 / 5 |
| Watch readiness | 4.83 / 5 |
| Overall executable weighted score | 4.93 / 5 |

**Readout:** The UI prototype is portfolio-ready for the seeded *The Boys* scenario. It demonstrates the intended experience and passes executable boundary/trust checks.

**Limit:** One test case requiring arbitrary sparse source facts is not executable in the static UI because there is no runtime generation path.

## Generated Output Eval

The generated-output eval tested whether the product prompt could produce bounded recap artifacts using only show, last-watched episode, next episode, user note, and known source facts.

| Criterion | Score |
|---|---:|
| Spoiler boundary | 5.00 / 5 |
| Hallucination grounding | 4.71 / 5 |
| Story-state correctness | 4.71 / 5 |
| Structural completeness | 4.14 / 5 |
| Watch readiness | 3.86 / 5 |
| Overall equal-weight score | 4.49 / 5 |

**Readout:** The prompt is good at refusing spoilers and avoiding fabrication. The weak spot is completeness when the source facts are sparse or unsupported.

## Threshold Interpretation

Static UI: passes executable TV evals.

Generated path: iterate, not ship.

The product should not respond by making the model more assertive. It should improve the input facts and quality gates.

## Next Product Moves

1. Require minimum fact coverage before generating a full relationship map or secrets table.
2. Expand bounded source facts for relationship labels, knowledge holders, motivations, captures, and unresolved threats.
3. Align allowed edge types with the PRD: `ally`, `enemy`, `family`, `romantic`, `control`, `betrayal`, `threat`, and `unknown`.
4. Keep the insufficient-facts fallback for unsupported shows.
5. Add provenance at the claim level: episode or season where each relationship/status was established.
6. Run user testing with 10+ target viewers and compare Marginalia against a YouTube recap and a wiki lookup task.
