'use client';


import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/slices/authSlice';
import {
    LayoutDashboard,
    FolderKanban,
    CheckSquare,
    Users,
    Bell,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';


export default function Sidebar({ children }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user } = useSelector((state) => state.auth);
    const { unreadCount } = useSelector((state) => state.notifications);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //State to control mobile menu visibility

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FolderKanban, label: 'Projects', path: '/projects' },
        { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
        { icon: Users, label: 'Team', path: '/team' },
        { icon: Bell, label: 'Notifications', path: '/notifications', badge: unreadCount },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">

            <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300`}>
                <div className="flex flex-col h-full">

                    <div className="flex items-center justify-between h-16 px-6 border-b">
                        <h1 className="text-xl font-bold text-primary-600">TaskFlow 360</h1>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 border-b">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
                                <p className="text-xs text-gray-500 capitalize">{user?.role || 'Member'}</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => {
                                        router.push(item.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                    {item.badge > 0 && (
                                        <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <div className="flex-1 flex flex-col overflow-hidden">

                <header className="h-16 bg-white border-b flex items-center justify-between px-6 lg:px-8">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Bell className="w-5 h-5" />
                            {unreadCount > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            )}
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
