import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/posts";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="grid md:grid-cols-[1fr_300px] gap-6 py-8 border-b border-border">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
          <h2
            className="text-2xl md:text-3xl font-semibold leading-tight mb-3 group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={13} /> {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read more <ArrowRight size={13} />
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl order-first md:order-last shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 md:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
      </article>
    </Link>
  </motion.div>
);

export default BlogCard;
