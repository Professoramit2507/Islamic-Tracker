// src/components/LoadingSpinner.jsx
import React from "react";
import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-24">
    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
      <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
    </div>
    <p className="mt-3 text-[11px] text-slate-500">হাদিস লোড হচ্ছে...</p>
  </div>
);

