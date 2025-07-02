
import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const HodSchedule = () => {
  const [viewMode, setViewMode] = useState('week');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const meetings = [
    {
      id: 1,
      title: 'Faculty Meeting',
      time: '10:00 AM - 11:30 AM',
      date: 'Monday',
      location: 'Conference Room A',
      attendees: ['Dr. Wilson', 'Prof. Rodriguez', 'Dr. Chen', 'Dr. Johnson'],
      type: 'meeting',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Budget Review',
      time: '2:00 PM - 3:00 PM',
      date: 'Tuesday',
      location: 'Dean\'s Office',
      attendees: ['Dr. Wilson', 'Dean Thompson', 'Finance Manager'],
      type: 'review',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Student Advisory Meeting',
      time: '11:00 AM - 12:00 PM',
      date: 'Wednesday',
      location: 'Room B-205',
      attendees: ['Dr. Wilson', 'Student Representatives'],
      type: 'advisory',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Course Planning Session',
      time: '9:00 AM - 10:30 AM',
      date: 'Thursday',
      location: 'Conference Room B',
      attendees: ['Dr. Wilson', 'Curriculum Committee'],
      type: 'planning',
      status: 'confirmed'
    },
    {
      id: 5,
      title: 'Research Presentation',
      time: '3:00 PM - 4:00 PM',
      date: 'Friday',
      location: 'Auditorium',
      attendees: ['Dr. Wilson', 'Faculty', 'Graduate Students'],
      type: 'presentation',
      status: 'confirmed'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Department Retreat',
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Mountain View Resort',
      type: 'retreat'
    },
    {
      id: 2,
      title: 'Accreditation Visit',
      date: '2024-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Campus',
      type: 'visit'
    },
    {
      id: 3,
      title: 'Guest Lecture Series',
      date: '2024-02-25',
      time: '2:00 PM - 3:30 PM',
      location: 'Auditorium',
      type: 'lecture'
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'review': return 'bg-green-100 text-green-800 border-green-200';
      case 'advisory': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'planning': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'presentation': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HodLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Schedule Management</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage meetings, events, and department activities</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === 'week' ? 'month' : 'week')}>
              {viewMode === 'week' ? 'Month View' : 'Week View'}
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Scheduled meetings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Events this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Room Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Average occupancy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Conflicts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Scheduling conflicts</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Weekly Schedule</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">Week of Jan 15, 2024</span>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weekDays.map((day) => {
                  const dayMeetings = meetings.filter(meeting => meeting.date === day);
                  return (
                    <div key={day} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{day}</h3>
                      {dayMeetings.length > 0 ? (
                        <div className="space-y-2">
                          {dayMeetings.map((meeting) => (
                            <div key={meeting.id} className={`p-3 rounded-lg border ${getEventColor(meeting.type)}`}>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{meeting.title}</h4>
                                  <div className="flex items-center gap-4 mt-1 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {meeting.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {meeting.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {meeting.attendees.length} attendees
                                    </div>
                                  </div>
                                </div>
                                <Badge className={getStatusColor(meeting.status)}>
                                  {meeting.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No meetings scheduled</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                    <div className="space-y-1 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Room Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">Conference Room A</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Available all day</p>
                <Badge className="bg-green-100 text-green-800 mt-2">Available</Badge>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">Conference Room B</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Occupied 9:00 AM - 10:30 AM</p>
                <Badge className="bg-yellow-100 text-yellow-800 mt-2">Partially Booked</Badge>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">Auditorium</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fully booked today</p>
                <Badge className="bg-red-100 text-red-800 mt-2">Occupied</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </HodLayout>
  );
};

export default HodSchedule;
