import React from 'react';
import error from "../../assets/404.jpg";

const Not_Found = () => {
  // Redirecting back to home on button click
  const goHome = () => {
    window.location.href = '/'; // You could also use react-router for programmatic navigation if you prefer
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-400">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        This isn't the page you're looking for.
      </h1>
      <div className="flex justify-center items-center mb-6">
        <img className="w-96" src={error} alt="404 Not Found" />
      </div>
      <button
        onClick={goHome}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Not_Found;