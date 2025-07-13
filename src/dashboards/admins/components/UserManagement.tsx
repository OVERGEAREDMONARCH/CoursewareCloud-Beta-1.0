
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
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
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <CardTitle className="text-base sm:text-lg">User Management</CardTitle>
        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm">
          <UserPlus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Add User
        </Button>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-2 sm:space-y-4">
          {recentUsers.map((user, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">{user.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                <Badge variant={user.role === 'Lecturer' ? 'default' : 'secondary'} className="text-xs">
                  {user.role}
                </Badge>
                <Badge variant={user.status === 'Active' ? 'default' : 'outline'} className="text-xs">
                  {user.status}
                </Badge>
                <Button variant="ghost" size="sm" className="h-6 w-6 sm:h-8 sm:w-8">
                  <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};