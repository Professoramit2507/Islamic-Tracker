import React, { useEffect, useState } from "react";
import {
  Search,
  AlertTriangle,
  Info,
  Sparkles,
  Trash2,
  Eye,
  X,
  Camera as CameraIcon,
  ScanLine,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

import green from "../../assets/circle/images.jpg";
import red from "../../assets/circle/images (1).jpg";
import Camera from "../Food/BarcodeScanner";

const Halal_Food = () => {
  const [activeTab, setActiveTab] = useState("ecode");

  const [searchQuery, setSearchQuery] = useState("");
  const [eCodeSearchQuery, setECodeSearchQuery] = useState("");

  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  // Scanner modal
  const [showScanner, setShowScanner] = useState(false);
  const [scanResult, setScanResult] = useState("");

  // =========================
  // Load Foods
  // =========================
  useEffect(() => {
    const savedFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(savedFoods);
  }, []);

  // =========================
  // Delete Food
  // =========================
  const handleDeleteFood = (id, e) => {
    e.stopPropagation();

    const updatedFoods = foods.filter((food) => food.id !== id);

    setFoods(updatedFoods);
    localStorage.setItem("foods", JSON.stringify(updatedFoods));

    if (selectedFood?.id === id) {
      setSelectedFood(null);
    }
  };

  // =========================
  // Barcode Scan Success
  // =========================
  const handleScanSuccess = (decodedText) => {
    console.log("Scanned Barcode:", decodedText);

    setScanResult(decodedText);
    setSearchQuery(decodedText);
    setShowScanner(false);

    // Automatically search scanned barcode
    setActiveTab("ecode");
  };

  // =========================
  // E-Numbers Database
  // =========================
  const eNumbersData = [
    {
      code: "E120",
      name: "Carmine / Cochineal",
      status: "হারাম",
      type: "রং উৎপাদনকারী",
      desc: "বিশেষ এক ধরণের স্ত্রী পোকা পিষে এই গাঢ় লাল রং তৈরি করা হয়, যা জুস, চিপস, মিষ্টি ও আইসক্রিমে ব্যবহৃত হয়।",
    },
    {
      code: "E441",
      name: "Gelatin",
      status: "সন্দেহজনক",
      type: "ঘনত্ব বৃদ্ধিকারী",
      desc: "যদি উদ্ভিজ্জ (Plant-sourced) না হয়, তবে এটি অনুইসলামী পদ্ধতিতে জবাই করা পশুর (অথবা শূকরের) হাড় ও চামড়া থেকে তৈরি হতে পারে।",
    },
    {
      code: "E471",
      name: "Mono- and Di-glycerides",
      status: "সন্দেহজনক",
      type: "ইমালসিফায়ার",
      desc: "প্যাকেটের গায়ে ১০০% উদ্ভিজ্জ বা ভেজিটেরিয়ান (Vegetarian) লেখা না থাকলে এটি প্রাণিজ চর্বি থেকে আসার সম্ভাবনা থাকে।",
    },
    {
      code: "E904",
      name: "Shellac",
      status: "সন্দেহজনক",
      type: "চকচকে ভাব আনয়নকারী",
      desc: "এক ধরণের পোকার নিঃসৃত রস থেকে তৈরি। চকলেট, ক্যান্ডি বা চুইংগামের ওপর গ্লেজ দিতে এটি ব্যবহৃত হয়।",
    },
    {
      code: "E100",
      name: "Curcumin",
      status: "হালাল",
      type: "হলুদ রং",
      desc: "এটি সম্পূর্ণ প্রাকৃতিকভাবে হলুদ গাছ বা রুট থেকে নিষ্কাশন করা হয়।",
    },
    {
      code: "E330",
      name: "Citric Acid",
      status: "হালাল",
      type: "টক স্বাদ ও প্রিজারভেটিভ",
      desc: "লেবু বা সাইট্রাস জাতীয় ফল থেকে এটি তৈরি করা হয়।",
    },
    {
      code: "E322",
      name: "Lecithin",
      status: "হালাল (সাধারণত)",
      type: "অ্যান্টিঅক্সিডেন্ট",
      desc: "সাধারণত সয়াবিন বা সূর্যমুখী থেকে তৈরি করা হয়।",
    },
    {
      code: "E110",
      name: "Sunset Yellow FCF",
      status: "হালাল",
      type: "কৃত্রিম রং",
      desc: "এটি একটি সিন্থেটিক বা পেট্রোকেমিক্যালস থেকে তৈরি কমলা-হলুদ রং।",
    },
    {
      code: "E101",
      name: "Riboflavin (Vitamin B2)",
      status: "হালাল",
      type: "ভিটামিন ও হলুদ রং",
      desc: "এটি সাধারণত উদ্ভিজ্জ উৎস বা ইস্ট থেকে তৈরি ভিটামিন বি২।",
    },
    {
      code: "E150a",
      name: "Plain Caramel",
      status: "হালাল",
      type: "বাদামী রং",
      desc: "চিনি বা কার্বোহাইড্রেট পুড়িয়ে এই কালার তৈরি করা হয়।",
    },
    {
      code: "E211",
      name: "Sodium Benzoate",
      status: "হালাল",
      type: "সংরক্ষণকারী",
      desc: "সফট ড্রিংকস ও সসে ব্যাকটেরিয়া এবং ফাঙ্গাস রোধে ব্যবহৃত হয়।",
    },
    {
      code: "E422",
      name: "Glycerol / Glycerin",
      status: "সন্দেহজনক",
      type: "আর্দ্রতা রক্ষাকারী",
      desc: "Vegetable Glycerin উল্লেখ না থাকলে উৎস যাচাই করা প্রয়োজন।",
    },
    {
      code: "E542",
      name: "Edible Bone Phosphate",
      status: "হারাম",
      type: "অ্যান্টি-কেকিং এজেন্ট",
      desc: "এটি পশুর হাড় থেকে তৈরি হতে পারে। উৎস যাচাই করা প্রয়োজন।",
    },
    {
      code: "E621",
      name: "Monosodium Glutamate (MSG)",
      status: "হালাল",
      type: "স্বাদ বর্ধক",
      desc: "সাধারণত স্টার্চ বা অন্যান্য উদ্ভিজ্জ উৎসের fermentation থেকে তৈরি করা হয়।",
    },
    {
      code: "E951",
      name: "Aspartame",
      status: "হালাল",
      type: "কৃত্রিম চিনি",
      desc: "ডায়েট ও sugar-free খাবারে ব্যবহৃত কৃত্রিম sweetener।",
    },
    {
      code: "E124",
      name: "Ponceau 4R",
      status: "হালাল",
      type: "সিন্থেটিক লাল রং",
      desc: "এটি একটি কৃত্রিম লাল রং।",
    },
    {
      code: "E412",
      name: "Guar Gum",
      status: "হালাল",
      type: "ঘনত্ব বৃদ্ধিকারী",
      desc: "গুয়ার উদ্ভিদের বীজ থেকে তৈরি করা হয়।",
    },
    {
      code: "E469",
      name: "Sodium Carboxymethyl Cellulose",
      status: "হালাল",
      type: "স্ট্যাবিলাইজার",
      desc: "উদ্ভিদের সেলুলোজ থেকে রাসায়নিক প্রক্রিয়ায় তৈরি করা হয়।",
    },
  ];

  // =========================
  // Filter E-Codes
  // =========================
  const filteredCodes = eNumbersData.filter(
    (item) =>
      item.code
        .toLowerCase()
        .includes(eCodeSearchQuery.toLowerCase()) ||
      item.name
        .toLowerCase()
        .includes(eCodeSearchQuery.toLowerCase())
  );

  // =========================
  // Filter Foods
  // =========================
  const filteredFoods = foods.filter((food) => {
    const query = searchQuery.toLowerCase();

    return (
      food.barcode?.toString().toLowerCase().includes(query) ||
      food.name?.toLowerCase().includes(query) ||
      food.ingredients?.toLowerCase().includes(query)
    );
  });

  // =========================
  // Food Collection
  // =========================
  const renderFoodCollection = () => (
    <div className="space-y-6 mt-8">
      <h2 className="text-2xl font-bold text-center text-emerald-950 mb-4">
        🍽️ Halal Food Collection
      </h2>

      {filteredFoods.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow border border-dashed border-slate-200">
          <p className="text-gray-500">
            {searchQuery
              ? "এই বারকোড বা নামের কোনো খাবার পাওয়া যায়নি।"
              : "No food added yet"}
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
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800">
                      {food.name}
                    </h3>

                    {food.vegType === "Veg" ? (
                      <img
                        src={green}
                        alt="Vegetarian"
                        className="w-7 h-7"
                      />
                    ) : (
                      <img
                        src={red}
                        alt="Non Vegetarian"
                        className="w-7 h-7"
                      />
                    )}
                  </div>

                  <p className="text-sm text-gray-500">
                    🏷️ {food.brand}
                  </p>

                  <p className="text-sm text-gray-500">
                    🌍 {food.country}
                  </p>

                  <p className="text-sm text-gray-500">
                    🔢 Barcode: {food.barcode}
                  </p>

                  <div className="mt-3">
                    {food.halalStatus === "Halal" ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                        ✅ Halal
                      </span>
                    ) : food.halalStatus === "Haram" ? (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                        ❌ Haram
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                        ⚠ Needs Verification
                      </span>
                    )}
                  </div>

                  <div className="mt-4 text-sm text-gray-600 line-clamp-3">
                    <p>
                      <b>Ingredients:</b> {food.ingredients}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedFood(food)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold py-2 px-4 rounded-xl border border-emerald-200 transition"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>

                <button
                  onClick={(e) => handleDeleteFood(food.id, e)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-xl border border-red-200 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Item
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

      {/* =========================
          HEADER
      ========================== */}
      <div className="relative bg-linear-to-b from-slate-950 via-emerald-950 to-slate-900 text-white pt-8 pb-28 px-6 rounded-b-[3rem] shadow-2xl border-b border-emerald-900/30 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent opacity-80" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3">

          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            সচেতন মুসলিম ডায়েট গাইড
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-emerald-50 to-amber-100 tracking-wide">
            স্মার্ট হালাল ফুড ট্র্যাকার
          </h1>

          <p className="text-emerald-200/60 text-xs md:text-sm max-w-xl mx-auto">
            খাবারের প্যাকেটের উপাদানের ই-কোড সার্চ করুন, বারকোড/কিউআর স্ক্যান করুন এবং খাবারের তথ্য দেখুন।
          </p>
        </div>
      </div>

      {/* =========================
          TABS
      ========================== */}
      <div className="max-w-xl mx-auto grid grid-cols-3 gap-2 bg-emerald-900/10 p-1.5 rounded-2xl -mt-8 relative z-30 backdrop-blur-md border border-white/60 shadow-xl">

        <button
          onClick={() => {
            setActiveTab("ecode");
            setScanResult("");
          }}
          className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === "ecode"
              ? "bg-emerald-900 text-white shadow-md"
              : "text-slate-900 hover:bg-emerald-900/5"
          }`}
        >
          Food Search
        </button>

        <button
          onClick={() => {
            setActiveTab("qrscan");
            setSearchQuery("");
            setECodeSearchQuery("");
            setScanResult("");
          }}
          className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === "qrscan"
              ? "bg-emerald-900 text-white shadow-md"
              : "text-slate-900 hover:bg-emerald-900/5"
          }`}
        >
          QR / বারকোড
        </button>

        <button
          onClick={() => {
            setActiveTab("ingredients");
            setScanResult("");
            setSearchQuery("");
          }}
          className={`py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === "ingredients"
              ? "bg-emerald-900 text-white shadow-md"
              : "text-slate-900 hover:bg-emerald-900/5"
          }`}
        >
          E Code Details
        </button>
      </div>

      {/* =========================
          FOOD SEARCH TOP AREA
      ========================== */}
      {activeTab === "ecode" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
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
            <button
              type="button"
              className="w-full cursor-pointer hover:bg-pink-200 text-base md:text-lg font-bold text-center text-pink-600 border-2 border-pink-600 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-6 rounded-xl transition duration-200"
            >
              Food Management
            </button>
          </Link>
        </motion.div>
      )}

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 relative z-20">
        <AnimatePresence mode="wait">

          {/* =========================
              FOOD SEARCH TAB
          ========================== */}
          {activeTab === "ecode" && (
            <motion.div
              key="ecode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              {renderFoodCollection()}
            </motion.div>
          )}

          {/* =========================
              QR / BARCODE TAB
          ========================== */}
          {activeTab === "qrscan" && (
            <motion.div
              key="qrscan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                  <ScanLine className="w-10 h-10 text-emerald-700" />
                </div>

                <h2 className="text-2xl font-bold text-emerald-950 mb-2">
                  QR / Barcode Scanner
                </h2>

                <p className="text-sm text-slate-500 mb-6">
                  আপনার laptop camera ব্যবহার করে barcode অথবা QR code scan করুন।
                </p>

                <button
                  type="button"
                  onClick={() => setShowScanner(true)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg cursor-pointer"
                >
                  <CameraIcon className="w-5 h-5" />
                  Scan শুরু করুন
                </button>

                {scanResult && (
                  <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-left">
                    <p className="text-xs text-emerald-600 font-bold mb-1">
                      Last Scanned Code
                    </p>

                    <p className="font-mono text-sm text-emerald-950 break-all">
                      {scanResult}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* =========================
              E-CODE DETAILS
          ========================== */}
          {activeTab === "ingredients" && (
            <motion.div
              key="ingredients"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
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
                  filteredCodes.map((item) => (
                    <div
                      key={item.code}
                      className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-3"
                    >
                      <div className="flex justify-between items-start gap-3">

                        <div>
                          <span className="text-xl font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                            {item.code}
                          </span>

                          <h4 className="text-base font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                            <Info className="w-4 h-4 text-slate-400" />
                            {item.name}
                          </h4>

                          <p className="text-xs text-gray-400 mt-0.5">
                            প্রকার: {item.type}
                          </p>
                        </div>

                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-bold border whitespace-nowrap ${
                            item.status === "হারাম"
                              ? "bg-red-50 text-red-600 border-red-100"
                              : item.status === "সন্দেহজনক"
                              ? "bg-amber-50 text-amber-600 border-amber-100"
                              : "bg-green-50 text-green-600 border-green-100"
                          }`}
                        >
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

                    <p className="text-sm font-bold text-slate-600">
                      দুঃখিত, এই ই-কোডটি আমাদের ডাটাবেজে পাওয়া যায়নি।
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* =========================
          BARCODE SCANNER MODAL
      ========================== */}
      <AnimatePresence>
        {showScanner && (
          <Camera
            onClose={() => setShowScanner(false)}
            onScanSuccess={handleScanSuccess}
          />
        )}
      </AnimatePresence>

      {/* =========================
          FOOD DETAILS MODAL
      ========================== */}
      <AnimatePresence>
        {selectedFood && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFood(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 max-h-[90vh] flex flex-col"
            >

              {/* Image */}
              <div className="relative">
                {selectedFood.image ? (
                  <img
                    src={selectedFood.image}
                    alt={selectedFood.name}
                    className="w-full h-64 object-cover"
                  />
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

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                        {selectedFood.name}
                      </h3>

                      {selectedFood.vegType === "Veg" ? (
                        <img
                          src={green}
                          alt="Vegetarian"
                          className="w-8 h-8"
                        />
                      ) : (
                        <img
                          src={red}
                          alt="Non Vegetarian"
                          className="w-8 h-8"
                        />
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      🏷️ Brand: {selectedFood.brand} | 🌍 Country:{" "}
                      {selectedFood.country}
                    </p>
                  </div>

                  <div>
                    {selectedFood.halalStatus === "Halal" ? (
                      <span className="bg-green-100 text-green-800 border border-green-200 px-4 py-1.5 rounded-full text-sm font-bold block">
                        ✅ Halal
                      </span>
                    ) : selectedFood.halalStatus === "Haram" ? (
                      <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-1.5 rounded-full text-sm font-bold block">
                        ❌ Haram
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 px-4 py-1.5 rounded-full text-sm font-bold block">
                        ⚠ Needs Verification
                      </span>
                    )}
                  </div>
                </div>

                <hr className="border-gray-100" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">
                      🌿 Ingredients
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {selectedFood.ingredients || "No information"}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">
                      📊 Nutrition Info
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {selectedFood.nutrition || "No information"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-800 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-100">
                      🔢 Barcode: {selectedFood.barcode}
                    </span>
                  </div>

                  {selectedFood.reason && (
                    <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-2xl">
                      <h4 className="font-bold text-amber-800 mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        কারণ / ব্যাখ্যা:
                      </h4>

                      <p className="text-sm text-amber-900 leading-relaxed">
                        {selectedFood.reason}
                      </p>
                    </div>
                  )}

                  {selectedFood.islamicReference && (
                    <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-2xl">
                      <h4 className="font-bold text-emerald-950 mb-1">
                        📜 ইসলামিক রেফারেন্স:
                      </h4>

                      <p className="text-sm text-emerald-900 leading-relaxed italic">
                        "{selectedFood.islamicReference}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
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

