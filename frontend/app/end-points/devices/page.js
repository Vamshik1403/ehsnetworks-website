import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EndPointsHero from '../laptops-desktops-mobile/components/EndPointsHero';
import EnterpriseDesktops from '../laptops-desktops-mobile/components/EnterpriseDesktops';
import Workstations from '../laptops-desktops-mobile/components/Workstations';
import Laptops from '../laptops-desktops-mobile/components/Laptops';
import Tablets from '../laptops-desktops-mobile/components/Tablets';
import AppleProducts from '../laptops-desktops-mobile/components/AppleProducts';
import Partners from '../../components/Partners';

export default function DevicesPage() {
  return (
    <>
      <Header />
      <EndPointsHero />
      <EnterpriseDesktops />
      <Workstations />
      <Laptops />
      <Tablets />
      <AppleProducts />
      <Partners />
      <Footer />
    </>
  );
}
