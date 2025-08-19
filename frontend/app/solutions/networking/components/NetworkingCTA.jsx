"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';

export default function NetworkingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ctaOptions = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our networking experts",
      action: "+1 (555) 123-4567",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Email Consultation",
      description: "Get a detailed proposal via email",
      action: "network@company.com",
      delay: 0.2
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our technical team",
      action: "Start Chat",
      delay: 0.3
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Network?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of enterprises that have already upgraded their networking 
            infrastructure with our proven solutions. Get started today and experience 
            the difference.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Get Your Free Network Assessment
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: option.delay }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{option.title}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">{option.description}</p>
                <div className="text-lg font-semibold text-cyan-300">{option.action}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our networking solutions power some of the world's most demanding enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">99.9%</div>
              <div className="text-blue-100">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-6">Don't Wait - Act Now</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Every day without optimized networking costs your business money and productivity. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 text-blue-200 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
