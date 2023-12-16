import React from "react";
import Banner from "../Banner/Banner";
import AboutUs from "../../pages/AboutUs";
import "./Aboutus.css";
import TeamCards from "../../pages/TeamCards";
import OurNews from "../../pages/OurNews";
function Aboutus() {
  return (
    <>
      <Banner title="About Us" smTitle="About Us" />
      <AboutUs />
      <div className="container ">
        <div className="about-head">
          <h5>Our Doctor</h5>
          <h1>Meet Best Doctors</h1>
        </div>
      </div>
      <TeamCards />
      <OurNews />
    </>
  );
}

export default Aboutus;
