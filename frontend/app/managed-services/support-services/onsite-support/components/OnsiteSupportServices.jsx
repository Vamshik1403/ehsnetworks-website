"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Wrench, Server, Network, Users, Database, CheckCircle, Clock } from 'lucide-react';

export default function OnsiteSupportServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Hardware Installation",
      description: "Professional installation and setup of servers, workstations, networking equipment, and other IT hardware components at your location.",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Network Setup",
      description: "Complete network infrastructure setup including cabling, switch configuration, router setup, and wireless network deployment.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      title: "Maintenance & Repair",
      description: "Regular maintenance visits, hardware repairs, software troubleshooting, and system optimization performed on-site by certified technicians.",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      title: "Emergency Support",
      description: "24/7 emergency onsite support for critical system failures, network outages, and urgent technical issues requiring immediate attention.",
      icon: Clock,
      color: "from-red-500 to-orange-500",
      delay: 0.4
    },
    {
      title: "Training & Consultation",
      description: "On-site training sessions for your staff on new systems, software, and best practices for IT infrastructure management.",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      delay: 0.5
    },
    {
      title: "Infrastructure Audit",
      description: "Comprehensive on-site assessment of your IT infrastructure, security systems, and recommendations for improvements and optimization.",
      icon: Database,
      color: "from-teal-500 to-green-500",
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
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Onsite Support Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional technical support delivered directly to your location by certified engineers
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coverage Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Service Coverage Areas
          </h3>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin size={24} className="text-green-600" />
              <h4 className="text-xl font-semibold text-gray-900">Available in All Metro Cities</h4>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"].map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-green-100"
                >
                  <span className="text-gray-700 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
