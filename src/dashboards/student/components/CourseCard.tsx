
import React from 'react';
import { Book, Clock, User } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Not Started';
  daysRemaining?: number;
  color: string;
  thumbnail?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  progress,
  status,
  daysRemaining,
  color,
  thumbnail
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Not Started':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="course-card group cursor-pointer">
      {/* Course Thumbnail */}
      <div className={`h-32 ${color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Book size={48} className="text-white/80" />
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {status}
        </div>
      </div>

      {/* Course Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
            <User size={14} />
            <span>{instructor}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">Progress</span>
            <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${color.replace('bg-', 'bg-opacity-100 bg-')}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Days Remaining */}
        {daysRemaining && (
          <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
            <Clock size={14} />
            <span>{daysRemaining} days remaining</span>
          </div>
        )}
      </div>
    </div>
  );
};
