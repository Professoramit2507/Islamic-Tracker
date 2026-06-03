import React, { useState } from "react";
import { ArrowLeft, CheckCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Fajr = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("virtues"); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত ফজরের ফজিলত ও গুরুত্ব
  const fajrPoints = [
    {
      id: "১",
      text: "রাসুলুল্লাহ (সা.) বলেছেন, যে ব্যক্তি ফজর নামাজ আদায় করল, সে আল্লাহর প্রত্যক্ষ জিম্মাদারী বা নিরাপত্তায় চলে গেল।",
    },
    {
      id: "৭",
      text: "ফজরের সময় বিশুদ্ধ বাতাস ও ওজু ফুসফুসকে সতেজ করে এবং সারাদিনের জন্য শরীরকে কর্মক্ষম রাখে।",
    },
    {
      id: "২",
      text: "ফজরের ২ রাকাত সুন্নতের সওয়াব দুনিয়া ও এর ভেতরের সবকিছুর চেয়েও বেশি মূল্যবান।",
    },
    {
      id: "৮",
      text: "ভোরে জলদি ওঠার অভ্যাস মানুষের আয়ু, রিজিক এবং সময়ের মাঝে বিশেষ বরকত এনে দেয়।",
    },
    {
      id: "৩",
      text: "জামায়াতের সাথে ফজরের নামাজ আদায় করলে পুরো রাত জেগে নফল ইবাদত করার সমান সওয়াব মেলে।",
    },
    {
      id: "৯",
      text: "রাতের শেষ ভাগে যখন ফেরেশতারা ডিউটি পরিবর্তন করেন, তখন আল্লাহর দরবারে আপনার নাম ইবাদতকারী হিসেবে ওপরে ওঠে।",
    },
    {
      id: "৪",
      text: "ফজর ও আসর—এই দুই ঠান্ডা সময়ের নামাজ নিয়মিত আদায়কারী কখনই জাহান্নামে প্রবেশ করবে না।",
    },
    {
      id: "১০",
      text: "অন্ধকার রাতে কষ্ট করে যারা ফজর নামাজে যায়, কেয়ামতের দিন তাদের জন্য পূর্ণাঙ্গ নূর থাকবে।",
    },
    {
      id: "৫",
      text: "নিয়মিত ফজর আদায়ের মাধ্যমে একজন মুমিন মুনাফিকীর খাতা থেকে নিজের নাম সম্পূর্ণ মুক্ত করতে পারে।",
    },
    {
      id: "১১",
      text: "সকালে আল্লাহর সিজদার মাধ্যমে দিন শুরু করলে সারাদিনের মানসিক অবসাদ ও দুশ্চিন্তা দূর হয়ে যায়।",
    },
    {
      id: "৬",
      text: "নবীজী (সা.) বলেছেন, ফজর ও এশার নামাজ আদায়কারী কেয়ামতের দিন মহান আল্লাহর পবিত্র দিদার লাভ করবে।",
    },
    {
      id: "১২",
      text: "ঘুমের চেয়ে নামাজ উত্তম—এই ঘোষণা মেনে অলসতা ত্যাগ করা খাঁটি ঈমানী শক্তির সবচেয়ে বড় প্রমাণ।",
    },
  ];

  // ফজর নামাজের রাকাত বিন্যাস
  const rakatDetails = [
    {
      type: "২ রাকাত সুন্নত",
      status: "সুন্নতে মুয়াক্কাদা (ফরজের আগে)",
      rule: "ফজরের ফরজ নামাজের আগে এটি পড়তে হয়। এই সুন্নতের গুরুত্ব অন্য যেকোনো নফল বা সুন্নতের চেয়ে অনেক বেশি।",
    },
    {
      type: "২ রাকাত ফরজ",
      status: "ফরজ (আবশ্যক)",
      rule: "জামায়াতে পড়লে ইমাম উচ্চস্বরে কিরাত পাঠ করবেন, একাকী পড়লে নিজের মতো করে ২ রাকাত ফরজ আদায় করতে হবে।",
    },
  ];

  // ফজরের নামাজের ধাপে ধাপে আমল ও নিয়ম
  const prayerSteps = [
    {
      step: "১",
      title: "শয্যা ত্যাগ ও ওজু করা",
      desc: "ফজরের আজান শোনার পর অলসতা দূর করে 'আলহামদুলিল্লাহ' বলে বিছানা ছাড়া এবং সুন্দরভাবে ওজু করে নামাজের জন্য প্রস্তুতি নেওয়া।",
    },
    {
      step: "২",
      title: "২ রাকাত সুন্নত আদায়",
      desc: "ফরজ নামাজের ইকামত দেওয়ার আগেই একাগ্রতার সাথে ফজরের অত্যন্ত গুরুত্বপূর্ণ ২ রাকাত সুন্নতে মুয়াক্কাদা নামাজ ঘরে বা মসজিদে আদায় করে নেওয়া।",
    },
    {
      step: "৩",
      title: "২ রাকাত ফরজ নামাজ",
      desc: "ইমামের পেছনে বা একাকী দাঁড়িয়ে তাকবীরে তাহরিমা বলে হাত বাঁধা। প্রথম ২ রাকাতে সূরা ফাতিহার সাথে অন্য সূরা মিলিয়ে রুকু-সেজদা সম্পন্ন করা।",
    },
    {
      step: "৪",
      title: "আখেরী বৈঠক ও সালাম",
      desc: "দ্বিতীয় রাকাতে সেজদা শেষে বসে তাশাহহুদ (আত্তাহিয়াতু), দুরুদ শরিফ ও দোয়া মাসূরা পড়ে ডানে ও বামে সালাম ফিরিয়ে নামাজ শেষ করা এবং ইশরাক পর্যন্ত জিকির করা।",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      {/* হেডার ব্যানার (Midnight/Dawn Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-indigo-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
            Dawn Guide
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-indigo-950/60 border border-indigo-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-indigo-200">
            {/* <Horizon className="w-3.5 h-3.5 text-indigo-400" /> সালাতুল ফজর */}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-indigo-50">
            ফজর নামাজের ফজিলত ও নিয়মাবলী
          </h1>
          <p className="text-indigo-200/70 text-xs md:text-sm">
            সর্বমোট ৪ রাকাত (২ রাকাত সুন্নত + ২ রাকাত ফরজ)
          </p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-indigo-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button
          onClick={() => setActiveTab("virtues")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "virtues" ? "bg-indigo-900 text-white shadow" : "text-slate-900 hover:bg-indigo-900/5"}`}
        >
          ১২টি ফজিলত
        </button>
        <button
          onClick={() => setActiveTab("rakats")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "rakats" ? "bg-indigo-900 text-white shadow" : "text-slate-900 hover:bg-indigo-900/5"}`}
        >
          রাকাত বিন্যাস
        </button>
        <button
          onClick={() => setActiveTab("steps")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "steps" ? "bg-indigo-900 text-white shadow" : "text-slate-900 hover:bg-indigo-900/5"}`}
        >
          পড়ার নিয়ম
        </button>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        {/* ট্যাব ১: ১২টি ফজিলত */}
        {activeTab === "virtues" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-indigo-950/5 shadow-md"
          >
            {fajrPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl border border-indigo-900/5 bg-white shadow-sm group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-950 font-serif font-black text-xl flex items-center justify-center border border-indigo-200/40">
                  {item.id}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ২: রাকাত বিন্যাস */}
        {activeTab === "rakats" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {rakatDetails.map((rakat, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-50 rounded-xl text-indigo-900 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">
                      {rakat.type}
                    </h3>
                    <span className="text-xs bg-indigo-100 text-indigo-950 px-2 py-0.5 rounded-md font-semibold">
                      {rakat.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 md:max-w-md bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {rakat.rule}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ৩: কীভাবে পড়তে হবে (Steps) */}
        {activeTab === "steps" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-3xl border border-indigo-950/5 shadow-md space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-indigo-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">
                ফজর নামাজের ধারাবাহিক নিয়মাবলী
              </h2>
            </div>
            <div className="relative border-l-2 border-dashed border-indigo-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* টাইমলাইন ডট সার্কেল */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-indigo-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/80 space-y-1">
                    <h4 className="text-base font-bold text-slate-800 font-serif">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
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

export default Fajr;
