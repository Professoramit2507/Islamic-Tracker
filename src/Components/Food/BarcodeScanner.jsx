import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { X, Camera } from "lucide-react";

const BarcodeScannerModal = ({ onClose, onScanSuccess }) => {
  useEffect(() => {
    // স্ক্যানার কনফিগারেশন
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 150 },
    });

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText); // স্ক্যান সফল হলে রেজাল্ট প্যারেন্ট ফাইলে পাঠাবে
        scanner.clear(); // স্ক্যান শেষ হলে ক্যামেরা অফ করবে
        onClose(); // মোডাল বন্ধ করবে
      },
    );

    return () => {
      scanner.clear().catch((err) => console.error("Failed to clear scanner", err));
    };
  }, [onScanSuccess, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl relative border border-slate-100">
        
        {/* মোডাল হেডার */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
            <Camera className="w-5 h-5 text-emerald-700" />
            <span>Scan Barcode / QR</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ক্যামেরা ভিউপয়েন্ট */}
        <div id="reader" className="overflow-hidden rounded-2xl border border-slate-200"></div>

        <p className="text-xs text-center text-slate-400 mt-4">
          ক্যামেরাটি প্রোডাক্টের বারকোডের সামনে সোজাসুজি ধরুন
        </p>
      </div>
    </div>
  );
};

export default BarcodeScannerModal;