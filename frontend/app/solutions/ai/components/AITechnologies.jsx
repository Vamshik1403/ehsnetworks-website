"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AITechnologies() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      category: "Machine Learning",
      icon: "🤖",
      color: "from-blue-500 to-blue-700",
      tools: [
        { name: "TensorFlow", description: "Open-source ML framework by Google", logo: "🔴" },
        { name: "PyTorch", description: "Deep learning framework by Facebook", logo: "🟠" },
        { name: "Scikit-learn", description: "Python ML library for data mining", logo: "🟡" },
        { name: "Keras", description: "High-level neural networks API", logo: "🟢" }
      ]
    },
    {
      category: "Natural Language Processing",
      icon: "💬",
      color: "from-purple-500 to-purple-700",
      tools: [
        { name: "BERT", description: "Bidirectional transformers for language understanding", logo: "🔵" },
        { name: "GPT Models", description: "Generative pre-trained transformers", logo: "🟣" },
        { name: "SpaCy", description: "Industrial-strength NLP library", logo: "🟤" },
        { name: "NLTK", description: "Natural language toolkit for Python", logo: "⚫" }
      ]
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      color: "from-indigo-500 to-indigo-700",
      tools: [
        { name: "OpenCV", description: "Computer vision and ML software library", logo: "🔴" },
        { name: "YOLO", description: "Real-time object detection system", logo: "🟠" },
        { name: "ResNet", description: "Deep residual learning framework", logo: "🟡" },
        { name: "DenseNet", description: "Densely connected convolutional networks", logo: "🟢" }
      ]
    },
    {
      category: "Data Processing",
      icon: "📊",
      color: "from-cyan-500 to-cyan-700",
      tools: [
        { name: "Apache Spark", description: "Unified analytics engine", logo: "🔵" },
        { name: "Pandas", description: "Data manipulation and analysis", logo: "🟣" },
        { name: "NumPy", description: "Numerical computing library", logo: "🟤" },
        { name: "Dask", description: "Parallel computing with task scheduling", logo: "⚫" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Technologies & Frameworks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge AI technologies and frameworks to build robust, 
            scalable, and efficient artificial intelligence solutions for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${tech.color} text-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{tech.icon}</div>
                <h3 className="text-2xl font-bold">{tech.category}</h3>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 gap-4">
                {tech.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-300 ${
                      hoveredTech === index ? 'scale-105 bg-white/20' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-2xl">{tool.logo}</div>
                      <div className="font-semibold text-sm">{tool.name}</div>
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className={`mt-20 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine the best AI technologies with our expertise to deliver 
              cutting-edge solutions that drive business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Source",
                description: "Leverage the power of community-driven AI frameworks",
                icon: "🔓",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Enterprise Ready",
                description: "Production-grade solutions with enterprise security",
                icon: "🏢",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Cloud Native",
                description: "Scalable AI solutions built for modern cloud infrastructure",
                icon: "☁️",
                color: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className={`mt-20 p-8 rounded-3xl bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our AI solutions integrate seamlessly with your existing systems, APIs, and 
              workflows, ensuring minimal disruption and maximum value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["REST APIs", "GraphQL", "Webhooks", "SDKs", "Docker", "Kubernetes"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
