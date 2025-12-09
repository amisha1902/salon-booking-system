import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SalonDetails from "../SalonDetailPage/SalonDetailPage";
import { useParams } from "react-router-dom";



const salons = [
  {
    id: 1,
    name: "Glow & Grace Studio",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    rating: "4.6",
    services: "Hair, Skin, Bridal",
    location: "Baner, Pune",
    offer: "Flat 30% OFF",
  },
  {
    id: 2,
    name: "Velvet Touch Salon",
    image: "https://images.unsplash.com/photo-1559599238-308793637427",
    rating: "4.4",
    services: "Spa, Massage, Facial",
    location: "Aundh, Pune",
    offer: "Flat 25% OFF",
  },
  {
    id: 3,
    name: "Blush Beauty Lounge",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    rating: "4.7",
    services: "Makeup, Nails, Hair",
    location: "Viman Nagar, Pune",
    offer: "Special Bridal Offer",
  },
  {
    id: 4,
    name: "Serenity Skin Studio",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
    rating: "4.5",
    services: "Facial, Cleanup, Skin",
    location: "Kothrud, Pune",
    offer: "Flat 20% OFF",
  },
  {
  id: 5,
  name: "Elite Elegance Salon",
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  rating: "4.8",
  services: "Premium Hair, Styling, Spa",
  location: "Hinjewadi, Pune",
  offer: "Luxury Combo 35% OFF",
},
{
  id: 6,
  name: "Urban Charm Studio",
  image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  rating: "4.3",
  services: "Haircut, Beard, Styling",
  location: "Wakad, Pune",
  offer: "Flat 20% OFF",
},
{
  id: 7,
  name: "Bloom Beauty Bar",
  image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
  rating: "4.7",
  services: "Bridal, Makeup, Skin",
  location: "Shivaji Nagar, Pune",
  offer: "Free Bridal Trial",
},
{
  id: 8,
  name: "Royal Roots Salon",
  image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
  rating: "4.5",
  services: "Keratin, Smoothening, Hair Spa",
  location: "Pimpri, Pune",
  offer: "Flat 30% OFF",
},
{
  id: 9,
  name: "The Glam Hub",
  image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea",
  rating: "4.9",
  services: "Nails, Eyelash, Makeup",
  location: "Kalyani Nagar, Pune",
  offer: "Nail Art 25% OFF",
},
{
  id: 10,
  name: "Pure Bliss Wellness",
  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  rating: "4.4",
  services: "Ayurvedic Spa, Massage",
  location: "Hadapsar, Pune",
  offer: "Flat 40% OFF",
},
{
  id: 11,
  name: "Aura Beauty Lounge",
  image: "https://images.unsplash.com/photo-1601933470928-c0bdb62be96a",
  rating: "4.6",
  services: "Hair Color, Styling",
  location: "Katraj, Pune",
  offer: "Hair Color 30% OFF",
},
{
  id: 12,
  name: "Luxe Look Studio",
  image: "https://images.unsplash.com/photo-1595475932941-cccd8d8dc8b9",
  rating: "4.5",
  services: "Makeover, Facial, Hair",
  location: "Bibwewadi, Pune",
  offer: "Facial + Hair @ 899",
},
{
  id: 13,
  name: "Radiance Unisex Salon",
  image: "https://images.unsplash.com/photo-1559599101-f09722fb4948",
  rating: "4.2",
  services: "Men’s Grooming, Beard",
  location: "Nigdi, Pune",
  offer: "Combo Grooming 20% OFF",
},
{
  id: 14,
  name: "Studio Sleek",
  image: "https://images.unsplash.com/photo-1602382276855-3c5c3e0454bb",
  rating: "4.7",
  services: "Hair Styling, Blow Dry",
  location: "Pashan, Pune",
  offer: "Flat 25% OFF",
},
{
  id: 15,
  name: "Heavenly Hands Spa",
  image: "https://images.unsplash.com/photo-1591343395801-d1fba9bcd11d",
  rating: "4.8",
  services: "Relaxation Spa, Oils",
  location: "Vishrantwadi, Pune",
  offer: "Couple Spa 30% OFF",
},
{
  id: 16,
  name: "Trendsetters Salon",
  image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
  rating: "4.4",
  services: "Trendy Haircuts, Coloring",
  location: "Sinhagad Road, Pune",
  offer: "Student Discount 20%",
},
{
  id: 17,
  name: "Elegant You Studio",
  image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
  rating: "4.6",
  services: "Party Makeup, Hairstyle",
  location: "Dhanori, Pune",
  offer: "Makeup @ 699",
},
{
  id: 18,
  name: "Nature Glow Spa",
  image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  rating: "4.7",
  services: "Organic Spa, Aroma",
  location: "Yerwada, Pune",
  offer: "Flat 35% OFF",
},
{
  id: 19,
  name: "Classic Cuts Salon",
  image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9",
  rating: "4.3",
  services: "Men’s & Women’s Haircut",
  location: "Warje, Pune",
  offer: "Haircut @ 199",
},
{
  id: 20,
  name: "Velour Beauty House",
  image: "https://images.unsplash.com/photo-1595944024804-733d06f34107",
  rating: "4.5",
  services: "Hair Rebonding, Facial",
  location: "Karve Nagar, Pune",
  offer: "Flat 30% OFF",
},
{
  id: 21,
  name: "Pink Petals Salon",
  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  rating: "4.6",
  services: "Waxing, Cleanup, Skin",
  location: "Bavdhan, Pune",
  offer: "Free Cleanup",
},
{
  id: 22,
  name: "Glow Theory Studio",
  image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
  rating: "4.9",
  services: "Advanced Skin Treatment",
  location: "Koregaon Park, Pune",
  offer: "Laser Facial 20% OFF",
},

];

