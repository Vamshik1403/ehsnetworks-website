import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VeryNewSectionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Very New Sections
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Coming soon - New innovative solutions and services
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                New Sections Under Development
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're working on exciting new sections and services. Stay tuned for innovative solutions that will transform your business technology landscape.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
