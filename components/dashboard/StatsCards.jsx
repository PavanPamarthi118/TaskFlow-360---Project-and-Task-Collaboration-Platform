'use client';


import { FolderKanban, CheckSquare, Users, TrendingUp } from 'lucide-react';

export default function StatsCards() {
    const stats = [
        {
            title: 'Total Projects',
            value: '12',
            change: '+2 this month',
            icon: FolderKanban,
            color: 'bg-blue-500',
            trend: 'up',
        },
        {
            title: 'Active Tasks',
            value: '48',
            change: '23 completed',
            icon: CheckSquare,
            color: 'bg-green-500',
            trend: 'up',
        },
        {
            title: 'Team Members',
            value: '15',
            change: '+3 new',
            icon: Users,
            color: 'bg-purple-500',
            trend: 'up',
        },
        {
            title: 'Productivity',
            value: '85%',
            change: '+5% from last week',
            icon: TrendingUp,
            color: 'bg-orange-500',
            trend: 'up',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <div key={stat.title} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                <p className="text-sm text-gray-500 mt-2">{stat.change}</p>
                            </div>
                            <div className={`${stat.color} p-3 rounded-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
