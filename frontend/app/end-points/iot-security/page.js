import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IoTSecurityHero from '../galaxys-iot-physical-security-services/components/IoTSecurityHero';
import IoTManagement from '../galaxys-iot-physical-security-services/components/IoTManagement';
import AIEdgeInfrastructure from '../galaxys-iot-physical-security-services/components/AIEdgeInfrastructure';
import SmartBuildingSolution from '../galaxys-iot-physical-security-services/components/SmartBuildingSolution';
import PhysicalSecurityManagement from '../galaxys-iot-physical-security-services/components/PhysicalSecurityManagement';
import Partners from '../../components/Partners';

export default function IoTSecurityPage() {
  return (
    <>
      <Header />
      <IoTSecurityHero />
      <IoTManagement />
      <AIEdgeInfrastructure />
      <SmartBuildingSolution />
      <PhysicalSecurityManagement />
      <Partners />
      <Footer />
    </>
  );
}
