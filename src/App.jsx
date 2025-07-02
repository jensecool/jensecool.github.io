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

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <ProjectsSection />
      <LogoShowcase />

      <FeatureCards />
      {/* <Experience /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
