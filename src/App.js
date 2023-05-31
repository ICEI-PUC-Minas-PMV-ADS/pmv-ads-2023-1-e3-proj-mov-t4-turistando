import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './navigation/route';
import UserProvider from './contexts/UserContext';
import Lojas from './pages/lojas';
import Register from './pages/register';
import Home from './pages/home';
import Painel from './pages/painel';
import Perfil from './pages/perfil';
import Main from './navigation/main';

const App = () => {
  return (

    <UserProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
