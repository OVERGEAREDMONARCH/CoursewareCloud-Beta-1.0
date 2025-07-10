
import React from 'react';
import { Plus, FileText, Users, Calendar } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Create Assignment',
      description: 'Set up a new assignment',
      icon: Plus,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Grade Submissions',
      description: 'Review pending work',
      icon: FileText,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Message Students',
      description: 'Send announcements',
      icon: Users,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Schedule Class',
      description: 'Book a time slot',
      icon: Calendar,
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h3>
      
      <div className="space-y-2 sm:space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`w-full text-left p-3 ${action.color} text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <div>
                  <p className="font-medium text-sm sm:text-base">{action.title}</p>
                  <p className="text-xs sm:text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
