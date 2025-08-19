"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button } from './ui/button';

const slides = [
  {
    image: "/main-images/networking1.png",
    title: "Seamless WiFi & Networking Solutions",
    description: "We deliver enterprise-grade wireless connectivity for offices, buildings, and remote teams—ensuring uninterrupted speed, coverage, and security for all your business needs.",
  },
  {
    image: "/main-images/networking2.png",
    title: "Smart Electronic Devices & Laptop Sales",
    description: "Power your workforce with top-tier hardware. We supply and support branded laptops, peripherals, and smart electronics for businesses and educational institutions.",
  },
  {
    image: "/main-images/networking3.png",
    title: "Scalable Cloud Infrastructure Services",
    description: "Migrate, manage, and scale with confidence. Our secure cloud solutions empower your business with flexibility, remote access, and reduced infrastructure costs.",
  },
  {
    image: "/main-images/networking4.png",
    title: "Software Development & Custom Tools",
    description: "Build the digital tools your business needs. From web portals to enterprise software, we design and develop solutions that streamline operations and boost productivity.",
  },
  {
    image: "/main-images/networking5.png",
    title: "IoT-Driven Smart Office Solutions",
    description: "Connect, automate, and optimize. Our IoT offerings enable smart attendance, energy management, and device monitoring for a future-ready workspace.",
  },
];

