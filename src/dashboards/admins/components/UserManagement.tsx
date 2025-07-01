
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MoreHorizontal, UserPlus } from 'lucide-react';

export const UserManagement: React.FC = () => {
  const recentUsers = [
    { name: 'John Smith', email: 'john@university.edu', role: 'Student', status: 'Active' },
    { name: 'Dr. Sarah Wilson', email: 'sarah@university.edu', role: 'Lecturer', status: 'Active' },
    { name: 'Mike Johnson', email: 'mike@university.edu', role: 'Student', status: 'Pending' },
    { name: 'Prof. David Lee', email: 'david@university.edu', role: 'Lecturer', status: 'Active' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>User Management</CardTitle>
        <Button size="sm" className="bg-red-600 hover:bg-red-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={user.role === 'Lecturer' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
                <Badge variant={user.status === 'Active' ? 'default' : 'outline'}>
                  {user.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
