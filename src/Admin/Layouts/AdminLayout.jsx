import React from 'react';
import Sideber from '../Components/Sideber';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router'; // react-router-dom নিশ্চিত করুন

const AdminLayout = () => {
  return (
    // flex এবং h-screen দিয়ে স্ক্রিনকে পাশাপাশি দুই ভাগে ভাগ করা হয়েছে
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* বাম পাশে সাইডবার */}
      <Sideber />

      {/* ডান পাশে পুরো বাকি অংশ (flex-1) এবং স্ক্রলযোগ্য এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Navber />

        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;