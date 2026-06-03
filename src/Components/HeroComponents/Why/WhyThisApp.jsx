import React from "react";
import { HelpCircle, CalendarCheck, BarChart2, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const WhyThisApp = () => {
  const benefits = [
    {
      title: "ধারাবাহিক দ্বীনি অভ্যাস",
      desc: "দৈনন্দিন সালাত, কুরআন তিলাওয়াত এবং জিকিরের জন্য একটি শক্তিশালী রুটিন তৈরি করুন যা আপনাকে দ্বীনের ওপর অবিচল রাখবে।",
      icon: CalendarCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100/50",
    },
    {
      title: "উন্নত ইবাদত ট্র্যাকিং",
      desc: "আপনার প্রতিদিনের ইবাদত ও আমলগুলো নিখুঁতভাবে মনিটর করুন এবং সময়ের সাথে নিজের আধ্যাত্মিক উন্নতি বুঝতে সাহায্য করবে।",
      icon: BarChart2,
      color: "text-teal-600 bg-teal-50 border-teal-100/50",
    },
    {
      title: "হালাল লাইফস্টাইল",
      desc: "খাদ্যাভ্যাসের প্রতি সচেতনতা বাড়াতে আপনার প্রতিদিনের খাবার ট্র্যাক করুন এবং আপনার প্রতিটি লোকমা হালাল কিনা তা নিশ্চিত করুন।",
      icon: ShieldCheck,
      color: "text-lime-600 bg-lime-50 border-lime-100/50",
    },
    {
      title: "আধ্যাত্মিক শৃঙ্খলা ও মনোযোগ",
      desc: "সুশৃঙ্খল রিমাইন্ডার এবং হ্যাবিট ট্র্যাকিংয়ের মাধ্যমে নিজের আত্মনিয়ন্ত্রণ বাড়ান এবং ইবাদতে একাগ্রতা ফিরিয়ে আনুন।",
      icon: HeartHandshake,
      color: "text-amber-600 bg-amber-50 border-amber-100/50",
    },
  ];

  // স্ট্যাগার্ড অ্যানিমেশন কনফিগারেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-[#faf7f2] font-sans text-slate-800 border-t border-slate-950/5">
      
      {/* হেডার সেকশন */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-900 tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-teal-600" /> অ্যাপটি কেন ব্যবহার করবেন?
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-black text-teal-950 tracking-tight">
          Why This App?
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
          শুধু ফিচার নয়, এটি আপনার বাস্তব জীবনে এমন কিছু ইতিবাচক পরিবর্তন আনবে যা আপনাকে প্রতিদিন মানসিকভাবে উন্নত করবে।
        </p>
      </div>

      {/* বেনিফিট কার্ডস গ্রিড */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {benefits.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl p-6 bg-white border border-slate-950/5 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* সূক্ষ্ম ব্যাকগ্রাউন্ড গ্লো */}
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-slate-50 rounded-full blur-xl group-hover:bg-teal-50/30 transition-colors duration-300" />

              {/* আইকন বক্স */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-105`}>
                <IconComponent className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* টাইটেল */}
              <h3 className="text-base font-bold font-serif text-teal-950 mt-5 group-hover:text-teal-600 transition-colors">
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

export default WhyThisApp;