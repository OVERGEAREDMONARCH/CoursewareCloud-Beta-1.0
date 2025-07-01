
import React, { useState } from 'react';
import { HodSidebar } from './HodSidebar';
import { HodHeader } from './HodHeader';

interface HodLayoutProps {
  children: React.ReactNode;
}

export const HodLayout: React.FC<HodLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 flex">
      <HodSidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <HodHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
