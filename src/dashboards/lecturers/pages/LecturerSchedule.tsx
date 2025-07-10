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
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Schedule</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your teaching schedule and appointments</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        {/* Week Navigation */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Schedule
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium px-4">This Week</span>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Weekly Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {weekDays.map((day, index) => (
            <Card key={day} className="min-h-[400px]">
              <CardHeader className="pb-3">
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
                      className={`p-3 rounded-lg text-white text-xs ${item.color} hover:opacity-90 transition-opacity cursor-pointer`}
                    >
                      <div className="font-medium mb-1">{item.course}</div>
                      <div className="text-xs opacity-90 mb-1">{item.type}</div>
                      <div className="flex items-center gap-1 text-xs opacity-90">
                        <Clock size={10} />
                        {item.time}
                      </div>
                      <div className="flex items-center gap-1 text-xs opacity-90">
                        <MapPin size={10} />
                        {item.location}
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

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
                  <h3 className="text-2xl font-bold">3</h3>
                  <p className="text-sm opacity-90">Classes Today</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">127</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Total Students</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">4.5h</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Teaching Hours</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Next Class</h4>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-l-blue-500">
                    <div className="font-medium text-gray-900 dark:text-white">Advanced React Development</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">10:00 - 11:30 • Room A-101</div>
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
