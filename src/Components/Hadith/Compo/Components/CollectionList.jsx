import React from "react";
import { ChevronRight } from "lucide-react";

export const CollectionList = ({ collections, onSelect }) => {
  return (
    <div>
      <div className="mb-4">
        <p className="text-[11px] font-semibold text-blue-700">হাদিসের গ্রন্থসমূহ</p>
        <h2 className="text-[16px] font-bold text-slate-800 mt-0.5">একটি গ্রন্থ নির্বাচন করুন</h2>
        <p className="text-[11px] text-slate-500 mt-1">কুতুবে সিত্তাহ ও অন্যান্য প্রসিদ্ধ হাদিস গ্রন্থ</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {collections.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c)}
            className="bg-white rounded-2xl p-3 text-left border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.05)] hover:shadow-md active:scale-[0.97] transition"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-[14px] shadow-md`}>
              {c.short}
            </div>
            <h3 className="text-[15px] font-bold font-serif text-slate-800 mt-3 leading-5">
              {c.bn}
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-4 line-clamp-2">
              {c.author}
            </p>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
              <div>
                <span className="text-[12px] font-bold text-blue-700">{c.count}</span>
                <span className="text-[8px] text-slate-400 ml-1">হাদিস</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};