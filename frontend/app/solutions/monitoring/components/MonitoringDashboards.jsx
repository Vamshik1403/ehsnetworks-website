'use client';
import React, { useEffect, useRef, useState } from 'react';

const MonitoringDashboards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState(0);
  const sectionRef = useRef(null);

  const dashboards = [
    {
      title: 'Customer Dashboard',
      metrics: [
        { label: 'TOTAL REQUESTS', value: '541.00', type: 'number' },
        { label: 'Load average (5m avg)', value: '0.02', type: 'gauge', percentage: 2 },
        { label: 'Memory utilization', value: '68.24%', type: 'gauge', percentage: 68 }
      ],
      charts: ['CPU utilization', 'Memory utilization', 'Load average'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Azure Prod Instance',
      metrics: [
        { label: 'Available', value: '0', type: 'status', status: 'success' },
        { label: 'Unknown', value: '3', type: 'status', status: 'warning' }
      ],
      charts: ['Azure Prod VM Write iops', 'Azure Prod VM Inbound flows', 'Azure VMs by CPU usage'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Infrastructure Overview',
      metrics: [
        { label: 'CPU utilization', value: '3.09%', type: 'hexagon', status: 'success' },
        { label: 'Memory utilization', value: '60.83%', type: 'hexagon', status: 'warning' },
        { label: 'System load', value: '53.00%', type: 'hexagon', status: 'warning' }
      ],
      charts: ['Linux: CPU utilization', 'Linux: Memory utilization', 'App node memory usage'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Kubernetes Cluster',
      metrics: [
        { label: 'Service count', value: '18.00', type: 'number' },
        { label: 'Endpoint count', value: '19.00', type: 'number' }
      ],
      charts: ['Minikube CPU usage', 'Component health status'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Docker Status',
      metrics: [
        { label: 'Containers total', value: '25', type: 'number' },
        { label: 'Running', value: '2', type: 'status', status: 'success' }
      ],
      charts: ['Docker Prod: Container memory usage'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Zabbix Server Status',
      metrics: [
        { label: 'Values processed/sec', value: 'Active', type: 'chart' },
        { label: 'Data collectors', value: 'Utilization', type: 'chart' }
      ],
      charts: ['Values processed per second', 'Utilization of data collectors'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'success': return 'bg-green-100';
      case 'warning': return 'bg-yellow-100';
      case 'error': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:30px_30px] animate-grid-flow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Zabbix Customization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zabbix Customization allows users to tailor monitoring configurations, dashboards, and alerts 
            to meet specific business needs and requirements.
          </p>
        </div>

        {/* Dashboard Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dashboards.map((dashboard, index) => (
            <button
              key={dashboard.title}
              onClick={() => setActiveDashboard(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeDashboard === index
                  ? `bg-gradient-to-r ${dashboard.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {dashboard.title}
            </button>
          ))}
        </div>

        {/* Active Dashboard Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Dashboard Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dashboards[activeDashboard].title}
              </h3>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {dashboards[activeDashboard].metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                      metric.type === 'status' ? getStatusBg(metric.status) : 'bg-gray-50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className={`text-2xl font-bold ${
                      metric.type === 'status' ? getStatusColor(metric.status) : 'text-gray-900'
                    }`}>
                      {metric.value}
                    </div>
                    {metric.type === 'gauge' && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color}`}
                            style={{ width: `${metric.percentage}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Charts List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">Available Charts:</h4>
                {dashboards[activeDashboard].charts.map((chart, index) => (
                  <div
                    key={chart}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color} animate-pulse`} />
                    <span className="text-gray-700 font-medium">{chart}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Dashboard Preview</h4>
            
            {/* Mock Dashboard Interface */}
            <div className="space-y-4">
              {/* Header Bar */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color}`} />
                  <span className="font-semibold text-gray-700">Live Dashboard</span>
                </div>
                <div className="text-sm text-gray-500">Last updated: Just now</div>
              </div>

              {/* Chart Placeholders */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color} mx-auto mb-2 flex items-center justify-center text-white text-sm`}>
                        📊
                      </div>
                      <div className="text-xs text-gray-500">Chart {item}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-3">
                {['Healthy', 'Warning', 'Critical'].map((status, index) => (
                  <div
                    key={status}
                    className={`p-3 rounded-lg text-center text-sm font-medium ${
                      index === 0 ? 'bg-green-100 text-green-700' :
                      index === 1 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}
                  >
                    {status}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              Customize Dashboard
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MonitoringDashboards;
