// src/components/Body.jsx
import React from "react";

const Body = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 text-center min-h-screen">
      {/* Slogan */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Paise se <span className="text-amber-600">Pragati</span> Tak ka Setu
      </h1>

      {/* About the app */}
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        DhanSetu ek smart fintech app hai jo aapke kharchon aur investments ko 
        samajhne, plan karne aur badhane me madad karta hai. 
        Financial growth ab bas ek tap door!
      </p>

      {/* Get Started Button */}
      <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 mb-14">
        Get Started
      </button>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
          <div className="text-amber-600 text-4xl mb-4">💰</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Smart Expense Tracking
          </h2>
          <p className="text-gray-700">
            Apne har kharche ka record rakho aur insights pao — 
            smart, automated aur secure.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
          <div className="text-amber-600 text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            AI Financial Insights
          </h2>
          <p className="text-gray-700">
            AI ke zariye apne spending habits ka analysis karo aur 
            apne goals ke liye smart recommendations lo.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
          <div className="text-amber-600 text-4xl mb-4">🔐</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Secure Cloud Sync
          </h2>
          <p className="text-gray-700">
            Apna data cloud par securely store karo aur kahin bhi, 
            kabhi bhi apne finances manage karo.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Body;
