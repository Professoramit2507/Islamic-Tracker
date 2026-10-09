
import { useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "../../SuperAdmin/Components/Sideber";
import Navbar from "../../SuperAdmin/Components/Navber";

import { SuperAdminProvider } from
  "../../SuperAdmin/Layouts/SuperAdminContext";

export default function SuperAdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SuperAdminProvider>
      <div className="min-h-screen bg-slate-50">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="min-h-screen lg:ml-64">
          <Navbar
            onMenuClick={() => setSidebarOpen(true)}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SuperAdminProvider>
  );
}

