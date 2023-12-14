import React from "react";
import BookingForm from "./BookingForm";
import Banner from "../Banner/Banner";

function BookingPage() {
  return (
    <>
      <Banner title="Booking" smTitle="Booking" />
      <div className="container w-50">
        <BookingForm />
      </div>
    </>
  );
}

export default BookingPage;
