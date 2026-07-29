import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, Search, MapPin } from "lucide-react";
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

  // API থেকে নির্দিষ্ট জেলার নামাজের সময় ফেচ করা
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

  // সার্চ ফর্ম সাবমিট হ্যান্ডলার
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
      time: prayerTimes ? formatTimecarrier(prayerTimes.Fajr) : "Loading...", 
      image: "https://images.unsplash.com/photo-1590075865003-e48277faa558?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Dhuhr", 
      time: prayerTimes ? formatTimecarrier(prayerTimes.Dhuhr) : "Loading...", 
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Asr", 
      time: prayerTimes ? formatTimecarrier(prayerTimes.Asr) : "Loading...", 
      image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Maghrib", 
      time: prayerTimes ? formatTimecarrier(prayerTimes.Maghrib) : "Loading...", 
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Isha", 
      time: prayerTimes ? formatTimecarrier(prayerTimes.Isha) : "Loading...", 
      image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Jummah", 
      time: prayerTimes ? formatTimecarrier(prayerTimes.Dhuhr) : "01:30 PM", 
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-slate-800 font-sans pb-32">
      <main className="px-6 max-w-6xl mx-auto space-y-6 pt-6">
        
        {/* Welcome Block & Search + Dropdown */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-1"
          >
            <h2 className="text-3xl font-serif font-bold text-emerald-950">Assalamu Alaikum</h2>
            <p className="text-xl font-bold text-orange-500">
              Showing prayer times for :  
              <span className="font-bold text-xl text-red-800"> {selectedDistrict}</span>
            </p>  
          </motion.div>

          {/* Search Bar & Dropdown Container */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            
            {/* Search Form */}
            <motion.form 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-emerald-900/10 shadow-sm w-full sm:w-64"
            >
              <Search className="w-4 h-4 text-emerald-700 shrink-0" />
              <input 
                type="text" 
                placeholder="Search district..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-transparent text-sm font-semibold text-emerald-950 outline-none w-full placeholder:text-slate-400 placeholder:font-normal"
              />
              <button 
                type="submit" 
                className="bg-emerald-950 text-white text-xs px-2.5 py-1.5 rounded-xl hover:bg-emerald-900 transition-colors shrink-0"
              >
                Search
              </button>
            </motion.form>

            {/* Dropdown Box */}
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-emerald-900/10 shadow-sm w-full sm:w-auto"
            >
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
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

        {/* Error Message */}
        {errorMsg && (
          <p className="text-xs text-red-600 font-medium bg-red-50 p-2 rounded-lg w-fit">
            {errorMsg}
          </p>
        )}

        {/* 3 Columns Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {prayers.map((prayer) => {
            const isNext = prayer.name === nextPrayerName;
            
            return (
              <motion.div
                key={prayer.name}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.98 }}
                className={`flex rounded-3xl overflow-hidden bg-white border h-40 transition-all duration-300 ${
                  prayer.isWeekly 
                    ? "border-amber-500/40 ring-1 ring-amber-500/10 shadow-sm bg-linear-to-br from-white to-amber-50/20" 
                    : isNext 
                      ? "border-emerald-600 ring-1 ring-emerald-600/20 shadow-md shadow-emerald-900/5" 
                      : "border-emerald-900/10 shadow-sm"
                }`}
              >
                {/* Left: Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <h3 className="text-xl font-bold font-serif text-emerald-950">{prayer.name}</h3>
                      
                      {isNext && (
                        <span className="flex items-center gap-0.5 text-[8px] font-bold uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded-full animate-pulse">
                          <Clock className="w-2.5 h-2.5" /> Next
                        </span>
                      )}
                      
                      {prayer.isWeekly && (
                        <span className="text-[8px] font-bold uppercase bg-amber-600 text-white px-1.5 py-0.5 rounded-full">
                          Friday Only
                        </span>
                      )}
                    </div>
                    
                    <p className={`text-2xl font-black tracking-tight ${prayer.isWeekly ? "text-amber-900" : "text-emerald-900"}`}>
                      {loading ? "..." : prayer.time}
                    </p>
                  </div>

                  {/* See Details Button */}
                  <button
                    onClick={() => navigate(routeMap[prayer.name])}
                    className={`group flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full w-fit transition-all ${
                      prayer.isWeekly
                        ? "bg-amber-950 text-white hover:bg-amber-900"
                        : "bg-green-950 text-white hover:bg-green-900"
                    }`}
                  >
                    See Details
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Right: Image */}
                <div className="w-24 relative shrink-0">
                  <img 
                    src={prayer.image} 
                    alt={prayer.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-y-0 left-0 w-3 bg-linear-to-r to-transparent ${prayer.isWeekly ? "from-amber-50/50 sm:from-white" : "from-white"}`} />
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