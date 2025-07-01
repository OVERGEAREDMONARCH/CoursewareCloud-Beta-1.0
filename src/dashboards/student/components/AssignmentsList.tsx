
import React from 'react';
import { Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';

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
        return <AlertCircle size={16} className="text-red-500" />;
      case 'medium':
        return <Clock size={16} className="text-yellow-500" />;
      case 'low':
        return <CheckCircle size={16} className="text-green-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      case 'low':
        return 'border-l-4 border-green-500';
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
    <div className="space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Assignments</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">View All</button>
      </div>

      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div 
            key={assignment.id} 
            className={`bg-gray-50 dark:bg-gray-600 rounded-lg p-4 flex justify-between items-center shadow-sm ${getPriorityClass(assignment.priority)}`}
          >
            <div className="flex items-center gap-3 flex-1">
              {getPriorityIcon(assignment.priority)}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 dark:text-white truncate">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.course}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                  <Calendar size={14} />
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

              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded">View</button>
                {assignment.status === 'pending' && (
                  <button className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">Submit</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
