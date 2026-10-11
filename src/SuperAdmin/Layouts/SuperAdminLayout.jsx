// import { useState } from "react";
// import { Outlet } from "react-router";
// import Navbar from "../../SuperAdmin/Components/Navber";
// import { SuperAdminProvider } from "../../SuperAdmin/Layouts/SuperAdminContext";
// import SuperAdminSidebar from "../Components/SuperAdminSideber";

// export default function SuperAdminLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <SuperAdminProvider>
//       <div className="min-h-screen bg-slate-50">
//         <SuperAdminSidebar
//           open={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//         />

//         <div className="min-h-screen min-w-0 md:ml-64 flex flex-col">
//           <Navbar onMenuClick={() => setSidebarOpen(true)} />

//           <main className="flex-1 p-4 sm:p-6 lg:p-8">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </SuperAdminProvider>
//   );
// }







import { Outlet } from "react-router";
import SuperAdminSideber from "../Components/SuperAdminSideber";
import { SuperAdminProvider } from "./SuperAdminContext";
import SuperAdminNavbar from "../Components/SuperAdminNavber";


export default function SuperAdminLayout() {


  return (
    <SuperAdminProvider>
      <div className="min-h-screen bg-slate-50">
        <SuperAdminSideber></SuperAdminSideber>

        <div className="min-h-screen min-w-0 md:ml-64 flex flex-col">
        <SuperAdminNavbar></SuperAdminNavbar>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SuperAdminProvider>
  );
}