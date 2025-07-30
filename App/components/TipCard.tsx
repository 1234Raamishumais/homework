import { BrainCircuit, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

interface TipCardProps {
  tip: string;
  index: number;
}

export default function TipCard({ tip, index }: TipCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800/50 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
          {index % 2 === 0 ? (
            <Lightbulb size={16} className="text-indigo-600 dark:text-indigo-400" />
          ) : (
            <BrainCircuit size={16} className="text-purple-600 dark:text-purple-400" />
          )}
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Sleep Tip</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tip}</p>
        </div>
      </div>
    </motion.div>
  );
}
