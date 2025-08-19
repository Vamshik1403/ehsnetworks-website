"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Shield, Brain, TrendingUp, Users, Zap, CheckCircle, Star } from 'lucide-react';

export default function CloudStrategyAdvantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const advantages = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive cloud strategy development aligned with your business objectives and growth plans.",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures and compliance frameworks to protect your data and applications.",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "Intelligent Optimization",
      description: "AI-powered insights and recommendations for continuous cloud performance improvement.",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Flexible infrastructure that grows with your business needs and seasonal demands.",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empower your workforce with cloud-based tools and collaborative platforms.",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Performance",
      description: "High-speed, reliable cloud infrastructure ensuring optimal user experience.",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Cloud Strategy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A well-planned cloud strategy is the foundation for digital transformation success. 
            It provides the roadmap for modernizing your infrastructure and unlocking new business opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: advantage.delay }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(advantage.icon, { size: 32, className: "text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
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
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our cloud strategy experts guide you through the journey to digital excellence.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Cloud Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
