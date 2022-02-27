//Components
import { Fragment } from "react";
import Navbar from './Components/Common/Navbar'
import HeaderSection from './Components/HeaderSection'
import AboutSection from "./Components/AboutSection";
import Footer from './Components/Common/Footer'
import Preloader from "./Components/Common/Preloader";
import WorkSection from "./Components/WorkSection";
import ScreenshotSection from "./Components/ScreenshotSection";
import PriceSection from "./Components/PriceSection";
import ContactSection from "./Components/ContactSection";

//App container
const App = ()=> {
  return ( 
    <Fragment>
      {/* <!-- =============== Preloader =============== --> */}
      <Preloader />

      {/* <!-- =============== nav =============== --> */}
      <Navbar />
     
      {/* <!-- =============== header =============== --> */}
      <HeaderSection />

      {/* <!-- =============== About =============== --> */}
      <AboutSection />

      {/* <!-- =============== how it works =============== --> */}
      <WorkSection />

      {/* <!-- =============== Screenshots =============== --> */}
      <ScreenshotSection />

      {/* <!-- =============== Price =============== --> */}
      <PriceSection />

      {/* <!-- =============== Contact =============== --> */}
      <ContactSection />
     
      {/* <!-- ===============Footer================= --> */}
      <Footer />

    </Fragment>
  );
}

export default App;
