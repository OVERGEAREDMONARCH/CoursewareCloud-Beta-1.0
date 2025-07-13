import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      lastMessage: 'Great work on your React project! I have some feedback...',
      timestamp: '2h ago',
      unread: 2,
      avatar: 'SJ',
      online: true
    },
    {
      id: 2,
      name: 'Study Group - ML Basics',
      lastMessage: 'Meeting tomorrow at 2 PM in the library',
      timestamp: '4h ago',
      unread: 0,
      avatar: 'SG',
      online: false
    },
    {
      id: 3,
      name: 'Prof. Michael Chen',
      lastMessage: 'The assignment deadline has been extended to next Friday',
      timestamp: '1d ago',
      unread: 1,
      avatar: 'MC',
      online: false
    },
    {
      id: 4,
      name: 'Course Support',
      lastMessage: 'How can we help you today?',
      timestamp: '2d ago',
      unread: 0,
      avatar: 'CS',
      online: true
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      content: 'Hi John! I\'ve reviewed your React component library project. Overall, excellent work!',
      timestamp: '2:30 PM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you! I really enjoyed working on it. Are there any areas I should focus on improving?',
      timestamp: '2:35 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Johnson',
      content: 'Your component structure is solid, but I\'d suggest adding more comprehensive testing and better TypeScript types.',
      timestamp: '2:40 PM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Dr. Sarah Johnson',
      content: 'Also, consider implementing accessibility features - that would really set your project apart.',
      timestamp: '2:41 PM',
      isOwn: false
    },
    {
      id: 5,
      sender: 'You',
      content: 'That makes sense. I\'ll work on those improvements. Should I resubmit or is this for future reference?',
      timestamp: '2:45 PM',
      isOwn: true
    },
  ];

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-fade-in">
        {/* Conversations List */}
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 flex flex-col max-h-64 lg:max-h-none">
          {/* Search Header */}
          <div className="p-3 lg:p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-3 lg:py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                className={`p-3 lg:p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  selectedConversation === index ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedConversation(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {conversation.avatar}
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-white truncate text-sm">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {conversation.timestamp}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-2 flex-shrink-0">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Chat Header */}
          <div className="p-3 lg:p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {conversations[selectedConversation].avatar}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">
                    {conversations[selectedConversation].name}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {conversations[selectedConversation].online ? 'Online' : 'Last seen 2h ago'}
                  </p>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="h-8 w-8 lg:h-10 lg:w-10 p-0">
                <MoreVertical size={16} />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 lg:p-4 space-y-3 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm lg:max-w-md px-3 py-2 rounded-lg ${
                    message.isOwn
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-3 lg:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
            <div className="flex items-end gap-2">
              <Button variant="outline" size="sm" className="h-10 w-10 p-0 flex-shrink-0">
                <Paperclip size={16} />
              </Button>
              
              <div className="flex-1">
                <textarea
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-h-[44px] max-h-32"
                  rows={1}
                />
              </div>
              
              <Button className="bg-blue-500 hover:bg-blue-600 text-white h-10 w-10 p-0 flex-shrink-0">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Messages;
