import React from 'react';
import { Link } from 'react-router'; // If you're using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              Our app helps you track your daily Islamic practices including prayers, Quran reading, and halal food consumption. Stay connected to your faith with ease.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-400 hover:text-yellow-400">Settings</Link>
              </li>
              <li>
                <Link to="/special-modes" className="text-gray-400 hover:text-yellow-400">Special Modes</Link>
              </li>
              <li>
                <Link to="/analytics-reports" className="text-gray-400 hover:text-yellow-400">Analytics & Reports</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2026 Islamic App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;