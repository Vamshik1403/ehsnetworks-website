"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, ArrowUp, ArrowDown, Database, Server, Zap } from 'lucide-react';

export default function CloudMigrationHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Background Shapes */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full">
                Cloud Migration
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Embark on Your Cloud Migration Journey with{' '}
              <span className="text-red-600">ENPL Office Automation</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              ENPL Office Automation is your expert navigator, guiding you on a seamless, 
              efficient cloud migration journey that unlocks limitless possibilities for your business.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Zap size={20} />
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600/10 transition-all duration-300 flex items-center gap-2"
              >
                <Cloud size={20} />
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Cloud Icon */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
              >
                <Cloud size={64} className="text-blue-500" />
              </motion.div>

              {/* Platform */}
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-32 bg-white rounded-2xl shadow-xl"></div>

              {/* Left Person Setup */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "0.5s" }}
                className="absolute top-48 left-8 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="w-20 h-16 bg-orange-400 rounded-lg flex items-center justify-center relative">
                  <ArrowUp size={24} className="text-white" />
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full"></div>
                </div>
              </motion.div>

              {/* Right Person Setup */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute top-48 right-8 flex items-center gap-4"
              >
                <div className="w-20 h-16 bg-blue-600 rounded-lg flex items-center justify-center relative">
                  <ArrowDown size={24} className="text-white" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  d="M 200 32 L 120 200 M 200 32 L 280 200"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
