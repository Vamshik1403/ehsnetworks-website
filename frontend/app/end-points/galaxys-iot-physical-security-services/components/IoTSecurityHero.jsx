"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wifi, Zap } from 'lucide-react';

export default function IoTSecurityHero() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl" />
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Security Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Shield size={60} className="text-indigo-400" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 opacity-20"
      >
        <Lock size={50} className="text-purple-400" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-1/4 opacity-20"
      >
        <Wifi size={40} className="text-pink-400" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-semibold mb-8"
            >
              <Shield size={16} className="mr-2" />
              ENDPOINT PROTECTION & SECURITY
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Endpoint Protection
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Protect your digital perimeter with our comprehensive endpoint protection solutions. Safeguard your devices, data, and users from evolving cyber threats.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-3">
                  <span>Explore Solutions</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-bold text-lg rounded-2xl hover:bg-indigo-400 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-3">
                  <Shield className="w-6 h-6" />
                  <span>Security Consultation</span>
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Multi-layer protection for all IoT devices"
              },
              {
                icon: Wifi,
                title: "Seamless Connectivity",
                description: "Real-time monitoring and management"
              },
              {
                icon: Zap,
                title: "Smart Automation",
                description: "AI-powered threat detection and response"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-indigo-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
