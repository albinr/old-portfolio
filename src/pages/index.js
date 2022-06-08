import React, {useState} from "react";
// import AboutSection from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
// import Footer from "../components/Footer";
// import MobileNavbar from "../components/MobileNavbar";
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
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;
