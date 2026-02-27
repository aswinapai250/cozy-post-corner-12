import { useParams, Link, Navigate } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { getPostBySlug, posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />

      {/* Hero image */}
      <div className="w-full h-[340px] md:h-[440px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <main className="container max-w-2xl mx-auto px-4 flex-1">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8 mb-6"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{post.category}</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <span className="text-xs text-muted-foreground">· {post.readTime}</span>
        </div>

        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h1>

        <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Related */}
        <hr className="my-12 border-border" />
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          More articles
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {posts
            .filter((p) => p.slug !== post.slug)
            .map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</span>
                <h4
                  className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {p.title}
                </h4>
              </Link>
            ))}
        </div>
      </main>

      <BlogFooter />
    </div>
  );
};

export default BlogPost;
