// components/PasswordReset.tsx

import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/api/reset-password', { email });
      console.log(response.data); // You can handle the response as needed (e.g., show success message)
    } catch (error) {
      console.error('Error during password reset:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default PasswordReset;
