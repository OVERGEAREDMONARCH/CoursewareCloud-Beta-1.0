import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Input } from '../../../components/ui/input';
import { Mail, Phone, Search, Plus, MoreVertical } from 'lucide-react';

const HodFaculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@university.edu',
      phone: '+1 (555) 123-4567',
      position: 'Associate Professor',
      department: 'Computer Science',
      status: 'active',
      courses: ['CS 101', 'CS 301', 'CS 401'],
      joinDate: '2019-08-15',
      officeHours: 'Mon-Wed 2-4 PM',
      research: 'Machine Learning, AI Ethics'
    },
    {
      id: 2,
      name: 'Prof. Michael Rodriguez',
      email: 'michael.rodriguez@university.edu',
      phone: '+1 (555) 234-5678',
      position: 'Professor',
      department: 'Computer Science',
      status: 'active',
      courses: ['CS 201', 'CS 501'],
      joinDate: '2015-01-20',
      officeHours: 'Tue-Thu 10-12 PM',
      research: 'Cybersecurity, Network Protocols'
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      email: 'emily.johnson@university.edu',
      phone: '+1 (555) 345-6789',
      position: 'Assistant Professor',
      department: 'Computer Science',
      status: 'on-leave',
      courses: ['CS 202', 'CS 302'],
      joinDate: '2020-09-01',
      officeHours: 'Currently on leave',
      research: 'Data Science, Big Data Analytics'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      email: 'james.wilson@university.edu',
      phone: '+1 (555) 456-7890',
      position: 'Senior Lecturer',
      department: 'Computer Science',
      status: 'active',
      courses: ['CS 102', 'CS 203'],
      joinDate: '2018-03-10',
      officeHours: 'Mon-Fri 1-3 PM',
      research: 'Software Engineering, Agile Methodologies'
    }
  ];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || faculty.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'on-leave': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Faculty Management</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Manage department faculty members and their assignments</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Faculty
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 new this semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">22</div>
              <p className="text-xs text-muted-foreground">91.7% active rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">On Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Medical & sabbatical</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Avg. Course Load</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">2.8</div>
              <p className="text-xs text-muted-foreground">Courses per faculty</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <CardTitle className="text-sm sm:text-base">Faculty Directory</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search faculty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64 text-sm"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="on-leave">On Leave</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {filteredFaculty.map((faculty) => (
                <div key={faculty.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg gap-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                      <AvatarImage src={`/placeholder.svg`} alt={faculty.name} />
                      <AvatarFallback className="text-xs sm:text-sm">{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{faculty.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{faculty.position}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500 truncate">{faculty.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{faculty.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                    <div className="text-left sm:text-right">
                      <Badge className={getStatusColor(faculty.status)} variant="secondary">
                        {faculty.status.replace('-', ' ')}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">
                        {faculty.courses.length} courses
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </HodLayout>
  );
};

export default HodFaculty;