"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Shield, Wrench, Server, Network, Users, Database, CheckCircle } from 'lucide-react';

export default function RemoteSupportServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Facility Management",
      description: "Our FMS includes Desktop/Laptop & Server management, Network & Security Management, Onsite services, Maintenance services, Server and Backup Management, Help Desk Services, Anti-Virus Support, Vendor Management, Complete IT outsourcing.",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Warranty Services",
      description: "We make our customer comfortable by giving first level of support telephonically so that support is expedited asap without waiting for our Engineer to visit. We also provide warranty extension services, which protects your investments while helping you realize your objectives for cost efficiency.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      title: "Annual Maintenance",
      description: "We have dedicated spares in order to meet stringent incident. We can meet the constant changing requirements with agility. We offer Mission Critical 24x7 Support, On-site Support, Proactive, Periodic check, Remote Monitoring support, Resident Engineer to maintain SLA of our customers.",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
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
            Our Support Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT support and facility management services to ensure your business operations run smoothly
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(service.icon, { size: 32, className: "text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Support Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "24/7 Support", description: "Round-the-clock technical assistance" },
              { icon: Network, title: "Remote Monitoring", description: "Proactive system monitoring" },
              { icon: Database, title: "Backup Management", description: "Secure data backup solutions" },
              { icon: CheckCircle, title: "SLA Compliance", description: "Guaranteed service levels" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(feature.icon, { size: 24, className: "text-white" })}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
