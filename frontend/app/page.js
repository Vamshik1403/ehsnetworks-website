'use client';

import Header from "./components/Header"
import Banner from "./components/Banner"
import QuickFacts from "./components/QuickFacts"
import Solutions from "./components/Solutions"
import ConsultingServices from "./components/ConsultingServices"
import ServiceCards from "./components/ServiceCards"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import { useScrollAnimation } from "./lib/useScrollAnimation";

export default function Home() {
  const isVisible = useScrollAnimation();

  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <section 
        id="banner-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['banner-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Banner />
      </section>
      
      {/* Quick Facts Section */}
      <section 
        id="quick-facts-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['quick-facts-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <QuickFacts />
      </section>
      
      {/* Solutions Section */}
      <section 
        id="solutions-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['solutions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Solutions />
      </section>
      
      {/* Consulting Services Section
      <section 
        id="consulting-services-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['consulting-services-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ConsultingServices />
      </section> */}
      
      {/* Service Cards Section
      <section 
        id="service-cards-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['service-cards-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ServiceCards />
      </section> */}
      
      {/* Partners Section */}
      <section 
        id="partners-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['partners-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Partners />
      </section>
      
      {/* Let's Get In Touch Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 relative overflow-hidden">
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
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
}