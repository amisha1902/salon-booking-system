import React from "react";
import "./ProfilePage.css";
import profile from "../../../../images/profile.jpeg";

function ProfilePage() {
  return (
    <div className="profile-bg">
      <div className="profile-container">
        <div className="profile-top">
          <img
            src={profile}
            alt="Profile"
            className="profile-pic"
          />

          <div className="profile-top-info">
            <h2 className="profile-name">Alex Carey</h2>
            <p className="profile-detail">alex@gmail.com</p>
            <p className="profile-detail">+91 • 9876543210</p>

            <div className="profile-buttons">
              <button className="profile-btn">Edit Profile</button>
              <button className="profile-btn">Change Photo</button>
            </div>
          </div>
        </div>

       
        <div className="profile-grid">

          
          <div className="profile-card">
            <h3 className="card-title">Address</h3>
            <p className="card-content">
              N-12/5, Pune<br />
              Maharashtra – 411045
            </p>
            <button className="small-btn">Edit</button>
          </div>

          
          <div className="profile-card">
            <h3 className="card-title">Upcoming Appointment</h3>
            <p className="card-content">Haircut — 12 Jan 2025</p>
            <p className="card-content">11:30 AM — Salon Service</p>
          </div>

        </div>

       
        <div className="profile-card full-card">
          <h3 className="card-title">Appointment History</h3>

          <div className="history-row">
            <p>Facial — 10 Dec 2024 — Completed</p>
            <p>₹800</p>
          </div>

          <div className="history-row">
            <p>Haircut — 05 Sep 2024 — Completed</p>
            <p>₹200</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
