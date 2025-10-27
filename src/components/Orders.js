import React, { useState } from 'react';

const Orders = ({ icons }) => {
  const [activeOrdersTab, setActiveOrdersTab] = useState('today');
  const { DocumentText, Clock, CheckCircle, XCircle, ExclamationCircle } = icons;

  // Sample orders data
  const ordersData = {
    today: [
      {
        id: 1,
        time: '10:15 AM',
        script: 'HDFCBANK',
        type: 'BUY',
        quantity: 10,
        orderType: 'LIMIT',
        price: 1005.00,
        triggerPrice: '-',
        status: 'Completed',
        statusType: 'completed'
      },
      {
        id: 2,
        time: '09:55 AM',
        script: 'INFY',
        type: 'SELL',
        quantity: 5,
        orderType: 'MARKET',
        price: '-',
        triggerPrice: '-',
        status: 'Completed',
        statusType: 'completed'
      },
      {
        id: 3,
        time: '09:30 AM',
        script: 'TCS',
        type: 'BUY',
        quantity: 15,
        orderType: 'LIMIT',
        price: 3070.00,
        triggerPrice: '-',
        status: 'Pending',
        statusType: 'pending'
      },
      {
        id: 4,
        time: '09:15 AM',
        script: 'RELIANCE',
        type: 'SELL',
        quantity: 8,
        orderType: 'SL',
        price: 2850.00,
        triggerPrice: 2840.00,
        status: 'Trigger Pending',
        statusType: 'pending'
      }
    ],
    history: [
      {
        id: 5,
        time: '2024-01-19 02:30 PM',
        script: 'RELIANCE',
        type: 'BUY',
        quantity: 8,
        orderType: 'LIMIT',
        price: 2850.00,
        triggerPrice: '-',
        status: 'Completed',
        statusType: 'completed'
      },
      {
        id: 6,
        time: '2024-01-18 11:20 AM',
        script: 'SBIN',
        type: 'SELL',
        quantity: 20,
        orderType: 'MARKET',
        price: '-',
        triggerPrice: '-',
        status: 'Completed',
        statusType: 'completed'
      },
      {
        id: 7,
        time: '2024-01-17 03:45 PM',
        script: 'TATAMOTORS',
        type: 'BUY',
        quantity: 12,
        orderType: 'LIMIT',
        price: 780.50,
        triggerPrice: '-',
        status: 'Cancelled',
        statusType: 'cancelled'
      }
    ]
  };

  const getStatusIcon = (statusType) => {
    const iconProps = { size: 14 };
    switch (statusType) {
      case 'completed':
        return <CheckCircle {...iconProps} className="text-green-500" />;
      case 'pending':
        return <Clock {...iconProps} className="text-yellow-500" />;
      case 'cancelled':
        return <XCircle {...iconProps} className="text-red-500" />;
      default:
        return <ExclamationCircle {...iconProps} className="text-gray-500" />;
    }
  };

  const getStatusClass = (statusType) => {
    const classes = {
      completed: 'text-green-700 bg-green-50 border-green-200',
      pending: 'text-yellow-700 bg-yellow-50 border-yellow-200',
      cancelled: 'text-red-700 bg-red-50 border-red-200',
      rejected: 'text-red-700 bg-red-50 border-red-200'
    };
    return classes[statusType] || 'text-gray-700 bg-gray-50 border-gray-200';
  };

  const currentOrders = ordersData[activeOrdersTab];

  return (
    <div className="space-y-4">
      {/* Orders Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeOrdersTab === 'today'
              ? 'border-kite-blue text-kite-blue'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveOrdersTab('today')}
        >
          Today's Orders
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeOrdersTab === 'history'
              ? 'border-kite-blue text-kite-blue'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveOrdersTab('history')}
        >
          Order History
        </button>
      </div>

      {/* Orders Content */}
      {currentOrders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Script
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trigger
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                    {order.time}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {order.script}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">
                    <span className={`font-medium ${
                      order.type === 'BUY' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                    {order.orderType}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                    {typeof order.price === 'number' ? order.price.toFixed(2) : order.price}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                    {typeof order.triggerPrice === 'number' ? order.triggerPrice.toFixed(2) : order.triggerPrice}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusClass(order.statusType)}`}>
                      {getStatusIcon(order.statusType)}
                      {order.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            {DocumentText ? (
              <DocumentText size={32} className="text-gray-400" />
            ) : (
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            You haven't placed any orders {activeOrdersTab === 'today' ? 'today' : 'yet'}
          </h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            {activeOrdersTab === 'today' 
              ? 'Get started by placing your first order today.'
              : 'Your order history will appear here once you start trading.'
            }
          </p>
          <div className="flex justify-center gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-kite-blue hover:bg-kite-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kite-blue">
              Place Order
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kite-blue">
              View History
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;