import React from "react";
import { CheckSquare, BookOpen, Star, Utensils, BarChart3, BellRing, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CoreFeatures = () => {
  const features = [
    {
      title: "সালাত ট্র্যাকার",
      desc: "৫ ওয়াক্ত নামাজ ট্র্যাক করুন এবং আপনার সালাতের ধারাবাহিকতা বৃদ্ধি করুন।",
      icon: CheckSquare,
      color: "text-teal-600 bg-teal-50 border-teal-100",
    },
    {
      title: "কুরআন ও আত্মশুদ্ধি",
      desc: "প্রতিদিনের কুরআন তিলাওয়াত মনিটর করুন এবং ধাপে ধাপে নিজের উন্নতি নিশ্চিত করুন।",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "জিকির ও তাসবিহ",
      desc: "সহজেই আপনার প্রতিদিনের জিকিরের লক্ষ্যমাত্রা গণনা এবং পরিচালনা করুন।",
      icon: Star,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "হালাল ফুড ট্র্যাকার",
      desc: "একটি সম্পূর্ণ হালাল ও স্বাস্থ্যকর লাইফস্টাইল বজায় রাখতে আপনার খাবার লগ করুন।",
      icon: Utensils,
      color: "text-lime-600 bg-lime-50 border-lime-100",
    },
    {
      title: "দৈনন্দিন ইসলামিক স্কোর",
      desc: "আপনার দ্বীনি অভ্যাস ও প্রোগ্রেসের উপর ভিত্তি করে দৈনিক অ্যানালিটিক্স স্কোর পান।",
      icon: BarChart3,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      title: "স্মার্ট রিমাইন্ডার",
      desc: "সালাত, জিকির এবং সুন্নতি অভ্যাসগুলোর জন্য সময়মতো কাস্টমাইজড পুশ নোটিফিকেশন।",
      icon: BellRing,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
  ];

  // ফ্রেমার মোশন কন্টেইনার ভেরিয়েন্ট (স্ট্যাগার্ড অ্যানিমেশনের জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-[#faf7f2] font-sans text-slate-800">
      
      {/* হেডার সেকশন */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-900 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" /> অ্যাপের মূল মডিউলসমূহ
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-black text-teal-950 tracking-tight">
          Core Features
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
          একটি আধুনিক ও সুশৃঙ্খল ইসলামিক লাইফস্টাইল গড়ে তোলার জন্য প্রয়োজনীয় সব ফিচার এক জায়গায়।
        </p>
      </div>

      {/* কার্ডস গ্রিড (অ্যানিমেটেড) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {features.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl p-6 bg-white border border-slate-950/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* ব্যাকগ্রাউন্ডে সূক্ষ্ম হোভার গ্লো ইফেক্ট */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-slate-50 rounded-full blur-xl group-hover:bg-teal-50/40 transition-colors duration-300" />

              {/* আইকন বক্স */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-105`}>
                <IconComponent className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* টাইটেল */}
              <h3 className="text-lg font-bold font-serif text-teal-950 mt-5 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>

              {/* ডেসক্রিপশন */}
              <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed font-medium">
                {item.desc}
              </p>

            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};

export default CoreFeatures;