import React, { useState } from 'react';

const Funds = () => {
    const [funds] = useState({
        available: 125000.75,
        utilized: 45620.25,
        openingBalance: 150000.00,
        collateral: 25000.00
    });

    const transactions = [
        {
            id: 1,
            type: 'CREDIT',
            amount: 50000.00,
            description: 'Bank Transfer',
            status: 'COMPLETED',
            timestamp: '2024-01-15 09:30:45'
        },
        {
            id: 2,
            type: 'DEBIT',
            amount: 25000.00,
            description: 'Stock Purchase',
            status: 'COMPLETED',
            timestamp: '2024-01-14 14:20:15'
        },
        {
            id: 3,
            type: 'CREDIT',
            amount: 100000.00,
            description: 'Bank Transfer',
            status: 'COMPLETED',
            timestamp: '2024-01-12 11:15:30'
        }
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Funds</h1>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add Funds
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Withdraw
                    </button>
                </div>
            </div>

            {/* Fund Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Available Cash</div>
                        <div className="text-green-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">₹{funds.available.toLocaleString()}</div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Utilized Amount</div>
                        <div className="text-blue-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">₹{funds.utilized.toLocaleString()}</div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Opening Balance</div>
                        <div className="text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">₹{funds.openingBalance.toLocaleString()}</div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Collateral</div>
                        <div className="text-orange-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">₹{funds.collateral.toLocaleString()}</div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
                </div>
                
                <div className="divide-y divide-gray-100">
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="p-4 hover:bg-gray-50">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium text-gray-900">{transaction.description}</div>
                                    <div className="text-sm text-gray-500">{transaction.timestamp}</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`text-lg font-bold ${
                                        transaction.type === 'CREDIT' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {transaction.type === 'CREDIT' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                                        {transaction.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {transactions.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Transactions</h3>
                    <p className="text-gray-500 mb-4">You haven't made any transactions yet.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Add Funds
                    </button>
                </div>
            )}
        </div>
    );
};

export default Funds;