const Banner = () => {
  const [isHovering, setIsHovering] = useState(false);
  const bannerRef = useRef(null);

  return (
    <div 
      ref={bannerRef}
      className="relative bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] mx-auto w-full overflow-hidden min-h-[40vh] flex items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* High-visibility animated background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="animated-conic-bg opacity-60" />
        <div className="animated-gradient opacity-50" />
        <div className="animated-stripes" />
        <div className="animated-pattern" />
      </div>

      {/* Professional Floating Gradient Shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-300 opacity-30 blur-3xl rounded-full z-0 animate-float-glow" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-bl from-purple-400 via-pink-300 to-blue-300 opacity-25 blur-3xl rounded-full z-0 animate-float-glow-reverse" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 opacity-20 blur-2xl rounded-full z-0 animate-float-glow-slow" />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full z-10"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 w-full flex items-center min-h-[25vh]">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 w-full">
                {/* Left Side: Text with Enhanced Animations */}
                <div className="md:w-1/2 w-full flex flex-col justify-center max-w-xl animate-fade-in-up group">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold py-2 sm:py-4 tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 drop-shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-600 hover:to-pink-600 transition-all duration-700 animate-text-shimmer group-hover:animate-text-bounce">
                    {slide.title}
                  </h1>
                  <p className="py-2 sm:py-4 text-base sm:text-lg text-gray-700 animate-fade-in delay-200 group-hover:text-gray-800 transition-colors duration-500 group-hover:animate-pulse-slow">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-4 sm:py-6">
                    <Button className="bg-gray-900/80 text-white p-3 rounded-md shadow-xl hover:scale-110 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl transition-all duration-300 tracking-wide focus:ring-4 focus:ring-blue-300 animate-glow hover:animate-pulse-fast group/btn">
                      <span className="group-hover/btn:animate-bounce group-hover/btn:scale-110 transition-transform duration-200">READ MORE</span>
                    </Button>
                    <Button variant="outline" className="border-gray-300 bg-white/60 backdrop-blur-md hover:bg-white/90 hover:scale-110 hover:border-blue-300 hover:shadow-lg transition-all duration-300 shadow-md group/btn2">
                      <span className="group-hover/btn2:animate-pulse group-hover/btn2:scale-105 transition-transform duration-200">DOWNLOAD</span>
                    </Button>
                  </div>
                </div>
                
                {/* Right Side: Image with Enhanced Hover Effects */}
                <div className="md:w-1/2 w-full flex justify-center md:justify-end pr-0 md:pr-4 relative">
                  {/* Enhanced Gradient Glow/Halo Behind Image */}
                  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] z-0 pointer-events-none rounded-full bg-gradient-to-br from-blue-400/40 via-purple-300/30 to-pink-300/30 blur-2xl animate-pulse-slow ${isHovering ? 'animate-pulse-fast scale-110' : ''}`} />
                  <div className={`relative z-10 flex items-center justify-center h-[350px] sm:h-[400px] md:h-[450px] w-full ${idx >= 2 ? 'max-w-[600px] md:max-w-[700px]' : 'max-w-[400px] md:max-w-[500px]'} p-0 transition-all duration-500 hover:scale-105 group/image`}>
                    <div className="w-full h-full transition-transform duration-300 will-change-transform transform-gpu rounded-2xl">
                      <Image
                        src={slide.image}
                        width={idx >= 2 ? 600 : 400}
                        height={idx >= 2 ? 950 : 950}
                        alt={slide.title}
                        className="object-contain w-full h-full rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] group-hover/image:shadow-[0_20px_60px_0_rgba(59,130,246,0.4)]"
                      />
                    </div>
                    {/* Enhanced Hover Overlay Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover/image:from-blue-500/20 group-hover/image:via-purple-500/20 group-hover/image:to-pink-500/20 transition-all duration-500 pointer-events-none" />
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/image:border-blue-400/30 group-hover/image:animate-pulse-slow transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px 0 rgba(59,130,246,0.4), 0 0 40px 0 rgba(168,85,247,0.25); }
          50% { box-shadow: 0 0 40px 10px rgba(59,130,246,0.6), 0 0 60px 10px rgba(168,85,247,0.4); }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 6s infinite;
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 0.8s infinite;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.2); }
        }
        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(-180deg) scale(1.1); }
        }
        .animate-float-2 {
          animation: float-2 6s ease-in-out infinite;
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.3); }
        }
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 2s ease-in-out infinite;
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        @keyframes text-bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-10px,0); }
          70% { transform: translate3d(0,-5px,0); }
          90% { transform: translate3d(0,-2px,0); }
        }
        .animate-text-bounce {
          animation: text-bounce 1s;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-12px,0); }
          70% { transform: translate3d(0,-6px,0); }
          90% { transform: translate3d(0,-3px,0); }
        }
        .animate-bounce {
          animation: bounce 1s;
        }
        
        @keyframes float-glow {
          0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.7; transform: scale(1.1) rotate(180deg); }
        }
        .animate-float-glow {
          animation: float-glow 8s ease-in-out infinite;
        }
        
        @keyframes float-glow-reverse {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(0.9) rotate(-180deg); }
        }
        .animate-float-glow-reverse {
          animation: float-glow-reverse 10s ease-in-out infinite;
        }
        
        @keyframes float-glow-slow {
          0%, 100% { opacity: 0.25; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.05) rotate(90deg); }
        }
        .animate-float-glow-slow {
          animation: float-glow-slow 12s ease-in-out infinite;
        }

        /* Background animations for a more visible real-time effect */
        .animated-conic-bg {
          position: absolute;
          inset: -10%;
          background: conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(168,85,247,0.25), rgba(236,72,153,0.25), rgba(59,130,246,0.35));
          filter: blur(60px) saturate(120%);
          animation: rotate-bg 24s linear infinite;
        }
        @keyframes rotate-bg {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .animated-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(59,130,246,0.15), rgba(168,85,247,0.15), rgba(236,72,153,0.15));
          background-size: 300% 300%;
          animation: gradient-pan 10s ease-in-out infinite;
          mix-blend-mode: plus-lighter;
        }
        @keyframes gradient-pan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Highly visible diagonal moving stripes */
        .animated-stripes {
          position: absolute;
          inset: -20%;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(59,130,246,0.12) 0px,
            rgba(59,130,246,0.12) 12px,
            rgba(168,85,247,0.12) 12px,
            rgba(168,85,247,0.12) 24px
          );
          background-size: 200% 200%;
          animation: stripes-move 6s linear infinite;
          mix-blend-mode: soft-light;
        }
        @keyframes stripes-move {
          0% { background-position: 0% 0%; opacity: 0.5; }
          50% { background-position: 100% 100%; opacity: 0.7; }
          100% { background-position: 0% 0%; opacity: 0.5; }
        }

        /* Repeating dots pattern that slowly pans */
        .animated-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(59,130,246,0.18) 1px, transparent 1px);
          background-size: 18px 18px;
          animation: pattern-pan 20s linear infinite;
          opacity: 0.35;
          mix-blend-mode: overlay;
        }
        @keyframes pattern-pan {
          0% { background-position: 0px 0px; }
          100% { background-position: 360px 240px; }
        }


      `}</style>
    </div>
  );
};

export default Banner;