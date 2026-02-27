import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";
import heroImage from "@/assets/blog-hero.jpg";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <BlogHeader />

    {/* Hero */}
    <section className="relative h-[420px] overflow-hidden">
      <img src={heroImage} alt="Journal hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Journal
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mx-auto">
            Stories about nature, design, and the flavors of life.
          </p>
        </div>
      </div>
    </section>

    {/* Posts */}
    <main className="container max-w-5xl mx-auto px-4 flex-1">
      <h2
        className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-12 mb-2"
      >
        Latest Articles
      </h2>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </main>

    <BlogFooter />
  </div>
);

export default Index;
