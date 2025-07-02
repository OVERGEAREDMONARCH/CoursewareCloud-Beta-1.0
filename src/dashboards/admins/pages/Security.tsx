
import React from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Shield, AlertTriangle, Lock, Key, Eye, UserX } from 'lucide-react';

const Security: React.FC = () => {
  const securityAlerts = [
    { id: 1, type: 'warning', message: 'Multiple failed login attempts detected from IP 192.168.1.100', time: '5 minutes ago' },
    { id: 2, type: 'info', message: 'Password policy updated successfully', time: '2 hours ago' },
    { id: 3, type: 'critical', message: 'Suspicious file upload attempt blocked', time: '1 day ago' },
  ];

  const activeTokens = [
    { id: 1, user: 'Dr. Sarah Wilson', device: 'Chrome on Windows', lastUsed: '2 minutes ago', location: 'New York, US' },
    { id: 2, user: 'Admin User', device: 'Safari on macOS', lastUsed: '1 hour ago', location: 'California, US' },
    { id: 3, user: 'John Smith', device: 'Firefox on Linux', lastUsed: '3 hours ago', location: 'London, UK' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Security Center</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor and manage system security</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <p className="text-xs text-muted-foreground">
                Excellent security
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Last 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Eye className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Across all users
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">2FA Enabled</CardTitle>
              <Key className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                Of all users
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      alert.type === 'critical' ? 'bg-red-100 text-red-600' :
                      alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">{alert.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.time}</p>
                    </div>
                    <Badge variant={alert.type === 'critical' ? 'destructive' : alert.type === 'warning' ? 'outline' : 'default'}>
                      {alert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Login Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeTokens.map((token) => (
                  <div key={token.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{token.user}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{token.device}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {token.location} • {token.lastUsed}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      Revoke
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Lock className="h-6 w-6" />
                <span>Password Policy</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Key className="h-6 w-6" />
                <span>Two-Factor Auth</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Shield className="h-6 w-6" />
                <span>Firewall Rules</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Eye className="h-6 w-6" />
                <span>Audit Logs</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <UserX className="h-6 w-6" />
                <span>Blocked IPs</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Security Scan</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Security;
