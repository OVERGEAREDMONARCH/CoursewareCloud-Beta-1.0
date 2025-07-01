
import React, { useState } from 'react';
import { LecturerSidebar } from './LecturerSidebar';
import { LecturerHeader } from './LecturerHeader';

interface LecturerLayoutProps {
  children: React.ReactNode;
}

export const LecturerLayout: React.FC<LecturerLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 flex">
      <LecturerSidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <LecturerHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
