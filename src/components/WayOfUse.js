import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillContacts } from "react-icons/ai";
import { FiLock, FiMail, FiMapPin, FiRepeat } from "react-icons/fi";
import featureimg from "../images/features/features.png";

const WayOfUse = () => {
  return (
    <section className="bg-secondary text-dark p-4">
      <Container>
        <div className="m-4 text-center border-bottom">
          <h1>Reason Why you should use Ureportapp</h1>
        </div>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} data-aos="flip-left">
            <img src={featureimg} alt="feature img" width="100%" />
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12} data-aos="flip-right">
            <h1>How ureportapp assist you to report crime or emergency</h1>
            <p>
              Ureportapp main goal is to make it easy for you to get assistance
              in difficult circumstances such as Kidnapping, Robbing, Sexual
              Harassment and other related issues. You can send SMS with current
              location notifications to all of your friends with a single click
              of a button.
            </p>
            <p>
              <FiLock size={30} className="icon" /> Reliable and secure
              application
            </p>
            <p>
              <AiFillContacts size={30} className="icon" /> Add unlimited number
              of contacts
            </p>
            <p>
              <FiMail size={30} className="icon" /> Can send SMS without
              requiring data
            </p>
            <p>
              <FiMapPin size={30} className="icon" /> Sends current location to
              all contacts
            </p>
            <p>
              <FiRepeat size={30} className="icon" /> One account can be use for
              multiple devices
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WayOfUse;
