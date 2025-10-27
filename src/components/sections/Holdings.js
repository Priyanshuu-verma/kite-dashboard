import React, { useState } from 'react';

const Holdings = () => {
    const [isGridView, setIsGridView] = useState(window.innerWidth < 768);

    const holdings = [
        // ... your holdings data
    ];

    // Responsive table component
    const ResponsiveHoldingsTable = () => {
        if (isGridView) {
            return (
                <div className="space-y-4">
                    {holdings.map((holding, index) => (
                        <div key={index} className="responsive-card">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="font-medium text-gray-900">{holding.symbol}</div>
                                    <div className="text-sm text-gray-500">Qty: {holding.quantity}</div>
                                </div>
                                <div className="text-right">
                                    <div className={`font-medium ${holding.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        ₹{holding.pnl.toFixed(2)}
                                    </div>
                                    <div className={`text-sm ${holding.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {holding.pnlPercent.toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <div className="text-gray-500">Avg Price</div>
                                    <div>₹{holding.avgPrice.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500">LTP</div>
                                    <div>₹{holding.ltp.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Value</div>
                                    <div>₹{holding.value.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="responsive-table">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">Qty</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg Price</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">LTP</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">P&L</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {holdings.map((holding, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-3 py-3 text-sm font-medium text-gray-900">{holding.symbol}</td>
                                <td className="px-3 py-3 text-sm text-gray-700 text-right">{holding.quantity}</td>
                                <td className="px-3 py-3 text-sm text-gray-700 text-right">₹{holding.avgPrice.toFixed(2)}</td>
                                <td className="px-3 py-3 text-sm text-gray-700 text-right">₹{holding.ltp.toFixed(2)}</td>
                                <td className={`px-3 py-3 text-sm font-medium text-right ${holding.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    ₹{holding.pnl.toFixed(2)}
                                </td>
                                <td className="px-3 py-3 text-sm font-medium text-gray-900 text-right">
                                    ₹{holding.value.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Holdings</h1>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setIsGridView(true)}
                        className={`px-3 py-2 text-sm rounded touch-button ${isGridView ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Grid
                    </button>
                    <button 
                        onClick={() => setIsGridView(false)}
                        className={`px-3 py-2 text-sm rounded touch-button ${!isGridView ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Table
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="responsive-grid-4 mb-6">
                {/* ... summary cards */}
            </div>

            <ResponsiveHoldingsTable />
        </div>
    );
};

export default Holdings;