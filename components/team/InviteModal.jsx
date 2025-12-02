'use client';

import { useState } from 'react';
import { X } from 'lucide-react';


export default function InviteModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        email: '',
        role: 'user',
        projects: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Invite data:', formData);
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Invite Team Member</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            placeholder="colleague@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                            Role *
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        >
                            <option value="user">Team Member</option>
                            <option value="manager">Project Manager</option>
                            <option value="admin">Admin</option>
                        </select>
                        <p className="mt-2 text-sm text-gray-500">
                            {formData.role === 'admin' && 'Can have access to all features and settings'}
                            {formData.role === 'manager' && 'Can create projects and manage team tasks'}
                            {formData.role === 'user' && 'Can view and update assigned tasks'}
                        </p>
                    </div>

                    <div>
                        <label htmlFor="projects" className="block text-sm font-medium text-gray-700 mb-2">
                            Assign to Projects (Optional)
                        </label>
                        <select
                            id="projects"
                            name="projects"
                            multiple
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            size="4"
                        >
                            <option value="1">Website Redesign</option>
                            <option value="2">Mobile App Development</option>
                            <option value="3">Marketing Campaign</option>
                            <option value="4">Database Migration</option>
                        </select>
                        <p className="mt-2 text-sm text-gray-500">
                            Hold Ctrl/Cmd to select multiple projects
                        </p>
                    </div>

                    <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Send Invitation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
