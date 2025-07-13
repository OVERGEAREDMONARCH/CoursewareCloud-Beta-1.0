
import React, { useState, useEffect } from 'react';
import { Bell, Search, Sun, Moon, Plus } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export const LecturerHeader: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [notificationCount] = useState(5);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good morning');
      } else if (hour >= 12 && hour < 17) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 shadow-sm">
      {/* Left Section - User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">DJ</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {greeting}, Dr. Johnson!
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Computer Science Department</p>
          </div>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search students, courses, assignments..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {notificationCount > 9 ? '9+' : notificationCount}
            </span>
          )}
        </button>

        {/* Create Course Button */}
        <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <Plus size={16} />
          Create Course
        </Button>
      </div>
    </header>
  );
};
