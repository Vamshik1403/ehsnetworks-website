import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OnsiteSupportHero from '../components/OnsiteSupportHero';
import OnsiteSupportServices from '../components/OnsiteSupportServices';
import OnsiteSupportBenefits from '../components/OnsiteSupportBenefits';
import OnsiteSupportCTA from '../components/OnsiteSupportCTA';
import Partners from '../../../components/Partners';

export default function OnsiteSupportPage() {
  return (
    <>
      <Header />
      <OnsiteSupportHero />
      <OnsiteSupportServices />
      <OnsiteSupportBenefits />
      <Partners />
      <OnsiteSupportCTA />
      <Footer />
    </>
  );
}
