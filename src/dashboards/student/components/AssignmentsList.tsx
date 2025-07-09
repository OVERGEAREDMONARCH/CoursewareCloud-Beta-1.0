
import React from 'react';
import { Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../../components/ui/button';

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'submitted' | 'overdue';
  daysUntilDue: number;
}

interface AssignmentsListProps {
  assignments: Assignment[];
}

export const AssignmentsList: React.FC<AssignmentsListProps> = ({ assignments }) => {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle size={14} className="text-red-500" />;
      case 'medium':
        return <Clock size={14} className="text-yellow-500" />;
      case 'low':
        return <CheckCircle size={14} className="text-green-500" />;
      default:
        return <Clock size={14} className="text-gray-500" />;
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getDueDateText = (daysUntilDue: number) => {
    if (daysUntilDue < 0) {
      return `Overdue by ${Math.abs(daysUntilDue)} days`;
    } else if (daysUntilDue === 0) {
      return 'Due today';
    } else if (daysUntilDue === 1) {
      return 'Due tomorrow';
    } else {
      return `Due in ${daysUntilDue} days`;
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Upcoming Assignments</h2>
        <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">View All</Button>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {assignments.map((assignment) => (
          <div 
            key={assignment.id} 
            className={`assignment-item ${getPriorityClass(assignment.priority)} p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4`}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              {getPriorityIcon(assignment.priority)}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm sm:text-base text-gray-900 dark:text-white truncate">
                  {assignment.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">{assignment.course}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
              <div className="text-left sm:text-right">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Calendar size={12} className="sm:w-4 sm:h-4" />
                  <span>{assignment.dueDate}</span>
                </div>
                <p className={`text-xs ${
                  assignment.daysUntilDue < 0 ? 'text-red-600' : 
                  assignment.daysUntilDue <= 1 ? 'text-orange-600' : 
                  'text-gray-500'
                }`}>
                  {getDueDateText(assignment.daysUntilDue)}
                </p>
              </div>

              <div className="flex gap-1.5 sm:gap-2">
                <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-7 sm:h-8 sm:px-3">View</Button>
                {assignment.status === 'pending' && (
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-xs px-2 py-1 h-7 sm:h-8 sm:px-3">Submit</Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
