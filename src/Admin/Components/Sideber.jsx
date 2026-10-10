import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin', end: true }, // path /admin এবং end: true যুক্ত করা হয়েছে
    { name: 'Team Users', path: '/admin/user' },
    { name: 'Manage Tasks', path: '/admin/task' },
    { name: 'Task Assignment', path: '/admin/approve' },
    { name: 'Reports', path: '/admin/activity' },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col p-4 shadow-lg">
      <div className="text-xl font-bold pb-6 border-b border-slate-700 tracking-wide text-center">
        Admin Panel
      </div>

      <nav className="flex-1 mt-6 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end} // end প্রপ দিলে শুধু নির্দিষ্ট পাথে গেলেই একটিভ হবে
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-700">
        <button
          onClick={() => console.log('Logout')}
          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;