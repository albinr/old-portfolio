import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Main } from "../Theme";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Main>
        <HeroSection />
        {/* <AboutSection/>
        <PortfolioSection />
        <ContactSection /> */}
      </Main>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
