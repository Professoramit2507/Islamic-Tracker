// import React, { useState, useRef, useEffect } from "react";
// import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// // import { GoogleGenAI } from "@google/genai"; // জেমিনি এপিআই ব্যবহারের জন্য আনকমেন্ট করবেন

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       role: "model",
//       text: "আসসালামু আলাইকুম! আমি আপনার ইসলামিক অ্যাসিস্ট্যান্ট। নামাযের সময়, কুরআন, আরবি শিক্ষা বা হালাল-হারাম খাবার নিয়ে যেকোনো প্রশ্ন করতে পারেন।",
//     },
//   ]);
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   // অটো স্ক্রল ডাউন করার জন্য
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, loading]);

//   // মেসেজ পাঠানোর ফাংশন
//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();
//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
//     setLoading(true);

//     try {
//       // --- জেমিনি এপিআই কল করার জায়গা ---
//       /* 
//       const ai = new GoogleGenAI({ apiKey: "YOUR_GEMINI_API_KEY" });
//       const response = await ai.models.generateContent({
//         model: 'gemini-2.5-flash', // অথবা আপনার পছন্দমত মডেল
//         contents: userMessage,
//         config: {
//           systemInstruction: "You are an Islamic assistant for a Bangladeshi web app. Help users with prayer times by district, Quran, Arabic learning, and checking halal/haram food items in Bengali.",
//         }
//       });
//       const aiReply = response.text;
//       */

//       // ডেমো রেসপন্স (এপিআই কানেক্ট করার পর এটি মুছে ফেলবেন)
//       setTimeout(() => {
//         let reply = "আপনার প্রশ্নটি আমি বুঝতে পেরেছি। খুব শীঘ্রই এটি আরও নিখুঁতভাবে উত্তর দেবো ইনশাআল্লাহ।";
//         if (userMessage.includes("হালাল") || userMessage.includes("food")) {
//           reply = "দয়া করে খাবারের উপাদানগুলো (ingredients) বা বারকোড দিন, আমি চেক করে জানাচ্ছি।";
//         } else if (userMessage.includes("নামায") || userMessage.includes("wakt")) {
//           reply = "আপনার ডিস্ট্রিক্ট বা জেলার নামটি একটু বলবেন কি? তাহলে সঠিক সময় জানাতে সুবিধা হবে।";
//         }
//         setMessages((prev) => [...prev, { role: "model", text: reply }]);
//         setLoading(false);
//       }, 1000);

//     } catch (error) {
//       console.error("Error:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "model", text: "দুঃখিত, সংযোগে সমস্যা হয়েছে। আবার চেষ্টা করুন।" },
//       ]);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* ফ্লোটিং ট্রিগার বাটন */}
//       <AnimatePresence>
//         {!isOpen && (
//           <motion.button
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsOpen(true)}
//             className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all border border-teal-300/30 group"
//             aria-label="Open Chat"
//           >
//             <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-300 animate-pulse" />
//             <MessageSquare className="w-6 h-6 text-slate-950" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* চ্যাট বক্স উইন্ডো */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="w-[90vw] sm:w-[380px] h-[520px] bg-slate-950 text-white rounded-2xl shadow-2xl border border-teal-900/50 flex flex-col overflow-hidden backdrop-blur-xl"
//           >
//             {/* চ্যাট হেডার */}
//             <div className="bg-slate-900/90 px-4 py-3 border-b border-teal-900/30 flex items-center justify-between">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
//                   <Bot className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs font-bold text-teal-100 flex items-center gap-1">
//                     Islamic AI Assistant <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
//                   </h3>
//                   <p className="text-[10px] text-slate-400">Online | Quran & Halal Guide</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             {/* মেসেজ লিস্ট এরিয়া */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/50 text-xs">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-start gap-2 ${
//                     msg.role === "user" ? "flex-row-reverse" : "flex-row"
//                   }`}
//                 >
//                   <div
//                     className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
//                       msg.role === "user"
//                         ? "bg-purple-600 text-white"
//                         : "bg-teal-500/20 text-teal-400 border border-teal-500/30"
//                     }`}
//                   >
//                     {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
//                   </div>
//                   <div
//                     className={`max-w-[75%] px-3 py-2 rounded-xl leading-relaxed ${
//                       msg.role === "user"
//                         ? "bg-purple-600 text-white rounded-tr-none"
//                         : "bg-slate-900 text-slate-200 border border-teal-950 rounded-tl-none"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {loading && (
//                 <div className="flex items-center gap-2 text-teal-400 text-[11px] animate-pulse">
//                   <Bot className="w-4 h-4" /> ভাবছে...
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* মেসেজ ইনপুট ফর্ম */}
//             <form
//               onSubmit={handleSendMessage}
//               className="p-3 bg-slate-900/90 border-t border-teal-900/30 flex items-center gap-2"
//             >
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="আপনার প্রশ্ন এখানে লিখুন..."
//                 className="flex-1 bg-slate-950 border border-teal-950 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all"
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="p-2 bg-teal-500 text-slate-950 rounded-xl hover:bg-teal-400 transition-all disabled:opacity-50"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // Optional export fix depending on structure
// export default FloatingChat;





import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "আসসালামু আলাইকুম! আমি আপনার ইসলামিক অ্যাসিস্ট্যান্ট। নামাযের সময়, কুরআন, আরবি শিক্ষা বা হালাল-হারাম খাবার নিয়ে যেকোনো প্রশ্ন করতে পারেন।",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      // মডেলের নাম এখানে 'gemini-2.0-flash' বা লেটেস্ট স্ট্যান্ডার্ড মডেল দেওয়া হলো
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash', 
        contents: userMessage,
        config: {
          systemInstruction: "You are an AI Islamic assistant for a Bangladeshi web app. Help users with district-based prayer times, Quran, Arabic learning, and checking halal/haram food ingredients. Answer politely and accurately in Bengali.",
        }
      });

      const aiReply = response.text || "দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না। আবার চেষ্টা করুন।";

      setMessages((prev) => [...prev, { role: "model", text: aiReply }]);
      setLoading(false);

    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "দুঃখিত, সংযোগে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।" },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ফ্লোটিং ট্রিগার বাটন */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all border border-teal-300/30 group"
            aria-label="Open Chat"
          >
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-300 animate-pulse" />
            <MessageSquare className="w-6 h-6 text-slate-950" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* চ্যাট বক্স উইন্ডো */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] sm:w-[380px] h-[520px] bg-slate-950 text-white rounded-2xl shadow-2xl border border-teal-900/50 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* চ্যাট হেডার */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-teal-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-teal-100 flex items-center gap-1">
                    Islamic AI Assistant <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                  </h3>
                  <p className="text-[10px] text-slate-400">Powered by Gemini AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* মেসেজ লিস্ট এরিয়া */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/50 text-xs">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                    }`}
                  >
                    {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl leading-relaxed ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-tr-none"
                        : "bg-slate-900 text-slate-200 border border-teal-950 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-teal-400 text-[11px] animate-pulse">
                  <Bot className="w-4 h-4" /> জেমিনি চিন্তা করছে...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* মেসেজ ইনপুট ফর্ম */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-slate-900/90 border-t border-teal-900/30 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার প্রশ্ন এখানে লিখুন..."
                className="flex-1 bg-slate-950 border border-teal-950 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 bg-teal-500 text-slate-950 rounded-xl hover:bg-teal-400 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingChat;