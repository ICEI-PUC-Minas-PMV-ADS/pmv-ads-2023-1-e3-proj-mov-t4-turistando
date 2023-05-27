import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './navigation/route';
import UserProvider from './contexts/UserContext';
import Lojas from './pages/lojas';

const App = () => {
  return (
<Lojas> </Lojas>

    //<UserProvider>
      //<NavigationContainer>
        //<Route />
      //</NavigationContainer>
    //</UserProvider>
  );
};

export default App;
