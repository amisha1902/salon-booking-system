import React from "react";

export default function Services({ services, addToCart }) {
  return (
    <div className="row g-4">
      {services.map((service) => (
        <div key={service.id} className="col-md-4">
          
          {/* ✅ HOVER LIFT WRAPPER */}
          <div
            className="card border-0 shadow-sm h-100 service-card"
            style={{
              borderRadius: "16px",
              transition: "all 0.3s ease",
            }}
          >
            {/* ✅ FIXED SIZE IMAGE */}
            <img
              src={service.img}
              className="card-img-top object-fit-cover"
              style={{
                height: "200px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
              alt={service.name}
            />

            <div className="card-body text-center">
              <h5 className="fw-bold mb-1">{service.name}</h5>
              <p className="text-muted fw-semibold mb-3">₹{service.price}</p>

              {/* ✅ MODERN ROUND BUTTON */}
              <button
                className="btn rounded-pill px-4 py-2 fw-semibold text-white"
                style={{ background: "#ff4c68" }}
                onClick={() => addToCart(service)}
              >
                + Add to Cart
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
