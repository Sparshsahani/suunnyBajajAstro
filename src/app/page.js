import About from "@/components/About";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Energy from "@/components/Energy";
import Testemonials from "@/components/Testemonials";


import Faq from "@/components/Faq";
import TheTradingPopup from "@/components/TheTradingPopup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* <TheTradingPopup/> */}
      <About/>
      <Services/>
      <Energy/>
      <Testemonials/>
      <Faq/>
      <Footer/>

    </>
  );
}
