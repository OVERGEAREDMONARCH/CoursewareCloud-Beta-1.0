
import React from 'react';
import { Book, Calendar, CheckCircle, Clock } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle?: string;
  color: string;
  trend?: { value: number; isPositive: boolean };
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color, trend }) => (
  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        {icon}
      </div>
    </div>
    
    {trend && (
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '+' : ''}{trend.value}%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">from last week</span>
      </div>
    )}
  </div>
);

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: <Book size={24} className="text-blue-600" />,
      title: 'Active Courses',
      value: 5,
      subtitle: '2 new this semester',
      color: 'bg-blue-100 dark:bg-blue-900',
      trend: { value: 25, isPositive: true }
    },
    {
      icon: <Calendar size={24} className="text-purple-600" />,
      title: 'Upcoming Deadlines',
      value: 8,
      subtitle: '3 due this week',
      color: 'bg-purple-100 dark:bg-purple-900',
      trend: { value: 12, isPositive: false }
    },
    {
      icon: <CheckCircle size={24} className="text-green-600" />,
      title: 'Completed Assignments',
      value: 24,
      subtitle: '89% completion rate',
      color: 'bg-green-100 dark:bg-green-900',
      trend: { value: 15, isPositive: true }
    },
    {
      icon: <Clock size={24} className="text-orange-600" />,
      title: 'Study Hours',
      value: '32h',
      subtitle: 'This week',
      color: 'bg-orange-100 dark:bg-orange-900',
      trend: { value: 8, isPositive: true }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
