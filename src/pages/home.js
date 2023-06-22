import React from "react";
import Carousels from "../components/carousels";
import Container from "../components/container";
import Cards from "../components/cards";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";


const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ScrollView>
          <Carousels />
          
          <Cards
            nome={"Pontos Turisticos"}
            icon={"airballoon-outline"}
            rota={() => navigation.navigate("PontosTuristicos")}
          />
          <Cards
            nome={"Onde Dormir"}
            icon={"bed-outline"}
            rota={() => navigation.navigate("OndeDormir")}
          />
          <Cards
            nome={"Onde Comer"}
            icon={"silverware-fork-knife"}
            rota={() => navigation.navigate("OndeComer")}
          />
          <Cards
            nome={"Lojas"}
            icon={"shopping-outline"}
            rota={() => navigation.navigate("Lojas")}
          />
          <Cards
            nome={"Eventos"}
            icon={"party-popper"}
            rota={() => navigation.navigate("Eventos")}
          />
          <Cards
          
            nome={"Serviços Publicos"}
            icon={"account-search-outline"}
            rota={() => navigation.navigate("Servicos")}
          />
        </ScrollView>
      </Header>
    </Container>
  );
};

export default Home;
