'use client';


import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TeamList from '@/components/team/TeamList';
import InviteModal from '@/components/team/InviteModal';
import { UserPlus } from 'lucide-react';

export default function TeamPage() {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    return (
        <Sidebar>
            <div className="space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Team</h1>
                        <p className="text-gray-600 mt-1">Manage your team members</p>
                    </div>

                    <button
                        onClick={() => setIsInviteModalOpen(true)}
                        className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        <UserPlus className="w-5 h-5" />
                        <span>Invite Member</span>
                    </button>
                </div>

                <TeamList />
            </div>

            {isInviteModalOpen && (
                <InviteModal
                    isOpen={isInviteModalOpen}
                    onClose={() => setIsInviteModalOpen(false)}
                />
            )}
        </Sidebar>
    );
}
