"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Shield, TrendingUp, Users, Cloud } from 'lucide-react';

export default function CloudStrategyAssessment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const advantages = [
    {
      title: "Comprehensive Reports",
      description: "Detailed analyses of your IT landscape, cloud compatibility, migration options, and cost projections.",
      delay: 0.1
    },
    {
      title: "Actionable Recommendations",
      description: "Practical guidance on optimizing your infrastructure, choosing the right cloud platform, and ensuring a seamless migration.",
      delay: 0.2
    },
    {
      title: "Security & Compliance Strategies",
      description: "Tailored plans to address your security and compliance needs in the cloud, giving you peace of mind.",
      delay: 0.3
    },
    {
      title: "Risk Management Framework",
      description: "Proactive strategies to minimize potential risks and ensure a successful cloud journey.",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Assessment Advantages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ENPL's Assessment Advantage:
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our cloud assessment isn't just a checklist - it's a collaboration. We work closely with you, understanding your business goals and aspirations for the cloud. We deploy cutting-edge tools and leverage our vast experience to deliver:
              </p>
            </motion.div>

            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: advantage.delay }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Holographic Digital Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Digital Screen Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-indigo-800 to-cyan-800">
                {/* Holographic Icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-16 left-16 w-12 h-12 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 flex items-center justify-center"
                >
                  <Cloud size={20} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-24 right-20 w-10 h-10 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 flex items-center justify-center"
                >
                  <Shield size={16} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute top-32 left-24 w-8 h-8 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 flex items-center justify-center"
                >
                  <TrendingUp size={14} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="absolute bottom-24 right-16 w-10 h-10 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 flex items-center justify-center"
                >
                  <Users size={16} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="absolute bottom-32 left-20 w-8 h-8 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 flex items-center justify-center"
                >
                  <CheckCircle size={14} className="text-white" />
                </motion.div>
              </div>

              {/* Hand Touching Screen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-8 right-8"
              >
                {/* Hand */}
                <div className="w-12 h-16 bg-yellow-200 rounded-full relative">
                  <div className="absolute -top-1 left-1 w-2 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-1 left-3 w-2 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-1 left-5 w-2 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-1 left-7 w-2 h-3 bg-yellow-300 rounded-full"></div>
                </div>
                
                {/* Index Finger Extended */}
                <div className="absolute -top-2 left-5 w-2 h-4 bg-yellow-300 rounded-full transform rotate-12"></div>
              </motion.div>

              {/* Glowing Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 1.7 }}
                  d="M 100 100 L 200 150 L 300 100 M 150 200 L 250 180 L 350 200"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 2.0 }}
                  d="M 120 250 L 220 220 L 320 240"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
              </svg>

              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 2.2 + i * 0.1 }}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${10 + Math.floor(i / 4) * 20}%`
                    }}
                  />
                ))}
              </div>

              {/* Lens Flare Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-t from-cyan-400 to-transparent rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
