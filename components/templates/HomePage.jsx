import React from "react";
import HeroSection from "../modules/HeroSection";
import PhotosSection from "../modules/PhotosSection";

const HomePage = () => {
  return (
    <>
      <HeroSection
        span1="Passionate"
        span2="innovation"
        maintext="creatives crafting distinct projects, driven by"
      />
      <PhotosSection />
    </>
  );
};

export default HomePage;
