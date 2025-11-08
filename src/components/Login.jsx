import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ user: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <input name="user" placeholder="User Name" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
export default Login;