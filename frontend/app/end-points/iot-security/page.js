import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IoTSecurityHero from '../galaxys-iot-physical-security-services/components/IoTSecurityHero';
import EndpointProtectionOverview from './components/EndpointProtectionOverview';
import KeyFeatures from './components/KeyFeatures';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Partners from '../../components/Partners';
import LetsGetInTouch from '../../components/LetsGetInTouch';

export default function IoTSecurityPage() {
  return (
    <>
      <Header />
      <IoTSecurityHero />
      <EndpointProtectionOverview />
      <KeyFeatures />
      <WhyChooseUs />
      <OurProcess />
      <Partners />
      <LetsGetInTouch />
      <Footer />
    </>
  );
}
