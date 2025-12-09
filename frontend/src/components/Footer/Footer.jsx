import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container">
        <div
          className="rounded-4 p-5 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #fff7f2, #fefefe)",
          }}
        >
          <div className="row gy-4">

            {/* ✅ Brand */}
            <div className="col-md-3">
              <h4
                className="fw-bold mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Glamora <span className="text-danger">BEAUTY</span>
              </h4>

              <ul className="list-unstyled text-muted">
                <li className="mb-2">Our Story</li>
                <li className="mb-2">Services</li>
                <li className="mb-2">Careers</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* ✅ Support */}
            <div className="col-md-3">
              <h6 className="fw-semibold mb-3 text-secondary">SUPPORT</h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">Booking & Appointments</li>
                <li className="mb-2">Gift Cards</li>
                <li className="mb-2">FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* ✅ Connect */}
            <div className="col-md-3">
              <h6 className="fw-semibold mb-3 text-secondary">CONNECT</h6>
              <ul className="list-unstyled text-muted">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaInstagram /> Instagram
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaFacebookF /> Facebook
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaTiktok /> TikTok
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaYoutube /> YouTube
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FaPinterestP /> Pinterest
                </li>
              </ul>
            </div>

            {/* ✅ Newsletter */}
            <div className="col-md-3">
              <h6 className="fw-semibold mb-3">
                Stay Connected & Save
              </h6>

              <p className="text-muted small">
                Unlock exclusive offers & updates.
              </p>

              <input
                type="email"
                className="form-control mb-3 rounded-pill"
                placeholder="Your Email Address"
              />

              <button className="btn btn-danger w-100 rounded-pill">
                Subscribe
              </button>
            </div>

          </div>

          {/* ✅ Divider */}
          <hr className="my-4" />

          {/* ✅ Bottom Bar */}
          <div className="row align-items-center text-center text-md-start">

            <div className="col-md-6 text-muted small">
              © 2024 Glamora Beauty. All rights reserved.
            </div>

            <div className="col-md-6 text-md-end d-flex justify-content-md-end justify-content-center gap-3 mt-3 mt-md-0">
              <span className="text-muted small">Experience Tranquility.</span>

              <span className="text-danger"><FaInstagram /></span>
              <span className="text-danger"><FaFacebookF /></span>
              <span className="text-danger"><FaYoutube /></span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
