import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PublicCloudHero from './components/PublicCloudHero';
import PublicCloudOverview from './components/PublicCloudOverview';
import PublicCloudServices from './components/PublicCloudServices';
import PublicCloudFeatures from './components/PublicCloudFeatures';
import PublicCloudAdvantages from './components/PublicCloudAdvantages';
import PublicCloudIntegration from './components/PublicCloudIntegration';
import PublicCloudPartners from './components/PublicCloudPartners';
import PublicCloudCTA from './components/PublicCloudCTA';

export default function PublicCloudPage() {
  return (
    <>
      <Header />
      <PublicCloudHero />
      <PublicCloudOverview />
      <PublicCloudServices />
      <PublicCloudFeatures />
      <PublicCloudAdvantages />
      <PublicCloudIntegration />
      <PublicCloudPartners />
      <PublicCloudCTA />
      <Footer />
    </>
  );
}
