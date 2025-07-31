'use client';

import { useState } from 'react';
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState('Navi Mumbai');

  const officeData = {
    'Navi Mumbai': {
      address: "Industrial Gala No.24, and Gala No. 23, B- Building, 3rd floor, Gami Industriail Park, Plot No.C/39A, TTC Industrial Area, Pawane MIDC, Navi Mumbai, Pin code: 400705.",
      phone: "+91-22-27425057",
      support: "+91-22-42187700"
    },
    'Thane': {
      address: "Office details for Thane location",
      phone: "+91-22-XXXXXXX",
      support: "+91-22-XXXXXXX"
    },
    'Pune': {
      address: "Office details for Pune location",
      phone: "+91-20-XXXXXXX",
      support: "+91-20-XXXXXXX"
    },
    'Delhi': {
      address: "Office details for Delhi location",
      phone: "+91-11-XXXXXXX",
      support: "+91-11-XXXXXXX"
    },
    'Kolkata': {
      address: "Office details for Kolkata location",
      phone: "+91-33-XXXXXXX",
      support: "+91-33-XXXXXXX"
    },
    'Chennai': {
      address: "Office details for Chennai location",
      phone: "+91-44-XXXXXXX",
      support: "+91-44-XXXXXXX"
    },
    'Ahmedabad': {
      address: "Office details for Ahmedabad location",
      phone: "+91-79-XXXXXXX",
      support: "+91-79-XXXXXXX"
    },
    'Hyderabad': {
      address: "Office details for Hyderabad location",
      phone: "+91-40-XXXXXXX",
      support: "+91-40-XXXXXXX"
    },
    'Bangalore': {
      address: "Office details for Bangalore location",
      phone: "+91-80-XXXXXXX",
      support: "+91-80-XXXXXXX"
    },
    'Singapore - International': {
      address: "Office details for Singapore location",
      phone: "+65-XXXXXXX",
      support: "+65-XXXXXXX"
    }
  };

  return (
    <>
      <Header />
      
      {/* Contact Us Banner Section */}
      <section className="w-full bg-gradient-to-r from-gray-50 to-blue-50 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-8 animate-slide-in-from-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h1>
                
                {/* Contact Banner Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden group hover:shadow-3xl transition-all duration-700">
                  {/* Background gradient shape */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                  
                  {/* Dot grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 w-16">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow" 
                           style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-blue-600 font-semibold text-lg">ENPL's</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Contact Us</h2>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Circular Graphic */}
              <div className="flex justify-center lg:justify-end animate-slide-in-from-right">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-80 h-80 rounded-full border-8 border-blue-500 relative animate-spin-slow">
                    <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      {/* Isometric illustration */}
                      <div className="text-center space-y-4">
                        <div className="relative">
                          {/* Phone icon */}
                          <div className="w-24 h-40 bg-white rounded-lg shadow-lg mx-auto relative">
                            <div className="w-20 h-32 bg-gray-100 rounded-md mx-auto mt-2 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-xs font-bold text-gray-700">CONTACT US</div>
                                <div className="text-lg font-bold text-blue-600">24h</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Person with headset */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <div className="w-12 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
                          </div>
                        </div>
                        
                        {/* Contact icons */}
                        <div className="flex flex-col space-y-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce-slow" 
                               style={{ animationDelay: '0.5s' }}>
                            <span className="text-white font-bold text-sm">@</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce-slow"
                               style={{ animationDelay: '1s' }}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Contact us today for a free consultation and take the first step towards improving your business
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-20 relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-float-1" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full blur-xl animate-float-2" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-400 rounded-full blur-xl animate-float-3" />
        </div>
        
        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-scale">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                Contact us today for a free consultation and take the first step towards improving your business
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="text" 
                      placeholder="Your company name" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="tel" 
                      placeholder="Phone number" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <textarea 
                    placeholder="Tell us how we can assist you" 
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-300 resize-none"
                  />
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="group bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-red-700 transition-all duration-500 font-semibold text-lg overflow-hidden relative"
                  >
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                      Submit
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

             {/* Why Choose ENPL Section */}
       <section className="w-full bg-white py-20">
         <div className="px-4">
           <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Side - Interactive Stats */}
               <div className="animate-slide-in-from-left">
                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Why Choose ENPL?</h3>
                 <div className="relative">
                   {/* Interactive Stats Container */}
                   <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl relative overflow-hidden">
                     {/* Floating Elements */}
                     <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded-full animate-float-1 opacity-20" />
                     <div className="absolute top-16 right-12 w-12 h-12 bg-purple-500 rounded-full animate-float-2 opacity-20" />
                     <div className="absolute bottom-16 left-16 w-10 h-10 bg-pink-500 rounded-full animate-float-3 opacity-20" />
                     
                     {/* Stats Grid */}
                     <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                       <div className="grid grid-cols-2 gap-6 h-full">
                         {/* Years of Experience */}
                         <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                           <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">35+</div>
                           <div className="text-sm font-medium">Years of Excellence</div>
                           <div className="text-xs opacity-80 mt-1">Trusted Since 1987</div>
                         </div>
                         
                         {/* Global Reach */}
                         <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                           <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                           <div className="text-sm font-medium">Global Clients</div>
                           <div className="text-xs opacity-80 mt-1">Worldwide Presence</div>
                         </div>
                         
                         {/* Success Rate */}
                         <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                           <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
                           <div className="text-sm font-medium">Success Rate</div>
                           <div className="text-xs opacity-80 mt-1">Proven Results</div>
                         </div>
                         
                         {/* 24/7 Support */}
                         <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                           <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                           <div className="text-sm font-medium">Support</div>
                           <div className="text-xs opacity-80 mt-1">Always Available</div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Right Side - Value Propositions */}
               <div className="animate-slide-in-from-right">
                 <div className="text-center mb-8">
                   <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                     Your Trusted Technology Partner
                   </h3>
                   <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                     <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   {/* Innovation & Expertise */}
                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-blue-500">
                     <div className="flex items-start space-x-4">
                       <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                           Innovation & Expertise
                         </h4>
                         <p className="text-sm text-gray-600">
                           Cutting-edge technology solutions with 35+ years of industry expertise, delivering innovative results that drive your business forward.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   {/* Global Network */}
                   <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-purple-500">
                     <div className="flex items-start space-x-4">
                       <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                           Global Network
                         </h4>
                         <p className="text-sm text-gray-600">
                           Serving 500+ clients worldwide with comprehensive IT solutions, cloud services, and digital transformation expertise.
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   {/* 24/7 Support */}
                   <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-green-500">
                     <div className="flex items-start space-x-4">
                       <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.53A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.08-.041l-.08-.08z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                           24/7 Support
                         </h4>
                         <p className="text-sm text-gray-600">
                           Round-the-clock technical support and maintenance services ensuring your systems run smoothly without interruption.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Our Offices Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8">
                Our Offices
              </h3>
              
              {/* City Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.keys(officeData).map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveTab(city)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === city
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
              
              {/* Office Details */}
              <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-up">
                <h4 className="font-bold text-gray-800 mb-4">{activeTab}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> {officeData[activeTab].address}</p>
                  <p><strong>Phone:</strong> {officeData[activeTab].phone}</p>
                  <p><strong>Customer Support:</strong> {officeData[activeTab].support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="w-full bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Follow Us</h3>
              </div>
              
                             <div className="flex space-x-4">
                 {[
                   { name: 'Facebook', icon: 'facebook', color: 'bg-blue-600' },
                   { name: 'Instagram', icon: 'instagram', color: 'bg-pink-600' },
                   { name: 'LinkedIn', icon: 'linkedin', color: 'bg-blue-700' },
                   { name: 'Twitter', icon: 'twitter', color: 'bg-blue-400' },
                   { name: 'YouTube', icon: 'youtube', color: 'bg-red-600' }
                 ].map((social, index) => (
                   <div
                     key={social.name}
                     className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce-slow`}
                     style={{ animationDelay: `${index * 0.3}s` }}
                   >
                     {social.name === 'Facebook' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                       </svg>
                     )}
                     {social.name === 'Instagram' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                       </svg>
                     )}
                     {social.name === 'LinkedIn' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                       </svg>
                     )}
                     {social.name === 'Twitter' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                       </svg>
                     )}
                     {social.name === 'YouTube' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                       </svg>
                     )}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <Footer />
      
      <style jsx global>{`
        @keyframes slide-in-from-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-left {
          animation: slide-in-from-left 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slide-in-from-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-from-right {
          animation: slide-in-from-right 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
} 