'use client';

import { Calendar, User, Tag, MoreVertical } from 'lucide-react';

export default function TaskCard({ task, viewMode }) {
    const priorityColors = {
        high: 'bg-red-100 text-red-700',
        medium: 'bg-yellow-100 text-yellow-700',
        low: 'bg-green-100 text-green-700',
    };

    if (viewMode === 'list') {
        return (
            <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${priorityColors[task.priority]}`}>
                            {task.priority}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {task.dueDate}
                        </span>
                        <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {task.assignee}
                        </span>
                        <span className="text-primary-600">{task.project}</span>
                    </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer">
            <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 text-xs font-semibold rounded ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{task.description}</p>

            <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{task.dueDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span>{task.assignee}</span>
                </div>
            </div>

            {task.tags && task.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                    {task.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs text-primary-600 font-medium">{task.project}</span>
            </div>
        </div>
    );
}
