import React from 'react';

const Positions = () => {
    const positions = [
        {
            symbol: 'NIFTY25JANFUT',
            product: 'FUTURES',
            quantity: 75,
            avgPrice: 21825.50,
            ltp: 21832.45,
            pnl: 521.25,
            pnlPercent: 0.32
        },
        {
            symbol: 'BANKNIFTY25JANFUT',
            product: 'FUTURES',
            quantity: 25,
            avgPrice: 48510.75,
            ltp: 48567.80,
            pnl: 1426.25,
            pnlPercent: 1.18
        },
        {
            symbol: 'RELIANCE25JAN2400CE',
            product: 'OPTIONS',
            quantity: 500,
            avgPrice: 12.50,
            ltp: 8.75,
            pnl: -1875.00,
            pnlPercent: -30.00
        }
    ];

    const totalPnl = positions.reduce((sum, position) => sum + position.pnl, 0);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Positions</h1>

            {/* Summary Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-sm text-gray-500 mb-1">Net P&L</div>
                        <div className={`text-2xl font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{totalPnl.toLocaleString()}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Square Off All
                        </button>
                    </div>
                </div>
            </div>

            {/* Positions Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                    <div>Symbol</div>
                    <div>Product</div>
                    <div className="text-right">Quantity</div>
                    <div className="text-right">Avg. Price</div>
                    <div className="text-right">LTP</div>
                    <div className="text-right">P&L</div>
                    <div className="text-right">Action</div>
                </div>
                
                {positions.map((position, index) => (
                    <div key={index} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="font-medium text-gray-900">{position.symbol}</div>
                        <div>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                {position.product}
                            </span>
                        </div>
                        <div className="text-right text-gray-700">{position.quantity}</div>
                        <div className="text-right text-gray-700">{position.avgPrice.toLocaleString()}</div>
                        <div className="text-right text-gray-700">{position.ltp.toLocaleString()}</div>
                        <div className={`text-right font-medium ${position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{position.pnl.toLocaleString()}
                        </div>
                        <div className="text-right">
                            <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                                Square Off
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {positions.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Open Positions</h3>
                    <p className="text-gray-500 mb-4">You don't have any open positions at the moment.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Trading
                    </button>
                </div>
            )}
        </div>
    );
};

export default Positions;