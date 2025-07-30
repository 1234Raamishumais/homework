import { motion } from 'framer-motion';
import { sleepStagesData, weeklySleepData } from '../data/mockData';
import SleepStagesChart from '../components/SleepStagesChart';
import SleepWeekChart from '../components/SleepWeekChart';
import { Calendar, Filter, RefreshCw } from 'lucide-react';

export default function SleepInsightsPage() {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sleep Insights</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Detailed analysis of your sleep patterns
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Calendar size={16} />
            <span>Last 7 Days</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <RefreshCw size={16} />
          </button>
        </div>
      </motion.div>
      
      <div className="mt-6 grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SleepWeekChart data={weeklySleepData} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SleepStagesChart data={sleepStagesData} />
        </motion.div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Sleep Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Average Sleep Duration', value: '7.3 hours', change: '+0.5 hours', positive: true },
            { label: 'Average Sleep Score', value: '76/100', change: '+4 points', positive: true },
            { label: 'Deep Sleep', value: '1.5 hours', change: '-0.2 hours', positive: false },
            { label: 'Sleep Consistency', value: '85%', change: '+10%', positive: true },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-1">{stat.value}</p>
              <div className={`flex items-center gap-1 mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                <span className="text-sm">{stat.change}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${stat.positive ? 'rotate-0' : 'rotate-180'}`}
                >
                  <path d="M8 4L12 8L10.6 9.4L8.5 7.3V12H7.5V7.3L5.4 9.4L4 8L8 4Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/50">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Get Advanced Insights</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Upgrade to premium for sleep correlation analysis, monthly reports, and personalized recommendations.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
