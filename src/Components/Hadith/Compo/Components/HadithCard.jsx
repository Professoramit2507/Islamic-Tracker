import React from "react";
import {
  Volume2,
  Square,
  Bookmark,
  BookOpen,
  Sparkles,
} from "lucide-react";
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
    <article className="group relative overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.045)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_12px_35px_rgba(30,64,175,0.08)]">

      {/* Top Decorative Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B1D41] via-blue-600 to-indigo-400" />

      <div className="p-4 sm:p-6">

        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1D41] to-blue-700 text-white shadow-md shadow-blue-900/15">
              <BookOpen size={20} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[10px] font-medium text-slate-400">
                হাদিসের নম্বর
              </p>

              <span className="mt-0.5 inline-flex items-center rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-800">
                {toBanglaNumber(hadith.number)}
              </span>
            </div>

          </div>

          {/* Listen Button */}
          {hadith.bengali && (
            <button
              type="button"
              onClick={() => onSpeak(hadith.bengali, hadithId)}
              aria-label={
                isPlaying
                  ? "বাংলা পাঠ বন্ধ করুন"
                  : "বাংলা অনুবাদ শুনুন"
              }
              title={
                isPlaying
                  ? "বাংলা পাঠ বন্ধ করুন"
                  : "বাংলা অনুবাদ শুনুন"
              }
              className={`group/listen inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all duration-300 active:scale-95 ${
                isPlaying
                  ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-red-500/20"
                  : "bg-gradient-to-r from-[#102B60] to-blue-600 text-white shadow-md shadow-blue-900/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20"
              }`}
            >
              {isPlaying ? (
                <>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <Square size={12} className="fill-current" />
                  </span>
                  <span>থামান</span>
                </>
              ) : (
                <>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover/listen:scale-110">
                    <Volume2 size={15} />
                  </span>
                  <span>শুনুন</span>
                </>
              )}
            </button>
          )}

        </div>

        {/* Collection Name */}
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <p className="text-[11px] font-medium text-slate-500">
            {collectionName}
          </p>
        </div>

        {/* Arabic Section */}
        {hadith.arabic && (
          <div className="relative mt-5 overflow-hidden rounded-[22px] border border-amber-100/70 bg-gradient-to-br from-[#FFFCF5] via-[#FFFDF8] to-[#F8F5EA] p-5 sm:p-7">

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-amber-200/30" />
            <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full border border-amber-200/30" />

            <div className="relative mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-amber-300" />

              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-white/70 px-3 py-1.5 text-[10px] font-bold text-amber-800">
                <Sparkles size={12} />
                আরবি হাদিস
              </span>

              <span className="h-px w-8 bg-amber-300" />
            </div>

            <p
              dir="rtl"
              lang="ar"
              className="relative text-right font-serif text-[23px] leading-[2.2] text-[#29271F] sm:text-[27px] sm:leading-[2.3]"
            >
              {hadith.arabic}
            </p>

            <div className="relative mt-5 flex justify-center">
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-amber-200 to-amber-400/70" />
            </div>

          </div>
        )}

        {/* Divider */}
        {hadith.arabic && hadith.bengali && (
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
              <BookOpen size={15} />
            </div>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        )}

        {/* Bengali Translation */}
        {hadith.bengali && (
          <div className="rounded-[20px] border border-blue-50 bg-gradient-to-br from-blue-50/60 to-white p-4 sm:p-5">

            <div className="mb-4 flex items-center gap-2.5">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <BookOpen size={17} />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  বাংলা অনুবাদ
                </h4>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  হাদিসের বাংলা অর্থ
                </p>
              </div>

            </div>

            <p
              lang="bn"
              className="text-[14px] leading-[2] text-slate-700 sm:text-[15px] sm:leading-[2.1]"
            >
              {hadith.bengali}
            </p>

          </div>
        )}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">

          <div className="flex min-w-0 items-center gap-2">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
              <BookOpen size={14} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] text-slate-400">
                সংকলনের নাম
              </p>

              <p className="truncate text-xs font-semibold text-slate-600">
                {collectionName || collectionEn}
              </p>
            </div>

          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            aria-label="হাদিস সংরক্ষণ"
            title="হাদিস সংরক্ষণ"
            className="group/bookmark flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600 active:scale-90"
          >
            <Bookmark
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover/bookmark:-translate-y-0.5"
            />
          </button>

        </div>

      </div>
    </article>
  );
};