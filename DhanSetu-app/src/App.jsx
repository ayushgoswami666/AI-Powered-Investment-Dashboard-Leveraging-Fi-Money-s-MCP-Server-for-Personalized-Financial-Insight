import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#fff8e1]">
      {/* Header */}
      <Header />

      {/* Main Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot Widget (visible on all pages) */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
