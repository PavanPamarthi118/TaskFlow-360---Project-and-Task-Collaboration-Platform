'use client';

import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function NotificationFeed() {
    const notifications = [
        {
            id: 1,
            type: 'success',
            title: 'Task Completed',
            message: 'Website redesign mockups approved',
            time: '5 min ago',
            icon: CheckCircle,
            color: 'text-green-500',
        },
        {
            id: 2,
            type: 'warning',
            title: 'Deadline Approaching',
            message: 'Mobile app project due in 2 days',
            time: '1 hour ago',
            icon: AlertCircle,
            color: 'text-orange-500',
        },
        {
            id: 3,
            type: 'info',
            title: 'New Comment',
            message: 'Ajinkya commented on your task',
            time: '3 hours ago',
            icon: Info,
            color: 'text-blue-500',
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                    <Bell className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                {notifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                        <div
                            key={notification.id}
                            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                            <Icon className={`w-5 h-5 mt-0.5 ${notification.color}`} />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900">{notification.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
