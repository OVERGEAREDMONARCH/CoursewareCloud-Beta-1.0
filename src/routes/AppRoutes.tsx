import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { DashboardLayout } from '../layouts/DashboardLayout';
import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';

// Student Dashboard Pages
import Dashboard from '../dashboards/student/pages/Dashboard';
import Courses from '../dashboards/student/pages/Courses';
import Calendar from '../dashboards/student/pages/Calendar';
import Bookmarks from '../dashboards/student/pages/Bookmarks';
import Messages from '../dashboards/student/pages/Messages';
import Notifications from '../dashboards/student/pages/Notifications';
import Profile from '../dashboards/student/pages/Profile';
import Settings from '../dashboards/student/pages/Settings';

// Lecturer Dashboard Pages
import LecturerDashboard from '../dashboards/lecturers/pages/LecturerDashboard';
import LecturerCourses from '../dashboards/lecturers/pages/LecturerCourses';
import LecturerStudents from '../dashboards/lecturers/pages/LecturerStudents';
import LecturerAssignments from '../dashboards/lecturers/pages/LecturerAssignments';
import LecturerAnalytics from '../dashboards/lecturers/pages/LecturerAnalytics';
import LecturerSchedule from '../dashboards/lecturers/pages/LecturerSchedule';
import LecturerMessages from '../dashboards/lecturers/pages/LecturerMessages';
import LecturerSettings from '../dashboards/lecturers/pages/LecturerSettings';

// HOD Dashboard Pages
import HodDashboard from '../dashboards/head-of-departments/pages/HodDashboard';
import HodFaculty from '../dashboards/head-of-departments/pages/HodFaculty';
import HodCourses from '../dashboards/head-of-departments/pages/HodCourses';
import HodReports from '../dashboards/head-of-departments/pages/HodReports';
import HodAnalytics from '../dashboards/head-of-departments/pages/HodAnalytics';
import HodSchedule from '../dashboards/head-of-departments/pages/HodSchedule';
import HodMessages from '../dashboards/head-of-departments/pages/HodMessages';
import HodSettings from '../dashboards/head-of-departments/pages/HodSettings';

// Admin Dashboard Pages
import AdminDashboard from '../dashboards/admins/pages/AdminDashboard';
import UserManagement from '../dashboards/admins/pages/UserManagement';
import CourseManagement from '../dashboards/admins/pages/CourseManagement';
import HeadOfDepartment from '../dashboards/admins/pages/HeadOfDepartment';
import Analytics from '../dashboards/admins/pages/Analytics';
import Database from '../dashboards/admins/pages/Database';
import Security from '../dashboards/admins/pages/Security';
import NotificationSettings from '../dashboards/admins/pages/NotificationSettings';
import SystemSettings from '../dashboards/admins/pages/SystemSettings';

const AppRoutes = () => {
  const { user } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Student Dashboard Routes - Protected and wrapped in DashboardLayout */}
      <Route path="/student" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/courses" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Courses />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/calendar" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Calendar />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/bookmarks" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Bookmarks />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/messages" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Messages />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/notifications" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Notifications />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/profile" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/student/settings" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      {/* Lecturer Dashboard Routes - Protected */}
      <Route path="/lecturer" element={
        <ProtectedRoute>
          <LecturerDashboard />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/courses" element={
        <ProtectedRoute>
          <LecturerCourses />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/students" element={
        <ProtectedRoute>
          <LecturerStudents />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/assignments" element={
        <ProtectedRoute>
          <LecturerAssignments />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/analytics" element={
        <ProtectedRoute>
          <LecturerAnalytics />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/schedule" element={
        <ProtectedRoute>
          <LecturerSchedule />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/messages" element={
        <ProtectedRoute>
          <LecturerMessages />
        </ProtectedRoute>
      } />
      <Route path="/lecturer/settings" element={
        <ProtectedRoute>
          <LecturerSettings />
        </ProtectedRoute>
      } />
      
      {/* HOD Dashboard Routes - Protected */}
      <Route path="/head-of-departments" element={
        <ProtectedRoute>
          <HodDashboard />
        </ProtectedRoute>
      } />
      <Route path="/hod/faculty" element={
        <ProtectedRoute>
          <HodFaculty />
        </ProtectedRoute>
      } />
      <Route path="/hod/courses" element={
        <ProtectedRoute>
          <HodCourses />
        </ProtectedRoute>
      } />
      <Route path="/hod/reports" element={
        <ProtectedRoute>
          <HodReports />
        </ProtectedRoute>
      } />
      <Route path="/hod/analytics" element={
        <ProtectedRoute>
          <HodAnalytics />
        </ProtectedRoute>
      } />
      <Route path="/hod/schedule" element={
        <ProtectedRoute>
          <HodSchedule />
        </ProtectedRoute>
      } />
      <Route path="/hod/messages" element={
        <ProtectedRoute>
          <HodMessages />
        </ProtectedRoute>
      } />
      <Route path="/hod/settings" element={
        <ProtectedRoute>
          <HodSettings />
        </ProtectedRoute>
      } />

      {/* Admin Dashboard */}
      <Route path="/admins" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/users" element={
        <ProtectedRoute>
          <UserManagement />
        </ProtectedRoute>
      } />
      <Route path="/admin/courses" element={
        <ProtectedRoute>
          <CourseManagement />
        </ProtectedRoute>
      } />
      <Route path="/admin/hod" element={
        <ProtectedRoute>
          <HeadOfDepartment />
        </ProtectedRoute>
      } />
      <Route path="/admin/analytics" element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      } />
      <Route path="/admin/database" element={
        <ProtectedRoute>
          <Database />
        </ProtectedRoute>
      } />
      <Route path="/admin/security" element={
        <ProtectedRoute>
          <Security />
        </ProtectedRoute>
      } />
      <Route path="/admin/notifications" element={
        <ProtectedRoute>
          <NotificationSettings />
        </ProtectedRoute>
      } />
      <Route path="/admin/settings" element={
        <ProtectedRoute>
          <SystemSettings />
        </ProtectedRoute>
      } />

      {/* Landing page route */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Redirect dashboard route to student dashboard if logged in, otherwise to login */}
      <Route path="/dashboard" element={
        user ? <Navigate to="/student" replace /> : <Navigate to="/login" replace />
      } />
      
      {/* Catch all route - 404 */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
