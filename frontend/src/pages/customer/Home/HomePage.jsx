import React from "react";
import "./HomePage.css"; 

const popularSalons = [
  {
    id: 1,
    name: "Hair Salon Haven",
    img: "/hair1.jpeg",
  },
  {
    id: 2,
    name: "Waxing Salon Haven",
    img: "https://images.unsplash.com/photo-1598435228331-fbd1b56af8e5",
  },
  {
    id: 3,
    name: "Skincare Salon Haven",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143" 
          alt="Salon Background"
          className="hero-img"
        />

        <div className="hero-content text-center">
          <h1 className="hero-title">
            Enhance your inner radiance at our <span className="highlight">beauty sanctuary</span> 
            and let your true beauty shine.
          </h1>

          <div className="hero-buttons mt-4">
            <button className="btn btn-primary me-3">Search Salons</button>
            <button className="btn btn-light">Explore Services</button>
          </div>
        </div>
      </section>


      <section className="popular-salons container mt-5">
        <h2 className="section-title">Popular Salons</h2>

        <div className="row mt-4">

          {popularSalons.map(salon => (
            <div className="col-md-4 mb-4" key={salon.id}>
              <div className="salon-card">
                <img src={salon.img} alt={salon.name} className="salon-img"/>
                <h5 className="mt-3">{salon.name}</h5>
                <a href="#" className="explore-link">Explore Now →</a>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
