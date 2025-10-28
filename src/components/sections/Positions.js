import React, { useState, useEffect } from 'react';

const Positions = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [expandedRow, setExpandedRow] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    // Mobile Card View
    const MobilePositionCard = ({ position, index }) => (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="font-medium text-gray-900 text-sm">{position.symbol}</div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mt-1 inline-block">
                        {position.product}
                    </span>
                </div>
                <div className="text-right">
                    <div className={`font-medium ${position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{position.pnl.toLocaleString()}
                    </div>
                    <div className={`text-xs ${position.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {position.pnlPercent >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%
                    </div>
                </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                    <div className="text-gray-500 text-xs">Quantity</div>
                    <div className="font-medium">{position.quantity}</div>
                </div>
                <div>
                    <div className="text-gray-500 text-xs">LTP</div>
                    <div className="font-medium">₹{position.ltp.toLocaleString()}</div>
                </div>
            </div>

            {/* Expandable Details */}
            {expandedRow === index && (
                <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div className="text-gray-500 text-xs">Avg Price</div>
                            <div className="font-medium">₹{position.avgPrice.toLocaleString()}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-xs">Current Value</div>
                            <div className="font-medium">₹{(position.ltp * position.quantity).toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">
                <button
                    onClick={() => toggleRow(index)}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700"
                >
                    {expandedRow === index ? 'Show Less' : 'View Details'}
                </button>
                <button className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors touch-button">
                    Square Off
                </button>
            </div>
        </div>
    );

    // Desktop Table View
    const DesktopTableView = () => (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                <div>Symbol</div>
                <div>Product</div>
                <div className="text-right">Quantity</div>
                <div className="text-right">Avg. Price</div>
                <div className="text-right">LTP</div>
                <div className="text-right">P&L</div>
                <div className="text-right">Action</div>
            </div>
            
            {positions.map((position, index) => (
                <div key={index} className="hidden md:grid md:grid-cols-7 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div className="font-medium text-gray-900">{position.symbol}</div>
                    <div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {position.product}
                        </span>
                    </div>
                    <div className="text-right text-gray-700">{position.quantity}</div>
                    <div className="text-right text-gray-700">₹{position.avgPrice.toLocaleString()}</div>
                    <div className="text-right text-gray-700">₹{position.ltp.toLocaleString()}</div>
                    <div className={`text-right font-medium ${position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{position.pnl.toLocaleString()}
                    </div>
                    <div className="text-right">
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors touch-button">
                            Square Off
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Positions</h1>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 hidden sm:block">
                        Total P&L: <span className={`font-medium ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{totalPnl.toLocaleString()}
                        </span>
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm touch-button w-full sm:w-auto">
                        Square Off All
                    </button>
                </div>
            </div>

            {/* Mobile Summary Card */}
            {isMobile && (
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-sm text-gray-500">Net P&L</div>
                            <div className={`text-xl font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ₹{totalPnl.toLocaleString()}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">Positions</div>
                            <div className="text-xl font-bold text-gray-800">{positions.length}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Summary Card */}
            {!isMobile && (
                <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Net P&L</div>
                            <div className={`text-2xl font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ₹{totalPnl.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors touch-button">
                                Square Off All
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Positions List */}
            <div className="mb-6">
                {isMobile ? (
                    <div className="space-y-3">
                        {positions.map((position, index) => (
                            <MobilePositionCard 
                                key={index} 
                                position={position} 
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <DesktopTableView />
                )}
            </div>

            {/* Empty State */}
            {positions.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Open Positions</h3>
                    <p className="text-gray-500 mb-4 max-w-md mx-auto px-4">
                        You don't have any open positions at the moment.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors touch-button text-sm sm:text-base">
                        Start Trading
                    </button>
                </div>
            )}

            {/* Mobile Bottom Action Bar */}
            {isMobile && positions.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-area-inset-bottom shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-xs text-gray-500">Total P&L</div>
                            <div className={`text-sm font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ₹{totalPnl.toLocaleString()}
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium touch-button">
                            Square Off All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Positions;