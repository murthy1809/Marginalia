# Product Decision Log

## Decision 1: Rescope From Books To TV

**Decision:** Move the prototype from fantasy book-series recaps to serialized TV shows.

**Why:** TV has clearer season/episode boundaries, easier metadata structure, stronger return-after-gap behavior, and more public recap material for prototyping.

**Tradeoff:** TV recap competition is stronger, so the product cannot win by summarizing alone.

**Implication:** The differentiator must be precise story-state restoration.

## Decision 2: Use The Boys As The MVP Show

**Decision:** Seed *The Boys* as the only fully authored recap in v1.

**Why:** The Season 4 to Season 5 boundary has high relationship and power-state complexity: Homelander's political control, Butcher's condition, Ryan's allegiance, Neuman's fate, Soldier Boy's status, A-Train's exposure, Annie's escape, and The Boys being split or captured.

**Tradeoff:** The prototype is narrower than a general TV recap tool.

**Implication:** The demo shows depth and judgment instead of broad but shallow coverage.

## Decision 3: Manual Boundary Selection Before Watch-History Sync

**Decision:** Let users choose season and last-watched episode manually.

**Why:** The core risk is whether bounded story-state recap is useful and trustworthy. Watch-history sync adds integration complexity before proving the value proposition.

**Tradeoff:** Manual input is less seamless than Trakt, TV Time, or platform playback sync.

**Implication:** Sync can become a later activation improvement, not an MVP dependency.

## Decision 4: Structured Artifacts Instead Of Video

**Decision:** Use recap blocks, timeline, relationship graph, status cards, secrets table, and checklist instead of generated video.

**Why:** Inspectability matters. Users need to scan, verify, skip, and report specific wrong details.

**Tradeoff:** Video could feel more native to TV and more entertaining.

**Implication:** Marginalia competes on trust and precision, not production value.

## Decision 5: Disable Unsupported Shows

**Decision:** Show unsupported shows as visible but not recap-ready.

**Why:** Generating a weak recap from sparse facts would damage trust. An honest "coming soon" state is better than confident fabrication.

**Tradeoff:** The product feels less complete.

**Implication:** Quality threshold becomes part of the product experience.

## Decision 6: Separate Static UI Eval From Generated Output Eval

**Decision:** Evaluate the authored UI and the prompt-generated outputs separately.

**Why:** A polished static prototype can prove the experience, but it cannot prove the generation path. The generated-output eval tests whether the system can produce bounded artifacts from supplied facts.

**Tradeoff:** Two eval tracks create more work and a more nuanced story.

**Implication:** The result is clearer: UI is strong; generation needs better bounded data coverage.

## Decision 7: Treat Metadata As A Spoiler Surface

**Decision:** Avoid future episode titles, future-season labels, thumbnails, cast/status leaks, and meta-spoiler language.

**Why:** Competitive research showed that spoiler trust breaks through metadata, not only recap paragraphs.

**Tradeoff:** The UI has to be more restrained than typical entertainment products.

**Implication:** Boundary safety applies to every screen, label, edge, and affordance.
