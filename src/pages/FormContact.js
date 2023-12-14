import React, { useState } from "react";
import "./Contact.css";

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("Select Department");
  const [message, setMessage] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formHandeler = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      department === "Select Department" ||
      !message
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", { name, email, phone, department, message });
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("Select Department");
    setMessage("");
  };

  return (
    <form onSubmit={formHandeler}>
      <input
        type="text"
        placeholder="Your Name"
        onChange={changeName}
        required
      />

      <input
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />

      <input
        type="tel"
        placeholder="Phone Numbers"
        onChange={handlePhoneChange}
        required
        pattern="[0-9]{10}"
      />

      <select value={department} onChange={handleDepartmentChange} required>
        <option>Select Department</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </select>

      <textarea
        placeholder="Type Message"
        onChange={handleMessageChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormContact;
