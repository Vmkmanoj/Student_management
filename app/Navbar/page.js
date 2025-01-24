"use client"

import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-gray-100 rounded-full shadow-lg focus:outline-none"
        onClick={toggleMenu}
      >
        <MenuOutlined className="text-xl text-gray-700" />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-200 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 z-10`}
      >
        <ul className="flex flex-col space-y-4 p-6 mt-20">
          <li>
            <Link href="/" legacyBehavior>
              <a className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
                <span className="mr-2 text-lg">➕</span> Add Student
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ViewStudent" legacyBehavior>
              <a className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
                <span className="mr-2 text-lg">👤</span> View Student
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-5"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
