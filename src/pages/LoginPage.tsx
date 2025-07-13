import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface UserCredentials {
  email: string;
  password: string;
  role: string;
}

interface LoginPageProps {
  mode?: 'login' | 'signup';
}

const LoginPage: React.FC<LoginPageProps> = ({ mode }) => {
  const [searchParams] = useSearchParams();
  const urlMode = searchParams.get('mode');
  const [isLogin, setIsLogin] = useState(mode !== 'signup' && urlMode !== 'signup');
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (credentials.email && credentials.password) {
        // Simulate token and role assignment
        const fakeToken = 'fake-jwt-token';
        login(credentials.email, credentials.role as 'student' | 'lecturer' | 'hod' | 'admin', fakeToken);
        // Redirect based on role
        if (credentials.role === 'student') {
          navigate('/student');
        } else if (credentials.role === 'lecturer') {
          navigate('/lecturer');
        } else if (credentials.role === 'hod') {
          navigate('/head-of-departments');
        } else if (credentials.role === 'admin') {
          navigate('/admins');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('Please fill in all fields');
      }
    }, 1500);
  };

  React.useEffect(() => {
    if (mode) setIsLogin(mode !== 'signup');
    else if (urlMode) setIsLogin(urlMode !== 'signup');
  }, [mode, urlMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Form */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {isLogin ? 'Login to Courseware Cloud' : 'Create Account'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access your academic resources in one place
            </p>
          </div>
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email/Username
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Login As
              </label>
              <select
                id="role"
                name="role"
                value={credentials.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              >
                <option value="student">Student</option>
                <option value="lecturer">Lecturer</option>
                <option value="hod">Head of Department</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            {error && (
              <div className="bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 !rounded-button whitespace-nowrap disabled:opacity-70"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <div className="text-center">
              <span className="text-gray-600 dark:text-gray-300">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  {isLogin ? 'Sign up' : 'Login'}
                </button>
              </span>
            </div>
          </form>
        </div>
        {/* Right Side - Info */}
        <div className="hidden md:block relative">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20university%20campus%20library%20interior%20with%20students%20studying%20digital%20resources%2C%20contemporary%20educational%20technology%2C%20blue%20accent%20lighting%2C%20professional%20academic%20environment&width=600&height=800&seq=1001&orientation=portrait"
            alt="Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80 dark:bg-gray-900/80">
            <div className="p-12 text-white h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Courseware Cloud</h2>
              <p className="text-xl mb-8">
                A modern platform for academic resource management
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>Centralized resource repository</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>Easy uploads and downloads</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3"></i>
                  <span>Organized by department and level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
