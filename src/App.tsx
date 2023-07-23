import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div>
      {/* Display the RegistrationForm */}
      <h2>Registration</h2>
      <RegistrationForm />

      {/* Display the LoginForm */}
      <h2>Login</h2>
      <LoginForm />

      {/* Display the UserProfile */}
      <h2>User Profile</h2>
      <UserProfile />

      {/* Display the ChatInterface */}
      <h2>Chat Interface</h2>
      <ChatInterface />
    </div>
  );
};

export default App;
