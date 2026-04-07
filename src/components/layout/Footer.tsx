import React from "react";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Briefcase, Users, Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">GrowthHub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of leaders through education, mentorship, and boundless opportunities for growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Internships</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Bootcamps</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Competitions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Career Guide</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mentorship Program</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog & News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest opportunities for your growth.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {currentYear} GrowthHub Platform. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;