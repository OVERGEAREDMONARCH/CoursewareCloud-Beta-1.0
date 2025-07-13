
import { CourseCard } from '../components/CourseCard';
import { Search, Filter, Plus } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const Courses = () => {
  const allCourses = [
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
    {
      title: 'Web Security Fundamentals',
      instructor: 'Dr. Lisa Park',
      progress: 45,
      status: 'In Progress' as const,
      daysRemaining: 22,
      color: 'bg-red-500',
    },
    {
      title: 'Mobile App Development',
      instructor: 'Prof. James Miller',
      progress: 30,
      status: 'In Progress' as const,
      daysRemaining: 35,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 px-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Courses</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">Manage your enrolled courses and track progress</p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
            <Plus size={16} className="mr-2" />
            Enroll in Course
          </Button>
        </div>

      {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={14} />
            Filter
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {allCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
  );
};

export default Courses;
