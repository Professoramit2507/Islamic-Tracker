import React, { useEffect, useState } from "react";
import { Users, Star, BarChart3, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [count, setCount] = useState({
    users: 0,
    rating: 0,
    actions: 0,
    discipline: 0,
  });

  useEffect(() => {
    let start = 0;
    const steps = 60;
    const interval = 1500 / steps;

    const timer = setInterval(() => {
      start++;

      setCount({
        users: Math.min(Math.floor((2507 / steps) * start), 2507),
        // ফ্লোটিং পয়েন্ট স্ট্রিং কনভার্সন ফিক্স করা হয়েছে কাউন্টিং স্মুথ করার জন্য
        rating: Math.min(parseFloat(((4.8 / steps) * start).toFixed(1)), 4.8),
        actions: Math.min(Math.floor((25000 / steps) * start), 25000),
        discipline: Math.min(Math.floor((90 / steps) * start), 90),
      });

      if (start === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "সক্রিয় ব্যবহারকারী",
      value: count.users.toLocaleString(), // সংখ্যাটি কমা ফরম্যাটে দেখাবে (যেমন: ২,৫০৭)
      suffix: "+",
      icon: Users,
      color: "text-teal-600 bg-teal-50 border-teal-100/50",
    },
    {
      label: "অ্যাপ রেটিং",
      value: count.rating.toFixed(1),
      suffix: " ★",
      icon: Star,
      color: "text-amber-500 bg-amber-50 border-amber-100/50",
    },
    {
      label: "দৈনিক আমল/নেক কাজ",
      value: count.actions.toLocaleString(),
      suffix: "+",
      icon: BarChart3,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100/50",
    },
    {
      label: "উন্নত দ্বীনি শৃঙ্খলা",
      value: count.discipline,
      suffix: "%",
      icon: TrendingUp,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100/50",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-[#faf7f2] font-sans text-slate-800 border-t border-slate-950/5">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* হেডার সেকশন */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-900 tracking-wide">
            <Award className="w-3.5 h-3.5 text-teal-600" /> আলহামদুলিল্লাহ্‌ আমাদের অগ্রগতি
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-teal-950 tracking-tight">
            Our Growing Community
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            হাজারো মুসলিম ভাই-বোনদের আত্মশুদ্ধি এবং ইবাদতের ধারাবাহিকতা রক্ষার এক নির্ভরযোগ্য মাধ্যম।
          </p>
        </div>

        {/* স্ট্যাটস কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-slate-950/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
              >
                {/* সূক্ষ্ম ব্যাকগ্রাউন্ড গ্লো */}
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-slate-50 rounded-full blur-xl group-hover:bg-teal-50/30 transition-colors duration-300" />

                {/* আইকন বক্স */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border flex-shrink-0 ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-105`}>
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* ডেটা টেক্সট */}
                <div className="space-y-0.5 relative z-10">
                  <p className="text-2xl font-black font-sans text-teal-950 tracking-tight flex items-baseline">
                    {item.value}
                    <span className="text-lg font-bold text-teal-600 ml-0.5">{item.suffix}</span>
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 font-bold tracking-wide">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;