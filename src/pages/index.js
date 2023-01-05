import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
// import SkillSection from "../components/SkillSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutSection/>
      {/* <SkillSection/> */}
      <PortfolioSection />
      <ContactSection />
      <Footer/>
    </>
  );
};

export default Home;
