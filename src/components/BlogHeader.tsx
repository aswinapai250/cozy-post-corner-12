import { Link } from "react-router-dom";

const BlogHeader = () => (
  <header className="border-b border-border">
    <div className="container max-w-5xl mx-auto flex items-center justify-between py-6 px-4">
      <Link to="/" className="font-heading text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
        The Journal
      </Link>
      <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
      </nav>
    </div>
  </header>
);

export default BlogHeader;
