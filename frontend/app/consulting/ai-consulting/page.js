import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AIConsultingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Strategic AI implementation and optimization for your business transformation
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI consulting services are under development. Check back soon for comprehensive AI strategy and implementation guidance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
