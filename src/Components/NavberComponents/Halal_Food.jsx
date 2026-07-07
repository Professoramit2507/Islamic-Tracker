// import React, { useState } from 'react';
// import { Search, ShieldCheck, AlertTriangle, Info, QrCode, Sparkles, Building2, HelpCircle } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router';

// const Halal_Food = () => {
//   const [activeTab, setActiveTab] = useState('ecode'); // ecode, qrscan, ingredients, dining
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isScanning, setIsScanning] = useState(false);
//   const [scanResult, setScanResult] = useState(null);


//   // ই-কোড (E-Numbers) ডাটাবেজ
//   const eNumbersData = [
//     { code: "E120", name: "Carmine / Cochineal", status: "হারাম", type: "রং উৎপাদনকারী", desc: "বিশেষ এক ধরণের পোকা পিষে এই লাল রং তৈরি করা হয়, যা জুস, মিষ্টি ও আইসক্রিমে ব্যবহৃত হয়।" },
//     { code: "E441", name: "Gelatin", status: "সন্দেহজনক", type: "ঘনত্ব বৃদ্ধিকারী", desc: "যদি উদ্ভিজ্জ (Plant-sourced) না হয়, তবে এটি শূকর বা অ-ইসলামী পদ্ধতিতে জবাই করা পশুর হাড় ও চামড়া থেকে তৈরি।" },
//     { code: "E471", name: "Mono- and Di-glycerides", status: "সন্দেহজনক", type: "ইমালসিফায়ার", desc: "প্যাকেটের গায়ে ১০০% উদ্ভিজ্জ বা ভেজিটেরিয়ান (Vegetarian) লেখা না থাকলে এটি প্রাণিজ চর্বি থেকে আসার সম্ভাবনাই বেশি।" },
//     { code: "E904", name: "Shellac", status: "সন্দেহজনক", type: "চকচকে ভাব আনয়নকারী", desc: "এক ধরণের পোকার নিঃসৃত রস থেকে তৈরি। চকলেট বা চুইংগামের ওপর গ্লেজ দিতে এটি ব্যবহৃত হয়।" },
//     { code: "E100", name: "Curcumin", status: "হালাল", type: "হলুদ রং", desc: "এটি সম্পূর্ণ প্রাকৃতিকভাবে হলুদ গাছ থেকে নিষ্কাশন করা হয়। ব্যবহার করা সম্পূর্ণ নিরাপদ।" },
//     { code: "E330", name: "Citric Acid", status: "হালাল", type: "টক স্বাদ ও প্রিজারভেটিভ", desc: "লেবু বা সাইট্রাস জাতীয় ফল থেকে এটি তৈরি করা হয়। প্যাকেটজাত খাবারে বহু ব্যবহৃত ও হালাল।" },
//     { code: "E322", name: "Lecithin", status: "হালাল (সাধারণত)", type: "অ্যান্টিঅক্সিডেন্ট", desc: "সাধারণত সয়াবিন (Soy lecithin) থেকে তৈরি করা হয়, তাই এটি হালাল। তবে ডিমের কুসুম থেকেও আসতে পারে।" },
//     { code: "E110", name: "Sunset Yellow FCF", status: "হালাল", type: "কৃত্রিম রং", desc: "এটি একটি সিন্থেটিক বা পেট্রোকেমিক্যালস থেকে তৈরি রং। কোনো প্রাণিজ উপাদান নেই, তবে স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে।" }
//   ];

//   // ১২টি মোস্ট কমন সন্দেহজনক ও হারাম উপাদান চেকলিস্ট
//   const ingredientsChecklist = [
//     { id: "১", title: "Lard (লার্ড)", desc: "এটি সরাসরি শূকরের চর্বি। যেকোনো বিস্কুট, পেস্ট্রি বা চিপসে লার্ড থাকলে তা সম্পূর্ণ হারাম।" },
//     { id: "২", title: "Whey Powder (হুই পাউডার)", desc: "পনির তৈরির উপজাত। চিজ তৈরিতে ব্যবহৃত এনজাইম বা রেনেট হালাল সোর্সের না হলে এটিও সন্দেহজনক।" },
//     { id: "৩", title: "Pepsin (পেপসিন)", desc: "পাকস্থলী থেকে সংগৃহীত এনজাইম, যা সাধারণত শূকরের পরিপাকতন্ত্র থেকে কমার্শিয়ালি সংগ্রহ করা হয়।" },
//     { id: "৪", title: "Animal Shortening", desc: "খাবারের মচমচে ভাব আনার জন্য ব্যবহৃত প্রাণিজ চর্বি। ওভেনে তৈরি পেস্ট্রিতে এটি বেশি থাকে।" },
//     { id: "৫", title: "Bone Phosphate", desc: "পশুর হাড় থেকে তৈরি ক্যালসিয়াম লবণ। টুথপেস্ট বা সাপ্লিমেন্টে এর ব্যবহার দেখা যায়।" },
//     { id: "৬", title: "Tallow (ট্যালো)", desc: "গরু বা ভেড়ার শক্ত চর্বি। সাবান, কসমেটিকস ছাড়াও কিছু প্রসেসড ফ্রাইড ফুডে এটি ব্যবহার করা হয়।" },
//     { id: "৭", title: "Vanilla Extract", desc: "ভ্যানিলা ফ্লেভারটি নিষ্কাশন করতে অনেক সময় অ্যালকোহল দ্রাবক হিসেবে ব্যবহার করা হয়, যা এড়িয়ে চলা উত্তম।" },
//     { id: "৮", title: "Rennet (রেনেট)", desc: "বাছুরের পাকস্থলী থেকে সংগৃহীত এনজাইম, যা চিজ তৈরিতে লাগে। মাইক্রোবিয়াল বা প্ল্যান্ট রেনেট হলে তা হালাল।" },
//     { id: "৯", title: "Carmine (কারমাইন)", desc: "খাবারে গাঢ় লাল বা গোলাপি লিপস্টিক শেড আনতে ব্যবহৃত হয়। এটি মূলত ক্ষতিকর পোকার নির্যাস।" },
//     { id: "১০", title: "Emulsifiers (ইমালসিফায়ার)", desc: "তেল ও জলকে একসাথে মেশাতে ব্যবহৃত উপাদান। এর সোর্স নির্দিষ্ট করে ভেজিটেরিয়ান বা হালাল লোগো দেখে নেওয়া উচিত।" },
//     { id: "১১", title: "Glycerin/Glycerol", desc: "সাবান, টুথপেস্ট এবং চকলেটে ব্যবহৃত হয়। এটি উদ্ভিজ্জ (Plant-based) না হলে প্রাণিজ চর্বির তৈরি।" },
//     { id: "১২", title: "Alcoholic Ingredients", desc: "যেকোনো ধরণের রান্নার ওয়াইন (যেমন: Mirin, Rum, Soy Sauce-এর কিছু ভ্যারিয়েন্ট) সরাসরি হারাম।" }
//   ];

