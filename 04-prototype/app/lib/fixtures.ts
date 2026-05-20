// Seeded data for the Marginalia TV prototype.
// No LLM calls at runtime. The demo is bounded at The Boys S04E08 and
// intentionally excludes Season 5 material.

export const TODAY = "2026-05-19";

export const ME = {
  name: "Murthy",
  initials: "M",
  email: "murthy@marginalia.demo",
} as const;

export type EdgeType =
  | "ally"
  | "enemy"
  | "family"
  | "romantic"
  | "control"
  | "betrayal"
  | "threat"
  | "unknown";

export const EDGE_TYPES: readonly EdgeType[] = [
  "ally",
  "enemy",
  "family",
  "romantic",
  "control",
  "betrayal",
  "threat",
  "unknown",
];

export type GraphNode = {
  id: string;
  name: string;
  /** Precomputed coords in an 800x500 SVG viewBox. Layout is deterministic. */
  x: number;
  y: number;
  /** 2-3 sentence character sketch, bounded at the watched-through episode. */
  sketch: string;
};

export type GraphEdge = {
  from: string;
  to: string;
  type: EdgeType;
  /** Short label rendered on hover. */
  label: string;
};

export type CharacterStatus = {
  name: string;
  state: string;
  motivation: string;
  risk: string;
};

export type SecretFact = {
  topic: string;
  whatToRemember: string;
  whyItMatters: string;
};

export type StoryState = {
  boundaryCode: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
  characterStatus: CharacterStatus[];
  secrets: SecretFact[];
  openQuestions: string[];
};

export type SeasonSummary = {
  season: number;
  title: string;
  bullets: string[];
};

export type EpisodeSummary = {
  season: number;
  episode: number;
  code: string;
  title: string;
  summary: string;
  whyItMatters: string;
};

export type Recap = {
  slug: string;
  series: string;
  platform: string;
  watchedThrough: string;
  nextEpisode: string;
  spoilerBoundary: string;
  sourceNote: string;
  seasonSummaries: SeasonSummary[];
  episodeSummaries: EpisodeSummary[];
  storyStates: Record<string, StoryState>;
  nodes: GraphNode[];
  edges: GraphEdge[];
  characterStatus: CharacterStatus[];
  secrets: SecretFact[];
  openQuestions: string[];
};

export type BookshelfRow = {
  slug: string;
  series: string;
  author: string;
  booksRead: string[];
  upNext: string;
  lastReadLabel: string;
  highlighted: boolean;
  recapAvailable: boolean;
};

export const BOOKSHELF: BookshelfRow[] = [
  {
    slug: "the-boys-s4-finale",
    series: "The Boys",
    author: "Prime Video",
    booksRead: ["S01", "S02", "S03", "S04"],
    upNext: "S05E01",
    lastReadLabel: "New season wait",
    highlighted: true,
    recapAvailable: true,
  },
  {
    slug: "house-of-the-dragon-s2",
    series: "House of the Dragon",
    author: "HBO / Max",
    booksRead: ["S01", "S02"],
    upNext: "S03E01",
    lastReadLabel: "Coming soon",
    highlighted: false,
    recapAvailable: false,
  },
  {
    slug: "attack-on-titan-final",
    series: "Attack on Titan",
    author: "Crunchyroll / Hulu",
    booksRead: ["S01", "S02", "S03"],
    upNext: "Final Chapters",
    lastReadLabel: "Dense mythology",
    highlighted: false,
    recapAvailable: false,
  },
  {
    slug: "stranger-things-s4",
    series: "Stranger Things",
    author: "Netflix",
    booksRead: ["S01", "S02", "S03", "S04"],
    upNext: "S05E01",
    lastReadLabel: "Long gap",
    highlighted: false,
    recapAvailable: false,
  },
];

const THE_BOYS_SEASON_SUMMARIES: SeasonSummary[] = [
  {
    season: 1,
    title: "Season 1 - Hughie enters the fight",
    bullets: [
      "Hughie's life is broken when A-Train kills Robin, pulling him into Butcher's anti-supe mission.",
      "Annie joins The Seven as Starlight and quickly learns Vought's public hero brand hides abuse, coercion, and cover-ups.",
      "The Boys expose pieces of Compound V, kill Translucent, and uncover how Vought manufactures both heroes and threats.",
      "Homelander emerges as the real center of danger: charming in public, murderous in private, and willing to create crises for Vought's agenda.",
      "The season ends with Butcher learning Becca is alive and raising Homelander's son, Ryan.",
    ],
  },
  {
    season: 2,
    title: "Season 2 - Stormfront and the Compound V backlash",
    bullets: [
      "The Boys are fugitives while Starlight works from inside The Seven to leak evidence about Compound V.",
      "Stormfront joins The Seven, becomes a public force, and pushes Homelander toward a more openly authoritarian base.",
      "Sage Grove reveals Vought is still experimenting on people and trying to stabilize Compound V in adults.",
      "Ryan becomes the emotional center of the Butcher, Becca, and Homelander conflict.",
      "Ryan accidentally kills Becca while stopping Stormfront, and Victoria Neuman is revealed as the secret head-popper behind public attacks.",
    ],
  },
  {
    season: 3,
    title: "Season 3 - Soldier Boy and the anti-supe weapon",
    bullets: [
      "The Boys operate closer to official channels, but Butcher and Hughie are pulled back into reckless anti-supe escalation through Temp V.",
      "The search for an anti-supe weapon becomes the search for Soldier Boy, the first major Vought supe and Homelander's biological father.",
      "Homelander becomes less restrained, takes more direct power inside Vought, and kills Black Noir after learning Noir hid the Soldier Boy truth.",
      "Maeve helps stop Soldier Boy, survives, loses her powers, and exits public hero life.",
      "Ryan leaves the finale beside Homelander, while Butcher learns Temp V has left him with limited time to live.",
    ],
  },
  {
    season: 4,
    title: "Season 4 - The country falls into Homelander's hands",
    bullets: [
      "Victoria Neuman moves closer to the Oval Office while Homelander consolidates power with Sister Sage and a more radical supe coalition.",
      "Butcher's V-altered illness worsens, his hallucinated Kessler pushes him toward annihilation, and the supe-killing virus becomes the season's weapon.",
      "The team fractures under grief, secrets, and betrayal: Hughie loses his father, Annie is impersonated, Frenchie and Kimiko confront old trauma, and A-Train helps from inside Vought.",
      "Ryan rejects Mallory's attempt to lock him down and accidentally kills her, leaving him outside both Butcher's and Homelander's control.",
      "Butcher kills Neuman, takes the virus, and walks away as Calhoun aligns with Homelander, supes are deputized, The Boys are captured or split, Annie escapes, and Soldier Boy is revealed alive in custody.",
    ],
  },
];

