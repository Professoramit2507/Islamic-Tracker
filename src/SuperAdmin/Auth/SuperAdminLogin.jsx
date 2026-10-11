import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Fingerprint,
} from 'lucide-react';

const SuperAdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Replace this demo check with your backend API.
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (
        formData.email === 'superadmin@gmail.com' &&
        formData.password === 'superadmin123'
      ) {
        // Demo only. Use a real server-issued session/token in production.
        localStorage.setItem('superAdminToken', 'demo-superadmin-token');
        localStorage.setItem('role', 'superadmin');

        navigate('/superadmin');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F1F5FB] px-4 py-10 sm:px-6">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/50 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-[100px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white bg-white/80 shadow-2xl shadow-slate-300/40 backdrop-blur-xl lg:grid-cols-2">

        {/* Left panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#EAF2FF] via-[#F3F6FF] to-[#EDEBFF] p-10 lg:flex xl:p-12">

          <div className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-blue-300/40" />
          <div className="absolute -right-8 top-32 h-48 w-48 rounded-full border border-indigo-300/40" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-[0.14em] text-slate-800">
                TASKFLOW
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Enterprise control
              </p>
            </div>
          </div>

          <div className="relative my-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-2 text-xs font-semibold text-blue-700">
              <Sparkles size={15} />
              Super Admin Workspace
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-800 xl:text-5xl">
              Complete control.
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                One workspace.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Manage administrators, oversee your organization, and control
              workspace access from one secure dashboard.
            </p>

            <div className="mt-10 space-y-4 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-lg shadow-blue-900/5">
              {[
                'Manage admin accounts',
                'Control system permissions',
                'Monitor workspace activity',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={15} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-slate-500">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>

        {/* Right panel */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-14">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-9 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <ShieldCheck size={24} />
              </div>
              <span className="font-extrabold tracking-widest text-slate-800">
                TASKFLOW
              </span>
            </div>

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                <Fingerprint size={30} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Restricted access
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                Super Admin
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Sign in to access your master control panel.
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="superadmin-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="group relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600"
                  />

                  <input
                    id="superadmin-email"
                    type="email"
                    name="email"
                    autoComplete="username"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="superadmin@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FAFE] py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="superadmin-password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="group relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600"
                  />

                  <input
                    id="superadmin-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FAFE] py-3.5 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Access Super Admin
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-4">
              <ShieldCheck size={19} className="mt-0.5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-slate-700">
                  Secure administrator access
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  This area is intended for authorized super administrators only.
                </p>
              </div>
            </div>

            <p className="mt-7 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} TaskFlow Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;