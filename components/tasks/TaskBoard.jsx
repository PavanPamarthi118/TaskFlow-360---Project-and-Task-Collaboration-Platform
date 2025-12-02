'use client';

import TaskCard from './TaskCard';
import { Circle, Clock, CheckCircle } from 'lucide-react';


export default function TaskBoard({ viewMode }) {
    const tasks = {
        todo: [
            {
                id: 1,
                title: 'Design new landing page',
                description: 'Create mockups for the new landing page',
                priority: 'high',
                dueDate: '2025-12-10',
                assignee: 'Pavan Pamarthi',
                tags: ['design', 'ui'],
                project: 'Website Redesign',
            },
            {
                id: 2,
                title: 'Write API documentation',
                description: 'Document all API endpoints',
                priority: 'medium',
                dueDate: '2025-12-15',
                assignee: 'Ajinkya Lele',
                tags: ['documentation'],
                project: 'Mobile App',
            },
        ],
        inProgress: [
            {
                id: 3,
                title: 'Implement user authentication',
                description: 'Add JWT-based authentication',
                priority: 'high',
                dueDate: '2025-12-08',
                assignee: 'Akshay Shettar',
                tags: ['backend', 'security'],
                project: 'Mobile App',
            },
            {
                id: 4,
                title: 'Create email templates',
                description: 'Design responsive email templates',
                priority: 'low',
                dueDate: '2025-12-20',
                assignee: 'Ankush Madhavan Rangaswamy',
                tags: ['design', 'email'],
                project: 'Marketing Campaign',
            },
        ],
        done: [
            {
                id: 5,
                title: 'Set up project repository',
                description: 'Initialize Git repo and CI/CD',
                priority: 'medium',
                dueDate: '2025-11-30',
                assignee: 'Pavan Pamarthi',
                tags: ['devops'],
                project: 'Website Redesign',
            },
        ],
    };

    const columns = [
        { id: 'todo', title: 'To Do', tasks: tasks.todo, icon: Circle, color: 'text-gray-500' },
        { id: 'inProgress', title: 'In Progress', tasks: tasks.inProgress, icon: Clock, color: 'text-blue-500' },
        { id: 'done', title: 'Done', tasks: tasks.done, icon: CheckCircle, color: 'text-green-500' },
    ];

    if (viewMode === 'list') {
        return (
            <div className="bg-white rounded-lg shadow">
                <div className="divide-y">
                    {Object.values(tasks).flat().map((task) => (
                        <div key={task.id} className="p-4 hover:bg-gray-50">
                            <TaskCard task={task} viewMode="list" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((column) => {
                const Icon = column.icon;
                return (
                    <div key={column.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <Icon className={`w-5 h-5 ${column.color}`} />
                            <h2 className="font-bold text-gray-900">{column.title}</h2>
                            <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                                {column.tasks.length}
                            </span>
                        </div>
                        <div className="space-y-3">
                            {column.tasks.map((task) => (
                                <TaskCard key={task.id} task={task} viewMode="board" />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
