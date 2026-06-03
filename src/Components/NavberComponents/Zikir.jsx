import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Heart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const Zikir = () => {
  const navigate = useNavigate();
  
  // ৪টি অত্যন্ত ফজিলতপূর্ণ জিকির ডাটা
  const zikirList = [
    { id: 1, arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", bangla: "সুবহানাল্লাহি ওয়া বিহামদিহি", target: 100, reward: "দিনে ১০০ বার পড়লে সমুদ্রের ফেনা পরিমাণ গুনাহও ক্ষমা করা হয়।" },
    { id: 2, arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", bangla: "আস্তাগফিরুল্লাহ ওয়া আতুবু ইলাইহি", meaning: "আমি আল্লাহর কাছে ক্ষমা চাচ্ছি।", target: 100, reward: "রিজিকে বরকত বাড়ে এবং সমস্ত দুশ্চিন্তা থেকে মুক্তির পথ খুলে যায়।" },
    { id: 3, arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", bangla: "আল্লাহুম্মা সাল্লি ওয়া সাল্লিম আলা নাবিয়্যিনা মুহাম্মদ", target: 10, reward: "সকাল-সন্ধ্যায় ১০ বার পড়লে কেয়ামতের দিন নবীজী (সা.)-এর শাফায়াত মিলবে।" },
    { id: 4, arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", bangla: "লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ", target: 33, reward: "এটি জান্নাতের অন্যতম গোপন রত্নভাণ্ডার এবং দুশ্চিন্তার মহা ওষুধ।" },
  ];

  // অ্যাক্টিভ জিকির এবং কাউন্টার স্টেট
  const [selectedZikir, setSelectedZikir] = useState(zikirList[0]);
  const [count, setCount] = useState(0);

  const handleTap = () => {
    if (count < selectedZikir.target) {
      setCount(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleZikirChange = (zikir) => {
    setSelectedZikir(zikir);
    setCount(0); // নতুন জিকির সিলেক্ট করলে কাউন্টার রিসেট হবে
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যanation (Midnight/Purple Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white pt-6 pb-20 px-6 rounded-b-[2.5rem] shadow-lg border-b border-purple-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
          
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Tasbih Counter</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-purple-950/60 border border-purple-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-purple-200">
            <Heart className="w-3.5 h-3.5 text-purple-400" /> জিকির ও তাসবিহ
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-purple-50">ডিজিটাল তাসবিহ কাউন্টার</h1>
          <p className="text-purple-200/70 text-xs md:text-sm">নিচের যেকোনো একটি জিকির সিলেক্ট করে স্ক্রিনে ট্যাপ করুন</p>
        </div>
      </div>

      {/* মেইন ইন্টারঅ্যাক্টিভ কাউন্টার এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        
        {/* বাম পাশ: ডিজিটাল বিগ কাউন্টার স্ক্রিন */}
        <div className="md:col-span-2 flex flex-col items-center justify-center bg-white p-8 rounded-3xl border border-purple-950/5 shadow-md space-y-6">
          
          <div className="text-center space-y-2 min-h-[100px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.p 
                key={selectedZikir.id}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="text-2xl md:text-3xl font-serif font-bold text-purple-950 leading-relaxed"
              >
                {selectedZikir.arabic}
              </motion.p>
            </AnimatePresence>
            <p className="text-sm font-semibold text-slate-500">{selectedZikir.bangla}</p>
          </div>

          {/* বড় বৃত্তাকার মেইন ট্যাপ বাটন */}
          <button 
            onClick={handleTap}
            className="relative w-52 h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-tr from-purple-950 to-indigo-900 text-white flex flex-col items-center justify-center shadow-xl active:scale-95 transition-all group overflow-hidden border-4 border-white ring-8 ring-purple-900/5"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-5xl md:text-6xl font-mono font-black tracking-tight">{count}</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60 mt-2 font-bold">Tap Anywhere Inside</span>
            
            {/* প্রোগ্রেস রিং এর মতো নিচে টার্গেট শো করবে */}
            <div className="absolute bottom-4 bg-black/20 backdrop-blur-md px-3 py-0.5 rounded-full text-[11px] font-medium text-purple-200">
              লক্ষ্য: {selectedZikir.target}
            </div>
          </button>

          {/* রিসেট এবং স্ট্যাটাস বার */}
          <div className="flex items-center justify-between w-full border-t border-slate-100 pt-4 px-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
              {count === selectedZikir.target ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> আলহামদুলিল্লাহ্‌ সম্পন্ন!
                </span>
              ) : (
                <span>বাকি আছে: {selectedZikir.target - count} বার</span>
              )}
            </div>
            <button 
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-bold text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100 transition-all active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" /> রিসেট কাউন্টার
            </button>
          </div>

          {/* লাইভ জিকিরের ফজিলত বক্স */}
          <div className="w-full bg-purple-50/70 p-3.5 rounded-xl border border-purple-100/50">
            <p className="text-xs text-purple-950 font-medium leading-relaxed">
              ✨ <span className="font-bold">ফজিলত:</span> {selectedZikir.reward}
            </p>
          </div>
        </div>

        {/* ডান পাশ: জিকির সিলেকশন লিস্ট */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 px-1">জিকির লিস্ট পরিবর্তন করুন</h3>
          <div className="space-y-2.5">
            {zikirList.map((zikir) => (
              <button
                key={zikir.id}
                onClick={() => handleZikirChange(zikir)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex flex-col gap-1 shadow-sm ${
                  selectedZikir.id === zikir.id
                    ? 'bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-transparent'
                    : 'bg-white text-slate-800 border-purple-950/5 hover:border-purple-900/20'
                }`}
              >
                <p className={`text-right font-serif font-bold text-lg ${selectedZikir.id === zikir.id ? 'text-purple-100' : 'text-purple-950'}`}>
                  {zikir.arabic}
                </p>
                <p className={`text-xs font-bold truncate ${selectedZikir.id === zikir.id ? 'text-white' : 'text-slate-800'}`}>
                  {zikir.bangla}
                </p>
                <span className={`text-[10px] font-semibold tracking-wider mt-1 rounded px-1.5 py-0.5 self-start ${selectedZikir.id === zikir.id ? 'bg-white/10 text-purple-200' : 'bg-slate-100 text-slate-500'}`}>
                  টার্গেট: {zikir.target} বার
                </span>
              </button>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Zikir;