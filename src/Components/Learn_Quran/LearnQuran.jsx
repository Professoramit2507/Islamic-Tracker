import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Volume2, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const LearnQuran = () => {
  const [activeTab, setActiveTab] = useState("alphabets"); // alphabets, forms, harakat, quiz

  // ১. আরবি হরফের ডেটাবেজ
  const arabicAlphabets = [
    { id: 1, letter: "ا", name: "আলিফ", sound: "Alif" },
    { id: 2, letter: "ب", name: "বা", sound: "Baa" },
    { id: 3, letter: "ت", name: "তা", sound: "Taa" },
    { id: 4, letter: "ث", name: "সা", sound: "Thaa" },
    { id: 5, letter: "ج", name: "জিম", sound: "Jeem" },
    { id: 6, letter: "ح", name: "হা", sound: "Haa" },
    { id: 7, letter: "خ", name: "খ্বা", sound: "Khaa" },
    { id: 8, letter: "د", name: "দাল", sound: "Dal" },
    { id: 9, letter: "ذ", name: "যাল", sound: "Thal" },
    { id: 10, letter: "ر", name: "র", sound: "Ra" },
    { id: 11, letter: "ز", name: "যা", sound: "Zai" },
    { id: 12, letter: "س", name: "সীন", sound: "Seen" },
    { id: 13, letter: "ش", name: "শীন", sound: "Sheen" },
    { id: 14, letter: "ص", name: "স্বাদ", sound: "Saad" },
    { id: 15, letter: "ض", name: "দ্বাদ", sound: "Ddaad" },
    { id: 16, letter: "ط", name: "ত্বা", sound: "Twa" },
    { id: 17, letter: "ظ", name: "য্বা", sound: "Zhwa" },
    { id: 18, letter: "ع", name: "আইন", sound: "Ain" },
    { id: 19, letter: "غ", name: "গাইন", sound: "Ghain" },
    { id: 20, letter: "ف", name: "ফা", sound: "Faa" },
    { id: 21, letter: "ق", name: "ক্বাফ", sound: "Qaaf" },
    { id: 22, letter: "ك", name: "কাফ", sound: "Kaaf" },
    { id: 23, letter: "ل", name: "লাম", sound: "Laam" },
    { id: 24, letter: "م", name: "মীম", sound: "Meem" },
    { id: 25, letter: "ن", name: "নূন", sound: "Noon" },
    { id: 26, letter: "هـ", name: "হা", sound: "Haa" },
    { id: 27, letter: "و", name: "ওয়াও", sound: "Waw" },
    { id: 28, letter: "ي", name: "ইয়া", sound: "Ya" }
  ];

  // ২. হরফের যুক্তবর্ণ বা রূপভেদ (Forms)
  const letterForms = [
    { name: "বা (ب)", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب" },
    { name: "তা (ت)", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت" },
    { name: "জিম (ج)", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج" },
    { name: "সিন (س)", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس" },
    { name: "আইন (ع)", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع" },
    { name: "মিম (م)", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم" }
  ];

  // ৩. হরকত ও তানভীন (Harakat)
  const harakatData = [
    { name: "যবর (ـَ)", desc: "উপরে রেখা, উচ্চারণে 'আ' বা 'অ' ধ্বনি হয়। যেমন: بَ (বা)", example: "بَ - تَ - جَ" },
    { name: "যের (ـِ)", desc: "নিচে রেখা, উচ্চারণে 'ই' ধ্বনি হয়। যেমন: بِ (বি)", example: "بِ - تِ - جِ" },
    { name: "পেশ (ـُ)", desc: "ছোট উ-কার, উচ্চারণে 'উ' ধ্বনি হয়। যেমন: بُ (বু)", example: "بُ - تُ - جُ" },
    { name: "তানভীন (দুযবর, দুযের, দুপেশ)", desc: "শেষে 'ন' সাকিন যুক্ত হয়। যেমন: بً - بٍ - بٌ", example: "بً - بٍ - بٌ" },
    { name: "জজম (ـْ)", desc: "হরফ সাকিন বা স্থির করতে ব্যবহৃত হয়। যেমন: أَبْ (আব)", example: "أَبْ - أَتْ - أَمْ" },
    { name: "তাশদীদ (ـّ)", desc: "একই হরফ পরপর দুইবার উচ্চারিত হয় (দ্বিত্ব)। যেমন: رَبّ (রব্ব)", example: "رَبّ - ضَلّ" }
  ];

  // ৪. কুইজ স্টেট (Quiz State)
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const quizQuestions = [
    { category: "হরফ পরিচিতি", question: "ب", options: ["বা", "তা", "সা", "জিম"], correct: "বা" },
    { category: "হরকত ও তানভীন", question: "بَ", options: ["বা (যবর)", "বি (যের)", "বু (পেশ)", "বাব (সাকিন)"], correct: "বা (যবর)" },
    { category: "যুক্তবর্ণ রূপ", question: "بـ", options: ["Isolated (স্বতন্ত্র)", "Initial (শুরুতে)", "Medial (মাঝখানে)", "Final (শেষে)"], correct: "Initial (শুরুতে)" },
    { category: "হরফ পরিচিতি", question: "ج", options: ["হা", "জিম", "খ্বা", "দাল"], correct: "জিম" },
    { category: "হরকত ও তানভীন", question: "بِ", options: ["বা", "বি (যের)", "বু", "বাং"], correct: "বি (যের)" },
    { category: "যুক্তবর্ণ রূপ", question: "ـبـ", options: ["শুরুতে", "মাঝখানে", "শেষে", "স্বতন্ত্র"], correct: "মাঝখানে" },
    { category: "হরফ পরিচিতি", question: "س", options: ["শীন", "সীন", "স্বাদ", "ত্বা"], correct: "সীন" },
    { category: "হরকত ও তানভীন", question: "بُ", options: ["বা", "বি", "বু (পেশ)", "বুন"], correct: "বু (পেশ)" },
    { category: "হরফ পরিচিতি", question: "م", options: ["লাম", "নূন", "মীম", "হা"], correct: "মীম" },
    { category: "যুক্তবর্ণ রূপ", question: "ـب", options: ["শুরুতে", "মাঝখানে", "শেষে (Final)", "স্বতন্ত্র"], correct: "শেষে (Final)" }
  ];

  const handleAnswerCheck = (option) => {
    setSelectedAnswer(option);
    const correct = option === quizQuestions[currentQuizIndex].correct;
    setIsCorrect(correct);
    if (correct) setQuizScore(prev => prev + 1);
  };

  const nextQuiz = () => {
    // চেক করা হচ্ছে এটি শেষ প্রশ্ন কি না
    if (currentQuizIndex + 1 === quizQuestions.length) {
      Swal.fire({
        title: 'অভিনন্দন! 🎉',
        text: `কুইজ শেষ হয়েছে! আপনার মোট স্কোর: ${quizScore} / ${quizQuestions.length}`,
        icon: 'success',
        confirmButtonText: 'আবার শুরু করুন',
        confirmButtonColor: '#581c87'
      }).then(() => {
        // কুইজ রিিসেট করার জন্য
        setCurrentQuizIndex(0);
        setQuizScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
      });
    } else {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuizIndex(prev => prev + 1);
    }
  };

  const [selectedLetter, setSelectedLetter] = useState(arabicAlphabets[0]);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const updateVoices = () => {
      if ('speechSynthesis' in window) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
    updateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const arabicVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('fa') || v.lang.includes('ur'));
      if (arabicVoice) utterance.voice = arabicVoice;
      utterance.lang = 'ar-SA';
      utterance.rate = 0.75;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-20">
      
      {/* হেডার ব্যানার */}
      <div className="relative bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white pt-8 pb-20 px-6 rounded-b-[2.5rem] shadow-lg border-b border-purple-900/20 text-center">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-purple-950/60 border border-purple-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> কুরআন শিক্ষা কর্নার
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-purple-50">
            আরবি শিক্ষা ও প্র্যাকটিস হাব
          </h1>
          <p className="text-purple-200/70 text-xs md:text-sm">
            হরফ, যুক্তবর্ণ, হরকত এবং কুইজের মাধ্যমে কুরআন শিক্ষার পূর্ণাঙ্গ প্রস্তুতি নিন।
          </p>
        </div>
      </div>

      {/* নেভিগেশন ট্যাব বার */}
      <div className="max-w-xl mx-auto grid grid-cols-4 gap-1.5 bg-purple-950/10 p-1.5 rounded-2xl -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button
          onClick={() => setActiveTab("alphabets")}
          className={`py-2 text-[11px] md:text-xs font-bold rounded-xl transition-all ${activeTab === "alphabets" ? "bg-purple-900 text-white shadow" : "text-slate-800 hover:bg-purple-900/5"}`}
        >
          হরফ পরিচিতি
        </button>
        <button
          onClick={() => setActiveTab("forms")}
          className={`py-2 text-[11px] md:text-xs font-bold rounded-xl transition-all ${activeTab === "forms" ? "bg-purple-900 text-white shadow" : "text-slate-800 hover:bg-purple-900/5"}`}
        >
          যুক্তবর্ণ রূপ
        </button>
        <button
          onClick={() => setActiveTab("harakat")}
          className={`py-2 text-[11px] md:text-xs font-bold rounded-xl transition-all ${activeTab === "harakat" ? "bg-purple-900 text-white shadow" : "text-slate-800 hover:bg-purple-900/5"}`}
        >
          হরকত ও তানভীন
        </button>
        <button
          onClick={() => setActiveTab("quiz")}
          className={`py-2 text-[11px] md:text-xs font-bold rounded-xl transition-all ${activeTab === "quiz" ? "bg-purple-900 text-white shadow" : "text-slate-800 hover:bg-purple-900/5"}`}
        >
          কুইজ টেস্ট
        </button>
      </div>

      {/* মেইন কন্টেন্ট */}
      <main className="max-w-4xl mx-auto px-6 mt-8 space-y-8">
        
        {/* ট্যাব ১: হরফ পরিচিতি */}
        {activeTab === "alphabets" && (
          <div className="space-y-8">
            <motion.div 
              key={selectedLetter.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => playSound(selectedLetter.letter)}
              className="bg-white p-6 md:p-8 rounded-3xl border border-purple-950/10 shadow-lg text-center relative overflow-hidden flex flex-col items-center justify-center space-y-3 cursor-pointer group hover:border-purple-300 transition-all"
            >
              <div className="absolute top-3 right-4 bg-purple-50 text-purple-900 px-3 py-1 rounded-full text-xs font-bold border border-purple-100">
                ক্রম: {selectedLetter.id} / 28
              </div>

              <span className="text-6xl md:text-8xl font-serif font-extrabold text-purple-950 group-hover:scale-110 transition-transform">
                {selectedLetter.letter}
              </span>
              
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-800 font-serif">
                  {selectedLetter.name}
                </h2>
                <p className="text-xs font-semibold text-purple-700 uppercase tracking-widest">
                  Pronunciation: {selectedLetter.sound}
                </p>
              </div>

              <div className="text-xs text-purple-900 bg-purple-50 px-4 py-2 rounded-xl border border-purple-100 flex items-center gap-1.5 shadow-sm">
                <Volume2 className="w-4 h-4 text-purple-800 animate-pulse" /> শুনতে এখানে ক্লিক করুন
              </div>
            </motion.div>

            {/* গ্রিড (ডান থেকে বামে) */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-950/10 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3" dir="rtl">
                <BookOpen className="w-5 h-5 text-purple-900" />
                <h3 className="text-lg font-bold font-serif text-slate-800">
                  সকল আরবি হরফ (ডান থেকে বামে)
                </h3>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 pt-2" dir="rtl">
                {arabicAlphabets.map((item) => {
                  const isSelected = selectedLetter.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setSelectedLetter(item); playSound(item.letter); }}
                      className={`h-20 rounded-2xl border flex flex-col items-center justify-center transition-all shadow-sm group cursor-pointer ${
                        isSelected
                          ? 'bg-purple-950 text-white border-purple-950 shadow-md scale-105'
                          : 'bg-slate-50/70 hover:bg-purple-50 text-slate-800 border-slate-200 hover:border-purple-300'
                      }`}
                    >
                      <span className={`text-2xl md:text-3xl font-serif font-bold ${isSelected ? 'text-amber-200' : 'text-purple-950'}`}>
                        {item.letter}
                      </span>
                      <span className={`text-[11px] font-semibold mt-1 ${isSelected ? 'text-purple-200' : 'text-slate-600'}`}>
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ট্যাব ২: হরফের যুক্তবর্ণ বা রূপভেদ */}
        {activeTab === "forms" && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-950/10 shadow-md space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold font-serif text-slate-800">
                আরবি হরফের চার রূপ (Isolated, Initial, Medial, Final)
              </h3>
              <p className="text-xs text-slate-500 mt-1">শব্দে লেখার সময় হরফগুলোর রূপ পরিবর্তন হয়।</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse" dir="rtl">
                <thead>
                  <tr className="border-b border-purple-100 bg-purple-50/50 text-purple-950 text-xs md:text-sm font-bold">
                    <th className="p-3 text-center">মূল হরফ</th>
                    <th className="p-3 text-center">শুরুতে (Initial)</th>
                    <th className="p-3 text-center">মাঝখানে (Medial)</th>
                    <th className="p-3 text-center">শেষে (Final)</th>
                    <th className="p-3 text-center">স্বতন্ত্র (Isolated)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 text-sm md:text-base font-serif">
                  {letterForms.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center font-bold text-purple-900 text-xs">{item.name}</td>
                      <td className="p-3 text-center text-xl md:text-2xl font-bold">{item.initial}</td>
                      <td className="p-3 text-center text-xl md:text-2xl font-bold">{item.medial}</td>
                      <td className="p-3 text-center text-xl md:text-2xl font-bold">{item.final}</td>
                      <td className="p-3 text-center text-xl md:text-2xl font-bold">{item.isolated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ট্যাব ৩: হরকত ও তানভীন */}
        {activeTab === "harakat" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {harakatData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-purple-950/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold font-serif text-purple-950">{item.name}</h4>
                  <span className="bg-purple-50 text-purple-900 text-xs px-2.5 py-1 rounded-full font-bold border border-purple-100 font-serif">{item.example}</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* ট্যাব ৪: কুইজ টেস্ট */}
        {activeTab === "quiz" && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-950/10 shadow-md max-w-xl mx-auto space-y-6 text-center">
            {/* হেডার ও স্কোর */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                প্রশ্ন: {currentQuizIndex + 1} / {quizQuestions.length}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                স্কোর: {quizScore}
              </span>
            </div>

            {/* ক্যাটাগরি ও প্রশ্ন */}
            <div className="space-y-2 py-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50/80 px-3 py-0.5 rounded-full border border-purple-100/50">
                <Sparkles className="w-3 h-3 text-purple-500" /> {quizQuestions[currentQuizIndex].category}
              </span>
              
              <div className="text-6xl md:text-7xl font-serif font-black text-purple-950 py-4 tracking-wider">
                {quizQuestions[currentQuizIndex].question}
              </div>
            </div>

            {/* অপশনসমূহ */}
            <div className="grid grid-cols-2 gap-3">
              {quizQuestions[currentQuizIndex].options.map((opt, idx) => {
                let btnStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300";
                if (selectedAnswer !== null) {
                  if (opt === quizQuestions[currentQuizIndex].correct) {
                    btnStyle = "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105";
                  } else if (opt === selectedAnswer) {
                    btnStyle = "bg-rose-600 text-white border-rose-600 shadow-lg";
                  }
                }
                return (
                  <button
                    key={idx}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswerCheck(opt)}
                    className={`p-3.5 rounded-2xl border text-sm md:text-base font-bold transition-all cursor-pointer ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* ফিডব্যাক এবং পরবর্তী বাটন */}
            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-1.5 text-xs md:text-sm font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100">
                        <CheckCircle2 className="w-4 h-4" /> মাশাআল্লাহ! সঠিক উত্তর!
                      </span>
                    ) : (
                      <span className="text-rose-600 flex items-center gap-1 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100">
                        <XCircle className="w-4 h-4" /> ভুল হয়েছে! সঠিকটি: {quizQuestions[currentQuizIndex].correct}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={nextQuiz}
                    className="w-full sm:w-auto bg-purple-950 hover:bg-purple-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                  >
                    {currentQuizIndex + 1 === quizQuestions.length ? "ফলাফল দেখুন" : "পরবর্তী প্রশ্ন"} <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </main>
    </div>
  );
};

export default LearnQuran;