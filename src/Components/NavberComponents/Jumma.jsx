import React, { useState } from 'react';
import { ArrowLeft, Sparkles, CheckCircle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Jumma = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('virtues'); // virtues, rakats, steps

  // ১ থেকে ১২ পর্যন্ত জুম্মার ফজিলত ও আমল
  const jummaPoints = [
    { id: "১", text: "জুম্মার দিন হলো সপ্তাহের সেরা দিন, যাকে ইসলামে সাপ্তাহিক ঈদের দিন হিসেবে ঘোষণা করা হয়েছে।" },
    { id: "৭", text: "জুম্মার দিন দরুদ শরিফ পড়ার ফজিলত অনেক বেশি, এটি সরাসরি নবীজী (সা.)-এর কাছে পৌঁছানো হয়।" },
    { id: "২", text: "এই দিনে আদম (আ.)-কে সৃষ্টি করা হয়, এই দিনেই তাঁকে জান্নাতে প্রবেশ করানো হয় এবং এই দিনেই কেয়ামত হবে।" },
    { id: "৮", text: "জুম্মার নামাজে আগে আগে মসজিদে যাওয়ার মাধ্যমে একটি করে উট বা গাভী কুরবানীর সমান সওয়াব মেলে।" },
    { id: "৩", text: "রাসুলুল্লাহ (সা.) বলেছেন, এক জুম্মা থেকে পরবর্তী জুম্মা পর্যন্ত মধ্যবর্তী সময়ের সমস্ত ছোট গুনাহ ক্ষমা করে দেওয়া হয়।" },
    { id: "৯", text: "মনোযোগ দিয়ে জুম্মার খুতবা শোনা ওয়াজিব; খুতবার সময় কথা বললে নামাজের সওয়াব নষ্ট হয়ে যায়।" },
    { id: "৪", text: "জুম্মার দিনে এমন একটি বিশেষ মুহূর্ত আছে, যখন বান্দা আল্লাহর কাছে যা-ই দোয়া করে, তা-ই কবুল হয়।" },
    { id: "১০", text: "এই দিনে সুন্নাহ সম্মত উপায়ে উত্তমরূপে গোসল, সুগন্ধি ও পরিষ্কার পোশাক পরিধান করা ইবাদতের অংশ।" },
    { id: "৫", text: "জুম্মার দিন সূরা কাহাফ তিলাওয়াত করলে পরবর্তী জুম্মা পর্যন্ত মুমিনের জন্য একটি বিশেষ নূর চমকাতে থাকে।" },
    { id: "১১", text: "মসজিদে হেঁটে যাওয়ার প্রতি কদমে এক বছর নফল রোজা ও এক বছর নফল নামাজের সমান সওয়াব পাওয়া যায়।" },
    { id: "৬", text: "যাঁরা অলসতা করে টানা তিনটি জুম্মা বর্জন করে, আল্লাহ তাঁদের অন্তরে মোহর মেরে দেন (নাউজুবিল্লাহ)।" },
    { id: "১২", text: "জুম্মার দিনের বিশেষ আমলসমূহ মুমিনের জীবনে আত্মিক পরিশুদ্ধি ও ঈমানী শক্তি বহুগুণ বাড়িয়ে দেয়।" },
  ];

  // জুম্মা নামাজের রাকাত বিন্যাস
  const rakatDetails = [
    { type: "৪ রাকাত ক্বাবলাল জুমাহ", status: "সুন্নতে মুয়াক্কাদা (ফরজের আগে)", rule: "জুম্মার মূল ফরজের আগে এই ৪ রাকাত সুন্নত সাধারণ নিয়মে আদায় করতে হয়।" },
    { type: "২ রাকাত জুম্মার ফরজ", status: "ফরজ (আবশ্যক)", rule: "ইমামের পেছনে জামায়াতের সাথে পড়তে হয়। ইমাম উচ্চস্বরে কিরাত পাঠ করেন, মুক্তাদিরা নীরবে শুনবেন।" },
    { type: "৪ রাকাত বা'দাল জুমাহ", status: "সুন্নতে মুয়াক্কাদা (ফরজের পরে)", rule: "ফরজ নামাজ শেষ হওয়ার পর এই ৪ রাকাত সুন্নত নিজের মতো করে আদায় করতে হয়।" },
    { type: "২ রাকাত সুন্নত / নফল", status: "ঐচ্ছিক / অতিরিক্ত", rule: "অনেকে বা'দাল জুমাহর পর আরও ২ রাকাত সুন্নত বা নফল নামাজ আদায় করে থাকেন।" },
  ];

  // জুম্মার দিনের ধাপে ধাপে আমল ও নিয়ম
  const prayerSteps = [
    { step: "১", title: "প্রস্তুতি ও মসজিদে গমন", desc: "জুম্মার উদ্দেশ্যে উত্তমরূপে গোসল করে, সুগন্ধি ও পরিষ্কার বা নতুন পোশাক পরে আজানের পরপরই দ্রুত মসজিদের দিকে রওনা হওয়া সুন্নাহ।" },
    { step: "২", title: "তাহিয়্যাতুল মসজিদ ও ৪ রাকাত সুন্নত", desc: "মসজিদে প্রবেশ করে বসার আগে ২ রাকাত 'তাহিয়্যাতুল মসজিদ' এবং জুম্মার ফরজের পূর্বের ৪ রাকাত ক্বাবলাল জুমাহ সুন্নত আদায় করা।" },
    { step: "৩", title: "মনোযোগ দিয়ে খুতবা শ্রবণ", desc: "ইমাম যখন মিম্বরে বসবেন এবং খুতবা দেবেন, তখন সম্পূর্ণ নীরব থেকে মনোযোগ দিয়ে খুতবা শোনা ওয়াজিব। এই সময় কোনো কথা বা ইশারা করাও নিষেধ।" },
    { step: "৪", title: "২ রাকাত ফরজ ও পরবর্তী সুন্নত", desc: "খুতবা শেষে ইমামের সাথে ২ রাকাত ফরজ নামাজ জামায়াতে আদায় করা এবং এরপর ৪ রাকাত বা'দাল জুমাহ সুন্নত শেষ করে দোয়া-ইস্তিগফার করা।" },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Emerald Theme) */}
      <div className="relative bg-gradient-to-b from-emerald-950 via-teal-950 to-emerald-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <button onClick={() => navigate(-1)} className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Weekly Guide</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-emerald-900/60 border border-emerald-700/40 px-3.5 py-1 rounded-full text-[11px] font-medium text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> জুম্মা গাইড
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-50">জুম্মা দিনের আমল ও নামাজ</h1>
          <p className="text-emerald-200/70 text-xs md:text-sm">খুতবা + ২ রাকাত ফরজ (সর্বমোট ১০ থেকে ১২ রাকাতের আমল)</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-emerald-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button 
          onClick={() => setActiveTab('virtues')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'virtues' ? 'bg-emerald-800 text-white shadow' : 'text-emerald-950 hover:bg-emerald-900/5'}`}
        >
          ১২টি ফজিলত
        </button>
        <button 
          onClick={() => setActiveTab('rakats')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'rakats' ? 'bg-emerald-800 text-white shadow' : 'text-emerald-950 hover:bg-emerald-900/5'}`}
        >
          রাকাত বিন্যাস
        </button>
        <button 
          onClick={() => setActiveTab('steps')}
          className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'steps' ? 'bg-emerald-800 text-white shadow' : 'text-emerald-950 hover:bg-emerald-900/5'}`}
        >
          পড়ার নিয়ম
        </button>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ট্যাব ১: ১২টি ফজিলত */}
        {activeTab === 'virtues' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-emerald-950/5 shadow-md">
            {jummaPoints.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-emerald-900/5 bg-white shadow-sm group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-950 font-serif font-black text-xl flex items-center justify-center border border-emerald-200/40">{item.id}</div>
                <div className="flex-1 pt-1"><p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">{item.text}</p></div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ২: রাকাত বিন্যাস */}
        {activeTab === 'rakats' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {rakatDetails.map((rakat, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-emerald-950/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-xl text-emerald-800 mt-0.5"><CheckCircle className="w-5 h-5" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif">{rakat.type}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md font-semibold">{rakat.status}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 md:max-w-md bg-slate-50 p-3 rounded-xl border border-slate-100">{rakat.rule}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ৩: কীভাবে পড়তে হবে (Steps) */}
        {activeTab === 'steps' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-emerald-950/5 shadow-md space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-emerald-800" />
              <h2 className="text-xl font-bold font-serif text-slate-800">জুম্মার দিনের ধারাবাহিক নিয়মাবলী</h2>
            </div>
            <div className="relative border-l-2 border-dashed border-emerald-200 pl-6 ml-4 space-y-6">
              {prayerSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* টাইমলাইন ডট সার্কেল */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-emerald-800 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/80 space-y-1">
                    <h4 className="text-base font-bold text-slate-800 font-serif">{step.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
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

export default Jumma;