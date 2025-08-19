"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Server, Database, TrendingUp, CheckCircle, Zap, Users, Globe } from 'lucide-react';

export default function ITConsultingServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security evaluation to identify vulnerabilities, assess risks, and implement robust security measures.",
      icon: Shield,
      delay: 0.1,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Network Assessment",
      description: "Detailed analysis of your network infrastructure, performance metrics, and optimization opportunities.",
      icon: Server,
      delay: 0.2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Infrastructure Optimization",
      description: "Consolidation and optimization of data center infrastructure for improved agility and reduced TCO.",
      icon: Database,
      delay: 0.3,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Application Performance",
      description: "Tools and strategies to manage and monitor dynamic applications in complex datacenter environments.",
      icon: TrendingUp,
      delay: 0.4,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive data center recovery solutions for business continuity and minimal disruption.",
      icon: CheckCircle,
      delay: 0.5,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Data Center Optimization",
      description: "Address data center challenges to deliver optimal IT service levels and reduce operational costs.",
      icon: Zap,
      delay: 0.6,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Team Enablement",
      description: "Empower your workforce with cloud-based tools and collaborative platforms for enhanced productivity.",
      icon: Users,
      delay: 0.7,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Global Solutions",
      description: "Worldwide IT consulting services with local expertise and global best practices.",
      icon: Globe,
      delay: 0.8,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our IT Consulting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT consulting solutions to transform your technology infrastructure and drive business success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(service.icon, { size: 32, className: "text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our IT consulting experts help you optimize your technology investments and drive digital transformation.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your IT Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
