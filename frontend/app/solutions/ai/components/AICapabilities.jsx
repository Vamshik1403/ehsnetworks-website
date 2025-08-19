"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AICapabilities() {
  const [activeTab, setActiveTab] = useState(0);
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

  const capabilities = [
    {
      title: "Machine Learning",
      icon: "🤖",
      description: "Advanced algorithms that learn from data to make predictions and decisions",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Real-time Learning"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Deep Learning",
      icon: "🧠",
      description: "Neural networks that mimic human brain function for complex problem solving",
      features: [
        "Image Recognition",
        "Natural Language Processing",
        "Speech Recognition",
        "Autonomous Systems"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Natural Language Processing",
      icon: "💬",
      description: "AI systems that understand and generate human language",
      features: [
        "Text Analysis",
        "Language Translation",
        "Sentiment Analysis",
        "Chatbot Development"
      ],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "AI that interprets and analyzes visual information from the world",
      features: [
        "Object Detection",
        "Facial Recognition",
        "Medical Imaging",
        "Quality Control"
      ],
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Capabilities & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of artificial intelligence technologies designed to 
            transform your business operations and drive innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {capabilities.map((capability, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="mr-2">{capability.icon}</span>
              {capability.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className={`p-8 rounded-3xl bg-gradient-to-br ${capabilities[activeTab].color} text-white shadow-2xl`}>
              <div className="text-6xl mb-6">{capabilities[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{capabilities[activeTab].title}</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {capabilities[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {capabilities[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Data-Driven Insights</h4>
                    <p className="text-gray-600">Transform raw data into actionable business intelligence</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Real-time Processing</h4>
                    <p className="text-gray-600">Instant analysis and decision-making capabilities</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Continuous Learning</h4>
                    <p className="text-gray-600">AI systems that improve over time with more data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
