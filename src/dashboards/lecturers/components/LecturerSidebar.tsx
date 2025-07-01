
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Book, 
  Users, 
  ClipboardList, 
  BarChart3,
  Calendar, 
  MessageCircle, 
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

interface LecturerSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/lecturer' },
  { icon: Book, label: 'My Courses', path: '/lecturer/courses' },
  { icon: Users, label: 'Students', path: '/lecturer/students' },
  { icon: ClipboardList, label: 'Assignments', path: '/lecturer/assignments' },
  { icon: BarChart3, label: 'Analytics', path: '/lecturer/analytics' },
  { icon: Calendar, label: 'Schedule', path: '/lecturer/schedule' },
  { icon: MessageCircle, label: 'Messages', path: '/lecturer/messages' },
  { icon: Settings, label: 'Settings', path: '/lecturer/settings' },
];

export const LecturerSidebar: React.FC<LecturerSidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  const isExpanded = !collapsed || hovering;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-purple-800 text-white transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } ${hovering && collapsed ? 'w-64' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-purple-700">
        {isExpanded && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="text-purple-800" size={20} />
            </div>
            <span className="font-semibold text-lg">Lecturer Portal</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-purple-700 rounded-lg transition-colors"
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
                  className={`sidebar-nav-item group relative ${isActive ? 'active bg-purple-600/50 border-l-4 border-l-white' : 'hover:bg-purple-700'} flex items-center gap-3 px-4 py-3 text-white transition-all duration-200 rounded-lg mx-2`}
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
      <div className="p-4 border-t border-purple-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-purple-800 text-sm font-semibold">DJ</span>
          </div>
          {isExpanded && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">Dr. Johnson</p>
              <p className="text-xs text-purple-300">Computer Science</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
