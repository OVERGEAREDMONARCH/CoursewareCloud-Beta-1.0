import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { User, Calendar, Book, Edit2, Save, X } from 'lucide-react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
  major: string;
  year: string;
  gpa: string;
  bio: string;
  enrollmentDate: string;
  expectedGraduation: string;
}

const mockProfile: UserProfile = {
  firstName: 'John',
  lastName: 'Student',
  email: 'john.student@university.edu',
  studentId: 'CS2024001',
  major: 'Computer Science',
  year: 'Junior',
  gpa: '3.85',
  bio: 'Passionate computer science student with interests in web development, machine learning, and software engineering. Currently working on various projects and looking forward to internship opportunities.',
  enrollmentDate: '2022-08-15',
  expectedGraduation: '2025-05-15'
};

const mockAchievements = [
  { id: '1', title: 'Dean\'s List', description: 'Fall 2023 Semester', date: '2023-12-15' },
  { id: '2', title: 'Perfect Attendance', description: 'Database Systems Course', date: '2023-12-01' },
  { id: '3', title: 'Project Excellence', description: 'React Development Project', date: '2023-11-20' }
];

const mockCourseHistory = [
  { id: '1', name: 'Advanced React Patterns', code: 'CS-485', semester: 'Spring 2024', grade: 'A-', credits: 3 },
  { id: '2', name: 'Database Systems', code: 'CS-440', semester: 'Fall 2023', grade: 'A', credits: 4 },
  { id: '3', name: 'Data Structures', code: 'CS-220', semester: 'Spring 2023', grade: 'B+', credits: 3 },
  { id: '4', name: 'Web Development', code: 'CS-320', semester: 'Fall 2022', grade: 'A', credits: 3 }
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockProfile);
  const [editedProfile, setEditedProfile] = useState(mockProfile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const calculateGPA = () => {
    const gradePoints: { [key: string]: number } = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7 };
    const totalPoints = mockCourseHistory.reduce((sum, course) => sum + (gradePoints[course.grade] || 0) * course.credits, 0);
    const totalCredits = mockCourseHistory.reduce((sum, course) => sum + course.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
              Manage your personal information and academic details
            </p>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="gap-2 w-full sm:w-auto">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button onClick={handleCancel} variant="outline" className="gap-2 w-full sm:w-auto">
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <Tabs defaultValue="personal" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="personal" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Personal</TabsTrigger>
            <TabsTrigger value="academic" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Academic</TabsTrigger>
            <TabsTrigger value="courses" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Courses</TabsTrigger>
            <TabsTrigger value="achievements" className="text-xs sm:text-sm px-2 sm:px-3 py-2">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  Personal Information
                </CardTitle>
                <CardDescription className="text-sm">
                  Your basic profile information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold">{profile.firstName} {profile.lastName}</h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">{profile.email}</p>
                    <Badge variant="secondary" className="mt-2">{profile.major} • {profile.year}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={isEditing ? editedProfile.firstName : profile.firstName}
                      onChange={(e) => setEditedProfile({...editedProfile, firstName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={isEditing ? editedProfile.lastName : profile.lastName}
                      onChange={(e) => setEditedProfile({...editedProfile, lastName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={isEditing ? editedProfile.email : profile.email}
                      onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      value={profile.studentId}
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={isEditing ? editedProfile.bio : profile.bio}
                    onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Book className="w-4 h-4 sm:w-5 sm:h-5" />
                    Academic Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <div>
                    <Label htmlFor="major">Major</Label>
                    <Input
                      id="major"
                      value={isEditing ? editedProfile.major : profile.major}
                      onChange={(e) => setEditedProfile({...editedProfile, major: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="year">Academic Year</Label>
                    <Input
                      id="year"
                      value={isEditing ? editedProfile.year : profile.year}
                      onChange={(e) => setEditedProfile({...editedProfile, year: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gpa">Current GPA</Label>
                    <Input
                      id="gpa"
                      value={calculateGPA()}
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <div>
                    <Label>Enrollment Date</Label>
                    <Input
                      value={new Date(profile.enrollmentDate).toLocaleDateString()}
                      disabled
                    />
                  </div>
                  <div>
                    <Label>Expected Graduation</Label>
                    <Input
                      value={new Date(profile.expectedGraduation).toLocaleDateString()}
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Course History</CardTitle>
                <CardDescription className="text-sm">
                  Complete record of your completed courses and grades
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {mockCourseHistory.map(course => (
                    <div key={course.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base">{course.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {course.code} • {course.semester} • {course.credits} credits
                        </p>
                      </div>
                      <Badge 
                        className={`${
                          course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        } w-fit`}
                      >
                        {course.grade}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Achievements & Awards</CardTitle>
                <CardDescription className="text-sm">
                  Recognition and accomplishments during your academic journey
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {mockAchievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 dark:text-yellow-400 text-lg sm:text-xl">🏆</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base">{achievement.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default Profile;
