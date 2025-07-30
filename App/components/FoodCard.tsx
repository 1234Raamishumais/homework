import { ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface FoodCardProps {
  food: {
    id: number;
    name: string;
    description: string;
    benefits: string[];
    imageUrl: string;
    nutrients: string[];
    categories: string[];
  };
  index: number;
}

export default function FoodCard({ food, index }: FoodCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative h-[320px] cursor-pointer perspective"
    >
      <motion.div
        className="food-card-inner w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm h-full">
            <div className="relative h-40 overflow-hidden">
              <img 
                src={food.imageUrl} 
                alt={food.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                {food.categories.slice(0, 2).map((category) => (
                  <span key={category} className="px-2 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full"
              >
                <Info size={16} className="text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{food.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{food.description}</p>
              
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">Key Nutrients</p>
                <div className="flex flex-wrap gap-1">
                  {food.nutrients.map((nutrient) => (
                    <span key={nutrient} className="inline-block px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">
                      {nutrient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm h-full p-5">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">{food.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{food.description}</p>
            
            <div className="mt-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">Sleep Benefits</p>
              <ul className="space-y-2">
                {food.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                <ExternalLink size={16} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.div>
  );
}
