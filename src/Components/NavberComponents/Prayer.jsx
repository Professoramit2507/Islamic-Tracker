import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const PrayerGuideDashboard = () => {
  const navigate = useNavigate();

  // ডাইনামিকালি পরবর্তী নামাজ হাইলাইট করার জন্য (আপাতত Dhuhr দিয়ে রাখা হলো)
  const nextPrayerName = "";

  const prayers = [
    { 
      name: "Fajr", 
      time: "04:12 AM", 
      image: "https://images.unsplash.com/photo-1590075865003-e48277faa558?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Dhuhr", 
      time: "12:24 PM", 
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Asr", 
      time: "04:45 PM", 
      image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Maghrib", 
      time: "06:54 PM", 
     image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Isha", 
      time: "08:20 PM", 
      image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=300&auto=format&fit=crop",
    },
    { 
      name: "Jummah", 
      time: "01:30 PM", 
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
        
        {/* Welcome Block */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-1"
        >
          <h2 className="text-3xl font-serif font-bold text-emerald-950">Assalamu Alaikum</h2>
          <p className="text-sm text-slate-600">Here's your prayer guide for today. May Allah accept your efforts.</p>  
        </motion.div>

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
                    ? "border-amber-500/40 ring-1 ring-amber-500/10 shadow-sm bg-gradient-to-br from-white to-amber-50/20" 
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
                      {prayer.time}
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
                <div className="w-24 relative flex-shrink-0">
                  <img 
                    src={prayer.image} 
                    alt={prayer.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-y-0 left-0 w-3 bg-gradient-to-r to-transparent ${prayer.isWeekly ? "from-amber-50/50 sm:from-white" : "from-white"}`} />
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