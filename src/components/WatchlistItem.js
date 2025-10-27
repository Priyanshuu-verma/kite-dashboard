import React, { useState } from 'react';
import WatchlistActions from './WatchlistActions';

const WatchlistItem = ({ scrip, icons }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isPositive = scrip.change >= 0;

    return (
        <div
            className="relative flex justify-between items-center text-sm p-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center flex-1 min-w-0 pr-2">
                <span className="text-gray-400 mr-2 group-hover:text-blue-600">⋮</span>
                <div>
                    <p className={`font-medium truncate ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {scrip.name}
                        {scrip.event && <span className="ml-1.5 text-xs text-blue-500 bg-blue-100 px-1.5 py-0.5 rounded">{scrip.event}</span>}
                    </p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded-sm">{scrip.nse ? 'NSE' : 'BSE'}</span>
                </div>
            </div>

            <div className={`flex items-center flex-shrink-0 transition-opacity duration-150 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="text-right w-24">
                    <p className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{scrip.change.toFixed(2)} ({scrip.percent.toFixed(2)}%)</p>
                </div>
                <div className="text-right w-20 pl-2">
                    <p className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{scrip.price.toFixed(2)}</p>
                </div>
            </div>

            {isHovered && <WatchlistActions icons={icons} />}
        </div>
    );
};

export default WatchlistItem;