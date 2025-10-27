import React, { useState } from 'react';
import { chartData } from '../data/mockData';

const MainDashboard = ({ icons, chartComponents }) => {
    const { Briefcase, TrendingUp, Zap, Plus } = icons;
    const { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } = chartComponents;

    const [activeTab, setActiveTab] = useState('market');

    const tabs = [
        { id: 'market', name: 'Market overview' },
        { id: 'orders', name: 'Orders' },
        { id: 'positions', name: 'Positions' },
    ];

    return (
        <div className="flex-1 flex flex-col min-h-0">
            {/* Main Content */}
            <main className="flex-1 p-4 bg-gray-50 min-h-0 overflow-auto">
                {/* Alert Banner */}
                <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm rounded px-4 py-3 mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Some rectifications are required in your application form to complete the account opening.
                    </div>
                    <a href="#" className="text-kite-blue hover:underline font-medium text-sm whitespace-nowrap ml-4">
                        Complete Signup
                    </a>
                </div>

                {/* Welcome Section */}
                <div className="mb-6">
                    <h1 className="text-xl font-semibold text-gray-900 mb-2">Hi, Priyanshu</h1>
                    <p className="text-gray-600 text-sm">Welcome to Kite</p>
                </div>

                {/* Equity & Commodity Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Equity Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp size={18} className="text-gray-600" />
                                <h3 className="font-medium text-gray-900">Equity</h3>
                            </div>
                            <span className="text-xs text-gray-500">Today's P&L: ₹0</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Margin available</span>
                                <span className="text-2xl font-light text-gray-900">₹0</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Margins used</span>
                                <span>₹0</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Opening balance</span>
                                <span>₹0</span>
                            </div>
                        </div>
                    </div>

                    {/* Commodity Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-gray-600" />
                                <h3 className="font-medium text-gray-900">Commodity</h3>
                            </div>
                            <span className="text-xs text-gray-500">Today's P&L: ₹0</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Margin available</span>
                                <span className="text-2xl font-light text-gray-900">₹0</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Margins used</span>
                                <span>₹0</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Opening balance</span>
                                <span>₹0</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-lg border border-gray-200 mb-6">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-200">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                                    activeTab === tab.id
                                    ? 'border-kite-blue text-kite-blue'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'market' && (
                            <div className="space-y-6">
                                {/* Market Overview Chart */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <h4 className="font-medium text-gray-900">NIFTY 50</h4>
                                        <span className="text-sm text-gray-600">21,832.45</span>
                                        <span className="text-sm text-kite-red">-12.30 (-0.06%)</span>
                                    </div>
                                    <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={chartData}>
                                                <defs>
                                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#387ed1" stopOpacity={0.3}/>
                                                        <stop offset="95%" stopColor="#387ed1" stopOpacity={0}/>
                                                    </linearGradient>
                                                </defs>
                                                <XAxis 
                                                    dataKey="name" 
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fontSize: 12 }}
                                                />
                                                <Tooltip />
                                                <Area 
                                                    type="monotone" 
                                                    dataKey="uv" 
                                                    stroke="#387ed1" 
                                                    fillOpacity={1}
                                                    fill="url(#colorUv)" 
                                                    strokeWidth={2}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="text-center py-8 text-gray-500">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Briefcase size={24} className="text-gray-400" />
                                </div>
                                <p className="mb-4">No orders placed today</p>
                            </div>
                        )}

                        {activeTab === 'positions' && (
                            <div className="text-center py-8 text-gray-500">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp size={24} className="text-gray-400" />
                                </div>
                                <p className="mb-4">No open positions</p>
                                <button className="bg-kite-blue text-white px-4 py-2 rounded text-sm font-medium hover:bg-kite-dark-blue transition-colors">
                                    Start trading
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <Briefcase size={48} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">Start investing</h3>
                    <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
                        You don't have any stocks in your DEMAT yet. Get started with absolutely free equity delivery investments.
                    </p>
                    <button className="bg-kite-blue text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-kite-dark-blue transition-colors inline-flex items-center gap-2">
                        <Plus size={16} />
                        Explore stocks
                    </button>
                </div>
            </main>
        </div>
    );
};

export default MainDashboard;