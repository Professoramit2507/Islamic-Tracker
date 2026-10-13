import React from "react";
import { ArrowLeft } from "lucide-react";

export const Header = ({ selectedCollection, onBack }) => {
  if (!selectedCollection) {
    return (
      <header className="relative">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#100626] via-[#240a43] to-[#171832] text-white rounded-b-[48px] shadow-lg px-5 pt-8 pb-16">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-56 bg-purple-600/20 blur-[80px] rounded-full" />
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="text-[13px] md:text-[14px] font-bold tracking-widest text-white/65 uppercase">
              SPIRITUAL GUIDE
            </p>
            <div className="inline-flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full bg-purple-700/30 border border-purple-400/20 text-purple-100 text-[11px] md:text-[12px]">
              <span className="text-[13px]">♡</span>
              <span>আত্মশুদ্ধি ও আমল</span>
            </div>
            <h1 className="mt-3 text-[34px] sm:text-[40px] md:text-[52px] leading-tight font-bold font-serif text-white">
              হাদিস শরীফ
            </h1>
            <p className="mt-2 text-[12px] sm:text-[13px] md:text-[15px] text-purple-100/70 font-serif">
              রাসুলুল্লাহ ﷺ এর বাণী ও সুন্নাহ
            </p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-gradient-to-br from-[#071A3D] via-[#102B68] to-[#174EA6] text-white px-5 pt-5 pb-7 rounded-b-[28px] shadow-lg">
      <div className="max-w-2xl mx-auto flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <p className="text-[9px] uppercase tracking-widest text-blue-200">
            HADITH COLLECTION
          </p>
          <h1 className="text-[19px] font-bold font-serif mt-0.5">
            {selectedCollection.bn}
          </h1>
          <p className="text-[11px] text-blue-100">{selectedCollection.author}</p>
          <p className="text-[10px] text-blue-200 mt-0.5">
            {selectedCollection.count} হাদিস
          </p>
        </div>
      </div>
    </header>
  );
};