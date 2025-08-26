import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SupportServicesPage() {
  const services = [
    {
      title: "Remote Support",
      description: "24/7 remote technical assistance and troubleshooting",
      href: "/managed-services/support/remote",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Onsite Support",
      description: "Professional on-site technical support and maintenance",
      href: "/managed-services/support/onsite",
      icon: "👨‍💼",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: "🔄",
      title: "24/7 Availability",
      description: "Round-the-clock support to ensure your business never stops"
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description: "Quick response times with guaranteed SLA commitments"
    },
    {
      icon: "🛡️",
      title: "Expert Team",
      description: "Certified IT professionals with years of experience"
    },
    {
      icon: "📱",
      title: "Multiple Channels",
      description: "Support via phone, email, chat, and remote access"
    },
    {
      icon: "📊",
      title: "Proactive Monitoring",
      description: "Preventive maintenance to avoid issues before they occur"
    },
    {
      icon: "🔧",
      title: "Comprehensive Solutions",
      description: "End-to-end support for all your IT infrastructure needs"
    }
  ];

  const benefits = [
    "Reduced downtime and improved productivity",
    "Cost-effective IT support solutions",
    "Scalable support as your business grows",
    "Regular system health checks and maintenance",
    "Compliance with industry standards",
    "Peace of mind knowing your IT is in expert hands"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional IT Support Services to Keep Your Business Running Smoothly
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive IT Support Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our support services provide businesses with reliable, professional IT assistance 
                to ensure optimal performance of their technology infrastructure. From remote 
                troubleshooting to on-site maintenance, we deliver solutions that minimize 
                downtime and maximize productivity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our experienced team of certified professionals and proven methodologies, 
                we help organizations maintain their competitive edge through reliable IT 
                support and proactive maintenance services.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional IT support through our comprehensive service offerings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Support Service Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support service that best fits your business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits of Our Support Services
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the advantages of professional IT support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Professional IT Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you maintain a reliable and efficient IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Get Started Today
                </button>
              </Link>
              <a href="tel:+917718811771">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
