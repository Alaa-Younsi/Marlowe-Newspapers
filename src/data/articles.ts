import type { Article } from '../types';

export const articles: Article[] = [
  // ─── MOVIES ────────────────────────────────────────────────────────────
  {
    id: 'chinatown-1974',
    slug: 'chinatown-1974',
    title: 'Chinatown',
    subtitle: 'Roman Polanski, 1974',
    headline: "POLANSKI'S MASTERWORK REMAINS UNBEATEN AFTER FIFTY YEARS",
    category: 'movies',
    coverImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'A dim cinema with red velvet seats — the perfect setting for Chinatown',
    cutline: 'The red seats of a dying picture house. Chinatown was made for rooms exactly like this.',
    publishDate: '2025-01-15',
    readTime: 14,
    tags: ['roman polanski', 'neo-noir', 'jack nicholson', 'robert towne', 'american cinema', '1970s'],
    rating: 10.0,
    featured: true,
    isBreaking: false,
    edition: 'VOL. I, NO. 1',
    synopsis: 'Jake Gittes walks into a case he thinks he understands. He does not. Neither do we, until it is too late. Roman Polanski and Robert Towne constructed the most perfect trap in American cinema — a film where the hero\'s competence is irrelevant, because the forces arrayed against him are not merely criminal, they are systemic.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — JANUARY 15, 2025',
      },
      {
        type: 'paragraph',
        content: 'Jake Gittes walks into a case he thinks he understands. A jealous wife, a philandering husband — routine work for a man in his line of business. He follows the mark, takes the photographs, collects his fee. He has done this a hundred times. He knows how this ends. He is wrong about everything, and the film spends the next two hours proving it to him, one layer at a time, with the patience of a man who has already decided you deserve to suffer.',
      },
      {
        type: 'pullquote',
        content: 'Forget it, Jake. It\'s Chinatown.',
      },
      {
        type: 'paragraph',
        content: 'Robert Towne\'s screenplay is perhaps the finest ever written for an American film. Not because of its cleverness — though it is savagely clever — but because of its philosophical architecture. Most mystery screenplays are constructed around withholding information. Towne\'s construction is different: he withholds understanding. We see the facts almost as they happen. What we cannot grasp is their meaning, their weight, the system that makes them inevitable.',
      },
      {
        type: 'heading',
        content: 'The Script as Moral Argument',
      },
      {
        type: 'paragraph',
        content: 'Noah Cross — played by John Huston with the warmth of a man who genuinely believes virtue and corruption are the same thing — is not a villain in the operatic tradition. He does not twirl metaphorical mustaches. He is simply a man who decided, long ago, that power justifies itself. The land grab at the film\'s center is almost incidental. What Cross represents is something darker: the honest face of corruption, the kind that does not hide because it does not need to.',
      },
      {
        type: 'paragraph',
        content: 'Gittes is a man of considerable skill deployed against an adversary that operates on a different plane entirely. His intelligence, his instincts, his experience — none of it matters. The film is not about the failure of a detective. It is about the failure of competence as a moral category. You can be very good at your job and still be completely powerless against systems built to sustain themselves.',
      },
      {
        type: 'subheading',
        content: 'The Ending',
      },
      {
        type: 'paragraph',
        content: 'The ending of Chinatown is one of cinema\'s most devastating finales, not because it is shocking — though it is — but because it arrives with the inevitability of a Greek tragedy. Polanski, who replaced Towne\'s original ending with this one over Towne\'s objection, understood something the screenwriter did not: that in a film about how power perpetuates itself, the only honest conclusion is the perpetuation of power. Evil wins. The innocent are destroyed. The guilty walk away in the dark. And life continues.',
      },
      {
        type: 'paragraph',
        content: 'Nicholson\'s performance walks a perfect line between arrogance and vulnerability. When Gittes finally understands — when the full weight of what has happened lands on him — Nicholson does not play it theatrically. He just stands there, diminished. A very good detective who was never going to be good enough.',
      },
      {
        type: 'divider',
        content: '',
      },
      {
        type: 'paragraph',
        content: 'Fifty years have not dulled a frame of it. The cinematography by John Alonzo still feels like photography from a dream you can\'t quite escape. The score by Jerry Goldsmith — melancholy and warm and wrong — plays like a lullaby written for a funeral. Every technical element serves the central argument: that some places, and some systems, and some crimes, simply cannot be fixed. Not by a good man. Not by any man.',
      },
    ],
    personalTake: 'It is the greatest American film ever made. I have watched it more times than I can count and the ending lands harder each time, not easier. That is the mark of something true.',
    alternativeEnding: 'What if Evelyn Mulwray had survived? Towne\'s original ending had Gittes accidentally killing Evelyn while trying to protect her, then watching Cross take Katherine anyway. Polanski\'s version is crueler — she dies trying to escape, Katherine is taken, and Gittes is left standing in a street he cannot understand, surrounded by people telling him to go home, that this is how things work here. Towne\'s ending makes Gittes tragic. Polanski\'s makes him irrelevant. The director was right.',
    recommendation: 'Essential. Non-negotiable. If you have not seen Chinatown, you have an appointment with it immediately.',
    metaDescription: 'A full critical analysis of Chinatown (1974) — Roman Polanski\'s masterpiece of American noir. The script, the ending, Noah Cross, and why it remains the greatest American film.',
  },

  {
    id: 'blade-runner-2049',
    slug: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    subtitle: 'Denis Villeneuve, 2017',
    headline: 'VILLENEUVE ASKS WHAT WE ARE AFRAID TO ANSWER',
    category: 'movies',
    coverImage: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Rain-soaked city lights reflected in dark puddles — the world of Blade Runner',
    cutline: 'Neon on wet concrete. The world of 2049 was already here — we just have not noticed yet.',
    publishDate: '2025-02-03',
    readTime: 11,
    tags: ['denis villeneuve', 'science fiction', 'roger deakins', 'ryan gosling', 'sequel', 'identity'],
    rating: 9.0,
    featured: false,
    isBreaking: false,
    edition: 'VOL. I, NO. 2',
    synopsis: 'Denis Villeneuve was handed an impossible task: to follow one of cinema\'s most iconic films without diminishing it. His solution was to make a different kind of film entirely — slower, quieter, more philosophically explicit — and to trust that audiences would follow him into the dark.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — FEBRUARY 3, 2025',
      },
      {
        type: 'paragraph',
        content: 'Denis Villeneuve\'s expansion of Ridley Scott\'s 1982 original is, at its core, a film about the validity of experience. If a replicant is programmed to feel, do those feelings count? If a memory is implanted rather than lived, does it constitute a real past? And if the answer to both is no — if experience requires biological authenticity to matter — then what exactly distinguishes a human being from a very sophisticated machine? The film asks these questions and, admirably, refuses to answer them cleanly.',
      },
      {
        type: 'pullquote',
        content: 'Everything you want to be you already are.',
      },
      {
        type: 'paragraph',
        content: 'Ryan Gosling plays K with a performance built on restraint. He has learned not to expect meaning from his work, and Gosling embodies this with a stillness that occasionally approaches the eerie. When K discovers what he believes to be evidence of his own extraordinary origin, the performance shifts almost imperceptibly — not into hope exactly, but into the dangerous territory adjacent to it.',
      },
      {
        type: 'heading',
        content: 'Deakins and the Argument of Beauty',
      },
      {
        type: 'paragraph',
        content: 'Roger Deakins\' Academy Award-winning cinematography is not merely technically accomplished — it is philosophically engaged. Every frame is a composition that asks whether beauty in a dying world is meaningful or obscene. The wide shots of the protein farms extending to the horizon, orange and industrial and somehow majestic. The orange fog of the Las Vegas sequence, where Harrison Ford\'s Deckard emerges from a world gone amber and warm and fundamentally wrong. Deakins photographs decay as if it were gorgeous, and the film needs this contradiction.',
      },
      {
        type: 'paragraph',
        content: 'The pacing will drive impatient viewers away, and this is correct. Blade Runner 2049 is not a film for audiences who require story to move quickly. It is a film that believes in the weight of silence, in the meaning carried by a held shot, in the emotional intelligence of duration itself. Villeneuve trusts the image in a way few commercial directors do.',
      },
      {
        type: 'paragraph',
        content: 'The film\'s major miscalculation — and it is a significant one — is its final act, where the philosophical machinery is temporarily replaced with conventional chase-and-confrontation plotting. The film recovers its gravity in its final minutes, but the detour is costly. A film this committed to contemplation is ill-served by the intrusion of obligatory action sequences.',
      },
      {
        type: 'paragraph',
        content: 'But what remains is extraordinary: a $150 million science fiction film that asks genuine philosophical questions about the nature of consciousness, memory, and human dignity — and takes those questions seriously enough to leave them open. In a marketplace that demands resolution, Villeneuve\'s refusal is almost an act of defiance.',
      },
    ],
    personalTake: 'The fact that this film exists at all, made with this budget and this level of seriousness, inside a studio system — is itself a minor miracle. That it is also very good makes it a significant one.',
    recommendation: 'See it on the largest screen available. See the original Blade Runner first.',
    metaDescription: 'A review of Blade Runner 2049 — Denis Villeneuve\'s philosophically rich sequel. Roger Deakins\' cinematography, memory, identity, and what it means to be real.',
  },

  // ─── TV SHOWS ──────────────────────────────────────────────────────────
  {
    id: 'true-detective-s1',
    slug: 'true-detective-season-1',
    title: 'True Detective — Season One',
    subtitle: 'Nic Pizzolatto, HBO, 2014',
    headline: 'RUST COHLE SAID WHAT PHILOSOPHY SPENT CENTURIES AVOIDING',
    category: 'tv-shows',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Dark Louisiana marshland at dusk — the landscape of True Detective',
    cutline: 'The bayou does not offer comfort. Rust Cohle found his philosophy here.',
    publishDate: '2025-01-28',
    readTime: 13,
    tags: ['nic pizzolatto', 'matthew mcconaughey', 'woody harrelson', 'hbo', 'pessimism', 'louisiana'],
    rating: 9.5,
    featured: true,
    isBreaking: false,
    edition: 'VOL. I, NO. 3',
    synopsis: 'Rust Cohle is the most philosophically honest character in television history. Not the smartest. Not the most tormented. But the most honest — and in a medium built on comforting lies, that is a genuinely radical thing to be.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — JANUARY 28, 2025',
      },
      {
        type: 'paragraph',
        content: 'Rust Cohle\'s pessimism is not a pose. This is the first thing to understand about him, and the thing that separates True Detective\'s first season from every other prestige television drama that has tried to use nihilism as aesthetic texture. For Cohle, the belief that consciousness is a tragic mistake — that human beings are nodes of awareness in a universe that never intended awareness — is not a style. It is a survival mechanism. It is how he continues to function after losing everything.',
      },
      {
        type: 'pullquote',
        content: 'I think human consciousness is a tragic misstep in evolution. We became too self-aware.',
      },
      {
        type: 'paragraph',
        content: 'Matthew McConaughey\'s performance is one of the great achievements of American television acting. He plays Cohle in three distinct time periods across eight episodes, and in each period, the character is recognizably himself and recognizably damaged in different ways. The 1995 Cohle is burning, intense, barely contained. The 2002 Cohle is hollow, drinking too much, still processing. The 2012 Cohle is a man who has descended as far as descent allows and is still, somehow, standing.',
      },
      {
        type: 'heading',
        content: 'Cohle vs. Hart — The Real Argument',
      },
      {
        type: 'paragraph',
        content: 'The dynamic between Cohle and Marty Hart is not a simple foil relationship — the idealist vs. the cynic. Hart is not an idealist. He is a man of average moral capacity who genuinely believes he is a man of above-average moral capacity, and this self-delusion is the source of every mistake he makes. His marriage fails not because he is a bad person, exactly, but because he refuses to examine himself with the same corrosive clarity he expects from Cohle.',
      },
      {
        type: 'paragraph',
        content: 'What Cary Joji Fukunaga\'s direction understands — and what made the show a phenomenon — is that the landscape is not metaphor. The Louisiana bayou is not standing in for something. The aerial tracking shots over the industrial-agricultural complex, the wastelands of strip malls and refineries, the Spanish moss hanging over everything like historical guilt — this is the actual world that makes the Dora Lange murder possible. Pizzolatto\'s central thesis is geographic: that certain kinds of evil require certain kinds of landscape to sustain themselves.',
      },
      {
        type: 'subheading',
        content: 'The Yellow King as Misdirection',
      },
      {
        type: 'paragraph',
        content: 'Some viewers were disappointed by the resolution of the Yellow King mystery — that the elaborate occult mythology turned out to be the covering story for a family of predators in a landscape of institutional complicity. This disappointment misunderstands what the show was doing. The Yellow King was never the point of True Detective. The point was what it cost Cohle to believe, for seventeen years, that the truth mattered enough to pursue.',
      },
      {
        type: 'paragraph',
        content: 'The final scene — Cohle and Hart lying on the grass, looking at the stars, Cohle describing the darkness and the light — is one of television\'s genuine artistic achievements. It earns its hopefulness, which is rare. The show spent seven and a half episodes arguing that the dark outweighs the light, and then gives Cohle one quiet moment of equivocation. Not conversion — equivocation. The darkness is still winning. But there is some light.',
      },
    ],
    personalTake: 'I have watched the finale three times and the final conversation makes me feel something I cannot name precisely. Cohle earned that moment. I believe in it.',
    recommendation: 'Eight hours. Watch them all, back to back, in the dark. Pay attention to the spaces between the dialogue.',
    metaDescription: 'A full analysis of True Detective Season 1 — Rust Cohle\'s pessimism, the Hart/Cohle dynamic, the Yellow King mystery, and the extraordinary final scene.',
  },

  {
    id: 'the-wire',
    slug: 'the-wire',
    title: 'The Wire',
    subtitle: 'David Simon, HBO, 2002–2008',
    headline: 'FIFTY YEARS FROM NOW, SCHOLARS WILL STILL STUDY THE WIRE',
    category: 'tv-shows',
    coverImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Urban skyline at dusk — the Baltimore of The Wire lives here, in the shadows',
    cutline: 'The city as a system. David Simon charted every broken institution in this skyline.',
    publishDate: '2025-03-01',
    readTime: 16,
    tags: ['david simon', 'hbo', 'baltimore', 'omar little', 'mcnulty', 'institutional critique'],
    rating: 10.0,
    featured: false,
    isBreaking: true,
    edition: 'VOL. I, NO. 4',
    synopsis: 'The Wire is not a television show. It is a sociological argument delivered through the medium of serialized drama. David Simon spent five seasons dismantling, institution by institution, the lie at the center of the American experiment — that the system works for everyone who works within it.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — MARCH 1, 2025',
      },
      {
        type: 'paragraph',
        content: 'Let us begin with the institutional argument, because that is what The Wire is. Season one is about the Baltimore Police Department and the drug trade as mirror institutions, each consuming its most dedicated members for the sake of its own perpetuation. Season two is about the death of the American working class as embodied in the collapse of the ports. Season three is about political power and its corruption. Season four — the masterpiece — is about education as a system designed to fail children it cannot categorize. Season five is about the complicity of journalism in the myths that allow all the other institutions to continue failing.',
      },
      {
        type: 'pullquote',
        content: 'A man\'s gotta have a code.',
      },
      {
        type: 'paragraph',
        content: 'What makes The Wire extraordinary as art — not just as argument — is that Simon never sacrifices character for thesis. Every person in the show, from Cedric Daniels to Bubbles to Tommy Carcetti to Dukie, is a complete human being operating within a system that has already determined their fate before we meet them. The tragedy is not individual. The tragedy is structural. But we feel it through individuals, which is why it works.',
      },
      {
        type: 'heading',
        content: 'Omar Little',
      },
      {
        type: 'paragraph',
        content: 'Omar Little is one of the most original characters in American television, and his originality lies entirely in his moral coherence within a world of moral incoherence. He robs drug dealers because drug dealers have chosen to operate outside the law, and he has chosen to make his living in that same space. He will not harm civilians. He will not lie about what he is. He has a code, and the code is rigidly maintained. Michael K. Williams plays him with a kind of worn majesty, and his exit from the show — mundane, sudden, wrong — is the show\'s most political act.',
      },
      {
        type: 'paragraph',
        content: 'Omar deserves a hero\'s death. He does not get one. The point is that in The Wire\'s Baltimore, deserving and receiving are not connected categories.',
      },
      {
        type: 'subheading',
        content: 'Season Five: The Self-Critique',
      },
      {
        type: 'paragraph',
        content: 'The final season\'s newsroom arc is underrated and misread. Simon — himself a former journalist — was writing about his own profession with the same unflinching eye he turned on everything else. The Baltimore Sun represented here is a paper in institutional decline: cutting staff, chasing stories that fit existing narratives, giving prizes to work it can quantify over work that actually matters. McNulty\'s parallel fabricated serial killer plot has been called too elaborate, but it works as a dark mirror of what journalists do when they manufacture urgency for grant money or readership.',
      },
      {
        type: 'paragraph',
        content: 'No television show has come close to what The Wire accomplished. Not Breaking Bad — which is superb but fundamentally a moral fable about individual choices. Not The Sopranos — which is a great show about psychology and family. The Wire is about systems. It is the only American television show that has ever taken seriously the possibility that the problem is the entire structure, not the individuals who inhabit it.',
      },
    ],
    personalTake: 'I have recommended this show to more people than any other piece of art in any medium. I will continue doing this until I stop watching things entirely. It is the most important television ever made in America.',
    recommendation: 'Five seasons. All required. Begin with season one and do not skip season two because you find the docks storyline slow. The slowness is the argument.',
    metaDescription: 'A comprehensive critical analysis of The Wire — David Simon\'s institutional masterpiece. Omar Little, season four\'s education arc, the journalism season, and why no prestige drama has matched it.',
  },

  // ─── ANIME ─────────────────────────────────────────────────────────────
  {
    id: 'monster-2004',
    slug: 'monster-2004',
    title: 'Monster',
    subtitle: 'Naoki Urasawa / Madhouse, 2004',
    headline: "URASAWA'S MONSTER IS A QUESTION THAT EARNS ITS DARKNESS",
    category: 'anime',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'A rain-soaked European street at night — the Germany of Monster',
    cutline: 'Rain on cobblestones. Monster\'s Germany never quite felt like the present.',
    publishDate: '2025-02-14',
    readTime: 15,
    tags: ['naoki urasawa', 'madhouse', 'psychological', 'Johan Liebert', 'tenma', 'moral philosophy'],
    rating: 10.0,
    featured: true,
    isBreaking: false,
    edition: 'VOL. I, NO. 5',
    synopsis: 'Monster is the answer to a question no one asked: can a seventy-four episode anime series sustain genuine philosophical weight across its entire length? Urasawa\'s answer is yes, and he proves it by building a mystery around a character whose power derives entirely from what he represents rather than what he does.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — FEBRUARY 14, 2025',
      },
      {
        type: 'paragraph',
        content: 'Johan Liebert is not a character in the conventional sense. He is a proposition. His function in Monster\'s architecture is to embody the idea that genuine evil — not psychopathy, not trauma-response, not economic necessity — but something that looks like a considered philosophical choice, is possible. The question Urasawa is really asking is this: can we coherently imagine a human being who has looked at existence and found it meaningless, and who has constructed from that meaninglessness a set of actions that are not madness but logic?',
      },
      {
        type: 'pullquote',
        content: 'I have no name. I am nothing. A monster.',
      },
      {
        type: 'paragraph',
        content: 'The choice in episode one — Dr. Kenzo Tenma\'s decision to operate on a child brought in with a gunshot wound rather than the town\'s mayor, who arrived simultaneously and whose treatment was demanded by hospital administration — is both the moral spine and the engine of everything that follows. Tenma acts correctly. He saves the more critical patient regardless of social status. The consequences of this correct action will consume the next decade of his life.',
      },
      {
        type: 'heading',
        content: 'The Weight of a Correct Decision',
      },
      {
        type: 'paragraph',
        content: 'Monster never lets Tenma escape the irony of his founding choice. He saved Johan because saving Johan was right. The fact that Johan will go on to commit atrocities does not retroactively change the ethics of the decision. Every life saved is equally worth saving. Urasawa understands that this principle, which sounds obvious and correct in the abstract, becomes agonizing when the saved life belongs to someone like Johan.',
      },
      {
        type: 'paragraph',
        content: 'Tenma spends the series not questioning whether he was right to save Johan, but asking whether he is capable of correcting his correct decision. He must ask whether, having saved a life, one is ever permitted to take it back.',
      },
      {
        type: 'subheading',
        content: 'The Pacing as Argument',
      },
      {
        type: 'paragraph',
        content: 'Monster is slow. It is deliberately, almost provocatively slow. Johan appears in perhaps a third of the episodes, and his appearances are rarely violent. His power is ambient — he changes the people he encounters, and we see those changes radiate outward like seismic events felt long after the initial disturbance. This pacing forces the viewer to sit with ideas rather than spectacle, which is exactly what Urasawa needs. A faster Johan would be a smaller Johan.',
      },
      {
        type: 'paragraph',
        content: 'The ending has divided viewers. I find it precise and honest. The series does not end with Johan\'s destruction because that would suggest the questions he embodies can be resolved. Urasawa leaves the final meaning ambiguous because the questions Monster asks do not have final meanings. They just have weight.',
      },
    ],
    personalTake: 'My single most recommended piece of animated work. I am aware that saying this is a cliché at this point in criticism. I have checked and the cliché is correct.',
    recommendation: 'Begin with episode one and commit. The first ten episodes establish the machinery. After that, you cannot stop.',
    metaDescription: 'A critical analysis of Monster (2004) — Johan Liebert as philosophical proposition, Tenma\'s founding choice, the pacing as argument, and why Urasawa\'s conclusion is precisely right.',
  },

  {
    id: 'vinland-saga',
    slug: 'vinland-saga',
    title: 'Vinland Saga',
    subtitle: 'Makoto Yukimura / WIT & MAPPA, 2019–2023',
    headline: 'THE BEST WAR STORY EVER TOLD IS AN ANIME ABOUT VIKINGS',
    category: 'anime',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Dark atmospheric abstract — the cold world of Vinland Saga',
    cutline: 'Every war story is about what violence costs the ones who survive it.',
    publishDate: '2025-02-22',
    readTime: 12,
    tags: ['makoto yukimura', 'WIT studio', 'MAPPA', 'askeladd', 'thorfinn', 'pacifism', 'vikings'],
    rating: 9.5,
    featured: false,
    isBreaking: false,
    edition: 'VOL. I, NO. 6',
    synopsis: 'Vinland Saga begins as a revenge story and then, with extraordinary deliberateness, dismantles the moral logic of revenge. Askeladd is the mechanism of this dismantling, and he is one of the most fully realized characters in the entire animated medium.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — FEBRUARY 22, 2025',
      },
      {
        type: 'paragraph',
        content: 'Askeladd is cynical in the way that only an intelligent man who has survived terrible things can be cynical — not as a style, but as a hard-won understanding of how power actually operates. He knows exactly what the men around him are, including himself, and this knowledge does not prevent him from functioning. It makes him phenomenally effective. He is also, in his way, the most moral character in the show\'s first arc, which is either a profound irony or the central point. Possibly both.',
      },
      {
        type: 'pullquote',
        content: 'You have no enemies. Real warriors have no need for opponents.',
      },
      {
        type: 'paragraph',
        content: 'Thorfinn\'s rage in the first season is not heroic, and the show does not present it as such. He is a child who has substituted vengeance for grief, who has sustained himself through years of servitude and suffering with one purpose: to kill Askeladd in honorable combat and somehow transform the killing into justice. The genius of Askeladd\'s character is that he understands this, participates in it, and keeps Thorfinn alive not in spite of this arrangement but because of it.',
      },
      {
        type: 'heading',
        content: 'The Farm Arc',
      },
      {
        type: 'paragraph',
        content: 'The Farm arc — the second half, following Thorfinn\'s enslavement — is the most divisive section of the series and the most important. After a first season that delivers exceptional action and a profoundly satisfying climax, Vinland Saga commits two full seasons to Thorfinn learning to be a human being instead of a weapon. The action stops. The focus becomes labor, crops, relationships, the texture of a life lived without violence.',
      },
      {
        type: 'paragraph',
        content: 'Audiences rejected this, to the extent that it became a meme — viewers complaining that the anime had become boring after its spectacular opening. This is a failure of reading on their part, not a failure of storytelling on Yukimura\'s. The Farm arc is the argument the entire first season was building toward. Without it, Vinland Saga is simply an excellent revenge narrative. With it, it becomes something much rarer: a war story that insists on what comes after the war.',
      },
      {
        type: 'paragraph',
        content: 'The pacifism turn is not naive. Thorfinn does not become pacifist because violence is wrong in the abstract. He becomes pacifist because he has seen what violence produces — in others and in himself — and has decided that the production cost is too high. This is a hard-won position, and the show treats it as such.',
      },
    ],
    personalTake: 'Askeladd\'s final act may be the single most complete character moment in anime history. What he does, why he does it, and what it means — all of it arrives simultaneously. I have not recovered.',
    recommendation: 'Watch both seasons in order. Do not skip the Farm arc. That is where the show actually happens.',
    metaDescription: 'A review of Vinland Saga — Askeladd as the most complete character in anime, the Farm arc\'s pacifist argument, and why audiences were wrong to reject Season 2.',
  },

  // ─── NOVELS & MANGA ────────────────────────────────────────────────────
  {
    id: 'the-big-sleep',
    slug: 'the-big-sleep-chandler',
    title: 'The Big Sleep',
    subtitle: 'Raymond Chandler, 1939',
    headline: 'THE NOVEL THAT NAMED THIS PUBLICATION DESERVES ITS THRONE',
    category: 'novels-mangas',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Dark library shelves with books in dramatic chiaroscuro lighting',
    cutline: 'Chandler\'s shelves. The darkness between bookshelves is where Marlowe lives.',
    publishDate: '2025-01-20',
    readTime: 10,
    tags: ['raymond chandler', 'philip marlowe', 'hard-boiled', 'noir fiction', '1930s', 'prose style'],
    rating: 9.5,
    featured: false,
    isBreaking: false,
    edition: 'VOL. I, NO. 7',
    synopsis: 'The Big Sleep\'s plot is famously incoherent. Raymond Chandler, when asked who killed one of the characters in the film adaptation, replied that he did not know. None of this matters. The plot was never the point of The Big Sleep. The sentences were the point.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — JANUARY 20, 2025',
      },
      {
        type: 'paragraph',
        content: 'There is a famous story: during the production of Howard Hawks\' 1946 film adaptation, the screenwriters — William Faulkner among them — could not determine who was responsible for the murder of a character named Owen Taylor. They cabled Chandler to ask. He replied that he did not know. This is treated as scandalous evidence of sloppy plotting. It is, in fact, the most honest thing Chandler ever admitted. He was not writing plot. He was writing Philip Marlowe.',
      },
      {
        type: 'pullquote',
        content: 'The streets were dark with something more than night.',
      },
      {
        type: 'paragraph',
        content: 'Marlowe is a moral compass in a world where morality has become economic. He takes his cases, he does his work, and he maintains an interior code that the world around him has long since abandoned. He is not naive about what the world is — he has seen too much for that. He simply refuses to become it. This refusal, repeated across seven novels, is Chandler\'s central argument: that a single person\'s commitment to a standard, however impossible to maintain, is not nothing.',
      },
      {
        type: 'heading',
        content: 'The Sentences as Jazz',
      },
      {
        type: 'paragraph',
        content: 'Chandler\'s prose style is properly described as jazz. It is rhythmic, improvisatory, and structured by an internal logic that only reveals itself on the third or fourth reading. His similes are notorious — "as inconspicuous as a tarantula on a slice of angel food cake" — but the notoriety obscures how precisely they work. He is describing a man who should not be where he is, and the horror and absurdity are both present in the image simultaneously. This is hard to do. Most writers who have tried to write like Chandler have produced parody.',
      },
      {
        type: 'paragraph',
        content: 'The Bogart film is excellent and wrong. Bogart\'s Marlowe is charming and knowing in a way that Chandler\'s Marlowe is not. The Bogart Marlowe moves through the corruption with the ease of a man who controls his environment. The Chandler Marlowe is always slightly off-balance, always taking losses, always discovering that the situation is worse than he thought. The film\'s ease makes it a romance. The novel\'s difficulty makes it a tragedy.',
      },
      {
        type: 'paragraph',
        content: 'The title refers, as Chandler later explained, to the Hollywood euphemism for death — the big sleep. But it also suggests something about the entire milieu of the novel: a world so thoroughly corrupted that it has simply stopped noticing its own corruption. Everyone in The Big Sleep is, in some sense, asleep — sleepwalking through their deals and their violence and their casual cruelties. Marlowe is the only one who is awake, and being awake in this world is its own kind of punishment.',
      },
    ],
    personalTake: 'This publication takes its name from Chandler\'s detective. I owe the man a debt no review can settle. What I can say is that I have read The Big Sleep more than any other novel and it has not gotten slower yet.',
    recommendation: 'Read all seven Marlowe novels, in order. Begin here.',
    metaDescription: 'A review of The Big Sleep by Raymond Chandler — the plot\'s irrelevance, Marlowe as moral argument, the prose as jazz, and why the Bogart film misses the point.',
  },

  {
    id: 'berserk-miura',
    slug: 'berserk-kentaro-miura',
    title: 'Berserk',
    subtitle: 'Kentaro Miura, 1989–2021',
    headline: "MIURA'S LIFE WORK IS THE DARKEST MIRROR FICTION HAS HELD UP",
    category: 'novels-mangas',
    coverImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Dark screen glow in a dim room — reading Berserk at 3am',
    cutline: 'Some works demand to be read in the dark. Berserk earned that requirement.',
    publishDate: '2025-03-10',
    readTime: 17,
    tags: ['kentaro miura', 'dark fantasy', 'manga', 'guts', 'griffith', 'the eclipse', 'loss'],
    rating: 10.0,
    featured: false,
    isBreaking: true,
    edition: 'VOL. I, NO. 8',
    synopsis: 'Berserk is the darkest mirror that fiction has held up to the human condition, and it was drawn by a man who clearly understood both the darkness and the responsibility of depicting it. Miura\'s death in 2021 left the work unfinished. This is the tragedy that frames all the other tragedies inside it.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — MARCH 10, 2025',
      },
      {
        type: 'paragraph',
        content: 'The Eclipse is the most devastating single sequence in the history of manga. This is not hyperbole. What Miura achieved in those chapters — the betrayal, the horror, the scale of what is destroyed — is not merely technically accomplished. It represents a willingness to show the reader exactly how much a story is permitted to take from its characters and still call itself honest. The answer, in Berserk, is everything.',
      },
      {
        type: 'pullquote',
        content: 'In this world, is the destiny of mankind controlled by some transcendental entity or law? In that case, is man ever able to resist?',
      },
      {
        type: 'paragraph',
        content: 'Guts is defined by what was done to him, not what he does. This is the engine of everything. He was born from a corpse, sold as a child, abused, trained entirely for war, and finally stripped of the one relationship that gave his violence meaning. His existence after the Eclipse is not a quest for revenge in the traditional sense — it is something more like a refusal to let the universe\'s definition of him stand. He was made into a weapon. He fights with the weapon they made him, against the people who made him it. This is not heroism. It is something more complicated and more human.',
      },
      {
        type: 'heading',
        content: 'Griffith — The Tragedy of Ambition',
      },
      {
        type: 'paragraph',
        content: 'The genius of Griffith is that his betrayal is comprehensible. This is the element that elevates the Eclipse from horror to tragedy. A villain whose villainy is opaque is a threat. A villain whose villainy makes a terrible kind of sense is a mirror. Griffith wanted what he wanted more than he wanted anything else, including the people who loved him, and he made the rational choice according to his value system. That his value system required the destruction of everyone who trusted him is the thing Miura is saying about ambition, about the cost of greatness-as-ideology.',
      },
      {
        type: 'paragraph',
        content: 'The artwork in Berserk operates at a level I\'m not sure any other work in the medium has reached. Miura drew backgrounds with an obsessive density it must have taken weeks per page to produce. There is an argument in the detail — that this world, however monstrous, deserves to be rendered with the full force of artistic attention. The grotesque and the beautiful coexist in every panel because Miura believed both were part of the same truth.',
      },
      {
        type: 'subheading',
        content: 'On Miura\'s Death',
      },
      {
        type: 'paragraph',
        content: 'Kentaro Miura died in May 2021, leaving Berserk unfinished after thirty-two years. The work will be completed by his studio, guided by his notes. This is as it should be, and also not enough. There is no way to resolve what his absence means for the work he left. The ending we will receive is not the ending he would have written, because no one can write what he would have written. What remains is thirty-seven volumes of the most ambitious dark fantasy ever committed to paper — unfinished, permanent, irreplaceable.',
      },
    ],
    personalTake: 'I do not rank Berserk against other manga. It is not in competition. It is alone in its category, which is: works that required a lifetime to produce and changed the medium in the process.',
    recommendation: 'Read from volume one. Do not use the 1997 anime as a substitute — it is excellent but stops before the story\'s most significant events. The manga is the work.',
    metaDescription: 'A critical analysis of Berserk by Kentaro Miura — the Eclipse, Guts as a man defined by what was done to him, Griffith\'s tragedy, the artwork as argument, and Miura\'s unfinished legacy.',
  },

  // ─── NEWS DISPATCHES ───────────────────────────────────────────────────
  {
    id: 'golden-age-anime-2025',
    slug: 'golden-age-anime-2025',
    title: 'The Golden Age of Anime',
    subtitle: 'While Hollywood Sleeps, Japan Sets the Screen Ablaze',
    headline: "HOLLYWOOD SLUMBERS WHILE JAPAN LIGHTS THE SCREEN ABLAZE",
    category: 'news',
    coverImage: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Neon signs reflected in rain-slick pavement at night',
    cutline: 'The new era does not announce itself. It simply arrives, and you realise you\'ve been watching it happen.',
    publishDate: '2025-06-15',
    readTime: 8,
    tags: ['anime', 'industry', 'commentary', 'japan', 'streaming', 'golden age'],
    rating: 0,
    featured: true,
    isBreaking: true,
    edition: 'VOL. I, NO. 9',
    synopsis: 'While Hollywood struggles to produce a single original IP worth remembering five years from now, the Japanese animation industry is in the middle of what future critics will call a golden age. The evidence is overwhelming, the studios are blind to it, and I intend to make the case in full.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — JUNE 15, 2025',
      },
      {
        type: 'paragraph',
        content: 'There is a particular kind of embarrassment reserved for people who discover a global phenomenon fifteen years after everyone else. I had that embarrassment about anime, and then I got over it, and then I spent two years watching everything I had missed. What I found was not a niche curiosity. What I found was a medium at the height of its powers producing work that the rest of the entertainment industry could not match on its best day.',
      },
      {
        type: 'pullquote',
        content: 'The Japanese animation industry is producing the most ambitious serialised storytelling on earth. The question is why nobody at a major studio seems to have noticed.',
      },
      {
        type: 'paragraph',
        content: 'Consider the evidence of the last five years alone. Demon Slayer redefined what a television action sequence could look like. Jujutsu Kaisen sustained narrative momentum across a hundred episodes without the wheel-spinning that kills most American prestige dramas. Attack on Titan concluded — actually concluded, with thematic coherence and earned tragedy — something that almost never happens in serialised fiction. Vinland Saga delivered a meditation on violence as a moral problem that would have won every award season had it been a twelve-episode HBO miniseries.',
      },
      {
        type: 'heading',
        content: 'The Weight of the Craft',
      },
      {
        type: 'paragraph',
        content: 'What distinguishes this era is not just technical achievement, though the technical achievement is extraordinary. It is the willingness to treat the audience as intelligent adults. Monster, Berserk, Mushishi — these works assume you can follow a complex moral argument without a character explaining it to you in the penultimate scene. They trust the image. They trust the silence. They have not forgotten that storytelling at its best is an act of compression, not expansion.',
      },
      {
        type: 'paragraph',
        content: 'Hollywood has largely forgotten this. The IP machine produces entertainment that is competently assembled and instantly forgettable. The Marvel projects, for all their technical polish, feel like quarterly earnings reports — obligations to be discharged, not visions to be realised. The Japanese animation industry, operating on budgets that would be considered modest by American television standards, is making things that will still be talked about in fifty years.',
      },
      {
        type: 'subheading',
        content: 'A Provisional Index',
      },
      {
        type: 'paragraph',
        content: 'For those who want a starting point: Vinland Saga for the serious drama. Jujutsu Kaisen for sheer kinetic craft. Monster for long-form mystery with genuine moral weight. Mushishi for something quieter and stranger than anything else on any platform. Frieren for the melancholy of time. These are not recommendations to the genre-curious. They are strong opinions stated plainly. The work justifies the confidence.',
      },
    ],
    personalTake: 'I came to anime late and felt ashamed about it, briefly. Now I am simply grateful that there is this much of it that is this good, and that I have this much still to see.',
    recommendation: 'Start with Vinland Saga. Season one is one of the finest single seasons of dramatic television produced anywhere in the last decade. If it doesn\'t make the case, nothing will.',
    metaDescription: 'A dispatch on the golden age of anime — why the Japanese animation industry is producing the most ambitious serialised storytelling on earth, and why Hollywood hasn\'t noticed.',
  },

  {
    id: 'death-of-the-cinema-2025',
    slug: 'death-of-the-cinema-2025',
    title: 'On the Death of the Theatrical Experience',
    subtitle: 'Seven Rows, One Opinion',
    headline: "THE PICTURE HOUSE IS DYING AND THE STUDIOS ARE HELPING IT ALONG",
    category: 'news',
    coverImage: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Empty cinema seats bathed in the blue light of the projector',
    cutline: 'The light still works. It is the will to use it that has gone dark.',
    publishDate: '2025-05-10',
    readTime: 7,
    tags: ['cinema', 'theatrical experience', 'exhibition', 'streaming', 'commentary'],
    rating: 0,
    featured: false,
    isBreaking: false,
    edition: 'VOL. I, NO. 8',
    synopsis: 'The theatrical experience is not dead yet, but it is seriously ill, and the prognosis is not good. A dispatch from the stalls on what we stand to lose, and what the studios have already decided they can afford to sacrifice.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — MAY 10, 2025',
      },
      {
        type: 'paragraph',
        content: 'I went to the cinema last Tuesday at eleven in the morning. The theatre had approximately forty seats occupied out of four hundred. The film was good — a crime picture with a script that respected the genre\'s conventions while doing something slightly unexpected with them. The audience was mostly retirees. Two teenagers sat at the back and watched their phones for the first twenty minutes before leaving. This is what the theatrical experience looks like in 2025. I am not sure we are going to save it.',
      },
      {
        type: 'pullquote',
        content: 'A film seen at home is the same film. It is not the same experience. This distinction matters, and the industry has decided it doesn\'t.',
      },
      {
        type: 'paragraph',
        content: 'The argument for theatrical exhibition is not sentimental, though it is often characterised that way by people who would prefer to dismiss it. It is architectural. A cinema is a dark room in which a moving image is larger than the people watching it. This asymmetry — the image overwhelming the viewer rather than being contained by them — changes how the film works on you. The darkness eliminates distraction. The size commands attention. The crowd creates a collective emotional response that amplifies the film\'s effects.',
      },
      {
        type: 'paragraph',
        content: 'The streaming services have won the convenience argument, and they won it comprehensively. Nobody seriously disputes that watching films at home is more convenient, more comfortable, more affordable, and more controllable. What\'s being lost in the transaction is not convenience. It\'s scale. It\'s the shared experience. It\'s the silence of four hundred people watching the same scene at the same time and responding to it together. This is not theatre nostalgia. It is a basic phenomenological fact about how collective experience modifies individual experience.',
      },
      {
        type: 'paragraph',
        content: 'The studios have decided this is an acceptable casualty. They are releasing mid-budget films directly to streaming. They are shortening theatrical windows. They are treating the cinema not as a distribution format with its own aesthetic logic but as a marketing event for the home release. The picture house is being preserved as a venue for spectacle — the last redoubt of IMAX and franchise cinema — while everything else goes directly to the living room.',
      },
    ],
    personalTake: 'I will go to the cinema for as long as there are cinemas worth going to. I suspect that window is shorter than I would like.',
    recommendation: 'Go to the cinema this week. See anything. The act of going is itself now a form of preservation.',
    metaDescription: 'A dispatch on the dying theatrical experience — what we stand to lose as studios shorten windows and streaming captures the mid-budget film. Seven rows, one opinion.',
  },

  {
    id: 'ten-anticipated-2025',
    slug: 'ten-anticipated-2025',
    title: 'The Marlowe Wager: Ten Projects Worth Anticipating',
    subtitle: 'A Provisional Assessment for the Season Ahead',
    headline: "TEN PROJECTS THAT MAY JUSTIFY THE PRICE OF YOUR ATTENTION",
    category: 'news',
    coverImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&q=80&auto=format&fit=crop',
    coverImageAlt: 'Film reel against a dark background with dramatic lighting',
    cutline: 'The anticipation is always cleaner than the arrival. But sometimes the arrival is worth it.',
    publishDate: '2025-04-01',
    readTime: 6,
    tags: ['preview', 'anticipation', 'season', 'commentary', 'films', 'anime', 'television'],
    rating: 0,
    featured: false,
    isBreaking: false,
    edition: 'VOL. I, NO. 7',
    synopsis: 'A provisional wager on ten upcoming projects in cinema, television, and anime. Confidence levels stated honestly. Expectations managed deliberately. Enthusiasm preserved subject to the work actually being good.',
    body: [
      {
        type: 'dateline',
        content: 'ALGIERS — APRIL 1, 2025',
      },
      {
        type: 'paragraph',
        content: 'Every season I make a list of projects I intend to watch with some investment of genuine hope rather than professional obligation. The list is always provisional. Hope is always provisional. What I am recording here is not predictions — I have no special information about the quality of unreleased work — but a statement of my current disposition toward certain projects and why that disposition seems warranted.',
      },
      {
        type: 'pullquote',
        content: 'The business of anticipation is the business of giving the future permission to be better than the present. A dangerous enterprise. Proceed with care.',
      },
      {
        type: 'heading',
        content: 'Cinema',
      },
      {
        type: 'paragraph',
        content: 'The new Paul Thomas Anderson project is the most anticipated thing on this list by some distance. PTA makes films at the pace of a man who has decided that quality is more important than productivity, which is the correct decision and also the one that makes his films events rather than releases. The premise is characteristically oblique. My confidence is high. My expectations are managed toward approximately the best film of the year.',
      },
      {
        type: 'paragraph',
        content: 'The new Hirokazu Kore-eda — who made Shoplifters and then Monster, both films that should be required viewing for anyone interested in how families fracture and sometimes hold — is making what sounds like a departure. Departures from directors this good are interesting rather than alarming. I am watching with interest.',
      },
      {
        type: 'heading',
        content: 'Anime',
      },
      {
        type: 'paragraph',
        content: 'Dungeon Meshi has concluded its run with what amounts to the finest treatment of food as civilisation and survival that I have seen in any medium. The back half of the adaptation handled the manga\'s thematic complexity with more care than I expected. This is mentioned here not as anticipation but as retroactive record of something that exceeded expectation quietly and without fanfare, and which deserves more discussion than it received.',
      },
      {
        type: 'paragraph',
        content: 'The continued run of Frieren: Beyond Journey\'s End deserves extended treatment in a separate dispatch. The short version: it is doing something genuinely unusual with the fantasy genre, using the logic of immortality not for spectacle but for melancholy, and it is doing it with restraint and intelligence that most fantasy properties lack the confidence to attempt.',
      },
      {
        type: 'heading',
        content: 'Television',
      },
      {
        type: 'paragraph',
        content: 'The Penguin, to my considerable surprise, turned out to be the first DC television production in years that merited sustained attention. Colin Farrell\'s performance is doing things with the gangster archetype that feel neither imitative nor merely competent. Whether the next season maintains quality is unknown. Whether this season established that a serious crime drama can exist in a superhero universe is no longer in question.',
      },
    ],
    personalTake: 'Making these lists is an act of faith in the medium\'s continued ability to surprise. The faith has been rewarded before. I expect it will be again.',
    recommendation: 'Frieren: Beyond Journey\'s End. Watch it without expectations. Give it four episodes before forming opinions.',
    metaDescription: 'The Marlowe Wager — ten projects worth anticipating in cinema, anime, and television. Confidence levels stated honestly, expectations managed deliberately.',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured);
}

export function getArticleCount(): number {
  return articles.length;
}
