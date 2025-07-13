import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const events = [
    {
      id: 1,
      title: 'React Project Due',
      date: 15,
      color: 'bg-red-500',
      time: '11:59 PM'
    },
    {
      id: 2,
      title: 'Database Lecture',
      date: 18,
      color: 'bg-blue-500',
      time: '10:00 AM'
    },
    {
      id: 3,
      title: 'Study Group',
      date: 20,
      color: 'bg-green-500',
      time: '2:00 PM'
    },
  ];

  const upcomingEvents = [
    {
      title: 'React Project Due',
      course: 'Advanced React Development',
      date: 'Today',
      time: '11:59 PM',
      color: 'bg-red-100 border-red-200 text-red-800'
    },
    {
      title: 'Database Design Lecture',
      course: 'Database Design Principles',
      date: 'Tomorrow',
      time: '10:00 AM',
      color: 'bg-blue-100 border-blue-200 text-blue-800'
    },
    {
      title: 'ML Study Group',
      course: 'Machine Learning Basics',
      date: 'Dec 20',
      time: '2:00 PM',
      color: 'bg-green-100 border-green-200 text-green-800'
    },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const today = new Date().getDate();
    const isCurrentMonth = currentDate.getMonth() === new Date().getMonth() && 
                          currentDate.getFullYear() === new Date().getFullYear();

    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 sm:h-20 lg:h-24"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events.filter(event => event.date === day);
      const isToday = isCurrentMonth && day === today;

      days.push(
        <div
          key={day}
          className={`h-16 sm:h-20 lg:h-24 p-1 sm:p-2 border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
            isToday ? 'bg-blue-50 dark:bg-blue-900/20 ring-1 sm:ring-2 ring-blue-500' : ''
          }`}
        >
          <div className={`text-xs sm:text-sm font-medium ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
            {day}
          </div>
          <div className="mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1">
            {dayEvents.map(event => (
              <div
                key={event.id}
                className={`${event.color} text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded truncate`}
                title={`${event.title} - ${event.time}`}
              >
                <span className="hidden sm:inline">{event.title}</span>
                <span className="sm:hidden">{event.title.substring(0, 8)}...</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Manage your schedule and upcoming events</p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-3 sm:px-4 py-2">
            <Plus size={16} className="mr-1 sm:mr-2" />
            Add Event
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm">
              {/* Calendar Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-600">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')} className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                    <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())} className="text-xs sm:text-sm px-2 sm:px-3">
                    Today
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('next')} className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                    <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-3 sm:p-6">
                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-0 mb-1 sm:mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-1 sm:p-2 text-center text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-0 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Upcoming Events</h3>
              <div className="space-y-2 sm:space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={`p-2 sm:p-3 rounded-lg border ${event.color}`}>
                    <h4 className="font-medium text-xs sm:text-sm">{event.title}</h4>
                    <p className="text-xs opacity-75 mt-0.5 sm:mt-1 truncate">{event.course}</p>
                    <div className="flex items-center justify-between text-xs mt-1 sm:mt-2">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-1.5 sm:space-y-2">
                <Button variant="outline" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9" size="sm">
                  Schedule Study Time
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9" size="sm">
                  Set Reminder
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9" size="sm">
                  Export Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Calendar;
