# Marginalia TV - Competitive Analysis

**Date:** 2026-05-19
**Market:** TV recap, episode guide, watch tracking, and spoiler-safe return-to-show experiences.

## Executive Summary

The competitive landscape validates the problem but raises the bar. "AI recap for TV" is no longer a differentiated product idea: Prime Video, Recap-TV, BrieflySeries, and SeriesSync already offer or claim AI-powered spoiler-aware recaps. The sharper whitespace is **episode-bounded story-state restoration**: a product that helps returning viewers understand relationships, secrets, allegiances, unresolved threads, and current character state at the exact point they stopped.

Marginalia TV should not position itself as another summary generator. It should position around:

> "Know exactly what you are allowed to know before the next episode."

## Competitor Set

### Direct AI / Recap Products

1. **Prime Video X-Ray Recaps / Video Recaps**
2. **Recap-TV**
3. **BrieflySeries**
4. **SeriesSync**

### Substitute Products

5. **YouTube recap creators**
6. **Streaming platform 'Previously On' clips**
7. **Fandom / Wikipedia / IMDb episode pages**

### Adjacent Tracking Products

8. **TV Time**
9. **Trakt**
10. **TVMaze / TMDB / metadata APIs**

## Feature Comparison Matrix

| Product / Category | Primary Job | Spoiler Boundary | Recap Format | Progress Tracking | Story-State Depth | Main Strength | Main Gap vs. Marginalia TV |
|---|---|---:|---|---:|---:|---|---|
| Prime Video X-Ray Recaps | Resume Prime Video shows | Strong, context-aware; claims minute-level | Text snippets; episode/season/current progress | Native to Prime Video | Medium | Deep platform context, exact playback position | Locked to Prime catalog; not a cross-show independent product; unclear relationship/secret mapping |
| Prime Video Video Recaps | Catch up before new season | Season-level; beta for select originals | AI-generated video with narration/dialogue/music | Native to Prime Video | Medium | Best-integrated "press play next" flow | Select catalog only; early accuracy issues reported; video format is harder to inspect |
| Recap-TV | Generate selected episode/season summaries | Episode/season range selected by user | AI-generated prose | No meaningful watch history | Low-Medium | Broad TVMaze-powered coverage and custom ranges | Mostly plot summary; no relationship graph, secret map, or ready-to-watch state |
| BrieflySeries | Track shows and get season recaps | Season-level, "spoiler-aware" | AI-written text + text-to-speech audio | Follow shows and reminders | Medium | Combines tracking, reminders, and audio recap | Season-level rather than exact story-state; tone leans entertainment over precision |
| SeriesSync | Track shows and get spoiler-free AI recaps | Claims spoiler-free mode and last-episode summary | AI episode recap + character refresher | Trakt import; show tracking | Medium | Closest indie competitor; combines tracking, AI recaps, character refresher | Still appears summary-led; no explicit relationship/secret/state artifact |
| YouTube recap creators | Fast catch-up before new season | Creator-dependent, weakly enforceable | Video essay / recap | None | Medium-High when creator is good | Familiar, high-production, search-discoverable | Spoiler risk from titles, thumbnails, comments, recommendations; no personalized boundary |
| Streamer "Previously On" clips | Immediate pre-episode refresh | Usually safe for current episode, but not user-controlled | Short video montage | Native playback | Low-Medium | Zero friction once available | Too short, not always discoverable, not enough after multi-year gaps |
| Fandom / Wikipedia / IMDb | Look up plots, characters, episodes | Weak; no user-specific last-watched boundary | Text encyclopedia / episode pages | None | High detail | Deep information, strong search coverage, episode-by-episode source material | Users avoid it because search snippets, infoboxes, sidebars, future episode links, actor pages, and character status fields can spoil later events; high synthesis burden |
| TV Time | Track and discuss shows | Community spoiler norms, not recap-first | Tracking + reactions/community | Strong | Low | Social tracking at scale | Does not solve bounded recap/story-state restoration |
| Trakt | Track watched progress and next episodes | Not recap-first | Tracking, lists, API/scrobbling | Strong | Low | Best-in-class watch history/progress infrastructure | Utility layer, not a recap comprehension layer |
| TVMaze / TMDB APIs | Metadata infrastructure | N/A | Episode metadata, summaries, cast | N/A | Low | Useful data foundation | Not user-facing recap product; source data alone insufficient |

