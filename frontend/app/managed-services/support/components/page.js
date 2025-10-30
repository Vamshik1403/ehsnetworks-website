import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OnsiteSupportHero from './OnsiteSupportHero';
import OnsiteSupportServices from './OnsiteSupportServices';
import OnsiteSupportBenefits from './OnsiteSupportBenefits';
import OnsiteSupportCTA from './OnsiteSupportCTA';

export default function OnsiteSupportPage() {
  return (
    <>
      <Header />
      <OnsiteSupportHero />
      <OnsiteSupportServices />
      <OnsiteSupportBenefits />
      <OnsiteSupportCTA />
      <Footer />
    </>
  );
}
