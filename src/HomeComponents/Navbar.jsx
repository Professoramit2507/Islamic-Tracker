import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Compass,
  CheckSquare,
  BookOpen,
  Star,
  Utensils,
  BarChart3,
  Settings,
  Sparkles,
  LogIn,
  UserPlus,
  Languages,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../src/assets/logo.jpg"

import { useLanguage } from "../Components/Language/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const { toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t("nav", "home"), icon: Compass, },
    { path: "/prayer-tracking", label: t("nav", "prayer"), icon: CheckSquare, },
    { path: "/quran-spiritual", label: t("nav", "quran"), icon: BookOpen, },
    { path: "/zikr-tasbih", label: t("nav", "zikr"), icon: Star, },
    { path: "/halal-food-tracker", label: t("nav", "halal"), icon: Utensils, },
    { path: "/analytics", label: t("nav", "analytics"), icon: BarChart3, },
    { path: "/special-modes", label: t("nav", "specialModes"), icon: Sparkles, },
    { path: "/settings", label: t("nav", "settings"), icon: Settings, },
    // { path: "/language", label: t("nav", "language"), icon: Languages, },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/85 text-white shadow-md border-b border-teal-950/20 backdrop-blur-md">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* লোগো সেকশন */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-linear-to-tr from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center font-serif font-black text-slate-950 text-sm shadow-md">
                <img src={logo} alt="Islamic Logo" />
              </div>
              <span className="text-base font-serif font-bold tracking-wide text-teal-50 group-hover:text-teal-400 transition-colors">
                Islamic
                <span className="text-teal-400 font-sans font-light">App</span>
              </span>
            </Link>
          </div>


          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] xl:text-xs font-bold transition-all ${isActive(item.path)
                    ? "bg-teal-500 text-slate-950 shadow-md"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${isActive(item.path) ? "text-slate-950" : "text-teal-400"}`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}


            {/* Language Button */}
            <button onClick={toggleLanguage} className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] xl:text-xs font-bold text-teal-300 hover:bg-white/10 hover:text-white transition-all" >
              <Languages className="w-3.5 h-3.5" /> <span> {t("nav", "Language")} </span>
            </button>


            <div className="flex items-center gap-2 pl-1">
              <Link
                to="/login"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all"
              >
                <LogIn className="w-3.5 h-3.5 text-teal-400" />
                <span>{t("nav", "login")}</span>
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-purple-600 text-white rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>{t("nav", "register")}</span>
              </Link>
            </div>
          </div>


          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-teal-400 transition-all border border-white/5 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-950 border-t border-slate-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">

              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive(item.path)
                        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-300 hover:bg-white/5"
                        }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${isActive(item.path) ? "text-slate-950" : "text-teal-400"}`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>


              <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row gap-2">

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center gap-2">

                  {/* Mobile Language Button */}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold"
                  >
                    <Languages className="w-4 h-4" />
                    <span>{t("nav", "Language")}</span>
                  </button>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-teal-400 transition-all border border-white/5 focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    {isOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </button>

                </div>


                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-slate-300 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <LogIn className="w-4 h-4 text-teal-400" />
                  {t("nav", "login")}
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold bg-purple-700 text-white rounded-xl shadow-md"
                >
                  <UserPlus className="w-4 h-4" />
                  {t("nav", "register")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

