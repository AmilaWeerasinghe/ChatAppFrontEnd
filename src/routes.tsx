// src/routes.tsx

import React from 'react';
import { RouteProps } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import ChatPage from './pages/ChatPage';

type AppRoute = {
  path: string;
  component: React.ComponentType;
} & RouteProps;

const routes: AppRoute[] = [
  {
    path: '/register',
    component: RegistrationPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/profile',
    component: UserProfilePage,
  },
  {
    path: '/chat',
    component: ChatPage,
  },
];

export default routes;
