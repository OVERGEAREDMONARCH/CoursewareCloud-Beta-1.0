import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Switch } from '../../../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Separator } from '../../../components/ui/separator';
import { 
  Bell, 
  Shield, 
  Palette, 
  Monitor, 
  Mail, 
  Smartphone,
  Globe,
  Eye,
  Save
} from 'lucide-react';

interface SettingsState {
  // Notifications
  emailNotifications: boolean;
  pushNotifications: boolean;
  assignmentReminders: boolean;
  gradeNotifications: boolean;
  courseUpdates: boolean;
  
  // Preferences
  theme: string;
  language: string;
  timezone: string;
  dateFormat: string;
  
  // Privacy
  profileVisibility: string;
  showEmail: boolean;
  showOnlineStatus: boolean;
  
  // Account
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Settings = () => {
  const [settings, setSettings] = useState<SettingsState>({
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    assignmentReminders: true,
    gradeNotifications: true,
    courseUpdates: false,
    
    // Preferences
    theme: 'system',
    language: 'english',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    
    // Privacy
    profileVisibility: 'university',
    showEmail: false,
    showOnlineStatus: true,
    
    // Account
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [hasChanges, setHasChanges] = useState(false);

  const updateSetting = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving settings:', settings);
    setHasChanges(false);
  };

  return (
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 px-1">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
              Manage your account preferences and privacy settings
            </p>
          </div>
          {hasChanges && (
            <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          )}
        </div>

        <Tabs defaultValue="notifications" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Choose how you want to be notified about important updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Push Notifications
                      </Label>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Receive push notifications in your browser
                      </p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium">Notification Types</h4>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Assignment Reminders</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Get reminded about upcoming assignment deadlines
                        </p>
                      </div>
                      <Switch
                        checked={settings.assignmentReminders}
                        onCheckedChange={(checked) => updateSetting('assignmentReminders', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Grade Notifications</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Be notified when new grades are posted
                        </p>
                      </div>
                      <Switch
                        checked={settings.gradeNotifications}
                        onCheckedChange={(checked) => updateSetting('gradeNotifications', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Course Updates</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Receive updates about course materials and announcements
                        </p>
                      </div>
                      <Switch
                        checked={settings.courseUpdates}
                        onCheckedChange={(checked) => updateSetting('courseUpdates', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Appearance & Preferences
                </CardTitle>
                <CardDescription>
                  Customize your dashboard experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      Theme
                    </Label>
                    <Select value={settings.theme} onValueChange={(value) => updateSetting('theme', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Language
                    </Label>
                    <Select value={settings.language} onValueChange={(value) => updateSetting('language', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Select value={settings.timezone} onValueChange={(value) => updateSetting('timezone', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time</SelectItem>
                        <SelectItem value="America/Chicago">Central Time</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Date Format</Label>
                    <Select value={settings.dateFormat} onValueChange={(value) => updateSetting('dateFormat', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Privacy Settings
                </CardTitle>
                <CardDescription>
                  Control who can see your information and activity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Profile Visibility</Label>
                    <Select value={settings.profileVisibility} onValueChange={(value) => updateSetting('profileVisibility', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="university">University Only</SelectItem>
                        <SelectItem value="classmates">Classmates Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Choose who can view your profile information
                    </p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Email Address</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Allow others to see your email address
                      </p>
                    </div>
                    <Switch
                      checked={settings.showEmail}
                      onCheckedChange={(checked) => updateSetting('showEmail', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Online Status</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Let others know when you're online
                      </p>
                    </div>
                    <Switch
                      checked={settings.showOnlineStatus}
                      onCheckedChange={(checked) => updateSetting('showOnlineStatus', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Account Security
                </CardTitle>
                <CardDescription>
                  Manage your password and account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={settings.currentPassword}
                      onChange={(e) => updateSetting('currentPassword', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={settings.newPassword}
                      onChange={(e) => updateSetting('newPassword', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={settings.confirmPassword}
                      onChange={(e) => updateSetting('confirmPassword', e.target.value)}
                    />
                  </div>

                  <Button className="w-full md:w-auto">
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-red-600 dark:text-red-400">Danger Zone</h4>
                  <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950">
                    <h5 className="font-medium mb-2">Delete Account</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default Settings;
