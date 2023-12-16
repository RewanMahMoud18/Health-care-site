import React from "react";
import "./OurNews.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1 from "../Assets/images/card1.jpg";
import card2 from "../Assets/images/card2.jpg";
import card3 from "../Assets/images/card3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function OurNews() {
  return (
    <div className="container news-container">
      <div className="row">
        <div className="news-desc">
          <h6>Latest News</h6>
          <h2>Our Latest News</h2>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={card1} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p>in this hospital there are special sergeon</p>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={card2} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p>in this hospital there are special sergeon</p>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4 news-mg">
          <Card>
            <Card.Img variant="top" src={card3} alt="Card Image" />
            <Card.Body>
              <h5 className="mb-3 news-content">
                John Doe
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-orange mr-2"
                />
                21 July 2023
              </h5>

              <p>in this hospital there are special sergeon</p>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default OurNews;
