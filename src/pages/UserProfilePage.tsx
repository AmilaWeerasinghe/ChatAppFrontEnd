// pages/RegistrationPage.tsx

import React from 'react';
import UserProfileForm from '../components/UserProfile';

const RegistrationPage: React.FC = () => {
  return (
    <div>
      <h1>User Profile Page</h1>
      <UserProfileForm userId="USER_ID_HERE"/>
    </div>
  );
};

export default RegistrationPage;
