import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-4 bg-dark">
      <Container>
        <div className="footer">
          <div>
            <h4>Copyright &copy; 2021</h4>
          </div>
          <div>
            <h3>UREPORTAPP</h3>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
