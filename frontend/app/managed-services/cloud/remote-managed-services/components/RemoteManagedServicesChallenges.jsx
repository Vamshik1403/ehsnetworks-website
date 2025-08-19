"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function RemoteManagedServicesChallenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Challenges Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                One of the biggest Challenges faced by many SMEs and Enterprises :
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Lack of in-house IT expertise</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Limited IT resources</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Compliance requirements</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Business continuity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Skills gaps</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Time constraints</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Technology complexity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Security threats</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Cost savings</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Uphill Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Uphill Challenge Illustration */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                {/* Uphill Path */}
                <div className="w-48 h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg border-2 border-yellow-300 relative mb-4">
                  {/* Slope Path */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-yellow-300 to-yellow-200 rounded-lg"></div>
                  
                  {/* Person Walking Uphill */}
                  <div className="absolute bottom-4 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  
                  {/* Question Mark at Top */}
                  <div className="absolute top-4 right-8 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">?</span>
                  </div>
                  
                  {/* Path Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <path d="M 40 120 Q 80 100 120 80 Q 160 60 200 40" stroke="white" strokeWidth="3" fill="none" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
