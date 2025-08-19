"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Shield, Zap, Globe, Server, Cpu, Wifi, Router } from 'lucide-react';

export default function NetworkingOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Network,
      title: "High-Performance Networks",
      description: "Enterprise-grade networking with 10Gbps+ speeds and ultra-low latency for mission-critical applications.",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layered security with firewalls, VPNs, and threat detection to protect your network infrastructure.",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized routing and switching for maximum throughput and minimal packet loss across your network.",
      delay: 0.3
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Seamless connectivity across multiple locations with intelligent load balancing and failover.",
      delay: 0.4
    },
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Flexible architecture that grows with your business needs and handles increasing network demands.",
      delay: 0.5
    },
    {
      icon: Cpu,
      title: "Smart Management",
      description: "AI-powered network monitoring and automated optimization for peak performance and reliability.",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Networking
            <span className="block text-blue-600">Redefined</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive networking solutions combine cutting-edge technology with 
            proven expertise to deliver the performance, security, and reliability your 
            business demands in today's interconnected world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Network Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Network Architecture</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our multi-layered approach ensures optimal performance, security, and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Access Layer</h4>
              <p className="text-sm text-gray-600">End-user connectivity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Router className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Distribution Layer</h4>
              <p className="text-sm text-gray-600">Traffic management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Core Layer</h4>
              <p className="text-sm text-gray-600">High-speed backbone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Internet Layer</h4>
              <p className="text-sm text-gray-600">External connectivity</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Our Network Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
