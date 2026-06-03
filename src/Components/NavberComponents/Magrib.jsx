import React, { useState } from "react";
import { ArrowLeft, Sunset, CheckCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Magrib = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("virtues"); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত মাগরিবের ফজিলত ও গুরুত্ব
  const magribPoints = [
    {
      id: "১",
      text: "মাগরিবের সময় হওয়া মাত্রই দ্রুত নামাজ আদায় করা নবীজী (সা.)-এর অন্যতম গুরুত্বপূর্ণ সুন্নাহ ও নির্দেশ।",
    },
    {
      id: "৭",
      text: "দিনের আলো এবং রাতের অন্ধকারের এই মহাসন্ধিক্ষণে নামাজ আদায় করা অন্তরের কপটতা দূর করতে সাহায্য করে।",
    },
    {
      id: "২",
      text: "রাসুলুল্লাহ (সা.) বলেছেন, আমার উম্মত ততদিন কল্যাণের ওপর থাকবে, যতদিন তারা মাগরিবের নামাজে দেরি করবে না।",
    },
    {
      id: "৮",
      text: "মাগরিবের নামাজের পরের সময়টুকু ঘরে কুরআন তিলাওয়াত ও জিকিরের জন্য অত্যন্ত বরকতময় সময়।",
    },
    {
      id: "৩",
      text: "মাগরিবের পর ২ রাকাত সুন্নতে মুয়াক্কাদা নিয়মিত আদায়কারীর জন্য জান্নাতে একটি বিশেষ ঘর নির্মাণ করা হয়।",
    },
    {
      id: "৯",
      text: "সন্ধ্যা নামার মুহূর্তে ওজু ও নামাজের মাধ্যমে পুরো পরিবারে এক আধ্যাত্মিক ও শান্ত পরিবেশ তৈরি হয়।",
    },
    {
      id: "৪",
      text: "ইসলামে মাগরিবের সময়কে দিনের সমাপ্তি এবং নতুন ইসলামিক তারিখ বা রাত্রির সূচনা হিসেবে গণ্য করা হয়।",
    },
    {
      id: "১০",
      text: "মাগরিবের পর ছয় রাকাত 'আওয়াবিন' নফল নামাজ আদায় করলে ১২ বছর নফল ইবাদতের সমান সওয়াব মেলে।",
    },
    {
      id: "৫",
      text: "সারাদিনের ক্লান্তিময় কাজকর্মের ইতি আল্লাহর দরবারে সিজদাবনত হয়ে করার চমৎকার মাধ্যম এই নামাজ।",
    },
    {
      id: "১১",
      text: "মাগরিবের আজান শোনার পর শয়তানের প্রভাব থেকে বাঁচতে দ্রুত নামাজের পবিত্র আবহে চলে আসা জরুরি।",
    },
    {
      id: "৬",
      text: "মাগরিবের ফরজ নামাজের প্রথম ২ রাকাতে ইমাম সাহেব উচ্চস্বরে কিরাত পাঠ করেন, যা শুনতে অত্যন্ত হৃদয়গ্রাহী।",
    },
    {
      id: "১২",
      text: "ঠিক সময়ে মাগরিব আদায়ের মাধ্যমে একজন মুমিন তার রাতের বাকি সময় ও ইশার নামাজের প্রস্তুতি সহজ করতে পারে।",
    },
  ];

  // মাগরিব নামাজের রাকাত বিন্যাস
  const rakatDetails = [
    {
      type: "৩ রাকাত ফরজ",
      status: "ফরজ ( must )",
      rule: "প্রথম ২ রাকাতে ইমাম উচ্চস্বরে সূরা মেলাবেন এবং মুক্তাদিরা শুনবেন। ৩য় রাকাতে শুধু সূরা ফাতিহা মনে মনে পড়তে হবে।",
    },
    {
      type: "২ রাকাত সুন্নত",
      status: "সুন্নতে মুয়াক্কাদা (ফরজের পরে)",
      rule: "ফরজ শেষ করে এই ২ রাকাত সুন্নত নামাজ সাধারণ নিয়মে সূরার সাথে সূরা মিলিয়ে আদায় করতে হয়।",
    },
    {
      type: "২ থেকে ৬ রাকাত আওয়াবিন",
      status: "নফল (ঐচ্ছিক)",
      rule: "সুন্নতের পর অতিরিক্ত সওয়াবের আশায় এই নফল নামাজ ২ রাকাত করে আদায় করা অত্যন্ত বরকতময়।",
    },
  ];

  // মাগরিব নামাজের ধাপে ধাপে আমল ও নিয়ম
  const prayerSteps = [
    {
      step: "১",
      title: "তাকবীরে তাহরিমা ও ১ম বৈঠক",
      desc: "৩ রাকাতের নিয়ত করে হাত বেঁধে ১ম ও ২য় রাকাতে সূরা ফাতিহার সাথে অন্য সূরা মিলিয়ে রুকু-সেজদা করবেন। ২য় রাকাতের সেজদা শেষে বসে শুধু আত্তাহিয়াতু পড়বেন।",
    },
    {
      step: "২",
      title: "৩য় রাকাত ও আখেরী বৈঠক",
      desc: "৩য় রাকাতে দাঁড়িয়ে শুধু সূরা ফাতিহা পড়বেন (অন্য সূরা মিলাবেন না)। এরপর রুকু-সেজদা শেষ করে আখেরী বৈঠকে বসবেন।",
    },
    {
      step: "৩",
      title: "সালাম ও ফরজ সমাপ্তি",
      desc: "আখেরী বৈঠকে আত্তাহিয়াতু, দুরুদ শরিফ ও দোয়া মাসূরা পড়ে ডানে-বামে সালাম ফিরিয়ে ৩ রাকাত ফরজ শেষ করবেন।",
    },
    {
      step: "৪",
      title: "পরবর্তী সুন্নত আদায়",
      desc: "ফরজ নামাজের পর সালাম ফিরিয়ে সংক্ষিপ্ত জিকির বা মোনাজাত শেষে দাঁড়িয়ে ২ রাকাত সুন্নতে মুয়াক্কাদা নামাজ আদায় করে নেবেন।",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      {/* হেডার ব্যানার (Sunset/Burgundy Theme) */}
      <div className="relative bg-gradient-to-b from-rose-950 via-red-950 to-stone-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-rose-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
            Dusk Guide
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-rose-950/60 border border-rose-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-rose-200">
            <Sunset className="w-3.5 h-3.5 text-rose-400" /> সালাতুল মাগরিব
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-rose-50">
            মাগরিবের ফজিলত ও নিয়মাবলী
          </h1>
          <p className="text-rose-200/70 text-xs md:text-sm">
            সর্বমোট ৫ থেকে ৭ রাকাত (৩ রাকাত ফরজ + ২ রাকাত সুন্নত + নফল)
          </p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-rose-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button
          onClick={() => setActiveTab("virtues")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "virtues" ? "bg-rose-900 text-white shadow" : "text-slate-900 hover:bg-rose-900/5"}`}
        >
          ১২টি ফজিলত
        </button>
        <button
          onClick={() => setActiveTab("rakats")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "rakats" ? "bg-rose-900 text-white shadow" : "text-slate-900 hover:bg-rose-900/5"}`}
        >
         রাকাত বিন্যাস
        </button>
        <button
          onClick={() => setActiveTab("steps")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "steps" ? "bg-rose-900 text-white shadow" : "text-slate-900 hover:bg-rose-900/5"}`}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-rose-950/5 shadow-md"
          >
            {magribPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl border border-rose-900/5 bg-white shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 text-rose-950 font-serif font-black text-xl flex items-center justify-center border border-rose-200/40">
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
                className="bg-white p-5 rounded-2xl border border-rose-950/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-50 rounded-xl text-rose-900 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">
                      {rakat.type}
                    </h3>
                    <span className="text-xs bg-rose-100 text-rose-950 px-2 py-0.5 rounded-md font-semibold">
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
            className="bg-white p-6 rounded-3xl border border-rose-950/5 shadow-md space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-rose-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">
                মাগরিব নামাজের ধারাবাহিক নিয়মাবলী
              </h2>
            </div>
            <div className="relative border-l-2 border-dashed border-rose-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-rose-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
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

export default Magrib;
