import { BarChart3, Heart, House, Moon, Settings, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: House },
    { name: 'Sleep Insights', path: '/insights', icon: BarChart3 },
    { name: 'Meditation', path: '/meditation', icon: Heart },
    { name: 'Sleep Sounds', path: '/sounds', icon: Moon },
    { name: 'Healthy Food', path: '/healthy-food', icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11v.01M11 15h.01M16 16h.01M2 16l20 6-6-20A20 20 0 0 0 2 16z"/>
      </svg>
    ) },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`fixed top-0 bottom-0 left-0 z-30 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
              <Moon size={16} className="text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Sleepy <span className="text-xs font-normal text-gray-500 dark:text-gray-400">Raamish</span>
            </h1>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors md:hidden"
          >
            <X size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const ItemIcon = item.icon;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <ItemIcon size={18} className={isActive ? 'text-indigo-600 dark:text-indigo-400' : ''} />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-xl p-4">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Premium Plan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Unlock advanced sleep insights.</p>
            <button className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Upgrade Now →
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
