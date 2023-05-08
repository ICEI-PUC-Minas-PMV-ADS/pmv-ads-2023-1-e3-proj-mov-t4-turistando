import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/navigation/route';
import UserProvider from './src/contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
