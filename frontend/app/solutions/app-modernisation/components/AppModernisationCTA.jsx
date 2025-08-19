"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
        {/* Connect With Us Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your applications? Let's discuss how our 
              modernisation services can drive your business forward.
            </p>
            <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Contact Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Get Your Free Modernisation Assessment
            </h3>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Transform your IT infrastructure with world-class application modernisation solutions. 
              From assessment to deployment, we'll help you build a foundation for digital 
              transformation and business growth.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "🔍 Comprehensive application assessment",
                "📋 Custom modernisation roadmap",
                "⚡ Rapid implementation strategies",
                "🔒 Security and compliance focus",
                "📊 Performance optimization",
                "💰 Cost reduction analysis"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <div className="text-sm text-blue-200">Email us at</div>
                  <div className="text-white font-semibold">modernisation@ENPL.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white">📞</span>
                </div>
                <div>
                  <div className="text-sm text-blue-200">Call us at</div>
                  <div className="text-white font-semibold">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Schedule Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your modernisation project or requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl text-lg hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Free Consultation
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-blue-200">
                  No commitment required • Free 30-minute consultation • Expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "1000+", label: "Applications Assessed", icon: "🔍" },
            { number: "99.9%", label: "Success Rate", icon: "✅" },
            { number: "24/7", label: "Expert Support", icon: "🛟" },
            { number: "50+", label: "Enterprise Clients", icon: "🏢" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
