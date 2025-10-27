import React, { useState } from 'react';
import { allIcons } from './icons/index';
import Header from './components/Header';
import WatchlistSidebar from './components/WatchlistSidebar';
import Dashboard from './components/MainDashboard';
import Orders from './components/sections/Orders';
import Holdings from './components/sections/Holdings';
import Positions from './components/sections/Positions';
import Funds from './components/sections/Funds';

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

import './index.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const allChartComponents = {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard icons={allIcons} chartComponents={allChartComponents} />;
      case 'orders':
        return <Orders />;
      case 'holdings':
        return <Holdings />;
      case 'positions':
        return <Positions />;
      case 'funds':
        return <Funds />;
      default:
        return <Dashboard icons={allIcons} chartComponents={allChartComponents} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onToggleSidebar={() => setSidebarOpen(true)}
        icons={allIcons}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 flex min-h-0">
        <WatchlistSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          icons={allIcons}
        />
        <main className="flex-1 overflow-auto">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;