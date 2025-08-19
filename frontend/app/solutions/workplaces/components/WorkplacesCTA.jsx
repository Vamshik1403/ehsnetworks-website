"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WorkplacesCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const ctaOptions = [
    {
      icon: "💼",
      title: "Workplace Assessment",
      description: "Get a comprehensive evaluation of your current workplace technology",
      buttonText: "Schedule Assessment",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🛠️",
      title: "Implementation Services",
      description: "Professional deployment and configuration of workplace solutions",
      buttonText: "Get Quote",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "📚",
      title: "Training & Support",
      description: "Comprehensive training programs for your team",
      buttonText: "Learn More",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main CTA Section */}
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Take Action Today
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your
            <span className="block text-purple-400">Workplace?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Don't let outdated technology hold your organization back. Our workplace experts 
            are ready to help you build a modern, productive, and secure work environment.
          </motion.p>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {option.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {option.title}
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {option.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${option.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {option.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6"
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl mx-auto">
                🚀
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Your Workplace Transformation
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your organization falls behind. 
              Take the first step towards a modern, productive workplace today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Download Guide
              </motion.button>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-purple-100 text-sm mt-6"
            >
              ⚡ Response guaranteed within 2 hours • 🔒 100% confidential consultation
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