//   // গ্লোবাল হালাল সার্টিফাইড ব্র্যান্ড ডিরেক্টরি
//   const certifiedBrands = [
//     { name: "KFC / Pizza Hut", region: "মুসলিম দেশসমূহ ও নির্দিষ্ট আউটলেট", status: "হালাল সার্টিফাইড", desc: "মালয়েশিয়া, ইন্দোনেশিয়া, জর্ডান এবং বাংলাদেশের মতো দেশে এগুলো শতভাগ হালাল সার্টিফাইড সোর্স ব্যবহার করে।" },
//     { name: "Almarai (আলমারাই)", region: "মিডল ইস্ট / গ্লোবাল", status: "শতভাগ হালাল", desc: "বিশ্বের অন্যতম বৃহত্তম ডেইরি ব্র্যান্ড। এদের সকল জুস, দুধ, পনির এবং বেকারি আইটেম কঠোর হালাল মানদণ্ড মেনে চলে।" },
//     { name: "Nestlé (নেসলে)", region: "নির্দিষ্ট হালাল ব্যাচ", status: "লোগো দেখে নিন", desc: "নেসলের গ্লোবাল ফ্যাক্টরিগুলোর একটি বিশাল অংশ হালাল সার্টিফাইড (যেমন মালয়েশিয়া ও পাকিস্তানের প্ল্যান্ট)। প্যাকেটের পেছনে হালাল লোগো থাকে।" }
//   ];

//   // বাইরে খাওয়ার সময় হালাল ডাইনিং ও শপিং গাইডলাইন
//   const diningTips = [
//     { step: "১", title: "সার্টিফিকেশন লোগো যাচাই করুন", desc: "প্যাকেটের পেছনে JAKIM, IFANCA, বা স্থানীয় বিশ্বস্ত ইসলামিক ফাউন্ডেশনের হালাল লোগো আছে কি না তা প্রথমে খেয়াল করুন।" },
//     { step: "২", title: "সবুজ ভেজিটেরিয়ান ডট (Green Dot)", desc: "অনেক আন্তর্জাতিক প্রোডাক্টে (বিশেষ করে এশিয়ান) সবুজ বৃত্তাকার চিহ্ন থাকে, যার অর্থ এটি ১০০% উদ্ভিজ্জ ও প্রাণিজ চর্বিমুক্ত।" },
//     { step: "৩", title: "ক্রস-কন্টামিনেশন বা মিশ্রণ সর্তকতা", desc: "নন-মুসলিম রেস্টুরেন্টে সি-ফুড বা ভেজিটেরিয়ান আইটেম অর্ডার করার সময় নিশ্চিত হোন যে একই তেলে বা পাত্রে পর্ক/হারাম মিট ফ্রাই করা হয়নি।" },
//     { step: "৪", title: "সন্দেহ হলে বর্জন করুন (Leaving Doubt)", desc: "রাসুলুল্লাহ (সা.) বলেছেন, যা তোমাকে সন্দেহে ফেলে তা ছেড়ে দাও এবং যা সন্দেহমুক্ত তা গ্রহণ করো। স্পষ্ট হালাল প্রমাণ না পেলে তা এড়িয়ে চলাই সর্বোত্তম।" }
//   ];

