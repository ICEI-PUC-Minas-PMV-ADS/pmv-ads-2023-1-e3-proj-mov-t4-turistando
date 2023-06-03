import * as React from "react";
import { ScrollView } from "react-native";
import Header from "../components/Header";

import BodyPages from "../components/BodyEventos";

import { useNavigation } from "@react-navigation/native";

const Lojas = () => {
  const navigation = useNavigation();

  return (
    <Header>
      <ScrollView>
        <BodyPages
          foto={require("../assets/img/supermercado.jpg")}
          nome={"Supermercado"}
          texto={
            "Seu destino para todas as suas necessidades de compras diárias. Produtos frescos, mercearia e muito mais, tudo em um só lugar."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Supermercado")}
        />
        <BodyPages
          foto={require("../assets/img/farmacia.jpg")}
          nome={"Farmácia"}
          texto={
            "Uma farmácia confiável, com uma ampla variedade de medicamentos, produtos de cuidados pessoais e serviços convenientes para atender às suas necessidades de saúde e bem-estar."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Farmacia")}
        />
        <BodyPages
          foto={require("../assets/img/roupas.jpg")}
          nome={"Loja de Roupas"}
          texto={
            "Descubra a moda dos seus sonhos em nossa loja de roupas, onde estilo e qualidade se encontram. Encontre as últimas tendências e peças exclusivas para expressar sua individualidade com confiança."
          }
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Roupas")}
        />
        <BodyPages
          foto={require("../assets/img/lembrancas.jpg")}
          nome={"Loja de Lembranças"}
          texto={"Lembranças únicas para momentos especiais."}
          botao={"Saiba Mais"}
          rota={() => navigation.navigate("Lembrancas")}
        />
      </ScrollView>
    </Header>
  );
};

export default Lojas;
