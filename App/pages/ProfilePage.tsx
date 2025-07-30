import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Bell, Check, Clock, Squircle, Heart, Moon, Settings, User } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account and preferences
        </p>
      </motion.div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <Squircle size={14} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">John Doe</h2>
              <p className="text-gray-600 dark:text-gray-400">john.doe@example.com</p>
              
              <div className="mt-6 w-full border-t border-gray-200 dark:border-gray-800 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Account Type</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">Free Plan</span>
                  </div>
                  <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Upgrade
                  </button>
                </div>
              </div>
              
              <div className="mt-6 w-full">
                <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Sleep Goals</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Sleep Duration</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">8 hours per night</p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Squircle size={16} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Moon size={18} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Bedtime</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">11:00 PM</p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Squircle size={16} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Heart size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Sleep Quality</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Improve deep sleep</p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Squircle size={16} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">App Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Bell size={18} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bedtime reminders, insights</p>
                    </div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
                    <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 dark:translate-x-6"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Settings size={18} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Units</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Hours, 24-hour format</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    <Squircle size={16} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <User size={18} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Privacy</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Data usage and permissions</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    <Squircle size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
