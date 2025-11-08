import React, { useState } from "react";

function DonateVeg() {
  const items = [
    { name: "Veg Noodles" },
    { name: "Fried Rice"},
    { name: "Biryani"}
  ];

  const [message, setMessage] = useState("");

const handleDonate = (itemName) => {
  setMessage(`Thank you for donating ${itemName}!`);
  setTimeout(() => {
    setMessage("");
  }, 4000);
};

  return (
    <div className="container">
      <h2>Donate Veg</h2>

      {/* Show thank-you message */}
      {message && (
        <p style={{ color: "#7CFC00", fontWeight: "bold", marginTop: "10px" }}>
          {message}
        </p>
      )}

      <div className="food-grid">
        {items.map((i) => (
          <div className="food-card" key={i.name}>
            <h3>{i.name}</h3>
            {/* <p className="price">
              Price: {i.price} INR | Quantity: {i.qty}
            </p> */}
            <button onClick={() => handleDonate(i.name)}>Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonateVeg;