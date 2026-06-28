import React, { useState } from 'react';
import { ArrowLeft, BarChart3, PieChart as PieIcon, Calendar, TrendingUp, CheckCircle2, Award, Flame, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Analytics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('weekly'); // weekly, distribution
  const [hoveredBar, setHoveredBar] = useState(null);

  // গত এক সপ্তাহের ৫ ওয়াক্ত নামাজের ডাটা
  const weeklyStats = [
    { day: "শনি", percentage: 80, count: "৪/৫", value: 4 },
    { day: "রবি", percentage: 100, count: "৫/৫", value: 5 },
    { day: "সোম", percentage: 60, count: "৩/৫", value: 3 },
    { day: "মঙ্গল", percentage: 80, count: "৪/৫", value: 4 },
    { day: "বুধ", percentage: 100, count: "৫/৫", value: 5 },
    { day: "বৃহঃ", percentage: 40, count: "২/৫", value: 2 },
    { day: "শুক্র", percentage: 100, count: "৫/৫", value: 5 },
  ];

  // এই সপ্তাহের সামগ্রিক ইবাদত বন্টন ডাটা
  const distributionData = [
    { name: "ফরজ সালাত", percentage: 55, color: "bg-teal-600", hex: "#0d9488" },
    { name: "সুন্নত ও নফল", percentage: 20, color: "bg-amber-500", hex: "#f59e0b" },
    { name: "কুরআন তিলাওয়াত", percentage: 15, color: "bg-indigo-600", hex: "#4f46e5" },
    { name: "আজকার ও দোয়া", percentage: 10, color: "bg-rose-500", hex: "#f43f5e" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans pb-16 selection:bg-teal-200">
      
      {/* হেডার ব্যানার */}
      <div className="relative bg-linear-to-b from-slate-950 via-teal-950 to-slate-900 text-white pt-6 pb-26 px-6 rounded-b-[2.5rem] shadow-xl border-b border-teal-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-teal-600/10 via-transparent to-transparent opacity-70" />
        
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all border border-white/10 active:scale-95"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5 text-teal-100" />
          </button>
          <span className="text-xs font-bold tracking-widest uppercase opacity-60">Activity Analytics</span>
          <div className="w-10 h-10 invisible" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-4 space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-teal-950/60 border border-teal-800/30 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-teal-200 backdrop-blur-sm shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-teal-400" /> ইবাদত অ্যানালিটিক্স
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-50 via-teal-100 to-amber-100">আপনার আত্মিক প্রোগ্রেস রিপোর্ট</h1>
          <p className="text-teal-200/60 text-xs md:text-sm">গ্রাফিক্যাল চার্ট এবং পারফরম্যান্স ট্র্যাকিং ড্যাশবোর্ড</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 bg-teal-950/10 p-1.5 rounded-2xl md:mx-auto -mt-7 relative z-30 backdrop-blur-md border border-white/80 shadow-lg">
        <button 
          onClick={() => setActiveTab('weekly')} 
          className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'weekly' ? 'bg-teal-900 text-white shadow-md' : 'text-slate-900 hover:bg-teal-900/5'}`}
        >
          <BarChart3 className="w-4 h-4" /> সাপ্তাহিক ট্র্যাকিং
        </button>
        <button 
          onClick={() => setActiveTab('distribution')} 
          className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'distribution' ? 'bg-teal-900 text-white shadow-md' : 'text-slate-900 hover:bg-teal-900/5'}`}
        >
          <PieIcon className="w-4 h-4" /> ইবাদত বন্টন
        </button>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 relative z-20">
        
        {/* ট্যাব ১: ফিক্সড বিশুদ্ধ সিএসএস বার চার্ট */}
        {activeTab === 'weekly' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-900" />
                  <h3 className="text-base font-bold font-serif text-slate-800">গত ৭ দিনের সালাত রেকর্ড</h3>
                </div>
                <span className="text-xs bg-teal-50 text-teal-950 border border-teal-100 px-2.5 py-1 rounded-md font-bold">চলতি সপ্তাহ</span>
              </div>

              {/* গ্রাফ এরিয়া */}
              <div className="relative pt-8 px-2 border-b border-slate-100/80">
                {/* ভাসমান টুলটিপ */}
                {hoveredBar !== null && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 z-30 transition-all">
                    <span className="font-bold text-teal-300">{weeklyStats[hoveredBar].day}:</span>
                    <span>{weeklyStats[hoveredBar].count} ওয়াক্ত আদায় হয়েছে</span>
                  </div>
                )}

                {/* চার্ট বারসমূহ (হাইট ইনলাইন ফিক্সড) */}
                <div className="flex items-end justify-between gap-3 h-56 md:h-64 relative z-10 pb-1">
                  {weeklyStats.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center flex-1 group cursor-pointer"
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* প্রতিটি বারের আসল ডাইনামিক ব্যাকগ্রাউন্ড হাইট */}
                      <div 
                        style={{ height: `${item.percentage}%` }} 
                        className={`w-full sm:w-10 rounded-t-xl transition-all duration-500 shadow-xs relative flex justify-center min-h-2.5 ${
                          item.value === 5 
                            ? 'bg-linear-to-t from-teal-950 to-teal-600' 
                            : 'bg-linear-to-t from-slate-700 to-teal-700'
                        }`}
                      >
                        {/* ৫ ওয়াক্ত পূরণ হলে গোল্ডেন বাবল */}
                        {item.value === 5 && (
                          <div className="absolute -top-2 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                            <Zap className="w-2 h-2 text-amber-950 fill-amber-950" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-500 mt-3 font-serif">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>চার্টের বারে মাউস আনলে বা ট্যাপ করলে কত ওয়াক্ত নামাজ সম্পন্ন হয়েছে তা দেখা যাবে এবং শতভাগ দিনের মাথায় গোল্ডেন ব্যাজ দৃশ্যমান থাকবে।</span>
              </div>
            </div>

            {/* ডান পাশের কার্ড: স্ট্রেইক মডিউল */}
            <div className="space-y-4">
              <div className="bg-linear-to-br from-amber-500 to-orange-600 text-white p-5 rounded-3xl shadow-md flex items-center justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform">
                  <Flame className="w-32 h-32" />
                </div>
                <div className="space-y-1 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded-md">Consistency</span>
                  <h4 className="text-2xl font-mono font-black">০৫ দিন</h4>
                  <p className="text-xs text-amber-50/80 font-medium">টানা ৫ ওয়াক্ত নামাজের সর্বোচ্চ স্ট্রেইক!</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner">
                  <Flame className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">এই সপ্তাহের মেডেলসমূহ</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">জুমআহ রেগুলারিটি</h5>
                      <p className="text-[10px] text-slate-400">শুক্রবারের সকল সালাত যথাসময়ে আদায়।</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">৩ দিন পারফেক্ট স্কোর</h5>
                      <p className="text-[10px] text-slate-400">সপ্তাহে ৩ দিন ১০০% ওয়াক্ত পূরণ হয়েছে।</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )}

        {/* 2. ট্যাব ২: ফিক্সড পিওর CSS Conic Gradient পাই চার্ট (১০০% রেন্ডার হবে) */}
        {activeTab === 'distribution' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* বাম পাশ: কাস্টম কনিক-গ্রেডিয়েন্ট ডোনাট চার্ট */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-4 md:col-span-1">
              <h4 className="text-xs font-bold font-serif text-slate-400 text-center uppercase tracking-wider">ইবাদতের অনুপাত চার্ট</h4>
              
              {/* নিরাপদ পিওর সিএসএস কনিক গ্রেডিয়েন্ট ট্রিক */}
              <div 
                className="w-44 h-44 rounded-full shadow-md relative flex items-center justify-center border-4 border-white ring-4 ring-slate-100 transition-transform duration-300 hover:scale-102"
                style={{
                  background: `conic-gradient(
                    #0d9488 0% 55%, 
                    #f59e0b 55% 75%, 
                    #4f46e5 75% 90%, 
                    #f43f5e 90% 100%
                  )`
                }}
              >
                {/* সেন্ট্রাল সার্কেল ফিক্সড মাস্ক ডোনাট লুকের জন্য */}
                <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">সর্বমোট</span>
                  <span className="text-xl font-mono font-black text-slate-800">১০০%</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed px-2 pt-2">এটি আপনার ২৪ ঘণ্টার আত্মিক প্র্যাকটিস ও সময় বন্টনের একটি পারফেক্ট রিলেটিভ ভিউ।</p>
            </div>

            {/* ডান পাশ: ক্যাটাগরি ইন্ডিকেটর ও কাস্টম প্রোগ্রেস বার */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-800 border-b border-slate-100 pb-3">ক্যাটাগরি ভিত্তিক সময় বন্টন</h3>
                
                <div className="space-y-4 mt-4">
                  {distributionData.map((data, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <div className="flex items-center gap-2.5 text-slate-700">
                          <div className={`w-3 h-3 rounded-full ${data.color} shadow-xs`} />
                          <span className="font-serif">{data.name}</span>
                        </div>
                        <span className="font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{data.percentage}%</span>
                      </div>
                      
                      {/* ব্যাকগ্রাউন্ড প্রোগ্রেস বার ট্র্যাক */}
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div 
                          style={{ width: `${data.percentage}%` }} 
                          className={`h-full ${data.color} rounded-full transition-all duration-1000`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* মোটিভেশনাল নোটিশ */}
              <div className="mt-6 p-4 bg-teal-50/60 rounded-2xl border border-teal-100/70 flex items-start gap-3 shadow-xs">
                <div className="p-1.5 bg-teal-600 text-white rounded-lg shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <p className="text-xs md:text-sm text-teal-950 font-medium leading-relaxed">
                  <span className="font-bold text-teal-900">মাশাআল্লাহ্‌!</span> আপনার এই সপ্তাহের সিংহভাগ সময় <span className="font-bold text-teal-700">ফরজ ইবাদতে ({distributionData[0].percentage}%)</span> সফলভাবে অতিবাহিত হয়েছে। আল্লাহ তাআলা আপনার ধারাবাহিকতা কবুল করুন। আমিন।
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