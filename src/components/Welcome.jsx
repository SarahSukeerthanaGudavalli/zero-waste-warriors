import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to Fresh Connect</h1>
      <button onClick={() => navigate('/signup')}>Let's Get Started</button>
    </div>
  );
}
export default Welcome;