const THE_BOYS_EPISODE_SUMMARIES: EpisodeSummary[] = [
  {
    season: 1,
    episode: 1,
    code: "S01E01",
    title: "The Name of the Game",
    summary:
      "A-Train kills Hughie's girlfriend Robin, and Vought tries to buy Hughie's silence. Butcher recruits Hughie to bug Seven Tower, Annie joins The Seven, and Homelander shows how deadly he is behind the brand.",
    whyItMatters:
      "This is the origin point for Hughie's mission, Annie's disillusionment, and Homelander's hidden brutality.",
  },
  {
    season: 1,
    episode: 2,
    code: "S01E02",
    title: "Cherry",
    summary:
      "Butcher, Hughie, and Frenchie capture Translucent and realize ordinary weapons will not kill him. Hughie crosses a line by detonating the bomb that kills Translucent.",
    whyItMatters:
      "The Boys stop being observers and become active enemies of The Seven.",
  },
  {
    season: 1,
    episode: 3,
    code: "S01E03",
    title: "Get Some",
    summary:
      "The team cleans up Translucent's death while A-Train races Shockwave and hides what he knows. Hughie and Annie grow closer without Annie knowing Hughie's role in The Boys.",
    whyItMatters:
      "The personal and strategic worlds start crossing: Hughie wants revenge, but Annie complicates the mission.",
  },
  {
    season: 1,
    episode: 4,
    code: "S01E04",
    title: "The Female of the Species",
    summary:
      "The Boys find Kimiko while tracking Compound V and learn Vought's experiments reach beyond celebrity superheroes. Homelander and Maeve abandon a doomed plane, exposing the gap between heroic image and reality.",
    whyItMatters:
      "Kimiko joins the orbit of The Boys, and Homelander's public savior image becomes morally hollow.",
  },
  {
    season: 1,
    episode: 5,
    code: "S01E05",
    title: "Good for the Soul",
    summary:
      "At a religious expo, Hughie and Butcher push deeper into Vought's pipeline while Annie publicly rejects the story Vought wants her to tell. A-Train's Compound V use becomes more visible.",
    whyItMatters:
      "Annie begins choosing truth over brand, and Compound V becomes the key to Vought's power.",
  },
  {
    season: 1,
    episode: 6,
    code: "S01E06",
    title: "The Innocents",
    summary:
      "The Boys use a support group to gather evidence against supes, while Starlight faces pressure to keep selling Vought's image. Homelander tightens his emotional control over Stillwell.",
    whyItMatters:
      "The show clarifies that Vought's harm is systemic, not just a few bad heroes.",
  },
  {
    season: 1,
    episode: 7,
    code: "S01E07",
    title: "The Self-Preservation Society",
    summary:
      "The Boys are exposed, Hughie and Annie's relationship breaks under the secret, and Butcher's vendetta becomes more personal. Homelander discovers more about Becca and the child hidden from him.",
    whyItMatters:
      "Trust fractures on both sides, and Ryan becomes the hidden story piece linking Butcher and Homelander.",
  },
  {
    season: 1,
    episode: 8,
    code: "S01E08",
    title: "You Found Me",
    summary:
      "Butcher takes Stillwell hostage to hurt Homelander, but Homelander kills her himself. Homelander then brings Butcher to Becca, revealing she is alive and raising Ryan.",
    whyItMatters:
      "The finale resets Butcher's motivation: Becca and Ryan become the emotional center of the war.",
  },
  {
    season: 2,
    episode: 1,
    code: "S02E01",
    title: "The Big Ride",
    summary:
      "The Boys are fugitives and fractured, with Butcher missing after the Becca reveal. Stormfront joins The Seven and immediately disrupts Homelander's control of the team.",
    whyItMatters:
      "Season 2 starts with The Boys powerless and Homelander facing a new rival inside his own brand machine.",
  },
  {
    season: 2,
    episode: 2,
    code: "S02E02",
    title: "Proper Preparation and Planning",
    summary:
      "Butcher returns, and the team captures Kimiko's brother Kenji as part of the super-terrorist panic. Starlight continues gathering evidence against Vought from inside The Seven.",
    whyItMatters:
      "Vought's public fear campaign and The Boys' internal trust problems become the season's engine.",
  },
  {
    season: 2,
    episode: 3,
    code: "S02E03",
    title: "Over the Hill with the Swords of a Thousand Men",
    summary:
      "The truth about Compound V reaches the public, showing that Vought created supes instead of receiving them from God. Homelander and Stormfront handle the crisis with violence and propaganda.",
    whyItMatters:
      "Compound V moves from conspiracy to public fact, forcing Vought to change tactics.",
  },
  {
    season: 2,
    episode: 4,
    code: "S02E04",
    title: "Nothing Like It in the World",
    summary:
      "The Boys investigate Stormfront's past as Liberty, while Butcher briefly reconnects with Becca. Hughie, Annie, and Mother's Milk take a road trip that exposes both clues and emotional damage.",
    whyItMatters:
      "Stormfront's history becomes the path to understanding her real ideology.",
  },
  {
    season: 2,
    episode: 5,
    code: "S02E05",
    title: "We Gotta Go Now",
    summary:
      "Vought turns crisis into entertainment while Homelander and Stormfront become more publicly aligned. The Boys keep digging into Stormfront as her influence grows.",
    whyItMatters:
      "Stormfront and Homelander become a political and emotional partnership, not just teammates.",
  },
  {
    season: 2,
    episode: 6,
    code: "S02E06",
    title: "The Bloody Doors Off",
    summary:
      "The team infiltrates Sage Grove and finds Vought experimenting on adult subjects with Compound V. Lamplighter's past with Mallory and Frenchie comes back into focus.",
    whyItMatters:
      "Sage Grove proves Vought is still manufacturing power and trauma at scale.",
  },
  {
    season: 2,
    episode: 7,
    code: "S02E07",
    title: "Butcher, Baker, Candlestick Maker",
    summary:
      "The Boys prepare to testify against Vought, but a public head-popping attack destroys the hearing. Butcher's father reopens old wounds and clarifies why Butcher became so brutal.",
    whyItMatters:
      "The unknown head-popper becomes a major threat, and Butcher's cruelty gets personal context.",
  },
  {
    season: 2,
    episode: 8,
    code: "S02E08",
    title: "What I Know",
    summary:
      "The Boys and Starlight fight Stormfront, Ryan accidentally kills Becca while stopping Stormfront, and Homelander is forced to stand down publicly. Victoria Neuman is revealed as the secret head-popper.",
    whyItMatters:
      "Ryan's trauma, Butcher's promise to Becca, and Neuman's hidden power all carry forward.",
  },
  {
    season: 3,
    episode: 1,
    code: "S03E01",
    title: "Payback",
    summary:
      "The Boys work closer to official channels while Hughie believes legal oversight can contain supes. Butcher learns about a possible anti-supe weapon tied to Soldier Boy and Payback.",
    whyItMatters:
      "The season's central question starts here: whether power can be beaten without becoming monstrous.",
  },
  {
    season: 3,
    episode: 2,
    code: "S03E02",
    title: "The Only Man in the Sky",
    summary:
      "Homelander's birthday special spirals as his control slips and his public mask cracks. Butcher begins using Temp V, gaining temporary powers at a serious cost.",
    whyItMatters:
      "Both Homelander and Butcher move toward more open, less restrained violence.",
  },
  {
    season: 3,
    episode: 3,
    code: "S03E03",
    title: "Barbary Coast",
    summary:
      "The Boys dig into Payback's history and the Nicaragua operation that supposedly killed Soldier Boy. Annie gains co-captain status in The Seven, but the title gives her little real safety.",
    whyItMatters:
      "Soldier Boy's past becomes the route to the anti-Homelander weapon.",
  },
  {
    season: 3,
    episode: 4,
    code: "S03E04",
    title: "Glorious Five Year Plan",
    summary:
      "The Boys go to Russia and free Soldier Boy from captivity. Kimiko is badly hurt when Soldier Boy's blast removes her powers, proving he can depower supes.",
    whyItMatters:
      "Soldier Boy becomes the living weapon The Boys were searching for.",
  },
  {
    season: 3,
    episode: 5,
    code: "S03E05",
    title: "The Last Time to Look on This World of Lies",
    summary:
      "Soldier Boy hunts his former Payback teammates while Butcher and Hughie sink deeper into Temp V use. Annie realizes the team is accepting unacceptable collateral damage.",
    whyItMatters:
      "The anti-Homelander plan starts costing the team its moral center.",
  },
  {
    season: 3,
    episode: 6,
    code: "S03E06",
    title: "Herogasm",
    summary:
      "Soldier Boy's hunt reaches Herogasm, where his blast causes mass casualties. Butcher, Hughie, and Soldier Boy fight Homelander and nearly overpower him.",
    whyItMatters:
      "Homelander is shown to be physically vulnerable, but only through a terrifying alliance.",
  },
  {
    season: 3,
    episode: 7,
    code: "S03E07",
    title: "Here Comes a Candle to Light You to Bed",
    summary:
      "Mindstorm reveals Soldier Boy is Homelander's biological father. Black Noir's memories show Payback betrayed Soldier Boy, while Butcher learns Temp V is killing him and Hughie.",
    whyItMatters:
      "The weapon against Homelander becomes family, and Temp V becomes a death sentence.",
  },
  {
    season: 3,
    episode: 8,
    code: "S03E08",
    title: "The Instant White-Hot Wild",
    summary:
      "Soldier Boy turns on Homelander and Ryan, forcing Butcher to choose Ryan over the mission. Maeve helps stop Soldier Boy, Black Noir is killed by Homelander, and Ryan leaves with Homelander.",
    whyItMatters:
      "The season ends with Soldier Boy contained, Maeve out, Butcher dying, Neuman rising, and Ryan beside Homelander.",
  },
  {
    season: 4,
    episode: 1,
    code: "S04E01",
    title: "Department of Dirty Tricks",
    summary:
      "Homelander's trial becomes a political rallying point, while The Boys work against Neuman and the Singer campaign. Butcher is out of trust with the team and running out of time.",
    whyItMatters:
      "Season 4 opens with politics, Vought, and Homelander's movement merging.",
  },
  {
    season: 4,
    episode: 2,
    code: "S04E02",
    title: "Life Among the Septics",
    summary:
      "The Boys follow conspiracy-world leads while Homelander leans into supporters who treat him as a victim. Sister Sage begins shaping Homelander's strategy.",
    whyItMatters:
      "Sage starts turning Homelander's rage into a coordinated political weapon.",
  },
  {
    season: 4,
    episode: 3,
    code: "S04E03",
    title: "We'll Keep the Red Flag Flying Here",
    summary:
      "Vought packages fear and culture war as entertainment while Ryan is pushed into public hero branding. Butcher tries to reach Ryan but cannot rebuild trust quickly.",
    whyItMatters:
      "Ryan's identity becomes a public project, and Butcher's promise to Becca gets harder to keep.",
  },
  {
    season: 4,
    episode: 4,
    code: "S04E04",
    title: "Wisdom of the Ages",
    summary:
      "Firecracker escalates attacks on Starlight, and Homelander revisits the lab that made him. Hughie faces his father's decline and the emotional cost of trying to save him.",
    whyItMatters:
      "Annie's public image and Homelander's origin trauma both become weapons.",
  },
  {
    season: 4,
    episode: 5,
    code: "S04E05",
    title: "Beware the Jabberwock, My Son",
    summary:
      "The Boys chase the virus lead tied to Sameer and the animals exposed to Compound V. Hughie's family crisis turns deadly and forces him into a painful goodbye.",
    whyItMatters:
      "The supe-killing virus moves from rumor to tangible weapon.",
  },
  {
    season: 4,
    episode: 6,
    code: "S04E06",
    title: "Dirty Business",
    summary:
      "The team infiltrates Tek Knight's elite gathering and uncovers more of Homelander's political network. A-Train's secret help becomes more consequential and more dangerous.",
    whyItMatters:
      "The anti-Homelander fight becomes a fight against a political machine, not only Vought.",
  },
  {
    season: 4,
    episode: 7,
    code: "S04E07",
    title: "The Insider",
    summary:
      "A shapeshifter infiltrates The Boys by impersonating Annie, while the assassination plot around Singer and Neuman accelerates. Butcher's hallucinated Kessler pushes him toward a more extreme solution.",
    whyItMatters:
      "The team is compromised from inside just before the finale, and Butcher's moral line is close to breaking.",
  },
  {
    season: 4,
    episode: 8,
    code: "S04E08",
    title: "Season Four Finale",
    summary:
      "Neuman seeks protection from The Boys, but Butcher kills her and takes the supe-killing virus. Singer is removed, Calhoun aligns with Homelander, supes are deputized, Annie escapes, several Boys are captured, Ryan kills Mallory by accident, and Homelander learns Soldier Boy is alive.",
    whyItMatters:
      "This is the exact boundary before Season 5: Homelander has state power, Butcher has the virus, and the team is scattered.",
  },
];

