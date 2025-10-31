// src/components/Header.jsx
import React from "react";
import { SignInButton, SignUpButton, UserButton, useAuth, SignedIn, SignedOut } from "@clerk/clerk-react";

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
      <div className="space-x-4 flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition">
              Login
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-amber-500 rounded-lg hover:bg-amber-600 text-white transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          {/* UserButton shows avatar + menu (sign out) */}
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
