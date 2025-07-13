
import React from 'react';
import { Users, FileText, Calendar } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface CourseManagementCardProps {
  id: string;
  title: string;
  students: number;
  progress: number;
  nextClass: string;
  pendingAssignments: number;
  color: string;
}

export const CourseManagementCard: React.FC<CourseManagementCardProps> = ({
  title,
  students,
  progress,
  nextClass,
  pendingAssignments,
  color
}) => {
  const formatNextClass = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="course-card group">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <Users size={14} className="sm:w-4 sm:h-4" />
              <span>{students} students</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <FileText size={14} className="sm:w-4 sm:h-4" />
              <span>{pendingAssignments} pending</span>
            </div>
          </div>

          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-300">Course Progress</span>
              <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${color} transition-all duration-300`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            <Calendar size={14} className="sm:w-4 sm:h-4" />
            <span className="truncate">Next class: {formatNextClass(nextClass)}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
            View Course
          </Button>
          <Button size="sm" className="flex-1 bg-purple-500 hover:bg-purple-600 text-xs sm:text-sm">
            Manage
          </Button>
        </div>
      </div>
    </div>
  );
};
