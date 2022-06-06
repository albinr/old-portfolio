import React from "react";
// import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
// import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <PortfolioSection />
      <ContactSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
