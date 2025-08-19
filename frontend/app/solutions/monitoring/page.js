import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MonitoringHero from './components/MonitoringHero';
import MonitoringCapabilities from './components/MonitoringCapabilities';
import MonitoringDashboards from './components/MonitoringDashboards';
import MonitoringServices from './components/MonitoringServices';
import MonitoringFAQ from './components/MonitoringFAQ';
import MonitoringCTA from './components/MonitoringCTA';

export default function MonitoringSolutionsPage() {
  return (
    <>
      <Header />
      <MonitoringHero />
      <MonitoringCapabilities />
      <MonitoringDashboards />
      <MonitoringServices />
      <MonitoringFAQ />
      <MonitoringCTA />
      <Footer />
    </>
  );
}
