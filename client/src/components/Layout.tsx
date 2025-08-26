import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Hotel Guest Management</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/guests"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/guests' 
                    ? 'bg-blue-700' 
                    : 'hover:bg-blue-500'
                }`}
              >
                Guest List
              </Link>
              <Link
                to="/guests/new"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/guests/new' 
                    ? 'bg-blue-700' 
                    : 'hover:bg-blue-500'
                }`}
              >
                Add Guest
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;