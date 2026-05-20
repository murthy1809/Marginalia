# Prototype Walkthrough

## User Scenario

A viewer finished *The Boys* Season 4, waited long enough to lose detail, and wants to start Season 5 without rewatching the whole season or accidentally seeing future spoilers.

## Journey

### 1. Landing

The landing page frames Marginalia as spoiler-safe catch-up for returning viewers. The hero does not sell generic AI summarization. It names the actual job: rebuild the story state at the episode where the viewer stopped.

User out: clicks `Try with The Boys`.

### 2. Demo Login

The demo login removes account setup and drops the user into a seeded profile. This keeps the prototype focused on the product question instead of onboarding mechanics.

User out: enters the pre-populated bookshelf.

### 3. Bookshelf

The bookshelf shows multiple serialized shows, but only *The Boys* is recap-ready. Other shows remain visible as future coverage, with disabled CTAs.

Product reason: unsupported shows should not generate thin or invented recaps. Refusing to fabricate is part of the trust model.

User out: clicks `Catch me up before S05E01`.

### 4. Boundary Selection

The recap screen lets the viewer set season and last-watched episode. Episode dropdowns use episode codes, avoiding accidental exposure to future episode titles.

Product reason: the boundary is not just a filter. It is the core contract.

User out: confirms watched-through boundary.

### 5. Boundary Banner

The persistent banner states what is known through the selected episode and excludes the next episode or later.

Product reason: spoiler trust needs to be visible at the moment the user is reading, not hidden in settings or marketing copy.

### 6. Previously On / Episode Timeline

The season summary gives fast orientation. The episode timeline restores sequence and explains why each episode matters. If the viewer changes the boundary, summaries and timeline content filter down to the selected point.

Product reason: prose summary is necessary but not sufficient. It helps the viewer remember how the story arrived at the current state.

### 7. Story-State Map

The relationship map lets the viewer inspect typed relationships such as ally, enemy, family, control, betrayal, threat, and unknown. The graph view supports quick pattern recognition; the table view gives a more inspectable fallback.

Product reason: this is the differentiator. Returning viewers often forget the relationship graph more than the headline plot.

### 8. Character Status

Character cards summarize state, motivation, knowledge, and risk. This turns "what happened?" into "where does each person stand now?"

Product reason: character state is what the viewer needs when the next episode opens.

### 9. Secrets and Power State

The secrets/power table captures high-impact facts and why they matter. For *The Boys*, that includes political control, exposed identities, captured team members, unstable alliances, and unresolved threats.

Product reason: serialized TV often runs on asymmetric knowledge. A normal recap buries that inside plot paragraphs.

### 10. Ready-to-Watch Checklist

The checklist turns recap consumption into a readiness state. The desired outcome is not "read everything." It is "I can press play now."

Product reason: this maps directly to the North Star metric: spoiler-safe recap completions that lead to starting the next episode.

### 11. Exit Survey

The survey asks whether anything felt spoiled, wrong, made up, or useful.

Product reason: spoiler leaks and wrong story-state edges are trust failures. They need to be measured explicitly, not inferred from engagement alone.