## Key Competitor Notes

### Prime Video X-Ray Recaps

Amazon is the most important competitor signal because it validates the job at platform scale. Prime Video says X-Ray Recaps generates summaries for full seasons, individual episodes, and pieces of episodes, personalized to the viewer's exact watching point. Amazon frames the problem as users forgetting where they left off and says guardrails are applied for spoiler-free summaries.

Source: [Amazon - X-Ray Recaps](https://www.aboutamazon.com/news/entertainment/amazon-prime-video-x-ray-recaps/)

**Implication:** The market is moving toward context-aware, playback-position-aware recaps. Marginalia TV cannot win on "spoiler-free AI summaries" alone.

**Weakness / gap:** Amazon's feature is native to Prime Video and its supported catalog. It does not appear to focus on relationship maps, "who knows what," or viewer-controlled cross-platform watch history.

### Prime Video Video Recaps

Amazon also launched Video Recaps in beta for select Prime Originals in the U.S. The feature uses AI to summarize key plot points with narration, dialogue, and music, and appears when a user navigates to the next season of a supported series.

Source: [Amazon - Video Recaps](https://www.aboutamazon.com/news/entertainment/ai-plot-summary-video-recaps-prime-video/)

**Implication:** Video recap is a natural platform-level feature. Streamers with rights to clips can offer a richer recap format than an independent app.

**Weakness / gap:** Early reporting suggests quality risk. Engadget reported Amazon removed an AI-generated *Fallout* recap after viewers found factual errors.

Source: [Engadget - Amazon pulls bad AI video recaps](https://www.engadget.com/entertainment/streaming/amazon-pulls-its-bad-ai-video-recaps-after-fallout-fallout-220358758.html)

**Product lesson:** Accuracy and trust are not implementation details; they are the core product risk.

### Recap-TV

Recap-TV lets users search a show and select a single episode, season, or custom episode range. It explicitly claims summaries cover only selected episodes and do not include future spoilers. It uses TVMaze data and positions around catching up quickly.

Source: [Recap-TV](https://recap-tv.com/en)

**Implication:** Custom episode ranges are table stakes for an independent recap product.

**Weakness / gap:** The experience appears plot-summary-first. It does not visibly solve the "restore my mental model" problem: relationships, secrets, current status, and unresolved threads.

### BrieflySeries

BrieflySeries combines show tracking, season reminders, AI-written season recaps, and text-to-speech audio. It is powered by TVMaze and says recaps cover character arcs, major twists, and cliffhangers.

Source: [BrieflySeries](https://www.brieflyseries.com/)

**Implication:** "Catch up in minutes" plus reminders is already claimed. Audio is a useful mode for pre-watch contexts like commuting or cooking.

**Weakness / gap:** The product is season-level and recap-led. It does not visibly support exact episode-level boundaries, user-specific stop points, or inspectable structured artifacts.

### SeriesSync

SeriesSync is the closest indie competitor found in this scan. It combines tracking, Trakt import, AI recaps, "character refresher," and spoiler-free mode. It says recaps are powered by Claude AI and claims zero spoilers.

Source: [SeriesSync](https://www.seriessync.net/)

**Implication:** Marginalia TV's concept is not alone. There is real competitive pressure from small AI-native products.

**Weakness / gap:** The positioning mixes taste twins, discovery, tracking, and recaps. Marginalia TV can stay narrower and deeper: return-to-show comprehension, exact boundary, story-state artifacts.

### YouTube Recap Creators

YouTube is a major behavioral substitute. Reddit users already recommend "just watch recap on YT." For popular shows, YouTube creators often have better pacing, voice, visuals, and fan context than generic AI prose.

**Implication:** The product has to beat YouTube on trust and precision, not entertainment value.

**Weakness / gap:** YouTube has weak spoiler control. Titles, thumbnails, comments, recommendations, and creator assumptions can all reveal future events.

### Streaming "Previously On" Clips

These clips are convenient, native, and rights-cleared, but often too short for long gaps. The research found repeated complaints that after two- or three-year breaks, short montages are insufficient.

Source: [The Ringer - Long breaks between seasons](https://www.theringer.com/2025/01/17/tv/long-breaks-between-tv-seasons-streaming-severance-squid-game-strikes/)

**Implication:** Marginalia TV should not pretend users need a full replacement for official recaps. It should fill the gap before/around them: structured memory restoration.

### Fandom / Wikipedia / IMDb

These are deep reference sources and often rank high in search. They solve lookup but not bounded recall. Fan wikis may have spoiler policies, but the risk remains: character pages, episode pages, sidebars, future cast info, and wiki navigation can expose future events.

Supporting source: [Avoiding Spoilers in Fan Wikis of Episodic Fiction](https://arxiv.org/abs/1506.06279)

**Implication:** "Wiki-level detail without wiki spoiler risk" is a useful positioning line, but the product must avoid becoming a general-purpose encyclopedia.

#### Why General Users Do Not Just Use Wikis

The core issue is not that wikis lack information. It is that wikis place the burden of spoiler filtering, sequencing, and synthesis on the viewer.

For a returning viewer, the wiki workflow has five failure modes:

1. **Search-result spoilers before the click.** A user may search a harmless character, location, or term and see future-state details in the search snippet.
2. **Character-page spoilers.** Infoboxes, aliases, real names, death status, allegiances, family relationships, and "current status" fields often collapse an entire future arc into the top of a page.
3. **Navigation spoilers.** Sidebars, related pages, future episode titles, future season links, recommended articles, and images can reveal what exists later even if the current page is bounded.
4. **No personal boundary.** A wiki rarely asks, "What is the last episode you watched?" It is organized around the canon as a whole, not the user's current knowledge state.
5. **High synthesis cost.** The user must open many pages, avoid reading ahead, extract what matters, and convert raw detail into a ready-to-watch mental model.

The *The Boys* Fandom pages show the product risk clearly: even a Season One page contains global navigation that links into later seasons, including Season Five. That does not mean the source is unusable for research or seeding a prototype. It means the consumer experience is not safe enough for bounded recap.

**Product implication:** Marginalia TV should use wiki-like depth as an input, but not expose wiki-like navigation as the experience. The output should be a compressed, episode-bounded, viewer-specific recap with explicit provenance and no future-season UI surfaces.

### TV Time

TV Time is a large tracking and community product. It emphasizes tracking what users watch, reacting with others, and avoiding the chaos of fragmented viewing. It acknowledges spoiler sensitivity in its own origin story.

Source: [TV Time](https://www.tvtime.com/about)

**Implication:** Community and watch tracking are real adjacent needs, but they are not the MVP. Community increases spoiler risk.

### Trakt

Trakt is infrastructure for watch history, progress, lists, recommendations, and scrobbling. It supports many apps and can sync watched history from major streaming services for VIP users.

Source: [Trakt apps](https://trakt.tv/apps)

**Implication:** Trakt is more partner/integration opportunity than direct recap competitor. Long-term, Marginalia TV could import watch history rather than asking users to manually set a stop point.

### TVMaze

TVMaze provides free API access to show search, episodes, seasons, cast, guest cast, schedules, and images under CC BY-SA attribution requirements.

Source: [TVMaze API](https://www.tvmaze.com/api)

**Implication:** TVMaze can support prototype metadata and episode selection. It will not, by itself, provide enough relationship/secret/story-state grounding for high-quality recaps.

## Competitor Critiques From Users and Forums

These quotes are qualitative signals from Reddit/forum-like surfaces. They are not a representative sample, but they show where existing alternatives break down for users.

| Competitor / Substitute | User Critique | What It Signals | Implication for Marginalia TV |
|---|---|---|---|
| Prime Video X-Ray | "X-Ray contains SPOILERS and it's horrible." Source: [Reddit](https://www.reddit.com/r/AmazonPrimeVideo/comments/1cm6kl1) | A native platform feature can still violate spoiler trust when metadata reveals future character states. | Do not show future names, relationship labels, thumbnails, or aliases. Treat metadata as a spoiler surface. |
| Prime Video X-Ray | A *Mad Men* viewer said X-Ray displayed a future married name "several episodes before" the relationship happened. Source: [Reddit](https://www.reddit.com/r/AmazonPrimeVideo/comments/1cm6kl1) | Character metadata can leak future relationships even without plot prose. | Relationship/status data must be boundary-aware, not just recap text. |
| Prime Video X-Ray | "This must be fixed - it makes us lose trust in X-Ray." Source: [Reddit](https://www.reddit.com/r/AmazonPrimeVideo/comments/1cm6kl1) | Spoiler leaks break trust in the entire feature, not just one card. | Add explicit boundary banner and feedback affordance for spoiler leak reporting. |
| Prime Video X-Ray | "There is not way to turn it off." Source: [Reddit](https://www.reddit.com/r/movies/comments/y4cnso) | Forced overlays can create anxiety and reduce control. | Marginalia should be user-initiated, not auto-intrusive. |
| Prime Video AI Video Recaps | "That was fucking awful." Source: [Reddit](https://www.reddit.com/r/technology/comments/1pr9q1c) | AI recap quality failures are visible and memorable. | Accuracy is the core product risk; use evals and inspectable artifacts. |
| Prime Video AI Video Recaps | "Made me question if I ever finished the first season." Source: [Reddit](https://www.reddit.com/r/technology/comments/1pr9q1c) | Wrong recaps can create more confusion than no recap. | The product should increase confidence, not just output content. |
| Prime Video AI Video Recaps | "I thought I was losing my mind watching that recap lol." Source: [Reddit](https://www.reddit.com/r/technology/comments/1pr9q1c) | Users may blame their memory before blaming the recap. | Provide provenance: episode where a claim was established. |
| Generic ChatGPT recaps | "Tried a few times to have Chat GPT recap tv shows and it always gets it wrong." Source: [Reddit](https://www.reddit.com/r/ChatGPT/comments/12bkihx) | Generic LLM recall is not reliable enough for recap products. | Grounding strategy matters more than model choice. |
| YouTube recap channels | "Recaps are nice when you want to watch a sequel but don't have time to sit and rewatch an entire movie or tv series." Source: [Reddit](https://www.reddit.com/r/youtube/comments/1jio4wl) | YouTube validates demand for compressed catch-up. | Compete on boundary trust and personalization, not entertainment. |
| YouTube AI recap channels | "I'd unironically pay for a filter that removes AI-based videos from youtube." Source: [Reddit](https://www.reddit.com/r/NonPoliticalTwitter/comments/1hoig6r) | Low-quality AI recap spam creates negative sentiment. | Marginalia should look and behave like a trustworthy product, not content sludge. |
| TV Tropes / recap wikis | "All spoilers in these pages will be unmarked as per policy." Source: [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/ReCap) | Some recap/reference sources explicitly do not protect users from spoilers. | Strong opening for "wiki-level recall without wiki spoiler risk." |
| Fandom / fan wikis | "WHATEVER YOU DO, AVOID THE WIKI." Source: [Reddit](https://www.reddit.com/r/attackontitan/comments/gk3o1d) | Users know fan wikis can spoil through search snippets and seemingly harmless lookups. | Do not make users search across pages; ask for last watched episode and return only bounded content. |
| Fandom / fan wikis | "Browsing wikis for shows and games you haven't watched expecting not to get spoiled is like walking through a minefield." Source: [Reddit](https://www.reddit.com/r/CharacterRant/comments/11hvz69) | Wiki pages can leak future state through infoboxes, real names, allegiances, living status, and side modules. | Treat metadata as a spoiler surface; boundary-check characters, relationships, labels, and images. |
| Wikipedia / actor pages | A viewer said an actor's Wikipedia page revealed a TV character's true identity from source material. Source: [Reddit](https://www.reddit.com/r/rant/comments/1qpfuly/i_just_got_spoiled_the_identity_of_a_tv_show/) | Even non-character lookup paths can expose adaptation spoilers. | Avoid cast/actor pages as user-facing recap surfaces; keep source use behind a bounded layer. |
| Fan wiki tooling | A user described wanting a tool where they enter the last episode watched before wiki content appears. Source: [Reddit](https://www.reddit.com/r/AskProgramming/comments/zse3lr) | The user need is explicitly episode-bounded wiki behavior. | Marginalia can own this job: wiki-scale detail, filtered to a viewer's last watched boundary. |
| TV Time / tracking apps | A user said TV Time "only working like half the time." Source: [Reddit](https://www.reddit.com/r/trakt/comments/1oqvwc1) | Watch trackers can be unreliable or insufficient as a comprehension tool. | Manual episode selection is acceptable for MVP; tracking integration can come later. |
| TV tracking apps | "Nearly impossible to find a good TV tracking app/service." Source: [Reddit](https://www.reddit.com/r/TVTime/comments/1jlr0eo) | Users experience fragmented tracking workflows across apps. | Avoid making tracking the first product wedge; solve recall first. |
| Trakt | "Trakt is the absolute worst at managing the chronology of shows that include specials." Source: [Reddit](https://www.reddit.com/r/TVTime/comments/1jlr0eo) | Episode chronology and specials can break resume workflows. | Boundary model must handle specials, bonus episodes, and nonstandard ordering eventually. |
| Trakt integrations | "I'll watch an episode and it won't register as watched." Source: [Reddit](https://www.reddit.com/r/Addons4Kodi/comments/1qwu7lq/trakt_keeps_stopping_tracking_episodes/) | Watch-history sync can fail in third-party ecosystems. | Do not depend on scrobbling accuracy for MVP. |
| Trakt redesign / beta | "Most of the functionality that I utilize is missing." Source: [Reddit](https://www.reddit.com/r/trakt/comments/1oqvwc1) | Power users care about small workflow features. | Keep MVP narrow; avoid broad tracker scope creep. |
| Indie AI recap tools | Little public user critique found for Recap-TV, BrieflySeries, or SeriesSync in this scan. Sources: [Recap-TV](https://recap-tv.com/en), [BrieflySeries](https://www.brieflyseries.com/), [SeriesSync](https://www.seriessync.net/) | These products appear early or low-discussion, so direct user sentiment is sparse. | Evaluate them hands-on later; do not assume lack of complaints means strong product-market fit. |

### Critique-Level Takeaways

1. **Spoiler trust breaks on metadata, not only summary text.** Prime X-Ray critiques show that character names, relationship labels, and UI overlays can leak future state.
2. **Wrong AI recaps are worse than useless.** Users can leave more confused, questioning their own memory.
3. **Tracking is adjacent, not the core job.** TV Time and Trakt solve "where am I?" more than "what do I need to remember?"
4. **YouTube is a strong substitute but has weak boundary control.** It wins on convenience and entertainment, but not precise personalization.
5. **Wikis are rich but unsafe for bounded recall.** The risk is not just plot prose; search snippets, infoboxes, actor pages, sidebars, future episode names, and related links can all leak future state.
6. **The indie AI recap space is early.** Public critique is sparse, so hands-on benchmarking is necessary before claiming superiority.

## Competitive Dimensions That Matter

### 1. Boundary Precision

Most competitors use show, season, or episode ranges. Prime Video goes further with exact playback context. Marginalia TV should support episode-level boundaries in MVP and keep timestamp-level as a future differentiator.

### 2. Spoiler Trust

Competitors claim spoiler-free output, but users experience spoiler risk across the surrounding surface: thumbnails, titles, comments, future episode names, wiki navigation, and platform promos.

Marginalia TV should treat the entire interface as a spoiler surface, not only the recap text.

### 3. Story-State Depth

This is the main whitespace. Existing tools usually produce summaries. Marginalia TV should produce structured memory artifacts:

- Character status
- Relationship map
- Secrets and who knows them
- Faction/allegiance shifts
- Unresolved threads
- Ready-to-watch checklist

### 4. Inspectability

AI video recaps are emotionally richer but harder to inspect. A structured text/diagram recap lets the user scan, verify, and skip sections. For a portfolio prototype, inspectability is a strength.

### 5. Watch-History Integration

Trakt and TV Time own tracking. Prime owns native playback state. Marginalia TV can start manual, then integrate later.

### 6. Accuracy / Grounding

Amazon's reported *Fallout* recap issue shows that recap correctness can fail publicly and damage trust. Marginalia TV's eval strategy should make factual correctness and boundary control first-class.

## Positioning Map

### Axis 1: Generic Summary -> Story-State Restoration

- Generic Summary: Recap-TV, IMDb, Wikipedia episode pages, many YouTube recaps.
- Story-State Restoration: Marginalia TV target position.

### Axis 2: Broad Convenience -> Precise Spoiler Trust

- Broad Convenience: YouTube, Fandom, TV Time, generic search.
- Precise Spoiler Trust: Prime X-Ray Recaps inside Prime catalog; Marginalia TV target position cross-platform.

Target quadrant:

> **Precise spoiler trust + story-state restoration**

## Whitespace Analysis

### Whitespace 1: "Who knows what?" as a first-class artifact

Mystery and prestige shows often hinge on asymmetric knowledge. Existing recap tools rarely expose this directly.

Example product module:

| Secret / Fact | Who knows | Who does not know | Established by |
|---|---|---|---|

### Whitespace 2: Relationship and allegiance state, not just plot

Long-gap viewers need to remember the network: ally, enemy, romantic tension, betrayal, dependency, blackmail, family, workplace hierarchy.

Example product module:

Typed relationship graph bounded to the last watched episode.

### Whitespace 3: Ready-to-watch checklist

The final product outcome is not "read a recap." It is "I feel ready to press play." Most competitors do not turn recap content into a concise readiness state.

Example product module:

5-8 bullets: "Remember this before S02E01."

### Whitespace 4: Cross-platform boundary control

Prime can know playback position, but only for Prime. Recap-TV and BrieflySeries are broader but less personalized. Marginalia TV can start manual and later integrate Trakt/TV Time.

### Whitespace 5: Quality transparency

AI recap competitors claim spoiler-free results, but few expose why a claim is included or how it was bounded. Marginalia TV can add provenance:

- Episode where this was established
- "Known through S01E09"
- User-report affordance for wrong/fabricated edges

## Strategic Recommendation

### Do Not Build

- A generic "AI TV recap" app.
- A YouTube-style recap video competitor.
- A broad TV tracker as the first product.
- A fandom/wiki replacement.

### Build

An episode-bounded story-state recap for complex serialized shows:

1. Select show.
2. Select last watched episode.
3. See exact spoiler boundary.
4. Review character status, relationships, secrets, and unresolved threads.
5. Click "I'm ready for the next episode."

### MVP Show Recommendation

Start with **Severance through Season 1**.

Why:

- Strong long-gap user pain.
- High spoiler anxiety.
- Story depends on identity, secrets, and knowledge boundaries.
- Relationship/status map is meaningfully better than a plot-only recap.
- Prime/Apple-style platform recaps do not solve cross-platform, inspectable story-state restoration.

## Product Design Implication

The PRD should frame the product around this JTBD:

> Viewers returning to a serialized TV show after a long gap are trying to reconstruct the current story state before watching the next episode without rewatching prior episodes or seeing spoilers from later episodes.

The riskiest assumption:

> Marginalia TV only works if it can produce episode-bounded story-state artifacts that reveal nothing from later episodes, fabricate no events or relationships, and accurately represent who knows what as of the user's stopping point.

## Source List

- [Amazon - Prime Video Video Recaps](https://www.aboutamazon.com/news/entertainment/ai-plot-summary-video-recaps-prime-video/)
- [Amazon - Prime Video X-Ray Recaps](https://www.aboutamazon.com/news/entertainment/amazon-prime-video-x-ray-recaps/)
- [Engadget - Amazon pulls bad AI video recaps](https://www.engadget.com/entertainment/streaming/amazon-pulls-its-bad-ai-video-recaps-after-fallout-fallout-220358758.html)
- [Recap-TV](https://recap-tv.com/en)
- [BrieflySeries](https://www.brieflyseries.com/)
- [SeriesSync](https://www.seriessync.net/)
- [TV Time](https://www.tvtime.com/about)
- [Trakt apps](https://trakt.tv/apps)
- [TVMaze API](https://www.tvmaze.com/api)
- [The Ringer - Long breaks between seasons](https://www.theringer.com/2025/01/17/tv/long-breaks-between-tv-seasons-streaming-severance-squid-game-strikes/)
- [Avoiding Spoilers in Fan Wikis of Episodic Fiction](https://arxiv.org/abs/1506.06279)
- [Reddit - Prime Video X-Ray contains spoilers](https://www.reddit.com/r/AmazonPrimeVideo/comments/1cm6kl1)
- [Reddit - Prime Video X-Ray feature critique](https://www.reddit.com/r/movies/comments/y4cnso)
- [Reddit - Amazon pulls error-filled Fallout AI recap discussion](https://www.reddit.com/r/technology/comments/1pr9q1c)
- [Reddit - ChatGPT TV recaps get it wrong](https://www.reddit.com/r/ChatGPT/comments/12bkihx)
- [Reddit - YouTube recap channel discussion](https://www.reddit.com/r/youtube/comments/1jio4wl)
- [Reddit - AI recap/video spam complaint](https://www.reddit.com/r/NonPoliticalTwitter/comments/1hoig6r)
- [TV Tropes - Recap spoiler policy](https://tvtropes.org/pmwiki/pmwiki.php/Main/ReCap)
- [Reddit - Attack on Titan wiki spoiler warning](https://www.reddit.com/r/attackontitan/comments/gk3o1d)
- [Reddit - CharacterRant wiki spoiler discussion](https://www.reddit.com/r/CharacterRant/comments/11hvz69)
- [Reddit - Actor Wikipedia page spoiled TV character identity](https://www.reddit.com/r/rant/comments/1qpfuly/i_just_got_spoiled_the_identity_of_a_tv_show/)
- [Reddit - AskProgramming episode-bounded wiki idea](https://www.reddit.com/r/AskProgramming/comments/zse3lr)
- [The Boys Wiki - Season One page](https://the-boys.fandom.com/wiki/Season_One)
- [Reddit - TV Time / tracking app complaints](https://www.reddit.com/r/TVTime/comments/1jlr0eo)
- [Reddit - Trakt app critique](https://www.reddit.com/r/trakt/comments/1oqvwc1)
- [Reddit - Trakt tracking failure](https://www.reddit.com/r/Addons4Kodi/comments/1qwu7lq/trakt_keeps_stopping_tracking_episodes/)
