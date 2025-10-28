import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EndPointsHero from './components/EndPointsHero';
import ProductOverview from './components/ProductOverview';
import BenefitsSection from './components/BenefitsSection';
import Partners from '../../components/Partners';
import LetsGetInTouch from '../../components/LetsGetInTouch';

export default function LaptopsDesktopsMobilePage() {
  return (
    <>
      <Header />
      <EndPointsHero />
      <ProductOverview />
      <BenefitsSection />
      <Partners />
      <LetsGetInTouch />
      <Footer />
    </>
  );
}
