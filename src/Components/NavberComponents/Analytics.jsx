import React, { useState } from 'react';
import { ArrowLeft, BarChart3, PieChart, Calendar, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Analytics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('weekly'); // weekly, distribution

  // ট্যাব ১: গত এক সপ্তাহের ৫ ওয়াক্ত নামাজের জামায়াত/সময়মতো পড়ার ট্র্যাকিং ডাটা
  const weeklyStats = [
    { day: "শনি", percentage: 80, count: "৪/৫" },
    { day: "রবি", percentage: 100, count: "৫/৫" },
    { day: "সোম", percentage: 60, count: "৩/৫" },
    { day: "মঙ্গল", percentage: 80, count: "৪/৫" },
    { day: "বুধ", percentage: 100, count: "৫/৫" },
    { day: "বৃহঃ", percentage: 40, count: "২/৫" },
    { day: "শুক্র", percentage: 100, count: "৫/৫" },
  ];

  // ট্যাব ২: এই সপ্তাহের সামগ্রিক ইবাদত বন্টন (Pie-Chart & List Data)
  const distributionData = [
    { name: "ফরজ সালাত", percentage: 55, color: "bg-teal-600", border: "border-teal-600" },
    { name: "সুন্নত ও নফল", percentage: 20, color: "bg-amber-500", border: "border-amber-500" },
    { name: "কুরআন তিলাওয়াত", percentage: 15, color: "bg-indigo-600", border: "border-indigo-600" },
    { name: "আজকার ও দোয়া", percentage: 10, color: "bg-rose-500", border: "border-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Deep Teal & Ocean Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-teal-950 to-slate-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-teal-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
          
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Activity Analytics</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-teal-950/60 border border-teal-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-teal-200">
            <TrendingUp className="w-3.5 h-3.5 text-teal-400" /> ইবাদত অ্যানালিটিক্স
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-teal-50">আপনার আত্মিক প্রোগ্রেস রিপোর্ট</h1>
          <p className="text-teal-200/70 text-xs md:text-sm">গ্রাফিক্যাল চার্ট এবং পারফরম্যান্স ট্র্যাকিং ড্যাশবোর্ড</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 bg-teal-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button 
          onClick={() => setActiveTab('weekly')} 
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === 'weekly' ? 'bg-teal-900 text-white shadow' : 'text-slate-900 hover:bg-teal-900/5'}`}
        >
          <BarChart3 className="w-4 h-4" /> সাপ্তাহিক ট্র্যাকিং
        </button>
        <button 
          onClick={() => setActiveTab('distribution')} 
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === 'distribution' ? 'bg-teal-900 text-white shadow' : 'text-slate-900 hover:bg-teal-900/5'}`}
        >
          <PieChart className="w-4 h-4" /> ইবাদত বন্টন
        </button>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ট্যাব ১: সাপ্তাহিক বার-চার্ট এনালিটিক্স */}
        {activeTab === 'weekly' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-teal-950/5 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-900" />
                  <h3 className="text-base font-bold font-serif text-slate-800">গত ৭ দিনের সালাত স্ট্যাটিস্টিক্স</h3>
                </div>
                <span className="text-xs bg-teal-50 text-teal-900 px-2 py-1 rounded-md font-bold">চলতি সপ্তাহ</span>
              </div>

              {/* কাস্টম পিওর সিএসএস বার চার্ট */}
              <div className="flex items-end justify-between gap-2 pt-4 h-48 md:h-64 px-2 border-b border-slate-100">
                {weeklyStats.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    {/* হোভার করলে পপআপ কাউন্ট দেখাবে */}
                    <span className="text-[10px] font-mono font-bold text-teal-900 bg-teal-50 px-1 rounded mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count}
                    </span>
                    {/* ডাইনামিক হাইট বার */}
                    <div 
                      style={{ height: `${item.percentage}%` }} 
                      className={`w-full sm:w-8 bg-gradient-to-t from-teal-950 to-teal-600 rounded-t-lg transition-all duration-500 shadow-sm relative`}
                    >
                      {item.percentage === 100 && (
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full border border-white flex items-center justify-center shadow-sm" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-slate-500 mt-2 font-serif">{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>যেই দিনগুলোতে <span className="font-bold text-teal-950">৫ ওয়াক্ত (১০০%)</span> নামাজ সম্পন্ন হয়েছে, সেগুলোর ওপরে মেডেল মার্ক প্রদর্শিত হচ্ছে।</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ট্যাব ২: পিওর CSS পাই-চার্ট এবং পারসেন্টেজ ডিস্ট্রিবিউশন */}
        {activeTab === 'distribution' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* কাস্টম সিএসএস পাই চার্ট ডিসপ্লে কার্ড */}
            <div className="bg-white p-6 rounded-3xl border border-teal-950/5 shadow-md flex flex-col items-center justify-center space-y-4 md:col-span-1">
              <h4 className="text-sm font-bold font-serif text-slate-500 text-center uppercase tracking-wider">ইবাদতের অনুপাত</h4>
              
              {/* CSS conic-gradient দিয়ে তৈরি করা পাই চার্ট */}
              <div 
                className="w-40 h-40 rounded-full shadow-inner relative flex items-center justify-center border-4 border-white ring-4 ring-slate-100"
                style={{
                  background: `conic-gradient(
                    #0d9488 0% 55%, 
                    #f59e0b 55% 75%, 
                    #4f46e5 75% 90%, 
                    #f43f5e 90% 100%
                  )`
                }}
              >
                {/* সেন্ট্রাল সার্কেল ফিক্সড মাস্ক */}
                <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-slate-400">সর্বমোট</span>
                  <span className="text-lg font-mono font-black text-slate-800">১০০%</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">এটি আপনার সামগ্রিক ইসলামিক প্র্যাকটিসের একটি কাস্টম অনুপাত ভিউ।</p>
            </div>

            {/* ডান পাশ: কালার কোডেড ডাটা এবং প্রোগ্রেস বার ইন্ডিকেটর */}
            <div className="bg-white p-6 rounded-3xl border border-teal-950/5 shadow-md space-y-4 md:col-span-2">
              <h3 className="text-base font-bold font-serif text-slate-800 border-b border-slate-50 pb-2">ক্যাটাগরি ভিত্তিক বন্টন</h3>
              
              <div className="space-y-3.5">
                {distributionData.map((data, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-2 text-slate-700">
                        <div className={`w-3 h-3 rounded-full ${data.color}`} />
                        <span>{data.name}</span>
                      </div>
                      <span className="font-mono text-slate-500">{data.percentage}%</span>
                    </div>
                    {/* ব্যাকগ্রাউন্ড প্রোগ্রেস ট্র্যাক বার */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        style={{ width: `${data.percentage}%` }} 
                        className={`h-full ${data.color} rounded-full transition-all duration-1000`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* মোটিভেশনাল নোটিশ */}
              <div className="mt-4 p-3 bg-teal-50/60 rounded-xl border border-teal-100/50 flex items-start gap-3">
                <Award className="w-5 h-5 text-teal-800 mt-0.5" />
                <p className="text-xs text-teal-950 font-medium leading-relaxed">
                  <span className="font-bold">মাশাআল্লাহ্‌!</span> আপনার এই সপ্তাহের সিংহভাগ সময় <span className="font-bold text-teal-800">ফরজ ইবাদতে (৫৫%)</span> ব্যয় হয়েছে। আপনার ধারাবাহিকতা বজায় রাখার জন্য দুআ রইল।
                </p>
              </div>
            </div>

          </motion.div>
        )}

      </main>
    </div>
  );
};

export default Analytics;