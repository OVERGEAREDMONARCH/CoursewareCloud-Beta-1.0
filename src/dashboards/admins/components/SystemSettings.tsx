
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
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
      <CardHeader className="p-3 sm:p-6">
        <CardTitle className="text-base sm:text-lg">System Settings</CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-2 sm:space-y-3">
          {settingsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start p-3 sm:p-4 h-auto"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{section.title}</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{section.description}</p>
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