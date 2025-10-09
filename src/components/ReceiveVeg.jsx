import React from 'react';

function ReceiveVeg() {
  const items = [
    { name: 'Veg Noodles', price: 5, qty: '300g' },
    { name: 'Fried Rice', price: 5, qty: '300g' },
    { name: 'Biryani', price: 5, qty: '300g' }
  ];
  return (
    <div className="container">
      <h2>Receive Veg</h2>
      <div className="food-grid">
        {items.map((i) => (
          <div className="food-card" key={i.name}>
            <h3>{i.name}</h3>
            <p className="price">Price: {i.price} INR | Quantity: {i.qty}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ReceiveVeg;