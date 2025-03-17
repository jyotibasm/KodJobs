import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building } from "lucide-react";

interface JobCardProps {
  job: {
    name: string;
    company: {
      name: string;
    };
    locations: Array<{ name: string }>;
    levels: Array<{ name: string }>;
    refs: {
      landing_page: string;
    };
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <h3 className="font-semibold text-lg">{job.name}</h3>
          <div className="flex items-center gap-2 text-muted-foreground mt-1">
            <Building className="h-4 w-4" />
            <span>{job.company.name}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{job.locations[0]?.name}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.levels.map((level) => (
            <Badge key={level.name} variant="secondary">
              {level.name}
            </Badge>
          ))}
        </div>

        <Button 
          className="w-full"
          onClick={() => window.open(job.refs.landing_page, '_blank')}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
