// components/LoginForm.tsx

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/login', { email, password });
      console.log(response.data); // You can handle the response as needed (e.g., store the token in local storage)
    } catch (error) {
      console.error('Error during user login:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
