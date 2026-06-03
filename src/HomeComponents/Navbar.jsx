import React, { useState } from "react";
import { Link, useLocation } from "react-router"; // react-router-dom হলে dom লিখবেন
import { Menu, X, Compass, CheckSquare, BookOpen, Star, Utensils, BarChart3, Settings, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // নেভিগেশন রুটস এবং আইকন লিস্ট
  const navItems = [
    { path: "/", label: "Home", icon: Compass },
    { path: "/prayer-tracking", label: "Prayer Tracking", icon: CheckSquare },
    { path: "/quran-spiritual", label: "Quran & Spiritual Growth", icon: BookOpen },
    { path: "/zikr-tasbih", label: "Zikr & Tasbih", icon: Star },
    { path: "/halal-food-tracker", label: "Halal Food Tracker", icon: Utensils },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/special-modes", label: "Special Modes", icon: Sparkles },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  // একটি রুট একটিভ আছে কিনা তা চেক করার ফাংশন
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/85 text-white shadow-md border-b border-teal-950/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* লোগো সেকশন */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-lg font-serif font-bold tracking-wide text-teal-50 group-hover:text-teal-400 transition-colors">
                Islamic<span className="text-teal-400 font-sans font-light">App</span>
              </span>
            </Link>
          </div>

          {/* ডেস্কটপ ও ট্যাবলেট মেনু */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive(item.path)
                      ? "bg-teal-500 text-slate-950 shadow-md"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive(item.path) ? "text-slate-950" : "text-teal-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* মোবাইল মেনু হ্যামবার্গার বাটন */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-teal-400 transition-all border border-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু (framer-motion দ্বারা অ্যানিমেটেড) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-950 border-t border-slate-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 shadow-inner">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)} // মেনু আইটেমে ক্লিক করলে মোবাইল মেনু অটো বন্ধ হবে
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive(item.path) ? "text-slate-950" : "text-teal-400"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;