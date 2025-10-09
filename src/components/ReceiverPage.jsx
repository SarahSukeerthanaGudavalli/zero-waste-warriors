import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReceiverPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Receiver's Page</h2>
      <button onClick={() => navigate('/receive-veg')}>Veg</button>
      <button onClick={() => navigate('/receive-nonveg')}>Non-Veg</button>
    </div>
  );
}
export default ReceiverPage;