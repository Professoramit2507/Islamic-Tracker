import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, Search, MapPin, Info, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const bangladeshDistricts = [
  "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria",
  "Chandpur", "Chapainawabganj", "Chattogram", "Chuadanga", "Comilla", "Cox's Bazar",
  "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj",
  "Habiganj", "Jamalpur", "Jashore", "Jhalokati", "Jhenaidah", "Joypurhat",
  "Khagrachhari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur",
  "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
  "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi",
  "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
  "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur",
  "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet",
  "Tangail", "Thakurgaon"
].sort();

const PrayerGuideDashboard = () => {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [searchInput, setSearchInput] = useState("");
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const nextPrayerName = "Dhuhr"; 

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const today = new Date();
        const dateStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
        
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=${selectedDistrict}&country=Bangladesh&method=1`
        );
        const data = await response.json();
        
        if (data && data.data) {
          setPrayerTimes(data.data.timings);
        } else {
          setErrorMsg("District not found!");
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setErrorMsg("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [selectedDistrict]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formattedInput = searchInput.trim();
    if (!formattedInput) return;

    const matchedDistrict = bangladeshDistricts.find(
      (d) => d.toLowerCase() === formattedInput.toLowerCase()
    );

    if (matchedDistrict) {
      setSelectedDistrict(matchedDistrict);
      setErrorMsg("");
      setSearchInput("");
    } else {
      setErrorMsg("সঠিক জেলার নাম লিখুন (যেমন: Sylhet)");
    }
  };

  const formatTimecarrier = (timeStr) => {
    if (!timeStr) return "";
    const cleanTime = timeStr.split(' ')[0];
    const [hourStr, minuteStr] = cleanTime.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${String(hour).padStart(2, '0')}:${minuteStr} ${ampm}`;
  };

  const prayers = [
    { 
      name: "Fajr", 
      arabicName: "الفجر",
      rakats: "2 Sunnah, 2 Fard",
      description: "Dawn prayer before sunrise",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Fajr) : "Loading...", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Sunrise) : "Loading...",
      image: "https://images.unsplash.com/photo-1590075865003-e48277faa558?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Dhuhr", 
      arabicName: "الظهر",
      rakats: "4 Sunnah, 4 Fard, 2 Sunnah, 2 Nafl",
      description: "Midday prayer after zenith",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Dhuhr) : "Loading...", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Asr) : "Loading...",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Asr", 
      arabicName: "العصر",
      rakats: "4 Sunnah, 4 Fard",
      description: "Afternoon prayer before sunset",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Asr) : "Loading...", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Maghrib) : "Loading...",
      image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Maghrib", 
      arabicName: "المغرب",
      rakats: "3 Fard, 2 Sunnah, 2 Nafl",
      description: "Evening prayer right after sunset",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Maghrib) : "Loading...", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Isha) : "Loading...",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Isha", 
      arabicName: "العشاء",
      rakats: "4 Sunnah, 4 Fard, 2 Sunnah, 3 Witr",
      description: "Night prayer after twilight",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Isha) : "Loading...", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Fajr) : "Loading...",
      image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Jummah", 
      arabicName: "الجمعة",
      rakats: "Congregational Friday Prayer",
      description: "Weekly Friday prayer (Replaces Dhuhr)",
      startTime: prayerTimes ? formatTimecarrier(prayerTimes.Dhuhr) : "01:30 PM", 
      endTime: prayerTimes ? formatTimecarrier(prayerTimes.Asr) : "03:30 PM",
      isWeekly: true,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
  ];

  const routeMap = {
    Fajr: "/fajr",
    Dhuhr: "/dhuhr",
    Asr: "/asr",
    Maghrib: "/maghrib",
    Isha: "/isha",
    Jummah: "/jumma",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-800 font-sans pb-32">
      <main className="px-6 max-w-6xl mx-auto space-y-8 pt-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-emerald-900/10 shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-1.5"
          >
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider bg-emerald-50 w-fit px-2.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Daily Spiritual Guide
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-emerald-950">Assalamu Alaikum</h2>
            <p className="text-sm font-medium text-slate-600 flex items-center gap-1.5 pt-1">
              Showing prayer times for: 
              <span className="font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-lg text-base">
                {selectedDistrict}
              </span>
            </p>  
          </motion.div>

          {/* Search & Dropdown Control Panel */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <motion.form 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 bg-[#f4f1ea] px-3.5 py-2 rounded-2xl border border-emerald-900/10 w-full sm:w-64"
            >
              <Search className="w-4 h-4 text-emerald-800 shrink-0" />
              <input 
                type="text" 
                placeholder="Search district..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-transparent text-sm font-semibold text-emerald-950 outline-none w-full placeholder:text-slate-400 placeholder:font-normal"
              />
              <button 
                type="submit" 
                className="bg-emerald-900 text-white text-xs px-3 py-1.5 rounded-xl hover:bg-emerald-800 transition-colors shrink-0 font-medium"
              >
                Search
              </button>
            </motion.form>

            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-[#f4f1ea] px-3.5 py-2.5 rounded-2xl border border-emerald-900/10 w-full sm:w-auto"
            >
              <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
              <select 
                value={selectedDistrict} 
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-transparent text-sm font-semibold text-emerald-950 outline-none cursor-pointer w-full"
              >
                {bangladeshDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>

        {errorMsg && (
          <p className="text-xs text-red-600 font-medium bg-red-50 p-3 rounded-xl border border-red-200 w-fit">
            {errorMsg}
          </p>
        )}

        {/* Enhanced Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {prayers.map((prayer) => {
            const isNext = prayer.name === nextPrayerName;
            
            return (
              <motion.div
                key={prayer.name}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 35px -15px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col justify-between rounded-3xl overflow-hidden bg-white border transition-all duration-300 ${
                  prayer.isWeekly 
                    ? "border-amber-500/40 ring-1 ring-amber-500/20 shadow-lg bg-gradient-to-br from-white via-amber-50/10 to-amber-50/30" 
                    : isNext 
                      ? "border-emerald-600 ring-2 ring-emerald-600/30 shadow-xl shadow-emerald-950/10" 
                      : "border-emerald-900/10 shadow-sm"
                }`}
              >
                {/* Top Section */}
                <div className="p-6 pb-4 flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold font-serif text-emerald-950">{prayer.name}</h3>
                      <span className="text-sm font-serif font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {prayer.arabicName}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {isNext && (
                        <span className="flex items-center gap-1 text-[9px] font-extrabold uppercase bg-emerald-600 text-white px-2 py-0.5 rounded-full animate-pulse shadow-sm">
                          <Clock className="w-3 h-3" /> Next Prayer
                        </span>
                      )}
                      {prayer.isWeekly && (
                        <span className="text-[9px] font-extrabold uppercase bg-amber-600 text-white px-2 py-0.5 rounded-full shadow-sm">
                          Friday Only
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 font-medium pt-1">
                      {prayer.description}
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-inner border border-slate-100">
                    <img 
                      src={prayer.image} 
                      alt={prayer.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Middle Info: Start & End Time + Rakats */}
                <div className="px-6 py-3.5 bg-[#fbf9f5]/70 border-y border-emerald-900/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Starts</span>
                      <p className={`text-base font-black tracking-tight ${prayer.isWeekly ? "text-amber-900" : "text-emerald-900"}`}>
                        {loading ? "..." : prayer.startTime}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Ends</span>
                      <p className="text-base font-black tracking-tight text-slate-700">
                        {loading ? "..." : prayer.endTime}
                      </p>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-slate-200/60 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-xs font-semibold text-slate-600 truncate">{prayer.rakats}</span>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 px-6 bg-white flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">View full guidelines</span>
                  <button
                    onClick={() => navigate(routeMap[prayer.name])}
                    className={`group flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm ${
                      prayer.isWeekly
                        ? "bg-amber-950 text-white hover:bg-amber-900"
                        : "bg-emerald-950 text-white hover:bg-emerald-900"
                    }`}
                  >
                    See Details
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
};
  
export default PrayerGuideDashboard;