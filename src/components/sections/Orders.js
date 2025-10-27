import React, { useState } from 'react';

const Orders = () => {
    const [orders] = useState([
        {
            id: 1,
            symbol: 'RELIANCE',
            type: 'BUY',
            quantity: 10,
            price: 2456.75,
            status: 'COMPLETED',
            timestamp: '2024-01-15 10:23:45'
        },
        {
            id: 2,
            symbol: 'TCS',
            type: 'SELL',
            quantity: 5,
            price: 3450.20,
            status: 'PENDING',
            timestamp: '2024-01-15 10:15:30'
        },
        {
            id: 3,
            symbol: 'INFY',
            type: 'BUY',
            quantity: 15,
            price: 1520.45,
            status: 'CANCELLED',
            timestamp: '2024-01-15 09:45:12'
        }
    ]);

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

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    New Order
                </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                    <div>Symbol</div>
                    <div>Type</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Status</div>
                    <div>Time</div>
                </div>
                
                {orders.map(order => (
                    <div key={order.id} className="grid grid-cols-6 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
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

            {orders.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders</h3>
                    <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Place Your First Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Orders;