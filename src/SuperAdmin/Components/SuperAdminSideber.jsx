import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  UserCheck,
  ShieldCheck,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/superadmin", icon: LayoutDashboard },
  { name: "Role Management", path: "/superadmin/role", icon: ShieldCheck },
  { name: "Manage Users", path: "/superadmin/users", icon: Users },
  { name: "Manage Tasks", path: "/superadmin/tasks", icon: ClipboardList },
  { name: "Task Assignments", path: "/superadmin/assignments", icon: UserCheck },
];

export default function SuperAdminSidebar({ open, onClose }) {
  return (
    <>
      {/* মোবাইলের ব্যাকড্রপ */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      {/* সাইডবার - md স্ক্রিনে সবসময় দৃশ্যমান থাকবে */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0b1f33] text-white flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* লোগো ও হেডার */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-5 shrink-0">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-violet-400" size={30} />
            <div>
              <h2 className="text-lg font-bold leading-tight">Super Admin</h2>
              <p className="text-xs text-slate-400">Control Panel</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-800 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* মেন্যু আইটেম */}
        <nav className="flex-1 space-y-1.5 p-4 overflow-y-auto">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Main Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/superadmin"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-900/40"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* ফুটার */}
        <div className="border-t border-slate-800 p-4 text-xs text-slate-500 shrink-0">
          Super Admin Dashboard · v1.0
        </div>
      </aside>
    </>
  );
}