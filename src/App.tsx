import React from "react";
import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import OpportunityCard from "./components/opportunities/OpportunityCard";
import CourseCard from "./components/education/CourseCard";
import Footer from "./components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp, Trophy, ArrowRight, BookOpen, GraduationCap, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const App = () => {
  const opportunities = [
    {
      title: "Global Excellence Scholarship 2024",
      category: "Scholarship",
      organization: "World Education Fund",
      location: "Online / International",
      deadline: "Oct 15, 2024",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/scholarship-thumb-2f57f2f6-1775588240533.webp",
    },
    {
      title: "Full-Stack Developer Intern",
      category: "Internship",
      organization: "Tech Innovators Lab",
      location: "San Francisco (Remote)",
      deadline: "Sep 30, 2024",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/tech-course-thumb-5aff95cb-1775588240101.webp",
    },
    {
      title: "Youth Leadership Summit 2024",
      category: "Workshop",
      organization: "Global Youth Council",
      location: "Singapore",
      deadline: "Nov 01, 2024",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/hero-students-f9d70783-1775588239896.webp",
    },
    {
      title: "Creative Arts Grant for Under 25s",
      category: "Grant",
      organization: "Arts for All Foundation",
      location: "Worldwide",
      deadline: "Dec 10, 2024",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/mentorship-thumb-bf3c2f28-1775588243389.webp",
    },
  ];

  const courses = [
    {
      title: "UI/UX Design Masterclass 2024",
      author: "Sarah Johnson",
      duration: "12h 45m",
      students: "12.5k",
      rating: 4.8,
      category: "Design",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/scholarship-thumb-2f57f2f6-1775588240533.webp",
    },
    {
      title: "Advanced React Patterns",
      author: "David Chen",
      duration: "8h 20m",
      students: "8.2k",
      rating: 4.9,
      category: "Development",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/tech-course-thumb-5aff95cb-1775588240101.webp",
    },
    {
      title: "Digital Marketing Strategy",
      author: "Emma Williams",
      duration: "10h 15m",
      students: "15.1k",
      rating: 4.7,
      category: "Marketing",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/mentorship-thumb-bf3c2f28-1775588243389.webp",
    },
    {
      title: "Entrepreneurship Essentials",
      author: "Michael Brown",
      duration: "6h 50m",
      students: "5.4k",
      rating: 4.6,
      category: "Business",
      imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/hero-students-f9d70783-1775588239896.webp",
    },
  ];

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "Verified Scholarships",
      description: "Access curated scholarships that match your academic and extracurricular profile.",
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      title: "Skill Bootcamps",
      description: "Intensive training programs to get you ready for the high-demand tech jobs of tomorrow.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Expert Mentorship",
      description: "Connect with professionals who can guide you through career choices and applications.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Career Tracking",
      description: "Tools to track your applications, learning progress, and overall professional growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFB]">
      <Toaster position="top-right" richColors />
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GrowthHub?</h2>
              <p className="text-gray-600">
                We bridge the gap between young ambition and professional success with tools designed for today's dynamic world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-[#FAFAFB] border border-gray-50 hover:border-indigo-100 hover:shadow-lg transition-all group"
                >
                  <div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section id="opportunities" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Opportunities</h2>
                <p className="text-gray-600">
                  Don't miss out on these hand-picked scholarships and career-starting internships.
                </p>
              </div>
              <Button variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                See All Opportunities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opp, idx) => (
                <OpportunityCard key={idx} {...opp} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-indigo-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-800/30 skew-x-12 transform translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
                <p className="text-indigo-100">
                  Master the skills of the future with our industry-leading online programs.
                </p>
              </div>
              <Button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold px-8">
                Go to Hub
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-2">
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section id="mentorship" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5502c495-36ad-44de-851b-54bbaccf594d/mentorship-thumb-bf3c2f28-1775588243389.webp"
                  alt="Mentorship"
                  className="rounded-3xl shadow-2xl border-4 border-white"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Accelerate Your Path with 1-on-1 Mentorship
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Connect with industry professionals from top companies like Google, Microsoft, and McKinsey. Get personalized advice, resume reviews, and interview prep.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Direct access to 500+ global mentors",
                    "Personalized career roadmap",
                    "Resume and portfolio feedback",
                    "Networking opportunities"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-lg rounded-xl shadow-xl shadow-indigo-100">
                  Find a Mentor
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
              </div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Ready to start your growth journey?
                </h2>
                <p className="text-indigo-100 text-lg mb-10 opacity-90">
                  Join thousands of young people unlocking their potential. It's free to get started and takes less than a minute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-7 text-xl font-bold rounded-2xl">
                    Get Started Free
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-xl font-bold rounded-2xl">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;