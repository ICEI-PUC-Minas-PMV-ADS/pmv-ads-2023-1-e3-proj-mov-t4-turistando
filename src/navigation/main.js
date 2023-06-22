import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Pesquisar from "../pages/Pesquisar";
import Agendamento from "../pages/Agendamento";
import Servicos from "../pages/service_page";
import Politica from "../pages/Politica";
import TermosUso from "../pages/TermosUso";

import Pontosturisticos from "../pages/pturisticos";
import Igrejasaofrancisco from "../pages/pontosTuristicos/Igrejasaofrancisco";
import Pedrarochosa from "../pages/pontosTuristicos/pedrarochosa";
import TeatroAmazonas from "../pages/pontosTuristicos/Teatroamazonas";
import TeatroMunicipal from "../pages/pontosTuristicos/Teatromunicipaldesp";

import OndeDormir from "../pages/Ondedormir";
import Hotel from "../pages/ondeDormir/Hotelsolar";
import Pousada from "../pages/ondeDormir/Pousadapordosol";
import Smart from "../pages/ondeDormir/Smart";
import Tropical from "../pages/ondeDormir/Tropicalhotel";

import OndeComer from "../pages/OndeComer";
import Restaurante from "../pages/ondeComer/RestauranteVaranda";
import Padaria from "../pages/ondeComer/PadariaYollanda";
import Cafeteria from "../pages/ondeComer/CafeteriaMustafa";
import Quiosque from "../pages/ondeComer/QuiosqueMarina";

import Eventos from "../pages/Eventos";
import Cantata from "../pages/eventos/Cantata";
import Feira from "../pages/eventos/Feira";
import Luau from "../pages/eventos/Luau";
import TeatroEventos from "../pages/eventos/Teatro";

import Lojas from '../pages/Lojas'
import Supermercado from '../pages/loja/supermercado'
import Farmacia from '../pages/loja/farmacia'
import Lembranca from '../pages/loja/lembrancas'
import Roupa from '../pages/loja/roupas'

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        />
       
        <Stack.Screen
          name="Pesquisar"
          component={Pesquisar}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Agendamento"
          component={Agendamento}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="TermosUso"
          component={TermosUso}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Politica"
          component={Politica}
          options={{ header: () => null }}
        />
        
        {/* Configuração da rota Pontos turisticos */}
        <Stack.Screen
          name="PontosTuristicos"
          component={Pontosturisticos}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Igreja"
          component={Igrejasaofrancisco}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Pedra"
          component={Pedrarochosa}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="TeatroAmazonas"
          component={TeatroAmazonas}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="TeatroMunicipal"
          component={TeatroMunicipal}
          options={{ header: () => null }}
        />
        {/* Configuração da rota onde dormir */}
        <Stack.Screen
          name="OndeDormir"
          component={OndeDormir}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Pousada"
          component={Pousada}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Smart"
          component={Smart}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Tropical"
          component={Tropical}
          options={{ header: () => null }}
        />

        {/* Configuração da rota onde comer */}
        <Stack.Screen
          name="OndeComer"
          component={OndeComer}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Restaurante"
          component={Restaurante}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Padaria"
          component={Padaria}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Cafeteria"
          component={Cafeteria}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Quiosque"
          component={Quiosque}
          options={{ header: () => null }}
        />

        {/* Configuração da rota eventos */}
        <Stack.Screen
          name="Eventos"
          component={Eventos}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Cantata"
          component={Cantata}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Feira"
          component={Feira}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Luau"
          component={Luau}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Teatro"
          component={TeatroEventos}
          options={{ header: () => null }}
        />

        {/* Configuração da rota Lojas */}
        
        <Stack.Screen
          name="Lojas"
          component={Lojas}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Supermercado"
          component={Supermercado}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Farmacia"
          component={Farmacia}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Roupas"
          component={Roupa}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Lembranca"
          component={Lembranca}
          options={{ header: () => null }}
        />

      </Stack.Navigator>
    </>
  );
}

export default Main;
