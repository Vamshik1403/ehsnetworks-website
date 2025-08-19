"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Shield, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react';

export default function AssessmentAuditsBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven insights to create comprehensive IT roadmaps aligned with business objectives.",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential vulnerabilities before they become critical issues.",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Unlock hidden potential in your infrastructure for better efficiency and cost savings.",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empower your IT team with clear insights and actionable recommendations.",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Cost Reduction",
      description: "Optimize resource allocation and eliminate unnecessary spending through detailed analysis.",
      delay: 0.5
    },
    {
      icon: CheckCircle,
      title: "Compliance Assurance",
      description: "Ensure your infrastructure meets industry standards and regulatory requirements.",
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
            Why Choose Our Assessment Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive assessment approach delivers measurable results and actionable insights to transform your IT infrastructure.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(benefit.icon, { size: 32, className: "text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Client Satisfaction Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
                <div className="text-blue-100">Average Cost Reduction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Successful Assessments</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
