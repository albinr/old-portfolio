import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SocialList from "../components/Socials";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      {/* <SocialList/> */}
      <main>
        <HeroSection />
        <AboutSection/>
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer/>
    </>
  );
};

export default Home;
