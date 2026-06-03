import React from "react";
import { Link } from "react-router"; // For navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-white text-xl font-semibold">
          <Link to="/">Islamic App</Link>
        </div>

        {/* Menu for Desktop & Tablet */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white text-sm hover:text-green-400">
            Home
          </Link>
          <Link
            to="/prayer-tracking"
            className="text-white text-sm hover:text-green-400"
          >
            Prayer Tracking
          </Link>
          <Link
            to="/quran-spiritual"
            className="text-white text-sm hover:text-green-400"
          >
            Quran & Spiritual
          </Link>
          <Link to="/zikr-tasbih" className="text-white text-sm hover:text-green-400">
            Zikr & Tasbih
          </Link>
          <Link
            to="/halal-food-tracker"
            className="text-white text-sm hover:text-green-400"
          >
            Halal Food Tracker
          </Link>
          <Link
            to="/summary"
            className="text-white text-sm hover:text-green-400"
          >
            Daily Summary
          </Link>
          <Link
            to="/analytics"
            className="text-white text-sm hover:text-green-400"
          >
            Analytics & Reports
          </Link>
          <Link to="/settings" className="text-white text-sm hover:text-green-400">
            Settings
          </Link>
          <Link
            to="/special-modes"
            className="text-white text-sm hover:text-green-400"
          >
            Special Modes
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shown on click) */}
      <div className="md:hidden flex flex-col space-y-4 mt-4">
        <Link to="/home" className="text-white hover:text-yellow-400">
          Home
        </Link>
        <Link
          to="/prayer-tracking"
          className="text-white hover:text-yellow-400"
        >
          Prayer Tracking
        </Link>
        <Link
          to="/quran-spiritual"
          className="text-white hover:text-yellow-400"
        >
          Quran & Spiritual
        </Link>
        <Link to="/zikr-tasbih" className="text-white hover:text-yellow-400">
          Zikr & Tasbih
        </Link>
        <Link
          to="/halal-food-tracker"
          className="text-white hover:text-yellow-400"
        >
          Halal Food Tracker
        </Link>
        <Link to="/daily-summary" className="text-white hover:text-yellow-400">
          Daily Summary
        </Link>
        <Link
          to="/analytics-reports"
          className="text-white hover:text-yellow-400"
        >
          Analytics & Reports
        </Link>
        <Link to="/settings" className="text-white hover:text-yellow-400">
          Settings
        </Link>
        <Link to="/special-modes" className="text-white hover:text-yellow-400">
          Special Modes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
