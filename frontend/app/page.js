'use client';

import Header from "./components/Header"
import VideoBanner from "./components/VideoBanner"
import QuickFacts from "./components/QuickFacts"
import Solutions from "./components/Solutions"
import ConsultingServices from "./components/ConsultingServices"
import ServiceCards from "./components/ServiceCards"
import Partners from "./components/Partners"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import { useScrollAnimation } from "./lib/useScrollAnimation";

export default function Home() {
  const isVisible = useScrollAnimation();

  return (
    <>
      <Header />
      
      {/* Video Banner Section */}
      <section 
        id="banner-section"
        data-animate="premium-fade-in"
        className={`animate-on-scroll transition-all duration-1500 ease-out ${
          isVisible['banner-section'] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <VideoBanner />
      </section>
      
      {/* Quick Facts Section */}
      <section 
        id="quick-facts-section"
        data-animate="premium-slide-up"
        className={`animate-on-scroll ${
          isVisible['quick-facts-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <QuickFacts />
      </section>
      
      {/* Solutions Section */}
      <section 
        id="solutions-section"
        data-animate="premium-scale-in"
        className={`animate-on-scroll ${
          isVisible['solutions-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Solutions />
      </section>
      
      {/* Consulting Services Section */}
      <section 
        id="consulting-services-section"
        data-animate="premium-fade-in-left"
        className={`animate-on-scroll ${
          isVisible['consulting-services-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ConsultingServices />
      </section>
      
      {/* Service Cards Section */}
      <section 
        id="service-cards-section"
        data-animate="premium-fade-in-right"
        className={`animate-on-scroll ${
          isVisible['service-cards-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ServiceCards />
      </section>
      
      {/* Partners Section */}
      <section 
        id="partners-section"
        data-animate="premium-bounce-in"
        className={`animate-on-scroll ${
          isVisible['partners-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Partners />
      </section>
      
      {/* Clients Section */}
      <section 
        id="clients-section"
        data-animate="premium-bounce-in"
        className={`animate-on-scroll ${
          isVisible['clients-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Clients />
      </section>
      
      {/* Let's Get In Touch Section */}
      <section 
        id="contact-section"
        data-animate="premium-glow-in"
        className={`animate-on-scroll w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 relative overflow-hidden ${
          isVisible['contact-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
        </div>
        
        {/* Yellow Accent Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg" />
        
        <div className="relative z-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Subtitle */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-yellow-400 mb-2 tracking-wider uppercase">
                Let's Get in Touch
              </h3>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
            </div>
            
            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                LET'S TALK ABOUT YOUR
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  BUSINESS IT SERVICES NEEDS
                </span>
              </h2>
            </div>
            
            {/* Description */}
            <div className="mb-12">
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our team of experts will create custom solutions to meet your every business needs.
              </p>
            </div>
            
            {/* CTA Button */}
            <div>
              <a href="tel:+917718811771">
                <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 hover:-translate-y-1">
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Button Content */}
                  <span className="relative flex items-center space-x-3">
                    <span>Contact Us</span>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      
      <style jsx global>{`
        /* Simplified Animation System for Better Performance */
        
        /* Simple Fade In */
        @keyframes simple-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Simple Slide Up */
        @keyframes simple-slide-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        /* Simple Scale In */
        @keyframes simple-scale-in {
          0% { 
            opacity: 0; 
            transform: scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        /* Simple Fade In Left */
        @keyframes simple-fade-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-20px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        /* Simple Fade In Right */
        @keyframes simple-fade-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        /* Simple Bounce In */
        @keyframes simple-bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.9);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.02);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        /* Simple Glow In */
        @keyframes simple-glow-in {
          0% { 
            opacity: 0; 
            transform: translateY(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        /* Staggered Animation Classes */
        .animate-stagger-1 { animation-delay: 0.1s; }
        .animate-stagger-2 { animation-delay: 0.2s; }
        .animate-stagger-3 { animation-delay: 0.3s; }
        .animate-stagger-4 { animation-delay: 0.4s; }
        .animate-stagger-5 { animation-delay: 0.5s; }
        
        /* Simplified Hover Effects */
        .premium-hover {
          transition: transform 0.3s ease;
        }
        
        .premium-hover:hover {
          transform: translateY(-2px);
        }
        
        /* Simple Text Glow Effect */
        .text-glow {
          transition: text-shadow 0.3s ease;
        }
        
        .text-glow:hover {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
        }
        
        /* Simple Card Effects */
        .premium-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .premium-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* Performance optimizations */
        .smooth-scroll-element {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .animate-on-scroll {
          will-change: transform, opacity, filter;
          transform: translateZ(0);
        }
        
        /* Optimized section animations */
        .animate-on-scroll:not(.opacity-100) {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .animate-on-scroll.opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Simplified entrance animations for better performance */
        .animate-on-scroll[data-animate="premium-slide-up"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-scale-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-fade-in-left"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-fade-in-right"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-bounce-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-glow-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll,
          .premium-hover,
          .premium-card,
          .text-glow {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
        
        /* Enhanced transitions */
        * {
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </>
  );
}