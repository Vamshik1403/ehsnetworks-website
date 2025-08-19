"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function RemoteManagedServicesBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How ENPL's Remote Managed Services are better :
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Expertise</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Reliability</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Security</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Scalability</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Flexibility</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Cost-effectiveness</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Peace of mind</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Gear Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Central Gear with IT Tools Illustration */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                {/* Central Gear */}
                <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center relative mb-4">
                  <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  
                  {/* Gear Teeth */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-yellow-600 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-yellow-600 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-yellow-600 rounded-full"></div>
                  </div>
                </div>

                {/* Surrounding IT Tools */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🔧</span>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🪛</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🛡️</span>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">👤</span>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">⚙️</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
