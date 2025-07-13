import { useState } from 'react';
import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, BookOpen, Users, Calendar, Plus, MoreHorizontal, Play } from 'lucide-react';

const LecturerCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: '1',
      title: 'Advanced React Development',
      code: 'CS401',
      students: 45,
      status: 'Active',
      progress: 78,
      nextClass: '2024-01-16T10:00:00Z',
      semester: 'Spring 2024',
      credits: 3,
      description: 'Advanced concepts in React including hooks, context, and performance optimization.'
    },
    {
      id: '2',
      title: 'Database Design Principles',
      code: 'CS302',
      students: 38,
      status: 'Active',
      progress: 65,
      nextClass: '2024-01-17T14:00:00Z',
      semester: 'Spring 2024',
      credits: 4,
      description: 'Comprehensive study of database design, normalization, and optimization techniques.'
    },
    {
      id: '3',
      title: 'Computer Networks',
      code: 'CS305',
      students: 52,
      status: 'Active',
      progress: 89,
      nextClass: '2024-01-18T09:00:00Z',
      semester: 'Spring 2024',
      credits: 3,
      description: 'Network protocols, architectures, and security fundamentals.'
    },
    {
      id: '4',
      title: 'Machine Learning Basics',
      code: 'CS450',
      students: 28,
      status: 'Draft',
      progress: 0,
      nextClass: null,
      semester: 'Fall 2024',
      credits: 4,
      description: 'Introduction to machine learning algorithms and applications.'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">My Courses</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Manage your courses and track student progress</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">4</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">163</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Active Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Classes This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Management Card */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <CardTitle className="text-lg sm:text-xl">Course Management</CardTitle>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-3 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white break-words">{course.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.code} • {course.credits} Credits</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      <Badge variant={course.status === 'Active' ? 'default' : 'outline'} className="text-xs">
                        {course.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 break-words">{course.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users size={16} />
                      {course.students} students
                    </span>
                    <span className="text-left sm:text-right">{course.semester}</span>
                  </div>
                  
                  {course.status === 'Active' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button size="sm" className="flex-1 text-sm h-9">View Details</Button>
                    <Button size="sm" variant="outline" className="flex-1 text-sm h-9">Manage</Button>
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

export default LecturerCourses;
