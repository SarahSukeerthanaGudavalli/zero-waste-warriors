import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({ email: '', user: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/details');
  };
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input name="email" placeholder="Email ID" onChange={handleChange} />
      <input name="user" placeholder="User Name" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Create Account</button>
      <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
    </div>
  );
}
export default Signup;