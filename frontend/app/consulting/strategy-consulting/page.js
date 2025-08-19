import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StrategyConsultingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Strategy Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Strategic planning and business transformation consulting for your digital future
            </p>
          </div>className
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategy consulting services are under development. Check back soon for comprehensive strategic planning and business transformation guidance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
