import React from "react";
import "./footer.css";
import footerLogo from "../../Assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebookImg from "../../Assets/images/facebook.png";
import twitterImg from "../../Assets/images/twitterpng.png";
import instaImg from "../../Assets/images/insta.png";
import linkedInImg from "../../Assets/images/linkedin.png";
import animation3 from "../../Assets/images/animatefooter3.png";
import animation1 from "../../Assets/images/animatefooter.png";

function Foooter() {
  return (
    <footer>
      <div className="animation1">
        <img src={animation1}></img>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img
              src={footerLogo}
              className="footer-logo"
              alt="footer logo"
              title="footer logo"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h5>+01 123 456 7890</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/booking">Booking</a>
              </li>
              <li>
                <a href="/contact">Faq's</a>
              </li>
              <li>
                <a href="/contact">Blogs</a>
              </li>
              <li>
                <a href="/contact">Out Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>
                <a href="/about">Dental Care</a>
              </li>
              <li>
                <a href="/services">Cardiac Clinic</a>
              </li>
              <li>
                <a href="/booking">Massege Therapy</a>
              </li>
              <li>
                <a href="/contact">Cardiology</a>
              </li>
              <li>
                <a href="/contact">Precise Diagnosis</a>
              </li>
              <li>
                <a href="/contact">Abmbulance Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subcribe</h2>
            <input type="email" placeholder="Email Address"></input>
            <button type="submit">Subscribe Now</button>
            <ul className="social">
              <li>
                <a href="#">
                  <img src={facebookImg}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterImg}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instaImg}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedInImg}></img>
                </a>
              </li>
            </ul>
            <div className="animation">
              <img src={animation3}></img>
            </div>
          </div>
        </div>

        <hr></hr>
        <span>Copyright © 2023 Design & Developed by ThemeTrades</span>
      </div>
    </footer>
  );
}

export default Foooter;
