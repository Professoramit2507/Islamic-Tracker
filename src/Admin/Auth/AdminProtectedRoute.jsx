import React from 'react';
import { Navigate, useLocation } from 'react-router';

const AdminProtectedRoute = ({ children }) => {
  const location = useLocation();

  // আপনার স্টেট/লোকালস্টোরেজ থেকে টোকেন ও রোল নিন
  const token = localStorage.getItem('adminToken');
  const role = localStorage.getItem('role');

  // লগইন না থাকলে অথবা রোল admin না হলে সোজা লগইন পেজে রিডাইরেক্ট
  if (!token || role !== 'admin') {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // লগইন সফল থাকলে অ্যাডমিন পেজ দেখাবে
  return children;
};

export default AdminProtectedRoute;