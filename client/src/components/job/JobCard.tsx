import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Briefcase } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  const handleApply = () => {
    window.open(job.refs.landing_page, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <h3 className="font-semibold text-lg">{job.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Building className="h-4 w-4" />
              <span>{job.company.name}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="h-6 w-6 text-primary" />
          </motion.div>
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

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary/70 hover:opacity-90 transition-colors"
              onClick={handleApply}
            >
              Apply Now
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}