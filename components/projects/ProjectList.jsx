'use client';

import { useRouter } from 'next/navigation';
import { Calendar, Users, MoreVertical, FolderOpen } from 'lucide-react';

export default function ProjectList({ searchTerm, filterStatus }) {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website with modern design',
      status: 'active',
      progress: 75,
      dueDate: '2025-12-15',
      owner: 'Pavan Pamarthi',
      members: 8,
      tasks: { total: 24, completed: 18 },
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Native mobile application for iOS and Android',
      status: 'active',
      progress: 45,
      dueDate: '2025-12-30',
      owner: 'Ajinkya Lele',
      members: 6,
      tasks: { total: 32, completed: 14 },
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q4 marketing campaign across all channels',
      status: 'active',
      progress: 90,
      dueDate: '2025-12-10',
      owner: 'Akshay Shettar',
      members: 5,
      tasks: { total: 15, completed: 14 },
      color: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'Database Migration',
      description: 'Migrate legacy database to new infrastructure',
      status: 'completed',
      progress: 100,
      dueDate: '2025-11-30',
      owner: 'Ankush Madhavan Rangaswamy',
      members: 4,
      tasks: { total: 20, completed: 20 },
      color: 'bg-gray-500',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProjects.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <FolderOpen className="w-16 h-16 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">No projects found</p>
        </div>
      ) : (
        filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                </div>
                <button 
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.members} members</span>
                  </div>
                </div>

                <div className="space-y-1">
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

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    {project.tasks.completed}/{project.tasks.total} tasks
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'active'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
