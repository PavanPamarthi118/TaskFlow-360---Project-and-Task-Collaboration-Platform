'use client';

import { Mail, MoreVertical, Shield, User, Crown } from 'lucide-react';

export default function TeamList() {
    const members = [
        {
            id: 1,
            name: 'Pavan Pamarthi',
            email: 'Pavan@example.com',
            role: 'admin',
            avatar: null,
            projects: 5,
            tasks: 12,
            status: 'active',
            joinedDate: '2025-01-15',
        },
        {
            id: 2,
            name: 'Ajinkya Lele',
            email: 'Ajinkya@example.com',
            role: 'manager',
            avatar: null,
            projects: 3,
            tasks: 8,
            status: 'active',
            joinedDate: '2025-02-20',
        },
        {
            id: 3,
            name: 'Akshay Shettar',
            email: 'Akshay@example.com',
            role: 'user',
            avatar: null,
            projects: 2,
            tasks: 15,
            status: 'active',
            joinedDate: '2025-03-10',
        },
        {
            id: 4,
            name: 'Ankush Madhavan Rangaswamy',
            email: 'Ankush@example.com',
            role: 'user',
            avatar: null,
            projects: 4,
            tasks: 10,
            status: 'active',
            joinedDate: '2025-04-05',
        },
    ];

    const getRoleIcon = (role) => {
        switch (role) {
            case 'admin':
                return <Crown className="w-5 h-5 text-purple-600" />;
            case 'manager':
                return <Shield className="w-5 h-5 text-blue-600" />;
            default:
                return <User className="w-5 h-5 text-gray-600" />;
        }
    };

    const getRoleBadge = (role) => {
        const styles = {
            admin: 'bg-purple-100 text-purple-700',
            manager: 'bg-blue-100 text-blue-700',
            user: 'bg-gray-100 text-gray-700',
        };
        return styles[role] || styles.user;
    };

    return (
        <div className="bg-white rounded-lg shadow">

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Member
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Projects
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tasks
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Joined
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {members.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Mail className="w-3 h-3 mr-1" />
                                                {member.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        {getRoleIcon(member.role)}
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getRoleBadge(member.role)}`}>
                                            {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{member.projects}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{member.tasks}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{member.joinedDate}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <MoreVertical className="w-5 h-5 text-gray-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
