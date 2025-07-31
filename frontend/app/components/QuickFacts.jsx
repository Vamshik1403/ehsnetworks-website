'use client';

import React, { useState, useEffect, useRef } from 'react';

const facts = [
  { label: 'Year Of Establishment', value: 1987, color: 'from-blue-400 to-blue-200', highlight: false, suffix: '' },
  { label: 'Annual Revenues (In FY 2024-2025)', value: 1360, color: 'from-white to-white', highlight: true, suffix: 'Cr' },
  { label: 'Active Customers', value: 1000, color: 'from-blue-400 to-blue-200', highlight: false, suffix: '+' },
  { label: 'Customer Retention', value: 80, color: 'from-white to-white', highlight: true, suffix: '%' },
  { label: 'Geographical Presence (World Wide)', value: 9, color: 'from-blue-400 to-blue-200', highlight: false, suffix: '' },
];

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset count to 0 when element becomes visible
          setCount(0);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime = null;
      const startValue = 0;
      const endValue = end;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const QuickFacts = () => (
  <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
    <div className="w-full px-4">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-4 md:p-8 border border-blue-100 animate-fade-in-up w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2 tracking-tight animate-fade-in">ENPL - Your Technology Transformation Partner</h2>
        <div className="text-center text-gray-600 mb-8 animate-fade-in delay-200">
          ENPL is one of the largest IT Infrastructure solution providers in India, offering cutting edge Data Center, Cloud, Networking, Cyber Security and Modern Workplaces solutions. We have been constantly upgrading our portfolio of solutions and skills to keep up with the fast changing digital world. Our vast experience across various industries, large investments in developing skills and solutions, ability to execute complex transactions and sound financials puts us in the best position to deliver transformational solutions to our clients.
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6 tracking-tight animate-fade-in">Quick Facts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br ${fact.color} px-6 py-10 min-h-[180px] w-full transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up hover:animate-pulse-slow`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="text-base font-semibold text-blue-700 mb-2 text-center group-hover:text-blue-800 transition-colors duration-300">{fact.label}</div>
              <div className={`text-4xl md:text-5xl font-extrabold ${fact.highlight ? 'text-pink-600' : 'text-blue-900'} group-hover:text-purple-700 transition-all duration-500 group-hover:scale-110`}>
                <CountUp 
                  end={fact.value} 
                  duration={2500} 
                  suffix={fact.suffix}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  </section>
);

export default QuickFacts; 