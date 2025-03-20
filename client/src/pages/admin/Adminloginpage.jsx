import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminloginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/v1/admin/login', {
        email,
        password,
      });
      console.log(res.data.token)
      localStorage.setItem('token',res.data.Admin_token );
      localStorage.setItem('email', res.data.adminExist.email); // Store admin email in localStorage
      navigate('/admin'); // Redirect to dashboard
    } catch (err) {
      alert('Login failed',err.response.data.error);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Adminloginpage;