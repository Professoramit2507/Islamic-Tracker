import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  BookText,
  ChevronRight,
  FileText,
  Home,
  Loader2,
  Search,
  Sparkles,
  Library,
} from "lucide-react";
import { Link } from "react-router";

const API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1";

/* =========================================================
   COLLECTIONS
========================================================= */

const COLLECTIONS = [
  {
    id: "bukhari",
    bn: "সহিহ বুখারী",
    author: "ইমাম মুহাম্মদ ইবনে ইসমাইল বুখারী (রহ.)",
    en: "Sahih al-Bukhari",
    arabic: "ara-bukhari",
    bengali: "ben-bukhari",
    color: "from-blue-600 to-indigo-700",
    short: "B",
    count: "৭৫৬৩",
    description:
      "ইসলামের অন্যতম নির্ভরযোগ্য ও প্রসিদ্ধ হাদিস গ্রন্থ।",
  },

  {
    id: "muslim",
    bn: "সহিহ মুসলিম",
    author: "ইমাম মুসলিম (রহ.)",
    en: "Sahih Muslim",
    arabic: "ara-muslim",
    bengali: "ben-muslim",
    color: "from-cyan-600 to-blue-700",
    short: "M",
    count: "৭৪৫৩",
    description:
      "বিশুদ্ধ হাদিসের অন্যতম গুরুত্বপূর্ণ সংকলন।",
  },

  {
    id: "nasai",
    bn: "সুনান আন-নাসাঈ",
    author: "ইমাম নাসাঈ (রহ.)",
    en: "Sunan an-Nasa'i",
    arabic: "ara-nasai",
    bengali: "ben-nasai",
    color: "from-violet-600 to-purple-700",
    short: "N",
    count: "৫৭২৮",
    description:
      "হাদিসের প্রসিদ্ধ ছয়টি গ্রন্থের অন্যতম।",
  },

  {
    id: "abudawud",
    bn: "সুনান আবু দাউদ",
    author: "ইমাম আবু দাউদ (রহ.)",
    en: "Sunan Abu Dawud",
    arabic: "ara-abudawud",
    bengali: "ben-abudawud",
    color: "from-fuchsia-600 to-purple-700",
    short: "AD",
    count: "৫২৭৪",
    description:
      "বিশেষভাবে আহকাম ও আমল সম্পর্কিত হাদিসের সংকলন।",
  },

  {
    id: "tirmidhi",
    bn: "জামে আত-তিরমিজি",
    author: "ইমাম তিরমিজি (রহ.)",
    en: "Jami at-Tirmidhi",
    arabic: "ara-tirmidhi",
    bengali: "ben-tirmidhi",
    color: "from-indigo-600 to-blue-800",
    short: "T",
    count: "৩৯৫৬",
    description:
      "হাদিস, ফিকহ ও হাদিসের মান সম্পর্কে গুরুত্বপূর্ণ গ্রন্থ।",
  },

  {
    id: "ibnmajah",
    bn: "সুনান ইবনে মাজাহ",
    author: "ইমাম ইবনে মাজাহ (রহ.)",
    en: "Sunan Ibn Majah",
    arabic: "ara-ibnmajah",
    bengali: "ben-ibnmajah",
    color: "from-sky-600 to-blue-700",
    short: "IM",
    count: "৪৩৪১",
    description:
      "কুতুবে সিত্তাহর অন্তর্ভুক্ত একটি প্রসিদ্ধ হাদিস গ্রন্থ।",
  },

  {
    id: "malik",
    bn: "মুয়াত্তা ইমাম মালিক",
    author: "ইমাম মালিক (রহ.)",
    en: "Muwatta Malik",
    arabic: "ara-malik",
    bengali: "ben-malik",
    color: "from-blue-500 to-cyan-700",
    short: "MI",
    count: "১৮০২",
    description:
      "প্রাচীনতম ও গুরুত্বপূর্ণ হাদিস সংকলনগুলোর একটি।",
  },
];

