import { motion } from 'framer-motion';
import { sleepStagesData, sleepTips, todaySleepMetrics, todaySleepScore, weeklySleepData } from '../data/mockData';
import SleepScoreCard from '../components/SleepScoreCard';
import SleepStagesChart from '../components/SleepStagesChart';
import SleepWeekChart from '../components/SleepWeekChart';
import SleepMetrics from '../components/SleepMetrics';
import TipCard from '../components/TipCard';
import { format } from 'date-fns';

export default function Dashboard() {
  const today = new Date();
  
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sleep Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {format(today, 'EEEE, MMMM d, yyyy')}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <SleepScoreCard score={todaySleepScore} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <SleepStagesChart data={sleepStagesData} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <SleepWeekChart data={weeklySleepData} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <SleepMetrics metrics={todaySleepMetrics} />
        </motion.div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Sleep Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sleepTips.slice(0, 4).map((tip, index) => (
            <TipCard key={index} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
