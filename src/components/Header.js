import React, { useState, useEffect } from 'react';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ onToggleSidebar, icons, activeSection, onSectionChange }) => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { Menu, ShoppingCart, Bell, ChevronDown } = icons;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const topNavItems = [
        { name: 'Dashboard', key: 'dashboard' },
        { name: 'Orders', key: 'orders' },
        { name: 'Holdings', key: 'holdings' },
        { name: 'Positions', key: 'positions' },
        { name: 'Funds', key: 'funds' },
    ];

    // Simplified market data for mobile
    const marketData = [
        { name: 'NIFTY 50', value: '21,832.45', change: '-12.30', percent: '-0.06%', isPositive: false },
        { name: 'SENSEX', value: '72,271.94', change: '-37.45', percent: '-0.05%', isPositive: false },
        { name: 'BANK NIFTY', value: '48,567.80', change: '+124.35', percent: '+0.26%', isPositive: true },
    ];

    return (
        <header className="sticky top-0 bg-white border-b border-gray-200 z-40 safe-area-inset-top">
            {/* Market Ticker - Hidden on small mobile */}
            <div className="bg-gray-50 border-b border-gray-200 hidden sm:block">
                <div className="market-ticker">
                    {marketData.map((item, index) => (
                        <div key={index} className="market-ticker-item whitespace-nowrap">
                            <span className="text-xs font-medium text-gray-600 mr-2">{item.name}</span>
                            <span className={`text-xs font-semibold ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {isMobile ? item.value : `${item.value} ${item.change}`}
                            </span>
                            {!isMobile && (
                                <span className={`text-xs ml-1 ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    ({item.percent})
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex items-center justify-between h-12 px-3 sm:px-4 bg-white">
                {/* Left Section */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button
                        onClick={onToggleSidebar}
                        className="lg:hidden text-gray-600 hover:text-blue-600 touch-button p-2"
                        aria-label="Toggle menu"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://kite.zerodha.com/static/images/kite-logo.svg"
                            alt="Kite"
                            className="h-6"
                            onError={(e) => {
                                e.target.src = 'https://placehold.co/80x30/387ed1/white?text=KITE';
                            }}
                        />
                    </div>

                    {/* Navigation Links - Hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-1">
                        {topNavItems.map(item => (
                            <button
                                key={item.key}
                                onClick={() => onSectionChange(item.key)}
                                className={`px-3 py-2 text-sm rounded transition-colors touch-button ${
                                    activeSection === item.key 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Quick Actions - Hidden on small mobile */}
                    <button className="hidden sm:flex p-1.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded touch-button">
                        <ShoppingCart size={18} />
                    </button>
                    <button className="hidden sm:flex p-1.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded touch-button">
                        <Bell size={18} />
                    </button>

                    {/* Profile */}
                    <div className="relative">
                        <button
                            onClick={() => setProfileOpen(prev => !prev)}
                            className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 touch-button"
                            aria-label="Profile menu"
                        >
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-medium">PV</span>
                            </div>
                            <span className="text-sm text-gray-700 hidden sm:block">VSR618</span>
                            <ChevronDown size={16} className="text-gray-500" />
                        </button>
                        
                        {isProfileOpen && (
                            <ProfileDropdown 
                                onClose={() => setProfileOpen(false)} 
                                icons={icons} 
                            />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;