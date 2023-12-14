import React from "react";
import doc1 from "../Assets/images/about-us 1.jpg";
import doc2 from "../Assets/images/about-us 2f.jpg";
import doc3 from "../Assets/images/about-us 3.jpg";
import "./aboutUs.css";
import {
  faTruckMedical,
  faBedPulse,
  faHandHoldingDroplet,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <ul className="about-img">
            <li>
              <img src={doc1}></img>
            </li>
            <li>
              <img src={doc2}></img>
            </li>
            <li>
              <img className="last-img" src={doc3}></img>
            </li>
            <li>
              <div class="exp-bx">
                20<span>Year Experience</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="about-text">
            <h5>about us</h5>
            <h1>The Great Place Of Medical Hospital Center</h1>
            <p>
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="fourdivs">
                <div className="about-icon">
                  <FontAwesomeIcon
                    className="vibrate-on-hover"
                    icon={faTruckMedical}
                  />
                </div>
                <div className="about4text">
                  <h2>Emergency Help</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="fourdivs">
                <div className="about-icon">
                  <FontAwesomeIcon
                    className="vibrate-on-hover"
                    icon={faBedPulse}
                  />
                </div>
                <div className="about4text">
                  <h2>Qualified Doctors</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="fourdivs">
                <div className="about-icon">
                  <FontAwesomeIcon
                    className="vibrate-on-hover"
                    icon={faHandHoldingDroplet}
                  />
                </div>
                <div className="about4text">
                  <h2>Best Professionals</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="fourdivs">
                <div className="about-icon">
                  <FontAwesomeIcon
                    className="vibrate-on-hover"
                    icon={faSyringe}
                  />
                </div>
                <div className="about4text">
                  <h2>Medical Treatment</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="read-btn">
            <a href="/about-us">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
