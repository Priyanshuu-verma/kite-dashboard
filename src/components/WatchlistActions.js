import React from 'react';

const WatchlistActions = ({ icons }) => {
     const { MoreHorizontal, BarChart2, Layers, Trash2 } = icons;
     if (!MoreHorizontal || !BarChart2 || !Layers || !Trash2 ) {
         return null;
     }
     return (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-white border border-gray-200 rounded shadow-sm watchlist-item-actions">
            <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-l">B</button>
            <button className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700">S</button>
            <div className="flex border-l border-gray-200">
                 <button title="More options" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"><MoreHorizontal size={16} /></button>
                 <button title="Chart (C)" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"><BarChart2 size={16} /></button>
                 <button title="Market Depth (D)" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"><Layers size={16} /></button>
                 <button title="Delete" className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-r"><Trash2 size={16} /></button>
            </div>
        </div>
     );
};

export default WatchlistActions;