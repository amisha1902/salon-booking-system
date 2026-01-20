import { useState } from "react";

export default function BookAppointment({ services, cart }) {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({ name: "", phone: "" });

  return (
    <div className="card p-4">

      <h4>Step {step} of 3</h4>

      {step === 1 && (
        <>
          <input
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Phone"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          {services.map((s) => (
            <div key={s.id} className="border p-2 mb-2">
              {s.name} - ₹{s.price}
            </div>
          ))}
          <button className="btn btn-secondary" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="btn btn-primary ms-2" onClick={() => setStep(3)}>
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h5>Confirm Booking</h5>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>

          <ul>
            {cart.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>

          <button className="btn btn-success">Confirm</button>
        </>
      )}

    </div>
  );
}
