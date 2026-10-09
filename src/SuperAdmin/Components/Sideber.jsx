
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
  {
    name: "Dashboard",
    path: "/superadmin",
    icon: LayoutDashboard,
  },
  {
    name: "Role Management",
    path: "/superadmin/role",
    icon: ShieldCheck,
  },
  {
    name: "Manage Users",
    path: "/superadmin/users",
    icon: Users,
  },
  {
    name: "Manage Tasks",
    path: "/superadmin/tasks",
    icon: ClipboardList,
  },
  {
    name: "Task Assignments",
    path: "/superadmin/assignments",
    icon: UserCheck,
  },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col
        bg-[#0b1f33] text-white transition-transform duration-300
        lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-5">
          <div className="flex items-center gap-3">
            <ShieldCheck
              className="text-violet-400"
              size={30}
            />

            <div>
              <h2 className="text-lg font-bold">
                Super Admin
              </h2>
              <p className="text-xs text-slate-400">
                Control Panel
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2 p-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
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
                  `flex items-center gap-3 rounded-xl px-4 py-3
                  transition-colors duration-200 ${
                    isActive
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-950/30"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4 text-xs text-slate-500">
          Super Admin Dashboard · v1.0
        </div>
      </aside>
    </>
  );
}

