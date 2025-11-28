import NavBar from "./components/NavBar";
import Hero from "./sections/hero";
import LogoShowcase from "./sections/ShowscaseSection";
import FeatureCards from "./sections/FeatureCards";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ProjectsSection from "./sections/ProjectsSection";
import { Loader } from "@react-three/drei";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <LogoShowcase />
      <FeatureCards />
      <ProjectsSection />

      {/* <Experience /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Loader 
        containerStyles={{ backgroundColor: 'black' }} // Achtergrondkleur van laadscherm
        innerStyles={{ backgroundColor: 'white', width: '50%' }} // Het balkje zelf
        barStyles={{ backgroundColor: '#fff', height: '5px' }} // De voortgangskleur
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // De tekst
      />
    </>
  );
};

export default App;
