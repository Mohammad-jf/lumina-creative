import React from "react";
import HeroSection from "../modules/HeroSection";
import ServicesSection from "../modules/ServicesSection";
import TeamSection from "../modules/TeamSection";

const AboutPage = () => {
  return (
    <>
      <HeroSection
        span1="Inspired"
        span2="ingenuity"
        maintext="minds, shaping exeptional projects fueled by"
      />
      <ServicesSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;
