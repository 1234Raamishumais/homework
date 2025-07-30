import { motion } from 'framer-motion';
import { sleepSounds } from '../data/mockData';
import MeditationCard from '../components/MeditationCard';
import { Search } from 'lucide-react';

export default function SleepSoundsPage() {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sleep Sounds</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Ambient sounds to help you fall asleep faster
        </p>
      </motion.div>
      
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input 
          type="text" 
          placeholder="Search sounds..." 
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
        />
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Popular Sounds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sleepSounds.map((item, index) => (
            <MeditationCard 
              key={index} 
              title={item.title} 
              duration={item.duration} 
              category={item.category} 
              imageUrl={item.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Sound Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Nature', 'Ambient', 'White Noise', 'ASMR', 'Music', 'Binaural Beats', 'Fan Sounds', 'Rainfall'].map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800/50 hover:shadow-md transition-shadow cursor-pointer"
            >
              <p className="text-center font-medium text-gray-800 dark:text-gray-200">{category}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/50">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Create Custom Mixes</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Upgrade to premium to create your own custom sound mixes combining multiple tracks.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
