import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, BookOpen, Calendar, Award, Download, Filter } from 'lucide-react';

const HodAnalytics = () => {
  const [timeRange, setTimeRange] = useState('semester');

  const enrollmentData = [
    { name: 'CS 101', students: 45, capacity: 50 },
    { name: 'CS 201', students: 38, capacity: 40 },
    { name: 'CS 301', students: 32, capacity: 35 },
    { name: 'CS 401', students: 28, capacity: 30 },
    { name: 'CS 501', students: 15, capacity: 20 }
  ];

  const performanceData = [
    { month: 'Aug', average: 78, passingRate: 82 },
    { month: 'Sep', average: 81, passingRate: 85 },
    { month: 'Oct', average: 79, passingRate: 83 },
    { month: 'Nov', average: 84, passingRate: 88 },
    { month: 'Dec', average: 82, passingRate: 86 }
  ];

  const facultyData = [
    { name: 'Excellent', value: 65, color: '#10B981' },
    { name: 'Good', value: 25, color: '#3B82F6' },
    { name: 'Average', value: 8, color: '#F59E0B' },
    { name: 'Needs Improvement', value: 2, color: '#EF4444' }
  ];

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Department performance insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="flex gap-2">
              <Button
                variant={timeRange === 'semester' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange('semester')}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                Semester
              </Button>
              <Button
                variant={timeRange === 'year' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange('year')}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                Year
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">456</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last semester
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Course Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">92%</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3% improvement
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4" />
                Faculty Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">4.2</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.3 points
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">88%</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2% this month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Course Enrollment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12 }}
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="students" fill="#10B981" name="Enrolled" />
                    <Bar dataKey="capacity" fill="#E5E7EB" name="Capacity" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="average" stroke="#3B82F6" name="Average Grade" strokeWidth={2} />
                    <Line type="monotone" dataKey="passingRate" stroke="#10B981" name="Passing Rate" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Faculty Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={facultyData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {facultyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Student Satisfaction</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Based on surveys</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">4.1/5</p>
                      <Badge className="bg-green-100 text-green-800 text-xs">Excellent</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Graduation Rate</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Last 3 years</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">94%</p>
                      <Badge className="bg-green-100 text-green-800 text-xs">High</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Employment Rate</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Within 6 months</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">87%</p>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">Good</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Research Publications</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">This year</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">23</p>
                      <Badge className="bg-purple-100 text-purple-800 text-xs">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </HodLayout>
  );
};

export default HodAnalytics;