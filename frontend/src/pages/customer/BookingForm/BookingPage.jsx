import React from "react";
import "./BookingPage.css";

function BookingPage() {
  return (
    <div className="booking-bg">
    <div className="container">
      <h2 className="title">Book Your Appointment</h2>
      <p className="subtitle">Please fill the below form , it will take only minute</p>
      <form className="booking-container">
        <div className="sub-Container">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="sub-Container">
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder="Phone" />
          </div>
          <div className="mb-3">
            <select name="service" id="service-select" className="form-control">
              <option value="">Select Your Service Type</option>
              <option value="wash">Hair Wash</option>
              <option value="cutting">Hair Cutting</option>
              <option value="facial">Facial</option>
              <option value="color">Color</option>
            </select>
          </div>
        </div>
        <div className="sub-Container">
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              placeholder="Choose Your Date"
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              className="form-control"
              placeholder="Choose Your Time"
            />
          </div>
        </div>
        <div className="mb-3 full-width">
         
            <textarea
              type="text"
              className="form-control"
              placeholder="Address"
              rows={3}
            ></textarea>
         
        </div>
        <div  className="button-wrapper full-width">
          <button className="btn btn-light">Book Now</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default BookingPage;
