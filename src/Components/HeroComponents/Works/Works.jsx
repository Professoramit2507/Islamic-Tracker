import React from "react";

const Features = () => {
  const features = [
    {
      title: "Prayer Tracking",
      desc: "Track all 5 daily prayers with reminders and streak system.",
      icon: "🕌",
      bg: "from-green-50 to-green-100",
      iconBg: "from-green-400 to-green-600",
    },
    {
      title: "Quran Progress",
      desc: "Monitor your daily Quran reading page by page or Surah.",
      icon: "📖",
      bg: "from-emerald-50 to-emerald-100",
      iconBg: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Zikr Counter",
      desc: "Digital tasbih to maintain your daily zikr goals easily.",
      icon: "📿",
      bg: "from-teal-50 to-teal-100",
      iconBg: "from-teal-400 to-teal-600",
    },
    {
      title: "Halal Food Tracker",
      desc: "Ensure your food is halal with smart logging system.",
      icon: "🍽️",
      bg: "from-lime-50 to-lime-100",
      iconBg: "from-lime-400 to-lime-600",
    },
    {
      title: "Islamic Score",
      desc: "Get a daily spiritual score based on your habits.",
      icon: "⭐",
      bg: "from-yellow-50 to-yellow-100",
      iconBg: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Smart Reminders",
      desc: "Never miss Jumu’ah, Ramadan, or Tahajjud again.",
      icon: "⏰",
      bg: "from-cyan-50 to-cyan-100",
      iconBg: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          How it works
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Everything you need to build a consistent Islamic lifestyle.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className={`group rounded-2xl p-6 shadow-md border 
            bg-gradient-to-br ${item.bg} 
            hover:shadow-2xl transition duration-300 hover:-translate-y-2`}
          >

            {/* Icon */}
            <div
              className={`w-14 h-14 flex items-center justify-center text-2xl rounded-xl text-white 
              bg-gradient-to-r ${item.iconBg} shadow-md 
              group-hover:scale-110 transition`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;