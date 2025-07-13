import { useState } from 'react';
import { LecturerLayout } from '../components/LecturerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Switch } from '../../../components/ui/switch';
import { User, Bell, Shield, Palette, Save } from 'lucide-react';

const LecturerSettings = () => {
  const [settings, setSettings] = useState({
    // Profile Settings
    firstName: 'Dr. Johnson',
    lastName: '',
    email: 'dr.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    department: 'Computer Science',
    office: 'Room 304, Building A',
    bio: 'Professor of Computer Science with 15 years of experience in software development and education.',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    courseUpdates: true,
    assignmentReminders: true,
    messageAlerts: true,
    weeklyReports: false,
    
    // Privacy Settings
    profileVisibility: true,
    showContactInfo: true,
    allowStudentMessages: true,
    
    // Display Settings
    darkMode: false,
    language: 'en',
    timezone: 'America/New_York'
  });

  const handleInputChange = (
    field: keyof typeof settings,
    value: string | boolean
  ) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Here you would typically send the settings to your backend
  };

  return (
    <LecturerLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Manage your account preferences and system settings</p>
          </div>
          <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Mobile: Single column, Desktop: Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <Input
                    value={settings.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <Input
                    value={settings.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <Input
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                  <Input
                    value={settings.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                  <Input
                    value={settings.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Office Location</label>
                  <Input
                    value={settings.office}
                    onChange={(e) => handleInputChange('office', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                  <textarea
                    value={settings.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-sm"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notification Settings */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Email Notifications</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</div>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Push Notifications</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Receive browser notifications</div>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleInputChange('pushNotifications', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Course Updates</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Notifications about course changes</div>
                  </div>
                  <Switch
                    checked={settings.courseUpdates}
                    onCheckedChange={(checked) => handleInputChange('courseUpdates', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Assignment Reminders</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Reminders for assignment deadlines</div>
                  </div>
                  <Switch
                    checked={settings.assignmentReminders}
                    onCheckedChange={(checked) => handleInputChange('assignmentReminders', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Message Alerts</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Alerts for new messages</div>
                  </div>
                  <Switch
                    checked={settings.messageAlerts}
                    onCheckedChange={(checked) => handleInputChange('messageAlerts', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Weekly Reports</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Weekly summary reports</div>
                  </div>
                  <Switch
                    checked={settings.weeklyReports}
                    onCheckedChange={(checked) => handleInputChange('weeklyReports', checked)}
                    className="flex-shrink-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Privacy & Display Settings */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Profile Visibility</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Make your profile visible to students</div>
                  </div>
                  <Switch
                    checked={settings.profileVisibility}
                    onCheckedChange={(checked) => handleInputChange('profileVisibility', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Show Contact Info</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Display contact information</div>
                  </div>
                  <Switch
                    checked={settings.showContactInfo}
                    onCheckedChange={(checked) => handleInputChange('showContactInfo', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Allow Student Messages</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Let students send you messages</div>
                  </div>
                  <Switch
                    checked={settings.allowStudentMessages}
                    onCheckedChange={(checked) => handleInputChange('allowStudentMessages', checked)}
                    className="flex-shrink-0"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Palette className="h-4 w-4 sm:h-5 sm:w-5" />
                  Display Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Dark Mode</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Use dark theme</div>
                  </div>
                  <Switch
                    checked={settings.darkMode}
                    onCheckedChange={(checked) => handleInputChange('darkMode', checked)}
                    className="flex-shrink-0"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Timezone</label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Chicago">Central Time</option>
                    <option value="America/Denver">Mountain Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LecturerLayout>
  );
};

export default LecturerSettings;