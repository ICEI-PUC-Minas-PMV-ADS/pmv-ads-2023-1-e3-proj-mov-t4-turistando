import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Painel from '../pages/painel';
import Perfil from '../pages/perfil';
import Farmacia from '../pages/farmacia';
import Lembrancas from '../pages/lembrancas';
import Roupas from '../pages/roupas';
import Supermercado from '../pages/supermercado';
import Lojas from '../pages/lojas';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (

    <Stack.Navigator initialRouteName="Lojas">

        <Stack.Screen 
          name="Lojas" 
          component={Lojas}
          options = {{
            header: () => null
          }}
        />

        <Stack.Screen 
          name="Supermercado" 
          component={Supermercado}
          options = {{
            header: () => null
          }}
        />

        <Stack.Screen 
          name="Farmacia" 
          component={Farmacia}
          options = {{
            header: () => null
          }}
        />

        <Stack.Screen 
          name="Roupas" 
          component={Roupas}
          options = {{
            header: () => null
          }}
        />

        <Stack.Screen 
          name="Lembrancas" 
          component={Lembrancas}
          options = {{
            header: () => null
          }}
        />
      </Stack.Navigator>


  );
}

export default Main;