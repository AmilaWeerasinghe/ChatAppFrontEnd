// App.tsx

import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import PasswordReset from './components/PasswordReset';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="App">
      {/* You can use the components here */}
      <RegistrationForm />
      <LoginForm />
      <UserProfile userId="USER_ID_HERE" />
      <PasswordReset />
      <ChatInterface />
    </div>
  );
}

export default App;
