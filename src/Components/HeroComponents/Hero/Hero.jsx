


// import React, { useState, useEffect } from "react";

// // Images for testing
// import img1 from "../../../assets/6804.jpg";
// import img2 from "../../../assets/islamic-mosque-door-with-moon-palm-trees-night.jpg";
// import img3 from "../../../assets/top-view-islamic-new-year-concept.jpg";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [img1, img2, img3];

//   // Testing Image Load by logging paths
//   console.log("Current Image Path:", images[currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Auto change every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen">
//     {/* Left Section - Text */}
// <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left flex flex-col justify-center">

//   {/* Small badge */}
//   <span className="inline-block w-fit mx-auto md:mx-0 mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
//     ✨ Islamic Habit Tracker
//   </span>

//   {/* Main Heading */}
//   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
//     Build Your{" "}
//     <span className="text-green-600">Islamic Routine</span>
//     <br />
//     Every Single Day
//   </h1>

//   {/* Subtitle */}
//   <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
//     Track your <span className="font-semibold text-gray-800">prayers</span>, 
//     improve your <span className="font-semibold text-gray-800">Quran reading</span>, 
//     maintain <span className="font-semibold text-gray-800">zikr</span>, and ensure 
//     <span className="font-semibold text-gray-800"> halal lifestyle</span> — all in one place.
//   </p>

//   {/* Buttons */}
//   <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

//     <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
//       Get Started
//     </button>

//     <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full transition duration-300">
//       Learn More
//     </button>

//   </div>

//   {/* Small stats */}
//   <div className="mt-10 flex gap-6 justify-center md:justify-start text-sm text-gray-600">
//     <div>
//       <p className="text-2xl font-bold text-gray-800">5+</p>
//       <p>Daily Prayers</p>
//     </div>
//     <div>
//       <p className="text-2xl font-bold text-gray-800">100%</p>
//       <p>Halal Tracking</p>
//     </div>
//     <div>
//       <p className="text-2xl font-bold text-gray-800">24/7</p>
//       <p>Reminder System</p>
//     </div>
//   </div>

// </div>

//       {/* Right Section - Carousel */}
//       <div className="w-1/2 relative">
//         {/* Debugging: Just test to see if image is showing */}
//         <img
//           src={images[currentIndex]}
//           alt="Slide"
//           className="w-full h-125 rounded-lg object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;






import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "../../../assets/6804.jpg";
import img2 from "../../../assets/islamic-mosque-door-with-moon-palm-trees-night.jpg";
import img3 from "../../../assets/top-view-islamic-new-year-concept.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // ৪ সেকেন্ড পর পর চেঞ্জ হবে
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#faf7f2] flex items-center justify-center py-20 px-6 md:px-16 overflow-hidden font-sans text-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full">
        
        {/* LEFT SECTION: TEXT & CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center order-2 md:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-teal-950/5 border border-teal-900/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-900 tracking-wide w-fit mx-auto md:mx-0 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" /> Islamic Habit Tracker
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-teal-950 leading-[1.15] tracking-tight">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 relative">
              Islamic Routine
            </span>
            <br />
            Every Single Day
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
            আপনার <span className="text-teal-950 font-bold">সালাতসমূহ</span> ট্র্যাক করুন, প্রতিদিনের <span className="text-teal-950 font-bold">কুরআন তিলাওয়াত</span> উন্নত করুন, <span className="text-teal-950 font-bold">জিকির ও তাসবিহ</span> বজায় রাখুন এবং একটি সুশৃঙ্খল <span className="text-teal-950 font-bold">হালাল লাইফস্টাইল</span> গড়ে তুলুন এক জায়গায়।
          </p>

          {/* Premium CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-teal-950 text-teal-50 px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-teal-950/10 hover:bg-teal-900 transition flex items-center justify-center gap-2 text-sm group"
            >
              Get Started Free 
              <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02, bg: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border border-slate-950/10 bg-white/60 text-slate-700 px-8 py-3.5 rounded-2xl font-bold transition flex items-center justify-center gap-2 text-sm"
            >
              <Play className="w-4 h-4 text-teal-600 fill-teal-600" /> Watch Video
            </motion.button>
          </div>

          {/* Inline Micro Stats */}
          <div className="mt-12 pt-8 border-t border-slate-950/5 flex gap-6 md:gap-10 justify-center md:justify-start text-xs font-semibold uppercase tracking-wider text-slate-400">
            <div className="space-y-1">
              <p className="text-2xl font-black font-sans text-teal-950 tracking-tight flex items-center gap-1.5 justify-center md:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[3]" /> 5+
              </p>
              <p>Daily Prayers</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black font-sans text-teal-950 tracking-tight flex items-center gap-1.5 justify-center md:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[3]" /> 100%
              </p>
              <p>Halal Tracking</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black font-sans text-teal-950 tracking-tight flex items-center gap-1.5 justify-center md:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[3]" /> 24/7
              </p>
              <p>Reminders</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION: CAROUSEL WITH MOTION ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full md:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[520px] rounded-[36px] overflow-hidden order-1 md:order-2 border border-slate-950/5 p-2 bg-white shadow-xl shadow-slate-950/5"
        >
          {/* ইনভার্স মেটেরিয়াল ইনার ফ্রেম */}
          <div className="w-full h-full rounded-[28px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Islamic Landscape ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-cover rounded-[28px]"
              />
            </AnimatePresence>

            {/* ওভারলে গ্রেডিয়েন্ট (ইমেজের ওপর চমৎকার গ্লসি শেড তৈরির জন্য) */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/20 via-transparent to-transparent pointer-events-none" />

            {/* স্লাইডার ডট ইন্ডিকেটরস */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-slate-950/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-4 bg-teal-400" : "w-1.5 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;