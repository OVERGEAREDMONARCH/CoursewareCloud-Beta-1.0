
import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Switch } from '../../../components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { User, Bell, Shield, Database, Mail, Phone, MapPin, Save, Upload } from 'lucide-react';

const HodSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    faculty: true,
    budget: true,
    meetings: true,
    reports: false
  });

  const [profile, setProfile] = useState({
    name: 'Dr. Wilson',
    email: 'wilson@university.edu',
    phone: '+1 (555) 123-4567',
    office: 'CS Building, Room 301',
    bio: 'Head of Computer Science Department with 15 years of experience in academic leadership and research.',
    officeHours: 'Monday-Friday, 2:00 PM - 4:00 PM'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'department', label: 'Department', icon: Database }
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  return (
    <HodLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your account and department preferences</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="mb-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => handleProfileChange('name', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => handleProfileChange('email', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => handleProfileChange('phone', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="office">Office Location</Label>
                      <div className="relative mt-1">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <Input
                          id="office"
                          value={profile.office}
                          onChange={(e) => handleProfileChange('office', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Biography</Label>
                    <textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-lg resize-none"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="officeHours">Office Hours</Label>
                    <Input
                      id="officeHours"
                      value={profile.officeHours}
                      onChange={(e) => handleProfileChange('officeHours', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'notifications' && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Push Notifications</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Receive push notifications in browser
                        </p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Faculty Updates</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Notifications about faculty activities
                        </p>
                      </div>
                      <Switch
                        checked={notifications.faculty}
                        onCheckedChange={(checked) => handleNotificationChange('faculty', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Budget Alerts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Important budget and financial updates
                        </p>
                      </div>
                      <Switch
                        checked={notifications.budget}
                        onCheckedChange={(checked) => handleNotificationChange('budget', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Meeting Reminders</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Reminders for scheduled meetings
                        </p>
                      </div>
                      <Switch
                        checked={notifications.meetings}
                        onCheckedChange={(checked) => handleNotificationChange('meetings', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Report Notifications</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Updates on report generation and completion
                        </p>
                      </div>
                      <Switch
                        checked={notifications.reports}
                        onCheckedChange={(checked) => handleNotificationChange('reports', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'security' && (
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Change Password</h4>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" className="mt-1" />
                      </div>
                      <Button variant="outline">Update Password</Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span>Last login: Today at 9:15 AM</span>
                        <span className="text-green-600">Current session</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Previous login: Yesterday at 5:30 PM</span>
                        <span className="text-gray-500">Chrome on Windows</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Login attempt: 3 days ago</span>
                        <span className="text-gray-500">Safari on macOS</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'department' && (
              <Card>
                <CardHeader>
                  <CardTitle>Department Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="dept-name">Department Name</Label>
                    <Input
                      id="dept-name"
                      value="Computer Science"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dept-code">Department Code</Label>
                    <Input
                      id="dept-code"
                      value="CS"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget-limit">Annual Budget Limit</Label>
                    <Input
                      id="budget-limit"
                      value="$2,500,000"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="max-faculty">Maximum Faculty Count</Label>
                    <Input
                      id="max-faculty"
                      value="30"
                      type="number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="semester-system">Semester System</Label>
                    <select
                      id="semester-system"
                      className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option>Fall/Spring/Summer</option>
                      <option>Quarterly</option>
                      <option>Trimester</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Department Permissions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Allow faculty to create new courses</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Require HOD approval for budget requests</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Enable student feedback collection</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Allow cross-department course enrollment</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </HodLayout>
  );
};

export default HodSettings;
