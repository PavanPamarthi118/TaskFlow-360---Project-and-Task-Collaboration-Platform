'use client';

import { useRouter } from 'next/navigation';
import { MoreVertical, Calendar } from 'lucide-react';

export default function ProjectSummary() {
    const router = useRouter();

    const projects = [
        {
            id: 1,
            name: 'Website Redesign',
            progress: 75,
            status: 'In Progress',
            dueDate: '2025-12-15',
            tasks: { total: 24, completed: 18 },
            color: 'bg-blue-500',
        },
        {
            id: 2,
            name: 'Mobile App Development',
            progress: 45,
            status: 'In Progress',
            dueDate: '2025-12-30',
            tasks: { total: 32, completed: 14 },
            color: 'bg-green-500',
        },
        {
            id: 3,
            name: 'Marketing Campaign',
            progress: 90,
            status: 'Almost Done',
            dueDate: '2025-12-10',
            tasks: { total: 15, completed: 14 },
            color: 'bg-purple-500',
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Active Projects</h2>
                    <button
                        onClick={() => router.push('/projects')}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                        View All
                    </button>
                </div>
            </div>

            <div className="p-6 space-y-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => router.push(`/projects/${project.id}`)}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {project.dueDate}
                                    </span>
                                    <span>
                                        {project.tasks.completed}/{project.tasks.total} tasks
                                    </span>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <MoreVertical className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-semibold text-gray-900">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`${project.color} h-2 rounded-full transition-all duration-300`}
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
