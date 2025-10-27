import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WatchlistSidebar from './components/WatchlistSidebar';
import MainDashboard from './components/MainDashboard';
import Orders from './components/sections/Orders';
import Holdings from './components/sections/Holdings';
import Positions from './components/sections/Positions';
import Funds from './components/sections/Funds';
import { allIcons } from './icons/index';
import './App.css';

// Import actual Recharts components
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const chartComponents = {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
};

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'orders':
        return <Orders icons={allIcons} />;
      case 'holdings':
        return <Holdings />;
      case 'positions':
        return <Positions />;
      case 'funds':
        return <Funds />;
      case 'dashboard':
      default:
        return <MainDashboard icons={allIcons} chartComponents={chartComponents} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onToggleSidebar={toggleSidebar}
        icons={allIcons}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="flex flex-1 relative">
        <WatchlistSidebar 
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          icons={allIcons}
        />
        
        <div className="flex-1 flex flex-col min-w-0">
          {isMobile && (
            <div className="lg:hidden bg-white border-b border-gray-200 overflow-x-auto">
              <div className="flex space-x-1 p-2">
                {['dashboard', 'orders', 'holdings', 'positions', 'funds'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-3 py-2 text-xs font-medium rounded-md whitespace-nowrap flex-shrink-0 ${
                      activeSection === section
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}

export default App;