//   // সার্চ কুয়েরি অনুযায়ী ই-কোড ফিল্টার করা
//   const filteredCodes = eNumbersData.filter(item =>
//     item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // কিউআর কোড স্ক্যানার সিমুলেশন ট্রিগার
//   const handleStartScan = () => {
//     setIsScanning(true);
//     setScanResult(null);
//     setTimeout(() => {
//       setIsScanning(false);
//       // একটি ডেমো রেজাল্ট রিটার্ন করা
//       setScanResult({
//         product: "Imported Choco Delight Biscuits",
//         code: "Barcode: 89010580023",
//         status: "সন্দেহজনক",
//         reason: "এতে E471 ইমালসিফায়ার রয়েছে এবং কোনো হালাল লোগো প্রিন্ট করা নেই।"
//       });
//     }, 3000); // ৩ সেকেন্ড স্ক্যানিং অ্যানিমেশন চলবে
//   };

//   return (
//     <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans pb-16 selection:bg-emerald-200">

//       {/* মডার্ন প্রিমিয়াম হেডার ব্যানার */}
//       <div className="relative bg-linear-to-b from-slate-950 via-emerald-950 to-slate-900 text-white pt-8 pb-28 px-6 rounded-b-[3rem] shadow-2xl border-b border-emerald-900/30 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent opacity-80" />

//         <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3">
//           <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-emerald-200 shadow-sm">
//             <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> সচেতন মুসলিম ডায়েট গাইড
//           </div>
//           <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-emerald-50 to-amber-100 tracking-wide">
//             স্মার্ট হালাল ফুড ট্র্যাকার
//           </h1>
//           <p className="text-emerald-200/60 text-xs md:text-sm max-w-xl mx-auto">
//             খাবারের প্যাকেটের উপাদানের ই-কোড সার্চ করুন, বারকোড/কিউআর স্ক্যান সিমুলেট করুন এবং ক্ষতিকর বা হারাম উপাদান সম্পর্কে বিস্তারিত জানুন।
//           </p>
//         </div>
//       </div>

//       {/* কন্টেন্ট নেভিগেশন ট্যাব বার (৪টি ট্যাব রেসপন্সিভ গ্রিড) */}
//       <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 bg-emerald-900/10 p-1.5 rounded-2xl -mt-8 relative z-30 backdrop-blur-md border border-white/60 sm:mx-auto shadow-xl">
//         <button onClick={() => { setActiveTab('ecode'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ecode' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>E-Code সার্চ</button>
//         <button onClick={() => setActiveTab('qrscan')} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'qrscan' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>QR / বারকোড</button>
//         <button onClick={() => { setActiveTab('ingredients'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ingredients' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>১২টি ক্ষতিকর উপাদান</button>
//         <button onClick={() => { setActiveTab('dining'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'dining' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>শপিং গাইড</button>
//       </div>

//       <Link to="/food" className="block max-w-xs mx-auto mt-6">
//         <button className="w-full cursor-pointer hover:bg-pink-200 mt-6 max-w-xs mx-auto block text-2xl font-bold text-center text-pink-600 border-2 border-pink-600  active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-6 rounded-xl transition duration-200">
//         Food Management
//       </button>
//       </Link>

//       {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
//       <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 relative z-20">

//         <AnimatePresence mode="wait">

//           {/* ট্যাব ১: ই-কোড লাইভ সার্চ ইঞ্জিন */}
//           {activeTab === 'ecode' && (
//             <motion.div key="ecode" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
//               <div className="relative max-w-md mx-auto shadow-md rounded-2xl">
//                 <Search className="w-5 h-5 absolute left-4 top-4 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="E120, Gelatin বা উপাদান লিখুন..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 bg-white border border-emerald-950/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredCodes.length > 0 ? (
//                   filteredCodes.map((item, index) => (
//                     <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200/50 transition-all flex flex-col justify-between gap-4 group">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <span className="text-2xl font-mono font-black text-emerald-950 tracking-tight">{item.code}</span>
//                           <h4 className="text-sm font-bold text-slate-800 mt-1">{item.name}</h4>
//                           <span className="inline-block text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold mt-1">{item.type}</span>
//                         </div>
//                         <span className={`text-xs px-3 py-1 rounded-full font-bold shadow-sm border ${item.status === 'হারাম' ? 'bg-rose-50 text-rose-600 border-rose-100' :
//                           item.status === 'সন্দেহজনক' ? 'bg-amber-50 text-amber-600 border-amber-100' :
//                             'bg-emerald-50 text-emerald-600 border-emerald-100'
//                           }`}>
//                           {item.status}
//                         </span>
//                       </div>
//                       <p className="text-xs md:text-sm text-slate-500 leading-relaxed border-t border-dashed border-slate-100 pt-3">{item.desc}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 shadow-inner">
//                     <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3 animate-bounce" />
//                     <p className="text-sm font-bold text-slate-600">দুঃখিত, এই কোড বা উপাদানটি আমাদের ডাটাবেজে পাওয়া যায়নি।</p>
//                     <p className="text-xs text-slate-400 mt-1">অনুগ্রহ করে সঠিক বানান যেমন "E120" অথবা "Gelatin" লিখে চেষ্টা করুন।</p>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           )}

