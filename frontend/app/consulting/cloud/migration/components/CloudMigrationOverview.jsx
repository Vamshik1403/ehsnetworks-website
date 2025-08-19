"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Zap, Shield, TrendingUp, Users, Globe, Server, Database } from 'lucide-react';

export default function CloudMigrationOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Zap,
      title: "Unleash Agility",
      description: "Escape the confines of rigid hardware. Scale your resources effortlessly to meet fluctuating demands and capitalize on new opportunities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Reduce Costs",
      description: "Ditch the high overhead of on-premises maintenance. Pay only for the resources you use and watch your IT budget take flight.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Boost Productivity",
      description: "Empower your team with anywhere, anytime access to data and applications. Collaboration soars to new heights.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enhance Security",
      description: "Leave data breaches in the dust. Our robust cloud security solutions offer superior protection for your valuable information.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Server,
      title: "Increase Reliability",
      description: "Ditch downtime dramas. The cloud's resilient infrastructure ensures your operations never miss a beat.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Industrial Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Industrial Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-blue-900">
                {/* Server Racks */}
                <div className="absolute bottom-8 left-8 w-16 h-24 bg-gray-600 rounded-lg opacity-60"></div>
                <div className="absolute bottom-8 left-28 w-16 h-24 bg-gray-600 rounded-lg opacity-60"></div>
                <div className="absolute bottom-8 right-8 w-16 h-24 bg-gray-600 rounded-lg opacity-60"></div>
                
                {/* Conveyor Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-500 opacity-40"></div>
                <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-500 opacity-40"></div>
                <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-500 opacity-40"></div>
              </div>

              {/* Digital Network Overlay */}
              <div className="absolute inset-0">
                {/* Network Lines */}
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M 50 50 L 150 100 L 250 80 L 350 120 M 100 200 L 200 150 L 300 180"
                    stroke="#00D4FF"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.8"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    d="M 80 250 L 180 200 L 280 220 L 320 180"
                    stroke="#00D4FF"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>

                {/* Digital Icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute top-8 left-8 w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center"
                >
                  <Cloud size={16} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="absolute top-16 right-16 w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center"
                >
                  <Server size={16} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="absolute bottom-16 left-16 w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center"
                >
                  <Database size={16} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                  className="absolute bottom-24 right-24 w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center"
                >
                  <Globe size={16} className="text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Migrate to the Cloud with ENPL?
              </h2>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon && React.createElement(benefit.icon, { size: 24, className: "text-white" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
