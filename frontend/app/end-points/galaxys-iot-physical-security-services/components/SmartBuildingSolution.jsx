"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SmartBuildingSolution() {
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
            Intelligent Smart Building and Management Solution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Smart Home Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Smart Home Scene */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                {/* Living Room */}
                <div className="w-64 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border-2 border-gray-200 relative">
                  {/* TV */}
                  <div className="absolute top-4 left-4 w-16 h-10 bg-gray-800 rounded border border-gray-600"></div>
                  
                  {/* Sofa */}
                  <div className="absolute bottom-4 left-8 w-20 h-8 bg-gray-600 rounded border border-gray-500"></div>
                  
                  {/* Furniture */}
                  <div className="absolute bottom-4 right-8 w-12 h-6 bg-gray-500 rounded border border-gray-400"></div>
                  
                  {/* Smart Home Icons Overlay */}
                  <div className="absolute inset-0">
                    {/* WiFi */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📶</span>
                    </div>
                    
                    {/* Lightbulb */}
                    <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💡</span>
                    </div>
                    
                    {/* Gear */}
                    <div className="absolute top-14 right-4 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">⚙️</span>
                    </div>
                    
                    {/* Lock */}
                    <div className="absolute top-20 right-10 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔒</span>
                    </div>
                    
                    {/* Camera */}
                    <div className="absolute top-26 right-6 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📹</span>
                    </div>
                    
                    {/* Battery */}
                    <div className="absolute top-32 right-12 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔋</span>
                    </div>
                    
                    {/* Person */}
                    <div className="absolute top-38 right-8 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👤</span>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <path d="M 160 20 Q 180 40 160 60" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                    <path d="M 160 60 Q 180 80 160 100" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                    <path d="M 160 100 Q 180 120 160 140" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                    <path d="M 160 140 Q 180 160 160 180" stroke="cyan" strokeWidth="2" fill="none" opacity="0.8"/>
                  </svg>
                </div>
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
                Smart Building Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transform your buildings and campuses into intelligent, responsive environments with ENPL's smart building solutions. We offer a comprehensive suite of services that optimise building operations, enhance occupant experiences, and improve energy efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our solutions address the unique challenges of managing diverse IoT devices in modern workspaces, ensuring seamless connectivity, optimal performance, and enhanced security. We provide proactive monitoring and management of all building systems, from AV equipment and sensors to security systems and HVAC controls.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our solutions automate critical tasks, such as room sweeps and issue resolution, ensuring a smooth and productive environment for occupants. With our data-driven insights, you can optimise space utilisation, reduce energy consumption, and improve the overall efficiency of your buildings and campuses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