const THE_BOYS_S2E5_NODES: GraphNode[] = [
  {
    id: "butcher",
    name: "Billy Butcher",
    x: 150,
    y: 250,
    sketch:
      "Butcher is back with The Boys after finding Becca alive and seeing Ryan with Homelander. He still wants to destroy Vought and Homelander, but his choices are increasingly shaped by Becca and the child he cannot control.",
  },
  {
    id: "hughie",
    name: "Hughie",
    x: 300,
    y: 360,
    sketch:
      "Hughie is still part of The Boys and still emotionally tied to Annie. Their relationship is strained by lies, danger, and the fact that Annie is trapped inside The Seven's world.",
  },
  {
    id: "starlight",
    name: "Annie / Starlight",
    x: 455,
    y: 350,
    sketch:
      "Annie is inside The Seven but no longer believes Vought's story. She has helped expose Compound V and is trying to survive Homelander's suspicion while keeping her own conscience intact.",
  },
  {
    id: "homelander",
    name: "Homelander",
    x: 640,
    y: 145,
    sketch:
      "Homelander is losing exclusive control of The Seven's image as Stormfront rises beside him. He is also trying to pull Ryan and Becca into his idea of family.",
  },
  {
    id: "stormfront",
    name: "Stormfront",
    x: 705,
    y: 260,
    sketch:
      "Stormfront has joined The Seven and built a public following through provocation and media fluency. By this point, The Boys are investigating her past and influence.",
  },
  {
    id: "becca",
    name: "Becca",
    x: 365,
    y: 120,
    sketch:
      "Becca is alive and raising Ryan under Vought's control. She wants Ryan safe and away from Homelander's worldview, but her options are narrow.",
  },
  {
    id: "ryan",
    name: "Ryan",
    x: 500,
    y: 95,
    sketch:
      "Ryan is a child with Homelander's powers and Becca's protection. He is being introduced to Homelander's world before he can understand the danger around him.",
  },
  {
    id: "kimiko",
    name: "Kimiko",
    x: 235,
    y: 430,
    sketch:
      "Kimiko is grieving Kenji and still tied to The Boys through Frenchie. Stormfront's violence has made the fight more personal for her.",
  },
  {
    id: "frenchie",
    name: "Frenchie",
    x: 380,
    y: 430,
    sketch:
      "Frenchie is focused on keeping Kimiko close and alive while wrestling with past failures. He remains one of the emotional anchors inside The Boys.",
  },
  {
    id: "mm",
    name: "MM",
    x: 185,
    y: 340,
    sketch:
      "MM is the team's stabilizer, trying to keep the mission grounded while Butcher pulls everyone into risk. He is also one of the few people who can challenge Butcher directly.",
  },
  {
    id: "atrain",
    name: "A-Train",
    x: 575,
    y: 385,
    sketch:
      "A-Train is no longer secure in The Seven after health problems and public-image pressure. He knows pieces of Vought's rot, but his first instinct is still self-preservation.",
  },
  {
    id: "maeve",
    name: "Queen Maeve",
    x: 585,
    y: 275,
    sketch:
      "Maeve is inside The Seven and understands Homelander's danger better than most. At this point she is compromised by fear, surveillance, and Vought's control.",
  },
];