//           {/* ট্যাব ২: QR Code / বারকোড স্ক্যানার সিমুলেশন (নতুন মডিউল) */}
//           {activeTab === 'qrscan' && (
//             <motion.div key="qrscan" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="max-w-xl mx-auto bg-white p-6 rounded-3xl border border-slate-100 shadow-lg space-y-6">
//               <div className="text-center space-y-1">
//                 <h3 className="text-lg font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
//                   <QrCode className="w-5 h-5 text-emerald-800" /> প্রোডাক্ট স্ক্যানার (সিমুলেটর)
//                 </h3>
//                 <p className="text-xs text-slate-500">প্যাকেটের গায়ে থাকা বারকোড বা কিউআর কোডটি ক্যামেরার সামনে ধরুন</p>
//               </div>

//               {/* স্ক্যানার ক্যামেরা ভিউফাইন্ডার বক্স */}
//               <div className="relative bg-slate-900 aspect-video rounded-2xl overflow-hidden border-4 border-slate-950 flex flex-col items-center justify-center text-white shadow-inner">
//                 {isScanning ? (
//                   <>
//                     {/* লাইভ স্ক্যান লেজার লাইন অ্যানিমেশন */}
//                     <div className="absolute top-0 inset-x-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10b981] animate-bounce w-full" style={{ animationDuration: '2s' }} />
//                     <QrCode className="w-16 h-16 text-emerald-400/40 animate-pulse" />
//                     <p className="text-xs font-mono tracking-widest text-emerald-400 mt-3 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">SCANNING PRODUCT INGREDIENTS...</p>
//                   </>
//                 ) : (
//                   <>
//                     <div className="absolute inset-12 border-2 border-dashed border-white/20 rounded-xl pointer-events-none flex items-center justify-center" />
//                     <button
//                       onClick={handleStartScan}
//                       className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 z-10"
//                     >
//                       <QrCode className="w-4 h-4" /> স্ক্যান শুরু করুন
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* স্ক্যানিং রেজাল্ট শো বক্স */}
//               {scanResult && (
//                 <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-xl border border-dashed bg-amber-50/50 border-amber-200 flex gap-3.5 items-start">
//                   <div className="bg-amber-500 text-white p-2 rounded-lg shrink-0 mt-0.5">
//                     <AlertTriangle className="w-5 h-5" />
//                   </div>
//                   <div className="space-y-1">
//                     <div className="flex flex-wrap items-center justify-between gap-2">
//                       <h4 className="text-sm font-black text-slate-800">{scanResult.product}</h4>
//                       <span className="text-[11px] font-extrabold px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-md">{scanResult.status}</span>
//                     </div>
//                     <p className="text-[11px] text-slate-400 font-mono">{scanResult.code}</p>
//                     <p className="text-xs text-slate-600 leading-relaxed font-medium pt-1 border-t border-amber-200/40">{scanResult.reason}</p>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}

//           {/* ট্যাব ৩: ১২টি প্রধান সন্দেহজনক ও হারাম উপাদান */}
//           {activeTab === 'ingredients' && (
//             <motion.div key="ingredients" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-slate-100 shadow-sm">
//               {ingredientsChecklist.map((item, index) => (
//                 <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-rose-100 transition-all">
//                   <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 text-slate-800 font-serif font-black text-lg flex items-center justify-center border border-slate-100">{item.id}</div>
//                   <div className="flex-1 pt-0.5">
//                     <h4 className="text-sm font-bold text-slate-800 font-serif flex items-center gap-1.5">
//                       <Info className="w-3.5 h-3.5 text-rose-500/80" /> {item.title}
//                     </h4>
//                     <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           )}

//           {/* ট্যাব ৪: শপিং গাইড এবং সার্টিফাইড ব্র্যান্ড ডিরেক্টরি */}
//           {activeTab === 'dining' && (
//             <motion.div key="dining" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//               {/* বাম কলাম: চেনার ৪টি নিয়ম */}
//               <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-md space-y-6">
//                 <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
//                   <ShieldCheck className="w-5 h-5 text-emerald-950" />
//                   <h2 className="text-lg font-bold font-serif text-slate-800">নিরাপদ খাদ্য চেনার ৪টি নিয়ম</h2>
//                 </div>
//                 <div className="relative border-l-2 border-dashed border-emerald-200 pl-6 ml-3 space-y-6">
//                   {diningTips.map((step, index) => (
//                     <div key={index} className="relative">
//                       <div className="absolute -left-8.75 top-0.5 w-6 h-6 rounded-full bg-emerald-950 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
//                         {step.step}
//                       </div>
//                       <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/60 space-y-1">
//                         <h4 className="text-sm md:text-base font-bold text-slate-800 font-serif">{step.title}</h4>
//                         <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ডান কলাম: পপুলার ব্র্যান্ড ডিরেক্টরি */}
//               <div className="space-y-4">
//                 <div className="flex items-center gap-1.5 px-1 text-slate-600">
//                   <Building2 className="w-4 h-4 text-emerald-800" />
//                   <h3 className="text-xs font-bold uppercase tracking-wider">গ্লোবাল ব্র্যান্ড হালাল গাইড</h3>
//                 </div>
//                 <div className="space-y-3">
//                   {certifiedBrands.map((brand, idx) => (
//                     <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2">
//                       <div className="flex items-center justify-between gap-2">
//                         <h4 className="text-sm font-bold text-slate-800">{brand.name}</h4>
//                         <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded">
//                           {brand.status}
//                         </span>
//                       </div>
//                       <p className="text-[10px] font-semibold text-slate-400">অঞ্চল: {brand.region}</p>
//                       <p className="text-xs text-slate-500 leading-relaxed pt-1.5 border-t border-slate-50">{brand.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </motion.div>
//           )}

