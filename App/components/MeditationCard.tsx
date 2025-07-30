import { CirclePlay } from 'lucide-react';
import { motion } from 'framer-motion';

interface MeditationCardProps {
  title: string;
  duration: string;
  category: string;
  imageUrl: string;
  index: number;
}

export default function MeditationCard({ title, duration, category, imageUrl, index }: MeditationCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm group"
    >
      <div className="relative h-36 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
            {category}
          </span>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100"
        >
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full">
            <CirclePlay size={40} className="text-white" />
          </button>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{duration}</p>
      </div>
    </motion.div>
  );
}
