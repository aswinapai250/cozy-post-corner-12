import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogHeaderProps {
  onSearch?: (query: string) => void;
  showSearch?: boolean;
}

const BlogHeader = ({ onSearch, showSearch = false }: BlogHeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (val: string) => {
    setSearchQuery(val);
    onSearch?.(val);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Journal
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {showSearch && (
            <AnimatePresence>
              {searchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="relative">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-3 pr-8 py-1.5 text-sm rounded-full bg-secondary border-none outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
                    />
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        handleSearch("");
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setSearchOpen(true)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Search"
                >
                  <Search size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          )}
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
