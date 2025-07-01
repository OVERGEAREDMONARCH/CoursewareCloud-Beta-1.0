
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Settings, Database, Shield, Mail } from 'lucide-react';

export const SystemSettings: React.FC = () => {
  const settingsSections = [
    {
      title: 'General Settings',
      description: 'Configure system-wide settings',
      icon: Settings,
      color: 'bg-blue-500'
    },
    {
      title: 'Database Management',
      description: 'Manage database and backups',
      icon: Database,
      color: 'bg-green-500'
    },
    {
      title: 'Security Settings',
      description: 'Configure security policies',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      title: 'Email Configuration',
      description: 'Set up email notifications',
      icon: Mail,
      color: 'bg-purple-500'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {settingsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start p-4 h-auto"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">{section.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{section.description}</p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
