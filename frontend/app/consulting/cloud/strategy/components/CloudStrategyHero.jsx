"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, ArrowUp, ArrowDown, Database, Server, Zap } from 'lucide-react';

export default function CloudStrategyHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
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
          className="absolute top-32 right-16 w-3 h-3 bg-purple-400 rounded-full"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4">
                Cloud Assessment
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Charting Your Course to the Cloud with ENPL Office Automation
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A storage service refers to the infrastructure, systems, and strategies designed to efficiently and securely store, manage, and access data. It encompasses various technologies, architectures, and methodologies aimed at addressing the storage needs of organizations while ensuring data reliability, availability, and scalability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Isometric Illustration */}
          <motion.div
            style={{ y, opacity }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-96">
              {/* Central Cloud */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full relative"
              >
                <div className="absolute -top-2 -left-2 w-20 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="absolute -top-1 -right-2 w-20 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="absolute -bottom-2 left-4 w-16 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                
                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-8 bg-white bg-opacity-30 rounded flex items-center justify-center">
                      <div className="w-8 h-6 bg-white bg-opacity-40 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Server Racks */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-8 left-8 w-16 h-24 bg-gray-600 rounded-lg opacity-80"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-8 right-8 w-16 h-24 bg-gray-600 rounded-lg opacity-80"
              />

              {/* Human Figures */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-8 left-8 w-8 h-12 bg-blue-200 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-8 bg-blue-300 rounded-full"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-16 right-16 w-8 h-12 bg-green-200 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-8 bg-green-300 rounded-full"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute bottom-16 left-16 w-8 h-12 bg-purple-200 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-8 bg-purple-300 rounded-full"></div>
              </motion.div>

              {/* Network Connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                  d="M 200 150 L 100 80 L 200 150 L 300 80 M 100 200 L 200 150 L 300 200"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
              </svg>

              {/* Floating Data Elements */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + (i % 3) * 20}%`,
                      top: `${15 + Math.floor(i / 3) * 20}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-10 right-10 text-gray-400 text-center"
      >
        <div className="text-2xl font-bold">ENPL</div>
        <div className="text-sm">Integrating Technology | Driving Growth</div>
      </motion.div>
    </section>
  );
}
