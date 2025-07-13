import { useState } from 'react';
import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, ClipboardList, Plus, Calendar, Users, Clock, FileText } from 'lucide-react';

const LecturerAssignments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const assignments = [
    {
      id: '1',
      title: 'React Component Library Project',
      course: 'Advanced React Development',
      dueDate: '2024-01-20',
      submissions: 42,
      totalStudents: 45,
      status: 'Active',
      priority: 'high',
      graded: 35,
      avgGrade: 85.2,
      type: 'Project'
    },
    {
      id: '2',
      title: 'Database Schema Design',
      course: 'Database Design Principles',
      dueDate: '2024-01-25',
      submissions: 35,
      totalStudents: 38,
      status: 'Active',
      priority: 'medium',
      graded: 30,
      avgGrade: 78.5,
      type: 'Assignment'
    },
    {
      id: '3',
      title: 'Network Security Analysis',
      course: 'Computer Networks',
      dueDate: '2024-01-15',
      submissions: 50,
      totalStudents: 52,
      status: 'Grading',
      priority: 'high',
      graded: 45,
      avgGrade: 82.1,
      type: 'Assignment'
    },
    {
      id: '4',
      title: 'Midterm Examination',
      course: 'Advanced React Development',
      dueDate: '2024-02-01',
      submissions: 0,
      totalStudents: 45,
      status: 'Draft',
      priority: 'low',
      graded: 0,
      avgGrade: 0,
      type: 'Exam'
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || assignment.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Grading': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Assignments</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Create and manage course assignments</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create Assignment
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">23</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">127</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Submissions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Need Grading</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">81.9%</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Avg Grade</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <CardTitle className="text-lg sm:text-xl">Assignment Management</CardTitle>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <select 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm w-full sm:w-auto"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="grading">Grading</option>
                  <option value="draft">Draft</option>
                </select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search assignments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-80"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-3 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {filteredAssignments.map((assignment) => (
                <div key={assignment.id} className={`border-l-4 ${getPriorityColor(assignment.priority)} bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6`}>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 mb-2">
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white break-words">{assignment.title}</h3>
                          <div className="flex gap-2 flex-wrap">
                            <Badge className={getStatusColor(assignment.status)}>
                              {assignment.status}
                            </Badge>
                            <Badge variant="outline">{assignment.type}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 break-words">{assignment.course}</p>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="shrink-0" />
                            <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={16} className="shrink-0" />
                            <span>{assignment.submissions}/{assignment.totalStudents} submitted</span>
                          </span>
                          {assignment.graded > 0 && (
                            <span className="flex items-center gap-1">
                              <FileText size={16} className="shrink-0" />
                              <span>{assignment.graded} graded (Avg: {assignment.avgGrade}%)</span>
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs sm:text-sm">View Details</Button>
                        <Button size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">Grade</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Submission Progress</span>
                          <span>{Math.round((assignment.submissions / assignment.totalStudents) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {assignment.graded > 0 && (
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Grading Progress</span>
                            <span>{Math.round((assignment.graded / assignment.submissions) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${(assignment.graded / assignment.submissions) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </LecturerLayout>
  );
};

export default LecturerAssignments;
