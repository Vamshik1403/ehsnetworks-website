'use client';

import Link from "next/link";
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

export default function AboutUs() {
  return (
    <>
      <Header />
      
      {/* About Us Banner Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-slide-in-from-top">
              About Us
            </h1>
            <div className="text-lg md:text-xl text-white/90 leading-relaxed animate-slide-in-from-bottom space-y-6">
              <p className="animate-typewriter">
                Our expertise and domain knowledge of various businesses helped us deliver solutions with the precision to more than 
                <span className="text-yellow-300 font-bold animate-highlight"> 1000 companies </span>
                across different verticals in India.
              </p>
              <p className="animate-typewriter-delay">
                ENPL's clientele includes the leading enterprises in India from sectors like 
                <span className="text-cyan-300 font-semibold animate-pulse-slow"> Banking, Finance, Insurance, </span>
                <span className="text-pink-300 font-semibold animate-pulse-slow"> Manufacturing, Retail, </span>
                <span className="text-green-300 font-semibold animate-pulse-slow"> Telecommunications, IT/ITES, </span>
                <span className="text-orange-300 font-semibold animate-pulse-slow"> Entertainment, Healthcare, Government </span>
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About ENPL Company Section */}
      <section className="w-full bg-white py-20">
        <div className="px-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-12 animate-fade-in-scale">
              About Electrohelps Networks Private Limited
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed animate-fade-in-scale-delay">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <p className="animate-slide-in-from-left">
                    <span className="text-blue-600 font-semibold">Electrohelps Networks Pvt. Ltd</span> is a leading technology solutions provider and helps organizations to digitally transform their business.
                  </p>
                  <p className="animate-slide-in-from-left-delay">
                    Over the past <span className="text-red-500 font-bold text-xl">36 years</span>, we have strived to help our customers meet the most difficult challenges by providing innovative solutions that integrate cutting edge technologies.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="animate-slide-in-from-right">
                    We have been constantly upgrading our portfolio of solutions and skills to keep up with the fast-changing digital world.
                  </p>
                  <p className="animate-slide-in-from-right-delay">
                    Our vast experience across various industries, large investments in developing skills and solutions, ability to execute complex transactions and over 
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold text-xl"> 245+ professionals </span>
                    put us in the best position to deliver transformational solutions to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center of Excellence Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
        <div className="px-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 animate-slide-in-from-left">
              Center of Excellence (CoE)
            </h2>
            <div className="text-lg text-gray-700 text-center mb-16 animate-slide-in-from-right">
              <p className="mb-4">
                <span className="text-blue-600 font-semibold">ENPL Center of Excellence (CoE)</span> demonstrates best-of-breed technologies in real time, with hands-on solutions and Proofs-of-Concepts (PoCs) in partnership with leading technology OEMs.
              </p>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 animate-bounce-in">
              Our CoE Demonstrates
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Software Defined Everything",
                  icon: "/main-images/software-defined-icon.png",
                  description: "Advanced software-defined solutions for modern infrastructure"
                },
                {
                  title: "Data Protection & Cyber Recovery Solutions",
                  icon: "/main-images/data-protection-icon.png",
                  description: "Comprehensive data protection and cyber recovery strategies"
                },
                {
                  title: "Hybrid & Multi-Cloud Solutions",
                  icon: "/main-images/hybrid-cloud-icon.png",
                  description: "Seamless hybrid and multi-cloud infrastructure solutions"
                },
                {
                  title: "Workspace Anywhere Solutions",
                  icon: "/main-images/workspace-icon.png",
                  description: "Flexible workspace solutions for remote and hybrid work"
                },
                {
                  title: "Modern Generation Security Solutions for Network, Endpoint & Cloud",
                  icon: "/main-images/security-icon.png",
                  description: "Next-generation security for comprehensive protection"
                },
                {
                  title: "Disaster Recovery & Business Continuity Solutions",
                  icon: "/main-images/disaster-recovery-icon.png",
                  description: "Robust disaster recovery and business continuity planning"
                }
              ].map((solution, index) => (
                <div
                  key={solution.title}
                  className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-stagger-fade-in hover:scale-105 hover:shadow-2xl relative overflow-hidden h-full flex flex-col"
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-spin-slow" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce-slow" />
                    <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse-slow" />
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex-shrink-0">
                    <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-glow-pulse">
                      <img 
                        src={solution.icon} 
                        alt={solution.title} 
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4 flex-shrink-0">
                    <h3 className="text-xl font-bold text-center text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {solution.description}
                    </p>
                  </div>

                  {/* Navigation Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full bg-white py-20">
        <div className="px-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-16 animate-zoom-in">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Our Vision",
                  icon: "/main-images/vision-icon.png",
                  description: "To become the 'customer preferred' provider of AI-driven / Next Gen Technology solutions at a global level."
                },
                {
                  title: "Our Mission",
                  icon: "/main-images/mission-icon.png",
                  description: "Driving customer success by creating positive outcomes through Technology."
                },
                {
                  title: "Value Proposition",
                  icon: "/main-images/value-prop-icon.png",
                  description: "We understand the need of a common vendor for all your IT needs. Hence, we are committed to long-term partnerships by delivering on our commitments."
                },
                {
                  title: "Business Values",
                  icon: "/main-images/business-values-icon.png",
                  description: "Customer care and delight, Highest level of integrity, Respect for the individual, Pursuit of excellence through quality"
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-rotate-in hover:scale-105 hover:shadow-2xl relative overflow-hidden h-full flex flex-col"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-wiggle" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce-slow" />
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex-shrink-0">
                    <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-gentle">
                      <img 
                        src={value.icon} 
                        alt={value.title} 
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4 flex-shrink-0">
                    <h3 className="text-xl font-bold text-center text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
        <div className="px-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-16 animate-slide-in-from-bottom">
              Why Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Profound Industry Experience",
                  icon: "/main-images/experience-icon.png",
                  description: "We serve clients across all sectors including financial, healthcare, Telecomm, Manufacturing and Government sectors"
                },
                {
                  title: "Outcome Focused",
                  icon: "/main-images/outcome-icon.png",
                  description: "We partner with our customers to develop solutions that solve business problems"
                },
                {
                  title: "Global Expertise",
                  icon: "/main-images/global-expertise-icon.png",
                  description: "By leveraging our global reach, we provide best global solutions to our local customers"
                },
                {
                  title: "Global Partnership",
                  icon: "/main-images/global-partnership-icon.png",
                  description: "We work with leading technology OEM's who help us transform our customers businesses"
                }
              ].map((reason, index) => (
                <div
                  key={reason.title}
                  className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-flip-in hover:scale-105 hover:shadow-2xl relative overflow-hidden h-full flex flex-col"
                  style={{ animationDelay: `${0.8 + index * 0.15}s` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-spin-slow" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce-slow" />
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex-shrink-0">
                    <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-glow-pulse">
                      <img 
                        src={reason.icon} 
                        alt={reason.title} 
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4 flex-shrink-0">
                    <h3 className="text-xl font-bold text-center text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-slide-in-from-top">
              Connect With Us
            </h2>
            <Link href="/contact">
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden relative animate-bounce-in">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
                  Contact Us 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Partners />
      <Footer />
      
      <style jsx global>{`
        @keyframes slide-in-from-top {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-from-top {
          animation: slide-in-from-top 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-from-bottom {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-from-bottom {
          animation: slide-in-from-bottom 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-from-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-left {
          animation: slide-in-from-left 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-from-left-delay {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-left-delay {
          animation: slide-in-from-left 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
        }
        
        @keyframes slide-in-from-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-right {
          animation: slide-in-from-right 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-from-right-delay {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-right-delay {
          animation: slide-in-from-right 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
        }
        
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-scale-delay {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale-delay {
          animation: fade-in-scale-delay 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes stagger-fade-in {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-stagger-fade-in {
          animation: stagger-fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes zoom-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes rotate-in {
          0% { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        .animate-rotate-in {
          animation: rotate-in 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes flip-in {
          0% { opacity: 0; transform: rotateY(-90deg) scale(0.9); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }
        .animate-flip-in {
          animation: flip-in 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes typewriter {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-typewriter {
          animation: typewriter 1.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes typewriter-delay {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-typewriter-delay {
          animation: typewriter-delay 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s both;
        }
        
        @keyframes highlight {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-highlight {
          animation: highlight 2s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
} 