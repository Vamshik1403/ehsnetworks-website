// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';

// export default function NetworkingCTA() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const ctaOptions = [
//     {
//       icon: Phone,
//       title: "Call Us Now",
//       description: "Speak directly with our networking experts",
//       action: "+1 (555) 123-4567",
//       delay: 0.1
//     },
//     {
//       icon: Mail,
//       title: "Email Consultation",
//       description: "Get a detailed proposal via email",
//       action: "network@company.com",
//       delay: 0.2
//     },
//     {
//       icon: MessageCircle,
//       title: "Live Chat",
//       description: "Chat with our technical team",
//       action: "Start Chat",
//       delay: 0.3
//     }
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
//         {/* Animated Background Shapes */}
//         <motion.div
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
//         ></motion.div>
//         <motion.div
//           animate={{ 
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
//         ></motion.div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Main CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Ready to Transform
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Your Network?
//             </span>
//           </h2>
//           <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
//             Join hundreds of enterprises that have already upgraded their networking 
//             infrastructure with our proven solutions. Get started today and experience 
//             the difference.
//           </p>
          
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
//           >
//             Get Your Free Network Assessment
//             <ArrowRight className="w-5 h-5" />
//           </motion.div>
//         </motion.div>

//         {/* CTA Options Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {ctaOptions.map((option, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: option.delay }}
//               whileHover={{ y: -10 }}
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <option.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white mb-4">{option.title}</h3>
//                 <p className="text-blue-100 leading-relaxed mb-6">{option.description}</p>
//                 <div className="text-lg font-semibold text-cyan-300">{option.action}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Trust Indicators */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20"
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
//             <p className="text-blue-100 max-w-2xl mx-auto">
//               Our networking solutions power some of the world's most demanding enterprises
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
//               <div className="text-blue-100">Enterprise Clients</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">99.9%</div>
//               <div className="text-blue-100">Client Retention</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
//               <div className="text-blue-100">Years Experience</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
//               <div className="text-blue-100">Expert Support</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
//             <h3 className="text-3xl font-bold text-white mb-6">Don't Wait - Act Now</h3>
//             <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//               Every day without optimized networking costs your business money and productivity. 
//               Start your transformation today.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <Zap className="w-5 h-5" />
//                 Start Free Trial
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 border-2 border-blue-400 text-blue-200 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center gap-2"
//               >
//                 <Users className="w-5 h-5" />
//                 Schedule Demo
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from 'react';
import Link from 'next/link';

export default function VideoSurveillanceCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
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
              Ready to Secure Your Premises?
            </h3>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
          
          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              LET'S BUILD THE FUTURE OF
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                BUSINESS SECURITY
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our expert team is ready to help you implement cutting-edge video surveillance solutions that will 
              revolutionize your security infrastructure and provide peace of mind.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 hover:-translate-y-1">
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Button Content */}
                <span className="relative flex items-center space-x-3">
                  <span>Get Started Today</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
            
            <a href="tel:+917718811771">
              <button className="group px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </span>
              </button>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              Join hundreds of businesses that have already secured their premises with our video surveillance solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
