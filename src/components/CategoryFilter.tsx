import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

const CategoryFilter = ({ categories, active, onChange }: CategoryFilterProps) => (
  <div className="flex flex-wrap gap-2 mt-8 mb-2">
    {["All", ...categories].map((cat) => (
      <motion.button
        key={cat}
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange(cat === "All" ? "" : cat)}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
          (cat === "All" && !active) || cat === active
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
        }`}
      >
        {cat}
      </motion.button>
    ))}
  </div>
);

export default CategoryFilter;
