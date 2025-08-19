"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Database, Server, Shield, CheckCircle, TrendingUp } from 'lucide-react';

export default function ITConsultingOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const consultingAreas = [
    {
      title: "Software Licence and Compliance Management",
      description: "We help you identify software inventory, measure usage and automatically link complex license entitlements. It enables IT to align software spending with business priorities. Optiserv helps conduct internal software compliance audits & optimize software license costs, and license compliance across vendors.",
      icon: FileText,
      delay: 0.1
    },
    {
      title: "Infrastructure Consolidation & Optimization",
      description: "We enable the consolidation and optimization of your data center infrastructure, servers, storage, networks & middleware software to improve agility, flexibility, reliability and reduce TCO.",
      icon: Database,
      delay: 0.2
    },
    {
      title: "Application Performance Management",
      description: "We help manage and implement tools to manage and monitor dynamic applications and complex datacenter environments. Ensure quality of service and quality of experience for your critical business applications to protect revenue, end-user productivity and customer satisfaction.",
      icon: TrendingUp,
      delay: 0.3
    },
    {
      title: "DR Strategy Consultancy",
      description: "Optiserv assists design a well-thought-out, comprehensive data center recovery solution that meets the needs of the business and to help guide businesses. Choose Recovery options, recommendations and their associated costs for enabling business functions to be highly available and to operate with minimal disruption in a disaster scenario.",
      icon: CheckCircle,
      delay: 0.4
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            IT Consulting Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT consulting services to optimize your technology infrastructure, ensure compliance, and drive operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Consulting Areas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {consultingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: area.delay }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(area.icon, { size: 24, className: "text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Digital Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-purple-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Digital Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-purple-900">
                {/* Data Visualization Elements */}
                <div className="absolute top-8 left-8 w-16 h-12 bg-purple-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">32%</span>
                </div>
                <div className="absolute top-16 right-16 w-12 h-8 bg-blue-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">NAV</span>
                </div>
                <div className="absolute top-32 left-16 w-10 h-6 bg-green-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">THG</span>
                </div>
                <div className="absolute top-40 right-8 w-14 h-10 bg-orange-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">YHR</span>
                </div>
                <div className="absolute bottom-32 left-8 w-12 h-8 bg-cyan-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">SDF</span>
                </div>
                <div className="absolute bottom-16 right-24 w-10 h-6 bg-pink-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">XMG</span>
                </div>
              </div>

              {/* Person with Magnifying Glass */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 left-8"
              >
                {/* Person */}
                <div className="w-16 h-24 bg-blue-200 rounded-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-blue-300 rounded-full"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-blue-400 rounded-full"></div>
                </div>
                
                {/* Magnifying Glass */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-gray-300">
                  <div className="absolute inset-2 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔍</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Computer Monitor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-16 right-16 w-24 h-16 bg-gray-600 rounded-lg border-2 border-gray-400"
              >
                <div className="absolute inset-1 bg-gray-800 rounded flex items-center justify-center">
                  <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                </div>
              </motion.div>

              {/* Network Connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 1.0 }}
                  d="M 50 50 L 150 100 L 250 80 L 350 120 M 100 200 L 200 150 L 300 180"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
