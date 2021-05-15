import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillContacts,
  FiDatabase,
  FiLogIn,
  FiMail,
  FiMapPin,
} from "react-icons/all";
import home from "../images/features/home.png";
import signin from "../images/features/signin.png";

const Features = () => {
  return (
    <section>
      <Container>
        <div
          style={{ borderBottom: "1px solid #dedede" }}
          className="mt-4 mb-4"
        >
          <h1 className="text-center">Features of Ureportapp</h1>
        </div>
        <Row>
          <Col xl={3} lg={3} md={12} sm={12} xs={12} data-aos="fade-up-right">
            <img src={home} alt="home img" width="100%" />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <Row data-aos="fade-up-left" className="features mb-3">
              <div className="col-2">
                <FiMail size={40} className="features-icon" />
              </div>
              <div className="col-9">
                <h2 className="text-white">Emergency SMS</h2>
                <p>
                  Sends emergency sms to all configured contacts when click the
                  button
                </p>
              </div>
            </Row>
            <Row data-aos="fade-up-left" className="features mb-3">
              <div className="col-2">
                <FiDatabase size={40} className="features-icon" />
              </div>
              <div className="col-9">
                <h2 className="text-white">No data needed</h2>
                <p>Without data bundle, you can send sms to all contacts</p>
              </div>
            </Row>
            <Row data-aos="fade-up-left" className="features mb-3">
              <div className="col-2">
                <FiMapPin size={40} className="features-icon" />
              </div>
              <div className="col-9">
                <h2 className="text-white">Live Location</h2>
                <p>
                  the users current location is send to all neighbors or
                  contacts
                </p>
              </div>
            </Row>
            <Row data-aos="fade-up-left" className="features mb-3">
              <div className="col-2">
                <AiFillContacts size={40} className="features-icon" />
              </div>
              <div className="col-9">
                <h2 className="text-white">Contacts</h2>
                <p>Can add unlimited number of contacts for free</p>
              </div>
            </Row>
            <Row data-aos="fade-up-left" className="features mb-3">
              <div className="col-2">
                <FiLogIn size={40} className="features-icon" />
              </div>
              <div className="col-9">
                <h2 className="text-white">Creating Accounts</h2>
                <p>
                  One accounts can be use for multiple devices. It is also
                  one-time login app
                </p>
              </div>
            </Row>
          </Col>
          <Col xl={3} lg={3} md={12} sm={12} xs={12} data-aos="fade-left">
            <img src={signin} alt="signin" width="100%" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
