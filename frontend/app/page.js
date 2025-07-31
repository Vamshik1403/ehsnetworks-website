import  Header  from "./components/Header"
import Banner from "./components/Banner"
import QuickFacts from "./components/QuickFacts"
import Solutions from "./components/Solutions"
import ConsultingServices from "./components/ConsultingServices"
import ServiceCards from "./components/ServiceCards"
import Partners from "./components/Partners"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <QuickFacts />
      <Solutions />
      <ConsultingServices />
      <ServiceCards />
      <Partners />
      <Footer />
    </>
  );
}