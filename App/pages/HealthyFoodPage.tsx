import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { sleepFoods } from '../data/mockData';
import FoodCard from '../components/FoodCard';

export default function HealthyFoodPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Melatonin-Rich', 'Magnesium-Rich', 'Tryptophan', 'Calming', 'Sleep-Friendly Snacks'];
  
  const filteredFoods = activeCategory === 'All' 
    ? sleepFoods 
    : sleepFoods.filter(food => food.categories.includes(activeCategory));
  
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sleep-Friendly Nutrition</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Discover foods that promote better sleep quality and overall health
        </p>
      </motion.div>
      
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input 
          type="text" 
          placeholder="Search healthy foods..." 
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
        />
      </div>
      
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food, index) => (
            <FoodCard 
              key={food.id}
              food={food}
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-10 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/50">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Meal Timing for Better Sleep</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Eating too close to bedtime can disrupt sleep. Try to finish dinner at least 2-3 hours before bed.
          If you need a bedtime snack, keep it light and include some of the sleep-promoting foods listed above.
        </p>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Morning</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Start with protein-rich breakfast to regulate energy throughout the day.
            </p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Afternoon</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Include complex carbs and healthy fats to maintain stable blood sugar.
            </p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Evening</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Choose sleep-promoting foods like cherries, kiwi, or warm milk before bed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
