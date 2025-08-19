'use client';
import React, { useEffect, useRef, useState } from 'react';

const MonitoringCTA = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:45px_45px] animate-grid-flow" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-36 h-36 bg-blue-400/10 rounded-full animate-float-slow blur-xl" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-400/10 rounded-full animate-float-slow delay-1000 blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-cyan-400/10 rounded-full animate-float-slow delay-2000 blur-xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Monitor Your
            <span className="block bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Infrastructure?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the power of enterprise-grade monitoring with Zabbix. Get real-time insights, 
            proactive alerts, and comprehensive visibility into your entire IT ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden min-w-[250px]">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Start Monitoring Today
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-semibold text-lg min-w-[250px] backdrop-blur-sm">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Request Demo
              </span>
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: '⚡',
                title: 'Instant Setup',
                description: 'Get monitoring in minutes with our pre-configured templates'
              },
              {
                icon: '📊',
                title: 'Real-time Insights',
                description: 'Monitor performance and availability with zero latency'
              },
              {
                icon: '🔔',
                title: 'Smart Alerts',
                description: 'Intelligent notifications that prevent downtime'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '1000+', label: 'Active Monitors' },
                { number: '99.99%', label: 'Uptime SLA' },
                { number: '24/7', label: 'Expert Support' },
                { number: '50+', label: 'Data Sources' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center transform hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get Expert Support</h3>
              <div className="space-y-3 text-blue-100">
                <p>📧 monitoring@enpl.com</p>
                <p>📞 +1 (800) 266-2515</p>
                <p>🌐 www.enpl.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Office Location</h3>
              <p className="text-blue-100">
                B Wing, 602, Lotus Corporate Park<br />
                Graham Firth Compound, Off. Express Highway<br />
                Goregaon East, Mumbai - 400063, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(45px, 45px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 30s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
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

export default MonitoringCTA;
