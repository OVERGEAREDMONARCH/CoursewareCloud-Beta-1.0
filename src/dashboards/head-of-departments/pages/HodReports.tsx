import { useState } from 'react';
import { HodLayout } from '../components/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { FileText, Download, Calendar, TrendingUp, Users, Book, Clock } from 'lucide-react';

const HodReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const reports = [
    {
      id: 1,
      title: 'Faculty Performance Report',
      description: 'Comprehensive evaluation of faculty teaching effectiveness and research output',
      type: 'faculty',
      period: 'Fall 2024',
      status: 'completed',
      generatedDate: '2024-01-15',
      size: '2.4 MB',
      pages: 45
    },
    {
      id: 2,
      title: 'Course Enrollment Analysis',
      description: 'Student enrollment trends and course popularity metrics',
      type: 'enrollment',
      period: 'Fall 2024',
      status: 'completed',
      generatedDate: '2024-01-10',
      size: '1.8 MB',
      pages: 28
    },
    {
      id: 3,
      title: 'Budget Utilization Report',
      description: 'Department budget allocation and expenditure analysis',
      type: 'budget',
      period: 'FY 2024',
      status: 'completed',
      generatedDate: '2024-01-08',
      size: '3.2 MB',
      pages: 67
    },
    {
      id: 4,
      title: 'Student Outcomes Assessment',
      description: 'Graduate employment rates and academic achievement metrics',
      type: 'outcomes',
      period: 'Fall 2024',
      status: 'in-progress',
      generatedDate: null,
      size: null,
      pages: null
    },
    {
      id: 5,
      title: 'Research Activity Summary',
      description: 'Faculty research projects, publications, and grant acquisitions',
      type: 'research',
      period: 'Fall 2024',
      status: 'scheduled',
      generatedDate: null,
      size: null,
      pages: null
    }
  ];

  const quickStats = [
    {
      title: 'Reports Generated',
      value: '24',
      change: '+8 this month',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Faculty Evaluated',
      value: '24',
      change: '100% completion',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Courses Analyzed',
      value: '18',
      change: 'All active courses',
      icon: Book,
      color: 'text-purple-600'
    },
    {
      title: 'Avg. Response Time',
      value: '3.2 days',
      change: '-0.5 days improved',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'faculty': return Users;
      case 'enrollment': return TrendingUp;
      case 'budget': return FileText;
      case 'outcomes': return Book;
      case 'research': return FileText;
      default: return FileText;
    }
  };

  return (
    <HodLayout>
      <div className="space-y-2 sm:space-y-3 animate-fade-in px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Department Reports</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Generate and manage department analytics and reports</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-sm">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-3 w-3 sm:h-4 sm:w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <CardTitle className="text-sm sm:text-base">Report Library</CardTitle>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="current">Current Period</option>
                  <option value="previous">Previous Period</option>
                  <option value="all">All Periods</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="p-3 sm:p-6">
              <div className="space-y-2 sm:space-y-3">
                {reports.map((report) => {
                  const TypeIcon = getTypeIcon(report.type);
                  return (
                    <div key={report.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-white dark:bg-gray-600 rounded-lg">
                          <TypeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{report.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{report.description}</p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                            <Badge className={getStatusColor(report.status)} variant="secondary">
                              {report.status.replace('-', ' ')}
                            </Badge>
                            <span className="text-xs text-gray-500">{report.period}</span>
                            {report.generatedDate && (
                              <span className="text-xs text-gray-500">
                                Generated: {new Date(report.generatedDate).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {report.status === 'completed' && (
                          <>
                            <div className="text-left sm:text-right text-xs text-gray-500">
                              <p>{report.size}</p>
                              <p>{report.pages} pages</p>
                            </div>
                            <Button variant="outline" size="sm" className="text-xs">
                              <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              Download
                            </Button>
                          </>
                        )}
                        {report.status === 'in-progress' && (
                          <Button variant="outline" size="sm" disabled className="text-xs">
                            Processing...
                          </Button>
                        )}
                        {report.status === 'scheduled' && (
                          <Button variant="outline" size="sm" className="text-xs">
                            View Schedule
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Enrollment Report
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Faculty Assessment
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <Book className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Course Evaluation
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Budget Analysis
              </Button>
              <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Schedule Report
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">Upcoming Report Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg gap-2">
                <div className="min-w-0">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Annual Faculty Review</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Due: January 31, 2024</p>
                </div>
                <Badge variant="secondary" className="text-xs">7 days left</Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg gap-2">
                <div className="min-w-0">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Semester Budget Report</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Due: February 15, 2024</p>
                </div>
                <Badge variant="secondary" className="text-xs">21 days left</Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg gap-2">
                <div className="min-w-0">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Accreditation Report</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Due: March 1, 2024</p>
                </div>
                <Badge variant="secondary" className="text-xs">35 days left</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </HodLayout>
  );
};

export default HodReports;