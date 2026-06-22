import React, { useState } from "react";
import { Moon, Sun, Sunrise, Sunset, Sparkles, MapPin, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const NamajTime = () => {
  // আজান নোটিফিকেশন মিউট/আনমিউট করার জন্য স্টেট
  const [isMuted, setIsMuted] = useState(false);
  
  // গ্লোবাল ফিচার লেআউটের সাথে সামঞ্জস্যপূর্ণ নামাজের সময়সূচী
  const prayerTimes = [
    { name: "ফজর", time: "০৪:১২ AM", icon: Moon, active: false },
    { name: "সূর্যোদয়", time: "০৫:৪০ AM", icon: Sunrise, isNotPrayer: true },
    { name: "যোহর", time: "১২:১৫ PM", icon: Sun, active: true }, // বর্তমান সক্রিয় ওয়াক্ত
    { name: "আসর", time: "০৪:৩০ PM", icon: Sun, active: false },
    { name: "মাগরিব", time: "০৬:৪৫ PM", icon: Sunset, active: false },
    { name: "ইশা", time: "০৮:১৫ PM", icon: Moon, active: false },
  ];

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-[36px] border border-slate-950/5 shadow-2xl p-6 sm:p-10 relative overflow-hidden space-y-8">
        
        {/* টপ মেট্রিক্স প্যানেল */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-3 py-1 rounded-full text-[11px] font-bold text-teal-900 tracking-wide">
              <Sparkles className="w-3 h-3 text-teal-600 animate-pulse" /> দৈনিক সালাত সময়সূচী
            </div>
            <h2 className="text-3xl font-serif font-black text-teal-950 tracking-tight">
              নামাজের সময়সূচী
            </h2>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-400 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>ঢাকা, বাংলাদেশ</span>
            </div>
          </div>

          {/* কুইক ইউটিলিটি অপশন */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-2xl text-slate-600 transition-all flex items-center gap-2 text-xs font-bold"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-500" />
                  <span>মিউট করা আছে</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-teal-600 animate-bounce" />
                  <span>আজান চালু</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* রানিং ওয়াক্ত কাউন্টডাউন ডিসপ্লে */}
        <div className="bg-gradient-to-br from-teal-950 to-slate-950 text-white rounded-[24px] p-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-teal-400">বর্তমান সালাতের সময়</span>
              <h3 className="text-2xl font-serif font-bold text-teal-50">যোহরের ওয়াক্ত</h3>
              <p className="text-xs text-teal-200/60 font-medium">পরবর্তী ওয়াক্ত (আসর) শুরু হতে প্রায় ৪ ঘণ্টা বাকি</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl text-center">
              <span className="block text-[10px] uppercase font-black tracking-widest text-teal-300">জামায়াত অ্যালার্ট</span>
              <span className="text-lg font-mono font-bold tracking-wider text-teal-50">১২:৩০ PM</span>
            </div>
          </div>
        </div>

        {/* নামাজের সময়সূচী গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prayerTimes.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-5 rounded-2xl border transition-all relative overflow-hidden flex items-center justify-between ${
                  item.active 
                    ? "bg-teal-50/60 border-teal-500/30 shadow-md shadow-teal-900/5" 
                    : item.isNotPrayer 
                    ? "bg-slate-50/40 border-slate-200/50 opacity-60" 
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* অ্যাক্টিভ ওয়াক্তের জন্য পালসিং লাইভ রিং */}
                {item.active && (
                  <span className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                )}

                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl ${item.active ? "bg-teal-500 text-slate-950" : "bg-slate-50 text-teal-600"}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 font-black">
                      {item.name}
                    </h4>
                    <span className="text-xs font-medium text-slate-400">
                      {item.isNotPrayer ? "প্রাকৃতিক সময়" : "সালাতের সময়"}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-base font-mono font-bold ${item.active ? "text-teal-950 text-lg" : "text-slate-800"}`}>
                    {item.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ফুটার নোট */}
        <p className="text-center text-[11px] text-slate-400 font-medium">
          * ইসলামিক ফাউন্ডেশনের স্ট্যান্ডার্ড প্যারামিটার অনুযায়ী সময় গণনা করা হয়েছে। স্থানীয় মসজিদের সময়ের সাথে কিছুটা পার্থক্য হতে পারে।
        </p>

      </div>
    </div>
  );
};

export default NamajTime;