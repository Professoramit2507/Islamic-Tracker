import React, { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, UserPlus, User, Home } from "lucide-react";
import { motion } from "framer-motion";


import registerBg from "../../../assets/top-view-islamic-new-year-concept.jpg"; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("পাসওয়ার্ড দুটি মেলেনি!");
      return;
    }
    console.log("Registering user:", { name, email, password });
  };

 
  const infiniteFloating = {
    animate: {
      y: [0, 15, 0], 
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="w-full h-screen bg-[#faf7f2] flex items-center justify-center p-0 md:p-6 overflow-hidden font-sans text-slate-800 relative">
      
  
      <div className="absolute top-4 left-4 z-50">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        
        </motion.div>
      </div>

      {/* FULL DISPLAY MAIN CONTAINER */}
      <div className="w-full h-full md:max-w-[1300px] md:h-[90vh] bg-white md:rounded-[40px] border border-slate-950/5 md:shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT SECTION: FORM INPUTS */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 h-full p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto"
        >
          <div className="space-y-6 max-w-sm w-full mx-auto py-4">
            
            {/* হেডার */}
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-3 py-1 rounded-full text-[11px] font-bold text-teal-900 tracking-wide">
                <Sparkles className="w-3 h-3 text-teal-600 animate-pulse" /> Join Us Today
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-black text-teal-950 tracking-tight">
                Create Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                আজই যুক্ত হোন এবং আপনার আধ্যাত্মিক সফরকে সুন্দরভাবে ট্র্যাক করুন।
              </p>
            </div>

            {/* ফর্ম */}
            <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
              
              {/* ফুল নেম ইনপুট */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">Full Name</label>
                <div className="relative flex items-center bg-slate-50 border border-slate-200/80 focus-within:border-teal-500 focus-within:bg-white rounded-2xl transition-all group px-3.5 py-3">
                  <User className="w-4 h-4 text-slate-400 group-focus-within:text-teal-600 transition-colors shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="Amit Dev"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-3 bg-transparent text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>

              {/* ইমেইল ইনপুট */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">Email Address</label>
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
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">Password</label>
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
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* কনফার্ম পাসওয়ার্ড ইনপুট */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">Confirm Password</label>
                <div className="relative flex items-center bg-slate-50 border border-slate-200/80 focus-within:border-teal-500 focus-within:bg-white rounded-2xl transition-all group px-3.5 py-3">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-teal-600 transition-colors shrink-0" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-3 pr-8 bg-transparent text-sm font-medium focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* সাবমিট বাটন */}
              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-teal-950 hover:bg-teal-900 text-teal-50 font-bold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-teal-950/10 flex items-center justify-center gap-2 text-sm mt-4 group"
              >
                <span>Register Now</span>
                <UserPlus className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </form>

            {/* লগইন লিংক */}
            <p className="text-center text-xs text-slate-400 font-semibold pt-1">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-600 hover:underline font-bold ml-0.5">
                Sign In
              </Link>
            </p>

          </div>
        </motion.div>

        {/* RIGHT SECTION: FULL DISPLAY IMAGE WITH INFINITE ANIMATION */}
        <div className="hidden md:flex w-1/2 h-full relative bg-teal-950 p-6 items-center justify-center overflow-hidden border-l border-slate-950/5">
          
          {/* ব্যাকগ্রাউন্ড লাইটিং ব্লার ইফেক্ট */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* ইমেজের মেইন অ্যানিমেটেড পার্ট (সব সময় লুপে চলবে) */}
          <motion.div 
            variants={infiniteFloating}
            animate="animate"
            className="w-full h-full relative z-10"
          >
            <div className="w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src={registerBg} 
                alt="Islamic Spiritual Concept" 
                className="w-full h-full object-cover rounded-[32px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent pointer-events-none" />
              
              {/* টেক্সট ওভারলে উইজেট */}
              <div className="absolute bottom-10 left-10 right-10 text-white space-y-3">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-teal-300"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Spiritual Growth
                </motion.div>
                <h3 className="text-2xl font-serif font-bold leading-snug text-teal-50 max-w-sm">
                  "নিশ্চয়ই আল্লাহর স্মরণে হৃদয়সমূহ প্রশান্ত হয়।"
                </h3>
                <p className="text-xs text-teal-200/60 font-medium">— সূরা আর-রাদ, আয়াত ২৮</p>
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default Register;