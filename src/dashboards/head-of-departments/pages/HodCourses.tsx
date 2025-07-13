import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Input } from '../../../components/ui/input';
import { Users, Clock, Calendar, Search, Plus, BarChart3 } from 'lucide-react';

const HodCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSemester, setFilterSemester] = useState('current');

  const courses = [
    {
      id: 1,
      code: 'CS 101',
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Sarah Chen',
      semester: 'Fall 2024',
      credits: 3,
      enrolled: 45,
      capacity: 50,
      schedule: 'MWF 10:00-11:00 AM',
      room: 'CS-101',
      status: 'active'
    },
    {
      id: 2,
      code: 'CS 201',
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. Michael Rodriguez',
      semester: 'Fall 2024',
      credits: 4,
      enrolled: 38,
      capacity: 40,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'CS-201',
      status: 'active'
    },
    {
      id: 3,
      code: 'CS 301',
      title: 'Database Systems',
      instructor: 'Dr. Sarah Chen',
      semester: 'Fall 2024',
      credits: 3,
      enrolled: 32,
      capacity: 35,
      schedule: 'MWF 1:00-2:00 PM',
      room: 'CS-301',
      status: 'active'
    },
    {
      id: 4,
      code: 'CS 401',
      title: 'Machine Learning',
      instructor: 'Dr. Sarah Chen',
      semester: 'Fall 2024',
      credits: 4,
      enrolled: 28,
      capacity: 30,
      schedule: 'TTh 11:00-12:30 PM',
      room: 'CS-401',
      status: 'active'
    },
    {
      id: 5,
      code: 'CS 501',
      title: 'Advanced Cybersecurity',
      instructor: 'Prof. Michael Rodriguez',
      semester: 'Fall 2024',
      credits: 3,
      enrolled: 15,
      capacity: 20,
      schedule: 'MW 3:00-4:30 PM',
      room: 'CS-501',
      status: 'active'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getEnrollmentColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Course Oversight</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Monitor and manage department courses</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Enrollment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">456</div>
              <p className="text-xs text-muted-foreground">+12% from last term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Avg. Class Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">25.3</div>
              <p className="text-xs text-muted-foreground">Students per course</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Capacity Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">84%</div>
              <p className="text-xs text-muted-foreground">Overall utilization</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <CardTitle className="text-sm sm:text-base">Course Directory</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64 text-sm"
                  />
                </div>
                <select
                  value={filterSemester}
                  onChange={(e) => setFilterSemester(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="current">Current Semester</option>
                  <option value="next">Next Semester</option>
                  <option value="all">All Semesters</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                          {course.code}: {course.title}
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">{course.credits} Credits</Badge>
                          <Badge className="bg-emerald-100 text-emerald-800 text-xs">{course.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Room: {course.room}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className={getEnrollmentColor(course.enrolled, course.capacity)}>
                            {course.enrolled}/{course.capacity} enrolled
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Edit
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round((course.enrolled / course.capacity) * 100)}% capacity
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </HodLayout>
  );
};

export default HodCourses;