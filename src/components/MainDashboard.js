import React, { useState } from 'react';
import { chartData } from '../data/mockData';

const MainDashboard = ({ icons, chartComponents }) => {
    const { Briefcase, TrendingUp, Zap, Plus } = icons;
    const { 
      AreaChart, 
      Area, 
      XAxis, 
      Tooltip, 
      ResponsiveContainer,
      CartesianGrid 
    } = chartComponents;

    const [activeTab, setActiveTab] = useState('market');

    const tabs = [
        { id: 'market', name: 'Market' },
        { id: 'orders', name: 'Orders' },
        { id: 'positions', name: 'Positions' },
    ];

    // Custom tooltip for the chart
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 rounded shadow-sm">
                    <p className="text-sm text-gray-600">{`Date: ${label}`}</p>
                    <p className="text-sm font-medium text-kite-blue">
                        {`Value: ₹${payload[0].value.toLocaleString()}`}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex-1 flex flex-col min-h-0">
            <main className="flex-1 p-3 sm:p-4 bg-gray-50 min-h-0 overflow-auto safe-area-inset-bottom">
                {/* Alert Banner */}
                <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm rounded px-3 py-2 mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-center mb-2 sm:mb-0">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm">
                            Some rectifications are required in your application form.
                        </span>
                    </div>
                    <a href="#" className="text-kite-blue hover:underline font-medium text-xs sm:text-sm whitespace-nowrap ml-0 sm:ml-4 text-right">
                        Complete Signup
                    </a>
                </div>

                {/* Welcome Section */}
                <div className="mb-6">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Hi, Priyanshu</h1>
                    <p className="text-gray-600 text-sm">Welcome to Kite</p>
                </div>

                {/* Equity & Commodity Cards */}
                <div className="responsive-grid-2 mb-6">
                    {/* Equity Card */}
                    <div className="responsive-card">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp size={18} className="text-gray-600" />
                                <h3 className="font-medium text-gray-900 text-sm sm:text-base">Equity</h3>
                            </div>
                            <span className="text-xs text-gray-500">Today's P&L: ₹0</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Margin available</span>
                                <span className="text-xl sm:text-2xl font-light text-gray-900">₹0</span>
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
                    <div className="responsive-card">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-gray-600" />
                                <h3 className="font-medium text-gray-900 text-sm sm:text-base">Commodity</h3>
                            </div>
                            <span className="text-xs text-gray-500">Today's P&L: ₹0</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Margin available</span>
                                <span className="text-xl sm:text-2xl font-light text-gray-900">₹0</span>
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
                    <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
                    <div className="p-4 sm:p-6">
                        {activeTab === 'market' && (
                            <div className="space-y-6">
                                {/* Market Overview Chart */}
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">NIFTY 50</h4>
                                        <span className="text-sm text-gray-600">21,832.45</span>
                                        <span className="text-sm text-kite-red">-12.30 (-0.06%)</span>
                                    </div>
                                    <div className="chart-container">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                                data={chartData}
                                                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                                            >
                                                <defs>
                                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#387ed1" stopOpacity={0.3}/>
                                                        <stop offset="95%" stopColor="#387ed1" stopOpacity={0}/>
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                <XAxis 
                                                    dataKey="name" 
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fontSize: 12, fill: '#666' }}
                                                />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Area 
                                                    type="monotone" 
                                                    dataKey="uv" 
                                                    stroke="#387ed1" 
                                                    fillOpacity={1}
                                                    fill="url(#colorValue)" 
                                                    strokeWidth={2}
                                                    activeDot={{ r: 6, stroke: '#387ed1', strokeWidth: 2, fill: '#fff' }}
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
                                <p className="mb-4 text-sm sm:text-base">No orders placed today</p>
                            </div>
                        )}

                        {activeTab === 'positions' && (
                            <div className="text-center py-8 text-gray-500">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp size={24} className="text-gray-400" />
                                </div>
                                <p className="mb-4 text-sm sm:text-base">No open positions</p>
                                <button className="bg-kite-blue text-white px-4 py-2 rounded text-sm font-medium hover:bg-kite-dark-blue transition-colors touch-button">
                                    Start trading
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
                    <Briefcase size={40} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Start investing</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 max-w-md mx-auto">
                        You don't have any stocks in your DEMAT yet. Get started with absolutely free equity delivery investments.
                    </p>
                    <button className="bg-kite-blue text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-kite-dark-blue transition-colors inline-flex items-center gap-2 touch-button mx-auto">
                        <Plus size={16} />
                        Explore stocks
                    </button>
                </div>
            </main>
        </div>
    );
};

export default MainDashboard;