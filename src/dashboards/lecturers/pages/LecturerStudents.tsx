
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
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Students</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor student progress and engagement</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Mail className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">163</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">85.4%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Avg Grade</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">92.1%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">7</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">At Risk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <CardTitle>Student Overview</CardTitle>
              <div className="flex gap-4">
                <select 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
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
                    className="pl-10 w-80"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{student.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{student.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{student.email}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{student.course}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Grade</p>
                      <Badge className={getGradeColor(student.grade)}>
                        {student.grade}
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Attendance</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{student.attendance}%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Assignments</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {student.assignments.completed}/{student.assignments.total}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant={student.status === 'At Risk' ? 'destructive' : 'default'}>
                        {student.status}
                      </Badge>
                      {student.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                      {student.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button size="sm">View Profile</Button>
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

export default LecturerStudents;
