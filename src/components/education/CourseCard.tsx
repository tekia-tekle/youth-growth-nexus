import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Users, Play } from "lucide-react";

interface CourseCardProps {
  title: string;
  author: string;
  duration: string;
  students: string;
  rating: number;
  imageUrl: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  author,
  duration,
  students,
  rating,
  imageUrl,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white group cursor-pointer"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Play className="w-6 h-6 text-indigo-600 fill-indigo-600" />
          </motion.div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-amber-400" : "text-gray-200"}`}
            />
          ))}
          <span className="text-gray-500 text-xs ml-1">({rating})</span>
        </div>
        
        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500">by {author}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Clock className="w-3 h-3" />
            {duration}
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Users className="w-3 h-3" />
            {students}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;