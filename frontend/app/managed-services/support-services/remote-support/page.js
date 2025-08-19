import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RemoteSupportHero from './components/RemoteSupportHero';
import RemoteSupportServices from './components/RemoteSupportServices';
import RemoteSupportBenefits from './components/RemoteSupportBenefits';
import RemoteSupportCTA from './components/RemoteSupportCTA';
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
