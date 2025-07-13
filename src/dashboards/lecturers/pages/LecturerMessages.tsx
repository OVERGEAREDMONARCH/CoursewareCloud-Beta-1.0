import { useState } from 'react';
import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, MessageCircle, Send, Plus, Filter, Star, Archive } from 'lucide-react';

// Define a type for messages
interface Message {
  id: string;
  from: string;
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  starred: boolean;
  course: string;
  priority: string;
}

const LecturerMessages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState('all');

  const messages = [
    {
      id: '1',
      from: 'Alice Johnson',
      subject: 'Question about React Hooks Assignment',
      preview: 'Hi Dr. Johnson, I have a question about the useState hook in our latest assignment...',
      timestamp: '2024-01-15T14:30:00Z',
      read: false,
      starred: true,
      course: 'Advanced React Development',
      priority: 'high'
    },
    {
      id: '2',
      from: 'Bob Smith',
      subject: 'Request for Extension',
      preview: 'Dear Professor, I would like to request an extension for the database project due to...',
      timestamp: '2024-01-15T12:15:00Z',
      read: false,
      starred: false,
      course: 'Database Design Principles',
      priority: 'medium'
    },
    {
      id: '3',
      from: 'Carol Davis',
      subject: 'Thank you for the feedback',
      preview: 'Thank you for the detailed feedback on my network analysis paper. I found your suggestions...',
      timestamp: '2024-01-14T16:45:00Z',
      read: true,
      starred: false,
      course: 'Computer Networks',
      priority: 'low'
    },
    {
      id: '4',
      from: 'Department Admin',
      subject: 'Faculty Meeting Reminder',
      preview: 'This is a reminder about the faculty meeting scheduled for tomorrow at 4 PM...',
      timestamp: '2024-01-14T10:00:00Z',
      read: true,
      starred: false,
      course: 'General',
      priority: 'medium'
    }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'unread' && !message.read) ||
                         (filter === 'starred' && message.starred);
    return matchesSearch && matchesFilter;
  });

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Communicate with students and colleagues</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>

        {/* Stats Cards - Mobile: 2x2 grid, Desktop: 1x4 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">24</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">5</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Starred</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Sent Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages Layout - Mobile: Single column stack, Desktop: Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 order-1">
            <Card className="h-auto lg:h-[600px]">
              <CardHeader>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                    <span>Inbox</span>
                    <Filter className="h-4 w-4" />
                  </CardTitle>
                  <div className="flex gap-2 overflow-x-auto">
                    {['all', 'unread', 'starred'].map((filterType) => (
                      <Button
                        key={filterType}
                        size="sm"
                        variant={filter === filterType ? 'default' : 'outline'}
                        onClick={() => setFilter(filterType)}
                        className="whitespace-nowrap text-xs sm:text-sm"
                      >
                        {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 text-sm"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 max-h-[400px] lg:h-[450px] overflow-y-auto">
                <div className="space-y-2">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        !message.read ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' : 'bg-gray-50 dark:bg-gray-700'
                      } hover:bg-gray-100 dark:hover:bg-gray-600`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <span className={`font-medium text-sm truncate ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                            {message.from}
                          </span>
                          {message.starred && <Star className="w-3 h-3 text-yellow-500 fill-current flex-shrink-0" />}
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{formatTime(message.timestamp)}</span>
                      </div>
                      <h4 className={`text-sm mb-1 truncate ${!message.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {message.subject}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{message.preview}</p>
                      <div className="flex items-center justify-between mt-2 gap-2">
                        <Badge variant="outline" className="text-xs truncate">
                          {message.course}
                        </Badge>
                        <Badge className={`text-xs ${getPriorityColor(message.priority)}`}>
                          {message.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message View */}
          <div className="lg:col-span-2 order-2">
            <Card className="h-auto lg:h-[600px]">
              {selectedMessage ? (
                <>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg truncate">{selectedMessage.subject}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          From: {selectedMessage.from} • {formatTime(selectedMessage.timestamp)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">{selectedMessage.course}</Badge>
                          <Badge className={`text-xs ${getPriorityColor(selectedMessage.priority)}`}>
                            {selectedMessage.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button size="sm" variant="outline">
                          <Star className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Archive className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-none">
                    <div className="prose max-w-none text-sm sm:text-base">
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedMessage.preview}
                      </p>
                      <br />
                      <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <br />
                      <p className="text-gray-700 dark:text-gray-300">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </CardContent>
                  <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                        <Send className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">Forward</Button>
                    </div>
                  </div>
                </>
              ) : (
                <CardContent className="flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select a message to view</p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </LecturerLayout>
  );
};

export default LecturerMessages;