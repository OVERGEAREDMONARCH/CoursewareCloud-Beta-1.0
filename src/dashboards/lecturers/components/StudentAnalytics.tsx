
import React from 'react';
import { TrendingUp, Users, Award, AlertTriangle } from 'lucide-react';

export const StudentAnalytics: React.FC = () => {
  const analyticsData = [
    {
      title: 'Average Grade',
      value: '85.4%',
      change: '+2.3%',
      trend: 'up',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'Attendance Rate',
      value: '92.1%',
      change: '+1.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'At Risk Students',
      value: '7',
      change: '-2',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Analytics</h3>
        <TrendingUp className="text-gray-400" size={20} />
      </div>
      
      <div className="space-y-4">
        {analyticsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${item.color === 'text-green-600' ? 'bg-green-100 dark:bg-green-900/20' : item.color === 'text-blue-600' ? 'bg-blue-100 dark:bg-blue-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                  <Icon size={16} className={item.color} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.title}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${item.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {item.change}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
