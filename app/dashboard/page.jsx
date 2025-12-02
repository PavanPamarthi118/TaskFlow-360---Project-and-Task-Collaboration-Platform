'use client';

import Sidebar from '@/components/layout/Sidebar';
import StatsCards from '@/components/dashboard/StatsCards';
import ProjectSummary from '@/components/dashboard/ProjectSummary';
import TaskStatusChart from '@/components/dashboard/TaskStatusChart';
import ProductivityChart from '@/components/dashboard/ProductivityChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import NotificationFeed from '@/components/dashboard/NotificationFeed';

export default function DashboardPage() {
    return (
        <Sidebar>
            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600 mt-1">Welcome back! Here is your overview</p>
                </div>

                <StatsCards />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 space-y-6">
                        <ProjectSummary />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TaskStatusChart />
                            <ProductivityChart />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <NotificationFeed />
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
