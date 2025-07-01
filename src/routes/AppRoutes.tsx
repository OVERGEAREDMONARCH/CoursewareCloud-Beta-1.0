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
// ...import other lecturer pages as needed...

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
      {/* Add more lecturer routes here if needed, e.g.:
      <Route path="/lecturer/other" element={
        <ProtectedRoute>
          <OtherLecturerPage />
        </ProtectedRoute>
      } />
      */}

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
