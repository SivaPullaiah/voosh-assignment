import React from 'react';
import { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginForm from '../components/LoginForm';
const AppNavigator = () => {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);
  return (
    <div>
      {token ? <HomeScreen /> : <LoginForm token={token} setToken={setToken} />}
    </div>
  );
};

export default AppNavigator;
