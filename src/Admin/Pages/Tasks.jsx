import React, { useState } from 'react';

const Tasks = () => {
  const [tasks, ] = useState([
    {
      id: 1,
      title: 'Fix Auth Redirection Bug',
      category: 'Bug Fix',
      assignee: 'Rahim Ahmed',
      deadline: '2026-10-15',
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Update Landing Page Copy',
      category: 'Marketing',
      assignee: 'Sadia Khan',
      deadline: '2026-10-18',
      priority: 'Medium',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Database Indexing Optimization',
      category: 'Backend',
      assignee: 'Tanvir Hossain',
      deadline: '2026-10-12',
      priority: 'High',
      status: 'Completed',
    },
  ]);

  const [filter, setFilter] = useState('All');

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((t) => t.status === filter);

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-100 text-rose-700';
      case 'Medium':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* হেডার ও অ্যাকশন বাটন */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Task Management</h2>
          <p className="text-sm text-slate-500">Create, monitor, and update team deliverables.</p>
        </div>
        <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors self-start sm:self-auto">
          + Create New Task
        </button>
      </div>

      {/* ফিল্টার ট্যাব */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        {['All', 'In Progress', 'Pending', 'Completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              filter === tab
                ? 'bg-slate-800 text-white'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* টাস্ক টেবিল */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-200">
                <th className="px-6 py-3.5">Task Details</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Assignee</th>
                <th className="px-6 py-3.5">Priority</th>
                <th className="px-6 py-3.5">Deadline</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/75 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800">{task.title}</p>
                    <span className="text-xs text-slate-400">ID: #{task.id}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{task.category}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{task.assignee}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getPriorityBadge(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{task.deadline}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-blue-600 hover:underline text-xs font-medium">Edit</button>
                    <button className="text-rose-600 hover:underline text-xs font-medium">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;