import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [count, setCount] = useState({
    users: 0,
    rating: 0,
    actions: 0,
    discipline: 0,
  });

  useEffect(() => {
    let start = 0;
    const steps = 60;
    const interval = 1500 / steps;

    const timer = setInterval(() => {
      start++;

      setCount({
        users: Math.min(Math.floor((2507 / steps) * start), 2507),
        rating: Math.min(((4.8 / steps) * start).toFixed(1), 4.8),
        actions: Math.min(Math.floor((25000 / steps) * start), 25000),
        discipline: Math.min(Math.floor((90 / steps) * start), 90),
      });

      if (start === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "Active Users",
      value: count.users,
      suffix: "+",
      icon: "👥",
    },
    {
      label: "App Rating",
      value: count.rating,
      suffix: "★",
      icon: "⭐",
    },
    {
      label: "Daily Actions",
      value: count.actions,
      suffix: "+",
      icon: "📊",
    },
    {
      label: "Improved Discipline",
      value: count.discipline,
      suffix: "%",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gray-200 text-black">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Statistics / Social Proof
        </h1>

        {/* FLEX ROW */}
        <div className="flex flex-col md:flex-row gap-6 justify-between">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 flex-1 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Icon */}
              <span className="text-3xl">{item.icon}</span>

              {/* Text */}
              <div>
                <p className="text-2xl font-bold">
                  {item.value}
                  {item.suffix}
                </p>
                <p className="text-sm text-black">{item.label}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;