import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Painel from '../pages/painel';
import Perfil from '../pages/perfil';


const Stack = createNativeStackNavigator();

const Main = () => {

  return (

    <Stack.Navigator initialRouteName="Painel">
        <Stack.Screen 
          name="Painel" 
          component={Painel}
          options = {{
            header: () => null
          }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil}
          options = {{
            header: () => null
          }}
        />
      </Stack.Navigator>

  );
}

export default Main;