const THE_BOYS_S2E5_EDGES: GraphEdge[] = [
  {
    from: "butcher",
    to: "homelander",
    type: "enemy",
    label: "Butcher still blames Homelander for Becca's disappearance and captivity",
  },
  {
    from: "butcher",
    to: "becca",
    type: "romantic",
    label: "estranged spouses after Butcher finds Becca alive",
  },
  {
    from: "becca",
    to: "ryan",
    type: "family",
    label: "Becca is protecting and raising Ryan",
  },
  {
    from: "homelander",
    to: "ryan",
    type: "family",
    label: "Homelander is Ryan's father and wants access to him",
  },
  {
    from: "homelander",
    to: "stormfront",
    type: "ally",
    label: "Stormfront is becoming Homelander's public and emotional counterpart",
  },
  {
    from: "starlight",
    to: "hughie",
    type: "romantic",
    label: "relationship strained by secrets and opposing worlds",
  },
  {
    from: "starlight",
    to: "homelander",
    type: "threat",
    label: "Annie is inside The Seven but under Homelander's suspicion",
  },
  {
    from: "stormfront",
    to: "kimiko",
    type: "enemy",
    label: "Stormfront killed Kenji, making the conflict personal for Kimiko",
  },
  {
    from: "frenchie",
    to: "kimiko",
    type: "ally",
    label: "Frenchie supports Kimiko through grief and danger",
  },
  {
    from: "mm",
    to: "butcher",
    type: "ally",
    label: "same team, but MM resists Butcher's worst impulses",
  },
  {
    from: "atrain",
    to: "starlight",
    type: "threat",
    label: "A-Train knows enough to endanger Annie if self-preservation wins",
  },
  {
    from: "maeve",
    to: "homelander",
    type: "control",
    label: "Maeve understands Homelander's danger but is constrained inside The Seven",
  },
];

const THE_BOYS_S2E5_STATUS: CharacterStatus[] = [
  {
    name: "Billy Butcher",
    state: "Back with The Boys after finding Becca alive.",
    motivation: "Destroy Homelander while trying to reclaim Becca.",
    risk: "His anger can put the team, Becca, and Ryan in danger.",
  },
  {
    name: "Homelander",
    state: "Still the central power in The Seven, but sharing public attention with Stormfront.",
    motivation: "Control his image, The Seven, and Ryan.",
    risk: "His need for family and adoration makes him more unstable.",
  },
  {
    name: "Annie / Starlight",
    state: "Inside The Seven after helping expose Compound V.",
    motivation: "Keep doing the right thing without getting killed by Vought or Homelander.",
    risk: "She is isolated inside the institution she is undermining.",
  },
  {
    name: "Hughie",
    state: "With The Boys and emotionally tied to Annie.",
    motivation: "Help take down Vought without losing Annie or himself.",
    risk: "His loyalty to Annie can conflict with the mission.",
  },
  {
    name: "Stormfront",
    state: "Rising inside The Seven with a growing public following.",
    motivation: "Turn Vought's power toward her ideological project.",
    risk: "Her influence over Homelander is increasing.",
  },
  {
    name: "Becca",
    state: "Alive, hidden in Vought-controlled isolation with Ryan.",
    motivation: "Protect Ryan from Homelander and from becoming a weapon.",
    risk: "She has little leverage against Vought or Homelander.",
  },
  {
    name: "Ryan",
    state: "Living with Becca and being pulled toward Homelander's world.",
    motivation: "Understand his father and his own powers.",
    risk: "Everyone around him sees his power before he understands the stakes.",
  },
  {
    name: "Kimiko",
    state: "Grieving Kenji and still fighting with The Boys.",
    motivation: "Survive and process the loss Stormfront caused.",
    risk: "Her grief makes Stormfront's threat personal and volatile.",
  },
  {
    name: "Frenchie",
    state: "With The Boys, focused on Kimiko and the mission.",
    motivation: "Protect Kimiko and make up for past failures.",
    risk: "His guilt can cloud his judgment.",
  },
  {
    name: "MM",
    state: "Holding The Boys together in fugitive mode.",
    motivation: "Finish the mission without letting Butcher burn everyone down.",
    risk: "The team needs his stability more than it admits.",
  },
];

const THE_BOYS_S2E5_SECRETS: SecretFact[] = [
  {
    topic: "Compound V",
    whatToRemember:
      "The public now knows Vought created supes with Compound V.",
    whyItMatters:
      "Vought has to defend its entire origin myth while still controlling the hero business.",
  },
  {
    topic: "Becca and Ryan",
    whatToRemember:
      "Becca is alive and raising Ryan, Homelander's son, under Vought's control.",
    whyItMatters:
      "Ryan ties Butcher's personal mission directly to Homelander's family fantasy.",
  },
  {
    topic: "Stormfront's past",
    whatToRemember:
      "The Boys are investigating Stormfront's history and the older identity connected to her.",
    whyItMatters:
      "Stormfront is not just another Seven member; her past is the key to her agenda.",
  },
  {
    topic: "Starlight's leak",
    whatToRemember:
      "Annie helped expose Compound V from inside Vought.",
    whyItMatters:
      "She is useful to The Boys but increasingly exposed inside The Seven.",
  },
  {
    topic: "Kenji's death",
    whatToRemember:
      "Stormfront killed Kimiko's brother Kenji.",
    whyItMatters:
      "The fight against Stormfront is now personal for Kimiko and Frenchie.",
  },
];

const THE_BOYS_S2E5_QUESTIONS: string[] = [
  "What is Stormfront really trying to build with her public following?",
  "Can Annie keep working against Vought from inside The Seven?",
  "Will Butcher protect Ryan because Becca asks him to, or reject him because of Homelander?",
  "Can The Boys use the Compound V leak before Vought turns it into another PR campaign?",
  "How long can Maeve, A-Train, and Annie survive inside Homelander's orbit?",
  "Can Kimiko stay focused while Stormfront is still rising?",
];

const THE_BOYS_S1E8_NODES: GraphNode[] = [
  {
    id: "butcher",
    name: "Billy Butcher",
    x: 170,
    y: 260,
    sketch:
      "Butcher has spent the season hunting Homelander because he believed Homelander destroyed Becca's life. The finale reveals Becca is alive, turning Butcher's revenge mission into a more complicated family wound.",
  },
  {
    id: "hughie",
    name: "Hughie",
    x: 330,
    y: 365,
    sketch:
      "Hughie entered The Boys after A-Train killed Robin. By the finale, he has chosen the mission but still cares about Annie, even after their trust breaks.",
  },
  {
    id: "starlight",
    name: "Annie / Starlight",
    x: 475,
    y: 355,
    sketch:
      "Annie joined The Seven believing in heroism and found coercion, abuse, and Vought's brand machine instead. She helps Hughie at the end, but she now knows he has been lying to her.",
  },
  {
    id: "homelander",
    name: "Homelander",
    x: 640,
    y: 160,
    sketch:
      "Homelander is The Seven's public face and private monster. He kills Stillwell himself and reveals Becca and Ryan to Butcher.",
  },
  {
    id: "becca",
    name: "Becca",
    x: 420,
    y: 115,
    sketch:
      "Becca is alive, hidden away, and raising Ryan. Her existence overturns the story Butcher had built his revenge around.",
  },
  {
    id: "ryan",
    name: "Ryan",
    x: 535,
    y: 90,
    sketch:
      "Ryan is Becca and Homelander's son. At this boundary, he is newly revealed to Butcher and represents a danger and a promise he does not yet understand.",
  },
  {
    id: "atrain",
    name: "A-Train",
    x: 610,
    y: 330,
    sketch:
      "A-Train killed Robin and tried to keep his Compound V use hidden. He is still a direct symbol of the damage Vought protects.",
  },
  {
    id: "kimiko",
    name: "Kimiko",
    x: 250,
    y: 430,
    sketch:
      "Kimiko was found while The Boys investigated Compound V. She is not fully understood by the team yet, but she is no longer just a target or prisoner.",
  },
  {
    id: "frenchie",
    name: "Frenchie",
    x: 385,
    y: 430,
    sketch:
      "Frenchie becomes Kimiko's first real bridge into The Boys. He sees her personhood before most people around her do.",
  },
  {
    id: "mm",
    name: "MM",
    x: 195,
    y: 350,
    sketch:
      "MM is part of Butcher's crew and one of the few people capable of pushing back on him. By the finale, the team is in deep with Vought and exposed to real retaliation.",
  },
];

