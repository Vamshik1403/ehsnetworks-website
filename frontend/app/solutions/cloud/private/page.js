import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PrivateCloudHero from './components/PrivateCloudHero';
import PrivateCloudOverview from './components/PrivateCloudOverview';
import PrivateCloudServices from './components/PrivateCloudServices';
import PrivateCloudFeatures from './components/PrivateCloudFeatures';
import PrivateCloudAdvantages from './components/PrivateCloudAdvantages';
import PrivateCloudIntegration from './components/PrivateCloudIntegration';
import PrivateCloudPartners from './components/PrivateCloudPartners';
import PrivateCloudCTA from './components/PrivateCloudCTA';

export default function PrivateCloudPage() {
  return (
    <>
      <Header />
      <PrivateCloudHero />
      <PrivateCloudOverview />
      <PrivateCloudServices />
      <PrivateCloudFeatures />
      <PrivateCloudAdvantages />
      <PrivateCloudIntegration />
      <PrivateCloudPartners />
      <PrivateCloudCTA />
      <Footer />
    </>
  );
}
