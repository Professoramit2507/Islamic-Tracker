import React, { useEffect, useMemo, useState } from "react";
import {
  BookText,
  Sparkles,
  ArrowLeft,
  Loader2,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router";

const API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1";

const COLLECTIONS = [
  {
    id: "bukhari",
    bn: "সহিহ বুখারি",
    en: "Sahih al-Bukhari",
    arabic: "ara-bukhari",
    bengali: "ben-bukhari",
  },
  {
    id: "muslim",
    bn: "সহিহ মুসলিম",
    en: "Sahih Muslim",
    arabic: "ara-muslim",
    bengali: "ben-muslim",
  },
  {
    id: "abudawud",
    bn: "সুনান আবু দাউদ",
    en: "Sunan Abu Dawud",
    arabic: "ara-abudawud",
    bengali: "ben-abudawud",
  },
  {
    id: "tirmidhi",
    bn: "জামে আত-তিরমিজি",
    en: "Jami at-Tirmidhi",
    arabic: "ara-tirmidhi",
    bengali: "ben-tirmidhi",
  },
  {
    id: "nasai",
    bn: "সুনান আন-নাসাঈ",
    en: "Sunan an-Nasa'i",
    arabic: "ara-nasai",
    bengali: "ben-nasai",
  },
  {
    id: "ibnmajah",
    bn: "সুনান ইবন মাজাহ",
    en: "Sunan Ibn Majah",
    arabic: "ara-ibnmajah",
    bengali: "ben-ibnmajah",
  },
  {
    id: "malik",
    bn: "মুয়াত্তা ইমাম মালিক",
    en: "Muwatta Malik",
    arabic: "ara-malik",
    bengali: "ben-malik",
  },
];

const Hadith = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const [arabicData, setArabicData] = useState(null);
  const [bengaliData, setBengaliData] = useState(null);

  const [sections, setSections] = useState([]);
  const [hadiths, setHadiths] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  // ---------------------------------------------------------
  // Generic fetch
  // ---------------------------------------------------------
  const getJSON = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return res.json();
  };

  // ---------------------------------------------------------
  // Load sections + hadith data
  // ---------------------------------------------------------
  const loadCollection = async (collection) => {
    setLoading(true);
    setError("");

    setSelectedCollection(collection);
    setSelectedSection(null);

    setSections([]);
    setHadiths([]);

    try {
      /*
       * Arabic edition
       */
      const arabic = await getJSON(
        `${API}/editions/${collection.arabic}.json`
      );

      /*
       * Bengali edition
       */
      const bengali = await getJSON(
        `${API}/editions/${collection.bengali}.json`
      );

      setArabicData(arabic);
      setBengaliData(bengali);

      /*
       * Section list
       *
       * API-তে section metadata সাধারণত edition JSON-এর
       * metadata.sections-এর মধ্যে থাকে।
       *
       * fallback হিসেবে hadith-এর section number ব্যবহার করা হচ্ছে।
       */
      const sectionMap = new Map();

      const arabicHadiths = arabic.hadiths || [];

      arabicHadiths.forEach((hadith) => {
        const sectionId =
          hadith.reference?.book ??
          hadith.section ??
          hadith.book ??
          "1";

        if (!sectionMap.has(String(sectionId))) {
          sectionMap.set(String(sectionId), {
            id: String(sectionId),
            title: `অধ্যায় ${sectionId}`,
          });
        }
      });

      /*
       * যদি API metadata-তে sections থাকে
       */
      const metadataSections =
        arabic.metadata?.sections ||
        arabic.sections ||
        [];

      if (Array.isArray(metadataSections)) {
        metadataSections.forEach((section, index) => {
          const id = String(
            section.id ??
              section.number ??
              section.section ??
              index + 1
          );

          sectionMap.set(id, {
            id,
            title:
              section.name ||
              section.title ||
              `অধ্যায় ${id}`,
          });
        });
      }

      setSections([...sectionMap.values()]);
    } catch (err) {
      console.error(err);

      setError(
        "হাদিসের তথ্য লোড করতে সমস্যা হচ্ছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // Select section
  // ---------------------------------------------------------
  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setSearch("");

    const arabicHadiths = arabicData?.hadiths || [];
    const bengaliHadiths = bengaliData?.hadiths || [];

    /*
     * একই hadith number দিয়ে Arabic + Bengali match করা হচ্ছে।
     */
    const filteredArabic = arabicHadiths.filter((hadith) => {
      const sectionId =
        hadith.reference?.book ??
        hadith.section ??
        hadith.book ??
        "1";

      return String(sectionId) === String(section.id);
    });

    const filtered = filteredArabic.map((arabicHadith) => {
      const number =
        arabicHadith.hadithnumber ??
        arabicHadith.hadithNumber ??
        arabicHadith.number;

      const bengaliHadith = bengaliHadiths.find((item) => {
        const bnNumber =
          item.hadithnumber ??
          item.hadithNumber ??
          item.number;

        return String(bnNumber) === String(number);
      });

      return {
        number,
        arabic:
          arabicHadith.text ||
          arabicHadith.arab ||
          arabicHadith.hadith ||
          "",

        bengali:
          bengaliHadith?.text ||
          bengaliHadith?.bn ||
          bengaliHadith?.hadith ||
          "",
      };
    });

    setHadiths(filtered);
  };

  // ---------------------------------------------------------
  // Search
  // ---------------------------------------------------------
  const visibleHadiths = useMemo(() => {
    if (!search.trim()) return hadiths;

    const q = search.toLowerCase();

    return hadiths.filter((hadith) =>
      String(hadith.number).includes(q) ||
      hadith.bengali.toLowerCase().includes(q)
    );
  }, [hadiths, search]);

  // ---------------------------------------------------------
  // Back
  // ---------------------------------------------------------
  const handleBack = () => {
    setError("");
    setSearch("");

    if (selectedSection) {
      setSelectedSection(null);
      setHadiths([]);
      return;
    }

    if (selectedCollection) {
      setSelectedCollection(null);
      setArabicData(null);
      setBengaliData(null);
      setSections([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 font-sans pb-16">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white pt-6 pb-20 px-6 rounded-b-[2.5rem] shadow-lg">

        <div className="max-w-4xl mx-auto flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-xs transition-all text-indigo-100"
          >
            <ArrowLeft className="w-4 h-4" />
            হোম পেজ
          </Link>

          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
            Hadith Collection
          </span>

        </div>

        <div className="max-w-2xl mx-auto text-center mt-6 space-y-2">

          <div className="inline-flex items-center gap-1 bg-indigo-950/60 border border-indigo-800/30 px-3.5 py-1 rounded-full text-[11px] font-medium text-indigo-200">

            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />

            বাংলা হাদিস ভাণ্ডার

          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-indigo-50">
            রাসুলুল্লাহ (সা.) এর বাণী
          </h1>

          <p className="text-indigo-200/70 text-xs md:text-sm">
            অনলাইন হাদিস গ্রন্থ থেকে সরাসরি বাংলা অনুবাদসহ অধ্যয়ন করুন
          </p>

        </div>
      </div>

      {/* =====================================================
          BACK
      ====================================================== */}
      {selectedCollection && (
        <div className="max-w-4xl mx-auto px-6 mt-6">

          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-xs font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all text-indigo-950"
          >
            <ArrowLeft className="w-4 h-4" />
            আগের ধাপে ফিরে যান
          </button>

        </div>
      )}

      {/* =====================================================
          MAIN
      ====================================================== */}
      <main className="max-w-4xl mx-auto px-6 mt-6">

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">

            <Loader2 className="w-8 h-8 text-indigo-900 animate-spin" />

            <p className="text-xs text-slate-500">
              অনলাইন থেকে হাদিস লোড হচ্ছে...
            </p>

          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center text-sm mb-5">
            {error}
          </div>
        )}

        {/* =====================================================
            COLLECTIONS
        ====================================================== */}
        {!loading && !selectedCollection && (

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {COLLECTIONS.map((collection) => (

              <button
                key={collection.id}
                onClick={() => loadCollection(collection)}
                className="bg-white p-5 rounded-2xl border border-indigo-950/5 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group text-left"
              >

                <div className="flex items-center gap-4">

                  <div className="p-3 bg-indigo-50 text-indigo-950 rounded-xl group-hover:bg-indigo-900 group-hover:text-white transition-all">

                    <BookText className="w-6 h-6" />

                  </div>

                  <div>

                    <h3 className="text-base font-bold font-serif text-slate-800">
                      {collection.bn}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {collection.en}
                    </p>

                  </div>

                </div>

                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-900" />

              </button>

            ))}

          </div>
        )}

        {/* =====================================================
            SECTIONS
        ====================================================== */}
        {!loading &&
          selectedCollection &&
          !selectedSection && (

            <div className="space-y-4">

              <div className="bg-indigo-900 text-white p-4 rounded-2xl shadow-sm">

                <h2 className="text-lg font-bold font-serif">
                  {selectedCollection.bn}
                </h2>

                <p className="text-xs text-indigo-200">
                  একটি অধ্যায় নির্বাচন করুন
                </p>

              </div>

              <div className="grid grid-cols-1 gap-3">

                {sections.map((section) => (

                  <button
                    key={section.id}
                    onClick={() =>
                      handleSelectSection(section)
                    }
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between text-left"
                  >

                    <div className="flex items-center gap-3">

                      <span className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-950 font-bold text-xs flex items-center justify-center shrink-0">
                        {section.id}
                      </span>

                      <h4 className="text-sm font-bold text-slate-800">
                        {section.title}
                      </h4>

                    </div>

                    <ChevronRight className="w-5 h-5 text-slate-300" />

                  </button>

                ))}

              </div>

            </div>
          )}

        {/* =====================================================
            HADITH LIST
        ====================================================== */}
        {!loading &&
          selectedSection && (

            <div className="space-y-6">

              {/* Header */}
              <div className="bg-indigo-900 text-white p-4 rounded-2xl shadow-sm">

                <h2 className="text-lg font-bold font-serif">
                  {selectedCollection.bn}
                </h2>

                <p className="text-xs text-indigo-200">
                  {selectedSection.title}
                </p>

              </div>

              {/* Search */}
              <div className="relative">

                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="হাদিস নম্বর বা বাংলা লেখা খুঁজুন..."
                  className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

              {/* Count */}
              <p className="text-xs text-slate-500">
                মোট {visibleHadiths.length} টি হাদিস
              </p>

              {/* Hadith */}
              {visibleHadiths.map((hadith, index) => (

                <article
                  key={`${hadith.number}-${index}`}
                  className="bg-white p-6 rounded-2xl border border-indigo-950/5 shadow-sm space-y-5"
                >

                  {/* Number */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">

                    <span className="px-3 py-1 bg-indigo-50 text-indigo-950 font-bold text-xs rounded-lg">
                      হাদিস নম্বর: {hadith.number}
                    </span>

                  </div>

                  {/* Arabic */}
                  {hadith.arabic && (
                    <div>

                      <p
                        dir="rtl"
                        lang="ar"
                        className="text-right text-xl md:text-2xl font-serif font-bold text-indigo-950 leading-[2.3]"
                      >
                        {hadith.arabic}
                      </p>

                    </div>
                  )}

                  {/* Bengali */}
                  {hadith.bengali && (
                    <div>

                      <h4 className="text-xs md:text-sm font-bold text-slate-700 mb-2">
                        বাংলা অনুবাদ
                      </h4>

                      <p
                        lang="bn"
                        className="text-sm md:text-base text-slate-700 leading-loose"
                      >
                        {hadith.bengali}
                      </p>

                    </div>
                  )}

                </article>

              ))}

              {/* Empty */}
              {visibleHadiths.length === 0 && (
                <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center">

                  <BookText className="w-10 h-10 text-indigo-900 mx-auto mb-3" />

                  <h3 className="font-bold text-slate-800">
                    কোনো হাদিস পাওয়া যায়নি
                  </h3>

                  <p className="text-xs text-slate-500 mt-2">
                    অন্য অধ্যায় অথবা অন্য search term চেষ্টা করুন।
                  </p>

                </div>
              )}

            </div>
          )}

      </main>
    </div>
  );
};

export default Hadith;
