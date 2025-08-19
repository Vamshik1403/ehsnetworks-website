'use client';
import React, { useState, useEffect, useRef } from 'react';

const MonitoringCapabilities = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const capabilities = [
    {
      id: 'collect-metrics',
      title: 'COLLECT METRICS FROM ANY SOURCE',
      description: 'Zabbix allows you to collect metrics and data from a variety of sources, including:',
      features: [
        'Network devices',
        'Cloud services, containers, and virtual machines',
        'OS-level monitoring',
        'Log files',
        'Databases',
        'Applications',
        'Services',
        'IoT sensors',
        'Website monitoring',
        'HTTP/HTTPS monitoring of end devices',
        'A range of industry-standard protocols',
        'External device API endpoints'
      ],
      icon: '📊',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'smart-problem-limit',
      title: 'SMART PROBLEM LIMIT',
      description: 'Intelligent problem detection and escalation with configurable thresholds and automated responses.',
      features: [
        'Advanced threshold management',
        'Intelligent alert correlation',
        'Automated escalation paths',
        'Problem deduplication',
        'Smart notification routing'
      ],
      icon: '🎯',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'trend-prediction',
      title: 'TREND PREDICTION',
      description: 'Predictive analytics and trend forecasting to anticipate issues before they occur.',
      features: [
        'Machine learning algorithms',
        'Historical data analysis',
        'Capacity planning insights',
        'Performance forecasting',
        'Anomaly detection'
      ],
      icon: '🔮',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'machine-learning',
      title: 'MACHINE LEARNING',
      description: 'AI-powered monitoring and intelligent automation for proactive issue resolution.',
      features: [
        'Pattern recognition',
        'Automated root cause analysis',
        'Intelligent alert filtering',
        'Predictive maintenance',
        'Self-healing systems'
      ],
      icon: '🤖',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'synthetic-monitoring',
      title: 'SYNTHETIC MONITORING',
      description: 'End-to-end monitoring from a user perspective to ensure optimal user experience.',
      features: [
        'User journey monitoring',
        'Transaction tracing',
        'Performance benchmarking',
        'Availability testing',
        'Geographic monitoring'
      ],
      icon: '👁️',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'custom-data-collection',
      title: 'CUSTOM DATA COLLECTION METHODS',
      description: 'Flexible data collection frameworks for specialized monitoring requirements.',
      features: [
        'Custom scripts and agents',
        'API integrations',
        'Database queries',
        'File monitoring',
        'Custom protocols'
      ],
      icon: '⚙️',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'data-transformation',
      title: 'DATA TRANSFORMATION',
      description: 'Advanced data processing and transformation capabilities for enhanced insights.',
      features: [
        'Data aggregation',
        'Custom calculations',
        'Metric correlation',
        'Data enrichment',
        'Real-time processing'
      ],
      icon: '🔄',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:20px_20px] animate-grid-flow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Advanced Monitoring Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive monitoring features that make Zabbix the industry standard for IT infrastructure monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-3">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${capability.color} text-white shadow-lg`
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl ${activeTab === index ? 'animate-bounce' : ''}`}>
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm leading-tight">
                        {capability.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Content Display */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              {capabilities[activeTab] && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${capabilities[activeTab].color} text-white text-2xl mb-4 animate-bounce`}>
                      {capabilities[activeTab].icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {capabilities[activeTab].title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {capabilities[activeTab].description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {capabilities[activeTab].features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${capabilities[activeTab].color} animate-pulse`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="text-center pt-6">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold overflow-hidden">
                      <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                        Learn More
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default MonitoringCapabilities;
