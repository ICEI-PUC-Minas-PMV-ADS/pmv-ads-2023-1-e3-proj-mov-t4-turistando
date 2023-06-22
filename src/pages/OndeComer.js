import * as React from "react";
import { ScrollView } from "react-native";

import BodyComer from "../components/BodyEventos";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const OndeComer = () => {
  const navigation = useNavigation();

  return (
    <Header>
      <ScrollView>
        <BodyComer
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4dee9175415d5cd9d03001b55a5f1c14",
          }}
          nome={"Restaurante Varanda do Norte"}
          texto={
            "Varanda do Norte, um restaurante encantador situado em um ponto turístico de tirar o fôlego. Localizado em meio a paisagens deslumbrantes e com uma vista panorâmica espetacular, nosso restaurante é um verdadeiro refúgio para os amantes da boa comida e apreciadores da natureza."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Restaurante")}
        />
        <BodyComer
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ebc7e42a0cb7bb09d8a7de103a08f967",
          }}
          nome={"Padaria Yollanda"}
          texto={
            "Padaria Yollanda, um espaço encantador localizado no coração de um dos mais belos pontos turísticos da região. Situada em um cenário pitoresco, nossa padaria é um refúgio acolhedor para os visitantes que desejam apreciar um delicioso pão fresco e outros quitutes irresistíveis."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Padaria")}
        />
        <BodyComer
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fbc0ce297522e2de5ad04cddbd3f9f7a",
          }}
          nome={"Cafeteria Mustafá"}
          texto={
            "Mustafá, uma cafeteria de luxo que redefine a experiência de tomar café em um ponto turístico exclusivo. Com um ambiente sofisticado e elegante, nossa cafeteria proporciona um refúgio tranquilo e requintado para os apreciadores de café."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Cafeteria")}
        />

        <BodyComer
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/86a5bb650f25eda678db143d5b4aa79a",
          }}
          nome={"Quiosque Marina"}
          texto={
            "Quiosque Marina, um ponto de encontro perfeito para os amantes da praia em busca de momentos relaxantes e saborosos. Situado de frente para o mar, nosso quiosque oferece uma atmosfera descontraída e uma vista deslumbrante para desfrutar enquanto se delicia com nossas opções gastronômicas."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Quiosque")}
        />
      </ScrollView>
    </Header>
  );
};

export default OndeComer;
