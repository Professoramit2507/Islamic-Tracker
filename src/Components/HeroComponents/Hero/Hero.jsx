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
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
//           <button
//             onClick={nextSlide}
//             className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
//           >
//             &#8594; {/* Right arrow */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";

// Images for testing
import img1 from "../../../assets/6804.jpg";
import img2 from "../../../assets/islamic-mosque-door-with-moon-palm-trees-night.jpg";
import img3 from "../../../assets/top-view-islamic-new-year-concept.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  // Testing Image Load by logging paths
  console.log("Current Image Path:", images[currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
    {/* Left Section - Text */}
<div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left flex flex-col justify-center">

  {/* Small badge */}
  <span className="inline-block w-fit mx-auto md:mx-0 mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
    ✨ Islamic Habit Tracker
  </span>

  {/* Main Heading */}
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
    Build Your{" "}
    <span className="text-green-600">Islamic Routine</span>
    <br />
    Every Single Day
  </h1>

  {/* Subtitle */}
  <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
    Track your <span className="font-semibold text-gray-800">prayers</span>, 
    improve your <span className="font-semibold text-gray-800">Quran reading</span>, 
    maintain <span className="font-semibold text-gray-800">zikr</span>, and ensure 
    <span className="font-semibold text-gray-800"> halal lifestyle</span> — all in one place.
  </p>

  {/* Buttons */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
      Get Started
    </button>

    <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full transition duration-300">
      Learn More
    </button>

  </div>

  {/* Small stats */}
  <div className="mt-10 flex gap-6 justify-center md:justify-start text-sm text-gray-600">
    <div>
      <p className="text-2xl font-bold text-gray-800">5+</p>
      <p>Daily Prayers</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-800">100%</p>
      <p>Halal Tracking</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-800">24/7</p>
      <p>Reminder System</p>
    </div>
  </div>

</div>

      {/* Right Section - Carousel */}
      <div className="w-1/2 relative">
        {/* Debugging: Just test to see if image is showing */}
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-125 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

