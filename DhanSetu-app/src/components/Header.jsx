// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white shadow-md">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://dynamic.design.com/preview/logodraft/d1324f55-9025-4285-96aa-f411c44325f2/image/large.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">DhanSetu</h1>
      </div>

      {/* Right side - Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
