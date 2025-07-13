import { CourseCard } from '../components/CourseCard';
import { AssignmentsList } from '../components/AssignmentsList';
import { QuickStats } from '../components/QuickStats';
import { RecentActivity } from '../components/RecentActivity';

const Dashboard = () => {
  // Sample data
  const courses = [
    {
      title: 'Advanced React Development',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      status: 'In Progress' as const,
      daysRemaining: 15,
      color: 'bg-blue-500',
    },
    {
      title: 'Database Design Principles',
      instructor: 'Prof. Michael Chen',
      progress: 90,
      status: 'In Progress' as const,
      daysRemaining: 8,
      color: 'bg-purple-500',
    },
    {
      title: 'Computer Networks',
      instructor: 'Dr. Emily Rodriguez',
      progress: 100,
      status: 'Completed' as const,
      color: 'bg-green-500',
    },
    {
      title: 'Machine Learning Basics',
      instructor: 'Prof. David Wilson',
      progress: 0,
      status: 'Not Started' as const,
      daysRemaining: 30,
      color: 'bg-orange-500',
    },
  ];

  const assignments = [
    {
      id: '1',
      title: 'React Component Library Project',
      course: 'Advanced React Development',
      dueDate: 'Dec 15, 2024',
      priority: 'high' as const,
      status: 'pending' as const,
      daysUntilDue: 3,
    },
    {
      id: '2',
      title: 'Database Schema Design',
      course: 'Database Design Principles',
      dueDate: 'Dec 20, 2024',
      priority: 'medium' as const,
      status: 'pending' as const,
      daysUntilDue: 8,
    },
    {
      id: '3',
      title: 'Network Protocol Analysis',
      course: 'Computer Networks',
      dueDate: 'Dec 22, 2024',
      priority: 'low' as const,
      status: 'submitted' as const,
      daysUntilDue: 10,
    },
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'assignment' as const,
      title: 'Assignment Submitted',
      description: 'Successfully submitted Network Protocol Analysis assignment',
      timestamp: '2024-12-07T10:30:00Z',
      course: 'Computer Networks',
    },
    {
      id: '2',
      type: 'message' as const,
      title: 'New Message',
      description: 'Dr. Sarah Johnson sent feedback on your React project',
      timestamp: '2024-12-07T08:15:00Z',
      course: 'Advanced React Development',
    },
    {
      id: '3',
      type: 'course' as const,
      title: 'Course Progress',
      description: 'Completed Module 5: Advanced Hooks in React',
      timestamp: '2024-12-06T16:45:00Z',
      course: 'Advanced React Development',
    },
    {
      id: '4',
      type: 'event' as const,
      title: 'Upcoming Lecture',
      description: 'Machine Learning Fundamentals lecture scheduled for tomorrow',
      timestamp: '2024-12-06T14:20:00Z',
      course: 'Machine Learning Basics',
    },
  ];

  return (
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="opacity-90 text-sm sm:text-base">You have 5 active courses and 3 pending assignments. Keep up the great work!</p>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Courses */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* My Courses */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">My Courses</h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm sm:text-base">
                  View All Courses
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>

            {/* Assignments */}
            <AssignmentsList assignments={assignments} />
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-4 sm:space-y-6">
            <RecentActivity activities={recentActivities} />
            
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full text-left p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  <span className="font-medium text-blue-700 dark:text-blue-300 text-sm sm:text-base">Join Live Lecture</span>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">Advanced React Development</p>
                </button>
                <button className="w-full text-left p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                  <span className="font-medium text-purple-700 dark:text-purple-300 text-sm sm:text-base">Schedule Study Session</span>
                  <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400">Book a time slot</p>
                </button>
                <button className="w-full text-left p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                  <span className="font-medium text-green-700 dark:text-green-300 text-sm sm:text-base">Access Library</span>
                  <p className="text-xs sm:text-sm text-green-600 dark:text-green-400">Digital resources</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
