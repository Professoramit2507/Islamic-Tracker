import React from 'react';

const AdminDashboard = () => {
  // ডামি স্ট্যাটস ডাটা
  const stats = [
    { title: 'Total Team Members', value: '24', change: '+2 this week', color: 'border-blue-500' },
    { title: 'Active Tasks', value: '42', change: '8 due today', color: 'border-amber-500' },
    { title: 'Pending Approvals', value: '7', change: 'Action required', color: 'border-rose-500' },
    { title: 'Completed This Month', value: '118', change: '92% completion rate', color: 'border-emerald-500' },
  ];

  // ডামি টাস্ক ডাটা
  const recentTasks = [
    { id: 1, title: 'Fix Auth Redirection Bug', assignee: 'Rahim Ahmed', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Update Landing Page Copy', assignee: 'Sadia Khan', status: 'Pending Review', priority: 'Medium' },
    { id: 3, title: 'Database Indexing Review', assignee: 'Tanvir Hossain', status: 'Completed', priority: 'Low' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Pending Review':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      {/* হেডার */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Admin Dashboard</h2>
        <p className="text-sm text-slate-500">Overview of team activities, workloads, and approvals.</p>
      </div>

      {/* স্ট্যাটস মেট্রিক্স কার্ড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className={`bg-white p-5 rounded-xl border-l-4 shadow-sm border border-slate-200 ${item.color}`}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.title}</p>
            <p className="text-2xl font-bold text-slate-800 mt-2">{item.value}</p>
            <p className="text-xs text-slate-400 mt-1">{item.change}</p>
          </div>
        ))}
      </div>

      {/* সাম্প্রতিক টাস্ক টেবিল */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">Recent Task Assignments</h3>
          <button className="text-sm text-blue-600 hover:underline font-medium">View all</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-100">
                <th className="px-6 py-3">Task Name</th>
                <th className="px-6 py-3">Assignee</th>
                <th className="px-6 py-3">Priority</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {recentTasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/75 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{task.title}</td>
                  <td className="px-6 py-4 text-slate-600">{task.assignee}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-600">{task.priority}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(task.status)}`}>
                      {task.status}
                    </span>
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

export default AdminDashboard;