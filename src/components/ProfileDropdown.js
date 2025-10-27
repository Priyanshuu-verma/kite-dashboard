import React, { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const ProfileDropdown = ({ onClose, icons }) => {
    const dropdownRef = useRef(null);
    useOnClickOutside(dropdownRef, onClose);

    const { Settings, Compass, Box, HelpCircle, Users, Keyboard, BookOpen, LogOut } = icons;

    const menuItems = [
        { Icon: Compass, text: 'Console' },
        { Icon: Box, text: 'Coin' },
        { Icon: HelpCircle, text: 'Support' },
        { Icon: Users, text: 'Invite friends' },
        { Icon: Keyboard, text: 'Keyboard shortcuts' },
        { Icon: BookOpen, text: 'User manual' },
    ];

    if (!Settings) {
        return <div ref={dropdownRef} className="absolute top-12 right-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4">Loading icons...</div>;
    }

    return (
        <div ref={dropdownRef} className="absolute top-12 right-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <div>
                    <p className="font-semibold text-base">Priyanshu Verma</p>
                    <p className="text-sm text-gray-500">priyanshuu0106@gmail.com</p>
                </div>
                <a href="#" className="text-blue-600 text-sm">
                    <Settings size={18} />
                </a>
            </div>

            <div className="flex justify-between items-center p-4">
                <span className="text-sm">Privacy mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <div className="border-t border-gray-100">
                {menuItems.map((item, index) => {
                    const IconComponent = item.Icon;
                    return (
                        <a key={index} href="#" className="flex items-center gap-3 p-4 text-sm text-gray-700 hover:bg-gray-50">
                            {IconComponent && <IconComponent size={18} className="text-gray-500" />}
                            <span>{item.text}</span>
                        </a>
                    );
                })}
            </div>

            <div className="border-t border-gray-100">
                <a href="#" className="flex items-center gap-3 p-4 text-sm text-gray-700 hover:bg-gray-50">
                    {LogOut && <LogOut size={18} className="text-gray-500" />}
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
};

export default ProfileDropdown;