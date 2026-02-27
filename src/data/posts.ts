import blogNature from "@/assets/blog-nature.jpg";
import blogArchitecture from "@/assets/blog-architecture.jpg";
import blogFood from "@/assets/blog-food.jpg";
import blogBooks from "@/assets/blog-books.jpg";
import blogMusic from "@/assets/blog-music.jpg";
import blogCraft from "@/assets/blog-craft.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "finding-stillness-in-nature",
    title: "Finding Stillness in Nature",
    excerpt: "How immersing yourself in the natural world can transform your perspective and bring clarity to a chaotic life.",
    date: "February 24, 2026",
    readTime: "6 min read",
    category: "Nature",
    image: blogNature,
    content: `
<p>There's a moment, just before dawn, when the forest holds its breath. The birds haven't started their chorus yet, the wind has settled into a gentle hush, and the world exists in a state of pure potential. It was during one of these moments, standing ankle-deep in morning dew on a trail in the Pacific Northwest, that I understood something fundamental about stillness.</p>

<h2>The Noise We Carry</h2>

<p>We live in an age of perpetual stimulation. Our phones buzz with notifications, our minds race with to-do lists, and even our moments of "rest" are filled with screens and scrolling. The noise isn't just external—it's internal, a constant narration that we've come to mistake for thought itself.</p>

<p>Nature doesn't ask you to stop thinking. It simply offers an alternative frequency, one that's been humming along for millennia before we arrived and will continue long after we're gone. When you stand beneath a canopy of old-growth trees, your problems don't disappear—they simply find their proper scale.</p>

<h2>Learning to Listen</h2>

<p>The first time I spent three days alone in the wilderness, I was terrified. Not of bears or getting lost—of silence. Without the constant input I'd grown dependent on, my mind initially rebelled. It threw up anxieties, regrets, half-formed plans. But by the second day, something shifted.</p>

<blockquote>In every walk with nature, one receives far more than he seeks. — John Muir</blockquote>

<p>I began to hear things I'd been missing: the particular way water sounds different flowing over stone versus wood. The way a forest communicates through subtle shifts in birdsong. The rhythm of my own breathing, steady and sure, no longer drowned out by the white noise of modern life.</p>

<h2>Bringing Stillness Home</h2>

<p>You don't need to disappear into the wilderness to access this stillness—though I highly recommend it at least once. A walk in a local park, sitting beneath a tree during lunch, or simply watching clouds move across the sky can offer the same reset.</p>

<p>The key is intentionality. Nature is always broadcasting on its ancient frequency. We simply need to tune in, one breath at a time, and remember that we, too, are part of this vast, unhurried world.</p>
    `,
  },
  {
    slug: "the-poetry-of-concrete",
    title: "The Poetry of Concrete",
    excerpt: "Exploring how modern architecture finds beauty in raw materials and bold geometric forms.",
    date: "February 18, 2026",
    readTime: "5 min read",
    category: "Architecture",
    image: blogArchitecture,
    content: `
<p>There is a common misconception that concrete is cold, that modernist architecture lacks soul. Stand inside a Tadao Ando building when afternoon light cuts through a narrow slit window, casting a blade of gold across raw concrete, and tell me there's no poetry here.</p>

<h2>Material Honesty</h2>

<p>The brutalist and minimalist movements in architecture share a radical commitment to truth. Where classical architecture adorns and disguises, modern architecture reveals. Every pour line in a concrete wall tells the story of its making. Every steel beam announces its structural purpose without apology.</p>

<p>This honesty extends beyond aesthetics. When a building doesn't hide behind ornament, it must rely on proportion, light, and spatial experience to create meaning. The stakes are higher. There's nowhere for mediocrity to hide.</p>

<h2>Light as Material</h2>

<p>The greatest modern architects understand that their primary material isn't concrete or steel or glass—it's light. Louis Kahn famously said that a room is not a room without natural light. In the best modern buildings, light is choreographed as carefully as any ballet.</p>

<blockquote>Architecture is the learned game, correct and magnificent, of forms assembled in the light. — Le Corbusier</blockquote>

<p>Watch how light moves through a well-designed space over the course of a day. Morning brings soft, diffused illumination that gradually sharpens into the dramatic contrasts of afternoon. By evening, the building transforms again, its surfaces catching the warm amber of golden hour. The building is never the same twice.</p>

<h2>The Human Scale</h2>

<p>Critics often accuse modern architecture of being inhuman, but the best practitioners are obsessed with how people move through and experience space. The compression of a low-ceilinged corridor that suddenly opens into a double-height living area. The framing of a distant landscape through a precisely placed window. These are deeply human gestures, designed to provoke emotional responses.</p>

<p>Great architecture doesn't just shelter us—it shapes how we feel, think, and relate to the world around us. In its restraint, modern architecture often achieves a clarity of experience that ornament can only obscure.</p>
    `,
  },
  {
    slug: "flavors-that-tell-stories",
    title: "Flavors That Tell Stories",
    excerpt: "A journey through Southeast Asian street food markets where every dish carries generations of tradition.",
    date: "February 10, 2026",
    readTime: "7 min read",
    category: "Food & Travel",
    image: blogFood,
    content: `
<p>The first thing that hits you isn't the taste—it's the sound. The rapid-fire clang of a wok against a gas burner, the sizzle of batter hitting hot oil, vendors calling out in melodic shorthand that regular customers decode without thinking. A Southeast Asian street food market is a symphony of sensory overload, and every note is deliberate.</p>

<h2>The Grandmother's Recipe</h2>

<p>In a narrow alley in Bangkok's Chinatown, I watched a woman who must have been in her seventies expertly fold dumplings at a pace that would shame most professional chefs. Her movements were automatic, refined by decades of repetition into something that transcended skill and became art.</p>

<p>When I asked about her recipe, she laughed. "My grandmother taught my mother. My mother taught me. I changed nothing." In a world obsessed with innovation and "disruption," there's something profoundly revolutionary about perfecting something over three generations and seeing no reason to change it.</p>

<h2>The Spice Markets</h2>

<p>To understand Southeast Asian cuisine, you must visit the spice markets at dawn. Mountains of turmeric in impossible shades of gold. Dried chilies ranging from mild burgundy to furious red. Lemongrass bundled like fragrant bouquets. Each spice carries its own history—trade routes, colonial encounters, cultural exchanges compressed into tiny seeds and dried leaves.</p>

<blockquote>One cannot think well, love well, sleep well, if one has not dined well. — Virginia Woolf</blockquote>

<p>The vendors know their products with an intimacy that no cookbook can convey. They'll tell you which chilies to use for heat without bitterness, which variety of basil pairs best with seafood, and exactly how long to toast cumin seeds before they release their deepest flavor.</p>

<h2>More Than a Meal</h2>

<p>Street food in Southeast Asia is never just about eating. It's about community. Strangers share tables, recommend dishes, debate the merits of competing stalls. A bowl of pho or a plate of pad thai becomes a social lubricant, breaking down barriers of language and culture with the universal language of deliciousness.</p>

<p>In these markets, I've learned that the best food doesn't come from Michelin-starred restaurants with tasting menus and wine pairings. It comes from someone who has been making the same dish, the same way, with the same love, for longer than you've been alive. That consistency isn't monotony—it's devotion.</p>
    `,
  },
  {
    slug: "the-lost-art-of-slow-reading",
    title: "The Lost Art of Slow Reading",
    excerpt: "In a world of infinite scrolling, rediscovering the transformative power of sitting with a single book.",
    date: "February 5, 2026",
    readTime: "5 min read",
    category: "Culture",
    image: blogBooks,
    content: `
<p>I used to read sixty books a year. I tracked them on spreadsheets, posted them on social media, and felt a quiet pride in the number. Then one day, a friend asked me about a book I'd finished the week before, and I couldn't remember a single meaningful detail. That was the moment I realized I'd been consuming books without actually reading them.</p>

<h2>Speed vs. Depth</h2>

<p>Somewhere along the way, reading became another metric to optimize. We skim articles, speed-read bestsellers, and listen to audiobooks at 2x speed. We've turned one of humanity's most intimate intellectual acts into a productivity hack.</p>

<p>But reading was never meant to be fast. The earliest readers read aloud, savoring each word as a physical experience. Medieval monks spent years with a single text. The idea that a book is something to "get through" would have baffled them entirely.</p>

<h2>The Rereading Revolution</h2>

<p>The most radical act of reading today might be rereading. Picking up a book you've already read—not because you've forgotten it, but because you've changed since the last time. The book stays the same; you don't. And in that gap between who you were and who you are, meaning multiplies.</p>

<blockquote>A reader lives a thousand lives before he dies. The man who never reads lives only one. — George R.R. Martin</blockquote>

<p>I now read perhaps fifteen books a year. I underline passages. I sit with chapters for days. I argue with authors in the margins. And I remember every single one.</p>

<h2>Making Space for Words</h2>

<p>Slow reading requires environmental intention. It means putting your phone in another room. It means choosing a physical book over a screen when possible—not out of nostalgia, but because the absence of notifications creates a container for attention that digital devices constantly puncture.</p>

<p>It means accepting that you won't read everything, and finding peace in that. The goal isn't to read more. It's to read deeper. To let a book change the way you see the world, even if that takes a month instead of an afternoon.</p>
    `,
  },
  {
    slug: "vinyl-and-the-ritual-of-listening",
    title: "Vinyl and the Ritual of Listening",
    excerpt: "Why the crackle of a record player offers something that streaming never can.",
    date: "January 28, 2026",
    readTime: "6 min read",
    category: "Music",
    image: blogMusic,
    content: `
<p>The first thing you notice is the ritual. You slide the record from its sleeve—carefully, always carefully—and place it on the turntable. You lower the needle, and for a moment there's nothing but a soft hiss, the sound of anticipation itself. Then the music begins, and it's different from pressing play on your phone. It's an event.</p>

<h2>The Physicality of Sound</h2>

<p>There's a reason vinyl has experienced a massive resurgence despite being an objectively inferior format by every technical measure. It's not about audio fidelity—digital wins that argument handily. It's about the relationship between listener and music.</p>

<p>When you buy a record, you buy an object. It has weight, texture, artwork large enough to actually study. The liner notes are readable without a magnifying glass. The act of playing it demands your presence—you can't skip tracks without getting up, and the album plays in the order the artist intended.</p>

<h2>Side A, Side B</h2>

<p>Albums were composed with two sides in mind. The break in the middle—when you flip the record—was a structural element, a intermission that artists used to create narrative arcs. We lost that when CDs eliminated the need to flip, and we lost it again when streaming eliminated the album as a coherent unit.</p>

<blockquote>Music is the space between the notes. — Claude Debussy</blockquote>

<p>Listening to a full album on vinyl, in order, with the flip in the middle, is like watching a film instead of a highlight reel. You experience the slow builds, the quiet interludes, the deep cuts that never became singles but somehow become your favorite tracks.</p>

<h2>Imperfection as Warmth</h2>

<p>Vinyl has surface noise. Records warp. They scratch. And somehow, these imperfections feel like warmth rather than flaws. In a world of algorithmically perfect audio, the crackle of a record player sounds like honesty.</p>

<p>Perhaps what we're really seeking isn't better sound—it's a more intentional relationship with the things we love. Vinyl forces you to slow down, to choose deliberately, to be present. In an age of infinite choice, that constraint feels like freedom.</p>
    `,
  },
  {
    slug: "hands-that-remember",
    title: "Hands That Remember",
    excerpt: "The quiet revolution of handmade craftsmanship in the age of mass production.",
    date: "January 20, 2026",
    readTime: "6 min read",
    category: "Craft",
    image: blogCraft,
    content: `
<p>In a small studio on the outskirts of Kyoto, a potter named Tanaka-san has been making tea bowls for forty-three years. Each one takes three days. Each one is slightly different. When I asked him why he doesn't use molds to speed up the process, he looked at me as if I'd suggested he stop breathing. "The bowl needs to know my hands," he said simply.</p>

<h2>The Intelligence of Hands</h2>

<p>There's a kind of knowledge that lives only in the body. Potters call it "hand memory"—the accumulated wisdom of thousands of hours spent shaping clay. It can't be written down or taught through YouTube tutorials. It transfers only through practice, repetition, and time.</p>

<p>This kind of embodied intelligence exists in every craft tradition. The woodworker who can feel the grain of a board through their plane. The weaver who adjusts tension by instinct. The blacksmith who reads the color of heated metal like a language. These skills represent a form of human knowledge that predates writing and may, in some ways, surpass it.</p>

<h2>Against Efficiency</h2>

<p>Mass production gave us abundance but took something in exchange. When every object is identical, none of them carry meaning. A handmade bowl has a history—the specific day it was formed, the particular mood of the maker, the weather that affected the drying, the unpredictable alchemy of the kiln.</p>

<blockquote>The details are not the details. They make the design. — Charles Eames</blockquote>

<p>This isn't nostalgia or anti-technology sentiment. It's a recognition that some things are worth doing slowly, imperfectly, by hand. Not everything, but some things. The things we touch every day, eat from, wear close to our skin—these deserve the attention of human hands.</p>

<h2>The Quiet Revolution</h2>

<p>Around the world, a generation raised on screens is discovering the satisfaction of making things with their hands. Pottery classes are fully booked. Knitting circles are thriving. Woodworking shops are opening in cities where they'd long since disappeared.</p>

<p>This isn't a rejection of technology. It's a complement to it. After a day spent in the abstract world of screens and data, working with physical materials offers a grounding that nothing digital can replicate. Your hands remember what your mind forgets: that you are a physical being in a physical world, and there is deep satisfaction in shaping it, one imperfect creation at a time.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
