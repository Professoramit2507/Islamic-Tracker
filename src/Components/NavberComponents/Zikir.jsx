import React, { useState } from 'react';
import { RotateCcw, Heart, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Zikir = () => {
  // সমৃদ্ধ দোয়া ও জিকির ডাটাবেজ (১২টি ফজিলতপূর্ণ জিকির)
  const zikirList = [
    { id: 1, category: "তাসবিহ", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", bangla: "সুবহানাল্লাহি ওয়া বিহামদিহি", target: 100, reward: "দিনে ১০০ বার পড়লে সমুদ্রের ফেনা পরিমাণ গুনাহও ক্ষমা করা হয়।" },
    { id: 2, category: "ইস্তিগফার", arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", bangla: "আস্তাগফিরুল্লাহ ওয়া আতুবু ইলাইহি", target: 100, reward: "রিজিকে বরকত বাড়ে এবং সমস্ত দুশ্চিন্তা থেকে মুক্তির পথ খুলে যায়।" },
    { id: 3, category: "দরুদ", arabic: "اللَّهُمَّ صَلِّ وَسَلِّমْ عَلَى نَبِيِّনَا مُحَمَّদٍ", bangla: "আল্লাহুম্মা সাল্লি ওয়া সাল্লিম আলা নাবিয়্যিনা মুহাম্মদ", target: 10, reward: "সকাল-সন্ধ্যায় ১০ বার পড়লে কেয়ামতের দিন নবীজী (সা.)-এর শাফায়াত মিলবে।" },
    { id: 4, category: "সুরক্ষা", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", bangla: "লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ", target: 33, reward: "এটি জান্নাতের অন্যতম গোপন রত্নভাণ্ডার এবং দুশ্চিন্তার মহা ওষুধ।" },
    { id: 5, category: "তওহীদ", arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ", bangla: "লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু", target: 100, reward: "১০টি গোলাম আজাদ করার সওয়াব পাওয়া যায় এবং শয়তান থেকে হেফাজতে থাকা যায়।" },
    { id: 6, category: "তাসবিহ", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", bangla: "সুবহানাল্লাহি ওয়া বিহামদিহি সুবহানাল্লাহিল আজিম", target: 33, reward: "এই দুটি বাক্য উচ্চারণে খুবই সহজ কিন্তু কিয়ামতের পাল্লায় অত্যন্ত ভারী।" },
    { id: 7, category: "ক্ষমা", arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ", bangla: "লা ইলাহা ইল্লা আন্তা সুবহানাকা ইন্নি কুন্তু মিনাজ জোয়ালিমিন", target: 10, reward: "দোয়া ইউনুস; বিপদে পড়ে এই দোয়া করলে আল্লাহ তাআলা অবশ্যই তা কবুল করেন।" },
    { id: 8, category: "কৃতজ্ঞতা", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", bangla: "আলহামদুলিল্লাহি রব্বিল আলামিন", target: 33, reward: "নেয়ামতের শুকরিয়া আদায় করলে আল্লাহ নিয়ামত আরও বাড়িয়ে দেন।" },
    { id: 9, category: "তওহীদ", arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", bangla: "হাসবুনাল্লাহু ওয়ানি'মাল ওয়াকিল", target: 33, reward: "আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনি কতই না চমৎকার কর্মবিধায়ক।" },
    { id: 10, category: "সুরক্ষা", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ", bangla: "বিসমিল্লাহিল্লাজি লা ইয়াদুররু মা'আসমিহি শাইয়ুন", target: 3, reward: "সকাল-সন্ধ্যায় ৩ বার পড়লে আসমান-জমিনের কোনো কিছু ক্ষতি করতে পারবে না।" },
    { id: 11, category: "মর্যাদা", arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", bangla: "আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়ুল কাইয়ুম (আয়াতুল কুরসি)", target: 1, reward: "ফরজ সালাতের পর পড়লে মৃত্যুর সাথে সাথেই জান্নাত। রাতে পড়লে শয়তান থেকে সুরক্ষা।" },
    { id: 12, category: "ক্ষমা", arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ", bangla: "রব্বিগফিরলী ওয়াতুব আলাইয়্যা", target: 70, reward: "রাসূলুল্লাহ (সা.) মজলিশে বসে এই ইস্তিগফারটি ১০০ বার পর্যন্ত পড়তেন।" }
  ];

  // স্টেটসমূহ
  const [selectedZikir, setSelectedZikir] = useState(zikirList[0]);
  const [count, setCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState("সব");

  // ইউনিক ক্যাটাগরি লিস্ট তৈরি
  const categories = ["সব", ...new Set(zikirList.map(item => item.category))];
  
  // ফিল্টার অনুযায়ী জিকির লিস্ট
  const filteredZikirList = activeFilter === "সব" 
    ? zikirList 
    : zikirList.filter(item => item.category === activeFilter);

  // প্রোগ্রেস পার্সেন্টেজ হিসাব ($inline$ বা $$display$$ মেথড ছাড়া সাধারণ হিসাব)
  const progressPercent = Math.min((count / selectedZikir.target) * 100, 100);

  const handleTap = () => {
    if (count < selectedZikir.target) {
      setCount(prev => prev + 1);
      // মোবাইলে হালকা ভাইব্রেশন ফিল (UX Improve)
      if (navigator.vibrate) {
        navigator.vibrate(40);
      }
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleZikirChange = (zikir) => {
    setSelectedZikir(zikir);
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-800 font-sans pb-16 selection:bg-purple-200">

      {/* প্রিমিয়াম মডার্ন হেডার */}
      <div className="relative bg-linear-to-b from-slate-950 via-purple-950 to-slate-900 text-white pt-8 pb-24 px-6 rounded-b-[3rem] shadow-xl border-b border-purple-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-purple-700/10 via-transparent to-transparent opacity-70" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-purple-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> প্রতিদিনের আত্মশুদ্ধি
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-purple-50 to-amber-100 tracking-wide">
            ডিজিটাল তাসবিহ ও দোয়া কাউন্টার
          </h1>
          <p className="text-purple-200/60 text-xs md:text-sm max-w-md mx-auto">
            রাসূলুল্লাহ (সা.) বলেছেন, "আল্লাহর জিকির ছাড়া অধিক কথা বলো না।" আপনার পছন্দের দোয়াটি নির্বাচন করে জিকির শুরু করুন।
          </p>
        </div>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 -mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">

        {/* বাম পাশ: মূল কাউন্টার ড্যাশবোর্ড */}
        <div className="lg:col-span-2 flex flex-col bg-white p-6 md:p-8 rounded-4xl border border-slate-100 shadow-xl shadow-purple-950/5 space-y-6 transition-all">
          
          {/* লাইভ ডিসপ্লে এরিয়া */}
          <div className="text-center space-y-3 py-6 px-4 bg-slate-50/50 rounded-2xl border border-slate-100 min-h-35 flex flex-col justify-center relative overflow-hidden">
            <span className="absolute top-2 left-3 text-[10px] uppercase tracking-wider font-bold text-purple-900/40 px-2 py-0.5 bg-purple-50 rounded-md">
              {selectedZikir.category}
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedZikir.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-loose tracking-wide dir-rtl px-2"
              >
                {selectedZikir.arabic}
              </motion.p>
            </AnimatePresence>
            <p className="text-sm md:text-base font-medium text-slate-600 max-w-xl mx-auto">{selectedZikir.bangla}</p>
          </div>

          {/* প্রোগ্রেস বার */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-linear-to-r from-purple-700 to-indigo-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* বড় ইন্টারঅ্যাক্টিভ ট্যাপ বাটন */}
          <div className="flex justify-center py-4">
            <button
              onClick={handleTap}
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-linear-to-tr from-slate-950 via-purple-950 to-indigo-950 text-white flex flex-col items-center justify-center shadow-2xl active:scale-[0.97] transition-all group overflow-hidden border-8 border-white ring-4 ring-purple-950/5"
            >
              {/* রিফ্লেকশন এফেক্ট */}
              <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-6xl md:text-7xl font-mono font-black tracking-tighter drop-shadow-md">
                {count}
              </span>
              <span className="text-[10px] uppercase tracking-widest opacity-50 mt-3 font-semibold">
                Tap Inside to Count
              </span>

              <div className="absolute bottom-5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full text-xs font-medium text-purple-200 shadow-sm">
                লক্ষ্য: {selectedZikir.target} বার
              </div>
            </button>
          </div>

          {/* স্ট্যাটাস ও কন্ট্রোল বার */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-5">
            <div className="text-sm font-bold text-slate-600">
              {count === selectedZikir.target ? (
                <span className="text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 animate-pulse">
                  <CheckCircle className="w-4 h-4" /> আলহামদুলিল্লাহ্‌ সম্পন্ন!
                </span>
              ) : (
                <span className="bg-slate-100 px-3 py-1.5 rounded-xl">
                  বাকি আছে: {selectedZikir.target - count} বার
                </span>
              )}
            </div>
            
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-xl border border-rose-100 transition-all active:scale-95 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> রিসেট কাউন্টার
            </button>
          </div>

          {/* ফজিলত ইনফো বক্স */}
          <div className="bg-linear-to-r from-amber-50/60 to-purple-50/40 p-4 rounded-2xl border border-purple-100/40 flex gap-3 items-start">
            <span className="text-xl mt-0.5">✨</span>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">এই জিকিরের ফজিলত</h4>
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{selectedZikir.reward}</p>
            </div>
          </div>
        </div>

        {/* ডান পাশ: জিকির সিলেকশন ও ফিল্টার প্যানেল */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1 text-slate-500">
            <BookOpen className="w-4 h-4 text-purple-700" />
            <h3 className="text-sm font-bold uppercase tracking-wider">দোয়া ও জিকির তালিকা</h3>
          </div>

          {/* ক্যাটাগরি ফিল্টার চিপস */}
          <div className="flex flex-wrap gap-1.5 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  activeFilter === cat
                    ? 'bg-purple-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-purple-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* স্ক্রোলযোগ্য জিকির কার্ডস */}
          <div className="space-y-3 max-h-140 overflow-y-auto pr-1 custom-scrollbar">
            {filteredZikirList.map((zikir) => (
              <button
                key={zikir.id}
                onClick={() => handleZikirChange(zikir)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex flex-col gap-2 shadow-sm relative overflow-hidden group ${
                  selectedZikir.id === zikir.id
                    ? 'bg-linear-to-r from-purple-900 via-indigo-950 to-slate-900 text-white border-transparent'
                    : 'bg-white text-slate-800 border-slate-100 hover:border-purple-200/60 hover:shadow-md'
                }`}
              >
                {/* ক্যাটাগরি ট্যাগ */}
                <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded self-start ${
                  selectedZikir.id === zikir.id ? 'bg-white/10 text-purple-200' : 'bg-slate-50 text-slate-400'
                }`}>
                  {zikir.category}
                </span>

                <p className={`text-right font-serif font-bold text-base md:text-lg leading-relaxed ${
                  selectedZikir.id === zikir.id ? 'text-amber-100' : 'text-purple-950'
                }`}>
                  {zikir.arabic}
                </p>
                
                <p className={`text-xs font-bold truncate ${selectedZikir.id === zikir.id ? 'text-slate-200' : 'text-slate-600'}`}>
                  {zikir.bangla}
                </p>

                <div className="flex items-center justify-between mt-1 pt-2 border-t border-dashed border-slate-100/10">
                  <span className={`text-[10px] font-semibold ${selectedZikir.id === zikir.id ? 'text-purple-300' : 'text-slate-400'}`}>
                    টার্গেট: <strong className={selectedZikir.id === zikir.id ? 'text-white' : 'text-slate-700'}>{zikir.target} বার</strong>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Zikir;