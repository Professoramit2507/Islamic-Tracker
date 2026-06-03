import React from "react";

const CoreFeatures = () => {
  const features = [
    {
      title: "Prayer Tracker",
      desc: "Track all 5 daily prayers and build consistency in your Salah.",
      icon: "🕋",
      bg: "from-green-500 to-emerald-600",
    },
    {
      title: "Quran Progress",
      desc: "Monitor your daily Quran reading and improve step by step.",
      icon: "📖",
      bg: "from-emerald-500 to-teal-600",
    },
    {
      title: "Zikr Counter",
      desc: "Easily count and manage your daily zikr goals.",
      icon: "📿",
      bg: "from-teal-500 to-cyan-600",
    },
    {
      title: "Halal Food Tracker",
      desc: "Check and log your food to ensure a halal lifestyle.",
      icon: "🍽️",
      bg: "from-lime-500 to-green-600",
    },
    {
      title: "Daily Islamic Score",
      desc: "Get a daily score based on your Islamic habits and progress.",
      icon: "📊",
      bg: "from-yellow-400 to-orange-500",
    },
    {
      title: "Islamic Reminder",
      desc: "Get smart reminders for prayer, zikr and daily habits.",
      icon: "⏰",
      bg: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Core Features
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Everything you need to build a strong Islamic lifestyle in one app.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >

            {/* Icon */}
            <div
              className={`w-14 h-14 flex items-center justify-center text-2xl rounded-xl text-white bg-gradient-to-r ${item.bg} shadow-md group-hover:scale-110 transition`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mt-5">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default CoreFeatures;