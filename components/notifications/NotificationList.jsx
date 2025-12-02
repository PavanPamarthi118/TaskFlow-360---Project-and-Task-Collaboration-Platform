'use client';

import {
    CheckCircle,
    AlertCircle,
    UserPlus,
    FileText,
    MessageSquare,
    Calendar,
    X
} from 'lucide-react';

export default function NotificationList() {
    const notifications = [
        {
            id: 1,
            type: 'success',
            title: 'Task Completed',
            message: 'Homepage design mockups have been approved and marked as complete',
            time: '5 minutes ago',
            read: false,
            icon: CheckCircle,
            color: 'text-green-500',
            bgColor: 'bg-green-50',
        },
        {
            id: 2,
            type: 'warning',
            title: 'Deadline Approaching',
            message: 'Mobile app project is due in 2 days. 45% tasks remaining.',
            time: '1 hour ago',
            read: false,
            icon: AlertCircle,
            color: 'text-orange-500',
            bgColor: 'bg-orange-50',
        },
        {
            id: 3,
            type: 'info',
            title: 'New Comment',
            message: 'Ajinkya Lele commented on "API Documentation" task',
            time: '3 hours ago',
            read: false,
            icon: MessageSquare,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50',
        },
        {
            id: 4,
            type: 'info',
            title: 'Team Member Added',
            message: 'Ankush Madhavan Rangaswamy has joined the Website Redesign project',
            time: '5 hours ago',
            read: true,
            icon: UserPlus,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50',
        },
        {
            id: 5,
            type: 'info',
            title: 'File Uploaded',
            message: 'Akshay Shettar uploaded design-mockup.pdf to Marketing Campaign',
            time: '1 day ago',
            read: true,
            icon: FileText,
            color: 'text-indigo-500',
            bgColor: 'bg-indigo-50',
        },
        {
            id: 6,
            type: 'info',
            title: 'Meeting Scheduled',
            message: 'Team standup meeting scheduled for tomorrow at 10:00 AM',
            time: '2 days ago',
            read: true,
            icon: Calendar,
            color: 'text-pink-500',
            bgColor: 'bg-pink-50',
        },
    ];

    const unreadNotifications = notifications.filter(n => !n.read);
    const readNotifications = notifications.filter(n => n.read);

    const NotificationItem = ({ notification }) => {
        const Icon = notification.icon;
        return (
            <div className={`p-4 border-l-4 ${notification.read ? 'border-gray-200 bg-white' : 'border-primary-500 bg-primary-50'} hover:shadow-md transition-shadow cursor-pointer`}>
                <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${notification.bgColor}`}>
                        <Icon className={`w-5 h-5 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                            <h3 className="text-sm font-semibold text-gray-900">{notification.title}</h3>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <X className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {unreadNotifications.length > 0 && (
                <div className="bg-white rounded-lg shadow">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">
                            Unread ({unreadNotifications.length})
                        </h2>
                    </div>
                    <div className="divide-y">
                        {unreadNotifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                </div>
            )}

            {readNotifications.length > 0 && (
                <div className="bg-white rounded-lg shadow">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Earlier</h2>
                    </div>
                    <div className="divide-y">
                        {readNotifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
