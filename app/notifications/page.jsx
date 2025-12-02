'use client';

import Sidebar from '@/components/layout/Sidebar';
import NotificationList from '@/components/notifications/NotificationList';
import { BellOff } from 'lucide-react';

export default function NotificationsPage() {
    return (
        <Sidebar>
            <div className="space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                        <p className="text-gray-600 mt-1">Stay updated with your activities</p>
                    </div>

                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <BellOff className="w-5 h-5" />
                        <span>Mark All as Read</span>
                    </button>
                </div>

                <NotificationList />
            </div>
        </Sidebar>
    );
}
