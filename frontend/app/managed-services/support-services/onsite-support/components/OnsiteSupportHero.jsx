"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle, TrendingUp, Users, Database, Server, MapPin, Clock } from 'lucide-react';

export default function OnsiteSupportHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-32 right-16 w-3 h-3 bg-emerald-400 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-32 left-32 w-2 h-2 bg-teal-400 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="w-16 h-1 bg-green-500 rounded-full mb-4"></div>
                <h1 className="text-2xl font-bold text-gray-600 mb-2">ENPL's</h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Onsite Support
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Professional on-site technical support and maintenance services. Our expert engineers visit your location to provide hands-on assistance and ensure your IT infrastructure operates at peak performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule Onsite Visit
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Isometric Illustration */}
          <motion.div
            style={{ y, opacity }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-96">
              {/* Central Onsite Support Scene */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl"
              >
                {/* Engineer */}
                <div className="absolute bottom-8 left-8 w-16 h-24 bg-white rounded-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-200 rounded-full"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Server Rack */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gray-800 rounded-lg border-2 border-gray-600">
                  <div className="absolute inset-1 bg-green-500 rounded flex items-center justify-center">
                    <Server size={20} className="text-white" />
                  </div>
                </div>

                {/* Location Pin */}
                <div className="absolute top-16 left-16 w-8 h-8 bg-red-400 rounded-lg opacity-80 flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>

                {/* Clock Icon */}
                <div className="absolute top-24 right-16 w-8 h-8 bg-yellow-400 rounded-lg opacity-80 flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>

                {/* Tools */}
                <div className="absolute top-32 left-24 w-8 h-8 bg-blue-400 rounded-lg opacity-80 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">🔧</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
