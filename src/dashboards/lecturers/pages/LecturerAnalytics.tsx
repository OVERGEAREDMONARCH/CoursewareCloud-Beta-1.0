import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { TrendingUp, TrendingDown, Users, BookOpen, Award, Target, BarChart3 } from 'lucide-react';

const LecturerAnalytics = () => {
  const performanceData = [
    {
      course: 'Advanced React Development',
      students: 45,
      avgGrade: 85.4,
      attendance: 92.1,
      completion: 78,
      trend: 'up',
      color: 'bg-blue-500'
    },
    {
      course: 'Database Design Principles',
      students: 38,
      avgGrade: 78.5,
      attendance: 88.3,
      completion: 65,
      trend: 'up',
      color: 'bg-purple-500'
    },
    {
      course: 'Computer Networks',
      students: 52,
      avgGrade: 82.1,
      attendance: 89.7,
      completion: 89,
      trend: 'stable',
      color: 'bg-green-500'
    }
  ];

  const weeklyStats = [
    { week: 'Week 1', engagement: 85, assignments: 12, grades: 95 },
    { week: 'Week 2', engagement: 88, assignments: 15, grades: 92 },
    { week: 'Week 3', engagement: 82, assignments: 18, grades: 89 },
    { week: 'Week 4', engagement: 90, assignments: 14, grades: 94 }
  ];

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Track student performance and course engagement</p>
        </div>

        {/* Overview Stats - Mobile: 2x2 grid, Desktop: 1x4 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Students</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">135</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Average Grade</CardTitle>
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">82.0%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Attendance Rate</CardTitle>
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">90.0%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+1.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Course Completion</CardTitle>
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">77.3%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+4.1%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
              Course Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 sm:space-y-6">
              {performanceData.map((course, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${course.color} flex-shrink-0`}></div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{course.course}</h3>
                      <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {course.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : course.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Average Grade</span>
                        <span className="font-medium">{course.avgGrade}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${course.avgGrade}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Attendance</span>
                        <span className="font-medium">{course.attendance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${course.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Completion</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Performance Trends - Mobile: Single column, Desktop: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Student Engagement Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {weeklyStats.map((week, index) => (
                  <div key={index} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-900 dark:text-white flex-shrink-0">{week.week}</span>
                    <div className="flex items-center gap-2 sm:gap-4 flex-1">
                      <div className="w-16 sm:w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${week.engagement}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 w-8 flex-shrink-0">{week.engagement}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Assignment Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-sm sm:text-base">Recent Performance</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">On-time Submissions</span>
                      <span className="text-xs sm:text-sm font-medium">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Average Score</span>
                      <span className="text-xs sm:text-sm font-medium">85.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Participation Rate</span>
                      <span className="text-xs sm:text-sm font-medium">91.7%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-sm sm:text-base">Grade Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm flex-shrink-0">A (90-100%)</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-16 sm:w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                        <span className="text-xs text-gray-500 w-6 sm:w-8 flex-shrink-0">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm flex-shrink-0">B (80-89%)</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-16 sm:w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <span className="text-xs text-gray-500 w-6 sm:w-8 flex-shrink-0">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm flex-shrink-0">C (70-79%)</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-16 sm:w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <span className="text-xs text-gray-500 w-6 sm:w-8 flex-shrink-0">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm flex-shrink-0">D (60-69%)</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-16 sm:w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                        </div>
                        <span className="text-xs text-gray-500 w-6 sm:w-8 flex-shrink-0">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LecturerLayout>
  );
};

export default LecturerAnalytics;