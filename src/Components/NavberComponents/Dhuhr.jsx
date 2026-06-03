import React, { useState } from 'react';
import { ArrowLeft, Sun, CheckCircle, HelpCircle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Dhuhr = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('virtues'); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত ফজিলত
  const dhuhrPoints = [
    { id: "১", text: "সূর্য ঢলে পড়ার পর আকাশের রহমতের দরজাগুলো উন্মুক্ত হয়।" },
    { id: "৭", text: "টানা কাজের মাঝে যোহরের সেজদা মস্তিষ্কের ক্লান্তি দূর করে।" },
    { id: "২", text: "ফরজের আগের ৪ ও পরের ২ রাকাত সুন্নতের সওয়াব অপরিসীম।" },
    { id: "৮", text: "ব্যস্ততা ও অলসতা কাটিয়ে ওজু স্নায়ুকে সজাগ ও প্রাণবন্ত করে।" },
    { id: "৩", text: "দুপুরের ব্যস্ত সময়ে নামাজে দাঁড়িয়োনো খাঁটি ঈমানের বড় প্রমাণ।" },
    { id: "৯", text: "নামাজের শারীরিক নড়াচড়ায় পুরো শরীরে রক্ত সঞ্চালন স্বাভাবিক হয়।" },
    { id: "৪", text: "নিয়মিত যোহরের সুন্নতের আমল জাহান্নামের আগুনকে হারাম করে।" },
    { id: "১০", text: "ব্যস্ততার মাঝে আল্লাহকে সময় দিলে বাকি সময়ে বরকত নেমে আসে।" },
    { id: "৫", text: "দুপুরের খাবারের আগে-পরে ওজু ও রুকু-সেজদা হজমশক্তি বাড়ায়।" },
    { id: "১১", text: "ঠিক সময়ে যোহর আদায়ের অভ্যাস মানুষকে সময়নিষ্ঠ ও নিয়মানুবর্তী করে।" },
    { id: "৬", text: "এটি সারাদিনের কাজের চাপের মাঝে চমৎকার একটি মানসিক ডিটক্স।" },
    { id: "১২", text: "দুপুরের তীব্র উত্তাপের সময় নামাজ আদায়ের মাধ্যমে আল্লাহর সন্তুষ্টি মেলে।" },
  ];

  // রাকাতের বিন্যাস
  const rakatDetails = [
    { type: "৪ রাকাত সুন্নত", status: "সুন্নতে মুয়াক্কাদা (ফরজের আগে)", rule: "সাধারণ নিয়মে ৪ রাকাত পড়তে হয়, প্রতি রাকাতেই সূরার সাথে সূরা মিলাতে হবে।" },
    { type: "৪ রাকাত ফরজ", status: "ফরজ (আবশ্যক)", rule: "প্রথম ২ রাকাতে সূরার সাথে সূরা মিলাতে হবে, শেষ ২ রাকাতে শুধু সূরা ফাতিহা পড়তে হবে।" },
    { type: "২ রাকাত সুন্নত", status: "সুন্নতে মুয়াক্কাদা (ফরজের পরে)", rule: "সাধারণ নিয়মে ২ রাকাত পড়তে হয়, দুই রাকাতেই সূরা মিলাতে হবে।" },
    { type: "২ রাকাত নফল", status: "নফল (ঐচ্ছিক)", rule: "ইচ্ছা হলে পড়া যায়, অতিরিক্ত সওয়াব। সাধারণ ২ রাকাত নামাজের মতো।" },
  ];

  // ধাপে ধাপে পড়ার সংক্ষেপ নিয়ম
  const prayerSteps = [
    { step: "১", title: "নিয়ত ও তাকবীরে তাহরিমা", desc: "ক্বিবলামুখী হয়ে মনে মনে যোহরের নির্দিষ্ট রাকাতের নিয়ত করে 'আল্লাহু আকবার' বলে হাত বাঁধবেন।" },
    { step: "২", title: "ছানা ও সূরা পাঠ", desc: "সুবহানাকা (ছানা) পড়ার পর সূরা ফাতিহা পড়বেন এবং সাথে অন্য যেকোনো একটি সূরা মেলাবেন।" },
    { step: "৩", title: "রুকু ও সেজদা", desc: "আল্লাহু আকবার বলে রুকুতে যাবেন (তাসবীহ ৩ বার)। সোজা হয়ে দাঁড়িয়ে রব্বানা লাকাল হামদ বলে ২ টি সেজদা করবেন।" },
    { step: "৪", title: "বৈঠক (আত্তাহিয়াতু)", desc: "২য় রাকাতে সেজদা শেষে বসে আত্তাহিয়াতু পড়বেন। শেষ রাকাতে আত্তাহিয়াতু, দুরুদ ও দোয়া মাসূরা পড়ে ডানে-বামে সালাম ফেরাবেন।" },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার */}
      <div className="relative bg-gradient-to-b from-amber-950 to-amber-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button onClick={() => navigate(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Prayer Guide</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-amber-800/40 border border-amber-700/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-amber-200">
            <Sun className="w-3.5 h-3.5 text-amber-400" /> যোহর গাইড
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-50">যোহর নামাজ গাইডলাইন</h1>
          <p className="text-amber-200/70 text-xs md:text-sm">মোট ১২ রাকাত (৪ রাকাত সুন্নত + ৪ রাকাত ফরজ + ২ রাকাত সুন্নত + ২ রাকাত নফল)</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-amber-900/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button 
          onClick={() => setActiveTab('virtues')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'virtues' ? 'bg-amber-800 text-white shadow' : 'text-amber-950 hover:bg-amber-900/5'}`}
        >
          ১২টি ফজিলত
        </button>
        <button 
          onClick={() => setActiveTab('rakats')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'rakats' ? 'bg-amber-800 text-white shadow' : 'text-amber-950 hover:bg-amber-900/5'}`}
        >
          রাকাত বিন্যাস
        </button>
        <button 
          onClick={() => setActiveTab('steps')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'steps' ? 'bg-amber-800 text-white shadow' : 'text-amber-950 hover:bg-amber-900/5'}`}
        >
          পড়ার নিয়ম
        </button>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ট্যাব ১: ১২টি ফজিলত */}
        {activeTab === 'virtues' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-amber-950/5 shadow-md">
            {dhuhrPoints.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-amber-900/5 bg-white shadow-sm group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 text-amber-900 font-serif font-black text-xl flex items-center justify-center border border-amber-200/40">{item.id}</div>
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
                  <div className="p-2 bg-amber-50 rounded-xl text-amber-800 mt-0.5"><CheckCircle className="w-5 h-5" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">{rakat.type}</h3>
                    <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-semibold">{rakat.status}</span>
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
              <BookOpen className="w-5 h-5 text-amber-800" />
              <h2 className="text-xl font-bold font-serif text-slate-800">নামাজ আদায়ের সাধারণ নিয়মাবলী</h2>
            </div>
            <div className="relative border-l-2 border-dashed border-amber-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* টাইমলাইন ডট সার্কেল */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-amber-800 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
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

export default Dhuhr;