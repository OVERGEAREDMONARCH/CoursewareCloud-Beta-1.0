
import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Input } from '../../../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Search, Send, Paperclip, Star, Archive, Trash2, Mail, Users, } from 'lucide-react';

type Message = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
  priority: string;
  category: string;
  full: string;
};

const HodMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('inbox');

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Dr. Sarah Chen',
      subject: 'Course Curriculum Update Request',
      preview: 'I would like to propose some updates to the CS 401 Machine Learning curriculum...',
      time: '2 hours ago',
      read: false,
      priority: 'high',
      category: 'faculty',
      full: 'I would like to propose some updates to the CS 401 Machine Learning curriculum to include more recent developments in deep learning and neural networks. The proposed changes would enhance student learning outcomes and keep our program competitive.'
    },
    {
      id: 2,
      sender: 'Prof. Michael Rodriguez',
      subject: 'Equipment Budget Approval',
      preview: 'The cybersecurity lab requires new equipment for the upcoming semester...',
      time: '4 hours ago',
      read: false,
      priority: 'medium',
      category: 'budget',
      full: 'The cybersecurity lab requires new equipment for the upcoming semester. We need to purchase new servers and security appliances totaling $25,000. Please review the attached budget proposal.'
    },
    {
      id: 3,
      sender: 'Dean Thompson',
      subject: 'Accreditation Review Meeting',
      preview: 'We need to schedule a meeting to discuss the upcoming accreditation review...',
      time: '1 day ago',
      read: true,
      priority: 'high',
      category: 'admin',
      full: 'We need to schedule a meeting to discuss the upcoming accreditation review. Please prepare the department performance metrics and faculty credentials documentation.'
    },
    {
      id: 4,
      sender: 'Dr. Emily Johnson',
      subject: 'Research Collaboration Opportunity',
      preview: 'I have been approached by industry partners for a potential research collaboration...',
      time: '2 days ago',
      read: true,
      priority: 'medium',
      category: 'research',
      full: 'I have been approached by industry partners for a potential research collaboration in data analytics. This could provide funding opportunities and practical experience for our graduate students.'
    },
    {
      id: 5,
      sender: 'Student Council',
      subject: 'Student Feedback on Course Scheduling',
      preview: 'Students have requested more flexible scheduling options for advanced courses...',
      time: '3 days ago',
      read: true,
      priority: 'low',
      category: 'student',
      full: 'Students have requested more flexible scheduling options for advanced courses. They suggest offering some courses in the evening to accommodate working students.'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'faculty': return Users;
      case 'budget': return Mail;
      case 'admin': return Star;
      case 'research': return Star;
      case 'student': return Users;
      default: return Mail;
    }
  };

  const filteredMessages = messages.filter(message => 
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HodLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Department communication and correspondence</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Send className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 high priority</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Faculty Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Admin Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Pending response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">Average response</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button
                    variant={activeTab === 'inbox' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTab('inbox')}
                  >
                    Inbox
                  </Button>
                  <Button
                    variant={activeTab === 'sent' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTab('sent')}
                  >
                    Sent
                  </Button>
                  <Button
                    variant={activeTab === 'starred' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTab('starred')}
                  >
                    Starred
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredMessages.map((message) => {
                  const CategoryIcon = getCategoryIcon(message.category);
                  return (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        message.read ? 'bg-white dark:bg-gray-800' : 'bg-blue-50 dark:bg-blue-900/20'
                      } hover:bg-gray-50 dark:hover:bg-gray-700`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt={message.sender} />
                            <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className={`font-medium ${!message.read ? 'font-bold' : ''} text-gray-900 dark:text-white`}>
                                {message.sender}
                              </h4>
                              <CategoryIcon className="h-4 w-4 text-gray-400" />
                              <Badge className={getPriorityColor(message.priority)}>
                                {message.priority}
                              </Badge>
                            </div>
                            <h5 className={`text-sm ${!message.read ? 'font-semibold' : ''} text-gray-900 dark:text-white mb-1`}>
                              {message.subject}
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                              {message.preview}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span className="text-xs text-gray-500">{message.time}</span>
                          {!message.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Send className="h-4 w-4 mr-2" />
                Send Announcement
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Faculty Broadcast
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Mark Important
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Archive className="h-4 w-4 mr-2" />
                Archive Selected
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </Button>
            </CardContent>
          </Card>
        </div>

        {selectedMessage && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{selectedMessage.subject}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600">From: {selectedMessage.sender}</span>
                    <Badge className={getPriorityColor(selectedMessage.priority)}>
                      {selectedMessage.priority}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-900 dark:text-white">{selectedMessage.full}</p>
                <div className="flex gap-2 pt-4 border-t">
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    <Send className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline">
                    Forward
                  </Button>
                  <Button variant="outline">
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </HodLayout>
  );
};

export default HodMessages;
