
import React from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Badge } from '../../../components/ui/badge';
import { Settings, Server, Globe, Shield, Mail, Database } from 'lucide-react';

const SystemSettings: React.FC = () => {
  const systemInfo = [
    { label: 'System Version', value: '2.4.1', status: 'Latest' },
    { label: 'Database Version', value: 'PostgreSQL 14.2', status: 'Stable' },
    { label: 'Server Uptime', value: '45 days, 12 hours', status: 'Healthy' },
    { label: 'Storage Usage', value: '4.8 GB / 50 GB', status: 'Normal' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">System Settings</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Configure global system settings and preferences</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systemInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.value}</p>
                  </div>
                  <Badge variant={info.status === 'Latest' || info.status === 'Healthy' ? 'default' : 'outline'}>
                    {info.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="University Learning Portal" />
              </div>
              <div>
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input id="siteUrl" defaultValue="https://learning.university.edu" />
              </div>
              <div>
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input id="adminEmail" defaultValue="admin@university.edu" />
              </div>
              <div>
                <Label htmlFor="timezone">Default Timezone</Label>
                <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
              </div>
              <Button className="bg-red-600 hover:bg-red-700">Save General Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="smtpHost">SMTP Host</Label>
                <Input id="smtpHost" defaultValue="smtp.university.edu" />
              </div>
              <div>
                <Label htmlFor="smtpPort">SMTP Port</Label>
                <Input id="smtpPort" defaultValue="587" />
              </div>
              <div>
                <Label htmlFor="fromEmail">From Email</Label>
                <Input id="fromEmail" defaultValue="noreply@university.edu" />
              </div>
              <div>
                <Label htmlFor="fromName">From Name</Label>
                <Input id="fromName" defaultValue="University Learning Portal" />
              </div>
              <Button className="bg-red-600 hover:bg-red-700">Save Email Settings</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security & Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input id="sessionTimeout" defaultValue="60" type="number" />
                </div>
                <div>
                  <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                  <Input id="maxLoginAttempts" defaultValue="5" type="number" />
                </div>
                <div>
                  <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
                  <Input id="passwordMinLength" defaultValue="8" type="number" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="backupFrequency">Backup Frequency (hours)</Label>
                  <Input id="backupFrequency" defaultValue="24" type="number" />
                </div>
                <div>
                  <Label htmlFor="logRetention">Log Retention (days)</Label>
                  <Input id="logRetention" defaultValue="90" type="number" />
                </div>
                <div>
                  <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                    <option value="disabled">Disabled</option>
                    <option value="enabled">Enabled</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-red-600 hover:bg-red-700">Save Security Settings</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Database className="h-6 w-6" />
                <span>Database Backup</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Settings className="h-6 w-6" />
                <span>Clear Cache</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Server className="h-6 w-6" />
                <span>System Logs</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Globe className="h-6 w-6" />
                <span>Check Updates</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Shield className="h-6 w-6" />
                <span>Security Scan</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Mail className="h-6 w-6" />
                <span>Test Email</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SystemSettings;
