import { useState } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Search, Book, Calendar, Settings, Bookmark } from 'lucide-react';

interface BookmarkItem {
  id: string;
  title: string;
  type: 'course' | 'assignment' | 'resource' | 'calendar';
  url: string;
  dateAdded: string;
  category: string;
}

const mockBookmarks: BookmarkItem[] = [
  {
    id: '1',
    title: 'Advanced React Patterns - Week 5 Materials',
    type: 'course',
    url: '/courses/react-advanced/week5',
    dateAdded: '2024-01-15',
    category: 'Computer Science'
  },
  {
    id: '2',
    title: 'Database Design Assignment - ER Diagrams',
    type: 'assignment',
    url: '/assignments/db-design-er',
    dateAdded: '2024-01-12',
    category: 'Database Systems'
  },
  {
    id: '3',
    title: 'Machine Learning Study Guide',
    type: 'resource',
    url: '/resources/ml-study-guide',
    dateAdded: '2024-01-10',
    category: 'AI/ML'
  },
  {
    id: '4',
    title: 'Final Exam Schedule',
    type: 'calendar',
    url: '/calendar/finals',
    dateAdded: '2024-01-08',
    category: 'Academics'
  }
];

const Bookmarks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBookmarks = mockBookmarks.filter(bookmark => {
    const matchesSearch = bookmark.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bookmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(mockBookmarks.map(b => b.category)))];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <Book className="w-4 h-4" />;
      case 'assignment': return <Settings className="w-4 h-4" />;
      case 'resource': return <Bookmark className="w-4 h-4" />;
      case 'calendar': return <Calendar className="w-4 h-4" />;
      default: return <Bookmark className="w-4 h-4" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'assignment': return 'bg-red-100 text-red-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'calendar': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="px-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Bookmarks</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
            Your saved courses, assignments, and resources
          </p>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-3 sm:p-6">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search bookmarks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize h-10 px-4 text-sm font-medium"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookmarks List */}
        <div className="grid gap-3 sm:gap-4">
          {filteredBookmarks.map(bookmark => (
            <Card key={bookmark.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                      {getTypeIcon(bookmark.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base leading-tight">
                        {bookmark.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <Badge className={`${getTypeBadgeColor(bookmark.type)} w-fit text-xs`}>
                          {bookmark.type}
                        </Badge>
                        <span className="truncate">{bookmark.category}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-xs">Added {new Date(bookmark.dateAdded).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full sm:w-auto h-10 font-medium"
                  >
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBookmarks.length === 0 && (
          <Card>
            <CardContent className="p-8 sm:p-12 text-center">
              <Bookmark className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No bookmarks found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'Start bookmarking courses, assignments, and resources to see them here.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
  );
};

export default Bookmarks;
