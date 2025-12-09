import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "Aditi Sharma",
      email: "aditi@example.com",
      salon: "Glamour Beauty Studio",
      service: "Luxury Facial Treatment",
      date: "2024-05-12",
      time: "10:00 AM – 12:00 PM",
      status: "Confirmed"
    },
    {
      id: 2,
      customer: "Rhea Malhotra",
      email: "rhea@example.com",
      salon: "Glamour Beauty Studio",
      service: "Hair Spa + Blow Dry",
      date: "2024-05-15",
      time: "12:00 PM – 02:00 PM",
      status: "Confirmed"
    },
    {
      id: 3,
      customer: "Simran Kaur",
      email: "simran@example.com",
      salon: "Glamour Beauty Studio",
      service: "Manicure + Pedicure",
      date: "2024-05-20",
      time: "02:00 PM – 04:00 PM",
      status: "Cancelled"
    },
    {
      id: 4,
      customer: "Neha Patil",
      email: "neha@example.com",
      salon: "Glamour Beauty Studio",
      service: "Full Body Waxing",
      date: "2024-05-22",
      time: "04:00 PM – 06:00 PM",
      status: "Confirmed"
    }
  ]);

  return (
    <div className="admin-wrapper">
      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr key={item.id}>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>
                  <strong className="salon-name">{item.salon}</strong>
                  <br />
                  {item.service}
                </td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <span
                    className={`status-badge ${
                      item.status === "Cancelled" ? "cancelled" : "confirmed"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
