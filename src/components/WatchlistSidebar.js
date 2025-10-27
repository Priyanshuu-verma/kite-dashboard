import React, { useState } from 'react';
import WatchlistItem from './WatchlistItem';
import { watchlistData } from '../data/mockData';

const WatchlistSidebar = ({ isOpen, onClose, icons }) => {
    const { Search, X, Plus, ChevronDown } = icons;
    const [activeWatchlist, setActiveWatchlist] = useState(1);

    const watchlists = [
        { id: 1, name: 'Default', count: 6 },
        { id: 2, name: 'Favorites', count: 0 },
        { id: 3, name: 'Banking', count: 0 },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 lg:top-12 h-[calc(100vh-48px)] lg:h-[calc(100vh-72px)] lg:flex-shrink-0 z-50 lg:z-30 w-80 lg:w-72 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out flex flex-col ${
                    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <select 
                                value={activeWatchlist}
                                onChange={(e) => setActiveWatchlist(Number(e.target.value))}
                                className="appearance-none bg-transparent border-0 py-1 pl-2 pr-6 text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                            >
                                {watchlists.map(wl => (
                                    <option key={wl.id} value={wl.id}>
                                        {wl.name} ({wl.count})
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-1 text-gray-500 hover:text-kite-blue hover:bg-gray-100 rounded">
                            <Plus size={16} />
                        </button>
                        <button 
                            onClick={onClose}
                            className="p-1 text-gray-500 hover:text-kite-blue hover:bg-gray-100 rounded lg:hidden"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="p-3 border-b border-gray-100">
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search eg: infy bse, nifty fut weekly..."
                            className="w-full text-xs border border-gray-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-kite-blue focus:border-kite-blue"
                        />
                    </div>
                </div>

                {/* Watchlist Headers */}
                <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-gray-100 bg-gray-50 text-xs text-gray-500">
                    <div className="col-span-6">SCRIP</div>
                    <div className="col-span-3 text-right">LTP</div>
                    <div className="col-span-3 text-right">CHG %</div>
                </div>

                {/* Watchlist Items */}
                <div className="flex-1 overflow-y-auto watchlist-scroll">
                    {watchlistData.map((scrip) => (
                        <WatchlistItem key={scrip.id} scrip={scrip} icons={icons} />
                    ))}
                </div>

                {/* Watchlist Tabs */}
                <div className="flex items-center justify-between border-t border-gray-200 p-2">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                className={`w-6 h-6 flex items-center justify-center rounded text-xs ${
                                    num === 1 
                                    ? 'bg-kite-blue text-white' 
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <button className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100">
                        <Plus size={14} />
                    </button>
                </div>
            </aside>
        </>
    );
};

export default WatchlistSidebar;