import React from "react";
import {
  Search,
  ChevronRight,
  BookOpen,
  Hash,
} from "lucide-react";
import { toBanglaNumber } from "../utils/helpers";

export const SectionList = ({
  sections,
  sectionSearch,
  setSectionSearch,
  onSelectSection,
}) => {
  return (
    <div className="mx-auto max-w-3xl space-y-5">

      {/* সংকলনের পরিচিতি */}
      <div className="relative overflow-hidden rounded-[24px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/80 p-5 shadow-sm">

        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-blue-200/20 blur-2xl" />

        <div className="relative flex items-center gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1D41] to-[#2454B4] text-white shadow-lg shadow-blue-900/15">
            <BookOpen size={25} strokeWidth={1.7} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold tracking-wide text-blue-600">
              হাদিসের সংকলন
            </p>

            <h2 className="mt-1 font-serif text-xl font-bold text-slate-900">
              অধ্যায়সমূহ
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              যে অধ্যায়টি পড়তে চান সেটি নির্বাচন করুন
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 text-blue-300 sm:flex">
            <BookOpen size={21} strokeWidth={1.2} />
          </div>

        </div>

        <div className="relative mt-5 flex items-center gap-2 border-t border-blue-100 pt-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <p className="text-[11px] text-slate-500">
            আপনার পছন্দের অধ্যায় থেকে হাদিস পড়ুন
          </p>
        </div>

      </div>

      {/* অধ্যায় অনুসন্ধান */}
      <div className="relative">

        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-70 blur-sm" />

        <div className="relative flex items-center rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-100/60">

          <Search
            size={19}
            className="ml-4 shrink-0 text-blue-500"
          />

          <input
            type="text"
            value={sectionSearch}
            onChange={(e) => setSectionSearch(e.target.value)}
            placeholder="অধ্যায়ের নাম বা নম্বর খুঁজুন..."
            aria-label="অধ্যায় খুঁজুন"
            className="w-full bg-transparent px-3 py-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <span className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
            <Hash size={15} />
          </span>

        </div>
      </div>

      {/* অধ্যায়ের শিরোনাম */}
      <div className="flex items-center justify-between px-1">

        <div>
          <h3 className="text-sm font-bold text-slate-800">
            সকল অধ্যায়
          </h3>

          <p className="mt-1 text-[11px] text-slate-400">
            তালিকা থেকে একটি অধ্যায় বেছে নিন
          </p>
        </div>

        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
          মোট {toBanglaNumber(sections.length)} টি
        </span>

      </div>

      {/* অধ্যায়ের তালিকা */}
      <div className="space-y-3">

        {sections.length > 0 ? (

          sections.map((section) => (

            <button
              key={section.id}
              onClick={() => onSelectSection(section)}
              className="group relative flex w-full items-center gap-3.5 overflow-hidden rounded-[20px] border border-slate-100 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/[0.06] active:scale-[0.985] sm:gap-4 sm:p-5"
            >

              {/* পাশের নকশা */}
              <div className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* অধ্যায়ের নম্বর */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100/70 text-sm font-bold text-blue-800 transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-700 group-hover:to-indigo-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-900/20 sm:h-[54px] sm:w-[54px]">
                {toBanglaNumber(section.id)}
              </div>

              {/* অধ্যায়ের তথ্য */}
              <div className="min-w-0 flex-1">

                <h4 className="font-serif text-[14px] font-bold leading-relaxed text-slate-800 transition-colors group-hover:text-blue-800 sm:text-[15px]">
                  {section.title}
                </h4>

                <div className="mt-2 flex flex-wrap items-center gap-2">

                  {section.first != null &&
                  section.last != null ? (
                    <>
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2 py-1 text-[10px] text-slate-500">
                        <BookOpen
                          size={12}
                          className="text-blue-500"
                        />
                        হাদিস নম্বর
                      </span>

                      <span className="text-[10px] font-medium text-slate-400">
                        {toBanglaNumber(section.first)}
                        {" — "}
                        {toBanglaNumber(section.last)}
                      </span>
                    </>
                  ) : (
                    <span className="text-[10px] text-slate-400">
                      এই অধ্যায়ের হাদিসসমূহ
                    </span>
                  )}

                </div>
              </div>

              {/* পরবর্তী নির্দেশক */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

              </div>

            </button>

          ))

        ) : (

          /* কোনো অধ্যায় পাওয়া না গেলে */
          <div className="rounded-[24px] border border-dashed border-slate-200 bg-white px-5 py-12 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-400">
              <Search size={25} />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-700">
              কোনো অধ্যায় পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              অন্য কোনো নাম বা নম্বর দিয়ে আবার খুঁজে দেখুন।
            </p>

            <button
              type="button"
              onClick={() => setSectionSearch("")}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              সকল অধ্যায় দেখুন
            </button>

          </div>

        )}

      </div>

    </div>
  );
};