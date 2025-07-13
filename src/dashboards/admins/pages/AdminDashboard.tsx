import React from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { AdminStats } from '../components/AdminStats';
import { UserManagement } from '../components/UserManagement';
import { SystemSettings } from '../components/SystemSettings';
import { RecentActivity } from '../components/RecentActivity';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Administrative Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
            Manage users, courses, and system settings
          </p>
        </div>

        <AdminStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <UserManagement />
          <SystemSettings />
        </div>

        <RecentActivity />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;