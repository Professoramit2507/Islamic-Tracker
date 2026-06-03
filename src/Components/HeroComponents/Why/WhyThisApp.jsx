import React from "react";

const WhyThisApp = () => {
  const benefits = [
    {
      title: "Build Consistent Islamic Habits",
      desc: "Develop a strong routine for daily prayers, Quran reading, and zikr to stay consistent in your deen.",
      icon: "🕌",
      bg: "from-emerald-500 to-green-600",
    },
    {
      title: "Improve Daily Ibadah Tracking",
      desc: "Easily monitor your daily worship activities and understand your spiritual progress over time.",
      icon: "📊",
      bg: "from-blue-500 to-indigo-600",
    },
    {
      title: "Stay Mindful of Halal Consumption",
      desc: "Keep track of your food habits and ensure everything you consume aligns with a halal lifestyle.",
      icon: "🍽️",
      bg: "from-lime-500 to-green-600",
    },
    {
      title: "Increase Spiritual Discipline",
      desc: "Strengthen your self-control and spiritual focus through structured reminders and habit tracking.",
      icon: "📿",
      bg: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Why This App?
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Not just features — real benefits that help you grow spiritually every day.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {benefits.map((item, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50"
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

export default WhyThisApp;