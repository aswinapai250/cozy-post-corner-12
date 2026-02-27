import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import ScrollToTop from "@/components/ScrollToTop";
import { posts } from "@/data/posts";
import heroImage from "@/assets/blog-hero.jpg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => [...new Set(posts.map((p) => p.category))],
    []
  );

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader showSearch onSearch={setSearchQuery} />

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={heroImage}
          alt="Journal hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1
              className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Journal
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mx-auto">
              Stories about nature, design, and the flavors of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <main className="container max-w-5xl mx-auto px-4 flex-1">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-6 mb-2">
          {activeCategory || "Latest"} Articles
          <span className="ml-2 text-primary">({filtered.length})</span>
        </h2>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            No articles found. Try a different search or category.
          </div>
        ) : (
          filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))
        )}
      </main>

      <BlogFooter />
      <ScrollToTop />
    </div>
  );
};

export default Index;
