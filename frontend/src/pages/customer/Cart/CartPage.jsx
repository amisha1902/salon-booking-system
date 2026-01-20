import React, { useState } from "react";
import "./CartPage.css";
import { FaTrashAlt, FaMinus, FaPlus, FaClock, FaCalendarAlt } from "react-icons/fa";

import hairImg from "../../../assets/hair1.jpg";
import manicureImg from "../../../assets/manicure.jpg";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Luxury Hair Styling",
      salon: "Glamora Beauty",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      price: 850,
      quantity: 1,
      image: hairImg,  // use imported image here
    },
    {
      id: 2,
      name: "Deluxe Manicure",
      salon: "Glamora Beauty",
      date: "Dec 15, 2024",
      time: "11:30 AM",
      price: 450,
      quantity: 1,
      image: manicureImg,
    },
  ]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        Your <span>Cart</span>
      </h1>

      <div className="cart-content">
        <div className="left-section">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="service-img" />

              <div className="details">
                <h3>{item.name}</h3>
                <p className="salon">{item.salon}</p>

                <div className="date-time">
                  <span><FaCalendarAlt /> {item.date}</span>
                  <span><FaClock /> {item.time}</span>
                </div>

                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, "dec")}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, "inc")}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="right-controls">
                <FaTrashAlt className="delete-btn" onClick={() => deleteItem(item.id)} />
                <p className="price">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="order-box">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax (8%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{total.toFixed(2)}</strong>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <a href="/services" className="continue">Continue Browsing</a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