const THE_BOYS_S1E8_EDGES: GraphEdge[] = [
  {
    from: "butcher",
    to: "homelander",
    type: "enemy",
    label: "Butcher's revenge target across season 1",
  },
  {
    from: "butcher",
    to: "becca",
    type: "romantic",
    label: "husband and wife, with Becca revealed alive in the finale",
  },
  {
    from: "becca",
    to: "ryan",
    type: "family",
    label: "Becca is raising Ryan in secret",
  },
  {
    from: "homelander",
    to: "ryan",
    type: "family",
    label: "Homelander is Ryan's father",
  },
  {
    from: "hughie",
    to: "atrain",
    type: "enemy",
    label: "A-Train killed Robin and started Hughie's mission",
  },
  {
    from: "hughie",
    to: "starlight",
    type: "romantic",
    label: "connection damaged by Hughie's deception",
  },
  {
    from: "starlight",
    to: "homelander",
    type: "threat",
    label: "Annie is inside The Seven and has seen its danger",
  },
  {
    from: "frenchie",
    to: "kimiko",
    type: "ally",
    label: "Frenchie protects Kimiko after The Boys find her",
  },
  {
    from: "mm",
    to: "butcher",
    type: "ally",
    label: "The Boys' mission team, with MM acting as stabilizer",
  },
  {
    from: "homelander",
    to: "atrain",
    type: "control",
    label: "A-Train operates inside Homelander and Vought's system",
  },
];

const THE_BOYS_S1E8_STATUS: CharacterStatus[] = [
  {
    name: "Billy Butcher",
    state: "Face-to-face with Becca alive and Ryan revealed.",
    motivation: "Destroy Homelander, but now with Becca's reality complicating the revenge story.",
    risk: "His worldview has just been shattered.",
  },
  {
    name: "Hughie",
    state: "Committed to The Boys after killing Translucent and confronting A-Train's world.",
    motivation: "Get justice for Robin without losing the decent part of himself.",
    risk: "His relationship with Annie is damaged by the truth.",
  },
  {
    name: "Annie / Starlight",
    state: "Disillusioned with The Seven but still inside Vought.",
    motivation: "Be a real hero in a system built to prevent that.",
    risk: "Helping Hughie makes her vulnerable to Vought and The Seven.",
  },
  {
    name: "Homelander",
    state: "Still publicly untouchable after killing Stillwell and revealing Ryan.",
    motivation: "Control the people who define him: Vought, Butcher, Becca, and Ryan.",
    risk: "No one around him can safely restrain him.",
  },
  {
    name: "Becca",
    state: "Alive and raising Ryan in secret.",
    motivation: "Keep Ryan safe.",
    risk: "Homelander has found his son and brought Butcher to them.",
  },
  {
    name: "Ryan",
    state: "A hidden child newly revealed to Butcher.",
    motivation: "No adult mission yet; he is being protected and controlled.",
    risk: "His parentage makes him a target before he can choose anything.",
  },
  {
    name: "A-Train",
    state: "Still tied to Robin's death and Compound V pressure.",
    motivation: "Protect his status and avoid accountability.",
    risk: "His choices keep pulling Hughie deeper into the fight.",
  },
  {
    name: "Kimiko",
    state: "With The Boys after being found in the Compound V trail.",
    motivation: "Survive and understand who can be trusted.",
    risk: "The team still does not fully understand her trauma or power.",
  },
];

const THE_BOYS_S1E8_SECRETS: SecretFact[] = [
  {
    topic: "Becca is alive",
    whatToRemember:
      "Becca is not dead; Homelander brings Butcher to her at the finale boundary.",
    whyItMatters:
      "It changes Butcher's motivation from simple revenge to a family crisis.",
  },
  {
    topic: "Ryan exists",
    whatToRemember:
      "Ryan is Becca and Homelander's son.",
    whyItMatters:
      "He creates a direct personal link between Butcher's mission and Homelander's family fantasy.",
  },
  {
    topic: "Compound V",
    whatToRemember:
      "The Boys have uncovered that Vought uses Compound V to create supes.",
    whyItMatters:
      "It reframes Vought's entire mythology and business model.",
  },
  {
    topic: "Stillwell is dead",
    whatToRemember:
      "Homelander kills Madelyn Stillwell himself.",
    whyItMatters:
      "The person who seemed able to manage Homelander is gone.",
  },
];

const THE_BOYS_S1E8_QUESTIONS: string[] = [
  "What does Butcher do now that Becca is alive?",
  "Can Annie stay inside The Seven after helping Hughie?",
  "What does Homelander want from Ryan?",
  "Can The Boys expose Compound V without being destroyed by Vought?",
  "Where do Hughie and Annie stand after the truth comes out?",
];

const THE_BOYS_S2E8_NODES: GraphNode[] = [
  ...THE_BOYS_S2E5_NODES,
  {
    id: "neuman",
    name: "Victoria Neuman",
    x: 705,
    y: 385,
    sketch:
      "Neuman publicly appears to be an anti-Vought politician. At the season 2 boundary, she is revealed to the viewer as the secret head-popper behind the attacks.",
  },
];

const THE_BOYS_S2E8_EDGES: GraphEdge[] = [
  ...THE_BOYS_S2E5_EDGES,
  {
    from: "ryan",
    to: "becca",
    type: "family",
    label: "Ryan accidentally kills Becca while stopping Stormfront",
  },
  {
    from: "ryan",
    to: "stormfront",
    type: "enemy",
    label: "Ryan's powers stop Stormfront in the finale",
  },
  {
    from: "neuman",
    to: "homelander",
    type: "unknown",
    label: "Neuman is a hidden supe power player outside the Seven's visible structure",
  },
];

const THE_BOYS_S2E8_STATUS: CharacterStatus[] = [
  {
    name: "Billy Butcher",
    state: "Becca is dead, and Butcher has promised to protect Ryan.",
    motivation: "Honor Becca's last wish while still hating Homelander.",
    risk: "His grief can turn protection into another form of violence.",
  },
  {
    name: "Homelander",
    state: "Publicly forced to stand down after the Stormfront fight.",
    motivation: "Regain control over Ryan, The Seven, and his image.",
    risk: "His public mask is cracking.",
  },
  {
    name: "Ryan",
    state: "Alive and traumatized after accidentally killing Becca while stopping Stormfront.",
    motivation: "Safety and belonging.",
    risk: "His power has already caused irreversible harm.",
  },
  {
    name: "Annie / Starlight",
    state: "Back in The Seven's orbit after fighting Stormfront.",
    motivation: "Keep resisting Vought without losing her public platform.",
    risk: "Her enemies know she is not loyal to the brand.",
  },
  {
    name: "Hughie",
    state: "Trying to step toward a more legitimate anti-Vought path.",
    motivation: "Fight Vought without living entirely inside Butcher's war.",
    risk: "He may underestimate hidden threats like Neuman.",
  },
  {
    name: "Kimiko",
    state: "Stormfront is defeated, but Kenji and Becca are dead.",
    motivation: "Keep surviving with Frenchie and The Boys.",
    risk: "The victory does not erase the trauma.",
  },
  {
    name: "Stormfront",
    state: "Defeated and mutilated after Ryan's blast.",
    motivation: "Her public rise is broken at this boundary.",
    risk: "Her influence over Homelander and his base has already done damage.",
  },
  {
    name: "Victoria Neuman",
    state: "Publicly anti-Vought, secretly revealed as the head-popper.",
    motivation: "Unknown at this boundary.",
    risk: "She is a hidden power inside the political lane Hughie is moving toward.",
  },
];

