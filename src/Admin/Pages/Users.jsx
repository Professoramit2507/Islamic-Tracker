import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Rahim Ahmed',
      email: 'rahim@taskflow.com',
      role: 'Frontend Developer',
      assignedTasks: 4,
      status: 'Active',
      joinedDate: 'Jan 15, 2026',
    },
    {
      id: 2,
      name: 'Sadia Khan',
      email: 'sadia@taskflow.com',
      role: 'Content Specialist',
      assignedTasks: 2,
      status: 'Active',
      joinedDate: 'Feb 10, 2026',
    },
    {
      id: 3,
      name: 'Tanvir Hossain',
      email: 'tanvir@taskflow.com',
      role: 'Backend Developer',
      assignedTasks: 5,
      status: 'Inactive',
      joinedDate: 'Mar 01, 2026',
    },
  ]);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
          : user
      )
    );
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* হেডার */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Team Members</h2>
          <p className="text-sm text-slate-500">
            View assigned personnel, active task loads, and account status.
          </p>
        </div>
        <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors self-start sm:self-auto">
          + Add Member
        </button>
      </div>

      {/* ইউজার টেবিল */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-200">
                <th className="px-6 py-3.5">User</th>
                <th className="px-6 py-3.5">Designation</th>
                <th className="px-6 py-3.5">Active Tasks</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5">Joined</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/75 transition-colors">
                  {/* প্রোফাইল তথ্য */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-semibold flex items-center justify-center text-xs">
                        {user.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-600">{user.role}</td>

                  {/* চলমান টাস্ক সংখ্যা */}
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-700">{user.assignedTasks}</span>
                    <span className="text-xs text-slate-400 ml-1">tasks</span>
                  </td>

                  {/* স্ট্যাটাস ব্যাজ */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-xs text-slate-500">{user.joinedDate}</td>

                  {/* অ্যাকশন বাটন */}
                  <td className="px-6 py-4 text-right space-x-3">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="text-xs font-medium text-blue-600 hover:underline">
                      Assign Task
                    </button>
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

export default Users;