import React from "react";
import { Compass, Target, Eye, Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#faf7f2] text-slate-800 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* শীর্ষ হেডার সেকশন */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-900 tracking-wide">
            <Compass className="w-3.5 h-3.5 text-teal-600 animate-spin-slow" /> আমাদের গল্প ও উদ্দেশ্য
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-teal-950">
            About <span className="text-teal-600">Our Mission</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            আধুনিক কর্মব্যস্ত জীবনের ব্যস্ততার মাঝেও যেন প্রতিটি মুসলিম ভাই ও বোন তাদের দৈনন্দিন ইবাদত, 
            সালাত ট্র্যাকিং এবং আত্মশুদ্ধির আমলগুলো নিখুঁতভাবে বজায় রাখতে পারেন, সেই লক্ষ্যেই আমাদের এই পথচলা।
          </p>
        </motion.div>

        {/* মিশন এবং ভিশন কার্ডস (গ্রিড লেআউট) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Our Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-teal-950/5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-700">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-teal-950">Our Mission</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              আমাদের মূল মিশন হলো প্রযুক্তির সঠিক ব্যবহারের মাধ্যমে মুসলমানদের দৈনন্দিন ইবাদত যেমন—পাঁচ ওয়াক্ত সালাত, 
              কুরআন তিলাওয়াত ও জিকিরের ধারাবাহিকতা বজায় রাখতে সাহায্য করা। ছোট ছোট কিন্তু নিয়মিত নেক আমলই একদিন বড় 
              আধ্যাত্মিক পরিবর্তনের রূপ নেয়।
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white p-8 rounded-3xl border border-teal-950/5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-teal-950">Our Vision</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              আমরা এমন একটি সচেতন মুসলিম কমিউনিটি গড়ে তুলতে চাই, যারা তাদের জীবনের প্রতিটি মূহুর্ত সুশৃঙ্খল এবং ইসলামি 
              আদর্শ অনুযায়ী পরিচালনা করবেন। এই অ্যাপ্লিকেশনটি যেন আপনার দ্বীনি সফরের এক বিশ্বস্ত সঙ্গী হয়ে উঠতে পারে, 
              সেটিই আমাদের স্বপ্ন।
            </p>
          </motion.div>

        </div>

        {/* ডেভেলপার ইনফো সেকশন */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-lg border border-teal-900/30 text-center relative overflow-hidden"
        >
          {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
          
          <div className="max-w-md mx-auto space-y-4 relative z-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-teal-400 mx-auto border border-white/10 shadow-inner">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-teal-400 block">Behind the Code</span>
            <h3 className="text-xl font-bold tracking-wide">Amit Mahmud Amil</h3>
            <p className="text-xs text-teal-200/70 font-medium">Full Stack & MERN Stack Developer</p>
            <div className="w-12 h-[2px] bg-teal-500/30 mx-auto my-2" />

           
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;