
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Clock, User, BookOpen, Settings } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      type: 'user',
      message: 'New user registration: john.smith@university.edu',
      time: '2 minutes ago',
      icon: User,
      badge: 'User'
    },
    {
      type: 'course',
      message: 'Course "Advanced Mathematics" was updated by Dr. Wilson',
      time: '15 minutes ago',
      icon: BookOpen,
      badge: 'Course'
    },
    {
      type: 'system',
      message: 'System backup completed successfully',
      time: '1 hour ago',
      icon: Settings,
      badge: 'System'
    },
    {
      type: 'user',
      message: 'User role changed: mike.johnson@university.edu promoted to Lecturer',
      time: '2 hours ago',
      icon: User,
      badge: 'User'
    },
    {
      type: 'course',
      message: 'New course "Data Science Fundamentals" created by Prof. Lee',
      time: '3 hours ago',
      icon: BookOpen,
      badge: 'Course'
    }
  ];

  return (
    <Card>
      <CardHeader className="p-3 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-2 sm:space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-900 dark:text-white">{activity.message}</p>
                  <div className="flex items-center gap-1 sm:gap-2 mt-1">
                    <Clock className="h-2 w-2 sm:h-3 sm:w-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {activity.badge}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};