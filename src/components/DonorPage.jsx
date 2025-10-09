import React from 'react';
import { useNavigate } from 'react-router-dom';

function DonorPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Donor's Page</h2>
      <button onClick={() => navigate('/donate-veg')}>Veg</button>
      <button onClick={() => navigate('/donate-nonveg')}>Non-Veg</button>
    </div>
  );
}
export default DonorPage;