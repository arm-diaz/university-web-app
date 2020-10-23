import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: IMAGES.slice(0, 10),
    };
  }

  render() {
    return (
      <section id="gallary">
        <Container
          fluid
          className="message-container"
          style={{ margin: 0, padding: 0 }}
        >
          <Row style={{ margin: 0, padding: 0 }}>
            <Col
              className="mx-auto my-3 text-center text-capitalize"
              style={{ margin: 0, padding: 0 }}
            >
              <h1>
                University <strong style={{ color: "brown" }}>Gallery</strong>
              </h1>
            </Col>
          </Row>
          <Gallery images={this.state.imageData} />
          <div className="text-center">
            <Button
              variant="danger"
              data-aos="zoom-in"
              style={{ margin: "20px 0" }}
            >
              <Link to="/gallery">View More</Link>
            </Button>
          </div>
        </Container>
      </section>
    );
  }
}

export default PhotoGallery;
