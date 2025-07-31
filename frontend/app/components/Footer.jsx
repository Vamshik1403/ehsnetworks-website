'use client';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMediaIcons = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="relative z-10 px-4 py-12">
                 {/* Top Section - Logo and Tagline */}
         <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-white/20">
           <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-up">
             {/* ENPL Logo */}
             <div className="relative">
               <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 animate-float-slow">
                 <span className="text-red-600 font-bold text-xl">E</span>
               </div>
               {/* Glow effect */}
               <div className="absolute inset-0 bg-red-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-500 blur-sm" />
             </div>
             
             <div>
               <h2 className="text-2xl font-bold text-white mb-1 hover:text-blue-200 transition-colors duration-300">
                 ENPL
               </h2>
               <p className="text-sm text-white/80 hover:text-white/90 transition-colors duration-300">
                 Integrating Technology | Driving Growth
               </p>
             </div>
           </div>
           
           {/* Floating particles for logo section */}
           <div className="absolute top-4 right-4 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700">
             <div className="w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
             <div className="w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
           </div>
         </div>

                 {/* Middle Section - Navigation and Social Media */}
         <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-white/20">
           {/* Navigation Links */}
           <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-6 md:mb-0">
             {['About Us', 'Careers', 'Newsletter', 'Case Studies'].map((link, index) => (
               <a
                 key={link}
                 href="#"
                 className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <span className="relative z-10">{link}</span>
                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
               </a>
             ))}
           </div>

           {/* Social Media Icons */}
           <div className="flex space-x-4">
             {socialMediaIcons.map((social, index) => (
               <a
                 key={social.name}
                 href={social.href}
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in-up relative"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <div className="hover:animate-bounce transition-transform duration-300">
                   {social.icon}
                 </div>
                 {/* Glow effect */}
                 <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-500 blur-sm" />
               </a>
             ))}
           </div>
         </div>

         {/* Bottom Section - Legal and Copyright */}
         <div className="flex flex-col md:flex-row items-center justify-between">
           {/* Legal Links */}
           <div className="flex space-x-6 mb-4 md:mb-0">
             {['Privacy Policy', 'Disclaimer'].map((link, index) => (
               <a
                 key={link}
                 href="#"
                 className="text-white/60 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <span className="relative z-10">{link}</span>
                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
               </a>
             ))}
           </div>

           {/* Copyright */}
           <div className="text-white/60 text-sm animate-fade-in-up">
             © {currentYear} ENPL Office Automation Pvt Ltd. All Rights Reserved.
           </div>
         </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-4px) rotate(180deg) scale(1.1); }
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-3px) rotate(-180deg) scale(1.05); }
        }
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-4px,0); }
          70% { transform: translate3d(0,-2px,0); }
          90% { transform: translate3d(0,-1px,0); }
        }
        .animate-bounce {
          animation: bounce 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 