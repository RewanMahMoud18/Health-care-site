import React from "react";
import "./Booking.css";
import woman from "../../Assets/images/woman.png";
import booking from "../../Assets/images/bookImg.png";
import heart from "../../Assets/images/heart.png";
import BookingForm from "./BookingForm";
function Booking() {
  return (
    <>
      <div className="container space ">
        <div className="row ">
          <div className="col-md-4 col-lg-4 book-form">
            <BookingForm />
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="row">
              <div className="heart-img">
                <img src={heart}></img>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="book-img">
                  <img src={booking}></img>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="woman-img">
                  <img src={woman} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
