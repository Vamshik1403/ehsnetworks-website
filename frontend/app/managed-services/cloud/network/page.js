import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import NetworkInfrastructureHero from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureHero';
import NetworkInfrastructureOverview from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureOverview';
import NetworkInfrastructureChallenges from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureChallenges';
import NetworkInfrastructureSolutions from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureSolutions';
import NetworkInfrastructureServices from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureServices';
import NetworkInfrastructureContact from '../../cloud-services/network-infrastructure-management-services/components/NetworkInfrastructureContact';
import Partners from '../../../components/Partners';

export default function NetworkInfrastructurePage() {
  return (
    <>
      <Header />
      <NetworkInfrastructureHero />
      <NetworkInfrastructureOverview />
      <NetworkInfrastructureChallenges />
      <NetworkInfrastructureSolutions />
      <NetworkInfrastructureServices />
      <NetworkInfrastructureContact />
      <Partners />
      <Footer />
    </>
  );
}
