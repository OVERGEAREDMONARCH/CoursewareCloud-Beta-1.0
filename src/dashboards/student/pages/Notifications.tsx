
import { useState } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Bell, CheckCircle, AlertTriangle, Info, Calendar, Book, Settings } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'assignment' | 'course' | 'system';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'assignment',
    title: 'Assignment Due Tomorrow',
    message: 'Database Design Project is due tomorrow at 11:59 PM',
    timestamp: '2024-01-15T10:30:00Z',
    isRead: false,
    actionUrl: '/assignments/db-design'
  },
  {
    id: '2',
    type: 'success',
    title: 'Grade Posted',
    message: 'Your grade for React Components Quiz has been posted: A-',
    timestamp: '2024-01-15T09:15:00Z',
    isRead: false
  },
  {
    id: '3',
    type: 'course',
    title: 'New Course Material',
    message: 'Week 6 materials for Advanced React Patterns are now available',
    timestamp: '2024-01-14T16:45:00Z',
    isRead: true,
    actionUrl: '/courses/react-advanced'
  },
  {
    id: '4',
    type: 'warning',
    title: 'Upcoming Deadline',
    message: 'Machine Learning Project proposal due in 3 days',
    timestamp: '2024-01-14T14:20:00Z',
    isRead: true
  },
  {
    id: '5',
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance on Sunday 2-4 AM EST',
    timestamp: '2024-01-13T12:00:00Z',
    isRead: true
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const filteredNotifications = notifications.filter(notif => 
    filter === 'all' || !notif.isRead
  );

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      case 'assignment': return <Calendar className="w-5 h-5 text-red-500" />;
      case 'course': return <Book className="w-5 h-5 text-purple-500" />;
      case 'system': return <Settings className="w-5 h-5 text-gray-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Stay updated with your courses and assignments
          </p>
        </div>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline">
            Mark all as read
          </Button>
        )}
      </div>

      {/* Filter Tabs */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Button
              variant={filter === 'all' ? "default" : "outline"}
              onClick={() => setFilter('all')}
            >
              All Notifications ({notifications.length})
            </Button>
            <Button
              variant={filter === 'unread' ? "default" : "outline"}
              onClick={() => setFilter('unread')}
            >
              Unread ({unreadCount})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map(notification => (
          <Card 
            key={notification.id} 
            className={`transition-all cursor-pointer hover:shadow-md ${
              !notification.isRead ? 'ring-2 ring-blue-100 bg-blue-50/50' : ''
            }`}
            onClick={() => !notification.isRead && markAsRead(notification.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${
                        !notification.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {notification.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">
                          {formatTime(notification.timestamp)}
                        </span>
                        <Badge variant="secondary" className="text-xs capitalize">
                          {notification.type}
                        </Badge>
                        {!notification.isRead && (
                          <Badge className="bg-blue-500 text-white text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                    {notification.actionUrl && (
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No notifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {filter === 'unread' 
                ? 'All caught up! No unread notifications.' 
                : 'You\'ll see notifications about courses, assignments, and system updates here.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Notifications;
