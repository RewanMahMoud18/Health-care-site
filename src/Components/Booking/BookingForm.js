import React from "react";
import "./Booking.css";
function BookingForm() {
  return (
    <>
      <form className="booking-form">
        <h2>Book Appointment</h2>
        <select required>
          <option>Select Department</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <select required>
          <option>Select Doctor</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <input type="text" placeholder="Your Name" required />
        <input
          type="tel"
          placeholder="Phone Numbers"
          required
          pattern="[0-9]{10}"
        />
        <input type="date" required></input>
        <button>Appointment Now</button>
      </form>
    </>
  );
}

export default BookingForm;
