import React, { useState } from 'react';
import { ArrowLeft, Sunset, CheckCircle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Asr = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('virtues'); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত আসরের ফজিলত ও গুরুত্ব
  const asrPoints = [
    { id: "১", text: "পবিত্র কুরআনে আসর নামাজকে 'সালাতুল উসতা' বা মধ্যবর্তী নামাজ হিসেবে বিশেষভাবে উল্লেখ করে তা হেফাজত করার নির্দেশ দেওয়া হয়েছে।" },
    { id: "৭", text: "পড়ন্ত বিকেলের অলসতা ও ব্যবসার ব্যস্ততা ভেঙে যারা আসর আদায় করে, তারা আল্লাহর কাছে বিশেষ মর্যাদার অধিকারী হয়।" },
    { id: "২", text: "রাসুলুল্লাহ (সা.) বলেছেন, যার আসর নামাজ ছুটে গেল, তার যেন পরিবার-পরিজন এবং ধন-সম্পদ সবকিছুই ধ্বংস হয়ে গেল।" },
    { id: "৮", text: "আসর ও ফজর—এই দুই ঠান্ডা সময়ের নামাজ নিয়মিত আদায়কারী ব্যক্তি কখনই জাহান্নামে প্রবেশ করবে না।" },
    { id: "৩", text: "যে ব্যক্তি ইচ্ছাকৃতভাবে আসর নামাজ ছেড়ে দেয়, তার জীবনের বিগত সমস্ত ভালো আমল বা নেক কাজ বরবাদ হয়ে যায়।" },
    { id: "৯", text: "আসরের সময়ে দিনের ফেরেশতাগণ বিদায় নেন এবং রাতের ফেরেশতাগণ দায়িত্ব নেন, ফলে আমলনামা আল্লাহর কাছে পেশের এটি এক মহাসন্ধিক্ষণ।" },
    { id: "৪", text: "ফজর ও আসর নামাজ নিয়মিত আদায় করার মাধ্যমে কেয়ামতের দিন মহান আল্লাহর পবিত্র দিদার বা দর্শন লাভ করা সহজ হবে।" },
    { id: "১০", text: "বিকেলের ক্লান্তি দূর করে ওজু করার মাধ্যমে মানুষের শরীর ও মন মাগরিবের আগ পর্যন্ত সতেজ এবং প্রফুল্ল থাকে।" },
    { id: "৫", text: "আসরের ফরজের পূর্বে ৪ রাকাত সুন্নত নামাজ আদায়কারীর ওপর মহান আল্লাহ বিশেষ রহমত বর্ষণ করেন।" },
    { id: "১১", text: "ঠিক সময়ে আসর আদায়ের অভ্যাস মানুষকে সময়ের মূল্য বুঝতে শেখায় এবং অলসতা থেকে দূরে রাখে।" },
    { id: "৬", text: "ইসলামে আসর নামাজকে ঈমান ও নিফাকের মধ্যকার অন্যতম পরীক্ষামূলক নামাজ হিসেবে গণ্য করা হয়েছে।" },
    { id: "১২", text: "সূর্য হলুদ বর্ণ ধারণ করার পূর্বেই আসর শেষ করা সুন্নাহ; বিনা কারণে দেরি করা মুনাফিকদের নামাজের লক্ষণ।" },
  ];

  // আসর নামাজের রাকাত বিন্যাস
  const rakatDetails = [
    { type: "৪ রাকাত সুন্নত", status: "সুন্নতে গায়রে মুয়াক্কাদা (ঐচ্ছিক)", rule: "ফরজের আগে এটি পড়তে হয়। এটি আদায় করলে প্রচুর সওয়াব রয়েছে, তবে না পড়লে কোনো গুনাহ নেই।" },
    { type: "৪ রাকাত ফরজ", status: "ফরজ (আবশ্যক)", rule: "এটি আসরের মূল নামাজ। ইমামের পেছনে বা একাকী নীরবে কিরাত পাঠের মাধ্যমে ৪ রাকাত আদায় করতে হয়।" },
  ];

  // আসর নামাজের ধাপে ধাপে আমল ও নিয়ম
  const prayerSteps = [
    { step: "১", title: "নিয়ত ও হাত বাঁধা", desc: "ক্বিবলামুখী হয়ে মনে মনে আসরের নির্দিষ্ট রাকাতের নিয়ত করে 'আল্লাহু আকবার' (তাকবীরে তাহরিমা) বলে হাত বাঁধবেন।" },
    { step: "২", title: "কিরাত ও রুকু-সেজদা", desc: "ছানা, সূরা ফাতিহা এবং সাথে অন্য যেকোনো একটি সূরা মেলাবেন (একাকী বা জামায়াতে উভয় ক্ষেত্রেই নীরবে)। এরপর রুকু ও ২টি সেজদা শেষ করবেন।" },
    { step: "৩", title: "প্রথম বৈঠক (২য় রাকাতে)", desc: "দ্বিতীয় রাকাতের দুই সেজদা শেষে বসে শুধু 'আত্তাহিয়াতু' (তাশাহহুদ) পড়বেন। এরপর আবার 'আল্লাহু আকবার' বলে ৩য় রাকাতের জন্য সোজা হয়ে দাঁড়াবেন।" },
    { step: "৪", title: "শেষ ২ রাকাত ও সালাম", desc: "শেষ ২ রাকাতে শুধু সূরা ফাতিহা পড়বেন (কোনো সূরা মিলানো লাগবে না)। ৪র্থ রাকাতের সেজদা শেষে বসে আত্তাহিয়াতু, দুরুদ ও দোয়া মাসূরা পড়ে সালাম ফেরাবেন।" },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Golden/Sunset Theme) */}
      <div className="relative bg-gradient-to-b from-amber-950 via-orange-950 to-amber-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button onClick={() => navigate(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Afternoon Guide</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-amber-950/60 border border-amber-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-amber-200">
            <Sunset className="w-3.5 h-3.5 text-amber-400" /> সালাতুল আসর
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-50">আসরের ফজিলত ও নিয়মাবলী</h1>
          <p className="text-amber-200/70 text-xs md:text-sm">সর্বমোট ৮ রাকাত (৪ রাকাত সুন্নত + ৪ রাকাত ফরজ)</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-amber-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button 
          onClick={() => setActiveTab('virtues')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'virtues' ? 'bg-amber-900 text-white shadow' : 'text-slate-900 hover:bg-amber-900/5'}`}
        >
          ১২টি ফজিলত
        </button>
        <button 
          onClick={() => setActiveTab('rakats')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'rakats' ? 'bg-amber-900 text-white shadow' : 'text-slate-900 hover:bg-amber-900/5'}`}
        >
          রাকাত বিন্যাস
        </button>
        <button 
          onClick={() => setActiveTab('steps')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'steps' ? 'bg-amber-900 text-white shadow' : 'text-slate-900 hover:bg-amber-900/5'}`}
        >
          পড়ার নিয়ম
        </button>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ট্যাব ১: ১২টি ফজিলত */}
        {activeTab === 'virtues' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-amber-950/5 shadow-md">
            {asrPoints.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-amber-900/5 bg-white shadow-sm group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 text-amber-950 font-serif font-black text-xl flex items-center justify-center border border-amber-200/40">{item.id}</div>
                <div className="flex-1 pt-1"><p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">{item.text}</p></div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ২: রাকাত বিন্যাস */}
        {activeTab === 'rakats' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {rakatDetails.map((rakat, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-amber-950/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 rounded-xl text-amber-900 mt-0.5"><CheckCircle className="w-5 h-5" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">{rakat.type}</h3>
                    <span className="text-xs bg-amber-100 text-amber-950 px-2 py-0.5 rounded-md font-semibold">{rakat.status}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 md:max-w-md bg-slate-50 p-3 rounded-xl border border-slate-100">{rakat.rule}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ৩: কীভাবে পড়তে হবে (Steps) */}
        {activeTab === 'steps' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-amber-950/5 shadow-md space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-amber-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">আসর নামাজের ধারাবাহিক নিয়মাবলী</h2>
            </div>
            <div className="relative border-l-2 border-dashed border-amber-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* টাইমলাইন ডট সার্কেল */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-amber-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/80 space-y-1">
                    <h4 className="text-base font-bold text-slate-800 font-serif">{step.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
};

export default Asr;