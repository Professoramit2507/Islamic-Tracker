import React, { useEffect, useState } from 'react';
import { Search, ShieldCheck, AlertTriangle, Info, QrCode, Sparkles, Trash2, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const Halal_Food = () => {
  const [activeTab, setActiveTab] = useState('ecode'); // ecode (Food Search), qrscan, ingredients (E Code Details)
  const [searchQuery, setSearchQuery] = useState('');
  const [eCodeSearchQuery, setECodeSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null); // বিস্তারিত দেখানোর জন্য স্টেট

  useEffect(() => {
    const savedFoods = JSON.parse(
      localStorage.getItem("foods")
    ) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFoods(savedFoods);
  }, []);

  // ডিলিট করার ফাংশন
  const handleDeleteFood = (id, e) => {
    e.stopPropagation(); // কার্ড বা অন্য বাটনের ইভেন্ট ট্রিগার হওয়া বন্ধ করতে
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);
    localStorage.setItem("foods", JSON.stringify(updatedFoods));
    if (selectedFood?.id === id) {
      setSelectedFood(null);
    }
  };

// ই-কোড (E-Numbers) ডাটাবেজ (বর্ধিত)
  const eNumbersData = [
    { code: "E120", name: "Carmine / Cochineal", status: "হারাম", type: "রং উৎপাদনকারী", desc: "বিশেষ এক ধরণের স্ত্রী পোকা পিষে এই গাঢ় লাল রং তৈরি করা হয়, যা জুস, চিপস, মিষ্টি ও আইসক্রিমে ব্যবহৃত হয়।" },
    { code: "E441", name: "Gelatin", status: "সন্দেহজনক", type: "ঘনত্ব বৃদ্ধিকারী", desc: "যদি উদ্ভিজ্জ (Plant-sourced) না হয়, তবে এটি অনুইসলামী পদ্ধতিতে জবাই করা পশুর (অথবা শূকরের) হাড় ও চামড়া থেকে তৈরি হতে পারে।" },
    { code: "E471", name: "Mono- and Di-glycerides", status: "সন্দেহজনক", type: "ইমালসিফায়ার", desc: "প্যাকেটের গায়ে ১০০% উদ্ভিজ্জ বা ভেজিটেরিয়ান (Vegetarian) লেখা না থাকলে এটি প্রাণিজ চর্বি থেকে আসার সম্ভাবনাই বেশি।" },
    { code: "E904", name: "Shellac", status: "সন্দেহজনক", type: "চকচকে ভাব আনয়নকারী", desc: "এক ধরণের পোকার নিঃসৃত রস থেকে তৈরি। চকলেট, ক্যান্ডি বা চুইংগামের ওপর গ্লেজ দিতে এটি ব্যবহৃত হয়।" },
    { code: "E100", name: "Curcumin", status: "হালাল", type: "হলুদ রং", desc: "এটি সম্পূর্ণ প্রাকৃতিকভাবে হলুদ গাছ বা রুট থেকে নিষ্কাশন করা হয়। ব্যবহার করা সম্পূর্ণ নিরাপদ।" },
    { code: "E330", name: "Citric Acid", status: "হালাল", type: "টক স্বাদ ও প্রিজারভেটিভ", desc: "লেবু বা সাইট্রাস জাতীয় ফল থেকে এটি তৈরি করা হয়। প্যাকেটজাত খাবারে বহু ব্যবহৃত ও হালাল।" },
    { code: "E322", name: "Lecithin", status: "হালাল (সাধারণত)", type: "অ্যান্টিঅক্সিডেন্ট", desc: "সাধারণত সয়াবিন (Soy lecithin) বা সূর্যমুখী থেকে তৈরি করা হয়, তাই এটি হালাল। তবে ডিমের কুসুম থেকেও আসতে পারে।" },
    { code: "E110", name: "Sunset Yellow FCF", status: "হালাল", type: "কৃত্রিম রং", desc: "এটি একটি সিন্থেটিক বা পেট্রোকেমিক্যালস থেকে তৈরি কমলা-হলুদ রং। কোনো প্রাণিজ উপাদান নেই, তবে স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে।" },
    { code: "E101", name: "Riboflavin (Vitamin B2)", status: "হালাল", type: "ভিটামিন ও হলুদ রং", desc: "এটি সাধারণত উদ্ভিজ্জ উৎস বা ইস্ট (Yeast) থেকে তৈরি ভিটামিন বি২। খাবারে প্রাকৃতিক হলুদ রঙের জন্য ব্যবহৃত হয়।" },
    { code: "E150a", name: "Plain Caramel", status: "হালাল", type: "বাদামী রং", desc: "চিনি বা কার্বোহাইড্রেট পুড়িয়ে এই কালার তৈরি করা হয়। কোলা বা বেকিং আইটেমে বহুল ব্যবহৃত এবং হালাল।" },
    { code: "E211", name: "Sodium Benzoate", status: "হালাল", type: "সংরক্ষণকারী (Preservative)", desc: "কেমিক্যাল প্রক্রিয়ায় তৈরি প্রিজারভেটিভ যা সফট ড্রিংকস ও সসে ব্যাকটেরিয়া এবং ফাঙ্গাস রোধে ব্যবহৃত হয়।" },
    { code: "E422", name: "Glycerol / Glycerin", status: "সন্দেহজনক", type: "আর্দ্রতা রক্ষাকারী", desc: "যদি প্যাকেজিংয়ে স্পষ্টভাবে উদ্ভিজ্জ বা 'Vegetable Glycerin' উল্লেখ না থাকে, তবে এটি প্রাণিজ চর্বি থেকে তৈরি হওয়ার বড় সম্ভাবনা থাকে।" },
    { code: "E542", name: "Edible Bone Phosphate", status: "হারাম", type: "অ্যান্টি-কেকিং এজেন্ট", desc: "এটি সরাসরি পশুর হাড়ের মজ্জা বা ফসফেট থেকে তৈরি করা হয়। হালাল উপায়ে জবাই না করা পশুর উৎস হওয়ায় এটি বর্জনীয়।" },
    { code: "E621", name: "Monosodium Glutamate (MSG)", status: "হালাল", type: "স্বাদ বর্ধক (টেস্টিং সল্ট)", desc: "সাধারণত উদ্ভিজ্জ উপাদান যেমন আখের রস বা স্টার্চ গাজন (Fermentation) করে তৈরি করা হয়। এটি হালাল, তবে স্বাস্থ্যের জন্য সীমিত ব্যবহারের পরামর্শ দেওয়া হয়।" },
    { code: "E951", name: "Aspartame", status: "হালাল", type: "কৃত্রিম চিনি (Sweetener)", desc: "ডায়েট কোক বা সুগার-ফ্রি খাবারে ব্যবহৃত একটি কৃত্রিম মিষ্টি। এটি কেমিক্যাল উপায়ে তৈরি এবং এতে কোনো প্রাণিজ উপাদান নেই।" },
    { code: "E124", name: "Ponceau 4R", status: "হালাল", type: "সিন্থেটিক লাল রং", desc: "এটি পেট্রোলিয়াম থেকে তৈরি একটি কৃত্রিম লাল রং। কোনো প্রাণিজ উপাদান নেই, তবে এটি ইউরোপ ও আমেরিকার কিছু দেশে স্বাস্থ্যের কারণে নিষিদ্ধ।" },
    { code: "E412", name: "Guar Gum", status: "হালাল", type: "ঘনত্ব বৃদ্ধিকারী", desc: "গুয়ার নামক উদ্ভিদের বীজ থেকে প্রাকৃতিকভাবে এই গাম বা আঠা তৈরি করা হয়। সস ও আইসক্রিমে এটি থিকনার হিসেবে ব্যবহৃত হয়।" },
    { code: "E469", name: "Sodium Carboxymethyl Cellulose", status: "হালাল", type: "স্ট্যাবিলাইজার", desc: "উদ্ভিদের সেলুলোজ বা কাঠ/তুলা থেকে রাসায়নিক প্রক্রিয়ায় তৈরি করা হয়। এটি হালাল এবং নিরাপদ।" }
  ];

  // ১. ই-কোড সার্চ কুয়েরি অনুযায়ী ফিল্টার করা
  const filteredCodes = eNumbersData.filter(item =>
    item.code.toLowerCase().includes(eCodeSearchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(eCodeSearchQuery.toLowerCase())
  );

  // ২. অ্যাড করা ফুড কালেকশনকে বারকোড, নাম এবং উপাদান দিয়ে ফিল্টার করা
  const filteredFoods = foods.filter(food => 
    food.barcode?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.ingredients?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // কিউআর কোড স্ক্যানার সিমুলেশন ট্রিগার
  const handleStartScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        product: "Imported Choco Delight Biscuits",
        code: "Barcode: 89010580023",
        status: "সন্দেহজনক",
        reason: "এতে E471 ইমালসিফায়ার রয়েছে এবং কোনো হালাল লোগো প্রিন্ট করা নেই।"
      });
    }, 3000);
  };

  // রেন্ডার করা খাবারের গ্রিড কম্পোনেন্ট
  const renderFoodCollection = () => (
    <div className="space-y-6 mt-8">
      <h2 className="text-2xl font-bold text-center text-emerald-950 mb-4">
        🍽️ Halal Food Collection
      </h2>

      {filteredFoods.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow border border-dashed border-slate-200">
          <p className="text-gray-500">
            {searchQuery ? "এই বারকোড বা নামের কোনো খাবার পাওয়া যায়নি।" : "No food added yet"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                {food.image && (
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">
                    {food.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">🏷️ {food.brand}</p>
                  <p className="text-sm text-gray-500">🌍 {food.country}</p>

                  <div className="mt-3">
                    {food.halalStatus === "Halal" ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">✅ Halal</span>
                    ) : food.halalStatus === "Haram" ? (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">❌ Haram</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">⚠ Needs Verification</span>
                    )}
                  </div>

                  <div className="mt-4 text-sm text-gray-600 line-clamp-3">
                    <p><b>Ingredients:</b> {food.ingredients}</p>
                  </div>
                </div>
              </div>

              {/* অ্যাকশন বাটনস */}
              <div className="p-5 pt-0 space-y-2">
                <button 
                  onClick={() => setSelectedFood(food)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold py-2 px-4 rounded-xl border border-emerald-200 transition duration-200"
                >
                  <Eye className="w-4 h-4" /> View Details
                </button>
                <button 
                  onClick={(e) => handleDeleteFood(food.id, e)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-xl border border-red-200 transition duration-200"
                >
                  <Trash2 className="w-4 h-4" /> Delete Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans pb-16 selection:bg-emerald-200">

      {/* মডার্ন প্রিমিয়াম হেডার ব্যানার */}
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

      {/* কন্টেন্ট নেভিগেশন ট্যাব বার */}
      <div className="max-w-xl mx-auto grid grid-cols-3 gap-2 bg-emerald-900/10 p-1.5 rounded-2xl -mt-8 relative z-30 backdrop-blur-md border border-white/60 sm:mx-auto shadow-xl">
        <button onClick={() => { setActiveTab('ecode'); setScanResult(null); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ecode' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>Food Search</button>
        <button onClick={() => { setActiveTab('qrscan'); setSearchQuery(''); setECodeSearchQuery(''); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'qrscan' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>QR / বারকোড</button>
        <button onClick={() => { setActiveTab('ingredients'); setScanResult(null); setSearchQuery(''); }} className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${activeTab === 'ingredients' ? 'bg-emerald-900 text-white shadow-md' : 'text-slate-900 hover:bg-emerald-900/5'}`}>E Code Details</button>
      </div>

      {/* ফুড সার্চ ট্যাব এবং ফুড ম্যানেজমেন্ট লিঙ্ক */}
      {activeTab === 'ecode' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="space-y-4 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* খাবারের সার্চ বার */}
          <div className="relative max-w-md mt-6 mx-auto shadow-md rounded-2xl">
            <Search className="w-5 h-5 absolute left-4 top-4 text-slate-400" />
            <input
              type="text"
              placeholder="খাবারের নাম, বারকোড বা উপাদান লিখুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-emerald-950/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
            />
          </div>

          <Link to="/food" className="block max-w-xs mx-auto">
            <button className="w-full cursor-pointer hover:bg-pink-200 text-base md:text-lg font-bold text-center text-pink-600 border-2 border-pink-600 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-6 rounded-xl transition duration-200">
              Food Management
            </button>
          </Link>
        </motion.div>
      )}

      {/* মেইন ডাইনামিক কন্টেন্ট এরিয়া */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 relative z-20">
        <AnimatePresence mode="wait">
          
          {/* ট্যাব ১: Food Search */}
          {activeTab === 'ecode' && (
            <motion.div key="ecode" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
              {renderFoodCollection()}
            </motion.div>
          )}

          {/* ট্যাব ২: QR Code / বারকোড স্ক্যানার সিমুলেশন */}
          {activeTab === 'qrscan' && (
            <motion.div key="qrscan" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-10">
              <div className="max-w-xl mx-auto bg-white p-6 rounded-3xl border border-slate-100 shadow-lg space-y-6">
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
                    <QrCode className="w-5 h-5 text-emerald-800" /> প্রোডাক্ট স্ক্যানার (সিমুলেটর)
                  </h3>
                  <p className="text-xs text-slate-500">প্যাকেটের গায়ে থাকা বারকোড বা কিউআর কোডটি ক্যামেরার সামনে ধরুন</p>
                </div>

                <div className="relative bg-slate-900 aspect-video rounded-2xl overflow-hidden border-4 border-slate-950 flex flex-col items-center justify-center text-white shadow-inner">
                  {isScanning ? (
                    <>
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
              </div>
            </motion.div>
          )}

          {/* ট্যাব ৩: E Code Details */}
          {activeTab === 'ingredients' && (
            <motion.div key="ingredients" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-emerald-950 mb-4">
                🔬 E-Numbers Database
              </h2>

              <div className="relative max-w-md mx-auto shadow-md rounded-2xl mb-8">
                <Search className="w-5 h-5 absolute left-4 top-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="E120, E441 বা ই-কোডের নাম লিখে সার্চ করুন..."
                  value={eCodeSearchQuery}
                  onChange={(e) => setECodeSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-emerald-950/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCodes.length > 0 ? (
                  filteredCodes.map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xl font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                            {item.code}
                          </span>
                          <h4 className="text-base font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                            <Info className="w-4 h-4 text-slate-400" /> {item.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-0.5">প্রকার: {item.type}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                          item.status === 'হারাম' ? 'bg-red-50 text-red-600 border-red-100' :
                          item.status === 'সন্দেহজনক' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                          'bg-green-50 text-green-600 border-green-100'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed pt-2 border-t border-gray-100">
                        {item.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 shadow-inner">
                    <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3 animate-bounce" />
                    <p className="text-sm font-bold text-slate-600">দুঃখিত, এই ই-কোডটি আমাদের ডাটাবেজে পাওয়া যায়নি।</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* বিস্তারিত দেখার জন্য প্রিমিয়াম ডাইনামিক মডাল */}
      <AnimatePresence>
        {selectedFood && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* ব্যাকড্রপ ওভারলে */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFood(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* মডাল বক্স */}
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* মডাল হেডার ইমেজ ও ক্লোজ বাটন */}
              <div className="relative">
                {selectedFood.image ? (
                  <img src={selectedFood.image} alt={selectedFood.name} className="w-full h-64 object-cover" />
                ) : (
                  <div className="w-full h-24 bg-gradient-to-r from-emerald-950 to-slate-900" />
                )}
                <button 
                  onClick={() => setSelectedFood(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* মডাল কন্টেন্ট এরিয়া (স্ক্রোলযোগ্য) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{selectedFood.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">🏷️ Brand: {selectedFood.brand} | 🌍 Country: {selectedFood.country}</p>
                  </div>
                  <div>
                    {selectedFood.halalStatus === "Halal" ? (
                      <span className="bg-green-100 text-green-800 border border-green-200 px-4 py-1.5 rounded-full text-sm font-bold block">✅ Halal</span>
                    ) : selectedFood.halalStatus === "Haram" ? (
                      <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-1.5 rounded-full text-sm font-bold block">❌ Haram</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 px-4 py-1.5 rounded-full text-sm font-bold block">⚠ Needs Verification</span>
                    )}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* উপাদান ও পুষ্টিগুণ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">🌿 Ingredients</h4>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{selectedFood.ingredients}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">📊 Nutrition Info</h4>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{selectedFood.nutrition}</p>
                  </div>
                </div>

                {/* বারকোড ও অন্যান্য ডিটেইলস */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-800 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-100">
                      🔢 Barcode: {selectedFood.barcode}
                    </span>
                  </div>

                  {selectedFood.reason && (
                    <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-2xl">
                      <h4 className="font-bold text-amber-800 mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> কারণ / ব্যাখ্যা:
                      </h4>
                      <p className="text-sm text-amber-900 leading-relaxed">{selectedFood.reason}</p>
                    </div>
                  )}

                  {selectedFood.islamicReference && (
                    <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-2xl">
                      <h4 className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                        📜 ইসলামিক রেফারেন্স:
                      </h4>
                      <p className="text-sm text-emerald-900 leading-relaxed italic">"{selectedFood.islamicReference}"</p>
                    </div>
                  )}
                </div>
              </div>

              {/* মডাল ফুটার */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setSelectedFood(null)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-sm transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Halal_Food;