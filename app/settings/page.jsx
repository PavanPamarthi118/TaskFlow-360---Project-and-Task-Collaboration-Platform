'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { User, Lock, Bell, Palette, Save } from 'lucide-react';


export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'preferences', label: 'Preferences', icon: Palette },
    ];

    return (
        <Sidebar>
            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">

                    <div className="lg:w-64">
                        <div className="bg-white rounded-lg shadow p-2 space-y-1">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id
                                                ? 'bg-primary-50 text-primary-600'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow">
                            {activeTab === 'profile' && <ProfileSettings />}
                            {activeTab === 'security' && <SecuritySettings />}
                            {activeTab === 'notifications' && <NotificationSettings />}
                            {activeTab === 'preferences' && <PreferenceSettings />}
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

function ProfileSettings() {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Settings</h2>
            </div>

            <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    PP
                </div>
                <div>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Change Avatar
                    </button>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        defaultValue="Pavan Pamarthi"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        defaultValue="Pavan@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                        type="text"
                        defaultValue="Project Manager"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                        type="text"
                        defaultValue="Product"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                    rows={4}
                    defaultValue="Experienced project manager with a passion for team collaboration."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                />
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200">
                <button className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                </button>
            </div>
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Security Settings</h2>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium text-gray-900">Enable 2FA</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200">
                <button className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Save className="w-5 h-5" />
                    <span>Update Security</span>
                </button>
            </div>
        </div>
    );
}

function NotificationSettings() {
    const notificationOptions = [
        { id: 'email_tasks', label: 'Task assignments', description: 'Get notified when tasks are assigned to you' },
        { id: 'email_comments', label: 'Comments', description: 'Get notified about new comments on your tasks' },
        { id: 'email_deadlines', label: 'Deadlines', description: 'Get reminded about upcoming deadlines' },
        { id: 'email_mentions', label: 'Mentions', description: 'Get notified when someone mentions you' },
        { id: 'email_projects', label: 'Project updates', description: 'Get notified about project status changes' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Notification Settings</h2>
                <p className="text-gray-600">Choose what notifications you want to receive</p>
            </div>

            <div className="space-y-4">
                {notificationOptions.map((option) => (
                    <div key={option.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                            <p className="font-medium text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200">
                <button className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Save className="w-5 h-5" />
                    <span>Save Preferences</span>
                </button>
            </div>
        </div>
    );
}

function PreferenceSettings() {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Preferences</h2>
                <p className="text-gray-600">Customize your experience</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                        <option value="utc">UTC</option>
                        <option value="est">Eastern Time (ET)</option>
                        <option value="pst">Pacific Time (PT)</option>
                        <option value="cst">Central Time (CT)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                        <option value="mdy">MM/DD/YYYY</option>
                        <option value="dmy">DD/MM/YYYY</option>
                        <option value="ymd">YYYY-MM-DD</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200">
                <button className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Save className="w-5 h-5" />
                    <span>Save Preferences</span>
                </button>
            </div>
        </div>
    );
}
