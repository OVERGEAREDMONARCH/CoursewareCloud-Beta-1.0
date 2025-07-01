
import React, { useState } from 'react';
import { HodLayout } from '@/components/hod/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, Book, Calendar, Award } from 'lucide-react';

const HodAnalytics = () => {
  const [selectedMetric, setSelectedMetric] = useState('enrollment');

  const enrollmentData = [
    { month: 'Aug', students: 420 },
    { month: 'Sep', students: 445 },
    { month: 'Oct', students: 456 },
    { month: 'Nov', students: 468 },
    { month: 'Dec', students: 475 },
    { month: 'Jan', students: 456 }
  ];

  const coursePerformanceData = [
    { course: 'CS 101', satisfaction: 4.2, completion: 92 },
    { course: 'CS 201', satisfaction: 4.5, completion: 88 },
    { course: 'CS 301', satisfaction: 4.0, completion: 85 },
    { course: 'CS 401', satisfaction: 4.7, completion: 90 },
    { course: 'CS 501', satisfaction: 4.3, completion: 87 }
  ];

  const facultyDistribution = [
    { name: 'Professors', value: 8, color: '#10b981' },
    { name: 'Associate Professors', value: 9, color: '#3b82f6' },
    { name: 'Assistant Professors', value: 5, color: '#f59e0b' },
    { name: 'Lecturers', value: 2, color: '#ef4444' }
  ];

  const departmentMetrics = [
    {
      title: 'Student Satisfaction',
      value: '4.3/5.0',
      change: '+0.2',
      trend: 'up',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'Course Completion Rate',
      value: '89%',
      change: '+3%',
      trend: 'up',
      icon: Book,
      color: 'text-blue-600'
    },
    {
      title: 'Faculty Utilization',
      value: '96%',
      change: '+1%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Research Publications',
      value: '127',
      change: '+15',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  return (
    <HodLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Department Analytics</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Data-driven insights for department performance</p>
          </div>
          <div className="flex gap-2">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="enrollment">Enrollment</option>
              <option value="performance">Performance</option>
              <option value="satisfaction">Satisfaction</option>
            </select>
            <Button variant="outline">
              Export Data
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {departmentMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <TrendIcon className={`h-3 w-3 mr-1 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    {metric.change} from last period
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Enrollment Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="students" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Faculty Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={facultyDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {facultyDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Course Performance Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={coursePerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="satisfaction" fill="#3b82f6" name="Satisfaction (1-5)" />
                <Bar yAxisId="right" dataKey="completion" fill="#10b981" name="Completion Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">CS 401 - Machine Learning</span>
                  <span className="text-sm text-green-600">4.7/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">CS 201 - Data Structures</span>
                  <span className="text-sm text-green-600">4.5/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">CS 501 - Cybersecurity</span>
                  <span className="text-sm text-green-600">4.3/5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Publications This Year</span>
                  <span className="text-sm font-medium">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Citation Index</span>
                  <span className="text-sm font-medium">2,456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Grants</span>
                  <span className="text-sm font-medium">$2.3M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Student Retention</span>
                  <span className="text-sm font-medium text-green-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Graduate Employment</span>
                  <span className="text-sm font-medium text-green-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Faculty Satisfaction</span>
                  <span className="text-sm font-medium text-green-600">4.1/5.0</span>
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
