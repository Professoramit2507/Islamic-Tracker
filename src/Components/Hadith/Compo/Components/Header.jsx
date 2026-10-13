import React from "react";
import { ArrowLeft ,BookOpen} from "lucide-react";

export const Header = ({ selectedCollection, onBack }) => {
    if (!selectedCollection) {
        return (
            <header className="relative">
                <div className="relative overflow-hidden bg-linear-to-b from-[#100626] via-[#240a43] to-[#171832] text-white rounded-b-[48px] shadow-lg px-5 pt-8 pb-16">
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
        // <header className="bg-linear-to-br from-[#071A3D] via-[#102B68] to-[#174EA6] text-white px-5 pt-5 pb-7 rounded-b-[28px] shadow-lg">
        //   <div className="max-w-2xl mx-auto flex items-center gap-4">
        //     <button
        //       onClick={onBack}
        //       className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition"
        //     >
        //       <ArrowLeft className="w-5 h-5" />
        //     </button>
        //     <div>
        //       <p className="text-[9px] uppercase tracking-widest text-blue-200">
        //         HADITH COLLECTION
        //       </p>
        //       <h1 className="text-[19px] font-bold font-serif mt-0.5">
        //         {selectedCollection.bn}
        //       </h1>
        //       <p className="text-[11px] text-blue-100">{selectedCollection.author}</p>
        //       <p className="text-[10px] text-blue-200 mt-0.5">
        //         {selectedCollection.count} হাদিস
        //       </p>
        //     </div>
        //   </div>
        // </header>

        <header className="relative overflow-hidden rounded-b-[32px] bg-gradient-to-br from-[#06142E] via-[#102B60] to-[#1D4ED8] px-5 pt-6 pb-8 text-white shadow-xl shadow-blue-950/20">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-9 h-36 w-36 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative mx-auto max-w-2xl">

                {/* Top Navigation */}
                <div className="mb-6 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        aria-label="Go back"
                        className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-90"
                    >
                        <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    </button>

                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-100">
                            HADITH COLLECTION
                        </span>
                    </div>
                </div>

                {/* Collection Information */}
                <div className="flex items-end justify-between gap-4">

                    <div className="min-w-0 flex-1">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-200/80">
                            Islamic Library
                        </p>

                        <h1 className="font-serif text-2xl font-bold leading-snug tracking-wide text-white sm:text-3xl">
                            {selectedCollection.bn}
                        </h1>

                        <div className="mt-3 flex items-center gap-2">
                            <span className="h-px w-7 bg-amber-300/80" />
                            <p className="text-xs font-medium tracking-wide text-blue-100">
                                {selectedCollection.author}
                            </p>
                        </div>

                        {/* Hadith Count */}
                        <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                            <BookOpen className="h-4 w-4 text-amber-300" />
                            <span className="text-sm font-semibold text-white">
                                {selectedCollection.count}
                            </span>
                            <span className="text-xs text-blue-100">
                                হাদিস
                            </span>
                        </div>
                    </div>

                    {/* Decorative Islamic Motif */}
                    <div className="mb-1 hidden h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-white/15 bg-white/[0.06] shadow-inner backdrop-blur-sm sm:flex">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/40">
                            <BookOpen className="h-8 w-8 text-amber-200" strokeWidth={1.3} />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};