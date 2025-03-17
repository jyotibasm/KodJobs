import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import SearchBar from "@/components/job/SearchBar";
import JobCard from "@/components/job/JobCard";
import { Card } from "@/components/ui/card";

export default function Jobs() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.map((job: any) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