/* =========================================================
   BANGLA NUMBER
========================================================= */

const toBanglaNumber = (value) => {
  if (value === undefined || value === null) return "";

  const map = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return String(value).replace(
    /\d/g,
    (digit) => map[digit]
  );
};

/* =========================================================
   HEXAGON
========================================================= */

const HexIcon = ({ children }) => {
  return (
    <div
      className="
        w-[58px]
        h-[58px]
        bg-gradient-to-br
        from-blue-500
        to-indigo-700
        flex
        items-center
        justify-center
        text-white
        font-bold
        text-[16px]
        shrink-0
        shadow-lg
      "
      style={{
        clipPath:
          "polygon(25% 6%,75% 6%,100% 25%,100% 75%,75% 94%,25% 94%,0 75%,0 25%)",
      }}
    >
      {children}
    </div>
  );
};



/* =========================================================
   MAIN
========================================================= */

const Hadith = () => {
  const [selectedCollection, setSelectedCollection] =
    useState(null);

  const [selectedSection, setSelectedSection] =
    useState(null);

  const [arabicData, setArabicData] =
    useState(null);

  const [bengaliData, setBengaliData] =
    useState(null);

  const [sections, setSections] =
    useState([]);

  const [hadiths, setHadiths] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [sectionSearch, setSectionSearch] =
    useState("");

  /* =======================================================
     FETCH
  ======================================================= */

  const getJSON = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  };

  /* =======================================================
     LOAD COLLECTION
  ======================================================= */

  const loadCollection = async (collection) => {
    setLoading(true);
    setError("");

    setSelectedCollection(collection);
    setSelectedSection(null);

    setArabicData(null);
    setBengaliData(null);

    setSections([]);
    setHadiths([]);

    setSearch("");
    setSectionSearch("");

    try {
      const [arabic, bengali] =
        await Promise.all([
          getJSON(
            `${API}/editions/${collection.arabic}.json`
          ),

          getJSON(
            `${API}/editions/${collection.bengali}.json`
          ),
        ]);

      setArabicData(arabic);
      setBengaliData(bengali);

      const metadataSections =
        arabic?.metadata?.sections ||
        arabic?.metadata?.section ||
        arabic?.sections ||
        [];

      const sectionDetails =
        arabic?.metadata?.section_detail ||
        {};

      let sectionList = [];

      /* Object format */

      if (
        metadataSections &&
        typeof metadataSections ===
        "object" &&
        !Array.isArray(metadataSections)
      ) {
        sectionList = Object.entries(
          metadataSections
        ).map(([id, title]) => ({
          id: String(id),

          title:
            typeof title === "string"
              ? title
              : title?.name ||
              title?.title ||
              `অধ্যায় ${id}`,
        }));
      }

      /* Array format */

      if (Array.isArray(metadataSections)) {
        sectionList =
          metadataSections.map(
            (section, index) => ({
              id: String(
                section.id ??
                section.number ??
                section.section ??
                index + 1
              ),

              title:
                section.name_bn ||
                section.name ||
                section.title ||
                `অধ্যায় ${index + 1}`,
            })
          );
      }

      /* Add ranges */

      sectionList =
        sectionList.map(
          (section) => {
            const detail =
              sectionDetails?.[
              section.id
              ];

            return {
              ...section,

              first:
                detail?.hadithnumber_first ??
                detail?.first ??
                null,

              last:
                detail?.hadithnumber_last ??
                detail?.last ??
                null,
            };
          }
        );

      /* Fallback */

      if (sectionList.length === 0) {
        const map = new Map();

        const allHadiths =
          arabic?.hadiths || [];

        allHadiths.forEach(
          (hadith) => {
            const sectionId =
              hadith?.reference?.book ??
              hadith?.section ??
              hadith?.book ??
              "1";

            const id =
              String(sectionId);

            if (!map.has(id)) {
              map.set(id, {
                id,
                title:
                  `অধ্যায় ${id}`,
                first: null,
                last: null,
              });
            }
          }
        );

        sectionList = [
          ...map.values(),
        ];
      }

      /* Calculate ranges */

      const allHadiths =
        arabic?.hadiths || [];

      sectionList =
        sectionList.map(
          (section) => {
            if (
              section.first &&
              section.last
            ) {
              return section;
            }

            const matching =
              allHadiths.filter(
                (hadith) => {
                  const id =
                    hadith?.reference?.book ??
                    hadith?.section ??
                    hadith?.book ??
                    "1";

                  return (
                    String(id) ===
                    String(section.id)
                  );
                }
              );

            const numbers =
              matching
                .map(
                  (item) =>
                    Number(
                      item?.hadithnumber ??
                      item?.hadithNumber ??
                      item?.number
                    )
                )
                .filter(Boolean);

            if (!numbers.length) {
              return section;
            }

            return {
              ...section,
              first: Math.min(
                ...numbers
              ),
              last: Math.max(
                ...numbers
              ),
            };
          }
        );

      setSections(sectionList);
    } catch (err) {
      console.error(err);

      setError(
        "হাদিসের তথ্য লোড করা যাচ্ছে না। ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     SELECT SECTION
  ======================================================= */

  const handleSelectSection = async (
    section
  ) => {
    setLoading(true);
    setError("");

    setSelectedSection(section);
    setSearch("");

    try {
      let arabicSection = null;

      try {
        arabicSection =
          await getJSON(
            `${API}/editions/${selectedCollection.arabic}/sections/${section.id}.json`
          );
      } catch {
        arabicSection = null;
      }

      let arabicHadiths =
        arabicSection?.hadiths || [];

      if (
        arabicHadiths.length === 0
      ) {
        const allArabic =
          arabicData?.hadiths || [];

        arabicHadiths =
          allArabic.filter(
            (hadith) => {
              const id =
                hadith?.reference?.book ??
                hadith?.section ??
                hadith?.book ??
                "1";

              return (
                String(id) ===
                String(section.id)
              );
            }
          );
      }

      const bengaliHadiths =
        bengaliData?.hadiths || [];

      const result =
        arabicHadiths.map(
          (arabicHadith) => {
            const number =
              arabicHadith?.hadithnumber ??
              arabicHadith?.hadithNumber ??
              arabicHadith?.number;

            const bengaliHadith =
              bengaliHadiths.find(
                (item) => {
                  const bnNumber =
                    item?.hadithnumber ??
                    item?.hadithNumber ??
                    item?.number;

                  return (
                    String(bnNumber) ===
                    String(number)
                  );
                }
              );

            return {
              number,

              arabic:
                arabicHadith?.text ||
                arabicHadith?.arab ||
                arabicHadith?.hadith ||
                "",

              bengali:
                bengaliHadith?.text ||
                bengaliHadith?.bn ||
                bengaliHadith?.hadith ||
                "",
            };
          }
        );

      setHadiths(result);
    } catch (err) {
      console.error(err);

      setError(
        "এই অধ্যায়ের হাদিস লোড করতে সমস্যা হয়েছে।"
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     SEARCH SECTIONS
  ======================================================= */

  const visibleSections =
    useMemo(() => {
      if (!sectionSearch.trim()) {
        return sections;
      }

      const q =
        sectionSearch
          .toLowerCase()
          .trim();

      return sections.filter(
        (section) =>
          String(section.id)
            .includes(q) ||
          String(
            section.title || ""
          )
            .toLowerCase()
            .includes(q)
      );
    }, [
      sections,
      sectionSearch,
    ]);

  /* =======================================================
     SEARCH HADITH
  ======================================================= */

  const visibleHadiths =
    useMemo(() => {
      if (!search.trim()) {
        return hadiths;
      }

      const q =
        search
          .toLowerCase()
          .trim();

      return hadiths.filter(
        (hadith) =>
          String(hadith.number)
            .includes(q) ||
          String(
            hadith.bengali || ""
          )
            .toLowerCase()
            .includes(q) ||
          String(
            hadith.arabic || ""
          ).includes(q)
      );
    }, [
      hadiths,
      search,
    ]);

  /* =======================================================
     BACK
  ======================================================= */

  const handleBack = () => {
    setError("");
    setSearch("");
    setSectionSearch("");

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
      setHadiths([]);
    }
  };

  /* =======================================================
     HEADER
  ======================================================= */

  const Header = () => {
    if (!selectedCollection) {
      return (
        <>
          {/* =====================================================
    SPIRITUAL HEADER
===================================================== */}

          <header className="relative">

            {/* Main Header */}

            <div
              className="
      relative
      overflow-hidden
      bg-linear-to-b
      from-[#100626]
      via-[#3d096b]
      to-[#171832]
      text-white
      rounded-b-[48px]
      shadow-[0_12px_30px_rgba(20,10,50,0.20)]
      px-5
      pt-8
      pb-24
    "
            >

              {/* Glow */}

              <div
                className="
        absolute
        -top-24
        left-1/2
        -translate-x-1/2
        w-[420px]
        h-[220px]
        bg-purple-600/20
        blur-[80px]
        rounded-full
      "
              />

              <div className="relative max-w-5xl mx-auto text-center">

                {/* Small heading */}

                <p
                  className="
          text-[13px]
          md:text-[14px]
          font-bold
          tracking-widest
          text-white/65
          uppercase
        "
                >
                  SPIRITUAL GUIDE
                </p>


                {/* Badge */}

                <div
                  className="
          inline-flex
          items-center
          gap-1.5
          mt-7
          px-4
          py-1.5
          rounded-full
          bg-purple-700/30
          border
          border-purple-400/20
          text-purple-100
          text-[11px]
          md:text-[12px]
        "
                >

                  <span className="text-[13px]">
                    ♡
                  </span>

                  <span>
                    আত্মশুদ্ধি ও আমল
                  </span>

                </div>


                {/* Main title */}

                <h1
                  className="
          mt-3
          text-[34px]
          sm:text-[40px]
          md:text-[52px]
          leading-tight
          font-bold
          font-serif
          text-white
        "
                >
                  হাদিস শরীফ
                </h1>


                {/* Subtitle */}

                <p
                  className="
          mt-2
          text-[12px]
          sm:text-[13px]
          md:text-[15px]
          text-purple-100/70
          font-serif
        "
                >
                  রাসুলুল্লাহ ﷺ এর বাণী ও সুন্নাহ
                </p>

              </div>

            </div>


            {/* =================================================
      FLOATING NAV
  ================================================== */}

            <div
              className="
      absolute
      left-1/2
      bottom-[-32px]
      -translate-x-1/2
      z-20
      w-[92%]
      max-w-140
    "
            >

            </div>

          </header>

        </>

      );
    }

    return (
      <header
        className="
          bg-linear-to-br
          from-[#071A3D]
          via-[#102B68]
          to-[#174EA6]
          text-white
          px-5
          pt-5
          pb-7
          rounded-b-[28px]
          shadow-lg
        "
      >
        <div
          className="
            max-w-180
            mx-auto
            flex
            items-center
            gap-4
          "
        >
          <button
            onClick={handleBack}
            className="
              w-9
              h-9
              rounded-xl
              bg-white/10
              flex
              items-center
              justify-center
            "
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-widest
                text-blue-200
              "
            >
              HADITH COLLECTION
            </p>

            <h1
              className="
                text-[19px]
                font-bold
                font-serif
                mt-0.5
              "
            >
              {selectedCollection.bn}
            </h1>

            <p
              className="
                text-[11px]
                text-blue-100
              "
            >
              {selectedCollection.author}
            </p>

            <p
              className="
                text-[10px]
                text-blue-200
                mt-0.5
              "
            >
              {selectedCollection.count} হাদিস
            </p>
          </div>
        </div>
      </header>
    );
  };

  /* =======================================================
     COLLECTIONS
  ======================================================= */

const Collections = () => {
  return (
    <div className="px-4 pt-5">

      <div className="px-1 mb-4">
        <p className="text-[11px] font-semibold text-blue-700">
          হাদিসের গ্রন্থসমূহ
        </p>

        <h2 className="text-[16px] font-bold text-slate-800 mt-0.5">
          একটি গ্রন্থ নির্বাচন করুন
        </h2>

        <p className="text-[11px] text-slate-500 mt-1">
          কুতুবে সিত্তাহ ও অন্যান্য প্রসিদ্ধ হাদিস গ্রন্থ
        </p>
      </div>

      {/* 3 Cards Per Row */}
      <div className="grid grid-cols-3 gap-3">

        {COLLECTIONS.map((collection) => (
          <button
            key={collection.id}
            onClick={() => loadCollection(collection)}
            className="
              w-full
              bg-white
              rounded-2xl
              p-3
              text-left
              border
              border-slate-100
              shadow-[0_3px_12px_rgba(15,23,42,0.05)]
              hover:shadow-md
              active:scale-[0.97]
              transition
            "
          >

            <div
              className={`
                w-11
                h-11
                rounded-xl
                bg-linear-to-br
                ${collection.color}
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-[14px]
                shadow-md
              `}
            >
              {collection.short}
            </div>

            <h3
              className="
                text-[16px]
                font-bold
                font-serif
                text-slate-800
                mt-3
                leading-5
              "
            >
              {collection.bn}
            </h3>

            <p
              className="
                text-[12px]
                text-slate-500
                mt-1
                leading-4
                line-clamp-2
              "
            >
              {collection.author}
            </p>

            <div
              className="
                flex
                items-center
                justify-between
                mt-3
                pt-2
                border-t
                border-slate-100
              "
            >
              <div>
                <span className="text-[12px] font-bold text-blue-700">
                  {collection.count}
                </span>

                <span className="text-[7px] text-slate-400 ml-1">
                  হাদিস
                </span>
              </div>

              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>

          </button>
        ))}

      </div>
    </div>
  );
};



  /* =======================================================
     SECTIONS
  ======================================================= */

  const Sections = () => {
    return (
      <div className="px-4 pt-5">

        <div
          className="
            bg-white
            rounded-2xl
            p-4
            mb-4
            border
            border-slate-100
            shadow-sm
          "
        >

          <p
            className="
              text-[10px]
              text-blue-600
              font-semibold
            "
          >
            {selectedCollection.en}
          </p>

          <h2
            className="
              text-[16px]
              font-bold
              text-slate-800
              mt-1
            "
          >
            অধ্যায়সমূহ
          </h2>

          <p
            className="
              text-[11px]
              text-slate-500
              mt-1
            "
          >
            যে অধ্যায়টি পড়তে চান সেটি নির্বাচন করুন
          </p>

        </div>

        {/* Search */}

        <div className="relative mb-4">

          <input
            value={sectionSearch}
            onChange={(e) =>
              setSectionSearch(
                e.target.value
              )
            }
            placeholder="অধ্যায় খুঁজুন..."
            className="
              w-full
              bg-white
              rounded-2xl
              px-4
              py-3
              pr-11
              text-[12px]
              outline-none
              border
              border-slate-200
              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-100
            "
          />

          <Search
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-4
              h-4
              text-slate-400
            "
          />

        </div>

        <div className="space-y-3">

          {visibleSections.map(
            (section) => (
              <button
                key={section.id}
                onClick={() =>
                  handleSelectSection(
                    section
                  )
                }
                className="
                  w-full
                  bg-white
                  rounded-[17px]
                  p-4
                  flex
                  items-center
                  gap-4
                  text-left
                  border
                  border-slate-100
                  shadow-sm
                  active:scale-[0.99]
                  transition
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-700
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-[14px]
                    shrink-0
                    shadow-md
                  "
                >
                  {toBanglaNumber(
                    section.id
                  )}
                </div>

                <div className="flex-1">

                  <h3
                    className="
                      text-[14px]
                      font-bold
                      font-serif
                      text-slate-800
                    "
                  >
                    {section.title}
                  </h3>

                  {section.first &&
                    section.last ? (
                    <p
                      className="
                        text-[10px]
                        text-slate-500
                        mt-1
                      "
                    >
                      হাদিসের রেঞ্জ:{" "}
                      {toBanglaNumber(
                        section.first
                      )}{" "}
                      -{" "}
                      {toBanglaNumber(
                        section.last
                      )}
                    </p>
                  ) : (
                    <p
                      className="
                        text-[10px]
                        text-slate-400
                        mt-1
                      "
                    >
                      এই অধ্যায়ের হাদিসসমূহ
                    </p>
                  )}

                </div>

                <ChevronRight
                  className="
                    w-4
                    h-4
                    text-slate-300
                  "
                />

              </button>
            )
          )}

        </div>

      </div>
    );
  };

  /* =======================================================
     HADITH
  ======================================================= */

  const HadithList = () => {
    return (
      <div className="px-4 pt-5 space-y-4">

        {/* Chapter info */}

        <div
          className="
            bg-gradient-to-br
            from-[#071A3D]
            to-[#174EA6]
            rounded-2xl
            p-4
            text-white
            shadow-lg
          "
        >

          <p
            className="
              text-[9px]
              text-blue-200
              uppercase
              tracking-widest
            "
          >
            CHAPTER
          </p>

          <h2
            className="
              text-[16px]
              font-bold
              font-serif
              mt-1
            "
          >
            {selectedSection.title}
          </h2>

          <p
            className="
              text-[10px]
              text-blue-100
              mt-1
            "
          >
            এই অধ্যায়ের হাদিসসমূহ
          </p>

        </div>

        {/* Search */}

        <div className="relative">

          <input
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="হাদিস নম্বর বা বাংলা লেখা খুঁজুন..."
            className="
              w-full
              bg-white
              rounded-2xl
              px-4
              py-3
              pr-11
              text-[12px]
              outline-none
              border
              border-slate-200
              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-100
            "
          />

          <Search
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-4
              h-4
              text-slate-400
            "
          />

        </div>

        {/* Count */}

        <div
          className="
            flex
            items-center
            justify-between
            px-1
          "
        >

          <p
            className="
              text-[10px]
              text-slate-500
            "
          >
            মোট{" "}
            {toBanglaNumber(
              visibleHadiths.length
            )}{" "}
            টি হাদিস
          </p>

          <p
            className="
              text-[10px]
              text-blue-600
              font-semibold
            "
          >
            {selectedCollection.bn}
          </p>

        </div>

        {/* Hadith cards */}

        {visibleHadiths.map(
          (hadith, index) => (
            <article
              key={`${hadith.number}-${index}`}
              className="
                bg-white
                rounded-[18px]
                p-5
                border
                border-slate-100
                shadow-[0_3px_12px_rgba(15,23,42,0.04)]
              "
            >

              {/* Top */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-3
                  border-b
                  border-slate-100
                "
              >

                <span
                  className="
                    bg-blue-50
                    text-blue-700
                    px-3
                    py-1.5
                    rounded-lg
                    text-[10px]
                    font-bold
                  "
                >
                  হাদিস{" "}
                  {toBanglaNumber(
                    hadith.number
                  )}
                </span>

                <span
                  className="
                    text-[9px]
                    text-slate-400
                  "
                >
                  {selectedCollection.bn}
                </span>

              </div>

              {/* Arabic */}

              {hadith.arabic && (
                <div className="pt-5">

                  <p
                    className="
                      text-[10px]
                      text-blue-600
                      font-semibold
                      mb-3
                    "
                  >
                    আরবি
                  </p>

                  <p
                    dir="rtl"
                    lang="ar"
                    className="
                      text-right
                      text-[19px]
                      leading-[2]
                      font-serif
                      text-slate-800
                    "
                  >
                    {hadith.arabic}
                  </p>

                </div>
              )}

              {/* Divider */}

              {hadith.arabic &&
                hadith.bengali && (
                  <div
                    className="
                      h-px
                      bg-slate-100
                      my-5
                    "
                  />
                )}

              {/* Bengali */}

              {hadith.bengali && (
                <div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mb-2
                    "
                  >

                    <div
                      className="
                        w-1
                        h-4
                        rounded-full
                        bg-blue-600
                      "
                    />

                    <h4
                      className="
                        text-[11px]
                        font-bold
                        text-slate-700
                      "
                    >
                      বাংলা অনুবাদ
                    </h4>

                  </div>

                  <p
                    lang="bn"
                    className="
                      text-[13px]
                      leading-[1.9]
                      text-slate-700
                      font-serif
                    "
                  >
                    {hadith.bengali}
                  </p>

                </div>
              )}

              {/* Footer */}

              <div
                className="
                  mt-5
                  pt-3
                  border-t
                  border-slate-100
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[9px]
                    text-slate-400
                  "
                >
                  উৎস: {selectedCollection.en}
                </span>

                <button
                  className="
                    w-7
                    h-7
                    rounded-lg
                    bg-slate-50
                    flex
                    items-center
                    justify-center
                    text-slate-400
                  "
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>

              </div>

            </article>
          )
        )}

        {/* Empty */}

        {visibleHadiths.length === 0 &&
          !loading && (
            <div
              className="
                bg-white
                rounded-2xl
                p-10
                text-center
                border
                border-slate-100
              "
            >

              <BookText
                className="
                  w-9
                  h-9
                  text-blue-600
                  mx-auto
                "
              />

              <h3
                className="
                  text-sm
                  font-bold
                  mt-3
                "
              >
                কোনো হাদিস পাওয়া যায়নি
              </h3>

              <p
                className="
                  text-[10px]
                  text-slate-400
                  mt-2
                "
              >
                অন্য নম্বর অথবা search term
                দিয়ে চেষ্টা করুন।
              </p>

            </div>
          )}

      </div>
    );
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div
      className="
        min-h-screen
        bg-[#f6f8fc]
        text-slate-700
        pb-24
      "
    >

      <Header />

      <main
        className="
          max-w-[720px]
          mx-auto
        "
      >

        {/* Loading */}

        {loading && (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-24
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
              "
            >
              <Loader2
                className="
                  w-6
                  h-6
                  text-blue-600
                  animate-spin
                "
              />
            </div>

            <p
              className="
                mt-3
                text-[11px]
                text-slate-500
              "
            >
             হাদিস লোড হচ্ছে...
            </p>

          </div>
        )}

        {/* Error */}

        {error && !loading && (
          <div
            className="
              mx-4
              mt-5
              bg-red-50
              border
              border-red-200
              text-red-600
              p-4
              rounded-2xl
              text-[11px]
              text-center
            "
          >
            {error}
          </div>
        )}

        {/* Collections */}

        {!loading &&
          !selectedCollection &&
          <Collections />}

        {/* Sections */}

        {!loading &&
          selectedCollection &&
          !selectedSection &&
          <Sections />}

        {/* Hadith */}

        {!loading &&
          selectedCollection &&
          selectedSection &&
          <HadithList />}

      </main>


    </div>
  );
};

export default Hadith;
