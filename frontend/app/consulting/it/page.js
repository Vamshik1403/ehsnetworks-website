import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ITConsultingHero from '../it-consulting/components/ITConsultingHero';
import ITConsultingOverview from '../it-consulting/components/ITConsultingOverview';
import ITConsultingServices from '../it-consulting/components/ITConsultingServices';
import ITConsultingBenefits from '../it-consulting/components/ITConsultingBenefits';
import ITConsultingCTA from '../it-consulting/components/ITConsultingCTA';
import Partners from '../../components/Partners';

export default function ITPage() {
  return (
    <>
      <Header />
      <ITConsultingHero />
      <ITConsultingOverview />
      <ITConsultingServices />
      <ITConsultingBenefits />
      <ITConsultingCTA />
      <Partners />
      <Footer />
    </>
  );
}
