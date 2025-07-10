import { LecturerLayout } from '../components/LecturerLayout';
import { CourseManagementCard } from '../components/CourseManagementCard';
import { StudentAnalytics } from '../components/StudentAnalytics';
import { AssignmentGrading } from '../components/AssignmentGrading';
import { UpcomingClasses } from '../components/UpcomingClasses';
import { QuickActions } from '../components/QuickActions';

const LecturerDashboard = () => {
  // Sample data for lecturer dashboard
  const courses = [
    {
      id: '1',
      title: 'Advanced React Development',
      students: 45,
      progress: 78,
      nextClass: '2024-01-16T10:00:00Z',
      pendingAssignments: 12,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Database Design Principles',
      students: 38,
      progress: 65,
      nextClass: '2024-01-17T14:00:00Z',
      pendingAssignments: 8,
      color: 'bg-purple-500'
    },
    {
      id: '3',
      title: 'Computer Networks',
      students: 52,
      progress: 89,
      nextClass: '2024-01-18T09:00:00Z',
      pendingAssignments: 3,
      color: 'bg-green-500'
    }
  ];

  const pendingGrades = [
    {
      id: '1',
      assignment: 'React Component Library Project',
      course: 'Advanced React Development',
      submissions: 42,
      totalStudents: 45,
      dueDate: '2024-01-15',
      priority: 'high' as const
    },
    {
      id: '2',
      assignment: 'Database Schema Design',
      course: 'Database Design Principles',
      submissions: 35,
      totalStudents: 38,
      dueDate: '2024-01-18',
      priority: 'medium' as const
    }
  ];

  const upcomingClasses = [
    {
      id: '1',
      course: 'Advanced React Development',
      time: '2024-01-16T10:00:00Z',
      duration: 90,
      location: 'Room A-101',
      topic: 'Advanced Hooks and Context'
    },
    {
      id: '2',
      course: 'Database Design Principles',
      time: '2024-01-17T14:00:00Z',
      duration: 120,
      location: 'Lab B-205',
      topic: 'Normalization and Optimization'
    }
  ];

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 sm:p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Welcome back, Dr. Johnson!</h1>
          <p className="opacity-90 text-sm sm:text-base">You have 3 active courses with 135 total students. 20 assignments need grading.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Active Courses</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Total Students</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">135</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Pending Grades</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">20</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">This Week Classes</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Course Management */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* My Courses */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">My Courses</h2>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm sm:text-base w-full sm:w-auto text-left sm:text-right">
                  Manage All Courses
                </button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {courses.map((course) => (
                  <CourseManagementCard key={course.id} {...course} />
                ))}
              </div>
            </div>

            {/* Assignment Grading */}
            <AssignmentGrading assignments={pendingGrades} />
          </div>

          {/* Right Column - Analytics & Classes */}
          <div className="space-y-4 sm:space-y-6">
            <UpcomingClasses classes={upcomingClasses} />
            <StudentAnalytics />
            <QuickActions />
          </div>
        </div>
      </div>
    </LecturerLayout>
  );
};

export default LecturerDashboard;
