"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NetworkInfrastructureOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            ENPL Network Infrastructure Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Network Infrastructure Management services are essential for organizations of all sizes, as they help to ensure that networks are reliable, secure, and meet the needs of the business. However, Network Infrastructure Management can be a complex and time-consuming task.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-blue-100">Contact us today to discuss your network infrastructure needs</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900"
              />
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