const SalonList = () => {
    const { id } = useParams();
console.log("Salon ID:", id);
     const [active, setActive] = useState(null);

  const getStyle = (type) => ({
    bg: active === type ? "bg-warning" : "bg-light",
    text: active === type ? "border-bottom border-danger fw-bold" : "text-muted",
  });

  const navigate = useNavigate();
  return (
    <div className="container py-4">

     <div className="d-flex align-items-center gap-5 border-bottom pb-3 mb-4">

  {/* ✅ WOMEN */}
  <div className="text-center" style={{ cursor: "pointer" }} onClick={() => setActive("women")}>
    <div
      className={`rounded-circle d-flex align-items-center justify-content-center mb-1 ${getStyle("women").bg}`}
      style={{ width: "52px", height: "52px" }}
    >
      <span style={{ fontSize: "22px" }}>♀</span>
    </div>
    <span className={getStyle("women").text}>Women</span>
  </div>

  {/* ✅ MEN */}
  <div className="text-center" style={{ cursor: "pointer" }} onClick={() => setActive("men")}>
    <div
      className={`rounded-circle d-flex align-items-center justify-content-center mb-1 ${getStyle("men").bg}`}
      style={{ width: "52px", height: "52px" }}
    >
      <span style={{ fontSize: "22px" }}>♂</span>
    </div>
    <span className={getStyle("men").text}>Men</span>
  </div>

  {/* ✅ UNISEX */}
  <div className="text-center" style={{ cursor: "pointer" }} onClick={() => setActive("unisex")}>
    <div
      className={`rounded-circle d-flex align-items-center justify-content-center mb-1 ${getStyle("unisex").bg}`}
      style={{ width: "52px", height: "52px" }}
    >
      <span style={{ fontSize: "22px" }}>⚥</span>
    </div>
    <span className={getStyle("unisex").text}>Unisex</span>
  </div>

</div>


      <div className="d-flex gap-3 mb-5">

        <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
          ⚙ Filters
        </button>

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Categories
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Hair</li>
            <li className="dropdown-item">Skin</li>
            <li className="dropdown-item">Bridal</li>
            <li className="dropdown-item">Spa</li>
          </ul>
        </div>

      </div>

      {/* ✅ MAIN BANNER (Your Existing One) */}
      <div className="position-relative rounded-4 overflow-hidden mb-5">
        <img
          src="https://images.unsplash.com/photo-1559599238-308793637427"
          className="w-100 object-fit-cover"
          style={{ height: "300px" }}
          alt="Salon Banner"
        />

        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        <div className="position-absolute top-50 start-0 translate-middle-y text-white px-4">
          <h6 className="text-uppercase small">SALON COLLECTIONS</h6>
          <h2 className="fw-bold">Top Trending Salons</h2>
          <p className="small">
            Discover the most loved beauty & grooming studios in your city.
          </p>
          <p className="small fw-semibold">34 Places</p>
        </div>
      </div>

      {/* ✅ SALON GRID */}
      <div className="row g-4" >
        {salons.map((salon) => (
          <div className="col-md-3" key={salon.id} >
       <div
        className="card border-0 shadow-sm h-100"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/salon/${salon.id}`)}
      >

              <div className="position-relative">
                <img
                  src={salon.image}
                  className="card-img-top object-fit-cover"
                  style={{ height: "200px" }}
                  alt={salon.name}
                />
                <span className="position-absolute bottom-0 start-0 bg-dark text-white small px-2 py-1 rounded-end">
                  {salon.offer}
                </span>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="fw-bold mb-0">{salon.name}</h6>
                  <span className="badge bg-success">{salon.rating}★</span>
                </div>

                <p className="text-muted small mb-1">{salon.services}</p>
                <p className="text-muted small mb-0">{salon.location}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SalonList;
