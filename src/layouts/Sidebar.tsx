import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Book, 
  Calendar, 
  MessageCircle, 
  Bookmark, 
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/student' },
  { icon: Book, label: 'Courses', path: '/student/courses' },
  { icon: Calendar, label: 'Calendar', path: '/student/courses' },
  { icon: MessageCircle, label: 'Messages', path: '/student/messages' },
  { icon: Bookmark, label: 'Bookmarks', path: '/student/bookmarks' },
  { icon: Bell, label: 'Notifications', path: '/student/notifications' },
  { icon: User, label: 'Profile', path: '/student/profile' },
  { icon: Settings, label: 'Settings', path: '/student/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  const isExpanded = !collapsed || hovering;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-slate-800 text-white transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } ${hovering && collapsed ? 'w-64' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
        {isExpanded && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-semibold text-lg">Courseware Cloud</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-nav-item group relative ${isActive ? 'active' : ''}`}
                  title={collapsed && !hovering ? item.label : ''}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {isExpanded && (
                    <span className="animate-fade-in">{item.label}</span>
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {collapsed && !hovering && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JS</span>
          </div>
          {isExpanded && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">John Student</p>
              <p className="text-xs text-slate-400">student@university.edu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
