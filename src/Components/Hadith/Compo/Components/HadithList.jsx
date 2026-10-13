import React from "react";
import { Search, BookText } from "lucide-react";
import { toBanglaNumber } from "../utils/helpers";
import { HadithCard } from "../Components/HadithCard";

export const HadithList = ({
  selectedSection,
  selectedCollection,
  hadiths,
  search,
  setSearch,
  playingHadithId,
  onSpeak,
  loading,
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-[#071A3D] to-[#174EA6] rounded-2xl p-4 text-white shadow-lg">
        <p className="text-[9px] text-blue-200 uppercase tracking-widest">CHAPTER</p>
        <h2 className="text-[16px] font-bold font-serif mt-1">{selectedSection.title}</h2>
        <p className="text-[10px] text-blue-100 mt-1">এই অধ্যায়ের হাদিসসমূহ</p>
      </div>

      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="হাদিস নম্বর বা বাংলা লেখা খুঁজুন..."
          className="w-full bg-white rounded-2xl px-4 py-3 pr-11 text-[12px] outline-none border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-[10px] text-slate-500">
          মোট {toBanglaNumber(hadiths.length)} টি হাদিস
        </p>
        <p className="text-[10px] text-blue-600 font-semibold">{selectedCollection.bn}</p>
      </div>

      {hadiths.map((hadith, index) => {
        const hadithId = `${hadith.number}-${index}`;
        return (
          <HadithCard
            key={hadithId}
            hadith={hadith}
            hadithId={hadithId}
            isPlaying={playingHadithId === hadithId}
            collectionName={selectedCollection.bn}
            collectionEn={selectedCollection.en}
            onSpeak={onSpeak}
          />
        );
      })}

      {hadiths.length === 0 && !loading && (
        <div className="bg-white rounded-2xl p-10 text-center border border-slate-100">
          <BookText className="w-9 h-9 text-blue-600 mx-auto" />
          <h3 className="text-sm font-bold mt-3">কোনো হাদিস পাওয়া যায়নি</h3>
          <p className="text-[10px] text-slate-400 mt-2">অন্য নম্বর অথবা search term দিয়ে চেষ্টা করুন।</p>
        </div>
      )}
    </div>
  );
};