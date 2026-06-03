import React, { useState } from 'react';
import { ArrowLeft, Settings as SettingsIcon, MapPin, Bell, Eye, Database, Info, Shield } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Settings = () => {
  const navigate = useNavigate();

  // সেটিংসের বিভিন্ন স্টেট (ইউজার ইন্টারঅ্যাকশনের জন্য)
  const [isGpsOn, setIsGpsOn] = useState(true);
  const [asrMethod, setAsrMethod] = useState('hanafi');
  const [fontSize, setFontSize] = useState(24);
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [selectedAzan, setSelectedAzan] = useState('madinah');

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Deep Slate Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-slate-700/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
          
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">App Configuration</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-slate-800/60 border border-slate-700/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-slate-300">
            <SettingsIcon className="w-3.5 h-3.5 text-slate-400" /> অ্যাপ সেটিংস
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-50">কনফিগারেশন ড্যাশবোর্ড</h1>
          <p className="text-slate-300/70 text-xs md:text-sm">লোকেশন, আজান নোটিফিকেশন এবং ডিসপ্লে কাস্টমাইজ করুন</p>
        </div>
      </div>

      {/* মেইন সেটিংস প্যানেল */}
      <main className="max-w-2xl mx-auto px-6 -mt-10 relative z-20 space-y-6">
        
        {/* সেকশন ১: লোকেশন ও জিপিএস */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-5 rounded-2xl border border-slate-950/5 shadow-md space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <MapPin className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">লোকেশন ও সালাত মেথড</h3>
          </div>

          {/* টগল বাটন ১ */}
          <div className="flex items-center justify-between p-1">
            <div>
              <h4 className="text-sm font-bold text-slate-800">অটো লোকেশন (GPS)</h4>
              <p className="text-xs text-slate-400">সঠিক নামাজের সময় পেতে জিপিএস ব্যবহার করুন।</p>
            </div>
            <button 
              onClick={() => setIsGpsOn(!isGpsOn)}
              className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${isGpsOn ? 'bg-slate-900' : 'bg-slate-200'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isGpsOn ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* ড্রপডাউন অপশন */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-50">
            <div>
              <h4 className="text-sm font-bold text-slate-800">আসর সালাত গণনা পদ্ধতি</h4>
              <p className="text-xs text-slate-400">হানাফি মাযহাবে আসরের সময় একটু দেরিতে শুরু হয়।</p>
            </div>
            <select 
              value={asrMethod} 
              onChange={(e) => setAsrMethod(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              <option value="hanafi">হানাফি (Hanafi)</option>
              <option value="standard">শাফেয়ি/মালেকি (Standard)</option>
            </select>
          </div>
        </motion.div>

        {/* সেকশন ২: নোটিফিকেশন ও আজান */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white p-5 rounded-2xl border border-slate-950/5 shadow-md space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Bell className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">নোটিফিকেশন ও আজান অ্যালার্ট</h3>
          </div>

          <div className="flex items-center justify-between p-1">
            <div>
              <h4 className="text-sm font-bold text-slate-800">নামাজের সময়সূচী নোটিফিকেশন</h4>
              <p className="text-xs text-slate-400">প্রতি ওয়াক্তের শুরুতে পুশ নোটিফিকেশন পাবেন।</p>
            </div>
            <button 
              onClick={() => setIsNotificationOn(!isNotificationOn)}
              className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${isNotificationOn ? 'bg-slate-900' : 'bg-slate-200'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isNotificationOn ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>

          {isNotificationOn && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-50">
              <div>
                <h4 className="text-sm font-bold text-slate-800">আজানের শব্দ নির্বাচন</h4>
                <p className="text-xs text-slate-400">নোটিফিকেশনের সময় যে আজানটি বাজবে।</p>
              </div>
              <select 
                value={selectedAzan} 
                onChange={(e) => setSelectedAzan(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                <option value="madinah">মদিনা শরিফ আজান</option>
                <option value="makkah">মক্কা শরিফ আজান</option>
                <option value="beep">শুধু অ্যালার্ট টিউন (Beep)</option>
              </select>
            </div>
          )}
        </motion.div>

        {/* সেকশন ৩: ডিসপ্লে ও টেক্সট সাইজ */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-5 rounded-2xl border border-slate-950/5 shadow-md space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Eye className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">ডিসপ্লে ও কুরআন ফন্ট</h3>
          </div>

          <div className="space-y-2 p-1">
            <div className="flex justify-between items-center text-sm font-bold text-slate-800">
              <h4>আরবি লেখার সাইজ (Font Size)</h4>
              <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-xs">{fontSize}px</span>
            </div>
            {/* স্লাইডার বাটন */}
            <input 
              type="range" 
              min="16" 
              max="40" 
              value={fontSize} 
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-slate-900 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
            />
            {/* প্রিভিউ বক্স */}
            <div className="bg-[#faf7f2] p-3 rounded-xl text-center border border-dashed border-slate-200 mt-2">
              <p style={{ fontSize: `${fontSize}px` }} className="font-serif font-bold text-slate-800 leading-loose">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-[10px] text-slate-400 mt-1">টেক্সট সাইজ প্রিভিউ</p>
            </div>
          </div>
        </motion.div>

        {/* সেকশন ৪: ডাটা ব্যাকআপ ও রিসেট */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white p-5 rounded-2xl border border-slate-950/5 shadow-md space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Database className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">ডাটা স্টোরেজ</h3>
          </div>
          <div className="flex items-center justify-between p-1">
            <div>
              <h4 className="text-sm font-bold text-slate-800">লোকাল ট্র্যাকার ডাটা ক্লিয়ার</h4>
              <p className="text-xs text-slate-400">আপনার সালাত হিস্ট্রি ও জিকির প্রোগ্রেস মুছে যাবে।</p>
            </div>
            <button 
              onClick={() => alert('আপনার ডাটা সফলভাবে রিসেট করা হয়েছে!')}
              className="text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-100 px-3 py-1.5 rounded-xl transition-all active:scale-95"
            >
              রিসেট ডাটা
            </button>
          </div>
        </motion.div>

        {/* ইনফো ফুটার */}
        <div className="text-center space-y-1 pt-4 text-slate-400">
          <p className="text-xs font-bold flex items-center justify-center gap-1">
            <Shield className="w-3.5 h-3.5" /> ১০০% প্রাইভেসী সুরক্ষিত (অফলাইন অ্যাপ)
          </p>
          <p className="text-[10px] font-medium flex items-center justify-center gap-1">
            <Info className="w-3 h-3" /> অ্যাপ ভার্সন: v2.4.0 (প্রো-বিল্ড)
          </p>
        </div>

      </main>
    </div>
  );
};

export default Settings;