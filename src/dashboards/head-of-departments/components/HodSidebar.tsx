
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
  Building
} from 'lucide-react';

interface HodSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/head-of-departments' },
  { icon: Users, label: 'Faculty Management', path: '/head-of-departments/faculty' },
  { icon: Book, label: 'Course Oversight', path: '/head-of-departments/courses' },
  { icon: ClipboardList, label: 'Department Reports', path: '/head-of-departments/reports' },
  { icon: BarChart3, label: 'Analytics', path: '/head-of-departments/analytics' },
  { icon: Calendar, label: 'Schedule', path: '/head-of-departments/schedule' },
  { icon: MessageCircle, label: 'Messages', path: '/head-of-departments/messages' },
  { icon: Settings, label: 'Settings', path: '/head-of-departments/settings' },
];

export const HodSidebar: React.FC<HodSidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  const isExpanded = !collapsed || hovering;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-emerald-800 text-white transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } ${hovering && collapsed ? 'w-64' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-emerald-700">
        {isExpanded && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Building className="text-emerald-800" size={20} />
            </div>
            <span className="font-semibold text-lg">HOD Portal</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-emerald-700 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-nav-item group relative ${isActive ? 'active bg-emerald-600/50 border-l-4 border-l-white' : 'hover:bg-emerald-700'} flex items-center gap-3 px-4 py-3 text-white transition-all duration-200 rounded-lg mx-2`}
                  title={collapsed && !hovering ? item.label : ''}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {isExpanded && (
                    <span className="animate-fade-in">{item.label}</span>
                  )}
                  
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

      <div className="p-4 border-t border-emerald-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-800 text-sm font-semibold">DW</span>
          </div>
          {isExpanded && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">Dr. Wilson</p>
              <p className="text-xs text-emerald-300">Computer Science HOD</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
