
import React from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';

interface Assignment {
  id: string;
  assignment: string;
  course: string;
  submissions: number;
  totalStudents: number;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface AssignmentGradingProps {
  assignments: Assignment[];
}

export const AssignmentGrading: React.FC<AssignmentGradingProps> = ({ assignments }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'high') {
      return <AlertCircle size={16} className="text-red-500" />;
    }
    return <Clock size={16} className="text-gray-500" />;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mb-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Pending Grading</h2>
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          View All
        </Button>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white dark:bg-gray-700 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600">
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  {getPriorityIcon(assignment.priority)}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white leading-tight break-words">
                      {assignment.assignment}
                    </h3>
                  </div>
                  <Badge className={`${getPriorityColor(assignment.priority)} text-xs shrink-0`}>
                    {assignment.priority}
                  </Badge>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-words pl-6">
                  {assignment.course}
                </p>
              </div>
              
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 pl-6">
                <div className="flex items-center gap-1">
                  <Users size={12} className="shrink-0" />
                  <span>{assignment.submissions}/{assignment.totalStudents} submitted</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="shrink-0" />
                  <span>Due {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="pl-6">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm h-8 sm:h-9">
                  Review
                </Button>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 flex-1 text-xs sm:text-sm h-8 sm:h-9">
                  Grade
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
