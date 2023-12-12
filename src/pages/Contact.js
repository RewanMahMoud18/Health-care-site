import React, { Fragment } from "react";
import Banner from "../Components/Banner/Banner";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faIdBadge, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <>
      <Banner title="Conract US" smTitle="Contact Us" />
      <section className="contact-us">
        <div className="container bg-white">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <form>
                <input type="text" placeholder="Your Name" />

                <input type="email" placeholder="Email" />

                <input type="number" placeholder="Phone Numbers" />

                <select>
                  <option>Select Department</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>

                <textarea placeholder="Type Message"></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 general-class">
              <div className="side">
                <div className="overlay">
                  <div className="content-text">
                    <h3>Contact Us For Any Informations</h3>
                    <li>
                      <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> Location
                    </li>
                    <hr></hr>
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    <li>
                      <FontAwesomeIcon icon={faIdBadge} /> Email & Phone
                    </li>
                    <hr></hr>
                    <p>info@yourdomain.com (+68) 120034509</p>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} /> Follow Us
                    </li>
                    <hr></hr>
                    <div className="iconss">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="iconss">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="iconss">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
