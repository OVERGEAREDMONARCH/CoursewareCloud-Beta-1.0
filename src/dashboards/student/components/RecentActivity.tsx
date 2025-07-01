
import React from 'react';
import { CheckCircle, MessageCircle, Book, Calendar } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'assignment' | 'message' | 'course' | 'event';
  title: string;
  description: string;
  timestamp: string;
  course?: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'message':
        return <MessageCircle size={20} className="text-blue-500" />;
      case 'course':
        return <Book size={20} className="text-purple-500" />;
      case 'event':
        return <Calendar size={20} className="text-orange-500" />;
      default:
        return <CheckCircle size={20} className="text-gray-500" />;
    }
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {activity.description}
              </p>
              {activity.course && (
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {activity.course}
                </p>
              )}
            </div>
            
            <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
              {getTimeAgo(activity.timestamp)}
            </span>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
        View All Activity
      </button>
    </div>
  );
};
