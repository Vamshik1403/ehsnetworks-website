import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RemoteManagedServicesHero from '../remote-managed-services/components/RemoteManagedServicesHero';
import RemoteManagedServicesOverview from '../remote-managed-services/components/RemoteManagedServicesOverview';
import RemoteManagedServicesChallenges from '../remote-managed-services/components/RemoteManagedServicesChallenges';
import RemoteManagedServicesBenefits from '../remote-managed-services/components/RemoteManagedServicesBenefits';
import RemoteManagedServicesContact from '../remote-managed-services/components/RemoteManagedServicesContact';
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
