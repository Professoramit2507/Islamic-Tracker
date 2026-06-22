import React, { useState, useEffect } from "react";
import { Search, BookOpen, Sparkles, ArrowLeft, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const ReadQuran = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSurahs, setLoadingSurahs] = useState(true);

  // ১. এপিআই থেকে ১১৪টি সূরার লিস্ট নিয়ে আসা
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) setSurahs(data.data);
        setLoadingSurahs(false);
      })
      .catch((err) => {
        console.error("Error fetching surahs:", err);
        setLoadingSurahs(false);
      });
  }, []);

  // ২. নির্দিষ্ট সূরার আয়াতসমূহ লোড করা (আরবি এবং বাংলা অনুবাদ একসাথে)
  const handleSurahClick = async (surahNumber) => {
    setLoading(true);
    try {
      // আরবি টেক্সট এবং বাংলা অনুবাদের জন্য দুটি আলাদা এপিআই কল একসাথে করা হচ্ছে
      const [arabicRes, banglaRes] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`),
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/bn.bengali`),
      ]);

      const arabicData = await arabicRes.json();
      const banglaData = await banglaRes.json();

      if (arabicData.code === 200 && banglaData.code === 200) {
        // আরবি এবং বাংলা আয়াত কম্বাইন করা
        const combinedAyahs = arabicData.data.ayahs.map((ayah, index) => ({
          number: ayah.numberInSurah,
          arabic: ayah.text,
          bangla: banglaData.data.ayahs[index].text,
        }));

        setSelectedSurah(arabicData.data);
        setAyahs(combinedAyahs);
      }
    } catch (error) {
      console.error("Error fetching ayahs:", error);
    } finally {
      setLoading(false);
    }
  };

  // সার্চ ফিল্টারিং লজিক
  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.englishNameTranslation
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      surah.number.toString() === searchTerm,
  );

  return (
    <div className="w-full bg-white rounded-3xl border border-purple-950/5 shadow-md p-5 sm:p-6 text-left min-h-125">
      <AnimatePresence mode="wait">
        {/* ভিউ ১: সূরার সূচীপত্র (লিস্ট ভিউ) */}
        {!selectedSurah ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <Link to="/quran-spiritual">
                 <span className="inline-flex items-center gap-1 bg-green-400 border border-purple-900/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-purple-950 tracking-wide">
                 Back</span>
                </Link>
               
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 bg-purple-950/5 border border-purple-900/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-purple-950 tracking-wide">
                  <Sparkles className="w-3 h-3 text-purple-600" /> পবিত্র
                  আল-কুরআন
                </div>
                <h3 className="text-lg font-serif font-black text-slate-800 tracking-tight">
                  সূরা সূচীপত্র
                </h3>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="সূরার নাম বা নম্বর দিয়ে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 rounded-xl text-xs font-medium outline-hidden transition-all bg-slate-50/50"
                />
              </div>
            </div>

            {loadingSurahs ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
                <span className="text-xs font-medium">সূরা লোড হচ্ছে...</span>
              </div>
            ) : (
              <div className="max-h-100 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-3 scrollbar-thin scrollbar-thumb-purple-100--------------">
                {filteredSurahs.map((surah) => (
                  <button
                    key={surah.number}
                    onClick={() => handleSurahClick(surah.number)}
                    className="w-full p-3.5 bg-slate-50/60 hover:bg-purple-50/30 rounded-xl border border-slate-100 hover:border-purple-200 transition-all flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-950 font-mono font-bold text-xs flex items-center justify-center border border-purple-100/60 shrink-0">
                        {surah.number}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-black text-slate-800 font-serif">
                          {surah.englishName}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-medium">
                          অর্থ:{" "}
                          <span className="text-slate-500 italic">
                            {surah.englishNameTranslation}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-lg font-serif font-bold text-purple-950">
                        {surah.name}
                      </span>
                      <span className="block text-[9px] font-mono font-bold text-slate-400">
                        {surah.numberOfAyahs} Ayahs
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          /* ভিউ ২: সূরার ভেতরের আয়াত ভিউ (রিডিং মোড) */
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* ব্যাক বাটন ও সূরার নাম */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <button
                onClick={() => {
                  setSelectedSurah(null);
                  setAyahs([]);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-purple-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> ফিরে যান
              </button>

              <div className="text-right">
                <h3 className="text-base font-black text-purple-950 font-serif">
                  {selectedSurah.englishName} ({selectedSurah.name})
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  {selectedSurah.englishNameTranslation} •{" "}
                  {selectedSurah.revelationType === "Meccan"
                    ? "মাক্কী"
                    : "মাদানী"}
                </p>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
                <span className="text-xs font-medium">
                  আয়াতসমূহ লোড হচ্ছে...
                </span>
              </div>
            ) : (
              /* আয়াত স্ক্রোল এরিয়া */
              <div className="max-h-112.5 overflow-y-auto pr-2 space-y-6 scrollbar-thin">
                {/* বিসমিল্লাহ (সূরা তওবা বাদে সব সূরার শুরুতে দেখাবে) */}
                {selectedSurah.number !== 9 && (
                  <div className="text-center py-4 text-xl font-serif font-bold text-purple-950 border-b border-purple-50 bg-slate-50/40 rounded-xl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </div>
                )}

                {/* আয়াত লিস্ট */}
                {ayahs.map((ayah) => (
                  <div
                    key={ayah.number}
                    className="p-4 rounded-xl border border-slate-50 hover:border-purple-100/70 hover:bg-slate-50/30 transition-all space-y-3"
                  >
                    {/* আয়াত নম্বর এবং মূল আরবি টেক্সট */}
                    <div className="flex flex-row-reverse items-start gap-4 justify-between">
                      <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-900 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 border border-purple-100 mt-1">
                        {ayah.number}
                      </div>
                      <p className="text-right text-xl font-serif font-bold text-slate-800 leading-relaxed tracking-wide select-none">
                        {/* যদি প্রথম আয়াত হয় এবং সূরা ফাতিহা বাদে অন্য সূরা হয়, তবে শুরুর বিসমিল্লাহ টেক্সটটুকু ট্রিম বা বাদ দেওয়া হয়েছে যাতে ডাবল না দেখায় */}
                        {selectedSurah.number !== 1 &&
                        selectedSurah.number !== 9 &&
                        ayah.number === 1
                          ? ayah.arabic
                              .replace(
                                "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                                "",
                              )
                              .trim()
                          : ayah.arabic}
                      </p>
                    </div>

                    {/* বাংলা অনুবাদ */}
                    <div className="pt-2 border-t border-dashed border-slate-100">
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        <span className="text-purple-900/60 font-bold mr-1">
                          [{ayah.number}]
                        </span>{" "}
                        {ayah.bangla}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReadQuran;
