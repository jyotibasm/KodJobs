import SearchBar from "@/components/job/SearchBar";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleSearch = (query: string, location: string) => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (location) params.append("location", location);
    setLocation(`/jobs?${params.toString()}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Find Your <span className="text-primary">Dream Job</span> in Tech
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover thousands of job opportunities for developers, designers, and tech professionals.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="mt-8 text-muted-foreground">
          Popular: 
          <span className="ml-2">
            React • JavaScript • Remote • Full Stack
          </span>
        </div>
      </main>
    </div>
  );
}