const THE_BOYS_S2E8_SECRETS: SecretFact[] = [
  {
    topic: "Neuman is the head-popper",
    whatToRemember:
      "The season 2 ending reveals Victoria Neuman is secretly causing the head-popping attacks.",
    whyItMatters:
      "The apparent anti-Vought political path is compromised from the inside.",
  },
  {
    topic: "Becca is dead",
    whatToRemember:
      "Ryan accidentally kills Becca while stopping Stormfront.",
    whyItMatters:
      "Butcher's promise to protect Ryan now sits on top of fresh grief.",
  },
  {
    topic: "Stormfront defeated",
    whatToRemember:
      "Ryan's powers stop Stormfront, leaving her defeated at the finale boundary.",
    whyItMatters:
      "Homelander loses a major ally and ideological partner.",
  },
  {
    topic: "Compound V public fallout",
    whatToRemember:
      "Vought's Compound V secret has been exposed publicly.",
    whyItMatters:
      "The fight against Vought has moved into public politics.",
  },
];

const THE_BOYS_S2E8_QUESTIONS: string[] = [
  "Can Butcher protect Ryan after Becca's death?",
  "What does Neuman want, and who knows what she can do?",
  "Can Hughie trust an official political path against Vought?",
  "How does Homelander recover after losing Stormfront and Ryan?",
  "Where does Annie stand inside The Seven after openly fighting Stormfront?",
];

const THE_BOYS_S3E8_NODES: GraphNode[] = [
  ...THE_BOYS_S2E8_NODES.filter((node) => node.id !== "stormfront"),
  {
    id: "soldierboy",
    name: "Soldier Boy",
    x: 715,
    y: 95,
    sketch:
      "Soldier Boy is the weapon The Boys found and Homelander's biological father. By the finale, he has been contained again after turning on Homelander and Ryan.",
  },
  {
    id: "maeve",
    name: "Queen Maeve",
    x: 585,
    y: 270,
    sketch:
      "Maeve helps stop Soldier Boy and survives, but loses her powers. She exits public hero life at the season 3 boundary.",
  },
];

const THE_BOYS_S3E8_EDGES: GraphEdge[] = [
  {
    from: "butcher",
    to: "homelander",
    type: "enemy",
    label: "primary conflict remains unresolved",
  },
  {
    from: "homelander",
    to: "ryan",
    type: "family",
    label: "Ryan leaves the finale beside Homelander",
  },
  {
    from: "butcher",
    to: "ryan",
    type: "family",
    label: "Butcher protects Ryan from Soldier Boy but has damaged their bond",
  },
  {
    from: "soldierboy",
    to: "homelander",
    type: "family",
    label: "Soldier Boy is revealed as Homelander's biological father",
  },
  {
    from: "butcher",
    to: "soldierboy",
    type: "enemy",
    label: "Butcher turns on Soldier Boy to protect Ryan",
  },
  {
    from: "maeve",
    to: "homelander",
    type: "enemy",
    label: "Maeve fights Homelander and helps stop Soldier Boy",
  },
  {
    from: "starlight",
    to: "hughie",
    type: "romantic",
    label: "partners strained by Temp V and Hughie's choices",
  },
  {
    from: "neuman",
    to: "hughie",
    type: "betrayal",
    label: "Hughie learns the political path he trusted is compromised by Neuman",
  },
  {
    from: "frenchie",
    to: "kimiko",
    type: "ally",
    label: "they remain each other's safest emotional anchor",
  },
  {
    from: "mm",
    to: "soldierboy",
    type: "enemy",
    label: "Soldier Boy is tied to MM's family trauma",
  },
];

const THE_BOYS_S3E8_STATUS: CharacterStatus[] = [
  {
    name: "Billy Butcher",
    state: "Alive but dying from Temp V damage.",
    motivation: "Kill Homelander while facing the cost of his own escalation.",
    risk: "He has limited time and fewer moral guardrails.",
  },
  {
    name: "Homelander",
    state: "Publicly emboldened and with Ryan at his side.",
    motivation: "Make Ryan his heir and stop pretending to be accountable.",
    risk: "His supporters cheer violence in public.",
  },
  {
    name: "Ryan",
    state: "With Homelander after Butcher pushed him away and then protected him.",
    motivation: "Find belonging after trauma and rejection.",
    risk: "Homelander is shaping what love and power mean to him.",
  },
  {
    name: "Soldier Boy",
    state: "Alive but back in custody.",
    motivation: "Was hunting Payback and confronting Homelander.",
    risk: "He remains a possible weapon if released.",
  },
  {
    name: "Annie / Starlight",
    state: "Out from under Vought's preferred story.",
    motivation: "Fight Vought openly and keep Hughie from self-destruction.",
    risk: "Public truth-telling puts a target on her.",
  },
  {
    name: "Hughie",
    state: "Off the Temp V path and back beside Annie.",
    motivation: "Help without needing power to feel useful.",
    risk: "He has to rebuild trust after chasing strength the wrong way.",
  },
  {
    name: "Victoria Neuman",
    state: "VP candidate and still a secret supe threat.",
    motivation: "Move closer to formal political power.",
    risk: "She is now the next visible political danger.",
  },
  {
    name: "Queen Maeve",
    state: "Alive, depowered, and leaving public hero life.",
    motivation: "Disappear into a life outside Vought.",
    risk: "Her exit removes one of the few people who could physically challenge Homelander.",
  },
];

const THE_BOYS_S3E8_SECRETS: SecretFact[] = [
  {
    topic: "Butcher is dying",
    whatToRemember:
      "Temp V has left Butcher with limited time to live.",
    whyItMatters:
      "His next choices are shaped by urgency and damage.",
  },
  {
    topic: "Soldier Boy is Homelander's father",
    whatToRemember:
      "Soldier Boy is revealed as Homelander's biological father.",
    whyItMatters:
      "The anti-Homelander weapon becomes part of Homelander's family story.",
  },
  {
    topic: "Ryan chooses Homelander's side for now",
    whatToRemember:
      "Ryan leaves the finale beside Homelander.",
    whyItMatters:
      "The emotional stakes move from Becca's promise to Ryan's identity.",
  },
  {
    topic: "Neuman's political rise",
    whatToRemember:
      "Victoria Neuman becomes the vice presidential candidate.",
    whyItMatters:
      "The hidden supe threat has moved into national politics.",
  },
  {
    topic: "Maeve exits",
    whatToRemember:
      "Maeve survives, loses her powers, and leaves public hero life.",
    whyItMatters:
      "The anti-Homelander side loses a major supe counterweight.",
  },
];

const THE_BOYS_S3E8_QUESTIONS: string[] = [
  "What does Butcher do with limited time left?",
  "Can Ryan be pulled back from Homelander's influence?",
  "How does Neuman's VP candidacy change the fight?",
  "Can Annie fight Vought openly without Maeve as a hidden counterweight?",
  "Will Soldier Boy stay contained?",
];

