"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WorkplacesOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const features = [
    {
      icon: "💻",
      title: "Digital Transformation",
      description: "Modernize your workplace with cloud-based solutions and digital workflows",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🤝",
      title: "Collaboration Tools",
      description: "Enhance team productivity with integrated communication and project management",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security with built-in compliance and data protection",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Mobility Solutions",
      description: "Enable seamless work from anywhere with mobile-first applications",
      color: "from-orange-500 to-red-500"
    }
  ];

  const workplaceTypes = [
    "Hybrid Work",
    "Remote Work", 
    "Office Work",
    "Field Work",
    "Collaborative Spaces",
    "Meeting Rooms"
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
              Future-Ready Workplaces
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Modern Workplace
            <span className="block text-purple-600">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your workplace into a digital-first environment that empowers employees, 
            enhances collaboration, and drives business growth in the modern era.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workplace Types Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Flexible Work Environments
            </h3>
            <div className="space-y-6">
              {workplaceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{type}</h4>
                    <p className="text-gray-600">Optimized for modern work styles</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border border-purple-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                  🎯
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Workplace Metrics</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Productivity Gain</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "40%" } : {}}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-purple-600 font-semibold">40%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cost Reduction</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "60%" } : {}}
                        transition={{ duration: 1, delay: 2.7 }}
                        className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-pink-600 font-semibold">60%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Employee Satisfaction</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "85%" } : {}}
                        transition={{ duration: 1, delay: 2.9 }}
                        className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-indigo-600 font-semibold">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Workplace?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive workplace assessment and discover how our modern solutions 
              can transform your organization's productivity and employee experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Workplace Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
