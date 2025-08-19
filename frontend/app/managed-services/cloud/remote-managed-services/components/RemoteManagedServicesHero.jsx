"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function RemoteManagedServicesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-32 right-16 w-3 h-3 bg-indigo-400 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-32 left-32 w-2 h-2 bg-cyan-400 rounded-full"
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
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 relative">
                {/* Background Shapes */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-400 rounded-2xl opacity-20 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 -z-10"></div>
                
                {/* Blue Accent */}
                <div className="w-16 h-1 bg-blue-500 rounded-full mb-4"></div>
                <h1 className="text-2xl font-bold text-gray-600 mb-2">ENPL's</h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Remote Managed Services
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
                Professional remote IT management services to ensure your systems are monitored, maintained, and optimized 24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Explore Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Remote Managed Services Illustration */}
          <motion.div
            style={{ y, opacity }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-96">
              {/* Central Remote Services Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-2xl border-4 border-blue-300"
              >
                {/* Laptop with Charts */}
                <div className="absolute top-8 left-16 w-20 h-16 bg-white rounded-lg border-2 border-gray-300">
                  <div className="absolute inset-2 bg-blue-900 rounded flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xs">📊</div>
                      <div className="text-xs mt-1">Data</div>
                    </div>
                  </div>
                </div>

                {/* Server Racks */}
                <div className="absolute top-16 right-8 w-16 h-20 bg-gray-700 rounded-lg border-2 border-gray-500">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="w-4 h-3 bg-green-500 rounded border border-green-400"></div>
                    <div className="w-4 h-3 bg-green-500 rounded border border-green-400"></div>
                    <div className="w-4 h-3 bg-blue-500 rounded border border-blue-400"></div>
                    <div className="w-4 h-3 bg-blue-500 rounded border border-blue-400"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-24 left-8 w-8 h-8 bg-yellow-400 rounded-lg opacity-80 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">📈</span>
                </div>

                <div className="absolute top-32 right-20 w-6 h-6 bg-white rounded-lg opacity-80 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">📄</span>
                </div>

                <div className="absolute top-40 left-24 w-8 h-8 bg-gray-300 rounded-full opacity-80 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">👤</span>
                </div>

                <div className="absolute top-48 right-12 w-6 h-6 bg-white rounded-lg opacity-80 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">🏢</span>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path d="M 80 80 Q 100 60 120 80" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 120 80 Q 140 100 120 120" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 80 120 Q 100 140 120 120" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 100 40 Q 120 60 140 80" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 60 80 Q 80 100 100 120" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
