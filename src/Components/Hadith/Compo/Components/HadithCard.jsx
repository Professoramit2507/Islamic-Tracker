import React from "react";
import { Volume2, Square, Bookmark } from "lucide-react";
import { toBanglaNumber } from "../utils/helpers";

export const HadithCard = ({
  hadith,
  hadithId,
  isPlaying,
  collectionName,
  collectionEn,
  onSpeak,
}) => {
  return (
    <article className="bg-white rounded-[18px] p-5 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-[10px] font-bold">
          হাদিস {toBanglaNumber(hadith.number)}
        </span>

        <div className="flex items-center gap-2">
          {hadith.bengali && (
            <button
              onClick={() => onSpeak(hadith.bengali, hadithId)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition ${
                isPlaying
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100 active:scale-95"
              }`}
              title={isPlaying ? "ভয়েস বন্ধ করুন" : "বাংলা শুনুন"}
            >
              {isPlaying ? (
                <>
                  <Square className="w-3 h-3 fill-current" />
                  <span>থামান</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>বাংলা শুনুন</span>
                </>
              )}
            </button>
          )}
          <span className="text-[9px] text-slate-400">{collectionName}</span>
        </div>
      </div>

      {hadith.arabic && (
        <div className="pt-5">
          <p className="text-[10px] text-blue-600 font-semibold mb-3">আরবি</p>
          <p dir="rtl" lang="ar" className="text-right text-[19px] leading-loose font-serif text-slate-800">
            {hadith.arabic}
          </p>
        </div>
      )}

      {hadith.arabic && hadith.bengali && <div className="h-px bg-slate-100 my-5" />}

      {hadith.bengali && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full bg-blue-600" />
            <h4 className="text-[11px] font-bold text-slate-700">বাংলা অনুবাদ</h4>
          </div>
          <p lang="bn" className="text-[13px] leading-[1.9] text-slate-700 font-serif">
            {hadith.bengali}
          </p>
        </div>
      )}

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[9px] text-slate-400">উৎস: {collectionEn}</span>
        <button className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};