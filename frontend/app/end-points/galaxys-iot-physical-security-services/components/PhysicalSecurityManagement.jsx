"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PhysicalSecurityManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
            Unified Physical Security Management
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Converged Security Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ENPL's converged security solutions empower your physical security teams with a unified platform to manage and optimise their operations. We provide comprehensive visibility, control, and automation across all your physical security devices, including surveillance cameras, access control systems, sensors, and life safety equipment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our solutions enable proactive monitoring and remediation, automate critical tasks, and enhance security measures across your entire infrastructure. We help you streamline workflows, reduce manual intervention, and improve the efficiency of your security operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our data-driven insights and integrated risk management tools, you can strengthen your security posture and ensure the safety and security of your people and assets.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Security Network Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Security Network */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                {/* Central Cloud */}
                <div className="w-32 h-20 bg-blue-500 rounded-2xl mx-auto mb-4 relative">
                  <div className="absolute inset-2 bg-blue-400 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-bold">☁️</div>
                      <div className="text-xs mt-1">Security</div>
                    </div>
                  </div>
                </div>

                {/* Security Devices Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Laptop */}
                  <div className="w-12 h-8 bg-gray-300 rounded border border-gray-400 flex items-center justify-center">
                    <span className="text-xs">💻</span>
                  </div>
                  
                  {/* Server Rack */}
                  <div className="w-12 h-12 bg-gray-600 rounded border border-gray-500 flex items-center justify-center">
                    <span className="text-xs text-white">🖥️</span>
                  </div>
                  
                  {/* Mobile Phone */}
                  <div className="w-8 h-12 bg-gray-300 rounded border border-gray-400 flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  
                  {/* Tablet */}
                  <div className="w-12 h-8 bg-gray-300 rounded border border-gray-400 flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  
                  {/* Document */}
                  <div className="w-8 h-10 bg-gray-300 rounded border border-gray-400 flex items-center justify-center">
                    <span className="text-xs">📄</span>
                  </div>
                  
                  {/* Shield */}
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🛡️</span>
                  </div>
                  
                  {/* Lock */}
                  <div className="w-8 h-10 bg-blue-500 rounded border border-blue-400 flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                  
                  {/* Camera */}
                  <div className="w-10 h-8 bg-red-500 rounded border border-red-400 flex items-center justify-center">
                    <span className="text-white text-xs">📹</span>
                  </div>
                </div>

                {/* Connecting Network Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path d="M 100 40 Q 120 60 140 80" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 100 40 Q 80 60 60 80" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 100 40 Q 100 60 100 80" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 60 120 Q 80 140 100 160" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 140 120 Q 120 140 100 160" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 100 120 Q 100 140 100 160" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
