import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NetworkingHero from './components/NetworkingHero';
import NetworkingOverview from './components/NetworkingOverview';
import NetworkingServices from './components/NetworkingServices';
import NetworkingSolutions from './components/NetworkingSolutions';
import NetworkingBenefits from './components/NetworkingBenefits';
import NetworkingCTA from './components/NetworkingCTA';

export default function NetworkingSolutionsPage() {
  return (
    <>
      <Header />
      <NetworkingHero />
      <NetworkingOverview />
      <NetworkingServices />
      <NetworkingSolutions />
      <NetworkingBenefits />
      <NetworkingCTA />
      <Footer />
    </>
  );
}
