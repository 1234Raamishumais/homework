import { Menu, Moon, Sun, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ toggleSidebar, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors md:hidden"
          >
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
              <Moon size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Sleepy <span className="text-xs font-normal text-gray-500 dark:text-gray-400">Raamish</span>
            </h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-gray-300" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            >
              <User size={16} />
            </button>
            
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-1">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Settings
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-800 my-1"></div>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
