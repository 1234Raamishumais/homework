import { motion } from 'framer-motion';

interface SleepScoreCardProps {
  score: number;
}

export default function SleepScoreCard({ score }: SleepScoreCardProps) {
  // Score color based on value
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Score text based on value
  const getScoreText = () => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Today's Sleep Score</h3>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              className="dark:stroke-gray-800"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDasharray: "352", strokeDashoffset: "352" }}
              animate={{ 
                strokeDashoffset: 352 - (352 * score) / 100
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
            >
              {score}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`text-sm font-medium ${getScoreColor()}`}
            >
              {getScoreText()}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Your sleep score is based on your sleep duration, quality, and consistency.</p>
      </div>
    </div>
  );
}