const THE_BOYS_NODES: GraphNode[] = [
  {
    id: "butcher",
    name: "Billy Butcher",
    x: 150,
    y: 245,
    sketch:
      "The Boys' volatile leader is terminally ill from Temp V exposure and hallucinating Becca and Joe Kessler. By the end of season 4, he chooses the violent path, kills Victoria Neuman, and leaves with the supe-killing virus.",
  },
  {
    id: "homelander",
    name: "Homelander",
    x: 640,
    y: 130,
    sketch:
      "Vought's most powerful supe is no longer trying to look stable. After pushing Ryan toward cruelty and clearing out enemies inside Vought, he gains direct influence over the incoming U.S. regime through Calhoun.",
  },
  {
    id: "ryan",
    name: "Ryan",
    x: 370,
    y: 95,
    sketch:
      "Ryan is caught between Butcher's memory of Becca and Homelander's hunger for legacy. He has killed before by accident, and in the finale he rejects the CIA safe-house plan after accidentally killing Grace Mallory.",
  },
  {
    id: "starlight",
    name: "Annie / Starlight",
    x: 340,
    y: 330,
    sketch:
      "Annie regains her powers after being impersonated by a shapeshifter who infiltrates The Boys and compromises Hughie. She ends the season escaping capture and flying again, but the team is scattered.",
  },
  {
    id: "hughie",
    name: "Hughie",
    x: 430,
    y: 375,
    sketch:
      "Hughie spends season 4 grieving his father, trying to choose mercy, and being manipulated by a shapeshifter posing as Annie. By the finale he is captured as Homelander's martial-law net closes.",
  },
  {
    id: "mm",
    name: "MM",
    x: 260,
    y: 420,
    sketch:
      "MM tries to keep The Boys operational while Butcher spirals and his own health and family pressures mount. The finale leaves him captured, showing how badly the team has lost control.",
  },
  {
    id: "frenchie",
    name: "Frenchie",
    x: 515,
    y: 420,
    sketch:
      "Frenchie is burdened by guilt over his past violence and his relationship with Colin. He and Kimiko reconnect, but the finale separates them as Vought-aligned forces round up The Boys.",
  },
  {
    id: "kimiko",
    name: "Kimiko",
    x: 615,
    y: 380,
    sketch:
      "Kimiko continues fighting through trauma tied to the Shining Light. She and Frenchie finally acknowledge their bond, then are pulled apart during the finale's crackdown.",
  },
  {
    id: "neuman",
    name: "Victoria Neuman",
    x: 505,
    y: 225,
    sketch:
      "Neuman is the secret head-popping supe who has climbed to the vice presidency. She seeks a deal with The Boys when Homelander becomes too dangerous, but Butcher kills her before that alliance can form.",
  },
  {
    id: "sage",
    name: "Sister Sage",
    x: 710,
    y: 250,
    sketch:
      "The world's smartest person joins Homelander's operation and designs a long game around political destabilization. Even when she appears sidelined, the finale reveals the chaos largely landed where she wanted.",
  },
  {
    id: "atrain",
    name: "A-Train",
    x: 670,
    y: 340,
    sketch:
      "A-Train becomes a secret source for The Boys, risking his place inside Vought. His betrayal is exposed enough that he has to run, making him a rare supe who chose conscience over the machine.",
  },
  {
    id: "calhoun",
    name: "Steven Calhoun",
    x: 585,
    y: 45,
    sketch:
      "Calhoun becomes president after the assassination attempt and political collapse around Singer. Homelander immediately pressures him into declaring martial law and deputizing supes.",
  },
  {
    id: "soldierboy",
    name: "Soldier Boy",
    x: 735,
    y: 75,
    sketch:
      "Soldier Boy remains alive in containment after season 3. The season 4 finale's end-state hints that Homelander now knows where he is, but the demo stops before any future payoff.",
  },
];

const THE_BOYS_EDGES: GraphEdge[] = [
  {
    from: "butcher",
    to: "ryan",
    type: "family",
    label: "Butcher promised Becca he would protect Ryan",
  },
  {
    from: "homelander",
    to: "ryan",
    type: "family",
    label: "father and son, with Homelander pulling Ryan toward his worldview",
  },
  {
    from: "butcher",
    to: "homelander",
    type: "enemy",
    label: "primary conflict across the series",
  },
  {
    from: "butcher",
    to: "neuman",
    type: "betrayal",
    label: "potential alliance collapses when Butcher kills Neuman",
  },
  {
    from: "homelander",
    to: "sage",
    type: "ally",
    label: "Sage architects the political play Homelander benefits from",
  },
  {
    from: "homelander",
    to: "calhoun",
    type: "control",
    label: "Calhoun is pressured into martial law and supe deputization",
  },
  {
    from: "starlight",
    to: "hughie",
    type: "romantic",
    label: "partners, strained by the shapeshifter deception",
  },
  {
    from: "frenchie",
    to: "kimiko",
    type: "romantic",
    label: "love acknowledged just as the team is split apart",
  },
  {
    from: "atrain",
    to: "starlight",
    type: "ally",
    label: "A-Train secretly helps The Boys against Vought",
  },
  {
    from: "mm",
    to: "butcher",
    type: "ally",
    label: "same mission, but MM cannot control Butcher's escalation",
  },
  {
    from: "homelander",
    to: "soldierboy",
    type: "family",
    label: "Soldier Boy is Homelander's biological father",
  },
  {
    from: "sage",
    to: "neuman",
    type: "threat",
    label: "Neuman's death helps complete Sage's destabilization plan",
  },
  {
    from: "butcher",
    to: "soldierboy",
    type: "enemy",
    label: "former temporary weapon against Homelander, then a broken alliance",
  },
  {
    from: "hughie",
    to: "mm",
    type: "ally",
    label: "The Boys' non-supe core trying to survive the collapse",
  },
];

const THE_BOYS_STATUS: CharacterStatus[] = [
  {
    name: "Billy Butcher",
    state: "Alive, terminally ill, and in possession of the supe-killing virus.",
    motivation: "Protect Ryan, destroy Homelander, and punish supes even when those goals conflict.",
    risk: "Most likely to cross the line the product should make explicit before the next episode.",
  },
  {
    name: "Homelander",
    state: "In political command through Calhoun and empowered by martial law.",
    motivation: "Make the country accept supe rule without apology.",
    risk: "Can use state power, Vought, and deputized supes against The Boys.",
  },
  {
    name: "Ryan",
    state: "Free, frightened, and no longer safely in Butcher or Mallory's care.",
    motivation: "Avoid being controlled while deciding what kind of person he wants to be.",
    risk: "His choices may decide whether Butcher or Homelander wins the emotional war.",
  },
  {
    name: "Victoria Neuman",
    state: "Dead after asking The Boys for protection from Homelander.",
    motivation: "Was trying to survive the machine she helped build.",
    risk: "Her death clears a path for the authoritarian end-state and leaves the virus with Butcher.",
  },
  {
    name: "Annie / Starlight",
    state: "Escaped capture and has her powers back.",
    motivation: "Save the team and reclaim herself after being impersonated.",
    risk: "She is one of the few pieces still mobile after the roundup.",
  },
  {
    name: "Hughie",
    state: "Captured after trusting the wrong version of Annie.",
    motivation: "Keep choosing decency in a world that punishes it.",
    risk: "His emotional fatigue makes him vulnerable, but also keeps the story from becoming pure revenge.",
  },
  {
    name: "MM",
    state: "Captured during the finale's coordinated crackdown.",
    motivation: "Hold the team together while protecting his family.",
    risk: "His leadership gap leaves no stable counterweight to Butcher.",
  },
  {
    name: "Frenchie",
    state: "Captured and separated from Kimiko.",
    motivation: "Atone for old violence and protect Kimiko.",
    risk: "His guilt has been exploitable all season.",
  },
  {
    name: "Kimiko",
    state: "Captured after finally reconnecting with Frenchie.",
    motivation: "Survive trauma without losing the people who made her human again.",
    risk: "The finale weaponizes separation right after emotional closure.",
  },
  {
    name: "A-Train",
    state: "On the run after betraying Vought from inside.",
    motivation: "Make one honest choice after years of cowardice and self-preservation.",
    risk: "He is useful to The Boys, but exposed and hunted.",
  },
  {
    name: "Sister Sage",
    state: "Back in Homelander's good graces after the plan works.",
    motivation: "Prove she can move the board even when everyone underestimates her.",
    risk: "Her motives may not fully align with Homelander's, which makes her dangerous.",
  },
  {
    name: "Steven Calhoun",
    state: "President under Homelander's pressure.",
    motivation: "Survive the transition of power.",
    risk: "Legitimizes supe enforcement at national scale.",
  },
];

