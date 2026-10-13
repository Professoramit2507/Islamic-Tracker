import React from "react";
import { Search, ChevronRight } from "lucide-react";
import { toBanglaNumber } from "../utils/helpers";

export const SectionList = ({
  selectedCollection,
  sections,
  sectionSearch,
  setSectionSearch,
  onSelectSection,
}) => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-4 mb-4 border border-slate-100 shadow-sm">
        <p className="text-[10px] text-blue-600 font-semibold">{selectedCollection.en}</p>
        <h2 className="text-[16px] font-bold text-slate-800 mt-1">অধ্যায়সমূহ</h2>
        <p className="text-[11px] text-slate-500 mt-1">যে অধ্যায়টি পড়তে চান সেটি নির্বাচন করুন</p>
      </div>

      <div className="relative mb-4">
        <input
          value={sectionSearch}
          onChange={(e) => setSectionSearch(e.target.value)}
          placeholder="অধ্যায় খুঁজুন..."
          className="w-full bg-white rounded-2xl px-4 py-3 pr-11 text-[12px] outline-none border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      </div>

      <div className="space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelectSection(section)}
            className="w-full bg-white rounded-[17px] p-4 flex items-center gap-4 text-left border border-slate-100 shadow-sm active:scale-[0.99] transition"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-[14px] shrink-0 shadow-md">
              {toBanglaNumber(section.id)}
            </div>
            <div className="flex-1">
              <h3 className="text-[14px] font-bold font-serif text-slate-800">{section.title}</h3>
              {section.first && section.last ? (
                <p className="text-[10px] text-slate-500 mt-1">
                  হাদিসের রেঞ্জ: {toBanglaNumber(section.first)} - {toBanglaNumber(section.last)}
                </p>
              ) : (
                <p className="text-[10px] text-slate-400 mt-1">এই অধ্যায়ের হাদিসসমূহ</p>
              )}
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  );
};