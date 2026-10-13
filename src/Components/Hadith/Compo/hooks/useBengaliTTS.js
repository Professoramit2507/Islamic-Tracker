import { useState, useRef, useEffect } from "react";
import { cleanTextForSpeech, chunkBanglaText } from "../utils/textUtils";

export const useBengaliTTS = (resetDependency) => {
  const [playingHadithId, setPlayingHadithId] = useState(null);
  const activeAudioRef = useRef(null);
  const chunksRef = useRef([]);
  const chunkIndexRef = useRef(0);

  // পেজে no-referrer সেট করা
  useEffect(() => {
    if (typeof document !== "undefined") {
      let meta = document.querySelector('meta[name="referrer"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "referrer";
        meta.content = "no-referrer";
        document.head.appendChild(meta);
      } else {
        meta.content = "no-referrer";
      }
    }
  }, []);

  const stopAudio = () => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current.currentTime = 0;
      activeAudioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    chunksRef.current = [];
    chunkIndexRef.current = 0;
    setPlayingHadithId(null);
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [resetDependency]);

  const handleSpeakBengali = (text, hadithId) => {
    if (playingHadithId === hadithId) {
      stopAudio();
      return;
    }

    stopAudio();

    const cleanText = cleanTextForSpeech(text);
    if (!cleanText) return;

    const chunks = chunkBanglaText(cleanText);
    if (!chunks.length) return;

    chunksRef.current = chunks;
    chunkIndexRef.current = 0;
    setPlayingHadithId(hadithId);

    const playNextChunk = (index, attempt = 0) => {
      if (index >= chunks.length) {
        stopAudio();
        return;
      }

      chunkIndexRef.current = index;
      const chunk = chunks[index];

      let audioUrl = `/api/tts?text=${encodeURIComponent(chunk)}`;
      if (attempt === 1) {
        audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          chunk
        )}&tl=bn&client=tw-ob`;
      }

      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current = null;
      }

      const audio = new Audio();

      const handleFallback = () => {
        if (attempt === 0) {
          playNextChunk(index, 1);
        } else {
          if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = "bn-BD";
            utterance.rate = 0.95;
            utterance.onend = () => setPlayingHadithId(null);
            utterance.onerror = () => setPlayingHadithId(null);
            window.speechSynthesis.speak(utterance);
          } else {
            setPlayingHadithId(null);
          }
        }
      };

      audio.onended = () => {
        playNextChunk(index + 1, 0);
      };

      audio.onerror = () => {
        handleFallback();
      };

      activeAudioRef.current = audio;
      audio.src = audioUrl;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Audio play error, falling back...", err);
          handleFallback();
        });
      }
    };

    playNextChunk(0, 0);
  };

  return { playingHadithId, handleSpeakBengali, stopAudio };
};