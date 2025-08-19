import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RemoteSupportHero from '../../support-services/remote-support/components/RemoteSupportHero';
import RemoteSupportServices from '../../support-services/remote-support/components/RemoteSupportServices';
import RemoteSupportBenefits from '../../support-services/remote-support/components/RemoteSupportBenefits';
import RemoteSupportCTA from '../../support-services/remote-support/components/RemoteSupportCTA';
import Partners from '../../../components/Partners';

export default function RemoteSupportPage() {
  return (
    <>
      <Header />
      <RemoteSupportHero />
      <RemoteSupportServices />
      <RemoteSupportBenefits />
      <RemoteSupportCTA />
      <Partners />
      <Footer />
    </>
  );
}
