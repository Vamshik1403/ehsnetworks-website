'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const MonitoringHero = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const metrics = [
    { value: '99.99%', label: 'Uptime Guarantee' },
    { value: '< 1s', label: 'Response Time' },
    { value: '24/7', label: 'Monitoring' },
    { value: '100+', label: 'Data Sources' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    [titleRef.current, subtitleRef.current, ctaRef.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Data Points */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000 opacity-60" />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse delay-2000 opacity-60" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1500 opacity-60" />
        
        {/* Network Grid Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Charts */}
        <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-float-slow blur-sm" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg animate-float-slow delay-1000 blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
        >
          <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
            Comprehensive IT Monitoring
          </span>
          <br />
          <span className="text-white">
            with ENPL
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto opacity-0 transform translate-y-20 transition-all duration-1000 ease-out delay-300"
        >
          Stay ahead with instant notifications on critical issues, minimize downtime, and ensure rapid response 
          with our Zabbix-based monitoring solutions that adapt to your growing business needs.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`text-center transform transition-all duration-700 ${
                index === currentMetric ? 'scale-110 text-blue-300' : 'text-blue-100'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm md:text-base opacity-80">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 transform translate-y-20 transition-all duration-1000 ease-out delay-600"
        >
          <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden min-w-[200px]">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              Get Started Today
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          
          <button className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-semibold text-lg min-w-[200px] backdrop-blur-sm">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              Watch Demo
            </span>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: '🔔',
              title: 'Instant Alerts',
              description: 'Real-time notifications for critical issues'
            },
            {
              icon: '📊',
              title: 'Custom Dashboards',
              description: 'Tailored visualizations for your data'
            },
            {
              icon: '📈',
              title: 'Scalable Solutions',
              description: 'Grows with your business needs'
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
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

export default MonitoringHero;
