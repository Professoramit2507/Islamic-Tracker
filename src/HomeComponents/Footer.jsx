import React from 'react';
import { Link } from 'react-router'; 
import { Compass,  ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-teal-950/40 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাবস্ট্রাক্ট শ্যাডো ইফেক্ট */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* অ্যাপ্লিকেশন পরিচিতি ব্র্যান্ডিং */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center font-serif font-black text-slate-950 shadow-md">
                আ
              </div>
              <span className="text-base font-serif font-bold tracking-wide text-teal-50 group-hover:text-teal-400 transition-colors">
                Islamic<span className="text-teal-400 font-sans font-light">App</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-medium max-w-sm">
              আমাদের মূল লক্ষ্য আধুনিক প্রযুক্তির সঠিক সমন্বয়ে আপনার দৈনন্দিন ইবাদত, সালাত ট্র্যাকিং, কুরআন পাঠ ও একটি নিয়মতান্ত্রিক হালাল লাইফস্টাইল গড়ে তুলতে একনিষ্ঠভাবে সাহায্য করা।
            </p>
          </div>

          {/* কুইক লিংকস মডিউল */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors flex items-center gap-1 group">
                  হোম <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-teal-400 transition-colors flex items-center gap-1 group">
                  সেটিংস <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/special-modes" className="hover:text-teal-400 transition-colors flex items-center gap-1 group">
                  স্পেশাল মোড <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-teal-400 transition-colors flex items-center gap-1 group">
                  অ্যানালিটিক্স <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-teal-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* সোশ্যাল কানেক্টিভিটি সেকশন */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200">Connect With Us</h3>
            <p className="text-xs text-slate-500 font-medium">অ্যাপ্লিকেশনের নতুন আপডেট ও দ্বীনি কন্টেন্ট পেতে যুক্ত থাকুন আমাদের সাথে।</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-400 hover:text-blue-500 transition-all active:scale-95">
                {/* <Facebook className="w-4 h-4" /> */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-400 hover:text-sky-400 transition-all active:scale-95">
                {/* <Twitter className="w-4 h-4" /> */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-400 hover:text-pink-500 transition-all active:scale-95">
                {/* <Instagram className="w-4 h-4" /> */}
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-400 hover:text-red-500 transition-all active:scale-95">
                {/* <Youtube className="w-4 h-4" /> */}
              </a>
            </div>
          </div>

        </div>

        {/* ফুটার বটম লাইন ও কপিরাইট */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-500">
          <p>&copy; 2026 Islamic App. All rights reserved.</p>
          <p className="flex items-center gap-1 font-sans">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> for the Muslim Ummah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;