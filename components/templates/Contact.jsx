import React from "react";
import HeroSection from "../modules/HeroSection";
import ContactSection from "../modules/ContactSection";

const Contact = () => {
  return (
    <>
      <HeroSection
        span1="Enthusiastic"
        span2="Creativity"
        maintext="thinkers, creating unique endeavors powered by "
        dark={true}
      />
      <ContactSection />
    </>
  );
};

export default Contact;
