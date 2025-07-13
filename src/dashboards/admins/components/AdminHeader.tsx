
import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export const AdminHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users, courses, settings..."
            className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </Button>
        
        <Button variant="ghost" size="sm">
          <Settings size={20} />
        </Button>

        <div className="flex items-center gap-2 ml-4">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">AD</span>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
        </div>
      </div>
    </header>
  );
};
