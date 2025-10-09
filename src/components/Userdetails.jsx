import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Userdetails() {
  const [details, setDetails] = useState({ phone: '', address: '' });
  const navigate = useNavigate();
  const handleChange = (e) => setDetails({ ...details, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div className="container">
      <h2>User Details</h2>
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Userdetails;
