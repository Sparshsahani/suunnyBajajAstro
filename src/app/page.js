
// import Crystal from "@/pages/Crystal";
// import Gemstones from "@/pages/Gemstones";
// import Rudraksha from "@/pages/Rudraksha";
import About from "@/components/About";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Energy from "@/components/Energy";
import Testemonials from "@/components/Testemonials";
// import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <About/>
      <Services/>
      <Energy/>
      <Testemonials/>
      {/* <Reviews/> */}
      <Faq/>

    </>
  );
}
