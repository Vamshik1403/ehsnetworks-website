"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function IoTManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Comprehensive IOT and Edge Device Management
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - IoT Devices Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* IoT Devices Network */}
              <div className="bg-blue-800 rounded-2xl p-8 shadow-2xl">
                {/* Cloud with Gears */}
                <div className="w-48 h-32 bg-blue-600 rounded-lg border-2 border-blue-400 mb-4 relative">
                  <div className="absolute inset-2 bg-blue-500 rounded flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-bold">☁️</div>
                      <div className="text-xs mt-1">⚙️⚙️</div>
                    </div>
                  </div>
                </div>
                
                {/* Device Grid */}
                <div className="grid grid-cols-4 gap-2">
                  {/* Server Racks */}
                  <div className="w-8 h-12 bg-gray-600 rounded border border-gray-400"></div>
                  <div className="w-8 h-12 bg-gray-600 rounded border border-gray-400"></div>
                  
                  {/* Smart Devices */}
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🎧</span>
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🎮</span>
                  </div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💡</span>
                  </div>
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🥽</span>
                  </div>
                  
                  {/* Security & Infrastructure */}
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📹</span>
                  </div>
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌪️</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🚗</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">☀️</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🏠</span>
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🛡️</span>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path d="M 100 40 Q 120 60 140 80" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 60 80 Q 80 100 100 120" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 140 120 Q 120 140 100 160" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ENPL's IoT Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ENPL offers a comprehensive suite of services to manage the entire lifecycle of your Internet of Things (IoT) devices. We provide end-to-end solutions that ensure your connected devices are always secure, optimised, and performing at their peak.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our services encompass everything from real-time monitoring and automated diagnostics to predictive maintenance and robust security measures. We help you gain complete visibility and control over your IoT ecosystem, streamline asset management, and automate critical tasks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our expertise, you can maximise the value of your IoT investment while ensuring optimal performance and security across all your connected devices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
