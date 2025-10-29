"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Clock, Users, CheckCircle, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Expertise & Experience",
      icon: Award,
      points: [
        "Years of experience in cybersecurity",
        "Certified security professionals",
        "Proven track record of protecting businesses"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Comprehensive Solutions",
      icon: Layers,
      points: [
        "Tailored security strategies",
        "Integration with existing IT infrastructure",
        "Scalable solutions for growing businesses"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "24/7 Support",
      icon: Clock,
      points: [
        "Round-the-clock monitoring",
        "Rapid incident response",
        "Dedicated support team"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    "Complete Endpoint Security Overview",
    "Protection from Malicious Software",
    "Secure Access Control",
    "Professional Support When Needed",
    "Real-Time Threat Detection & Response",
    "Automated Security Updates & Patches",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our Endpoint Protection?
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your business from evolving cyber threats
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Advantages Grid */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(advantage.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                    <ul className="space-y-2">
                      {advantage.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center text-indigo-200">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Business Advantages</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <Zap className="w-6 h-6 text-yellow-300" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

