import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-4xl">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          name="query"
          placeholder="Job title, keyword, or company"
          className="pl-10"
        />
      </div>
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          name="location"
          placeholder="Location"
          className="pl-10"
        />
      </div>
      <Button type="submit" className="px-8">
        Find Jobs
      </Button>
    </form>
  );
}
