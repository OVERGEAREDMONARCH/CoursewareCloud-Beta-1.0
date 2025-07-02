
import React, { useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, BookOpen, Users, Calendar, MoreHorizontal } from 'lucide-react';

const CourseManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { 
      id: 1, 
      title: 'Advanced Mathematics', 
      instructor: 'Dr. Sarah Wilson', 
      students: 45, 
      status: 'Active',
      startDate: '2024-01-15',
      duration: '16 weeks'
    },
    { 
      id: 2, 
      title: 'Computer Science Fundamentals', 
      instructor: 'Prof. David Lee', 
      students: 62, 
      status: 'Active',
      startDate: '2024-01-15',
      duration: '12 weeks'
    },
    { 
      id: 3, 
      title: 'Data Science Introduction', 
      instructor: 'Dr. Emily Chen', 
      students: 38, 
      status: 'Draft',
      startDate: '2024-02-01',
      duration: '14 weeks'
    },
    { 
      id: 4, 
      title: 'Physics Laboratory', 
      instructor: 'Prof. Michael Brown', 
      students: 28, 
      status: 'Active',
      startDate: '2024-01-22',
      duration: '16 weeks'
    },
    { 
      id: 5, 
      title: 'Digital Marketing Strategy', 
      instructor: 'Dr. Lisa Taylor', 
      students: 55, 
      status: 'Completed',
      startDate: '2023-09-01',
      duration: '10 weeks'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Course Management</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage all courses and their settings</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <BookOpen className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Enrollments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Starting This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Draft Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Courses</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Users size={12} />
                          {course.students} students
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar size={12} />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={course.status === 'Active' ? 'default' : course.status === 'Draft' ? 'outline' : 'secondary'}>
                      {course.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default CourseManagement;
