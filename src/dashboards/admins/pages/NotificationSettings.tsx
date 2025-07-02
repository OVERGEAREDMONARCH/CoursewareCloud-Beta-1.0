
import React, { useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Bell, Mail, MessageSquare, Send, Settings } from 'lucide-react';

const NotificationSettings: React.FC = () => {
  const [newNotification, setNewNotification] = useState('');

  const notifications = [
    { id: 1, title: 'System Maintenance Scheduled', message: 'Scheduled maintenance on January 20th at 2:00 AM', type: 'system', sent: '2 hours ago', recipients: 2847 },
    { id: 2, title: 'New Course Available', message: 'Data Science Fundamentals course is now available for enrollment', type: 'course', sent: '1 day ago', recipients: 1234 },
    { id: 3, title: 'Grade Reports Ready', message: 'Mid-term grade reports are now available for students', type: 'academic', sent: '3 days ago', recipients: 856 },
  ];

  const templates = [
    { id: 1, name: 'Welcome Email', type: 'Email', usage: 145 },
    { id: 2, name: 'Course Enrollment', type: 'In-app', usage: 89 },
    { id: 3, name: 'Assignment Due', type: 'Email + Push', usage: 234 },
    { id: 4, name: 'Grade Posted', type: 'In-app', usage: 167 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notification Center</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Manage system-wide notifications and templates</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send New Notification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Enter notification message..."
                value={newNotification}
                onChange={(e) => setNewNotification(e.target.value)}
              />
              <div className="flex gap-2">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send to All Users
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send via Email
                </Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  In-App Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,847</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-muted-foreground">
                Average success rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76.5%</div>
              <p className="text-xs text-muted-foreground">
                Email notifications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Templates</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Available templates
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{notification.title}</h4>
                      <Badge variant={notification.type === 'system' ? 'destructive' : notification.type === 'course' ? 'default' : 'outline'}>
                        {notification.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{notification.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Sent {notification.sent}</span>
                      <span>{notification.recipients.toLocaleString()} recipients</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Notification Templates</CardTitle>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Manage Templates
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{template.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{template.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{template.usage}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">times used</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Bell className="h-6 w-6" />
                <span>Push Settings</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Mail className="h-6 w-6" />
                <span>Email Config</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <MessageSquare className="h-6 w-6" />
                <span>In-App Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default NotificationSettings;
