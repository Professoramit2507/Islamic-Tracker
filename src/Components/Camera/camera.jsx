import { useEffect, useRef, useState } from "react";
import "./camera.css";

function Camera() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [error, setError] = useState("");

  const openCamera = async () => {
    setError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
        audio: false,
      });

      streamRef.current = stream;

      // Video element এখন DOM-এ আছে
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        // Camera frame আসার জন্য অপেক্ষা
        await videoRef.current.play();
      }

      setCameraOpen(true);
    } catch (err) {
      console.error("Camera Error:", err);

      setCameraOpen(false);

      if (err.name === "NotAllowedError") {
        setError("❌ Camera permission denied.");
      } else if (err.name === "NotFoundError") {
        setError("❌ কোনো camera পাওয়া যায়নি।");
      } else if (err.name === "NotReadableError") {
        setError("❌ Camera অন্য কোনো app ব্যবহার করছে।");
      } else {
        setError(`❌ Camera চালু করা যায়নি: ${err.message}`);
      }
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOpen(false);
    setError("");
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div className="camera-container">
      <h1>React Camera</h1>

      {/* Camera Preview */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="camera-video"
        />

        {!cameraOpen && (
          <div className="camera-placeholder">
            📷 Camera Off
          </div>
        )}

        {cameraOpen && (
          <div className="camera-status">
            <span className="status-dot"></span>
            Camera is ON
          </div>
        )}
      </div>

      {/* Buttons */}
      {!cameraOpen ? (
        <button className="open-btn" onClick={openCamera}>
          📷 Open Camera
        </button>
      ) : (
        <button className="close-btn" onClick={closeCamera}>
          ✕ Close Camera
        </button>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Camera;
