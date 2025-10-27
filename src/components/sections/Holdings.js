import React from 'react';

const Holdings = () => {
    const holdings = [
        {
            symbol: 'RELIANCE',
            quantity: 25,
            avgPrice: 2350.50,
            ltp: 2456.75,
            pnl: 2656.25,
            pnlPercent: 4.52,
            value: 61418.75
        },
        {
            symbol: 'TCS',
            quantity: 10,
            avgPrice: 3250.00,
            ltp: 3450.20,
            pnl: 2002.00,
            pnlPercent: 6.16,
            value: 34502.00
        },
        {
            symbol: 'INFY',
            quantity: 30,
            avgPrice: 1480.25,
            ltp: 1520.45,
            pnl: 1206.00,
            pnlPercent: 2.72,
            value: 45613.50
        },
        {
            symbol: 'HDFCBANK',
            quantity: 8,
            avgPrice: 1520.75,
            ltp: 1485.30,
            pnl: -283.60,
            pnlPercent: -2.33,
            value: 11882.40
        }
    ];

    const totalInvestment = holdings.reduce((sum, holding) => sum + (holding.avgPrice * holding.quantity), 0);
    const totalCurrentValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
    const totalPnl = totalCurrentValue - totalInvestment;
    const totalPnlPercent = (totalPnl / totalInvestment) * 100;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Holdings</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Total Investment</div>
                    <div className="text-xl font-bold text-gray-800">₹{totalInvestment.toLocaleString()}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Current Value</div>
                    <div className="text-xl font-bold text-gray-800">₹{totalCurrentValue.toLocaleString()}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">P&L</div>
                    <div className={`text-xl font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{totalPnl.toLocaleString()}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">P&L %</div>
                    <div className={`text-xl font-bold ${totalPnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {totalPnlPercent.toFixed(2)}%
                    </div>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                    <div>Symbol</div>
                    <div className="text-right">Quantity</div>
                    <div className="text-right">Avg. Price</div>
                    <div className="text-right">LTP</div>
                    <div className="text-right">P&L</div>
                    <div className="text-right">P&L %</div>
                    <div className="text-right">Current Value</div>
                </div>
                
                {holdings.map((holding, index) => (
                    <div key={index} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="font-medium text-gray-900">{holding.symbol}</div>
                        <div className="text-right text-gray-700">{holding.quantity}</div>
                        <div className="text-right text-gray-700">₹{holding.avgPrice.toFixed(2)}</div>
                        <div className="text-right text-gray-700">₹{holding.ltp.toFixed(2)}</div>
                        <div className={`text-right font-medium ${holding.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{holding.pnl.toFixed(2)}
                        </div>
                        <div className={`text-right font-medium ${holding.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {holding.pnlPercent.toFixed(2)}%
                        </div>
                        <div className="text-right font-medium text-gray-900">
                            ₹{holding.value.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            {holdings.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Holdings</h3>
                    <p className="text-gray-500 mb-4">You don't have any holdings in your portfolio.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Investing
                    </button>
                </div>
            )}
        </div>
    );
};

export default Holdings;