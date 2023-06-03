import * as React from "react";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/container";
import Cards from "../../components/cards";
import Carousels from "../../components/carousels";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

const Painel = () => {
  const [visible, setVisible] = React.useState(true);
  const navigation = useNavigation();
  return (
    <Container>
      <Cabecalho title={"Painel"} goBack={() => navigation.goBack()} />
      <Carousels></Carousels>
      
      <Cards
        nome={"Criar"}
        icon={"plus"}
        rota={() => navigation.navigate("")}
      />

      <Cards
        nome={"Meu Perfil"}
        icon={"account"}
        rota={() => navigation.navigate("")}
      />

      <Cards
        nome={"Sair"}
        icon={"keyboard-backspace"}
        rota={() => navigation.goBack()}
      />
    </Container>
  );
};

export default Painel;
