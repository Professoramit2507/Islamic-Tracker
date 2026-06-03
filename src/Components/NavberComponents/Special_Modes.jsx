import React, { useState } from 'react';
import { ArrowLeft, Moon, Sun, Clock, CheckCircle2, Star, Sparkles, BellRing, Heart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Special_Modes = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('tahajjud'); // tahajjud, siyam

  // তাহাজ্জুদ মোডের ডেটা স্টেট
  const [tahajjudTracker, setTahajjudTracker] = useState([
    { id: 1, text: 'রাতের শেষ তৃতীয়াংশে জাগ্রত হওয়া', done: true },
    { id: 2, text: 'মিসওয়াক ও উত্তমরূপে ওযু সম্পন্ন করা', done: false },
    { id: 3, text: 'কমপক্ষে ২ থেকে ৮ রাকাত সালাত আদায়', done: false },
    { id: 4, text: 'সালাত শেষে ইস্তিগফার ও দোয়া করা', done: false },
  ]);

  // রোজা মোডের ডেটা স্টেট
  const [siyamTracker, setSiyamTracker] = useState([
    { id: 1, text: 'শেষ সময়ে সেহরি গ্রহণ করা', done: false },
    { id: 2, text: 'দিনের বেলায় চোখ, কান ও জিহ্বার হেফাজত', done: false },
    { id: 3, text: 'ইফতারের পূর্বে বেশি বেশি ইস্তিগফার ও দোয়া', done: false },
    { id: 4, text: 'সময় হওয়া মাত্রই সুন্নত তরিকায় ইফতার করা', done: false },
  ]);

  const toggleTahajjud = (id) => {
    setTahajjudTracker(tahajjudTracker.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const toggleSiyam = (id) => {
    setSiyamTracker(siyamTracker.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যanation (Deep Indigo & Midnight Theme) */}
      <div className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-indigo-950/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
         
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Special Spiritual Modes</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-indigo-950/60 border border-indigo-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> বিশেষ ইবাদত মোড
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-indigo-50">আত্মিক উন্নতির বিশেষ মূহুর্ত</h1>
          <p className="text-indigo-200/70 text-xs md:text-sm">তাহাজ্জুদ ও সিয়ামের জন্য ডেডিকেটেড ট্র্যাকিং ও গাইডলাইন</p>
        </div>
      </div>

      {/* মোড সিলেকশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 bg-indigo-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white shadow-sm">
        <button 
          onClick={() => setActiveMode('tahajjud')} 
          className={`py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeMode === 'tahajjud' ? 'bg-indigo-950 text-white shadow' : 'text-slate-900 hover:bg-indigo-950/5'}`}
        >
          <Moon className="w-4 h-4 text-amber-400 fill-amber-400" /> তাহাজ্জুদ মোড
        </button>
        <button 
          onClick={() => setActiveMode('siyam')} 
          className={`py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeMode === 'siyam' ? 'bg-indigo-950 text-white shadow' : 'text-slate-900 hover:bg-indigo-950/5'}`}
        >
          <Sun className="w-4 h-4 text-amber-500" /> সিয়াম / রোজা মোড
        </button>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ১. তাহাজ্জুদ মোড ইন্টারফেস */}
        {activeMode === 'tahajjud' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            {/* সময় ও ফজিলত কার্ড */}
            <div className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-md grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="md:col-span-2 space-y-2">
                <span className="text-[10px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Tahajjud Time Alert</span>
                <h3 className="text-lg font-bold font-serif text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-900" /> রাতের শেষ তৃতীয়াংশ
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  মাঝরাত থেকে সুবহে সাদিকের পূর্ব পর্যন্ত তাহাজ্জুদের সময়। তবে রাতের শেষ তৃতীয়াংশে দুআ কবুলের সম্ভাবনা সবচেয়ে বেশি থাকে।
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-4 rounded-xl text-white text-center md:col-span-1 border border-indigo-900/30">
                <span className="text-[10px] text-amber-400 font-bold block uppercase">আজকের সম্ভাব্য সময়</span>
                <span className="text-xl font-mono font-black block tracking-wide pt-1">০২:০০ AM - ০৪:০০ AM</span>
              </div>
            </div>

            {/* নিয়ত ও হাদিস সেকশন */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-tr from-indigo-950 to-indigo-900 text-white p-5 rounded-2xl border border-indigo-500/10 shadow-sm space-y-2">
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> রাসুলুল্লাহ ﷺ বলেছেন
                </div>
                <p className="text-xs md:text-sm font-medium text-indigo-100/90 leading-relaxed pt-1">
                  "তোমাদের অবশ্যই রাতের সালাত (তাহাজ্জুদ) আদায় করা উচিত। কেননা তা তোমাদের পূর্ববর্তী নেককার বান্দাদের অভ্যাস এবং তা আল্লাহর নৈকট্য অর্জনের মাধ্যম।"
                </p>
                <span className="block text-[10px] text-indigo-300/60 font-semibold">— সুনানে তিরমিযী: ৩৫৪৯</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">সালাতের নিয়ম</span>
                <h4 className="text-sm font-bold text-slate-800">তাহাজ্জুদের নিয়ত ও রাকাত</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  তাহাজ্জুদের নির্দিষ্ট কোনো মুখে উচ্চারিত নিয়ত নেই, মনে মনে আল্লাহর সন্তুষ্টির জন্য রাতের সালাতের ইচ্ছা করাই যথেষ্ট। এটি সাধারণত ২ রাকাত করে সর্বনিম্ন ২ রাকাত এবং সর্বোচ্চ স্বাভাবিকভাবে ৮ রাকাত পর্যন্ত পড়া সুন্নত।
                </p>
              </div>
            </div>

            {/* তাহাজ্জুদ চেকলিস্ট */}
            <div className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-md space-y-3">
              <h3 className="text-sm font-bold font-serif text-slate-800 border-b border-slate-50 pb-2">
                তাহাজ্জুদ রাতের আমলনামা চেকলিস্ট
              </h3>
              <div className="space-y-2">
                {tahajjudTracker.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleTahajjud(item.id)}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                      item.done 
                        ? 'bg-indigo-50/40 border-indigo-200 text-slate-400 line-through' 
                        : 'bg-slate-50/50 border-slate-100 text-slate-700 hover:border-slate-200'
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle2 className="w-4 h-4 text-indigo-800 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 flex-shrink-0" />
                    )}
                    <p className="text-xs md:text-sm font-medium">{item.text}</p>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* ২. সিয়াম/রোজা মোড ইন্টারফেস */}
        {activeMode === 'siyam' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            {/* নিয়ত ও দোয়া উইজেট */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* সেহরির নিয়ত */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2.5">
                <span className="text-[10px] bg-teal-50 text-teal-900 px-2 py-0.5 rounded font-bold uppercase">Suhoor Intent</span>
                <h4 className="text-sm font-bold text-slate-800">রোজার নিয়ত (মনে মনে)</h4>
                <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  "হে আল্লাহ! আমি আগামীকাল আপনার সন্তুষ্টির উদ্দেশ্যে ফরজ/নফল রোজা রাখার দৃঢ় ইচ্ছা পোষণ করছি।" (মুখে নির্দিষ্ট আরবি বাক্য বলা বাধ্যতামূলক নয়)
                </p>
              </div>

              {/* ইফতারের দোয়া */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2.5">
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-bold uppercase">Iftar Supplication</span>
                <h4 className="text-sm font-bold text-slate-800">ইফতারের মাসনুন দোয়া</h4>
                <p className="text-right font-serif font-bold text-slate-800 pt-1">ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ</p>
                <p className="text-xs text-slate-500 italic">
                  "পিপাসা দূর হলো, শিরা-উপশিরা সিক্ত হলো এবং আল্লাহর ইচ্ছায় পুরস্কারও নির্ধারিত হলো।" (আবু দাউদ)
                </p>
              </div>
            </div>

            {/* সিয়াম চেকলিস্ট ট্র্যাকার */}
            <div className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-md space-y-3">
              <h3 className="text-sm font-bold font-serif text-slate-800 border-b border-slate-50 pb-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-50" /> আজকের রোজার আত্মশুদ্ধি চেকলিস্ট
              </h3>
              <div className="space-y-2">
                {siyamTracker.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleSiyam(item.id)}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                      item.done 
                        ? 'bg-amber-50/40 border-amber-200 text-slate-400 line-through' 
                        : 'bg-slate-50/50 border-slate-100 text-slate-700 hover:border-slate-200'
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 flex-shrink-0" />
                    )}
                    <p className="text-xs md:text-sm font-medium">{item.text}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* রিমাইন্ডার নোট */}
            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/50 flex items-start gap-3">
              <BellRing className="w-5 h-5 text-amber-700 mt-0.5" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-amber-950">গুরুত্বপূর্ণ মনে করিয়ে দেওয়া:</h5>
                <p className="text-xs text-amber-900 leading-relaxed">
                  আইয়ামে বীজ (প্রতি আরবি মাসের ১৩, ১৪ ও ১৫ তারিখ) এবং প্রতি সোমবার ও বৃহস্পতিবার নফল রোজা রাখার বিশেষ ফজিলত রয়েছে। এই স্পেশাল মোডটি আপনার সেই দিনগুলোর ইবাদত সহজ করতে সাহায্য করবে।
                </p>
              </div>
            </div>

          </motion.div>
        )}

      </main>
    </div>
  );
};

export default Special_Modes;