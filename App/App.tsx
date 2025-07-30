import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SleepInsightsPage from './pages/SleepInsightsPage';
import MeditationPage from './pages/MeditationPage';
import SleepSoundsPage from './pages/SleepSoundsPage';
import ProfilePage from './pages/ProfilePage';
import HealthyFoodPage from './pages/HealthyFoodPage';

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check user preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header 
          toggleSidebar={toggleSidebar} 
          isDarkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="pt-16 md:pl-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/insights" element={<SleepInsightsPage />} />
            <Route path="/meditation" element={<MeditationPage />} />
            <Route path="/sounds" element={<SleepSoundsPage />} />
            <Route path="/healthy-food" element={<HealthyFoodPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
