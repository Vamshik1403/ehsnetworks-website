"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Zap } from 'lucide-react';

export default function ProductOverview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Simple Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              {/* Large Simple Icon */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-16 shadow-2xl flex items-center justify-center">
                <Monitor size={120} className="text-blue-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                ENDPOINTS
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                From the lightest laptops, desktops, the most powerful workstations to mini PC's, 
                you have a wide variety of choices. We help you choose the right business computer, 
                matching devices to user needs, applications, and style—ensuring productivity and 
                cost-effectiveness for your business.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are Platinum, Gold & Silver partners of Major IT Brands & have a broad 
                assortment of business computers that give individual workers the tools they 
                need to stay productive & connected.
              </p>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              GET APPOINTMENT
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

