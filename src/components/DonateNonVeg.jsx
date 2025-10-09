import React from 'react';

function DonateNonVeg() {
  const items = [
    { name: 'Chicken Noodles', price: 5, qty: '300g' },
    { name: 'Chicken Fried Rice', price: 5, qty: '300g' },
    { name: 'Chicken Biryani', price: 5, qty: '300g' }
  ];
  return (
    <div className="container">
      <h2>Donate Non-Veg</h2>
      <div className="food-grid">
        {items.map((i) => (
          <div className="food-card" key={i.name}>
            <h3>{i.name}</h3>
            <p className="price">Price: {i.price} INR | Quantity: {i.qty}</p>
            <button>Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DonateNonVeg;