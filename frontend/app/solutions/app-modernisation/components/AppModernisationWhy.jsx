"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationWhy() {
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

  const advantages = [
    {
      title: "End-to-end Expertise",
      description: "We offer comprehensive app modernisation services, from assessment and planning to implementation and ongoing support.",
      icon: "📈",
      color: "from-blue-500 to-blue-700",
      illustration: "📈👔⚙️📊"
    },
    {
      title: "Strong Partner Ecosystem",
      description: "We leverage partnerships with leading technology providers to deliver best-in-class solutions.",
      icon: "🤝",
      color: "from-cyan-500 to-cyan-700",
      illustration: "🤝💻⚙️"
    },
    {
      title: "ROI and Customer Experience Focus",
      description: "Our solutions are designed to maximise your returns by improving customer experiences and delivering measurable results.",
      icon: "💰",
      color: "from-emerald-500 to-emerald-700",
      illustration: "📈💵⚙️"
    },
    {
      title: "Outcome-based Deliverables",
      description: "We focus on achieving your desired business outcomes through clearly defined deliverables and measurable results.",
      icon: "🎯",
      color: "from-orange-500 to-orange-700",
      illustration: "🎯💵📊"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-slow animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why ENPL?
          </h2>
          <h3 className="text-2xl text-blue-200 mb-4">
            The ENPL Advantage
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ENPL's approach ensures that you receive tailored solutions that align with your business goals.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl text-white">{advantage.icon}</span>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {advantage.title}
              </h4>

              {/* Description */}
              <p className="text-blue-100 mb-6 leading-relaxed">
                {advantage.description}
              </p>

              {/* Illustration */}
              <div className="text-center text-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {advantage.illustration}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`grid md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "500+", label: "Applications Modernised", icon: "💻" },
            { number: "99%", label: "Client Satisfaction", icon: "😊" },
            { number: "24/7", label: "Expert Support", icon: "🛟" },
            { number: "15+", label: "Years Experience", icon: "🏆" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
