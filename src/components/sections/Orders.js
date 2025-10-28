import React, { useState, useEffect } from 'react';

const Orders = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [expandedRow, setExpandedRow] = useState(null);
    const [activeTab, setActiveTab] = useState('today');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const orders = [
        {
            id: 1,
            symbol: 'RELIANCE',
            type: 'BUY',
            quantity: 10,
            price: 2456.75,
            status: 'COMPLETED',
            timestamp: '2024-01-15 10:23:45',
            orderType: 'LIMIT',
            triggerPrice: '-',
            filledQty: 10,
            pendingQty: 0
        },
        {
            id: 2,
            symbol: 'TCS',
            type: 'SELL',
            quantity: 5,
            price: 3450.20,
            status: 'PENDING',
            timestamp: '2024-01-15 10:15:30',
            orderType: 'MARKET',
            triggerPrice: '-',
            filledQty: 0,
            pendingQty: 5
        },
        {
            id: 3,
            symbol: 'INFY',
            type: 'BUY',
            quantity: 15,
            price: 1520.45,
            status: 'CANCELLED',
            timestamp: '2024-01-15 09:45:12',
            orderType: 'SL',
            triggerPrice: 1510.00,
            filledQty: 0,
            pendingQty: 0
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'COMPLETED': return 'text-green-600 bg-green-100';
            case 'PENDING': return 'text-yellow-600 bg-yellow-100';
            case 'CANCELLED': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const getTypeColor = (type) => {
        return type === 'BUY' ? 'text-green-600' : 'text-red-600';
    };

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const formatTime = (timestamp) => {
        if (isMobile) {
            return timestamp.split(' ')[1].substring(0, 5); // Show only time (HH:MM)
        }
        return timestamp;
    };

    // Mobile Card View
    const MobileOrderCard = ({ order, index }) => (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="font-medium text-gray-900 text-base">{order.symbol}</div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm font-medium ${getTypeColor(order.type)}`}>
                            {order.type}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{order.orderType}</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{formatTime(order.timestamp)}</div>
                </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                    <div className="text-gray-500 text-xs">Quantity</div>
                    <div className="font-medium">{order.quantity}</div>
                </div>
                <div>
                    <div className="text-gray-500 text-xs">Price</div>
                    <div className="font-medium">₹{order.price.toLocaleString()}</div>
                </div>
            </div>

            {/* Expandable Details */}
            {expandedRow === index && (
                <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <div className="text-gray-500 text-xs">Order Type</div>
                            <div className="font-medium">{order.orderType}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-xs">Trigger Price</div>
                            <div className="font-medium">
                                {order.triggerPrice === '-' ? '-' : `₹${order.triggerPrice}`}
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-xs">Filled Qty</div>
                            <div className="font-medium">{order.filledQty}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-xs">Pending Qty</div>
                            <div className="font-medium">{order.pendingQty}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">
                <button
                    onClick={() => toggleRow(index)}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 touch-button px-2 py-1"
                >
                    {expandedRow === index ? 'Show Less' : 'View Details'}
                </button>
                {order.status === 'PENDING' && (
                    <button className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors touch-button">
                        Cancel
                    </button>
                )}
            </div>
        </div>
    );

    // Desktop Table View
    const DesktopTableView = () => (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="hidden md:grid md:grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                <div>Symbol</div>
                <div>Type</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Status</div>
                <div>Time</div>
            </div>
            
            {orders.map(order => (
                <div key={order.id} className="hidden md:grid md:grid-cols-6 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div className="font-medium text-gray-900">{order.symbol}</div>
                    <div className={`font-medium ${getTypeColor(order.type)}`}>
                        {order.type}
                    </div>
                    <div className="text-gray-700">{order.quantity}</div>
                    <div className="text-gray-700">₹{order.price.toLocaleString()}</div>
                    <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">{order.timestamp}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Orders</h1>
                <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm touch-button w-full sm:w-auto">
                        New Order
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
                {['today', 'open', 'completed', 'cancelled'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                            activeTab === tab
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Orders Summary - Mobile */}
            {isMobile && orders.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center text-sm">
                        <div>
                            <div className="text-blue-600 font-medium">Total Orders</div>
                            <div className="text-gray-600">{orders.length} orders</div>
                        </div>
                        <div className="text-right">
                            <div className="text-blue-600 font-medium">Pending</div>
                            <div className="text-gray-600">
                                {orders.filter(o => o.status === 'PENDING').length} orders
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Orders List */}
            <div className="mb-6">
                {orders.length > 0 ? (
                    isMobile ? (
                        <div className="space-y-3">
                            {orders.map((order, index) => (
                                <MobileOrderCard 
                                    key={order.id} 
                                    order={order} 
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <DesktopTableView />
                    )
                ) : (
                    <div className="text-center py-8 sm:py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders</h3>
                        <p className="text-gray-500 mb-4 max-w-md mx-auto px-4">
                            You haven't placed any orders yet.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors touch-button text-sm sm:text-base">
                            Place Your First Order
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Bottom Action Bar */}
            {isMobile && orders.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-area-inset-bottom shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-xs text-gray-500">Total Orders</div>
                            <div className="text-sm font-bold text-gray-900">{orders.length}</div>
                        </div>
                        <div className="flex gap-2">
                            {orders.some(o => o.status === 'PENDING') && (
                                <button className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors touch-button">
                                    Cancel All
                                </button>
                            )}
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors touch-button">
                                New Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;