"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CybersecurityCTA() {
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
      icon: "🔒",
      title: "Security Assessment",
      description: "Get a comprehensive evaluation of your current security posture",
      buttonText: "Schedule Assessment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛡️",
      title: "Demo Request",
      description: "See our solutions in action with a personalized demonstration",
      buttonText: "Request Demo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📞",
      title: "Consultation",
      description: "Speak with our cybersecurity experts about your needs",
      buttonText: "Book Consultation",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
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
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Take Action Today
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Secure Your
            <span className="block text-blue-400">Digital Future?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Don't wait until it's too late. Our cybersecurity experts are ready to help you 
            build a robust defense against evolving cyber threats. Choose your next step below.
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {option.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of organizations that trust us with their cybersecurity needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Fortune 500", count: "50+", icon: "🏆" },
                { name: "Healthcare", count: "100+", icon: "🏥" },
                { name: "Financial", count: "75+", icon: "💼" },
                { name: "Government", count: "25+", icon: "🏛️" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.count}</div>
                  <div className="text-gray-300 text-sm">{stat.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
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
              Start Your Security Journey Today
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Every moment you wait is a moment your organization remains vulnerable. 
              Take the first step towards comprehensive cybersecurity protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Download Security Guide
              </motion.button>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-blue-100 text-sm mt-6"
            >
              ⚡ Response guaranteed within 2 hours • 🔒 100% confidential consultation
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
