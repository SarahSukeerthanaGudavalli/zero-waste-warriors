import React, { useState } from 'react';

function DonateNonVeg() {
  const items = [
    { name: 'Chicken Noodles' },
    { name: 'Chicken Fried Rice' },
    { name: 'Chicken Biryani' }
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
      <h2>Donate Non-Veg</h2>
      {message && <p className="message">{message}</p>}
      <div className="food-grid">
        {items.map((i) => (
          <div className="food-card" key={i.name}>
            <h3>{i.name}</h3>
            <button onClick={() => handleDonate(i.name)}>Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonateNonVeg;
