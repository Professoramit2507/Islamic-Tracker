import React, { useState } from "react";
import { Link } from "react-router";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  LogIn,
} from "lucide-react";
import { motion } from "framer-motion";

// ডানপাশের জন্য একটি প্রিমিয়াম ইসলামিক আর্ট বা মস্ক ইমেজ ব্যবহার করুন
import loginBg from "../../../assets/islamic-mosque-door-with-moon-palm-trees-night.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // আপনার লগইন লজিক এখানে যুক্ত করুন
    console.log("Logging in with:", { email, password });
  };

  // সব সময় চলতে থাকা ফ্লোটিং অ্যানিমেশন কনফিগারেশন
  const infiniteFloating = {
    animate: {
      y: [0, -12, 0], // উপর-নিচ মুভমেন্ট
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity, // সব সময় চলবে
      },
    },
  };

  return (
    <section className="w-full min-h-screen bg-[#faf7f2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
       
      <div className="max-w-5xl w-full bg-white rounded-[36px] border border-slate-950/5 shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* LEFT SECTION: INPUT BOXES */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="space-y-6 max-w-sm w-full mx-auto">
            {/* হেডার ও ব্র্যান্ডিং */}
           
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-3 py-1 rounded-full text-[11px] font-bold text-teal-900 tracking-wide">
                <Sparkles className="w-3 h-3 text-teal-600 animate-pulse" />{" "}
                Welcome Back
              </div>
              <h2 className="text-3xl font-serif font-black text-teal-950 tracking-tight">
                Sign In to Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                আপনার দ্বীনি রুটিন বজায় রাখতে অ্যাকাউন্টে লগইন করুন।
              </p>
            </div>

            {/* লগইন ফর্ম */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              {/* ইমেইল ইনপুট */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">
                  Email Address
                </label>
                <div className="relative flex items-center bg-slate-50 border border-slate-200/80 focus-within:border-teal-500 focus-within:bg-white rounded-2xl transition-all group px-3.5 py-3">
                  <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-teal-600 transition-colors shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3 bg-transparent text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>

              {/* পাসওয়ার্ড ইনপুট */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-bold text-teal-600 hover:underline"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative flex items-center bg-slate-50 border border-slate-200/80 focus-within:border-teal-500 focus-within:bg-white rounded-2xl transition-all group px-3.5 py-3">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-teal-600 transition-colors shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-3 pr-8 bg-transparent text-sm font-medium focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* সাবমিট বাটন */}
              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-teal-950 hover:bg-teal-900 text-teal-50 font-bold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-teal-950/10 flex items-center justify-center gap-2 text-sm mt-6 group"
              >
                <span>Sign In</span>
                <LogIn className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </form>

            {/* রেজিস্টার লিংক */}
            <p className="text-center text-xs text-slate-400 font-semibold pt-2">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-teal-600 hover:underline font-bold ml-0.5"
              >
                Register Free
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: IMAGE WITH CONSTANT ANIMATION */}
        <div className="w-full md:w-1/2 relative bg-teal-950 p-4 flex items-center justify-center overflow-hidden border-l border-slate-950/5">
          {/* গ্লসি ব্যাকগ্রাউন্ড ব্লার সার্কেল */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* অ্যানিমেটেড কন্টেইনার (সব সময় মুভ করবে) */}
          <motion.div
            variants={infiniteFloating}
            animate="animate"
            className="w-full h-full relative z-10 p-3 sm:p-6"
          >
            <div className="w-full h-full rounded-[28px] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src={loginBg}
                alt="Islamic Art Vector"
                className="w-full h-full object-cover rounded-[28px]"
              />
              {/* ইমেজের ওপর ডার্ক গ্লসি ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/20 to-transparent pointer-events-none" />

              {/* ইমেজের ভেতরের টেক্সট ওভারলে (Pulse Animation সহ) */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-teal-300"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />{" "}
                  Connection to Deen
                </motion.div>
                <h3 className="text-xl font-serif font-bold leading-tight text-teal-50">
                  "নিয়মিত ছোট আমল আল্লাহর কাছে সবচেয়ে প্রিয়।"
                </h3>
                <p className="text-[11px] text-teal-200/60 font-medium">
                  — আল হাদিস
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;
