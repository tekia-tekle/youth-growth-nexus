import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OpportunityProps {
  title: string;
  category: string;
  organization: string;
  location: string;
  deadline: string;
  imageUrl: string;
}

const OpportunityCard: React.FC<OpportunityProps> = ({
  title,
  category,
  organization,
  location,
  deadline,
  imageUrl,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-indigo-700 hover:bg-white border-none shadow-sm backdrop-blur-md">
            {category}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-indigo-600 font-medium mb-4">{organization}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            Apply by: {deadline}
          </div>
        </div>

        <Button className="w-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-none group">
          View Details
          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
        </Button>
      </div>
    </motion.div>
  );
};

export default OpportunityCard;