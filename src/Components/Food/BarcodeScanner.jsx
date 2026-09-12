import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { X, Camera, RefreshCw, AlertTriangle } from "lucide-react";

const BarcodeScanner = ({ onClose, onScanSuccess }) => {
  const scannerRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");

  // =========================
  // Get Available Cameras
  // =========================
  const getCameras = async () => {
    try {
      setError("");
      setLoading(true);

      // Browser permission/device list
      const devices = await Html5Qrcode.getCameras();

      if (!devices || devices.length === 0) {
        throw new Error("কোনো camera পাওয়া যায়নি।");
      }

      setCameras(devices);

      // Laptop-এ প্রথম camera default
      const cameraId = devices[0].id;
      setSelectedCamera(cameraId);

      return cameraId;
    } catch (err) {
      console.error("Camera list error:", err);

      setError(
        "Camera পাওয়া যাচ্ছে না। Browser camera permission Allow করুন এবং HTTPS/localhost থেকে app চালান।"
      );

      setLoading(false);
      return null;
    }
  };

  // =========================
  // Start Scanner
  // =========================
  const startScanner = async (cameraId) => {
    try {
      setError("");
      setLoading(true);

      // আগের scanner থাকলে বন্ধ করুন
      if (scannerRef.current) {
        try {
          await scannerRef.current.stop();
        } catch (e) {
          console.log("Previous scanner stop:", e);
        }

        try {
          await scannerRef.current.clear();
        } catch (e) {
          console.log("Previous scanner clear:", e);
        }
      }

      const scanner = new Html5Qrcode("barcode-reader");
      scannerRef.current = scanner;

      await scanner.start(
        cameraId,
        {
          fps: 10,

          // Barcode + QR-এর জন্য ভালো area
          qrbox: function (viewfinderWidth, viewfinderHeight) {
            const width = Math.min(
              viewfinderWidth * 0.85,
              400
            );

            const height = Math.min(
              viewfinderHeight * 0.45,
              180
            );

            return {
              width,
              height,
            };
          },

          aspectRatio: 1.777778,

          // supported formats
          formatsToSupport: [
            0, // QR_CODE
            1, // AZTEC
            2, // CODABAR
            3, // CODE_39
            4, // CODE_93
            5, // CODE_128
            6, // DATA_MATRIX
            7, // MAXICODE
            8, // ITF
            9, // EAN_13
            10, // EAN_8
            11, // PDF_417
            12, // RSS_14
            13, // RSS_EXPANDED
            14, // UPC_A
            15, // UPC_E
          ],
        },
        (decodedText) => {
          console.log("Scanned:", decodedText);

          // Parent component-এ result পাঠান
          onScanSuccess(decodedText);

          // Scanner বন্ধ করুন
          stopScanner();
        },
       
      );

      setLoading(false);

      // Camera video element ঠিকভাবে দেখানোর জন্য
      setTimeout(() => {
        const video = document.querySelector(
          "#barcode-reader video"
        );

        if (video) {
          video.setAttribute("playsinline", "true");
          video.setAttribute("autoplay", "true");
          video.muted = true;

          video.style.width = "100%";
          video.style.height = "auto";
          video.style.objectFit = "cover";
          video.style.display = "block";
          video.style.backgroundColor = "#000";

          video.play().catch((err) => {
            console.log("Video autoplay:", err);
          });
        }
      }, 500);
    } catch (err) {
      console.error("Scanner start error:", err);

      setLoading(false);

      let message =
        "Camera চালু করা যাচ্ছে না।";

      if (
        err?.name === "NotAllowedError" ||
        err?.message?.includes("Permission")
      ) {
        message =
          "Camera permission দেওয়া হয়নি। Browser-এর address bar থেকে Camera → Allow করুন।";
      } else if (
        err?.name === "NotFoundError"
      ) {
        message =
          "কোনো camera device পাওয়া যায়নি।";
      } else if (
        err?.name === "NotReadableError"
      ) {
        message =
          "Camera অন্য কোনো application ব্যবহার করছে। Zoom/Teams/Camera app বন্ধ করে আবার চেষ্টা করুন।";
      }

      setError(message);
    }
  };

  // =========================
  // Stop Scanner
  // =========================
  const stopScanner = async () => {
    if (!scannerRef.current) {
      return;
    }

    try {
      if (scannerRef.current.isScanning) {
        await scannerRef.current.stop();
      }
    } catch (err) {
      console.log("Scanner stop error:", err);
    }

    try {
      await scannerRef.current.clear();
    } catch (err) {
      console.log("Scanner clear error:", err);
    }

    scannerRef.current = null;
  };

  // =========================
  // Initial Camera Start
  // =========================
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const cameraId = await getCameras();

      if (mounted && cameraId) {
        await startScanner(cameraId);
      }
    };

    init();

    return () => {
      mounted = false;

      stopScanner();
    };
  }, []);

  // =========================
  // Camera Change
  // =========================
  const handleCameraChange = async (e) => {
    const cameraId = e.target.value;

    setSelectedCamera(cameraId);

    await startScanner(cameraId);
  };

  // =========================
  // Close
  // =========================
  const handleClose = async () => {
    await stopScanner();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

      <div className="bg-white rounded-3xl p-5 md:p-6 max-w-lg w-full shadow-2xl relative">

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">

          <div className="flex items-center gap-2 text-emerald-950 font-bold">

            <Camera className="w-5 h-5 text-emerald-700" />

            <span>
              QR / Barcode Scanner
            </span>

          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        {/* Camera Selector */}
        {cameras.length > 1 && !error && (
          <div className="mb-4">

            <label className="text-xs font-bold text-slate-600 mb-1 block">
              Camera Select করুন
            </label>

            <select
              value={selectedCamera}
              onChange={handleCameraChange}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            >

              {cameras.map((camera, index) => (
                <option
                  key={camera.id}
                  value={camera.id}
                >
                  {camera.label ||
                    `Camera ${index + 1}`}
                </option>
              ))}

            </select>

          </div>
        )}

        {/* Camera View */}
        <div
          className="relative bg-black rounded-2xl overflow-hidden border border-slate-300 min-h-[300px]"
        >

          <div
            id="barcode-reader"
            className="w-full"
          />

          {/* Loading */}
          {loading && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white">

              <Camera className="w-10 h-10 text-emerald-400 animate-pulse mb-3" />

              <p className="text-sm">
                Camera চালু হচ্ছে...
              </p>

            </div>
          )}

          {/* Error */}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white p-6 text-center">

              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />

              <h3 className="font-bold text-lg mb-2">
                Camera Error
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {error}
              </p>

              <button
                type="button"
                onClick={async () => {
                  setError("");

                  const cameraId =
                    await getCameras();

                  if (cameraId) {
                    await startScanner(cameraId);
                  }
                }}
                className="mt-5 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm cursor-pointer"
              >

                <RefreshCw className="w-4 h-4" />

                আবার চেষ্টা করুন

              </button>

            </div>
          )}

        </div>

        {/* Instruction */}
        <div className="mt-4 text-center">

          <p className="text-xs text-slate-500">
            📷 Barcode বা QR code ক্যামেরার মাঝখানে রাখুন
          </p>

          <p className="text-[11px] text-slate-400 mt-1">
            পর্যাপ্ত আলোতে barcode scan করলে ভালো ফলাফল পাবেন।
          </p>

        </div>

      </div>

    </div>
  );
};

export default BarcodeScanner;
