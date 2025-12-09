
import React, { useState } from "react";
import Services from "../../../components/ServiceCard/Services";
import BookAppointment from "../BookingForm/BookingPage";
import salonImg from '../../../assets/hair3.jpeg';
const SalonDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [cart, setCart] = useState([]);

  // const salonImg =
  //   "https://images.unsplash.com/photo-1600948835091-f9b9f2ea924c";

  const services = [
    {
      id: 1,
      name: "Haircut",
      price: 299,
      img: "https://images.unsplash.com/photo-1519415943484-cbfa3d4160f5"
    },
    {
      id: 2,
      name: "Facial",
      price: 799,
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15"
    },
    {
      id: 3,
      name: "Manicure",
      price: 499,
      img: "https://images.unsplash.com/photo-1607779097040-fb91e88c2d1e"
    },
    {
      id: 4,
      name: "Pedicure",
      price: 599,
      img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143"
    },
    {
      id: 5,
      name: "Hair Coloring",
      price: 1499,
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df"
    },
    {
      id: 6,
      name: "Bridal Makeup",
      price: 4999,
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
    },
    {
      id: 7,
      name: "Body Spa",
      price: 1999,
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
    },
    {
      id: 8,
      name: "Hair Smoothening",
      price: 2499,
      img: "https://images.unsplash.com/photo-1600948835091-f9b9f2ea924c"
    },
    {
      id: 9,
      name: "Threading",
      price: 99,
      img: "https://images.unsplash.com/photo-1600948835060-b142cb85cc1e"
    }
  ];

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">

      {/* ✅ SALON HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">YOLO Salon</h2>
        <p className="text-muted mb-1">Hair, Skin, Spa, Bridal, Nails</p>
        <p className="text-muted small">
          Sai Chowk, Rahatani, Pimple Nilakh, Pune
        </p>

        <div className="d-flex gap-3 align-items-center mb-3">
          <span className="badge bg-success px-3">4.6 ★</span>
          <span className="text-muted">2,345 Ratings</span>
          <span className="text-muted">₹1200 for two</span>
          <span className="text-danger fw-semibold">Open Now</span>
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-dark rounded-pill">📍 Direction</button>
          <button className="btn btn-outline-dark rounded-pill">⭐ Reviews</button>
          <button className="btn btn-danger rounded-pill">Book Now</button>
        </div>
      </div>

      {/* ✅ IMAGE + SIDE CARDS */}
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src={salonImg}
              className="w-100"
              height="330"
              style={{ objectFit: "cover" }}
              alt="Salon"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm mb-3">
            <h5 className="fw-bold">Quick Booking</h5>
            <button className="btn btn-danger rounded-pill mt-2">
              Book Appointment
            </button>
          </div>

          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold">Direction</h5>
            <div className="bg-secondary text-white text-center p-5 rounded">
              MAP
            </div>
          </div>
        </div>
      </div>

      {/* ✅ TABS */}
      <div className="d-flex gap-4 mt-4 border-bottom pb-2">
        {["overview", "services", "photos", "Book Appointment"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === tab ? "bold" : "400",
              borderBottom:
                activeTab === tab ? "3px solid #dc3545" : "none"
            }}
          >
            {tab.toUpperCase()}
          </span>
        ))}
      </div>

      {/* ✅ TAB CONTENT */}
      <div className="mt-4">

        {/* ✅ OVERVIEW */}
        {activeTab === "overview" && (
          <>
            <h4 className="fw-bold mb-3">About Salon</h4>
            <p className="text-muted">
              YOLO Salon is a premium unisex beauty salon offering world-class
              hair styling, skin treatments, bridal services, and relaxing spa
              therapies using top branded products.
            </p>

            <div className="row mt-3 g-3">
              <div className="col-md-4">
                <div className="card p-3 shadow-sm">🕒 10 AM – 10 PM</div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 shadow-sm">💰 ₹1200 for two</div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 shadow-sm">💄 Hair, Spa, Nails</div>
              </div>
            </div>
          </>
        )}

        {/* ✅ SERVICES */}
        {activeTab === "services" && (
          <Services services={services} addToCart={addToCart} />
        )}

        {activeTab === "Book Appointment" && (
            <BookAppointment/>
        )}
        {/* ✅ CART */}
        {activeTab === "cart" && (
          <div>
            <h4 className="fw-bold mb-3">Cart Summary</h4>

            {cart.length === 0 ? (
              <p className="text-muted">No services selected</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between border-bottom py-2"
                  >
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                ))}

                <h5 className="mt-3">Total: ₹{total}</h5>
                <button className="btn btn-success mt-3 rounded-pill">
                  Confirm Booking
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonDetails;
