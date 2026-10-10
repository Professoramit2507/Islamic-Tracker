import React from 'react';

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm">
      {/* বাম পাশ: পেজ টাইটেল বা সার্চ বার */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-slate-800 hidden sm:block">
          Overview
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks, users..."
            className="w-48 sm:w-64 pl-3 pr-4 py-1.5 text-sm bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* ডান পাশ: নোটিফিকেশন ও প্রোফাইল */}
      <div className="flex items-center gap-4">
        {/* নোটিফিকেশন আইকন বাটন */}
        <button 
          aria-label="Notifications"
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <span className="text-xl">🔔</span>
          {/* নোটিফিকেশন ডট */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* প্রোফাইল ব্যাজ */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-medium flex items-center justify-center text-sm">
            AD
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-slate-800 leading-tight">Admin User</p>
            <p className="text-xs text-slate-500">admin@taskflow.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;