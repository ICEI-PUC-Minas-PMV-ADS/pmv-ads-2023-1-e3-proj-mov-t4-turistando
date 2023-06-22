import * as React from "react";
import { ScrollView } from "react-native";

import BodyEventos from "../components/BodyEventos";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const Eventos = () => {
  const navigation = useNavigation();

  return (
    <Header>
      <ScrollView>
        <BodyEventos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a894ab3981a6263f2e863ca77223c25a",
          }}
          nome={"Teatro"}
          texto={
            "Teatro, é uma forma de arte em que um ator ou conjunto de atores, interpreta uma história ou atividades para o público em um determinado lugar."
          }
          botao={"Saiba mais"}
          rota={() => navigation.navigate("Teatro")}
        />
        <BodyEventos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a718e7077cfa274d67d6346b1d71f6c6",
          }}
          nome={"Feira"}
          texto={
            "Evento itinerante leva para vários espaços da cidade uma mistura de cheiros, temperos e sabores, reunindo produtores e ingredientes diversos."
          }
          botao={"Saiba mais"}
          rota={() => navigation.navigate("Feira")}
        />
        <BodyEventos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8307271b5c6afdb5c5993b24fe3ba768",
          }}
          nome={"Luau"}
          texto={
            "Festa noturna, com caráter mais informal, geralmente realizada na praia, onde são servidas bebidas e comidas, além de ser caracterizada por muita dança e música."
          }
          botao={"Saiba mais"}
          rota={() => navigation.navigate("Luau")}
        />
        <BodyEventos
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/219c20a92f3e6fae213fea76118004bb",
          }}
          nome={"Cantata"}
          texto={
            "Composição musical para uma ou mais vozes com acompanhamento, geralmente para solista, coro e orquestra"
          }
          botao={"Saiba mais"}
          rota={() => navigation.navigate("Cantata")}
        />
      </ScrollView>
    </Header>
  );
};

export default Eventos;
