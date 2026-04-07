import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Join over 50,000+ ambitious young leaders</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Empower Your Future with <span className="text-indigo-600">GrowthHub</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Unlock world-class scholarships, internships, and educational resources designed to accelerate your personal and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.success("Redirecting to opportunities...")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.info("Check out our learning paths!")}
                className="bg-white border-2 border-gray-100 hover:border-indigo-100 px-8 py-4 rounded-xl font-bold text-gray-700 flex items-center justify-center gap-2 transition-all"
              >
                Browse Courses
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-500">Scholarships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">200+</p>
                <p className="text-sm text-gray-500">Partner Orgs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50k+</p>
                <p className="text-sm text-gray-500">Global Youth</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/hero-students-f9d70783-1775588239896.webp"
                alt="Growth Hub Students"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4"
            >
              <div className="bg-green-100 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">New Course</p>
                <p className="text-xs text-gray-500">UX Design Essentials</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4"
            >
              <div className="bg-orange-100 p-2 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Application Open</p>
                <p className="text-xs text-gray-500">Tech Leadership Program</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;