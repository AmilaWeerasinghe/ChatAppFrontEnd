import React, { useState } from 'react';

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState({
    email: 'user@example.com',
    // Add other user information fetched from the backend
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateProfile = () => {
    // TODO: Implement the API call to update user profile
  };

  return (
    <div>
      <input type="email" name="email" value={userData.email} onChange={handleChange} />
      {/* Add other user profile fields for editing */}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
