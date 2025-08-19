"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function CloudMigrationExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const expertise = [
    {
      icon: Target,
      title: "Tailored Strategy",
      description: "We analyse your unique needs and workloads to craft a personalized migration plan that maps your path to success.",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our certified cloud architects and engineers navigate the complexities of migration, ensuring a smooth and efficient transition.",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Seamless Execution",
      description: "We leverage best practices and proven methodologies to minimize disruption and downtime during the migration process.",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "We don't just migrate; we help you thrive in the cloud. We monitor your usage, identify optimization opportunities, and ensure your cloud environment aligns with your evolving needs.",
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
          {/* Left Side - Text Content */}
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
                Our Cloud Migration Expertise:
              </h2>
            </motion.div>

            <div className="space-y-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon && React.createElement(item.icon, { size: 24, className: "text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-black rounded-3xl overflow-hidden shadow-2xl">
              {/* Hand and Cloud Interaction */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Hand */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  <div className="w-32 h-20 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full relative">
                    {/* Fingers */}
                    <div className="absolute -top-2 left-2 w-6 h-8 bg-yellow-200 rounded-full"></div>
                    <div className="absolute -top-1 left-8 w-6 h-8 bg-yellow-200 rounded-full"></div>
                    <div className="absolute -top-2 left-14 w-6 h-8 bg-yellow-200 rounded-full"></div>
                    <div className="absolute -top-1 left-20 w-6 h-8 bg-yellow-200 rounded-full"></div>
                    <div className="absolute -top-2 left-26 w-6 h-8 bg-yellow-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Cloud */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute top-8 right-16"
                >
                  <div className="w-24 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full relative">
                    <div className="absolute -top-2 -left-2 w-16 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                    <div className="absolute -top-1 -right-2 w-16 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                    <div className="absolute -bottom-2 left-4 w-12 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                  </div>
                  
                  {/* Arrows */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2"
                  >
                    <ArrowUp size={20} className="text-blue-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2"
                  >
                    <ArrowDown size={20} className="text-blue-400" />
                  </motion.div>
                </motion.div>

                {/* Digital Elements */}
                <div className="absolute inset-0">
                  {/* ON/OFF Squares */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="absolute top-16 left-8 w-8 h-8 bg-blue-400 rounded flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">ON</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="absolute top-32 left-16 w-8 h-8 bg-green-400 rounded flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">OFF</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                    className="absolute bottom-16 right-8 w-8 h-8 bg-purple-400 rounded flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">ON</span>
                  </motion.div>

                  {/* Data Streams */}
                  <div className="absolute top-1/4 left-0 right-0 flex justify-center space-x-2">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 2.2 + i * 0.1 }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-1/4 left-0 right-0 flex justify-center space-x-2">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 2.6 + i * 0.1 }}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                      />
                    ))}
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

// Arrow components
const ArrowUp = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
