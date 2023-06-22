import * as React from "react";
import { ScrollView } from "react-native";

import Bodypturisticos from "../components/BodyEventos";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const Pontosturisticos = () => {
  const navigation = useNavigation();

  return (
    <Header>
      <ScrollView>
        <Bodypturisticos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/74f855fb5b2331175642d1a9b649106d",
          }}
          nome={"Teatro Amazonas"}
          texto={
            "O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão-postal da cidade de Manaus."
          }
          rota={() => navigation.navigate("TeatroAmazonas")}
          botao={"Saiba mais"}
        />

        <Bodypturisticos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b02ffc24d2c210efd43437e230fa6247",
          }}
          nome={"Pedra Rochosa - Jericoacoara"}
          texto={
            "A Pedra Rochosa, um monumento natural deslumbrante, é o grande símbolo de Jericoacoara."
          }
          rota={() => navigation.navigate("Pedra")}
          botao={"Saiba mais"}
        />

        <Bodypturisticos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bacc79a26e1865cf14e87011e0c9f625",
          }}
          nome={"Teatro Municipal de São Paulo"}
          texto={
            "O Teatro Municipal de São Paulo é um teatro brasileiro localizado na cidade paulista de São Paulo."
          }
          rota={() => navigation.navigate("TeatroMunicipal")}
          botao={"Saiba mais"}
        />

        <Bodypturisticos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/13a847dddf5314aa0881a8e945ae0ec1",
          }}
          nome={"Igreja de São Francisco de Assis - Ouro Preto"}
          texto={
            "É considerada uma das mais importantes igrejas coloniais do país, pois reúne Aleijadinho, que fez o projeto, com mestre Ataíde, principal nome da pintura na época."
          }
          rota={() => navigation.navigate("Igreja")}
          botao={"Saiba mais"}
        />
      </ScrollView>
    </Header>
  );
};

export default Pontosturisticos;
