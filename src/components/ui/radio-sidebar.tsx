import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface RadioSidebarItem {
  id: string;
  path: string;
  icon: React.ReactNode;
}

interface RadioSidebarProps {
  items: RadioSidebarItem[];
}

export const RadioSidebar: React.FC<RadioSidebarProps> = ({ items }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-hide sidebar after opening on mobile
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); // Auto-hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigation on mobile
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button - visible on mobile only when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-3 left-3 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isOpen ? 'w-64' : 'w-16 sm:w-20 md:w-16 lg:w-20'}
      `}>
        <div className={`flex flex-col justify-start items-center pt-4 md:pt-8 lg:pt-12 transition-all duration-[450ms] ease-in-out h-full p-2 sm:p-3 md:p-2 lg:p-4 ${
          isOpen ? 'w-full' : 'w-16 sm:w-20 md:w-16 lg:w-20'
        }`}>
          <article className={`border border-solid border-gray-700 dark:border-gray-600 ease-in-out duration-500 left-0 rounded-2xl inline-block shadow-lg shadow-black/15 bg-white dark:bg-gray-800 ${
            isOpen ? 'w-full max-w-sm' : 'w-full'
          }`}>
            {items.map((item) => (
              <label 
                key={item.id}
                htmlFor={item.id} 
                className={`has-[:checked]:shadow-lg relative p-2 sm:p-3 md:p-2 lg:p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center text-black dark:text-white rounded-xl cursor-pointer ${
                  isOpen ? 'justify-start h-12 sm:h-14' : 'justify-center h-12 sm:h-14 md:h-12 lg:h-16'
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <input 
                  className="hidden peer/expand" 
                  type="radio" 
                  name="path" 
                  id={item.id}
                  checked={location.pathname === item.path}
                  onChange={() => {}}
                />
                <div className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400 peer-checked/expand:text-blue-400 peer-checked/expand:fill-blue-400 text-lg sm:text-xl md:text-lg lg:text-2xl peer-checked/expand:scale-125 ease-in-out duration-300">
                  {item.icon}
                </div>
                {isOpen && (
                  <span className="text-sm font-medium animate-fade-in">
                    {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                  </span>
                )}
              </label>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};
