"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import Clients from '../components/Clients';
import LetsGetInTouch from '../components/LetsGetInTouch';
import Link from 'next/link';

const solutions = [
  {
    title: 'Wireless',
    icon: '/solutions/wifi.png',
    link: '/solutions/wireless',
    services: [
      'Wireless LAN (Indoor/Outdoor Wi-Fi)',
      'Wireless Mesh Networks',
      'Hotspot & Captive Portal Solutions',
      'Managed Wi-Fi for Enterprises',
      'WiFi Solutions for Industrial IoT'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Networking',
    icon: '/solutions/networking.png',
    link: '/solutions/networking',
    services: [
      'Routing & Switching (LAN/WAN)',
      'Firewall & UTM Solutions',
      'WAN Optimization & Load Balancing',
      'Virtual Private Networks (VPNs)',
      'Network Monitoring & Management (NMS)',
      'Network Access Control (NAC)',
      'Software Defined Networking (SDN)'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    iconBg: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Telephony',
    icon: '/solutions/mobile.png',
    link: '/solutions/telephony',
    services: [
      'IP Telephony & VoIP Solutions',
      'On-Premise & Cloud PBX',
      'Unified Communications (UC)',
      'SIP Trunking & Gateway Integration',
      'Video Conferencing Solutions',
      'IVR Systems & Auto Attendant'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Video Surveillance(CCTV)',
    icon: '/solutions/cctv.png',
    link: '/solutions/video-surveillance',
    services: [
      'CCTV (Analog & IP) Solutions',
      'Video Analytics & AI-Powered Monitoring',
      'Remote Monitoring & Cloud Storage',
      'Integrated Security Solutions',
      'Access Control & Intrusion Integration'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    iconBg: 'from-green-400 to-green-500'
  },
  {
    title: 'Access Control',
    icon: '/solutions/password-code.png',
    link: '/solutions/access-controls',
    services: [
      'Biometric Authentication Systems',
      'RFID & Smart Card Solutions',
      'Face Recognition Terminals',
      'Multi-Door Access Control Panels',
      'Elevator & Parking Access Solutions',
      'Time & Attendance Systems',
      'Visitor Management Solutions',
      'Integration with HR/Payroll Systems'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    iconBg: 'from-indigo-400 to-indigo-500'
  },
  {
    title: 'Cloud & Computing',
    icon: '/solutions/cloud-server.png',
    link: '/solutions/cloud-computing',
    services: [
      'Cloud Infrastructure (IaaS, PaaS, SaaS)',
      'Virtualization & Hyperconverged Solutions',
      'Cloud Migration & Optimization',
      'Hybrid & Multi-Cloud Architecture',
      'Backup & Disaster Recovery (DRaaS)',
      'High-Performance Servers & Storage',
      'Managed Cloud Services'
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'from-cyan-50 to-cyan-100',
    iconBg: 'from-cyan-400 to-cyan-500'
  },
  {
    title: 'Softwares',
    icon: '/solutions/app-development.png',
    link: '/solutions/softwares',
    services: [
      'ERP & CRM Solutions',
      'Inventory & Supply Chain Management',
      'HR & Payroll Software',
      'Wi-Fi & Network Management Portals',
      'Security & Surveillance Software',
      'Shipping & Logistics Applications',
      'Mobile & Web App Development',
      'Custom Software Development'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    iconBg: 'from-orange-400 to-orange-500'
  },
  {
    title: 'Computers & Peripherals',
    icon: '/solutions/computers.png',
    link: '/end-points/laptops-desktops-mobile',
    services: [
      'Laptops & Desktop Computers',
      'Workstations & Servers',
      'High-Performance Computing Solutions',
      'Computer Accessories & Peripherals',
      'Storage Devices & Backup Solutions',
      'Networking Equipment & Cables',
      'Professional Audio/Video Equipment',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    iconBg: 'from-emerald-400 to-emerald-500'
  },
];

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Banner - Premium Style */}
      <section 
        ref={heroRef}
        className="relative min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-12"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">
          ⚡
        </div>
        <div className="absolute top-48 right-48 text-5xl text-purple-300 opacity-30 animate-float-slow animation-delay-1000">
          🌐
        </div>
        <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">
          📡
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="text-white">Solutions & Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive technology solutions. From wireless networking, server solutions, 
              cloud computing to software development and software services, we provide enterprise-grade solutions and services 
              from leading manufacturers for optimal performance and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              
              <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 animate-fade-in-up">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Best in class Solutions and Services for your business
            </h2>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up delay-200">
              Explore what else we can do for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {solutions.map((sol, i) => (
              <Link key={sol.title} href={sol.link}>
                <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-6 md:px-8 py-6 md:py-8 transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card h-full"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  {/* Subtle glass highlight on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 backdrop-blur-sm pointer-events-none transition-all duration-500" />

                  {/* Soft border */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500" />

                  {/* Faint particle accents */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                    <div className="particle" style={{ top: '6%', right: '4%', width: 10, height: 10 }} />
                    <div className="particle" style={{ bottom: '8%', left: '6%', width: 6, height: 6 }} />
                    <div className="particle" style={{ top: '48%', right: '12%', width: 8, height: 8 }} />
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-md ring-0 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl transition-all duration-500`}>
                      <img
                        src={sol.icon}
                        alt={sol.title}
                        className="w-12 h-12 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300">
                      {sol.title}
                      <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                    </h3>
                  </div>

                  {/* Services List */}
                  <div className="relative z-10 space-y-2">
                    {sol.services.map((service, serviceIndex) => (
                      <div
                        key={service}
                        className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${serviceIndex * 40}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle hover sheen */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                    <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Partners />
      </div>

      {/* Clients Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Clients />
      </div>

      {/* Let's Get in Touch Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <LetsGetInTouch />
      </div>

      <Footer />

      <style jsx global>{`
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up {
          animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-slow { 
          0%,100%{transform:translateY(0)} 
          50%{transform:translateY(-3px)} 
        }
        .animate-float-slow { 
          animation: float-slow 6s ease-in-out infinite; 
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Enhanced animation for delayed fade-in-up */
        @keyframes fade-in-up-delayed {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.35));
          border-radius: 9999px;
          opacity: 0.12;
          filter: blur(6px);
          transform: translateZ(0);
        }

        .animate-shine { 
          animation: shine 1.2s ease-in-out forwards; 
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.45 }
          100% { transform: translateX(140%) skewX(-12deg); opacity: 0; }
        }

        .group:hover { 
          transform: translateY(-10px) scale(1.02); 
        }

        /* Premium gradient animation */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Floating elements animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Pulse glow animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Slide in from right */
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </>
  );
}
