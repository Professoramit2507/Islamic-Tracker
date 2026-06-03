import React, { useState } from "react";
import { ArrowLeft, Moon, CheckCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Isha = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("virtues"); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত ইশার ফজিলত ও গুরুত্ব
  const ishaPoints = [
    {
      id: "১",
      text: "রাসুলুল্লাহ (সা.) বলেছেন, মুনাফিকদের জন্য ইশা ও ফজরের নামাজ জামায়াতে আদায় করা সবচেয়ে বেশি কষ্টকর।",
    },
    {
      id: "৭",
      text: "সারাদিনের ক্লান্তি শেষে ইশার ওজু ও নামাজ রাতের ঘুমের আগে মনকে সম্পূর্ণ পবিত্র ও শান্ত করে।",
    },
    {
      id: "২",
      text: "জামায়াতের সাথে ইশার নামাজ আদায় করলে অর্ধেক রাত জেগে নফল ইবাদত করার সমান সওয়াব মেলে।",
    },
    {
      id: "৮",
      text: "ইশার পর বিতর নামাজ আদায় করা অত্যন্ত গুরুত্বপূর্ণ সুন্নাহ, যা রাতের ইবাদতকে পূর্ণতা দেয়।",
    },
    {
      id: "৩",
      text: "কষ্ট সত্ত্বেও যারা অন্ধকারে হেঁটে ইশার নামাজে যায়, কেয়ামতের দিন তাদের জন্য পূর্ণাঙ্গ নূর থাকবে।",
    },
    {
      id: "৯",
      text: "রাতের নিস্তব্ধতায় আল্লাহর দরবারে সিজদা ও মোনাজাত মানসিক শান্তি এবং গভীর মনোযোগ বাড়ায়।",
    },
    {
      id: "৪",
      text: "ইশা ও ফজর—এই দুই প্রান্তের নামাজ নিয়মিত আদায়কারী আল্লাহর বিশেষ জিম্মাদারি বা নিরাপত্তায় থাকে।",
    },
    {
      id: "১০",
      text: "দিনের সমস্ত কাজের সমাপ্তি আল্লাহর ইবাদতের মাধ্যমে করা একজন খাঁটি মুমিনের অন্যতম বৈশিষ্ট্য।",
    },
    {
      id: "৫",
      text: "ইশার নামাজ সময়মতো পড়ার মাধ্যমে সারাদিনের ছোটখাটো গুনাহ খাতা থেকে ক্ষমা পাওয়া যায়।",
    },
    {
      id: "১১",
      text: "রাতের প্রথম প্রহরে ইশা আদায় করে দ্রুত ঘুমানো নবীজী (সা.)-এর একটি চমৎকার স্বাস্থ্যসম্মত সুন্নাহ।",
    },
    {
      id: "৬",
      text: "ফেরেশতাগণ এই সময়ে রাতের আমলনামা লিপিবদ্ধ করার প্রক্রিয়া শুরু করেন, তাই নামাজে থাকা বরকতময়।",
    },
    {
      id: "১২",
      text: "নিয়মিত ইশা আদায়ের মাধ্যমে অলসতা দূর হয় এবং শেষ রাতে তাহাজ্জুদের জন্য ওঠা সহজ হয়।",
    },
  ];

  // ইশা নামাজের রাকাত বিন্যাস
  const rakatDetails = [
    {
      type: "৪ রাকাত সুন্নত",
      status: "সুন্নতে গায়রে মুয়াক্কাদা (ঐচ্ছিক)",
      rule: "ফরজের আগে এটি পড়তে হয়। সাধারণ নিয়মে প্রতি রাকাতেই সূরার সাথে সূরা মিলাতে হবে।",
    },
    {
      type: "৪ রাকাত ফরজ",
      status: "ফরজ (আবশ্যক)",
      rule: "প্রথম ২ রাকাতে ইমাম উচ্চস্বরে কিরাত পড়বেন, শেষ ২ রাকাতে শুধু সূরা ফাতিহা পড়তে হবে।",
    },
    {
      type: "২ রাকাত সুন্নত",
      status: "সুন্নতে মুয়াক্কাদা (ফরজের পরে)",
      rule: "ফরজ নামাজ শেষে এই ২ রাকাত সুন্নত আদায় করা আবশ্যক ও অত্যন্ত সওয়াবের কাজ।",
    },
    {
      type: "২ রাকাত নফল",
      status: "নফল (ঐচ্ছিক)",
      rule: "ইচ্ছা হলে অতিরিক্ত সওয়াবের জন্য সাধারণ নিয়মে ২ রাকাত নফল নামাজ পড়া যায়।",
    },
    {
      type: "৩ রাকাত বিতর",
      status: "ওয়াজিব (আবশ্যক)",
      rule: "ইশার রাতের শেষ নামাজ। ৩য় রাকাতে সূরা মিলানোর পর অতিরিক্ত তাকবীর বলে 'দোয়া কুনুত' পড়তে হয়।",
    },
  ];

  // ইশা নামাজের ধাপে ধাপে আমল ও নিয়ম
  const prayerSteps = [
    {
      step: "১",
      title: "৪ রাকাত ফরজ আদায়",
      desc: "প্রথম ২ রাকাতে সূরা ফাতিহার সাথে সূরা মিলিয়ে এবং শেষ ২ রাকাতে শুধু সূরা ফাতিহা পড়ে ৪ রাকাত ফরজ সম্পন্ন করে সালাম ফেরাবেন।",
    },
    {
      step: "২",
      title: "২ রাকাত সুন্নত ও নফল",
      desc: "ফরজ শেষে দাঁড়িয়ে সাধারণ ২ রাকাত নামাজের নিয়মে সুন্নতে মুয়াক্কাদা এবং ইচ্ছা হলে ২ রাকাত নফল নামাজ শেষ করবেন।",
    },
    {
      step: "৩",
      title: "৩ রাকাত বিতর (১ম ও ২য় রাকাত)",
      desc: "বিতরের নিয়ত করে ১ম ও ২য় রাকাতে সূরা মেলাবেন এবং ২য় রাকাতে বসে আত্তাহিয়াতু পড়ে ৩য় রাকাতের জন্য খাড়া হবেন।",
    },
    {
      step: "৪",
      title: "৩য় রাকাত ও দোয়া কুনুত",
      desc: "৩য় রাকাতে সূরা ফাতিহা ও অন্য সূরা পড়ে রুকুতে না গিয়ে 'আল্লাহু আকবার' বলে কান পর্যন্ত হাত উঠিয়ে আবার বাঁধবেন এবং 'দোয়া কুনুত' পড়ে রুকু-সেজদা ও সালামের মাধ্যমে নামাজ শেষ করবেন।",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      {/* হেডার ব্যানার (Midnight Blue Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-blue-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
            Night Guide
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-blue-950/60 border border-blue-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-blue-200">
            <Moon className="w-3.5 h-3.5 text-blue-400" /> সালাতুল ইশা
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-blue-50">
            ইশা নামাজের ফজিলত ও নিয়মাবলী
          </h1>
          <p className="text-blue-200/70 text-xs md:text-sm">
            সর্বমোট ১৫ রাকাত পর্যন্ত (৪ সুন্নত + ৪ ফরজ + ২ সুন্নত + ২ নফল + ৩
            বিতর)
          </p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-blue-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button
          onClick={() => setActiveTab("virtues")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "virtues" ? "bg-blue-900 text-white shadow" : "text-slate-900 hover:bg-blue-900/5"}`}
        >
          ১২টি ফজিলত
        </button>
        <button
          onClick={() => setActiveTab("rakats")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "rakats" ? "bg-blue-900 text-white shadow" : "text-slate-900 hover:bg-blue-900/5"}`}
        >
          রাকাত বিন্যাস
        </button>
        <button
          onClick={() => setActiveTab("steps")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "steps" ? "bg-blue-900 text-white shadow" : "text-slate-900 hover:bg-blue-900/5"}`}
        >
          পড়ার নিয়ম
        </button>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        {activeTab === "virtues" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-blue-950/5 shadow-md"
          >
            {ishaPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl border border-blue-900/5 bg-white shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-950 font-serif font-black text-xl flex items-center justify-center border border-blue-200/40">
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

        {activeTab === "rakats" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {rakatDetails.map((rakat, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-blue-950/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-900 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">
                      {rakat.type}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-950 px-2 py-0.5 rounded-md font-semibold">
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

        {activeTab === "steps" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-3xl border border-blue-950/5 shadow-md space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-blue-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">
                ইশা ও বিতর নামাজের ধারাবাহিক নিয়মাবলী
              </h2>
            </div>
            <div className="relative border-l-2 border-dashed border-blue-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-blue-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
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

export default Isha;
