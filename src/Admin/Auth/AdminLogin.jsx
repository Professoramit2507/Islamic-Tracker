import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setError('');

  // ডামি ক্রেডেনশিয়াল ভ্যালিডেশন
  if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
    localStorage.setItem('adminToken', 'dummy-admin-token-xyz');
    localStorage.setItem('role', 'admin');
    navigate('/admin');
  } else {
    setError('ভুল ইমেইল বা পাসওয়ার্ড! ব্যবহার করুন: admin@taskflow.com / admin123');
  }
};

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8 space-y-6">
        {/* ব্র্যান্ডিং হেডার */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg mb-2">
            A
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Admin Portal</h2>
          <p className="text-sm text-slate-400">Sign in to manage tasks and team members</p>
        </div>

        {/* এরর মেসেজ */}
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* ফর্ম */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0" />
              <span>Remember me</span>
            </label>
            <button type="button" className="hover:text-blue-400 transition-colors">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg shadow transition-colors"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="pt-4 border-t border-slate-700/60 text-center">
          <p className="text-xs text-slate-500">
            Unauthorized access is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;