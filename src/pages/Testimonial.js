import React, { useState } from "react";
import testimonialImage from "../Assets/images/test.png";
import Doc1 from "../Assets/images/d1.jpg";
import Doc2 from "../Assets/images/d2.jpg";
import Doc3 from "../Assets/images/d3.jpg";
import Doc4 from "../Assets/images/d4.jpg";
import Doc5 from "../Assets/images/d5.jpg";
import Doc6 from "../Assets/images/d7.jpeg";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, CardFooter } from "react-bootstrap";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const patientReviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "John Doe",
      review:
        " Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % patientReviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? patientReviews.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="container testimonil-container">
      <div className="testimonial-content">
        <h6>Testimonial</h6>
        <h2>See What Are The Patients</h2>
        <h3>Saying About us</h3>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="warber">
            <img src={testimonialImage}></img>
            <ul className="testimonial-ul">
              <li>
                <div className="test-img1">
                  <img src={Doc1} />
                </div>
              </li>
              <li>
                <div className="test-img2">
                  <img src={Doc2} />
                </div>
              </li>
              <li>
                <div className="test-img3">
                  <img src={Doc3} />
                </div>
              </li>
              <li>
                <div className="test-img4">
                  <img src={Doc4} />
                </div>
              </li>
              <li>
                <div className="test-img5">
                  <img src={Doc5} />
                </div>
              </li>
              <li>
                <div className="test-img6">
                  <img src={Doc6} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <Card className="text-center">
            <Card.Body>
              <Card.Text className="card-textt">
                {patientReviews[activeIndex].review}
              </Card.Text>
              <Card.Title className="card-name">
                {patientReviews[activeIndex].name}
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <Button className="circular-button" onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              <Button className="circular-button" onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
