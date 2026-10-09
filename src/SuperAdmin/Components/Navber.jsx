
import { Menu, Bell, ShieldCheck } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-lg font-bold text-slate-800">
            Admin Panel
          </h1>
          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your team and tasks
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notifications"
          className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100"
        >
          <Bell size={21} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <ShieldCheck size={22} />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Super Admin
            </p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}