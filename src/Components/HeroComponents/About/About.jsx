import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-32 px-6 md:px-16 bg-gradient-to-r from-gray-100 to-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          About Us
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          We are a passionate team dedicated to helping Muslims worldwide live a more 
          meaningful and consistent Islamic lifestyle. Through our innovative tools, 
          we aim to make it easier to track daily ibadah, build lasting habits, 
          and grow spiritually in a modern world.
        </p>

        <div className="flex justify-center gap-12 mt-12">

          {/* Our Mission */}
          <div className="w-full max-w-xs bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower Muslims with the tools they need to 
              stay consistent in their prayers, Quran recitation, and other 
              ibadah. We believe that consistency in small, daily actions 
              leads to major spiritual growth.
            </p>
          </div>

          {/* Our Vision */}
          <div className="w-full max-w-xs bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our vision is to build a community of Muslims who are committed 
              to living an organized and mindful Islamic lifestyle. We aim to 
              create an app that serves as a reliable partner on the journey of 
              faith, helping individuals stay on track with their daily worship and 
              personal development.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutUs;