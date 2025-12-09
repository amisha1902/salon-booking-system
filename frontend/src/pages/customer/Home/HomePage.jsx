import React from "react";
import "./HomePage.css"; 
import heroImage from "../../../assets/hero.jpg";
import salonList from '../SalonList/SalonList'
import { Link, useNavigate } from "react-router-dom";
const salons = [
  {
    id: 1,
    name: "CHIC CUTS & COLOR",
    img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
  },
  {
    id: 2,
    name: "SERENITY SPA LOUNGE",
    img: "https://images.unsplash.com/photo-1559599238-308793637427",
    active: true,
  },
  {
    id: 3,
    name: "NAIL ARTISTRY HUB",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
  },
  {
    id: 4,
    name: "THE GENTRY",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
  },
  {
    id: 5,
    name: "REVIVE FACIAL STUDIO",
    img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
    active: true,
  },
  {
    id: 6,
    name: "BEAUTY EMPORIUM",
    img: "https://images.unsplash.com/photo-1559599238-308793637427",
  },
];

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img
  src={heroImage}
  alt="Salon Background"
  className=" position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
  style={{
    imageRendering: "auto"
  }}
/>

        <div className="hero-content text-center">
          <h1 className="hero-title">
            Enhance your inner radiance at our <span className="highlight">beauty sanctuary</span> 
            and let your true beauty shine.
          </h1>

          <div className="hero-buttons mt-4">
          <Link to="/salonList">
          <button className="btn btn-danger rounded-pill px-4">
           Search For Salons
          </button>
          </Link>
          <button className="btn bg-light text-dark rounded-pill px-4 ms-2">
            Explore Services
          </button>          </div>
        </div>
      </section>


      <section className="container py-5">
      <div className="row align-items-center">

        {/* ✅ LEFT CONTENT */}
        <div className="col-lg-4 mb-4 mb-lg-0">
          <h6 className="text-danger fw-semibold mb-2">POPULAR SALONS</h6>

          <p className="text-muted small mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="btn btn-danger rounded-pill px-4"         onClick={() => navigate(`/salonList`)}
>
            Explore All Salons
          </button>
        </div>

        {/* ✅ RIGHT CARDS GRID */}
        <div className="col-lg-8">
          <div className="row g-4">

            {salons.map((salon) => (
              <div className="col-md-4" key={salon.id}>
                <div
                  className={`card border-0 shadow-sm text-center p-3 ${
                    salon.active ? "border border-danger" : ""
                  }`}
                  style={{ borderRadius: "18px" }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={salon.img}
                      alt={salon.name}
                      className="rounded-circle object-fit-cover"
                      width="90"
                      height="90"
                    />
                  </div>

                  <h6 className="mt-3 fw-bold">{salon.name}</h6>

                  <p className="text-muted small mb-2">
                    Lorem ipsum dolor sit amet, adipiscing sed do.
                  </p>

                  {/* ✅ Rating */}
                  <div className="text-warning small">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

    </div>
  );
}