const THE_BOYS_SECRETS: SecretFact[] = [
  {
    topic: "The supe-killing virus",
    whatToRemember:
      "A virus exists that can kill supes. Butcher ends season 4 with access to it.",
    whyItMatters:
      "It turns the next season's conflict from expose-Vought to who-controls-the-bioweapon.",
  },
  {
    topic: "Neuman's identity",
    whatToRemember:
      "Neuman was a secret supe and the head-popper behind multiple political deaths.",
    whyItMatters:
      "Her death removes a power player and reveals how fragile the anti-Homelander coalition was.",
  },
  {
    topic: "Ryan's accident with Mallory",
    whatToRemember:
      "Ryan accidentally kills Grace Mallory after rejecting the CIA containment plan.",
    whyItMatters:
      "He is neither safely with Butcher nor fully under Homelander's control.",
  },
  {
    topic: "The shapeshifter",
    whatToRemember:
      "A shapeshifter impersonates Annie and infiltrates The Boys' inner circle.",
    whyItMatters:
      "Hughie's trust and Annie's sense of self both take a direct hit before the finale.",
  },
  {
    topic: "A-Train's leak",
    whatToRemember:
      "A-Train has been secretly helping The Boys while still inside Vought.",
    whyItMatters:
      "He is a possible future ally, but he cannot safely stay in Vought's orbit.",
  },
  {
    topic: "Sage's plan",
    whatToRemember:
      "Sage's political chaos play succeeds even after Homelander thinks she has failed.",
    whyItMatters:
      "The smartest character on the board may be shaping events beyond Homelander's awareness.",
  },
  {
    topic: "Soldier Boy",
    whatToRemember:
      "Soldier Boy is alive in containment and is Homelander's biological father.",
    whyItMatters:
      "He is a loaded weapon in the family-power triangle around Homelander and Ryan.",
  },
];

const THE_BOYS_QUESTIONS: string[] = [
  "Butcher has the supe-killing virus. Is he trying to kill Homelander only, or all supes?",
  "Where does Ryan go after killing Mallory and walking away from the safe-house plan?",
  "Can Annie free Hughie, MM, Frenchie, and Kimiko after the roundup?",
  "Does A-Train become a real ally now that he has burned his Vought identity?",
  "How much of the new political order belongs to Homelander, and how much belongs to Sage?",
  "Will Soldier Boy become leverage against Homelander, Ryan, or both?",
  "What happens to the country now that supes have state-backed authority?",
  "Can The Boys still function as a team after Butcher's final choice?",
];

const THE_BOYS_STORY_STATES: Record<string, StoryState> = {
  S01E08: {
    boundaryCode: "S01E08",
    nodes: THE_BOYS_S1E8_NODES,
    edges: THE_BOYS_S1E8_EDGES,
    characterStatus: THE_BOYS_S1E8_STATUS,
    secrets: THE_BOYS_S1E8_SECRETS,
    openQuestions: THE_BOYS_S1E8_QUESTIONS,
  },
  S02E05: {
    boundaryCode: "S02E05",
    nodes: THE_BOYS_S2E5_NODES,
    edges: THE_BOYS_S2E5_EDGES,
    characterStatus: THE_BOYS_S2E5_STATUS,
    secrets: THE_BOYS_S2E5_SECRETS,
    openQuestions: THE_BOYS_S2E5_QUESTIONS,
  },
  S02E08: {
    boundaryCode: "S02E08",
    nodes: THE_BOYS_S2E8_NODES,
    edges: THE_BOYS_S2E8_EDGES,
    characterStatus: THE_BOYS_S2E8_STATUS,
    secrets: THE_BOYS_S2E8_SECRETS,
    openQuestions: THE_BOYS_S2E8_QUESTIONS,
  },
  S03E08: {
    boundaryCode: "S03E08",
    nodes: THE_BOYS_S3E8_NODES,
    edges: THE_BOYS_S3E8_EDGES,
    characterStatus: THE_BOYS_S3E8_STATUS,
    secrets: THE_BOYS_S3E8_SECRETS,
    openQuestions: THE_BOYS_S3E8_QUESTIONS,
  },
  S04E08: {
    boundaryCode: "S04E08",
    nodes: THE_BOYS_NODES,
    edges: THE_BOYS_EDGES,
    characterStatus: THE_BOYS_STATUS,
    secrets: THE_BOYS_SECRETS,
    openQuestions: THE_BOYS_QUESTIONS,
  },
};

export const THE_BOYS_RECAP: Recap = {
  slug: "the-boys-s4-finale",
  series: "The Boys",
  platform: "Prime Video",
  watchedThrough: "S04E08 - Season Four Finale",
  nextEpisode: "S05E01",
  spoilerBoundary: "No Season 5 facts, casting leaks, trailers, or set rumors.",
  sourceNote:
    "Prototype summaries are paraphrased from The Boys Wiki season and episode pages, bounded through Season 4 only.",
  seasonSummaries: THE_BOYS_SEASON_SUMMARIES,
  episodeSummaries: THE_BOYS_EPISODE_SUMMARIES,
  storyStates: THE_BOYS_STORY_STATES,
  nodes: THE_BOYS_NODES,
  edges: THE_BOYS_EDGES,
  characterStatus: THE_BOYS_STATUS,
  secrets: THE_BOYS_SECRETS,
  openQuestions: THE_BOYS_QUESTIONS,
};

export const RECAPS: Record<string, Recap> = {
  "the-boys-s4-finale": THE_BOYS_RECAP,
};

export function getRecap(slug: string): Recap | null {
  return RECAPS[slug] ?? null;
}

export const EDGE_META: Record<
  EdgeType,
  { label: string; color: string; soft: string; description: string }
> = {
  ally: {
    label: "Ally",
    color: "var(--edge-ally)",
    soft: "var(--edge-ally-soft)",
    description: "Working toward the same outcome, openly or secretly.",
  },
  enemy: {
    label: "Enemy",
    color: "var(--edge-enemy)",
    soft: "var(--edge-enemy-soft)",
    description: "Direct conflict or active opposition.",
  },
  family: {
    label: "Family",
    color: "var(--edge-family)",
    soft: "var(--edge-family-soft)",
    description: "Blood, parental, or chosen-family pressure.",
  },
  romantic: {
    label: "Romantic",
    color: "var(--edge-romantic)",
    soft: "var(--edge-romantic-soft)",
    description: "Partners, lovers, or intimate emotional stakes.",
  },
  control: {
    label: "Control",
    color: "var(--edge-control)",
    soft: "var(--edge-control-soft)",
    description: "Coercion, leverage, political capture, or dependency.",
  },
  betrayal: {
    label: "Betrayal",
    color: "var(--edge-betrayal)",
    soft: "var(--edge-betrayal-soft)",
    description: "Trust broken, reversal, or fatal double-cross.",
  },
  threat: {
    label: "Threat",
    color: "var(--edge-threat)",
    soft: "var(--edge-threat-soft)",
    description: "A dangerous relationship that has not fully detonated.",
  },
  unknown: {
    label: "Unknown",
    color: "var(--edge-unknown)",
    soft: "var(--edge-unknown-soft)",
    description: "The product knows there is tension, but the outcome is open.",
  },
};
