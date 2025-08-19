import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssessmentAuditsHero from './components/AssessmentAuditsHero';
import AssessmentAuditsOverview from './components/AssessmentAuditsOverview';
import AssessmentAuditsServices from './components/AssessmentAuditsServices';
import AssessmentAuditsBenefits from './components/AssessmentAuditsBenefits';
import AssessmentAuditsCTA from './components/AssessmentAuditsCTA';
import Partners from '../../components/Partners';

export default function AssessmentAuditsPage() {
  return (
    <>
      <Header />
      <AssessmentAuditsHero />
      <AssessmentAuditsOverview />
      <AssessmentAuditsServices />
      <AssessmentAuditsBenefits />
      <AssessmentAuditsCTA />
      <Partners />
      <Footer />
    </>
  );
}
