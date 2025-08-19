"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Zap, Shield, TrendingUp, Users, Globe, Server, Database } from 'lucide-react';

export default function CloudStrategyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const assessmentBenefits = [
    {
      title: "Your Current Landscape",
      description: "Analysis of existing infrastructure, applications, and data flows.",
      delay: 0.1
    },
    {
      title: "Cloud Readiness",
      description: "Assessment of application compatibility and migration challenges.",
      delay: 0.2
    },
    {
      title: "Cost Optimization",
      description: "Analysis of IT spending and prediction of cost savings.",
      delay: 0.3
    },
    {
      title: "Security & Compliance",
      description: "Evaluation of data security posture and compliance obligations.",
      delay: 0.4
    },
    {
      title: "Risk Mitigation",
      description: "Identification of pitfalls and roadblocks, and development of mitigation strategies.",
      delay: 0.5
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
          {/* Left Side - Interactive Digital Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Digital Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-blue-900">
                {/* Data Visualization Elements */}
                <div className="absolute top-8 left-8 w-16 h-12 bg-blue-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">32%</span>
                </div>
                <div className="absolute top-16 right-16 w-12 h-8 bg-green-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">NAV</span>
                </div>
                <div className="absolute top-32 left-16 w-10 h-6 bg-purple-400 rounded-lg opacity-60 flex items-center justify-center">
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
                <div className="absolute bottom-8 left-32 w-8 h-5 bg-yellow-400 rounded-lg opacity-60 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">FLAC</span>
                </div>
              </div>

              {/* Temperature Readings */}
              <div className="absolute top-4 right-4 text-white text-sm">
                <div className="text-blue-400">21°C</div>
                <div className="text-green-400">73°F</div>
              </div>

              {/* Hand and Mouse Interaction */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 right-8"
              >
                {/* Computer Mouse */}
                <div className="w-16 h-10 bg-black rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Hand */}
                <div className="absolute -top-4 -left-2 w-8 h-12 bg-yellow-200 rounded-full relative">
                  <div className="absolute -top-1 left-1 w-2 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-1 left-3 w-2 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-1 left-5 w-2 h-3 bg-yellow-300 rounded-full"></div>
                </div>
              </motion.div>

              {/* Network Connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
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

              {/* Floating Data Elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${15 + Math.floor(i / 4) * 20}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Assessment Benefits */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Assess?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Think of your IT infrastructure as a vast, unexplored continent. Before setting sail to the cloud, wouldn't you want to map its terrain, identify obstacles, and plan your optimal route? A thorough cloud assessment does just that, providing invaluable insights into:
              </p>
            </motion.div>

            <div className="space-y-6">
              {assessmentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: benefit.delay }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
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
