// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-lg mb-4">
            Making the world a better place through constructing elegant financial hierarchies.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaXTwitter /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left mb-10">
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Analytics</a></li>
              <li><a href="#" className="hover:text-white">Automation</a></li>
              <li><a href="#" className="hover:text-white">Commerce</a></li>
              <li><a href="#" className="hover:text-white">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p className="mb-2">© 2025 FinEdge Inc. All rights reserved.</p>
          <p className="text-amber-400 font-medium">
            Made with ❤️ by <span className="font-semibold">Team Winters</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
