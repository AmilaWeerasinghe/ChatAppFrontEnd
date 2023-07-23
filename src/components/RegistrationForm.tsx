// components/RegistrationForm.tsx

import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/register', { email, password });
      console.log(response.data); // You can handle the response as needed (e.g., show success message)
    } catch (error) {
      console.error('Error during user registration:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
