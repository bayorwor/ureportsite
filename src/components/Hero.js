import React from "react";
import { Container } from "reactstrap";
import Download from "./Download";

const Hero = () => {
  return (
    <section className="hero-container">
      <Container>
        <h1 className="text-hero text-center mb-4">
          Ureportapp is a mobile application that allows the users to report
          crime such as Kidnapping, Sexual harassment, Child abuse and others
          related issues to neighbors
        </h1>
        <Download />
      </Container>
    </section>
  );
};

export default Hero;
