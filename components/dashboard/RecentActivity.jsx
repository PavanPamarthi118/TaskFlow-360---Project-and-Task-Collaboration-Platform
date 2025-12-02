'use client';


import { Activity, UserPlus, FileText, CheckCircle2 } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'task_completed',
      user: 'Pavan Pamarthi',
      action: 'completed task',
      target: 'Homepage Design',
      time: '10 min ago',
      icon: CheckCircle2,
      color: 'bg-green-100 text-green-600', 
    },
    {
      id: 2,
      type: 'member_added',
      user: 'Admin',
      action: 'added',
      target: 'Ajinkya Lele',
      time: '1 hour ago',
      icon: UserPlus,
      color: 'bg-blue-100 text-blue-600', 
    },
    {
      id: 3,
      type: 'file_uploaded',
      user: 'Akshay Shettar',
      action: 'uploaded',
      target: 'design-mockup.pdf',
      time: '2 hours ago',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600', 
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          <Activity className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-semibold">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
