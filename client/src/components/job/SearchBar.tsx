import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (form.elements.namedItem('query') as HTMLInputElement).value;
    const location = (form.elements.namedItem('location') as HTMLInputElement).value;
    onSearch(query, location);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex gap-4 w-full max-w-4xl relative"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex-1 relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 transition-colors group-hover:text-primary" />
        <Input
          name="query"
          placeholder="Job title, keyword, or company"
          className="pl-10 backdrop-blur-sm bg-white/20 border-white/20 transition-all duration-300
            hover:bg-white/30 focus:bg-white/40 focus:border-primary/50"
        />
      </div>
      <div className="flex-1 relative group">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 transition-colors group-hover:text-primary" />
        <Input
          name="location"
          placeholder="Location"
          className="pl-10 backdrop-blur-sm bg-white/20 border-white/20 transition-all duration-300
            hover:bg-white/30 focus:bg-white/40 focus:border-primary/50"
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button type="submit" className="px-8 bg-gradient-to-r from-primary to-primary/70 hover:opacity-90 shadow-lg
          hover:shadow-primary/20 transition-all duration-300">
          Find Jobs
        </Button>
      </motion.div>
    </motion.form>
  );
}