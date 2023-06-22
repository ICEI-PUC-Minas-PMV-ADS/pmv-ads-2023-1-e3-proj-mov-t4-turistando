import * as React from "react";
import { ScrollView } from "react-native";

import Bodyondedormir from "../components/bodypturisticos";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const Ondedormir = () => {
  const navigation = useNavigation();

  return (
    <Header>
      <ScrollView>
        <Bodyondedormir
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/761ee652dcea59e412700fd3431c891a",
          }}
          titulo={"Hotel Solar Das Lajes"}
          texto={
            "Situado num belo edifício colonial, o Hotel Solar Das Lajes fica numa área de floresta nativa e disponibiliza uma piscina exterior e uma mina de ouro aberta para visitas. A propriedade providencia estacionamento privado gratuito, um salão partilhado, um jardim e acesso Wi-Fi gratuito em todas as áreas."
          }
          clicou={() => navigation.navigate("Hotel")}
          textodobotao={"Saiba Mais"}
        />

        <Bodyondedormir
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dede698046d8b2b53635ee44eec3ff72",
          }}
          titulo={"Pousada Por do Sol"}
          texto={
            "Localizada apenas a 150 metros da praia, a Pousada Por do Sol disponibiliza acesso Wi-Fi gratuito e um buffet de pequeno-almoço. A Duna Pôr do Sol também fica apenas a 150 metros."
          }
          clicou={() => navigation.navigate("Pousada")}
          textodobotao={"Saiba Mais"}
        />

        <Bodyondedormir
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3ff512afb4ea9c09a48b05d7b12a65ca",
          }}
          titulo={"Tropical Executive Hotel"}
          texto={
            "O Tropical Executive Hotel disponibiliza um restaurante, uma piscina exterior, um bar e um jardim em Manaus. A propriedade oferece acesso Wi-Fi gratuito e fica a cerca de 14 km do Palácio da Justiça de Manaus e do Teatro Amazonas. O alojamento providencia uma receção 24 horas e serviço de quartos, além de organizar excursões para os hóspedes."
          }
          clicou={() => navigation.navigate("Tropical")}
          textodobotao={"Saiba Mais"}
        />

        <Bodyondedormir
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bdcbb86142103cbcfa12a6f68daf6242",
          }}
          titulo={"Smart Charlie Frei Caneca"}
          texto={
            "Situado a 700 metros do Edifício Copan, o Smart Charlie Frei Caneca - Soft Opening apresenta acomodações com varanda e acesso Wi-Fi gratuito. O alojamento o beneficia de ar  condicionado, uma kitchenette totalmente equipada com uma área de refeições, uma televisão de ecrã plano e uma casa de banho privativa com um chuveiro e um secador de cabelo"
          }
          clicou={() => navigation.navigate("Smart")}
          textodobotao={"Saiba Mais"}
        />
      </ScrollView>
    </Header>
  );
};

export default Ondedormir;
