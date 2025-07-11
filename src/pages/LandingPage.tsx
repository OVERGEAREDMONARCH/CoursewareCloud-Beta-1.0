import { useState, useEffect } from 'react';
import { RiCloudLine, RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine, 
         RiStarLine, RiStarFill, RiStarHalfFill, RiAwardLine, RiLoginBoxLine, RiUserAddLine, 
         RiFolder2Line, RiFileTextLine, RiSlideshowLine, RiFileExcelLine, 
         RiFileVideoLine, RiUploadLine, RiUploadCloudLine, RiShieldUserLine, 
         RiRefreshLine, RiSearchLine, RiCollageLine, RiDeviceLine, 
         RiCheckLine, RiUser3Line, RiUserStarLine, RiUserSharedLine, 
         RiArrowDownSLine, RiCustomerServiceLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setMobileMenuOpen(false);
      document.body.classList.remove('overflow-hidden');
      
      // Scroll to target
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const faqs = [
    {
      question: "How does Courseware Cloud differ from general cloud storage?",
      answer: "Unlike general cloud storage, Courseware Cloud is specifically designed for academic environments. It features course-based organization, role-based access control, academic-specific file handling, and integration with educational systems. Our platform understands the unique needs of students, lecturers, and course representatives."
    },
    {
      question: "Is there a limit to file uploads?",
      answer: "Individual file uploads are limited to 2GB, which covers most academic materials including high-resolution videos. For institutional accounts, we offer custom storage solutions with higher limits. All common academic file formats are supported, including PDFs, PowerPoint, Word, Excel, images, and video files."
    },
    {
      question: "How does access control work?",
      answer: "Access is controlled through a sophisticated role-based system. Lecturers can upload and manage materials for their courses, students can view/download materials for courses they're enrolled in, and course representatives have additional privileges to share supplementary materials. Institutional administrators have oversight of all content."
    },
    {
      question: "Can institutions integrate with existing systems?",
      answer: "Yes, we offer API access and support integration with common Learning Management Systems (LMS), Student Information Systems (SIS), and authentication providers. Our enterprise team works with institutions to ensure smooth integration with existing infrastructure."
    }
  ];

  const features = [
    {
      icon: <RiUploadCloudLine className="text-2xl" />,
      title: "Easy Upload",
      description: "Drag and drop or browse files to upload. Supports all common document, presentation, and media formats."
    },
    {
      icon: <RiShieldUserLine className="text-2xl" />,
      title: "Role-Based Access",
      description: "Granular permissions ensure students, lecturers, and course reps have appropriate access levels."
    },
    {
      icon: <RiRefreshLine className="text-2xl" />,
      title: "Real-Time Updates",
      description: "Get instant notifications when new materials are added or existing ones are updated."
    },
    {
      icon: <RiSearchLine className="text-2xl" />,
      title: "Advanced Search",
      description: "Quickly find resources by course, date, file type, or keywords with our powerful search engine."
    },
    {
      icon: <RiCollageLine className="text-2xl" />,
      title: "Course Organization",
      description: "Intuitive folder structure keeps materials organized by semester, course, and resource type."
    },
    {
      icon: <RiDeviceLine className="text-2xl" />,
      title: "Cross-Platform",
      description: "Access your resources from any device - desktop, tablet, or mobile - with our responsive interface."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      quote: "Courseware Cloud has completely transformed how I access my course materials. No more searching through emails or multiple platforms - everything is in one organized place.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Physics Lecturer",
      quote: "As a lecturer, I appreciate how easy it is to organize and update materials. The version control feature ensures students always have access to the latest resources.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Course Representative",
      quote: "Distributing supplementary materials to my classmates has never been easier. The notification system ensures everyone stays updated with new resources.",
      rating: 4.5
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <RiCloudLine className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Courseware Cloud</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
                <RiStarLine className="mr-2" /> Features
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
                <RiAwardLine className="mr-2" /> Benefits
              </button>
              <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
                <RiLoginBoxLine className="mr-2" /> Login
              </Link>
              <Link to="/login?mode=signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center justify-center">
                <RiUserAddLine className="mr-2" /> Sign Up
              </Link>
              
              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {darkMode ? <RiSunLine className="text-xl" /> : <RiMoonLine className="text-xl" />}
              </button>
            </div>
              {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all"
              >
                <RiMenuLine size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <RiCloudLine className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Courseware Cloud</span>
            </div>
            <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <RiCloseLine className="text-2xl" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
              <RiStarLine className="mr-2" /> Features
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
              <RiAwardLine className="mr-2" /> Benefits
            </button>
            <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
              <RiLoginBoxLine className="mr-2" /> Login
            </Link>
            <Link to="/login?mode=signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center justify-center">
              <RiUserAddLine className="mr-2" /> Sign Up
            </Link>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center w-full">
                {darkMode ? <RiSunLine className="mr-2" /> : <RiMoonLine className="mr-2" />}
                <span>Dark Mode</span>
              </button>
            </div>
          </div>
          
          <div className="mt-auto text-sm text-gray-500 dark:text-gray-400">
            © 2023 Courseware Cloud
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {mobileMenuOpen && (
        <div onClick={toggleMobileMenu} className="fixed inset-0 bg-black/50 z-40"></div>
      )}
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Centralize Your <span className="text-blue-600 dark:text-blue-400">Academic Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              A unified platform for students, lecturers, and course representatives to access, share, and manage all academic materials in one place.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition flex items-center justify-center">
                <RiLoginBoxLine className="mr-2" /> Login
              </Link>
              <Link to="/login?mode=signup" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg text-center font-medium transition flex items-center justify-center">
                <RiUserAddLine className="mr-2" /> Sign Up
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50 animate-pulse delay-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">Courseware Cloud</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <RiFolder2Line className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Computer Science</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">12 files</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <RiFileTextLine className="text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm truncate">Lecture_1.pdf</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">2.4 MB</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <RiSlideshowLine className="text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm truncate">Week_1.pptx</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">5.1 MB</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <RiFileExcelLine className="text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm truncate">Tutorial.xlsx</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">1.7 MB</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <RiFileVideoLine className="text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm truncate">Recording.mp4</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">45.2 MB</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: Today</div>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
                      <RiUploadLine className="mr-1" /> Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl my-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Designed to streamline academic resource management for everyone in the educational ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Academic Workflow</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Courseware Cloud isn't just another file storage solution - it's a complete academic resource management platform designed specifically for educational institutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <RiCheckLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">For Students</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access all your course materials in one place, organized by semester and course. Never miss an update with real-time notifications.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <RiCheckLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">For Lecturers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Distribute materials effortlessly, track student engagement, and update resources with version control to ensure students always have the latest materials.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <RiCheckLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">For Course Representatives</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share supplementary materials, collect feedback, and ensure all classmates have access to essential resources for academic success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <RiUser3Line className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Students</div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Organized course materials</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Real-time notifications</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Cross-device access</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Advanced search</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <RiUserStarLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Lecturers</div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Easy material distribution</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Version control</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Student engagement tracking</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Bulk upload capabilities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <RiUserSharedLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Course Reps</div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Supplementary material sharing</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Feedback collection</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Resource organization</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Classmate access management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <RiCustomerServiceLine className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Support</div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>24/7 technical assistance</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Video tutorials</span>
                  </li>
                  <li className="flex items-center">
                    <RiCheckLine className="text-green-500 mr-2" />
                    <span>Dedicated account managers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl my-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from students, lecturers, and course representatives who use Courseware Cloud every day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(testimonial.rating)) {
                    return <RiStarFill key={i} className="text-yellow-400" />;
                  } else if (i < testimonial.rating) {
                    return <RiStarHalfFill key={i} className="text-yellow-400" />;
                  } else {
                    return <RiStarLine key={i} className="text-yellow-400" />;
                  }
                })}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Courseware Cloud.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <RiArrowDownSLine className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Academic Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students, lecturers, and institutions already using Courseware Cloud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-center font-medium transition flex items-center justify-center">
                <RiLoginBoxLine className="mr-2" /> Get Started
              </Link>
              <Link to="/login?mode=signup" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-center font-medium transition flex items-center justify-center">
                <RiUserAddLine className="mr-2" /> Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <RiCloudLine className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">Courseware Cloud</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Simplifying academic resource management for educational institutions worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Support Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              © 2023 Courseware Cloud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;