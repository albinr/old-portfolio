import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import PortfolioSection from "../components/PortfolioSection";
import Sidebar from "../components/Sidebar";
// import ContactSection from "../components/ContactSection";
// import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      {/* <PortfolioSection />
      <ContactSection />
      <Footer /> */}
    </>
  );
};

export default Home;