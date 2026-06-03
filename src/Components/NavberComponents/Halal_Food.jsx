import React, { useState } from 'react';
import { ArrowLeft, Search, ShieldCheck, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Halal_Food = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ecode'); // ecode, ingredients, dining
  const [searchQuery, setSearchQuery] = useState('');

  // ই-কোড (E-Numbers) ডাটাবেজ
  const eNumbersData = [
    { code: "E120", name: "Carmine / Cochineal", status: "হারাম", type: "রং উৎপাদনকারী", desc: "বিশেষ এক ধরণের পোকা পিষে এই লাল রং তৈরি করা হয়, যা জুস, মিষ্টি ও আইসক্রিমে ব্যবহৃত হয়।" },
    { code: "E441", name: "Gelatin", status: "সন্দেহজনক", type: "ঘনত্ব বৃদ্ধিকারী", desc: "যদি উদ্ভিজ্জ (Plant-sourced) না হয়, তবে এটি শূকর বা অ-ইসলামী পদ্ধতিতে জবাই করা পশুর হাড় ও চামড়া থেকে তৈরি।" },
    { code: "E471", name: "Mono- and Di-glycerides", status: "সন্দেহজনক", type: "ইমালসিফায়ার", desc: "প্যাকেটের গায়ে ১০০% উদ্ভিজ্জ বা ভেজিটেরিয়ান (Vegetarian) লেখা না থাকলে এটি প্রাণিজ চর্বি থেকে আসার সম্ভাবনাই বেশি।" },
    { code: "E904", name: "Shellac", status: "সন্দেহজনক", type: "চকচকে ভাব আনয়নকারী", desc: "এক ধরণের পোকার নিঃসৃত রস থেকে তৈরি। চকলেট বা চুইংগামের ওপর গ্লেজ দিতে এটি ব্যবহৃত হয়।" },
    { code: "E100", name: "Curcumin", status: "হালাল", type: "হলুদ রং", desc: "এটি সম্পূর্ণ প্রাকৃতিকভাবে হলুদ গাছ থেকে নিষ্কাশন করা হয়। ব্যবহার করা সম্পূর্ণ নিরাপদ।" },
    { code: "E330", name: "Citric Acid", status: "হালাল", type: "টক স্বাদ ও প্রিজারভেটিভ", desc: "লেবু বা সাইট্রাস জাতীয় ফল থেকে এটি তৈরি করা হয়। প্যাকেটজাত খাবারে বহুল ব্যবহৃত ও হালাল।" },
    { code: "E322", name: "Lecithin", status: "হালাল (সাধারণত)", type: "অ্যান্টিঅক্সিডেন্ট", desc: "সাধারণত সয়াবিন (Soy lecithin) থেকে তৈরি করা হয়, তাই এটি হালাল। তবে ডিমের কুসুম থেকেও আসতে পারে।" },
    { code: "E110", name: "Sunset Yellow FCF", status: "হালাল", type: "কৃত্রিম রং", desc: "এটি একটি সিন্থেটিক বা পেট্রোকেমিক্যালস থেকে তৈরি রং। কোনো প্রাণিজ উপাদান নেই, তবে স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে।" }
  ];

  // ১২টি মোস্ট কমন সন্দেহজনক ও হারাম উপাদান চেকলিস্ট
  const ingredientsChecklist = [
    { id: "১", title: "Lard (লার্ড)", desc: "এটি সরাসরি শূকরের চর্বি। যেকোনো বিস্কুট, পেস্ট্রি বা চিপসে লার্ড থাকলে তা সম্পূর্ণ হারাম।" },
    { id: "৭", title: "Whey Powder (হুই পাউডার)", desc: "পনির তৈরির উপজাত। চিজ তৈরিতে ব্যবহৃত এনজাইম বা রেনেট হালাল সোর্সের না হলে এটিও সন্দেহজনক।" },
    { id: "২", title: "Pepsin (পেপসিন)", desc: "পাকস্থলী থেকে সংগৃহীত এনজাইম, যা সাধারণত শূকরের পরিপাকতন্ত্র থেকে কমার্শিয়ালি সংগ্রহ করা হয়।" },
    { id: "৮", title: "Animal Shortening", desc: "খাবারের মচমচে ভাব আনার জন্য ব্যবহৃত প্রাণিজ চর্বি। ওয়ান্স ওভেনে তৈরি পেস্ট্রিতে এটি বেশি থাকে।" },
    { id: "৩", title: "Bone Phosphate", desc: "পশুর হাড় থেকে তৈরি ক্যালসিয়াম লবণ। টুথপেস্ট বা সাপ্লিমেন্টে এর ব্যবহার দেখা যায়।" },
    { id: "৯", title: "Tallow (ট্যালো)", desc: "গরু বা ভেড়ার শক্ত চর্বি। সাবান, কসমেটিকস ছাড়াও কিছু প্রসেসড ফ্রাইড ফুডে এটি ব্যবহার করা হয়।" },
    { id: "৪", title: "Vanilla Extract", desc: "ভ্যানিলা ফ্লেভারটি নিষ্কাশন করতে অনেক সময় অ্যালকোহল দ্রাবক হিসেবে ব্যবহার করা হয়, যা এড়িয়ে চলা উত্তম।" },
    { id: "১০", title: "Rennet (রেনেট)", desc: "বাছুরের পাকস্থলী থেকে সংগৃহীত এনজাইম, যা চিজ তৈরিতে লাগে। মাইক্রোবিয়াল বা প্ল্যান্ট রেনেট হলে তা হালাল।" },
    { id: "৫", title: "Carmine (কারমাইন)", desc: "খাবারে গাঢ় লাল বা গোলাপি লিপস্টিক শেড আনতে ব্যবহৃত হয়। এটি মূলত ক্ষতিকর পোকার নির্যাস।" },
    { id: "১১", title: "Emulsifiers (ইমালসিফায়ার)", desc: "তেল ও জলকে একসাথে মেশাতে ব্যবহৃত উপাদান। এর সোর্স নির্দিষ্ট করে ভেজিটেরিয়ান বা হালাল লোগো দেখে নেওয়া উচিত।" },
    { id: "৬", title: "Glycerin/Glycerol", desc: "সাবান, টুথপেস্ট এবং চকলেটে ব্যবহৃত হয়। এটি উদ্ভিজ্জ (Plant-based) না হলে প্রাণিজ চর্বির তৈরি।" },
    { id: "১২", title: "Alcoholic Ingredients", desc: "যেকোনো ধরণের রান্নার ওয়াইন (যেমন: Mirin, Rum, Soy Sauce-এর কিছু ভ্যারিয়েন্ট) সরাসরি হারাম।" }
  ];

  // বাইরে খাওয়ার সময় হালাল ডাইনিং ও শপিং গাইডলাইন
  const diningTips = [
    { step: "১", title: "সার্টিফিকেশন লোগো যাচাই করুন", desc: "প্যাকেটের পেছনে JAKIM, IFANCA, বা স্থানীয় বিশ্বস্ত ইসলামিক ফাউন্ডেশনের হালাল লোগো আছে কি না তা প্রথমে খেয়াল করুন।" },
    { step: "২", title: "সবুজ ভেজিটেরিয়ান ডট (Green Dot)", desc: "অনেক আন্তর্জাতিক প্রোডাক্টে (বিশেষ করে এশিয়ান) সবুজ বৃত্তাকার চিহ্ন থাকে, যার অর্থ এটি ১০০% উদ্ভিজ্জ ও প্রাণিজ চর্বিমুক্ত।" },
    { step: "৩", title: "ক্রস-কন্টামিনেশন বা মিশ্রণ সর্তকতা", desc: "নন-মুসলিম রেস্টুরেন্টে সি-ফুড বা ভেজিটেরিয়ান আইটেম অর্ডার করার সময় নিশ্চিত হোন যে একই তেলে বা পাত্রে পর্ক/হারাম মিট ফ্রাই করা হয়নি।" },
    { step: "৪", title: "সন্দেহ হলে বর্জন করুন (Leaving Doubt)", desc: "রাসুলুল্লাহ (সা.) বলেছেন, যা তোমাকে সন্দেহে ফেলে তা ছেড়ে দাও এবং যাতে সন্দেহ নেই তা গ্রহণ করো। কোনো উপাদানে স্পষ্ট হালাল প্রমাণ না পেলে তা এড়িয়ে চলাই সর্বোত্তম।" }
  ];

  // সার্চ কুয়েরি অনুযায়ী ই-কোড ফিল্টার করা
  const filteredCodes = eNumbersData.filter(item => 
    item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">
      
      {/* হেডার ব্যানার (Emerald & Mint Theme) */}
      <div className="relative bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white pt-6 pb-24 px-6 rounded-b-[2.5rem] shadow-lg border-b border-emerald-900/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-10">
          
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">Dietary Guide</span>
          <div className="w-10 h-10" />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">
          <div className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> হালাল ফুড ট্র্যাকার
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-50">খাবারের হালাল-হারাম নির্দেশিকা</h1>
          <p className="text-emerald-200/70 text-xs md:text-sm">প্যাকেটের ই-কোড অনুসন্ধান, সন্দেহজনক উপাদান চেকলিস্ট এবং সচেতনতা গাইড</p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 bg-emerald-950/10 p-1.5 rounded-xl mx-6 md:mx-auto -mt-6 relative z-30 backdrop-blur-md border border-white">
        <button onClick={() => setActiveTab('ecode')} className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'ecode' ? 'bg-emerald-900 text-white shadow' : 'text-slate-900 hover:bg-emerald-900/5'}`}>E-Code সার্চ</button>
        <button onClick={() => setActiveTab('ingredients')} className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'ingredients' ? 'bg-emerald-900 text-white shadow' : 'text-slate-900 hover:bg-emerald-900/5'}`}>১২টি ক্ষতিকর উপাদান</button>
        <button onClick={() => setActiveTab('dining')} className={`py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${activeTab === 'dining' ? 'bg-emerald-900 text-white shadow' : 'text-slate-900 hover:bg-emerald-900/5'}`}>শপিং টিপস</button>
      </div>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-4xl mx-auto px-6 mt-8 relative z-20">
        
        {/* ট্যাব ১: ই-কোড লাইভ সার্চ ইঞ্জিন */}
        {activeTab === 'ecode' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {/* সার্চ বার */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="E120, Gelatin বা উপাদান লিখুন..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-emerald-950/10 rounded-2xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* ফিল্টারকৃত ই-কোড লিস্ট */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {filteredCodes.length > 0 ? (
                filteredCodes.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl border border-emerald-950/5 shadow-sm flex flex-col justify-between gap-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xl font-mono font-black text-emerald-950">{item.code}</span>
                        <h4 className="text-sm font-bold text-slate-700 mt-0.5">{item.name}</h4>
                        <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-medium">{item.type}</span>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold shadow-sm ${
                        item.status === 'হারাম' ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                        item.status === 'সন্দেহজনক' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                        'bg-emerald-50 text-emerald-600 border border-emerald-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-2">{item.desc}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200">
                  <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-500">দুঃখিত, এই কোড বা উপাদানটি আমাদের ডাটাবেজে পাওয়া যায়নি।</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ট্যাব ২: ১২টি প্রধান সন্দেহজনক ও হারাম উপাদান */}
        {activeTab === 'ingredients' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-emerald-950/5 shadow-md">
            {ingredientsChecklist.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-emerald-900/5 bg-white shadow-sm group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-950 font-serif font-black text-xl flex items-center justify-center border border-emerald-200/40">{item.id}</div>
                <div className="flex-1 pt-0.5">
                  <h4 className="text-sm font-bold text-slate-800 font-serif flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-rose-500/80" /> {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ট্যাব ৩: বাইরে খাওয়ার সময় হালাল ডাইনিং ও শপিং গাইড */}
        {activeTab === 'dining' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-emerald-950/5 shadow-md space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-900" />
              <h2 className="text-xl font-bold font-serif text-slate-800">নিরাপদ ও হালাল খাদ্য চেনার ৪টি নিয়ম</h2>
            </div>
            <div className="relative border-l-2 border-dashed border-emerald-200 pl-6 ml-4 space-y-6">
              {diningTips.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-emerald-900 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">{step.step}</div>
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/80 space-y-1">
                    <h4 className="text-base font-bold text-slate-800 font-serif">{step.title}</h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
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

export default Halal_Food;