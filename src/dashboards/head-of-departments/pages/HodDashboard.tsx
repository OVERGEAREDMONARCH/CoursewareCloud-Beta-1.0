import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Users, Book, TrendingUp, Clock, MessageSquare, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';

const HodDashboard = () => {
  const departmentStats = {
    totalFaculty: 24,
    activeCourses: 18,
    totalStudents: 456,
    pendingRequests: 7
  };

  const recentActivities = [
    {
      id: 1,
      type: 'faculty_request',
      title: 'Leave Request - Dr. Smith',
      description: 'Medical leave for 2 weeks',
      time: '2 hours ago',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'course_approval',
      title: 'New Course Proposal',
      description: 'Advanced Machine Learning - Prof. Chen',
      time: '4 hours ago',
      priority: 'high'
    },
    {
      id: 3,
      type: 'budget_request',
      title: 'Equipment Budget Request',
      description: 'Lab computers upgrade - $25,000',
      time: '1 day ago',
      priority: 'high'
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Faculty Meeting',
      time: '2024-01-16T14:00:00Z',
      attendees: 12,
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Budget Review',
      time: '2024-01-17T10:00:00Z',
      attendees: 5,
      location: 'Dean\'s Office'
    },
    {
      id: 3,
      title: 'Curriculum Committee',
      time: '2024-01-18T15:30:00Z',
      attendees: 8,
      location: 'Room B-205'
    }
  ];

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in px-4 sm:px-0">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4 sm:p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Welcome back, Dr. Wilson!</h1>
          <p className="opacity-90 text-sm sm:text-base">Managing Computer Science Department with 24 faculty members and 456 students.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Faculty</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">{departmentStats.totalFaculty}</div>
              <p className="text-xs text-muted-foreground">
                +2 new hires this semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Active Courses</CardTitle>
              <Book className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">{departmentStats.activeCourses}</div>
              <p className="text-xs text-muted-foreground">
                3 new courses this term
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Students</CardTitle>
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">{departmentStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Pending Requests</CardTitle>
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">{departmentStats.pendingRequests}</div>
              <p className="text-xs text-muted-foreground">
                Requires your attention
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.priority === 'high' ? 'bg-red-500' : 
                      activity.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{activity.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                    <Badge variant={activity.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                      {activity.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 text-sm">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Upcoming Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{meeting.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{meeting.location}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(meeting.time).toLocaleDateString()} at {new Date(meeting.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{meeting.attendees} attendees</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 text-sm">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Manage Faculty
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <Book className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Review Courses
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Department Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm">Student Satisfaction</span>
                  <span className="text-xs sm:text-sm font-medium">94%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm">Course Completion</span>
                  <span className="text-xs sm:text-sm font-medium">89%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm">Faculty Engagement</span>
                  <span className="text-xs sm:text-sm font-medium">96%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">System Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Budget Review Due</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Quarterly review pending</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Accreditation Approved</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">All requirements met</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Schedule Conflicts</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">2 rooms double-booked</p>
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

export default HodDashboard;