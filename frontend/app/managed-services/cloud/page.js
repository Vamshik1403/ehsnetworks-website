import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CloudServicesPage() {
  const services = [
    {
      title: "Network Infrastructure Management",
      description: "Professional network administration and security management",
      href: "/managed-services/cloud/network",
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Remote Managed Services",
      description: "Professional remote IT management and monitoring services",
      href: "/managed-services/cloud/remote",
      icon: "🖥️",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal disruption"
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance management"
    },
    {
      icon: "📊",
      title: "Performance Monitoring",
      description: "24/7 monitoring and optimization of cloud infrastructure"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Strategic cost management and resource optimization"
    },
    {
      icon: "🔄",
      title: "Backup & Recovery",
      description: "Comprehensive disaster recovery and business continuity"
    },
    {
      icon: "🚀",
      title: "Scalability",
      description: "Flexible scaling to meet your business growth needs"
    }
  ];

  const benefits = [
    "Reduced infrastructure costs and improved ROI",
    "Enhanced security and compliance standards",
    "Increased operational efficiency and productivity",
    "Scalable solutions that grow with your business",
    "24/7 monitoring and proactive issue resolution",
    "Access to latest cloud technologies and innovations"
  ];

  const cloudPlatforms = [
    {
      name: "AWS",
      description: "Amazon Web Services",
      icon: "☁️"
    },
    {
      name: "Azure",
      description: "Microsoft Azure",
      icon: "🔷"
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform",
      icon: "🔵"
    },
    {
      name: "Private Cloud",
      description: "On-premises cloud solutions",
      icon: "🏢"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive Cloud Infrastructure Management and Optimization Services
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business with Cloud Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our cloud services help businesses leverage the power of cloud computing 
                to improve efficiency, reduce costs, and scale operations seamlessly. 
                From migration to ongoing management, we provide end-to-end cloud 
                solutions tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise across major cloud platforms and a focus on security, 
                performance, and cost optimization, we ensure your cloud journey is 
                smooth and successful.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud Service Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cloud solutions to drive your business forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
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

        {/* Cloud Platforms Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cloud Platforms We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise across major cloud providers and private cloud solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {platform.description}
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
                Our Cloud Service Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the cloud service that best fits your business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits of Our Cloud Services
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the advantages of professional cloud management
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1">
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let us help you leverage the power of cloud computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
                  Get Started Today
                </button>
              </Link>
              <a href="tel:+917718811771">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300">
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
