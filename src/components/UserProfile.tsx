// components/UserProfile.tsx

import React, { useState } from 'react';
import axios from 'axios';

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [email, setEmail] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/api/users/${userId}`, { email });
      console.log(response.data); // You can handle the response as needed (e.g., show success message)
    } catch (error) {
      console.error('Error during user profile update:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
