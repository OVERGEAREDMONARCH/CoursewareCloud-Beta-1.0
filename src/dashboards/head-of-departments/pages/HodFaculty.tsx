
import React, { useState } from 'react';
import { HodLayout } from '@/components/hod/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Users, Mail, Phone, Calendar, Search, Filter, Plus, MoreVertical } from 'lucide-react';

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
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Faculty Management</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage department faculty members and their assignments</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Faculty
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 new this semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <p className="text-xs text-muted-foreground">91.7% active rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">On Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Medical & sabbatical</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Course Load</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.8</div>
              <p className="text-xs text-muted-foreground">Courses per faculty</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Faculty Directory</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search faculty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
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
            <div className="space-y-4">
              {filteredFaculty.map((faculty) => (
                <div key={faculty.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/placeholder.svg`} alt={faculty.name} />
                      <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{faculty.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{faculty.position}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{faculty.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{faculty.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className={getStatusColor(faculty.status)}>
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
