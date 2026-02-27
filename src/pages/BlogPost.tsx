import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { getPostBySlug, posts } from "@/data/posts";
import { Clock, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReadingProgress />
      <BlogHeader />

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-[340px] md:h-[440px] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <main className="container max-w-2xl mx-auto px-4 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mt-10 mb-4">
            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related */}
        <hr className="my-12 border-border" />
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Continue reading
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-2">
                  {p.category}
                </span>
                <h4
                  className="text-lg font-semibold group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BlogFooter />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
