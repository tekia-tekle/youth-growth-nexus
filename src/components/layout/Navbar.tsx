import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, GraduationCap, Briefcase, Users, MessageSquare, ChevronRight, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Opportunities", href: "#opportunities" },
    { name: "Education", href: "#education" },
    { name: "Mentorship", href: "#mentorship" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? "text-indigo-900" : "text-indigo-900"}`}>
              GrowthHub
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => toast.info("Search feature coming soon!")}>
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => toast.success("Redirecting to signup...")}>
                Join Hub
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-indigo-600" onClick={() => {setIsOpen(false); toast.success("Welcome aboard!");}}>
                  Join Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;