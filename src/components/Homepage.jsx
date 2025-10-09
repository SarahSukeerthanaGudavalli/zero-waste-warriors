import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <div className="nav-buttons">
        <button onClick={() => navigate('/donor')}>Donor's Page</button>
        <button onClick={() => navigate('/receiver')}>Receiver's Page</button>
      </div>
      <button onClick={() => navigate('/')}>Log Out</button>
    </div>
  );
}
export default Homepage;