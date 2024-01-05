import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="d-none d-lg-block">
              <h5 className="pt-5">Shopify!!!</h5>
              <p style={{ color: "white", fontWeight: "bold" }}>
                Buy.Think.Grow..
              </p>
            </Carousel.Caption>{" "}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="d-none d-lg-block">
              <h5 className="pt-5">Exclusive SmartPhone</h5>
              <p style={{ color: "white", fontWeight: "bold" }}>
                All eyes on you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="d-none d-lg-block">
              <h5>Branded Laptop</h5>
              <p style={{ color: "white", fontWeight: "bold" }}>
                Always in style!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>{" "}
        <br />
        <br />
        <br />
      </div>
    </Fragment>
  );
};

export default Home;