//         </AnimatePresence>
//       </main>
//     </div>
//   );
// };

// export default Halal_Food;













import React, { useEffect, useState } from 'react';
import { Search, ShieldCheck, AlertTriangle, Info, QrCode, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const Halal_Food = () => {
  const [activeTab, setActiveTab] = useState('ecode'); // ecode, qrscan, ingredients, dining
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);



  const [foods, setFoods] = useState([]);

  useEffect(() => {

    const savedFoods = JSON.parse(
      localStorage.getItem("foods")
    ) || [];

    setFoods(savedFoods);

  }, []);

  // ই-কোড (E-Numbers) ডাটাবেজ
  const eNumbersData = [
    { code: "E120", name: "Carmine / Cochineal", status: "হারাম", type: "রং উৎপাদনকারী", desc: "বিশেষ এক ধরণের পোকা পিষে এই লাল রং তৈরি করা হয়, যা জুস, মিষ্টি ও আইসক্রিমে ব্যবহৃত হয়।" },
    { code: "E441", name: "Gelatin", status: "সন্দেহজনক", type: "ঘনত্ব বৃদ্ধিকারী", desc: "যদি উদ্ভিজ্জ (Plant-sourced) না হয়, তবে এটি শূকর বা অ-ইসলামী পদ্ধতিতে জবাই করা পশুর হাড় ও চামড়া থেকে তৈরি।" },
    { code: "E471", name: "Mono- and Di-glycerides", status: "সন্দেহজনক", type: "ইমালসিফায়ার", desc: "প্যাকেটের গায়ে ১০০% উদ্ভিজ্জ বা ভেজিটেরিয়ান (Vegetarian) লেখা না থাকলে এটি প্রাণিজ চর্বি থেকে আসার সম্ভাবনাই বেশি।" },
    { code: "E904", name: "Shellac", status: "সন্দেহজনক", type: "চকচকে ভাব আনয়নকারী", desc: "এক ধরণের পোকার নিঃসৃত রস থেকে তৈরি। চকলেট বা চুইংগামের ওপর গ্লেজ দিতে এটি ব্যবহৃত হয়।" },
    { code: "E100", name: "Curcumin", status: "হালাল", type: "হলুদ রং", desc: "এটি সম্পূর্ণ প্রাকৃতিকভাবে হলুদ গাছ থেকে নিষ্কাশন করা হয়। ব্যবহার করা সম্পূর্ণ নিরাপদ।" },
    { code: "E330", name: "Citric Acid", status: "হালাল", type: "টক স্বাদ ও প্রিজারভেটিভ", desc: "লেবু বা সাইট্রাস জাতীয় ফল থেকে এটি তৈরি করা হয়। প্যাকেটজাত খাবারে বহু ব্যবহৃত ও হালাল।" },
    { code: "E322", name: "Lecithin", status: "হালাল (সাধারণত)", type: "অ্যান্টিঅক্সিডেন্ট", desc: "সাধারণত সয়াবিন (Soy lecithin) থেকে তৈরি করা হয়, তাই এটি হালাল। তবে ডিমের কুসুম থেকেও আসতে পারে।" },
    { code: "E110", name: "Sunset Yellow FCF", status: "হালাল", type: "কৃত্রিম রং", desc: "এটি একটি সিন্থেটিক বা পেট্রোকেমিক্যালস থেকে তৈরি রং। কোনো প্রাণিজ উপাদান নেই, তবে স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে।" }
  ];

  // ১২টি মোস্ট কমন সন্দেহজনক ও হারাম উপাদান চেকলিস্ট
  const ingredientsChecklist = [
    { id: "১", title: "Lard (লার্ড)", desc: "এটি সরাসরি শূকরের চর্বি। যেকোনো বিস্কুট, পেস্ট্রি বা চিপসে লার্ড থাকলে তা সম্পূর্ণ হারাম।" },
    { id: "২", title: "Whey Powder (হুই পাউডার)", desc: "পনির তৈরির উপজাত। চিজ তৈরিতে ব্যবহৃত এনজাইম বা রেনেট হালাল সোর্সের না হলে এটিও সন্দেহজনক।" },
    { id: "৩", title: "Pepsin (পেপসিন)", desc: "পাকস্থলী থেকে সংগৃহীত এনজাইম, যা সাধারণত শূকরের পরিপাকতন্ত্র থেকে কমার্শিয়ালি সংগ্রহ করা হয়।" },
    { id: "৪", title: "Animal Shortening", desc: "খাবারের মচমচে ভাব আনার জন্য ব্যবহৃত প্রাণিজ চর্বি। ওভেনে তৈরি পেস্ট্রিতে এটি বেশি থাকে।" },
    { id: "৫", title: "Bone Phosphate", desc: "পশুর হাড় থেকে তৈরি ক্যালসিয়াম লবণ। টুথপেস্ট বা সাপ্লিমেন্টে এর ব্যবহার দেখা যায়।" },
    { id: "৬", title: "Tallow (ট্যালো)", desc: "গরু বা ভেড়ার শক্ত চর্বি। সাবান, কসমেটিকস ছাড়াও কিছু প্রসেসড ফ্রাইড ফুডে এটি ব্যবহার করা হয়।" },
    { id: "৭", title: "Vanilla Extract", desc: "ভ্যানিলা ফ্লেভারটি নিষ্কাশন করতে অনেক সময় অ্যালকোহল দ্রাবক হিসেবে ব্যবহার করা হয়, যা এড়িয়ে চলা উত্তম।" },
    { id: "৮", title: "Rennet (রেনেট)", desc: "বাছুরের পাকস্থলী থেকে সংগৃহীত এনজাইম, যা চিজ তৈরিতে লাগে। মাইক্রোবিয়াল বা প্ল্যান্ট রেনেট হলে তা হালাল।" },
    { id: "৯", title: "Carmine (কারমাইন)", desc: "খাবারে গাঢ় লাল বা গোলাপি লিপস্টিক শেড আনতে ব্যবহৃত হয়। এটি মূলত ক্ষতিকর পোকার নির্যাস।" },
    { id: "১০", title: "Emulsifiers (ইমালসিফায়ার)", desc: "তেল ও জলকে একসাথে মেশাতে ব্যবহৃত উপাদান। এর সোর্স নির্দিষ্ট করে ভেজিটেরিয়ান বা হালাল লোগো দেখে নেওয়া উচিত।" },
    { id: "১১", title: "Glycerin/Glycerol", desc: "সাবান, টুথপেস্ট এবং চকলেটে ব্যবহৃত হয়। এটি উদ্ভিজ্জ (Plant-based) না হলে প্রাণিজ চর্বির তৈরি।" },
    { id: "১২", title: "Alcoholic Ingredients", desc: "যেকোনো ধরণের রান্নার ওয়াইন (যেমন: Mirin, Rum, Soy Sauce-এর কিছু ভ্যারিয়েন্ট) সরাসরি হারাম।" }
  ];

  // গ্লোবাল হালাল সার্টিফাইড ব্র্যান্ড ডিরেক্টরি
  const certifiedBrands = [
    { name: "KFC / Pizza Hut", region: "মুসলিম দেশসমূহ ও নির্দিষ্ট আউটলেট", status: "হালাল সার্টিফাইড", desc: "মালয়েশিয়া, ইন্দোনেশিয়া, জর্ডান এবং বাংলাদেশের মতো দেশে এগুলো শতভাগ হালাল সার্টিফাইড সোর্স ব্যবহার করে।" },
    { name: "Almarai (আলমারাই)", region: "মিডল ইস্ট / গ্লোবাল", status: "শতভাগ হালাল", desc: "বিশ্বের অন্যতম বৃহত্তম ডেইরি ব্র্যান্ড। এদের সকল জুস, দুধ, পনির এবং বেকারি আইটেম কঠোর হালাল মানদণ্ড মেনে চলে।" },
    { name: "Nestlé (নেসলে)", region: "নির্দিষ্ট হালাল ব্যাচ", status: "লোগো দেখে নিন", desc: "নেসলের গ্লোবাল ফ্যাক্টরিগুলোর একটি বিশাল অংশ হালাল সার্টিফাইড (যেমন মালয়েশিয়া ও পাকিস্তানের প্ল্যান্ট)। প্যাকেটের পেছনে হালাল লোগো থাকে।" }
  ];

  // বাইরে খাওয়ার সময় হালাল ডাইনিং ও শপিং গাইডলাইন
  const diningTips = [
    { step: "১", title: "সার্টিফিকেশন লোগো যাচাই করুন", desc: "প্যাকেটের পেছনে JAKIM, IFANCA, বা স্থানীয় বিশ্বস্ত ইসলামিক ফাউন্ডেশনের হালাল লোগো আছে কি না তা প্রথমে খেয়াল করুন।" },
    { step: "২", title: "সবুজ ভেজিটেরিয়ান ডট (Green Dot)", desc: "অনেক আন্তর্জাতিক প্রোডাক্টে (বিশেষ করে এশিয়ান) সবুজ বৃত্তাকার চিহ্ন থাকে, যার অর্থ এটি ১০০% উদ্ভিজ্জ ও প্রাণিজ চর্বিমুক্ত।" },
    { step: "৩", title: "ক্রস-কন্টামিনেশন বা মিশ্রণ সর্তকতা", desc: "নন-মুসলিম রেস্টুরেন্টে সি-ফুড বা ভেজিটেরিয়ান আইটেম অর্ডার করার সময় নিশ্চিত হোন যে একই তেলে বা পাত্রে পর্ক/হারাম মিট ফ্রাই করা হয়নি।" },
    { step: "৪", title: "সন্দেহ হলে বর্জন করুন (Leaving Doubt)", desc: "রাসুলুল্লাহ (সা.) বলেছেন, যা তোমাকে সন্দেহে ফেলে তা ছেড়ে দাও এবং যা সন্দেহমুক্ত তা গ্রহণ করো। স্পষ্ট হালাল প্রমাণ না পেলে তা এড়িয়ে চলাই সর্বোত্তম।" }
  ];

  // সার্চ কুয়েরি অনুযায়ী ই-কোড ফিল্টার করা
  const filteredCodes = eNumbersData.filter(item =>
    item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // কিউআর কোড স্ক্যানার সিমুলেশন ট্রিগার
  const handleStartScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      // একটি ডেমো রেজাল্ট রিটার্ন করা
      setScanResult({
        product: "Imported Choco Delight Biscuits",
        code: "Barcode: 89010580023",
        status: "সন্দেহজনক",
        reason: "এতে E471 ইমালসিফায়ার রয়েছে এবং কোনো হালাল লোগো প্রিন্ট করা নেই।"
      });
    }, 3000); // ৩ সেকেন্ড স্ক্যানিং অ্যানিমেশন চলবে
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans pb-16 selection:bg-emerald-200">

      {/* মডার্ন প্রিমিয়াম হেডার ব্যানার */}
      <div className="relative bg-linear-to-b from-slate-950 via-emerald-950 to-slate-900 text-white pt-8 pb-28 px-6 rounded-b-[3rem] shadow-2xl border-b border-emerald-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent opacity-80" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> সচেতন মুসলিম ডায়েট গাইড
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-emerald-50 to-amber-100 tracking-wide">
            স্মার্ট হালাল ফুড ট্র্যাকার
          </h1>
          <p className="text-emerald-200/60 text-xs md:text-sm max-w-xl mx-auto">
            খাবারের প্যাকেটের উপাদানের ই-কোড সার্চ করুন, বারকোড/কিউআর স্ক্যান সিমুলেট করুন এবং ক্ষতিকর বা হারাম উপাদান সম্পর্কে বিস্তারিত জানুন।
          </p>
        </div>
      </div>

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার (৪টি ট্যাব রেসপন্সিভ গ্রিড) */}
      <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 bg-emerald-900/10 p-1.5 rounded-2xl -mt-8 relative z-30 backdrop-blur-md border border-white/60 sm:mx-auto shadow-xl">
        <button onClick={() => { setActiveTab('ecode'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ecode' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>E-Code সার্চ</button>
        <button onClick={() => setActiveTab('qrscan')} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'qrscan' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>QR / বারকোড</button>
        <button onClick={() => { setActiveTab('ingredients'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ingredients' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>১২টি ক্ষতিকর উপাদান</button>
        <button onClick={() => { setActiveTab('dining'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'dining' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>শপিং গাইড</button>
      </div>

      <div className="relative max-w-md mt-6 mx-auto shadow-md rounded-2xl">
                <Search className="w-5 h-5 absolute left-4 top-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="E120, Gelatin বা উপাদান লিখুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-emerald-950/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                />
              </div>

      <Link to="/food" className="block max-w-xs mx-auto mt-6">
        <button className="w-full cursor-pointer hover:bg-pink-200 mt-6 max-w-xs mx-auto block text-2xl font-bold text-center text-pink-600 border-2 border-pink-600  active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-6 rounded-xl transition duration-200">
          Food Management
        </button>
      </Link>


      {/* Added Foods */}

      <section className="max-w-5xl mx-auto mt-12 px-4">


        <h2 className="text-3xl font-bold text-center text-emerald-950 mb-8">
          🍽️ Halal Food Collection
        </h2>


        {
          foods.length === 0 ? (

            <div className="bg-white rounded-2xl p-10 text-center shadow">

              <p className="text-gray-500">
                No food added yet
              </p>

            </div>

          )

            :

            (

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                {
                  foods.map((food) => (

                    <div
                      key={food.id}
                      className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition"
                    >


                      {
                        food.image && (

                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-52 object-cover"
                          />

                        )

                      }


                      <div className="p-5">


                        <h3 className="text-xl font-bold text-slate-800">
                          {food.name}
                        </h3>


                        <p className="text-sm text-gray-500 mt-1">
                          🏷️ {food.brand}
                        </p>


                        <p className="text-sm text-gray-500">
                          🌍 {food.country}
                        </p>


                        <div className="mt-3">

                          {
                            food.halalStatus === "Halal" ?

                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                ✅ Halal
                              </span>

                              :

                              food.halalStatus === "Haram" ?

                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                                  ❌ Haram
                                </span>

                                :

                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                                  ⚠ Needs Verification
                                </span>

                          }

                        </div>


                        <div className="mt-4 space-y-2 text-sm text-gray-600">


                          <p>
                            📑 <b>Ingredients:</b><br />
                            {food.ingredients}
                          </p>


                          <p>
                            🥗 <b>Nutrition:</b><br />
                            {food.nutrition}
                          </p>


                          <p>
                            🔢 Barcode:
                            {food.barcode}
                          </p>


                          {
                            food.reason &&

                            <p>
                              📝 {food.reason}
                            </p>

                          }


                          {
                            food.islamicReference &&

                            <p>
                              📜 {food.islamicReference}
                            </p>

                          }


                        </div>


                      </div>


                    </div>


                  ))

                }


              </div>

            )

        }


      </section>

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 relative z-20">

        <AnimatePresence mode="wait">

          {/* ট্যাব ১: ই-কোড লাইভ সার্চ ইঞ্জিন */}
          {activeTab === 'ecode' && (
            <motion.div key="ecode" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCodes.length > 0 ? (
                  filteredCodes.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200/50 transition-all flex flex-col justify-between gap-4 group">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-2xl font-mono font-black text-emerald-950 tracking-tight">{item.code}</span>
                          <h4 className="text-sm font-bold text-slate-800 mt-1">{item.name}</h4>
                          <span className="inline-block text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold mt-1">{item.type}</span>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-bold shadow-sm border ${item.status === 'হারাম' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                          item.status === 'সন্দেহজনক' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-emerald-50 text-emerald-600 border-emerald-100'
                          }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed border-t border-dashed border-slate-100 pt-3">{item.desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 shadow-inner">
                    <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3 animate-bounce" />
                    <p className="text-sm font-bold text-slate-600">দুঃখিত, এই কোড বা উপাদানটি আমাদের ডাটাবেজে পাওয়া যায়নি।</p>
                    <p className="text-xs text-slate-400 mt-1">অনুগ্রহ করে সঠিক বানান যেমন "E120" অথবা "Gelatin" লিখে চেষ্টা করুন।</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ট্যাব ২: QR Code / বারকোড স্ক্যানার সিমুলেশন (নতুন মডিউল) */}
          {activeTab === 'qrscan' && (
            <motion.div key="qrscan" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="max-w-xl mx-auto bg-white p-6 rounded-3xl border border-slate-100 shadow-lg space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
                  <QrCode className="w-5 h-5 text-emerald-800" /> প্রোডাক্ট স্ক্যানার (সিমুলেটর)
                </h3>
                <p className="text-xs text-slate-500">প্যাকেটের গায়ে থাকা বারকোড বা কিউআর কোডটি ক্যামেরার সামনে ধরুন</p>
              </div>

              {/* স্ক্যানার ক্যামেরা ভিউফাইন্ডার বক্স */}
              <div className="relative bg-slate-900 aspect-video rounded-2xl overflow-hidden border-4 border-slate-950 flex flex-col items-center justify-center text-white shadow-inner">
                {isScanning ? (
                  <>
                    {/* লাইভ স্ক্যান লেজার লাইন অ্যানিমেশন */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10b981] animate-bounce w-full" style={{ animationDuration: '2s' }} />
                    <QrCode className="w-16 h-16 text-emerald-400/40 animate-pulse" />
                    <p className="text-xs font-mono tracking-widest text-emerald-400 mt-3 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">SCANNING PRODUCT INGREDIENTS...</p>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-12 border-2 border-dashed border-white/20 rounded-xl pointer-events-none flex items-center justify-center" />
                    <button
                      onClick={handleStartScan}
                      className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 z-10"
                    >
                      <QrCode className="w-4 h-4" /> স্ক্যান শুরু করুন
                    </button>
                  </>
                )}
              </div>

              {/* স্ক্যানিং রেজাল্ট শো বক্স */}
              {scanResult && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-xl border border-dashed bg-amber-50/50 border-amber-200 flex gap-3.5 items-start">
                  <div className="bg-amber-500 text-white p-2 rounded-lg shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-black text-slate-800">{scanResult.product}</h4>
                      <span className="text-[11px] font-extrabold px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-md">{scanResult.status}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">{scanResult.code}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium pt-1 border-t border-amber-200/40">{scanResult.reason}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ট্যাব ৩: ১২টি প্রধান সন্দেহজনক ও হারাম উপাদান */}
          {activeTab === 'ingredients' && (
            <motion.div key="ingredients" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-slate-100 shadow-sm">
              {ingredientsChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-rose-100 transition-all">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 text-slate-800 font-serif font-black text-lg flex items-center justify-center border border-slate-100">{item.id}</div>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-sm font-bold text-slate-800 font-serif flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-rose-500/80" /> {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ট্যাব ৪: শপিং গাইড এবং সার্টিফাইড ব্র্যান্ড ডিরেক্টরি */}
          {activeTab === 'dining' && (
            <motion.div key="dining" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* বাম কলাম: চেনার ৪টি নিয়ম */}
              <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-md space-y-6">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-950" />
                  <h2 className="text-lg font-bold font-serif text-slate-800">নিরাপদ খাদ্য চেনার ৪টি নিয়ম</h2>
                </div>
                <div className="relative border-l-2 border-dashed border-emerald-200 pl-6 ml-3 space-y-6">
                  {diningTips.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-8.75 top-0.5 w-6 h-6 rounded-full bg-emerald-950 text-white font-serif text-xs font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100/60 space-y-1">
                        <h4 className="text-sm md:text-base font-bold text-slate-800 font-serif">{step.title}</h4>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ডান কলাম: পপুলার ব্র্যান্ড ডিরেক্টরি */}
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 px-1 text-slate-600">
                  <Building2 className="w-4 h-4 text-emerald-800" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">গ্লোবাল ব্র্যান্ড হালাল গাইড</h3>
                </div>
                <div className="space-y-3">
                  {certifiedBrands.map((brand, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-800">{brand.name}</h4>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded">
                          {brand.status}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-slate-400">অঞ্চল: {brand.region}</p>
                      <p className="text-xs text-slate-500 leading-relaxed pt-1.5 border-t border-slate-50">{brand.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default Halal_Food;