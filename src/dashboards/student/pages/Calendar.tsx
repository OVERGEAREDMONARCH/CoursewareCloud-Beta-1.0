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
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events.filter(event => event.date === day);
      const isToday = isCurrentMonth && day === today;

      days.push(
        <div
          key={day}
          className={`h-24 p-2 border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
            isToday ? 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-500' : ''
          }`}
        >
          <div className={`text-sm font-medium ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
            {day}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.map(event => (
              <div
                key={event.id}
                className={`${event.color} text-white text-xs px-2 py-1 rounded truncate`}
                title={`${event.title} - ${event.time}`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your schedule and upcoming events</p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          <Plus size={20} className="mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center gap-2">
                <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onClick={() => navigateMonth('prev')} asChild={false}>
                  <ChevronLeft size={16} />
                </Button>
                <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onClick={() => setCurrentDate(new Date())}>
                  Today
                </Button>
                <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onClick={() => navigateMonth('next')}>
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-6">
              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-0 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
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
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className={`p-3 rounded-lg border ${event.color}`}>
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <p className="text-xs opacity-75 mt-1">{event.course}</p>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
