"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle, TrendingUp, Users, Database, Server, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function OnsiteSupportHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 blur-3xl" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Onsite Support
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Professional
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  Onsite Support
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-purple-100 leading-relaxed">
                Professional on-site technical support and maintenance services. Our expert engineers visit your location to provide hands-on assistance 
                and ensure your IT infrastructure operates at peak performance with minimal downtime.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                  <span className="relative flex items-center space-x-3">
                    <span>Know More</span>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">&lt;2hrs</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
                <div className="text-gray-300 text-sm">Onsite Visits</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Onsite Support Capabilities Preview */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-indigo-200 blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Why Choose Our Onsite Support?</h3>
                <div className="space-y-4">
                  {[
                    'Expert engineers with hands-on experience',
                    'Fast response times with guaranteed SLA commitments',
                    'Comprehensive equipment and tool availability',
                    'Detailed documentation and reporting',
                    'Preventive maintenance and system optimization',
                    '24/7 emergency support when needed'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
