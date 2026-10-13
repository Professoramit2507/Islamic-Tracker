import React, { useMemo, useState } from "react";
import { API, COLLECTIONS } from "../Constans/hadithData";
import { getJSON } from "../utils/helpers";
import { useBengaliTTS } from "../hooks/useBengaliTTS";
import { Header } from "../Components/Header";
import { CollectionList } from "../Components/CollectionList";
import { SectionList } from "../Components/SectionList";
import { HadithList } from "../Components/HadithList";
import { LoadingSpinner } from "../Components/LoadingSpinner";
import { ErrorMessage } from "../Components/ErrorMessage";

const HadithDemo = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [arabicData, setArabicData] = useState(null);
  const [bengaliData, setBengaliData] = useState(null);
  const [sections, setSections] = useState([]);
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sectionSearch, setSectionSearch] = useState("");

  // কাস্টম অডিও হুক
  const { playingHadithId, handleSpeakBengali, stopAudio } = useBengaliTTS(
    selectedSection || selectedCollection
  );

  /* LOAD COLLECTION */
  const loadCollection = async (collection) => {
    stopAudio();
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
      const [arabic, bengali] = await Promise.all([
        getJSON(`${API}/editions/${collection.arabic}.json`),
        getJSON(`${API}/editions/${collection.bengali}.json`),
      ]);

      setArabicData(arabic);
      setBengaliData(bengali);

      const metadataSections =
        arabic?.metadata?.sections ||
        arabic?.metadata?.section ||
        arabic?.sections ||
        [];

      const sectionDetails = arabic?.metadata?.section_detail || {};
      let sectionList = [];

      if (metadataSections && typeof metadataSections === "object" && !Array.isArray(metadataSections)) {
        sectionList = Object.entries(metadataSections).map(([id, title]) => ({
          id: String(id),
          title: typeof title === "string" ? title : title?.name || title?.title || `অধ্যায় ${id}`,
        }));
      } else if (Array.isArray(metadataSections)) {
        sectionList = metadataSections.map((section, index) => ({
          id: String(section.id ?? section.number ?? section.section ?? index + 1),
          title: section.name_bn || section.name || section.title || `অধ্যায় ${index + 1}`,
        }));
      }

      sectionList = sectionList.map((section) => {
        const detail = sectionDetails?.[section.id];
        return {
          ...section,
          first: detail?.hadithnumber_first ?? detail?.first ?? null,
          last: detail?.hadithnumber_last ?? detail?.last ?? null,
        };
      });

      if (sectionList.length === 0) {
        const map = new Map();
        const allHadiths = arabic?.hadiths || [];
        allHadiths.forEach((hadith) => {
          const sectionId = hadith?.reference?.book ?? hadith?.section ?? hadith?.book ?? "1";
          const id = String(sectionId);
          if (!map.has(id)) {
            map.set(id, { id, title: `অধ্যায় ${id}`, first: null, last: null });
          }
        });
        sectionList = [...map.values()];
      }

      const allHadiths = arabic?.hadiths || [];
      sectionList = sectionList.map((section) => {
        if (section.first && section.last) return section;
        const matching = allHadiths.filter((hadith) => {
          const id = hadith?.reference?.book ?? hadith?.section ?? hadith?.book ?? "1";
          return String(id) === String(section.id);
        });
        const numbers = matching
          .map((item) => Number(item?.hadithnumber ?? item?.hadithNumber ?? item?.number))
          .filter(Boolean);

        if (!numbers.length) return section;
        return {
          ...section,
          first: Math.min(...numbers),
          last: Math.max(...numbers),
        };
      });

      setSections(sectionList);
    } catch (err) {
      console.error(err);
      setError("হাদিসের তথ্য লোড করা যাচ্ছে না।");
    } finally {
      setLoading(false);
    }
  };

  /* SELECT SECTION */
  const handleSelectSection = async (section) => {
    stopAudio();
    setLoading(true);
    setError("");
    setSelectedSection(section);
    setSearch("");

    try {
      let arabicSection = null;
      try {
        arabicSection = await getJSON(
          `${API}/editions/${selectedCollection.arabic}/sections/${section.id}.json`
        );
      } catch {
        arabicSection = null;
      }

      let arabicHadiths = arabicSection?.hadiths || [];
      if (arabicHadiths.length === 0) {
        const allArabic = arabicData?.hadiths || [];
        arabicHadiths = allArabic.filter((hadith) => {
          const id = hadith?.reference?.book ?? hadith?.section ?? hadith?.book ?? "1";
          return String(id) === String(section.id);
        });
      }

      const bengaliHadiths = bengaliData?.hadiths || [];
      const bnMap = new Map();
      bengaliHadiths.forEach((item) => {
        const num = String(item?.hadithnumber ?? item?.hadithNumber ?? item?.number);
        bnMap.set(num, item?.text || item?.bn || item?.hadith || "");
      });

      const result = arabicHadiths.map((arabicHadith) => {
        const number =
          arabicHadith?.hadithnumber ??
          arabicHadith?.hadithNumber ??
          arabicHadith?.number;

        return {
          number,
          arabic: arabicHadith?.text || arabicHadith?.arab || arabicHadith?.hadith || "",
          bengali: bnMap.get(String(number)) || "",
        };
      });

      setHadiths(result);
    } catch (err) {
      console.error(err);
      setError("এই অধ্যায়ের হাদিস লোড করতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  /* SEARCH FILTERS */
  const visibleSections = useMemo(() => {
    if (!sectionSearch.trim()) return sections;
    const q = sectionSearch.toLowerCase().trim();
    return sections.filter(
      (s) =>
        String(s.id).includes(q) ||
        String(s.title || "").toLowerCase().includes(q)
    );
  }, [sections, sectionSearch]);

  const visibleHadiths = useMemo(() => {
    if (!search.trim()) return hadiths;
    const q = search.toLowerCase().trim();
    return hadiths.filter(
      (h) =>
        String(h.number).includes(q) ||
        String(h.bengali || "").toLowerCase().includes(q) ||
        String(h.arabic || "").includes(q)
    );
  }, [hadiths, search]);

  const handleBack = () => {
    stopAudio();
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

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-700 pb-24">
      <Header selectedCollection={selectedCollection} onBack={handleBack} />

      <main className="max-w-2xl mx-auto px-4 mt-5">
        {loading && <LoadingSpinner />}
        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !selectedCollection && (
          <CollectionList collections={COLLECTIONS} onSelect={loadCollection} />
        )}

        {!loading && selectedCollection && !selectedSection && (
          <SectionList
            selectedCollection={selectedCollection}
            sections={visibleSections}
            sectionSearch={sectionSearch}
            setSectionSearch={setSectionSearch}
            onSelectSection={handleSelectSection}
          />
        )}

        {!loading && selectedCollection && selectedSection && (
          <HadithList
            selectedSection={selectedSection}
            selectedCollection={selectedCollection}
            hadiths={visibleHadiths}
            search={search}
            setSearch={setSearch}
            playingHadithId={playingHadithId}
            onSpeak={handleSpeakBengali}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
};

export default HadithDemo;