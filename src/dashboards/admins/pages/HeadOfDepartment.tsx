
import React, { useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, UserPlus, Edit, Mail, Phone, Building2 } from 'lucide-react';

const HeadOfDepartment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      hod: {
        name: 'Dr. Sarah Wilson',
        email: 'sarah.wilson@university.edu',
        phone: '+1 (555) 123-4567',
        avatar: 'SW'
      },
      faculty: 24,
      students: 456,
      courses: 18,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Mathematics',
      hod: {
        name: 'Prof. Michael Chen',
        email: 'michael.chen@university.edu',
        phone: '+1 (555) 234-5678',
        avatar: 'MC'
      },
      faculty: 18,
      students: 312,
      courses: 15,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Physics',
      hod: {
        name: 'Dr. Emily Rodriguez',
        email: 'emily.rodriguez@university.edu',
        phone: '+1 (555) 345-6789',
        avatar: 'ER'
      },
      faculty: 16,
      students: 289,
      courses: 12,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Chemistry',
      hod: {
        name: 'Prof. David Thompson',
        email: 'david.thompson@university.edu',
        phone: '+1 (555) 456-7890',
        avatar: 'DT'
      },
      faculty: 14,
      students: 234,
      courses: 10,
      status: 'Active'
    },
    {
      id: 5,
      name: 'Biology',
      hod: null,
      faculty: 12,
      students: 198,
      courses: 8,
      status: 'Vacant'
    }
  ];

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (dept.hod && dept.hod.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Head of Department</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage department heads and their responsibilities</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Assign New HOD
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                4 with HODs assigned
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active HODs</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                1 position vacant
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84</div>
              <p className="text-xs text-muted-foreground">
                Across all departments
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,489</div>
              <p className="text-xs text-muted-foreground">
                Enrolled students
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Department Overview</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search departments or HODs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDepartments.map((dept) => (
                <Card key={dept.id} className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{dept.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={dept.status === 'Active' ? 'default' : 'destructive'}>
                            {dept.status}
                          </Badge>
                          {dept.status === 'Vacant' && (
                            <Badge variant="outline">Position Open</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {dept.hod ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-semibold">{dept.hod.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{dept.hod.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Head of Department</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Mail className="h-4 w-4" />
                            <span>{dept.hod.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Phone className="h-4 w-4" />
                            <span>{dept.hod.phone}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Reassign
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <UserPlus className="h-6 w-6 text-gray-400" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">No HOD assigned</p>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Assign HOD
                        </Button>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">{dept.faculty}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Faculty</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">{dept.students}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">{dept.courses}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Courses</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default HeadOfDepartment;
