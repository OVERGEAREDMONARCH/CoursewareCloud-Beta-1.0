
import React from 'react';
import { Users, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const AdminStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Courses',
      value: '156',
      change: '+8%',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Lecturers',
      value: '89',
      change: '+3%',
      icon: GraduationCap,
      color: 'text-purple-600'
    },
    {
      title: 'System Usage',
      value: '94%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
