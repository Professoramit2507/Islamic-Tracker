import React, { useEffect, useState } from 'react';

const QuranSection = () => {
  const [dailyAyah, setDailyAyah] = useState(null);
  const [progress, setProgress] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [streak, setStreak] = useState(0);

  // Load Quran data
  useEffect(() => {
    fetch('/quranData.json')
      .then(res => res.json())
      .then(data => {
        // Daily Ayah (random)
        const random = data[Math.floor(Math.random() * data.length)];
        setDailyAyah(random);
      });
  }, []);

  // Load saved data
  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    const savedBookmarks = localStorage.getItem('bookmarks');
    const savedStreak = localStorage.getItem('streak');

    setProgress(savedProgress ? Number(savedProgress) : 0);
    setBookmarks(savedBookmarks ? JSON.parse(savedBookmarks) : []);
    setStreak(savedStreak ? Number(savedStreak) : 0);
  }, []); // This runs once on mount, multiple setState calls are acceptable for initialization

  // Save progress
  const handleProgress = () => {
    const newProgress = progress + 1;
    setProgress(newProgress);
    localStorage.setItem('progress', newProgress);

    // streak logic
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem('streak', newStreak);
  };

  // Bookmark
  const handleBookmark = (ayah) => {
    const updated = [...bookmarks, ayah];
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      {/* 📖 Quran Tracker */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Quran Tracker</h2>
        <p>Progress: {progress} pages</p>
        <p>🔥 Streak: {streak} days</p>

        <button
          onClick={handleProgress}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Mark as Read
        </button>
      </div>

      {/* 📖 Daily Ayah */}
      {dailyAyah && (
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="font-bold">📖 Daily Ayah</h2>
          <p className="italic">{dailyAyah.text}</p>
          <p className="text-sm">{dailyAyah.surah} ({dailyAyah.ayah})</p>

          <button
            onClick={() => handleBookmark(dailyAyah)}
            className="mt-2 bg-yellow-500 px-3 py-1 rounded text-white"
          >
            Bookmark
          </button>
        </div>
      )}

      {/* 📚 Bookmarks */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-bold mb-2">📚 Bookmarked Ayahs</h2>
        {bookmarks.length === 0 && <p>No bookmarks yet</p>}

        {bookmarks.map((b, i) => (
          <div key={i} className="mb-2">
            <p>{b.text}</p>
            <small>{b.surah} ({b.ayah})</small>
          </div>
        ))}
      </div>

      {/* 📚 Daily Hadith */}
      <div className="bg-green-100 p-4 rounded">
        <h2 className="font-bold">📚 Daily Hadith</h2>
        <p>
          "Actions are judged by intentions."  
        </p>
      </div>

    </div>
  );
};

export default QuranSection;