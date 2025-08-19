"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AIUseCases() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      color: "from-blue-500 to-blue-700",
      useCases: [
        {
          title: "Medical Image Analysis",
          description: "AI-powered diagnosis from X-rays, MRIs, and CT scans",
          impact: "95% accuracy in early disease detection"
        },
        {
          title: "Drug Discovery",
          description: "Accelerated pharmaceutical research and development",
          impact: "60% faster drug development cycles"
        },
        {
          title: "Patient Care Optimization",
          description: "Personalized treatment plans and predictive care",
          impact: "30% improvement in patient outcomes"
        }
      ]
    },
    {
      name: "Finance",
      icon: "💳",
      color: "from-green-500 to-green-700",
      useCases: [
        {
          title: "Fraud Detection",
          description: "Real-time transaction monitoring and anomaly detection",
          impact: "99.9% fraud detection accuracy"
        },
        {
          title: "Risk Assessment",
          description: "AI-driven credit scoring and investment risk analysis",
          impact: "40% reduction in default rates"
        },
        {
          title: "Algorithmic Trading",
          description: "Intelligent trading strategies and market prediction",
          impact: "25% increase in trading performance"
        }
      ]
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      color: "from-orange-500 to-orange-700",
      useCases: [
        {
          title: "Predictive Maintenance",
          description: "AI-powered equipment monitoring and failure prediction",
          impact: "50% reduction in downtime"
        },
        {
          title: "Quality Control",
          description: "Automated visual inspection and defect detection",
          impact: "90% improvement in defect detection"
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent inventory management and demand forecasting",
          impact: "35% reduction in inventory costs"
        }
      ]
    },
    {
      name: "Retail",
      icon: "🛍️",
      color: "from-purple-500 to-purple-700",
      useCases: [
        {
          title: "Customer Personalization",
          description: "AI-driven product recommendations and marketing",
          impact: "45% increase in conversion rates"
        },
        {
          title: "Inventory Management",
          description: "Smart demand forecasting and stock optimization",
          impact: "30% reduction in stockouts"
        },
        {
          title: "Chatbot Support",
          description: "24/7 intelligent customer service and support",
          impact: "80% faster customer issue resolution"
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Use Cases Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artificial intelligence is transforming businesses across different 
            sectors, driving efficiency, innovation, and competitive advantage.
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeIndustry === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>

        {/* Use Cases Display */}
        <div className="grid lg:grid-cols-3 gap-8">
          {industries[activeIndustry].useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${industries[activeIndustry].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl text-white">⚡</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.description}
              </p>

              {/* Impact */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="text-sm font-semibold text-blue-600 mb-1">Business Impact</div>
                <div className="text-lg font-bold text-gray-900">{useCase.impact}</div>
              </div>

              {/* Learn More Button */}
              <button className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "85%", label: "Companies investing in AI", icon: "📈" },
            { number: "$15.7T", label: "AI contribution to GDP by 2030", icon: "💰" },
            { number: "40%", label: "Average productivity improvement", icon: "⚡" },
            { number: "2.9M", label: "AI-related jobs created", icon: "👥" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
