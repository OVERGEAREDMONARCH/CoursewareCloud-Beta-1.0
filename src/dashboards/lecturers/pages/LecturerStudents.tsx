import { useState } from 'react';
import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, Users, Mail, MessageCircle, TrendingUp, TrendingDown } from 'lucide-react';

const LecturerStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const courses = ['all', 'Advanced React Development', 'Database Design Principles', 'Computer Networks'];

  const students = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@university.edu',
      course: 'Advanced React Development',
      grade: 'A',
      attendance: 95,
      lastActivity: '2024-01-15',
      status: 'Active',
      assignments: { completed: 8, total: 10 },
      trend: 'up'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@university.edu',
      course: 'Database Design Principles',
      grade: 'B+',
      attendance: 88,
      lastActivity: '2024-01-14',
      status: 'Active',
      assignments: { completed: 6, total: 8 },
      trend: 'up'
    },
    {
      id: '3',
      name: 'Carol Davis',
      email: 'carol.davis@university.edu',
      course: 'Computer Networks',
      grade: 'A-',
      attendance: 92,
      lastActivity: '2024-01-15',
      status: 'Active',
      assignments: { completed: 9, total: 10 },
      trend: 'stable'
    },
    {
      id: '4',
      name: 'David Wilson',
      email: 'david.wilson@university.edu',
      course: 'Advanced React Development',
      grade: 'C+',
      attendance: 75,
      lastActivity: '2024-01-10',
      status: 'At Risk',
      assignments: { completed: 5, total: 10 },
      trend: 'down'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || student.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Students</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Monitor student progress and engagement</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Mail className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">163</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">85.4%</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Avg Grade</p>
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
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">92.1%</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">7</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">At Risk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <CardTitle className="text-lg sm:text-xl">Student Overview</CardTitle>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <select 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm w-full sm:w-auto"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  {courses.map(course => (
                    <option key={course} value={course}>
                      {course === 'all' ? 'All Courses' : course}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search students..."
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
              {filteredStudents.map((student) => (
                <div key={student.id} className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-semibold text-sm sm:text-base">{student.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">{student.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{student.email}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{student.course}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="flex flex-col items-center text-center">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Grade</p>
                      <Badge className={`${getGradeColor(student.grade)} text-xs mt-1`}>
                        {student.grade}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Attendance</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{student.attendance}%</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Assignments</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {student.assignments.completed}/{student.assignments.total}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant={student.status === 'At Risk' ? 'destructive' : 'default'} className="text-xs">
                        {student.status}
                      </Badge>
                      {student.trend === 'up' && <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 shrink-0" />}
                      {student.trend === 'down' && <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 shrink-0" />}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3 sm:mt-0 sm:shrink-0">
                    <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs sm:text-sm h-8 sm:h-9">
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm h-8 sm:h-9">View Profile</Button>
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

export default LecturerStudents;
