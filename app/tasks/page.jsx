'use client';


import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TaskBoard from '@/components/tasks/TaskBoard';
import TaskModal from '@/components/tasks/TaskModal';
import { Plus, LayoutList, LayoutGrid } from 'lucide-react';

export default function TasksPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState('board');

    return (
        <Sidebar>
            <div className="space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
                        <p className="text-gray-600 mt-1">Manage and track all tasks</p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-white rounded-lg shadow">
                            <button
                                onClick={() => setViewMode('board')}
                                className={`p-2 rounded-l-lg transition-colors ${viewMode === 'board'
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-r-lg transition-colors ${viewMode === 'list'
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <LayoutList className="w-5 h-5" />
                            </button>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            <Plus className="w-5 h-5" />
                            <span>New Task</span>
                        </button>
                    </div>
                </div>

                <TaskBoard viewMode={viewMode} />
            </div>

            {isModalOpen && (
                <TaskModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </Sidebar>
    );
}
