
import React from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Database as DatabaseIcon, HardDrive, Download, Upload, RefreshCw } from 'lucide-react';

const Database: React.FC = () => {
  const backups = [
    { id: 1, name: 'Full Backup - 2024-01-15', size: '2.4 GB', date: '2024-01-15 03:00 AM', status: 'Completed' },
    { id: 2, name: 'Incremental Backup - 2024-01-14', size: '156 MB', date: '2024-01-14 03:00 AM', status: 'Completed' },
    { id: 3, name: 'Full Backup - 2024-01-13', size: '2.3 GB', date: '2024-01-13 03:00 AM', status: 'Completed' },
    { id: 4, name: 'Incremental Backup - 2024-01-12', size: '203 MB', date: '2024-01-12 03:00 AM', status: 'Failed' },
  ];

  const tables = [
    { name: 'users', records: 2847, size: '45.2 MB', lastUpdated: '2 minutes ago' },
    { name: 'courses', records: 156, size: '12.8 MB', lastUpdated: '1 hour ago' },
    { name: 'enrollments', records: 8945, size: '78.3 MB', lastUpdated: '5 minutes ago' },
    { name: 'assignments', records: 1234, size: '23.1 MB', lastUpdated: '30 minutes ago' },
    { name: 'grades', records: 15678, size: '34.5 MB', lastUpdated: '15 minutes ago' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Database Management</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor and manage database operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Database Size</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8 GB</div>
              <p className="text-xs text-muted-foreground">
                +120 MB this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
              <DatabaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Peak: 45 connections
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15h ago</div>
              <p className="text-xs text-muted-foreground">
                Next: Tonight 3:00 AM
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Database Tables</CardTitle>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tables.map((table, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{table.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {table.records.toLocaleString()} records • {table.size}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Updated {table.lastUpdated}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Backup History</CardTitle>
              <Button className="bg-red-600 hover:bg-red-700" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Create Backup
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {backups.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{backup.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {backup.size} • {backup.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={backup.status === 'Completed' ? 'default' : 'destructive'}>
                        {backup.status}
                      </Badge>
                      {backup.status === 'Completed' && (
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Database Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <DatabaseIcon className="h-6 w-6" />
                <span>Optimize Tables</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <RefreshCw className="h-6 w-6" />
                <span>Refresh Statistics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <HardDrive className="h-6 w-6" />
                <span>Check Integrity</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Database;
