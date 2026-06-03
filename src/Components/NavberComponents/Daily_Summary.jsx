import React, { useState } from 'react';
import { ArrowLeft, Calendar, CheckCircle2, Circle, Star, Moon, Sun, Award } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Daily_Summary = () => {
  const navigate = useNavigate();

  // আজকের তারিখ (ডাইনামিকালি দেখানোর জন্য)
  const today = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // ৫ ওয়াক্ত নামাজের ট্র্যাকিং স্টেট
  const [prayers, setPrayers] = useState([
    { id: 'fajr', name: 'ফজর', time: 'ভোর ৪:১৫', done: true },
    { id: 'dhuhr', name: 'যোহর', time: 'দুপুর ১২:০০', done: false },
    { id: 'asr', name: 'আসর', time: 'বিকাল ৪:৩০', done: false },
    { id: 'maghrib', name: 'মাগরিব', time: 'সন্ধ্যা ৬:৪৫', done: false },
    { id: 'isha', name: 'ইশা', time: 'রাত ৮:১৫', done: false },
  ]);

  // ইমানি সেলফ-ইমপ্রুভমেন্ট চেকলিস্ট স্টেট
  const [tasks, setTasks] = useState([
    { id: 1, text: 'সকাল-সন্ধ্যার মাসনুন দোয়া পড়েছি' },
    { id: 2, text: 'কমপক্ষে ৫টি আয়াত অর্থসহ তিলাওয়াত করেছি' },
    { id: 3, text: 'আজকের ডিজিটাল তাসবিহ/জিকির পূর্ণ করেছি' },
    { id: 4, text: 'কাউকে কষ্ট না দিয়ে বা গীবত না করে চলেছি' },
  ]);

  const togglePrayer = (id) => {
    setPrayers(prayers.map(p => p.id === id ? { ...p, done: !p.done } : p));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  // প্রোগ্রেস পারসেন্টেজ হিসাব
  const completedPrayers = prayers.filter(p => p.done).length;
  const completedTasks = tasks.filter(t => t.done).length;
  const totalProgress = Math.round(((completedPrayers + completedTasks) / (prayers.length + tasks.length)) * 100);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Deep Charcoal & Golden Amber Theme) */}
      <div className="relative bg-gradient-to-b from-stone-950 via-slate-900 to-stone-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-amber-950/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
         
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Daily Dashboard</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-[11px] font-medium text-amber-300">
            <Calendar className="w-3.5 h-3.5 text-amber-400" /> {today}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-50">আজকের দিনের সারসংক্ষেপ</h1>
          <p className="text-stone-300/70 text-xs md:text-sm">আপনার ইবাদতের দৈনন্দিন হিসাব ও আত্মউন্নয়ন ট্র্যাকার</p>
        </div>
      </div>

      {/* ওভারভিউ প্রোগ্রেস কার্ড (Floating Box) */}
      <div className="max-w-xl mx-auto bg-white p-5 rounded-2xl mx-6 md:mx-auto -mt-10 relative z-30 shadow-xl border border-amber-950/5 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Progress</span>
          <h3 className="text-xl font-bold font-serif text-slate-800">আজকের আত্মশুদ্ধির অগ্রগতি</h3>
          <p className="text-xs text-slate-500">৫ ওয়াক্ত নামাজ ও নেক আমলের সার্বিক হিসাব।</p>
        </div>
        <div className="relative flex items-center justify-center min-w-[70px] h-[70px] rounded-full bg-amber-50 border border-amber-200">
          <span className="text-lg font-mono font-black text-amber-950">{totalProgress}%</span>
        </div>
      </div>

      {/* মেইন ড্যাশবোর্ড গ্রিড লেআউট */}
      <main className="max-w-4xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        
        {/* বাম পাশ: আজকের আয়াত ও মোটিভেশনাল বক্স */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-gradient-to-br from-amber-950 to-stone-900 p-5 rounded-2xl text-white shadow-sm space-y-3 border border-amber-500/10">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> আজকের অনুপ্রেরণা
            </div>
            <p className="text-right font-serif text-lg text-amber-100/90 leading-relaxed pt-1">
              فَاذْكُرُونِي أَذْكُرْكُمْ
            </p>
            <p className="text-xs md:text-sm font-medium text-amber-200/90 leading-relaxed">
              "সুতরাং তোমরা আমাকে স্মরণ করো, আমিও তোমাদের স্মরণ করব।"
            </p>
            <span className="block text-[10px] text-amber-400/60 font-semibold">— সূরা আল-বাকারাহ: ১৫২</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/40 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-stone-50 rounded-lg text-amber-900"><Award className="w-5 h-5" /></div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase">Daily Tip</h4>
              <p className="text-xs md:text-sm font-bold text-slate-700">ঘুমানোর আগে অবশ্যই হিসাব মিলিয়ে নিন!</p>
            </div>
          </div>
        </div>

        {/* ডান পাশ: নামাজ ও আমল ট্র্যাকিং চেকলিস্ট */}
        <div className="md:col-span-2 space-y-6">
          
          {/* ১. সালাত ট্র্যাকার */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/40 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <h3 className="text-base font-bold font-serif text-slate-800 flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" /> সালাত ট্র্যাকার (৫ ওয়াক্ত)
              </h3>
              <span className="text-xs font-mono font-bold text-slate-400">{completedPrayers}/৫ সম্পন্ন</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {prayers.map((prayer) => (
                <button
                  key={prayer.id}
                  onClick={() => togglePrayer(prayer.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                    prayer.done 
                      ? 'bg-amber-50/50 border-amber-200 text-slate-800' 
                      : 'bg-slate-50/50 border-slate-100 text-slate-600 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {prayer.done ? (
                      <CheckCircle2 className="w-5 h-5 text-amber-600 fill-amber-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300" />
                    )}
                    <div>
                      <p className="text-sm font-bold">{prayer.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{prayer.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ২. দৈনন্দিন নেক আমল চেকলিস্ট */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/40 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <h3 className="text-base font-bold font-serif text-slate-800 flex items-center gap-2">
                <Moon className="w-4 h-4 text-indigo-500" /> দৈনিক নেক আমল ও মুহাসাবা
              </h3>
              <span className="text-xs font-mono font-bold text-slate-400">{completedTasks}/{tasks.length} সম্পন্ন</span>
            </div>

            <div className="space-y-2">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                    task.done 
                      ? 'bg-stone-50 border-stone-200 text-slate-400 line-through' 
                      : 'bg-slate-50/50 border-slate-100 text-slate-700 hover:border-slate-200'
                  }`}
                >
                  {task.done ? (
                    <CheckCircle2 className="w-4 h-4 text-stone-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  )}
                  <p className="text-xs md:text-sm font-medium">{task.text}</p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Daily_Summary;