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
    ChartNoAxesCombined,
    Users,
    CheckCircle2,
    Fingerprint,
} from 'lucide-react';

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

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

        // Demo authentication only.
        // Replace this with your backend login API.
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (
            formData.email === 'admin@gmail.com' &&
            formData.password === 'admin123'
        ) {
            // Demo only: do not use a hardcoded token in production.
            localStorage.setItem('adminToken', 'dummy-admin-token-xyz');
            localStorage.setItem('role', 'admin');

            if (rememberMe) {
                localStorage.setItem('rememberAdmin', 'true');
            } else {
                localStorage.removeItem('rememberAdmin');
            }

            navigate('/admin');
        } else {
            setError('Invalid email or password. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#070b16] text-white selection:bg-blue-500/30">

            {/* Background effects */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-112.5 w-112.5 rounded-full bg-blue-600/20 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-32 h-112.5 w-112.5 rounded-full bg-violet-600/20 blur-[140px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

            <main className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-10">

                <div className="grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/9 bg-[#0c1220]/90 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:min-h-175 lg:grid-cols-2">

                    {/* LEFT PANEL */}
                    <section className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-[#111d38] via-[#10172b] to-[#0b1020] p-10 lg:flex xl:p-14">

                        <div className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}
                        />

                        <div className="absolute -right-20 top-24 h-64 w-64 rounded-full border border-blue-400/10" />
                        <div className="absolute -right-8 top-36 h-48 w-48 rounded-full border border-indigo-400/15" />

                        {/* Logo */}
                        <div className="relative flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/30">
                                <span className="text-2xl font-black">T</span>
                            </div>

                            <div>
                                <h1 className="text-lg font-extrabold tracking-[0.16em]">
                                    Islamic Habit Tracker
                                </h1>
                                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300">
                                    Workspace management
                                </p>
                            </div>
                        </div>

                        {/* Hero content */}
                        <div className="relative my-12">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/8 px-3 py-1.5 text-xs font-medium text-blue-300">
                                <Sparkles size={14} />
                                Your workspace, simplified
                            </div>

                            <h2 className="max-w-md text-4xl font-extrabold leading-[1.2] tracking-tight xl:text-5xl">
                                Manage your team.
                                <span className="mt-2 block bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                                    Achieve more.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                                Everything you need to manage projects, track performance,
                                and keep your team moving forward.
                            </p>

                            {/* Dashboard preview */}
                            <div className="mt-10 rounded-3xl border border-white/10 bg-white/4.5 p-5 shadow-2xl backdrop-blur-xl">

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">Workspace overview</p>
                                        <p className="mt-1 text-xs text-slate-400">
                                            Your team at a glance
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                        <ChartNoAxesCombined size={21} />
                                    </div>
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl border border-white/6 bg-slate-950/40 p-4">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Users size={14} />
                                            Team members
                                        </div>
                                        <p className="mt-3 text-2xl font-bold">1,248</p>
                                        <p className="mt-1 text-[11px] text-emerald-400">
                                            +12% this month
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/6 bg-slate-950/40 p-4">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle2 size={14} />
                                            Completed
                                        </div>
                                        <p className="mt-3 text-2xl font-bold">87%</p>
                                        <p className="mt-1 text-[11px] text-blue-300">
                                            Project progress
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="mb-2 flex justify-between text-xs">
                                        <span className="text-slate-400">Overall productivity</span>
                                        <span className="font-semibold text-blue-300">87%</span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                        <div className="h-full w-[87%] rounded-full bg-linear-to-r from-blue-500 to-violet-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="relative flex items-center justify-between text-xs text-slate-500">
                            <span>© {new Date().getFullYear()} TaskFlow Inc.</span>
                            <span className="flex items-center gap-2">
                                <ShieldCheck size={15} className="text-blue-400" />
                                Secure workspace
                            </span>
                        </div>
                    </section>

                    {/* RIGHT PANEL */}
                    <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">

                        <div className="w-full max-w-md">

                            {/* Mobile logo */}
                            <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/30">
                                    <span className="text-xl font-black">T</span>
                                </div>
                                <span className="text-lg font-extrabold tracking-[0.15em]">
                                    TASKFLOW
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="mb-8">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-linear-to-br from-blue-500/15 to-indigo-500/10 text-blue-300 shadow-inner shadow-blue-500/10">
                                    <ShieldCheck size={28} strokeWidth={1.7} />
                                </div>

                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                                    Administrator access
                                </p>

                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    Welcome back<span className="text-blue-400">.</span>
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    Sign in to access your dashboard and manage your workspace.
                                </p>
                            </div>

                            {/* Error message */}
                            {error && (
                                <div
                                    role="alert"
                                    className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/8 p-4 text-sm text-rose-300"
                                >
                                    <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Login form */}
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                                    >
                                        Email address
                                    </label>

                                    <div className="group relative">
                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400"
                                        />

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            autoComplete="username"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="admin@example.com"
                                            className="w-full rounded-2xl border border-white/9 bg-[#080d18]/80 py-4 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2.5 flex items-center justify-between gap-3">
                                        <label
                                            htmlFor="password"
                                            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                                        >
                                            Password
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setError('Please contact your administrator to reset your password.')
                                            }
                                            className="text-xs font-semibold text-blue-400 transition hover:text-blue-300"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>

                                    <div className="group relative">
                                        <LockKeyhole
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400"
                                        />

                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            autoComplete="current-password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className="w-full rounded-2xl border border-white/9 bg-[#080d18]/80 py-4 pl-12 pr-12 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-500/70 focus:ring-4 focus:ring-blue-500/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember me */}
                                <label className="flex cursor-pointer items-center gap-3 py-1">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 cursor-pointer rounded border-slate-600 bg-slate-900 accent-blue-500 focus:ring-2 focus:ring-blue-500/30"
                                    />

                                    <span className="text-xs text-slate-400">
                                        Keep me signed in on this device
                                    </span>
                                </label>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-600 via-blue-600 to-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Signing you in...
                                        </>
                                    ) : (
                                        <>
                                            Sign in to dashboard
                                            <ArrowRight
                                                size={18}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Security notice */}
                            <div className="mt-8 rounded-2xl border border-white/6 bg-white/2.5 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                        <Fingerprint size={20} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-200">
                                            Protected administrator portal
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Authorized personnel only. Keep your credentials private.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-7 text-center text-xs text-slate-600">
                                © {new Date().getFullYear()} TaskFlow. All rights reserved.
                            </p>

                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AdminLogin;