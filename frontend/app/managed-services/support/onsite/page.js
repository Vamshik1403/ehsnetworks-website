import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OnsiteSupportHero from '../../support-services/onsite-support/components/OnsiteSupportHero';
import OnsiteSupportServices from '../../support-services/onsite-support/components/OnsiteSupportServices';
import OnsiteSupportBenefits from '../../support-services/onsite-support/components/OnsiteSupportBenefits';
import OnsiteSupportCTA from '../../support-services/onsite-support/components/OnsiteSupportCTA';
import Partners from '../../../components/Partners';

export default function OnsiteSupportPage() {
  return (
    <>
      <Header />
      <OnsiteSupportHero />
      <OnsiteSupportServices />
      <OnsiteSupportBenefits />
      <OnsiteSupportCTA />
      <Partners />
      <Footer />
    </>
  );
}
