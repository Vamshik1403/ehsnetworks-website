"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WorkplacesBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const benefits = [
    {
      icon: "📈",
      title: "Increased Productivity",
      description: "Streamlined workflows and collaboration tools boost team efficiency by up to 40%",
      metrics: ["40% productivity gain", "Faster decision making", "Reduced meeting time"]
    },
    {
      icon: "💰",
      title: "Cost Reduction",
      description: "Cloud-based solutions reduce infrastructure and operational costs significantly",
      metrics: ["60% cost savings", "Reduced IT overhead", "Lower maintenance costs"]
    },
    {
      icon: "😊",
      title: "Employee Satisfaction",
      description: "Modern tools and flexible work options improve employee experience and retention",
      metrics: ["85% satisfaction rate", "Better work-life balance", "Increased engagement"]
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Enterprise-grade security with built-in compliance and data protection",
      metrics: ["99.9% uptime", "Zero data breaches", "Full compliance"]
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
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
              Measurable Results
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Workplace
            <span className="block text-purple-600">Benefits</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our modern workplace solutions deliver measurable benefits that transform your 
            organization's productivity, efficiency, and employee satisfaction.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  {benefit.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                <div className="space-y-3">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metricIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + metricIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm font-medium">{metric}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Calculate Your ROI
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our workplace solutions can impact your bottom line with our 
                interactive ROI calculator.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Annual Savings", value: "$50K - $200K", icon: "💰" },
                { label: "Productivity Gain", value: "30% - 50%", icon: "📈" },
                { label: "Payback Period", value: "6 - 12 months", icon: "⏱️" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100"
                >
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready to See These Benefits?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get a personalized ROI analysis and discover how our workplace solutions 
              can transform your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Calculate Your ROI
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
