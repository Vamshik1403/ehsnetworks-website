"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Shield, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export default function RemoteSupportBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support ensuring your business never faces downtime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians with extensive experience in IT infrastructure",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Proactive Monitoring",
      description: "Preventive maintenance to avoid potential issues before they occur",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Reduce operational costs with our comprehensive support packages",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick resolution times with our efficient support processes",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "SLA Guaranteed",
      description: "Service level agreements ensuring quality and reliability",
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "<15min", label: "Response Time" },
    { number: "24/7", label: "Support Available" },
    { number: "250+", label: "Expert Technicians" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
            Why Choose Our Remote Support?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the benefits of professional IT support that keeps your business running smoothly
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(benefit.icon, { size: 28, className: "text-white" })}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Support Performance
            </h3>
            <p className="text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
