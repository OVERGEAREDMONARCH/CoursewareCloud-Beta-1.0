
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface Class {
  id: string;
  course: string;
  time: string;
  duration: number;
  location: string;
  topic: string;
}

interface UpcomingClassesProps {
  classes: Class[];
}

export const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes }) => {
  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (timeString: string) => {
    const now = new Date();
    const classTime = new Date(timeString);
    const diffInHours = Math.abs(classTime.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Starting soon';
    } else if (diffInHours < 24) {
      return `In ${Math.floor(diffInHours)} hours`;
    } else {
      return `In ${Math.floor(diffInHours / 24)} days`;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Classes</h3>
        <Button variant="outline" size="sm">
          View Schedule
        </Button>
      </div>
      
      <div className="space-y-4">
        {classes.map((classItem) => (
          <div key={classItem.id} className="border-l-4 border-l-purple-500 pl-4 py-2">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  {classItem.course}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {classItem.topic}
                </p>
              </div>
              <span className="text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                {getTimeUntil(classItem.time)}
              </span>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{formatTime(classItem.time)} ({classItem.duration} min)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{classItem.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
