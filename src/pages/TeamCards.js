import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import d1 from "../Assets/images/d1.jpg";
import d2 from "../Assets/images/d2.jpg";
import d3 from "../Assets/images/d3.jpg";
import d4 from "../Assets/images/d4.jpg";
import d5 from "../Assets/images/d5.jpg";
import d6 from "../Assets/images/d6.jpg";
import "./TeamCards.css";

function TeamCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d1} />
            <Card.Body>
              <Card.Title className="teams-title">
                Dr. Addition Smith
              </Card.Title>
              <Card.Text className="teams-txt">Dentist</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d2} />
            <Card.Body>
              <Card.Title className="teams-title">
                Dr. Maria Benjamin
              </Card.Title>

              <Card.Text className="teams-txt">Chiropractor</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d3} />
            <Card.Body>
              <Card.Title className="teams-title">
                Dr. David Benjamin
              </Card.Title>
              <Card.Text className="teams-txt">Cardiologist</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d4} />
            <Card.Body>
              <Card.Title className="teams-title">
                Dr. David Benjamin
              </Card.Title>

              <Card.Text className="teams-txt">Chiropractor</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d5} />
            <Card.Body>
              <Card.Title className="teams-title">
                Dr. Addition Smith
              </Card.Title>
              <Card.Text className="teams-txt">Dentist</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-lg-4">
          <Card>
            <img className="card-img" src={d6} />
            <Card.Body className="teams-content">
              <Card.Title className="teams-title">
                Dr. David Benjamin
              </Card.Title>
              <Card.Text className="teams-txt">Cardiologist</Card.Text>
              <ul className="our-team-icons">
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="our-team-icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
