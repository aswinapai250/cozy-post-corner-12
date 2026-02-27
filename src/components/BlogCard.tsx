import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/posts";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="group block">
    <article className="grid md:grid-cols-[1fr_280px] gap-6 py-8 border-b border-border">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{post.category}</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h2
          className="text-2xl md:text-3xl font-semibold leading-tight mb-3 group-hover:text-primary transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>
      <div className="overflow-hidden rounded-lg order-first md:order-last">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </article>
  </Link>
);

export default BlogCard;
