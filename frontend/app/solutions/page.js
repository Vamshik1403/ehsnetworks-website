'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../lib/useScrollAnimation';

export default function SolutionsPage() {
  const isVisible = useScrollAnimation();

  const services = [
    {
      title: "Wireless",
      description: "Wireless LAN (Indoor/Outdoor Wi-Fi), Wireless Mesh Networks, Hotspot & Captive Portal Solutions, Managed Wi-Fi for Enterprises, WiFi Solutions for Industrial IoT.",
      icon: '/solutions/wifi.png',
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "from-blue-600 to-blue-700",
      tagline: "Your digital connectivity partner"
    },
    {
      title: "Networking",
      description: "Routing & Switching (LAN/WAN), Firewall & UTM Solutions, WAN Optimization & Load Balancing, Virtual Private Networks (VPNs), Network Monitoring & Management (NMS), Network Access Control (NAC), Software Defined Networking (SDN).",
      icon: '/solutions/networking.png',
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "from-purple-600 to-purple-700",
      tagline: "Secure and scalable network solutions"
    },
    {
      title: "Telephony",
      tagline: "Enhance your communication infrastructure",
      description: "IP Telephony & VoIP Solutions, On-Premise & Cloud PBX, Unified Communications (UC), SIP Trunking & Gateway Integration, Video Conferencing Solutions, IVR Systems & Auto Attendant.",
      icon: '/solutions/mobile.png',
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
      iconBg: "from-gray-600 to-gray-700"
    },
    {
      title: "Video Surveillance(CCTV)",
      tagline: "Advanced video surveillance solutions",
      description: "CCTV (Analog & IP) Solutions, Video Analytics & AI-Powered Monitoring, Remote Monitoring & Cloud Storage, Integrated Security Solutions, Access Control & Intrusion Integration.",
      icon: '/solutions/cctv.png',
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      iconBg: "from-yellow-600 to-yellow-700"
    },
    {
      title: "Access Controls",
      description: "Biometric Authentication Systems, RFID & Smart Card Solutions, Face Recognition Terminals, Multi-Door Access Control Panels, Elevator & Parking Access Solutions, Time & Attendance Systems, Visitor Management Solutions, Integration with HR/Payroll Systems.",
      icon: '/solutions/password-code.png',
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      iconBg: "from-indigo-600 to-indigo-700",
      tagline: "Secure and efficient access control"
    },
    {
      title: "Cloud & Computing",
      description: "Cloud Infrastructure (IaaS, PaaS, SaaS), Virtualization & Hyperconverged Solutions, Cloud Migration & Optimization, Hybrid & Multi-Cloud Architecture, Backup & Disaster Recovery (DRaaS), High-Performance Servers & Storage, Managed Cloud Services.",
      icon: '/solutions/cloud-server.png',
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
      iconBg: "from-cyan-600 to-cyan-700",
      tagline: "Scalable and reliable cloud solutions"
    },
    {
      title: "Softwares",
      description: "ERP & CRM Solutions, Inventory & Supply Chain Management, HR & Payroll Software, Wi-Fi & Network Management Portals, Security & Surveillance Software, Shipping & Logistics Applications, Mobile & Web App Development, Custom Software Development.",
      icon: '/solutions/app-development.png',
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      iconBg: "from-orange-600 to-orange-700",
      tagline: "Tailored software solutions for your business"
    }
    ,
    {
      title: "Computers & Peripherals",
      tagline: "Right Hardware, Right Choice",
      description: `We help businesses choose the right computer hardware and peripherals that match their unique operational needs. From laptops and desktops to workstations, servers, and accessories, we deliver reliable, performance-driven computing solutions to power your business. Our team ensures you invest in technology that grows with you.`,
      icon: '/solutions/computers.png',
      color: "from-sky-500 to-sky-600",
      bgColor: "from-sky-50 to-sky-100",
      iconBg: "from-sky-600 to-sky-700"
    },
    {
      title: "Industrial Automation",
      tagline: "Smart Industry, Smarter Future",
      description: `We deliver industrial automation solutions that drive efficiency, accuracy, and safety in modern enterprises. By integrating intelligent control systems, IoT devices, and monitoring platforms, we help industries achieve higher productivity and reliability. Our solutions cover manufacturing, energy, and infrastructure needs with end-to-end automation expertise.`,
      icon: '/solutions/automation.png',
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      iconBg: "from-amber-600 to-amber-700"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section (upgraded premium look) */}
      <section className="w-full relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" style={{mixBlendMode: 'normal'}} />
        {/* Decorative gradient soft shape */}
        <div className="absolute -top-20 -left-40 w-[60rem] h-[30rem] rounded-full opacity-40 blur-3xl bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 animate-blob" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight animate-hero-pop">
            OUR SOLUTIONS
          </h1>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 animate-hero-pop">
              OUR EXPERTISE
            </h2>
            <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 mb-6 shadow-sm opacity-90" />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              World-Class Solutions for your Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto solutions-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="group solutions-card relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-700 animate-sol-fade-in-up overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Subtle glass highlight on hover (premium look) */}
                <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/6 pointer-events-none transition-all duration-500" />

                {/* Soft border + vignette */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500" />

                {/* Faint particle accents (desaturated, low opacity) */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  <div className="particle" style={{ top: '6%', right: '4%', width: 10, height: 10 }} />
                  <div className="particle" style={{ bottom: '8%', left: '6%', width: 6, height: 6 }} />
                  <div className="particle" style={{ top: '48%', right: '12%', width: 8, height: 8 }} />
                </div>

                {/* Icon Container - elevated ring + lift on hover */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <div className={`w-24 h-24 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-md ring-0 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl transition-all duration-500 ${service.iconBg}`}>
                    <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                  </div>
                </div>

                {/* Title with sliding underline */}
                <div className="relative z-10 mb-3">
                  <h3 className={`text-2xl font-bold mb-2 text-center bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                    <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium mb-4 text-center text-gray-600">{service.tagline}</p>

                {/* Description (refined) */}
                <div className="relative z-10">
                  <p className="text-gray-600 leading-relaxed transition-all duration-350 transform group-hover:translate-x-0 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Subtle hover sheen */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                </div>

                {/* Bottom Accent Line (subtle) */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left`} />
              </div>
            ))}
          </div>
        </div>
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
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(180deg) scale(1.2); }
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(-180deg) scale(1.1); }
        }
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.3); }
        }
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        /* Enhanced hover effects for solutions cards (subtle and professional) */
        .solutions-grid .solutions-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 18px 40px rgba(2,6,23,0.08);
        }
        
        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Solution card animations copied from home component for consistent premium feel */
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up { animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1); }

        @keyframes float-1 { 0%,100%{transform:translateY(0) rotate(0) scale(1); opacity:0.35}50%{transform:translateY(-6px) rotate(180deg) scale(1.05); opacity:0.65} }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }

        @keyframes float-2 { 0%,100%{transform:translateY(0) scale(1); opacity:0.25}50%{transform:translateY(-4px) scale(1.03); opacity:0.55} }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }

        @keyframes float-3 { 0%,100%{transform:translateY(0) scale(1); opacity:0.3}50%{transform:translateY(-8px) scale(1.08); opacity:0.6} }
        .animate-float-3 { animation: float-3 6s ease-in-out infinite; }

        @keyframes float-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)} }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes pulse-slow { 0%,100%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)} }
        .animate-pulse-slow { animation: pulse-slow 3.5s ease-in-out infinite; }

        /* particle style */
        .particle { position: absolute; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.35)); border-radius: 9999px; opacity: 0.12; filter: blur(6px); transform: translateZ(0); }

        /* sheen animation */
        .animate-shine { animation: shine 1.2s ease-in-out forwards; }
        @keyframes shine { 0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; } 50% { opacity: 0.45 } 100% { transform: translateX(140%) skewX(-12deg); opacity: 0; } }

  /* Hero pop and background blob animations */
  @keyframes hero-pop { 0% { opacity: 0; transform: translateY(18px) scale(0.98); } 60% { opacity: 1; transform: translateY(0) scale(1.01); } 100% { transform: translateY(0) scale(1); } }
  .animate-hero-pop { animation: hero-pop 700ms cubic-bezier(0.22,1,0.36,1) both; }

  @keyframes blob { 0%{transform:scale(1) translate(0,0)}33%{transform:scale(1.05) translate(8px,-6px)}66%{transform:scale(0.98) translate(-6px,8px)}100%{transform:scale(1) translate(0,0)} }
  .animate-blob { animation: blob 8s ease-in-out infinite; }

      `}</style>
    </>
  );
}
