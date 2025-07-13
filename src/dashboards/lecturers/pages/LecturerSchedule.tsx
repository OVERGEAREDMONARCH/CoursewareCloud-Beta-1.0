import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const LecturerSchedule = () => {

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = [
    {
      id: '1',
      course: 'Advanced React Development',
      type: 'Lecture',
      time: '10:00 - 11:30',
      location: 'Room A-101',
      students: 45,
      day: 'Monday',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      course: 'Database Design Principles',
      type: 'Lab',
      time: '14:00 - 16:00',
      location: 'Lab B-205',
      students: 38,
      day: 'Tuesday',
      color: 'bg-purple-500'
    },
    {
      id: '3',
      course: 'Computer Networks',
      type: 'Lecture',
      time: '09:00 - 10:30',
      location: 'Room C-302',
      students: 52,
      day: 'Wednesday',
      color: 'bg-green-500'
    },
    {
      id: '4',
      course: 'Advanced React Development',
      type: 'Tutorial',
      time: '15:00 - 16:00',
      location: 'Room A-101',
      students: 22,
      day: 'Wednesday',
      color: 'bg-blue-500'
    },
    {
      id: '5',
      course: 'Database Design Principles',
      type: 'Lecture',
      time: '11:00 - 12:30',
      location: 'Room B-204',
      students: 38,
      day: 'Thursday',
      color: 'bg-purple-500'
    },
    {
      id: '6',
      course: 'Computer Networks',
      type: 'Lab',
      time: '13:00 - 15:00',
      location: 'Lab C-301',
      students: 26,
      day: 'Friday',
      color: 'bg-green-500'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Faculty Meeting',
      time: '16:00 - 17:00',
      date: '2024-01-16',
      location: 'Conference Room A',
      type: 'Meeting'
    },
    {
      id: '2',
      title: 'Student Consultation Hours',
      time: '14:00 - 16:00',
      date: '2024-01-17',
      location: 'Office 304',
      type: 'Consultation'
    },
    {
      id: '3',
      title: 'Department Seminar',
      time: '15:00 - 16:30',
      date: '2024-01-18',
      location: 'Auditorium',
      type: 'Seminar'
    }
  ];

  const getClassesForDay = (day: string) => {
    return schedule.filter(item => item.day === day);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Meeting': return 'bg-red-100 text-red-800';
      case 'Consultation': return 'bg-blue-100 text-blue-800';
      case 'Seminar': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Schedule</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Manage your teaching schedule and appointments</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        {/* Week Navigation */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Weekly Schedule
              </CardTitle>
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium px-3 sm:px-4 whitespace-nowrap">This Week</span>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Weekly Schedule Grid - Mobile: Single column, Desktop: 7 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4">
          {weekDays.map((day, index) => (
            <Card key={day} className="min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm font-medium text-center">
                  {day}
                  <br />
                  <span className="text-xs text-gray-500 font-normal">
                    Jan {15 + index}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {getClassesForDay(day).map((item) => (
                    <div
                      key={item.id}
                      className={`p-2 sm:p-3 rounded-lg text-white text-xs ${item.color} hover:opacity-90 transition-opacity cursor-pointer`}
                    >
                      <div className="font-medium mb-1 text-xs sm:text-sm truncate">{item.course}</div>
                      <div className="text-xs opacity-90 mb-1">{item.type}</div>
                      <div className="flex items-center gap-1 text-xs opacity-90 mb-1">
                        <Clock size={10} />
                        <span className="truncate">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs opacity-90 mb-1">
                        <MapPin size={10} />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs opacity-90">
                        <Users size={10} />
                        {item.students} students
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events and Summary - Mobile: Single column, Desktop: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">{event.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1 truncate">
                          <MapPin size={12} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Badge className={`${getEventTypeColor(event.type)} text-xs whitespace-nowrap mt-2 sm:mt-0`}>
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Today's Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">3</h3>
                  <p className="text-sm opacity-90">Classes Today</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">127</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Total Students</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">4.5h</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Teaching Hours</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Next Class</h4>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-l-blue-500">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Advanced React Development</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">10:00 - 11:30 • Room A-101</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">45 students</div>
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

export default LecturerSchedule;