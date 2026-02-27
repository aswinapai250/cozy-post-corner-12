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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
