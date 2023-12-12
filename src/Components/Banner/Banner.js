import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Banner.css";
function Banner(props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>{props.title}</h2>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> home
              </Link>
              / {props.smTitle}
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
