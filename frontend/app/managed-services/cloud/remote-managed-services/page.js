import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RemoteManagedServicesHero from './components/RemoteManagedServicesHero';
import RemoteManagedServicesOverview from './components/RemoteManagedServicesOverview';
import RemoteManagedServicesChallenges from './components/RemoteManagedServicesChallenges';
import RemoteManagedServicesBenefits from './components/RemoteManagedServicesBenefits';
import RemoteManagedServicesContact from './components/RemoteManagedServicesContact';
import Partners from '../../../components/Partners';

export default function RemoteManagedServicesPage() {
  return (
    <>
      <Header />
      <RemoteManagedServicesHero />
      <RemoteManagedServicesOverview />
      <RemoteManagedServicesChallenges />
      <RemoteManagedServicesBenefits />
      <RemoteManagedServicesContact />
      <Partners />
      <Footer />
    </>
  );
}
