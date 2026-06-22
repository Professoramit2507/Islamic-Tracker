import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle,
  BookOpen,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import ReadQuran from "./ReadQuran/ReadQuran";
import { Link } from "react-router";

const Spiritual = () => {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("duas"); // duas, healing, night

  // ট্যাব ১: দৈনন্দিন ৪টি জীবন রক্ষাকারী মাসনুন দোয়া
  const duasData = [
    {
      id: 1,
      title: "বিপদ-আপদ থেকে সুরক্ষার সর্বশ্রেষ্ঠ দোয়া",
      arabic:
        "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      bangla:
        "বিসমিল্লাহিল্লাজি লা ইয়াদুররু মা'আসমিহি শাইউন ফিল আরদি ওয়া লা ফিস সামায়ি, ওয়া হুওয়াস সামিউল আলিম।",
      meaning:
        "আল্লাহর নামে, যাঁর নামের বরকতে আসমান ও জমিনের কোনো কিছুই কোনো ক্ষতি করতে পারে না। আর তিনি সর্বশ্রোতা, সর্বজ্ঞ।",
      reward:
        "রাসুলুল্লাহ (সা.) বলেছেন, যে ব্যক্তি সকাল-সন্ধ্যায় ৩ বার এই দোয়া পড়বে, কোনো হঠাৎ বিপদে সে আক্রান্ত হবে না এবং কোনো কিছুই তার ক্ষতি করতে পারবে না।",
    },
    {
      id: 2,
      title: "দুশ্চিন্তা ও ঋণমুক্তি লাভের বিশেষ দোয়া",
      arabic:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
      bangla:
        "আল্লাহুম্মা ইন্নি আউজু বিকা মিনাল হাম্মি ওয়াল হাজানি, ওয়া আউজু বিকা মিনাল আজজি ওয়াল কাসালি, ওয়া আউজু বিকা মিনাল জুবনি ওয়াল বুখলি, ওয়া আউজু বিকা মিন গালাবাতিদ দাইনি ওয়া কাহরির রিজাল।",
      meaning:
        "হে আল্লাহ! আমি আপনার আশ্রয় নিচ্ছি দুশ্চিন্তা ও দুঃখ-কষ্ট থেকে, অক্ষমতা ও অলসতা থেকে, কাপুরুষতা ও কৃপণতা থেকে এবং ঋণের বোঝা ও মানুষের অত্যাচার থেকে।",
      reward:
        "নিয়মিত সকালে ও সন্ধ্যায় এই দোয়াটি পাঠ করলে মনের যাবতীয় গোপন দুশ্চিন্তা দূর হয় এবং অলৌকিকভাবে ঋণ পরিশোধের ব্যবস্থা হয়ে যায়।",
    },
    {
      id: 3,
      title: "জাহান্নাম থেকে মুক্তির আকুল আবেদন",
      arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
      bangla: "আল্লাহুম্মা আজিরনি মিনান নার।",
      meaning: "হে আল্লাহ! আমাকে জাহান্নামের আগুন থেকে রক্ষা করুন।",
      reward:
        "ফজর ও মাগরিবের নামাজের পর কারও সাথে কথা না বলে এই দোয়াটি ৭ বার পাঠ করলে, ওই দিন বা রাতে মৃত্যু হলে আল্লাহ তাকে নিশ্চিত জাহান্নাম থেকে মুক্তি দেবেন।",
    },
    {
      id: 4,
      title: "রিজিকে বরকত ও পবিত্র জীবনের দোয়া",
      arabic:
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
      bangla:
        "আল্লাহুম্মা ইন্নি আসআলুকা ইলমান নাফিয়া, ওয়া রিজকান তাইয়্যিবা, ওয়া আমালান মুতাকাব্বিলা।",
      meaning:
        "হে আল্লাহ! আমি আপনার কাছে উপকারী জ্ঞান, পবিত্র রিযিক এবং কবুলযোগ্য আমল প্রার্থনা করছি।",
      reward:
        "নবীজী (সা.) প্রতিদিন ফজরের নামাজের সালাম ফিরিয়েই এই বিশেষ দোয়াটি পাঠ করতেন, যা সারাদিনের কাজে বরকত এনে দেয়।",
    },
  ];

  // ট্যাব ২: আত্মশুদ্ধি ও মানসিক শান্তির ১২টি মূল বাণী ও আমল
  const healingPoints = [
    {
      id: "১",
      text: "মনে রাখবেন, কেবল আল্লাহর জিকির বা স্মরণেই মানুষের অন্তরগুলো প্রকৃত প্রশান্তি লাভ করে (সূরা আর-রাদ: ২৮)।",
    },
    {
      id: "৭",
      text: "যখনই মন খারাপ হবে, বেশি বেশি 'ইয়া হাইয়্যু ইয়া কাইয়্যুমু বিরাহমাতিকা আস্তাগিস' দোয়াটি পাঠ করুন।",
    },
    {
      id: "২",
      text: "অতিরিক্ত দুশ্চিন্তা ও হতাশা দূর করতে রাসুলুল্লাহ (সা.) সর্বদা সাইয়্যিদুল ইস্তিগফার পড়ার নির্দেশ দিয়েছেন।",
    },
    {
      id: "৮",
      text: "কারো ওপর ক্ষোভ বা রাগ জমা রাখবেন না; ক্ষমা করে দিলে আল্লাহ আপনার নিজের সম্মান ও মর্যাদা বহুগুণ বাড়িয়ে দেবেন।",
    },
    {
      id: "৩",
      text: "মনকে হিংসা, অহংকার এবং রিয়া (লোকদেখানো ইবাদত) থেকে মুক্ত রাখাই আধ্যাত্মিক উন্নতির প্রথম ধাপ।",
    },
    {
      id: "৯",
      text: "পাঁচ ওয়াক্ত ফরজ নামাজ ঠিক সময়ে একাগ্রতার সাথে আদায় করা মানসিক অবসাদ দূর করার সবচেয়ে বড় থেরাপি।",
    },
    {
      id: "৪",
      text: "যা হারিয়ে গেছে তার জন্য আফসোস না করে, আল্লাহর ফয়সালার ওপর সন্তুষ্ট থাকাই হলো খাঁটি তাকওয়া।",
    },
    {
      id: "১০",
      text: "প্রতিদিন অন্তত ৫টি আয়াত অর্থসহ বুঝে পড়ার অভ্যাস করুন, এটি অন্তরের মরচে পড়া দূর করতে সাহায্য করে।",
    },
    {
      id: "৫",
      text: "অন্টারকে জীবিত রাখতে চাইলে একাকী বসে আল্লাহর ভয়ে চোখের পানি ফেলার অভ্যাস গড়ে তুলুন।",
    },
    {
      id: "১১",
      text: "অশ্লীল দৃষ্টি ও হারাম কথাবার্তা থেকে কান ও চোখকে বাঁচিয়ে রাখা অন্তরের নূর বা আলো ধরে রাখার মূল চাবিকাঠি।",
    },
    {
      id: "৬",
      text: "দুনিয়ার মোহে অন্ধ না হয়ে পরকালের স্থায়ী জীবনের কথা চিন্তা করলে মন থেকে লোভ ও হিংসা দূর হয়ে যায়।",
    },
    {
      id: "১২",
      text: "সব সময় ওজু অবস্থায় থাকার চেষ্টা করুন; ওজু মানুষের ভেতরের রাগ ও শয়তানের কুপ্ররোচনাকে শান্ত করে।",
    },
  ];

  // ট্যাব ৩: শেষ রাতের আমল ও তাহাজ্জুদ গাইড
  const nightSteps = [
    {
      step: "১",
      title: "ঘুমানোর পূর্বের সুন্নাহ আমল",
      desc: "বিছানা ঝেড়ে নেওয়া, ওজু অবস্থায় শোয়া, আয়াতুল কুরসি এবং সূরা ইখলাস, ফালাক, নাস পড়ে দুই হাতে ফুঁ দিয়ে পুরো শরীরে হাত বুলানো।",
    },
    {
      step: "২",
      title: "তাহাজ্জুদের শেষ রাতের শেষ প্রহর",
      desc: "রাতের শেষ তৃতীয়াংশে আল্লাহ প্রথম আসমানে নেমে আসেন এবং ডাকতে থাকেন—কে আছ ক্ষমাপ্রার্থী? আমি তাকে ক্ষমা করব। এই সময় ঘুম ভেঙে ওঠা অত্যন্ত বরকতময়।",
    },
    {
      step: "৩",
      title: "২ রাকাত সালাত",
      desc: "নূন্যতম ২ রাকাত বা ইচ্ছা অনুযায়ী সর্বোচ্চ ১২ রাকাত পর্যন্ত লম্বা রুকু ও সেজদার মাধ্যমে তাহাজ্জুদের নফল নামাজ আদায় করা।",
    },
    {
      step: "৪",
      title: "রোনাজারি ও দীর্ঘ মোনাজাত",
      desc: "নামাজ শেষ করে সেহরি বা ফজরের আগ পর্যন্ত সিজদায় গিয়ে নিজের পাপের জন্য কাঁদাকাটি করা এবং দুনিয়া ও আখেরাতের জন্য আল্লাহর কাছে আকুল আবেদন করা।",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      {/* হেডার ব্যানার (Spiritual Purple Theme) */}
      <div className="relative bg-linear-to-b from-slate-950 via-purple-950 to-slate-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-purple-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
            Spiritual Guide
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-purple-950/60 border border-purple-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-purple-200">
            <Heart className="w-3.5 h-3.5 text-purple-400" /> আত্মশুদ্ধি ও আমল
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-purple-50">
            আধ্যাত্মিকতা ও দৈনন্দিন দোয়া
          </h1>
          <p className="text-purple-200/70 text-xs md:text-sm">
            দৈনন্দিন মাসনুন দোয়া, মানসিক প্রশান্তি ও শেষ রাতের আমল গাইড
          </p>
        </div>

      </div>

      

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-purple-950/10 p-1.5 rounded-xl md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button
          onClick={() => setActiveTab("duas")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "duas" ? "bg-purple-900 text-white shadow" : "text-slate-900 hover:bg-purple-900/5"}`}
        >
          দৈনন্দিন মাসনুন দোয়া
        </button>
        <button
          onClick={() => setActiveTab("healing")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "healing" ? "bg-purple-900 text-white shadow" : "text-slate-900 hover:bg-purple-900/5"}`}
        >
          আত্মশুদ্ধি ও প্রশান্তি
        </button>
        <button
          onClick={() => setActiveTab("night")}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === "night" ? "bg-purple-900 text-white shadow" : "text-slate-900 hover:bg-purple-900/5"}`}
        >
          রাতের আমল
        </button>
      </div>

      {/* নতুন লাক্সারি থিমযুক্ত কুরআন অ্যাকশন কার্ড সেকশন */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          className="bg-white rounded-[24px] border border-purple-950/5 shadow-md p-5 sm:p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* ব্যাকগ্রাউন্ড গ্লো */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* বাম অংশ: আইকন এবং ইনফো */}
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="p-3.5 bg-purple-50 text-purple-950 rounded-xl shrink-0 border border-purple-100">
              <BookOpen className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 bg-purple-950/5 border border-purple-900/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-purple-950 tracking-wide">
                <Sparkles className="w-3 h-3 text-purple-600 animate-pulse" /> তিলাওয়াত মডিউল
              </div>
              <h3 className="text-lg font-serif font-black text-slate-800 tracking-tight">
                পবিত্র কুরআন তিলাওয়াত
              </h3>
              
              {/* আপনার ডাইনামিক <ReadQuran> কম্পোনেন্ট এখানে রেন্ডার হবে */}
              <div className="pt-0.5">
               
              </div>
            </div>
          </div>

          {/* ডান অংশ: ক্লিক বাটন */}
          <div className="w-full sm:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-950 hover:bg-purple-900 text-white font-bold py-3 px-5 rounded-xl transition-all shadow-md text-xs tracking-wide group cursor-pointer"
            >
             <Link to="/read_quran">
               <span>কুরআন পড়তে ক্লিক করুন</span>
             </Link>
             
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        {/* ট্যাব ১: দৈনন্দিন মাসনুন দোয়া */}
        {activeTab === "duas" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {duasData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-purple-950/5 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-950 font-bold text-xs flex items-center justify-center border border-purple-100">
                    {item.id}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 font-serif">
                    {item.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-right text-xl md:text-2xl font-serif font-bold text-purple-950 tracking-wide leading-loose">
                    {item.arabic}
                  </p>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-purple-900">
                      উচ্চারণ:
                    </h4>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed mt-0.5">
                      {item.bangla}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-500">
                      অর্থ:
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed mt-0.5">
                      {item.meaning}
                    </p>
                  </div>
                  <div className="bg-purple-50/70 p-3 rounded-xl border border-purple-100/50">
                    <p className="text-xs text-purple-950 font-medium leading-relaxed">
                      ✨ <span className="font-bold">ফজিলত:</span> {item.reward}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ২: ১২টি আত্মশুদ্ধি ও মানসিক শান্তির পয়েন্ট */}
        {activeTab === "healing" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-purple-950/5 shadow-md"
          >
            {healingPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl border border-purple-900/5 bg-white shadow-sm group"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-purple-950 font-serif font-black text-xl flex items-center justify-center border border-purple-200/40">
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

        {/* ট্যাব ৩: শেষ রাতের আমল ও তাহাজ্জুদ গাইড */}
        {activeTab === "night" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-3xl border border-purple-950/5 shadow-md space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-purple-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">
                তাহাজ্জুদ ও নৈশকালীন আমলের নিয়মাবলী
              </h2>
            </div>
            <div className="relative border-l-2 border-dashed border-purple-200 pl-6 ml-4 space-y-6">
              {nightSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8.75 top-0 w-6 h-6 rounded-full bg-purple-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
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

export default Spiritual;
