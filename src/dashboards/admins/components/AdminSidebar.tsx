
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings, 
  BookOpen,
  BarChart3,
  Shield,
  Database,
  ChevronLeft,
  ChevronRight,
  Bell,
  GraduationCap
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/admins' },
  { icon: Users, label: 'User Management', path: '/admin/users' },
  { icon: BookOpen, label: 'Course Management', path: '/admin/courses' },
  { icon: GraduationCap, label: 'Head of Department', path: '/admin/hod' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { icon: Database, label: 'Database', path: '/admin/database' },
  { icon: Shield, label: 'Security', path: '/admin/security' },
  { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
  { icon: Settings, label: 'System Settings', path: '/admin/settings' },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  const isExpanded = !collapsed || hovering;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-red-800 text-white transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } ${hovering && collapsed ? 'w-64' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-red-700">
        {isExpanded && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Shield className="text-red-800" size={16} />
            </div>
            <span className="font-semibold text-lg">Admin Panel</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-red-700 rounded-lg transition-colors"
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
                  className={`flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 rounded-lg mx-2 group relative ${
                    isActive ? 'bg-red-50/20 border-l-4 border-l-red-400 text-white font-medium' : ''
                  }`}
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

      {/* Admin User Section */}
      <div className="p-4 border-t border-red-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-800 text-sm font-semibold">AD</span>
          </div>
          {isExpanded && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-red-200">admin@university.edu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
