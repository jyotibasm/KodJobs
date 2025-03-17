import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import SearchBar from "@/components/job/SearchBar";
import JobCard from "@/components/job/JobCard";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Jobs() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1]);
  const { user } = useAuth();

  const { data: jobs, isLoading } = useQuery({
    queryKey: ['/api/jobs', searchParams.toString()],
    queryFn: async () => {
      const res = await fetch(`https://www.themuse.com/api/public/jobs?level=Entry%20Level&page=1&descending=true${
        searchParams.get('q') ? `&q=${searchParams.get('q')}` : ''
      }${
        searchParams.get('location') ? `&location=${searchParams.get('location')}` : ''
      }`);
      if (!res.ok) throw new Error('Failed to fetch jobs');
      const data = await res.json();
      return data.results;
    }
  });

  const handleSearch = (query: string, location: string) => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (location) params.append("location", location);
    setLocation(`/jobs?${params.toString()}`);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Please Login to View Jobs</h2>
          <p className="text-muted-foreground mb-8">
            Create an account or login to access our job listings
          </p>
          <Button 
            onClick={() => setLocation("/login")}
            className="bg-gradient-to-r from-primary to-primary/70 hover:opacity-90"
          >
            Login to Continue
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="w-full h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {jobs?.map((job: any) => (
            <JobCard key={job.id} job={job} />
          ))}
        </motion.div>
      )}
    </div>
  );
}