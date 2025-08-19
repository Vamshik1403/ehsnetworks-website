"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Server, Database, TrendingUp, CheckCircle, Zap } from 'lucide-react';

export default function AssessmentAuditsServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Security Assessment",
      description: "We enable the consolidation and optimization of your data center infrastructure, servers, storage, networks & middleware software to improve agility, flexibility, reliability and reduce TCO.",
      icon: Shield,
      delay: 0.1,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Network Assessment",
      description: "We enable the consolidation and optimization of your data center infrastructure, servers, storage, networks & middleware software to improve agility, flexibility, reliability and reduce TCO.",
      icon: Server,
      delay: 0.2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Infrastructure Consolidation & Optimization",
      description: "We enable the consolidation and optimization of your data center infrastructure, servers, storage, networks & middleware software to improve agility, flexibility, reliability and reduce TCO.",
      icon: Database,
      delay: 0.3,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Application Performance Management",
      description: "We help manage and implement tools to manage and monitor dynamic applications and complex datacenter environments. Ensure quality of service and quality of experience for your critical business applications to protect revenue, end-user productivity and customer satisfaction.",
      icon: TrendingUp,
      delay: 0.4,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "DR Strategy Consultancy",
      description: "Optiserv assists design a well-thought-out, comprehensive data center recovery solution that meets the needs of the business and to help guide businesses. Choose Recovery options, recommendations and their associated costs for enabling business functions to be highly available and to operate with minimal disruption in a disaster scenario.",
      icon: CheckCircle,
      delay: 0.5,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Data Center Optimization",
      description: "We assist in addressing a number of data center challenges to deliver the right IT service levels to users, provide IT infrastructure quickly to support new business initiatives, reduce operational costs, lower environmental impact and ensure IT compliance with legislation and regulations.",
      icon: Zap,
      delay: 0.6,
      color: "from-indigo-500 to-indigo-600"
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
            Our Assessment Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive assessment and optimization services to transform your IT infrastructure and drive business success.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Infrastructure?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our assessment experts help you identify opportunities for improvement and optimization.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
