import React from "react";
import { Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import home from "../images/features/home.png";
import contact from "../images/features/contacts.png";
import corona from "../images/features/corona.png";
import signin from "../images/features/signin.png";
import signup from "../images/features/signup.png";

const images = [
  { original: signin, thumbnail: signin },
  { original: signup, thumbnail: signup },
  { original: home, thumbnail: home },
  { original: contact, thumbnail: contact },
  { original: corona, thumbnail: corona },
];

const Screenshots = () => {
  return (
    <section className="screenshots p-4">
      <Container>
        <div className="m-4 text-center border-bottom">
          <h1>Pictorial view of Ureportapp</h1>
        </div>
        <Col data-aos="flip-top">
          <ImageGallery items={images} thumbnailPosition="right" />
        </Col>
      </Container>
    </section>
  );
};

export default Screenshots;
